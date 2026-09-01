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
        "start": 71,
        "end": 73
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 75
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 82
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 84,
        "end": 86
      },
      "expression": false,
      "start": 56,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 104
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
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
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 106,
              "end": 112
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 113
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 115,
        "end": 117
      },
      "expression": false,
      "start": 87,
      "end": 117
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 135
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 173
              },
              "id": null,
              "generator": false,
              "start": 152,
              "end": 173
            },
            "start": 145,
            "end": 174
          }
        ],
        "start": 143,
        "end": 176
      },
      "expression": false,
      "start": 118,
      "end": 176
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 194
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 200
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 200
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 244
                },
                "id": null,
                "generator": false,
                "start": 223,
                "end": 244
              },
              "id": null,
              "generator": false,
              "start": 211,
              "end": 244
            },
            "start": 204,
            "end": 245
          }
        ],
        "start": 202,
        "end": 247
      },
      "expression": false,
      "start": 177,
      "end": 247
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 265
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 271
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 271
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 280
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 273,
          "end": 280
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 282,
        "end": 285
      },
      "expression": false,
      "start": 248,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 303
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 305
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 309
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 318
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 311,
          "end": 318
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 350
              },
              "id": null,
              "generator": false,
              "start": 329,
              "end": 350
            },
            "start": 322,
            "end": 351
          }
        ],
        "start": 320,
        "end": 353
      },
      "expression": false,
      "start": 286,
      "end": 353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 371
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 373
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 377
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 386
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 379,
          "end": 386
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 430
                },
                "id": null,
                "generator": false,
                "start": 409,
                "end": 430
              },
              "id": null,
              "generator": false,
              "start": 397,
              "end": 430
            },
            "start": 390,
            "end": 431
          }
        ],
        "start": 388,
        "end": 433
      },
      "expression": false,
      "start": 354,
      "end": 433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 451
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 471
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 475
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 489
              },
              "id": null,
              "generator": false,
              "start": 463,
              "end": 489
            },
            "start": 456,
            "end": 490
          }
        ],
        "start": 454,
        "end": 492
      },
      "expression": false,
      "start": 434,
      "end": 492
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 510
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 530
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 534
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 534
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 560
                },
                "id": null,
                "generator": false,
                "start": 539,
                "end": 560
              },
              "id": null,
              "generator": false,
              "start": 522,
              "end": 560
            },
            "start": 515,
            "end": 561
          }
        ],
        "start": 513,
        "end": 563
      },
      "expression": false,
      "start": 493,
      "end": 563
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 582
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 584
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 588
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 588
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": true,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 659
                        },
                        "id": null,
                        "generator": false,
                        "start": 638,
                        "end": 659
                      },
                      "start": 631,
                      "end": 660
                    }
                  ],
                  "start": 629,
                  "end": 662
                },
                "expression": false,
                "start": 611,
                "end": 662
              },
              "id": null,
              "generator": false,
              "start": 599,
              "end": 662
            },
            "start": 592,
            "end": 663
          }
        ],
        "start": 590,
        "end": 665
      },
      "expression": false,
      "start": 564,
      "end": 665
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 678
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 702
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 716
              },
              "id": null,
              "generator": false,
              "start": 690,
              "end": 716
            },
            "start": 683,
            "end": 717
          }
        ],
        "start": 681,
        "end": 719
      },
      "expression": false,
      "start": 666,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 732
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 751,
                    "end": 752
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 756
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 751,
                  "end": 756
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 782
                },
                "id": null,
                "generator": false,
                "start": 761,
                "end": 782
              },
              "id": null,
              "generator": false,
              "start": 744,
              "end": 782
            },
            "start": 737,
            "end": 783
          }
        ],
        "start": 735,
        "end": 785
      },
      "expression": false,
      "start": 720,
      "end": 785
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 795,
        "end": 796
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 813
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 823,
                      "end": 824
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 826,
                        "end": 827
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 831
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 826,
                      "end": 831
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 836,
                    "end": 838
                  },
                  "id": null,
                  "generator": false,
                  "start": 816,
                  "end": 838
                },
                "definite": false,
                "start": 811,
                "end": 838
              }
            ],
            "declare": false,
            "start": 805,
            "end": 839
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 852
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
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
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 864,
                            "end": 865
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 868,
                            "end": 869
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 863,
                          "end": 869
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 862,
                      "end": 870
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 875,
                    "end": 877
                  },
                  "id": null,
                  "generator": false,
                  "start": 855,
                  "end": 877
                },
                "definite": false,
                "start": 850,
                "end": 877
              }
            ],
            "declare": false,
            "start": 844,
            "end": 878
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 891
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 901,
                        "end": 902
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 905,
                        "end": 906
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 901,
                      "end": 906
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 932,
                            "end": 941
                          },
                          "id": null,
                          "generator": false,
                          "start": 920,
                          "end": 941
                        },
                        "start": 913,
                        "end": 942
                      }
                    ],
                    "start": 911,
                    "end": 944
                  },
                  "id": null,
                  "generator": false,
                  "start": 894,
                  "end": 944
                },
                "definite": false,
                "start": 889,
                "end": 944
              }
            ],
            "declare": false,
            "start": 883,
            "end": 945
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 956,
                  "end": 958
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 968,
                        "end": 969
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 972,
                        "end": 973
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 968,
                      "end": 973
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1011,
                              "end": 1020
                            },
                            "id": null,
                            "generator": false,
                            "start": 999,
                            "end": 1020
                          },
                          "id": null,
                          "generator": false,
                          "start": 987,
                          "end": 1020
                        },
                        "start": 980,
                        "end": 1021
                      }
                    ],
                    "start": 978,
                    "end": 1023
                  },
                  "id": null,
                  "generator": false,
                  "start": 961,
                  "end": 1023
                },
                "definite": false,
                "start": 956,
                "end": 1023
              }
            ],
            "declare": false,
            "start": 950,
            "end": 1024
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
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1037
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1047,
                        "end": 1048
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1051,
                        "end": 1052
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1052
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1061
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1054,
                      "end": 1061
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1066,
                    "end": 1069
                  },
                  "id": null,
                  "generator": false,
                  "start": 1040,
                  "end": 1069
                },
                "definite": false,
                "start": 1035,
                "end": 1069
              }
            ],
            "declare": false,
            "start": 1029,
            "end": 1070
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
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1083
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1093,
                        "end": 1094
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1097,
                        "end": 1098
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1093,
                      "end": 1098
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1103,
                        "end": 1107
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1100,
                      "end": 1107
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1133,
                            "end": 1142
                          },
                          "id": null,
                          "generator": false,
                          "start": 1121,
                          "end": 1142
                        },
                        "start": 1114,
                        "end": 1143
                      }
                    ],
                    "start": 1112,
                    "end": 1145
                  },
                  "id": null,
                  "generator": false,
                  "start": 1086,
                  "end": 1145
                },
                "definite": false,
                "start": 1081,
                "end": 1145
              }
            ],
            "declare": false,
            "start": 1075,
            "end": 1146
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
                  "name": "a7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1159
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1169,
                        "end": 1170
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1174
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1174
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1179,
                        "end": 1183
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1176,
                      "end": 1183
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1221,
                              "end": 1230
                            },
                            "id": null,
                            "generator": false,
                            "start": 1209,
                            "end": 1230
                          },
                          "id": null,
                          "generator": false,
                          "start": 1197,
                          "end": 1230
                        },
                        "start": 1190,
                        "end": 1231
                      }
                    ],
                    "start": 1188,
                    "end": 1233
                  },
                  "id": null,
                  "generator": false,
                  "start": 1162,
                  "end": 1233
                },
                "definite": false,
                "start": 1157,
                "end": 1233
              }
            ],
            "declare": false,
            "start": 1151,
            "end": 1234
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
                  "name": "a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1247
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1278,
                                "end": 1279
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1283
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1278,
                              "end": 1283
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1288,
                            "end": 1297
                          },
                          "id": null,
                          "generator": false,
                          "start": 1271,
                          "end": 1297
                        },
                        "start": 1264,
                        "end": 1298
                      }
                    ],
                    "start": 1262,
                    "end": 1300
                  },
                  "id": null,
                  "generator": false,
                  "start": 1250,
                  "end": 1300
                },
                "definite": false,
                "start": 1245,
                "end": 1300
              }
            ],
            "declare": false,
            "start": 1239,
            "end": 1301
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
                  "name": "a9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1314
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1345,
                                "end": 1346
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1349,
                                "end": 1350
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1345,
                              "end": 1350
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1367,
                              "end": 1376
                            },
                            "id": null,
                            "generator": false,
                            "start": 1355,
                            "end": 1376
                          },
                          "id": null,
                          "generator": false,
                          "start": 1338,
                          "end": 1376
                        },
                        "start": 1331,
                        "end": 1377
                      }
                    ],
                    "start": 1329,
                    "end": 1379
                  },
                  "id": null,
                  "generator": false,
                  "start": 1317,
                  "end": 1379
                },
                "definite": false,
                "start": 1312,
                "end": 1379
              }
            ],
            "declare": false,
            "start": 1306,
            "end": 1380
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
                  "name": "a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1391,
                  "end": 1394
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1405
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1404,
                      "end": 1409
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": true,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1474,
                                      "end": 1483
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1462,
                                    "end": 1483
                                  },
                                  "start": 1455,
                                  "end": 1484
                                }
                              ],
                              "start": 1453,
                              "end": 1486
                            },
                            "expression": false,
                            "start": 1435,
                            "end": 1486
                          },
                          "id": null,
                          "generator": false,
                          "start": 1423,
                          "end": 1486
                        },
                        "start": 1416,
                        "end": 1487
                      }
                    ],
                    "start": 1414,
                    "end": 1489
                  },
                  "id": null,
                  "generator": false,
                  "start": 1397,
                  "end": 1489
                },
                "definite": false,
                "start": 1391,
                "end": 1489
              }
            ],
            "declare": false,
            "start": 1385,
            "end": 1490
          }
        ],
        "start": 799,
        "end": 1492
      },
      "expression": false,
      "start": 786,
      "end": 1492
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 1492
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 56,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 87,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 118,
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
    "value": "f3",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 145,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 164,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 177,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 204,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 220,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 232,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 235,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 248,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 286,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 292,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 322,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
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
    "value": "=>",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 341,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 354,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 409,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 421,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 434,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 440,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 456,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 463,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 477,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 480,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 493,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 515,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 536,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 539,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 548,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 551,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 564,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 570,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 592,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 608,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 611,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 617,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 631,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 647,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 650,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 666,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 683,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 690,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 701,
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
    "value": "=>",
    "start": 704,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 707,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 737,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 744,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 758,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 761,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 773,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 786,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 805,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 811,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "=>",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 844,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 850,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 855,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "x",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 872,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 883,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 889,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 894,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 908,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 913,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 920,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 929,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 932,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 950,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 956,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 972,
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
    "value": "=>",
    "start": 975,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 980,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 987,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
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
    "value": "=>",
    "start": 996,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1008,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1011,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1040,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1093,
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
    "value": "z",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1100,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1103,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1114,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1121,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1130,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1133,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1151,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1157,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1162,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1179,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1190,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1197,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1209,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
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
    "value": "=>",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1221,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1239,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1250,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1271,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "arguments",
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
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1306,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1317,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1331,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1338,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1349,
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
    "value": "=>",
    "start": 1352,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1355,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1367,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1385,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1397,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1411,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1416,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1423,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1432,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1435,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1441,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1455,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1462,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1471,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1474,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1491,
    "end": 1492
  }
]
```

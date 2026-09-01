__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 27,
                    "end": 33
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 38,
                        "end": 45
                      },
                      "start": 38,
                      "end": 47
                    },
                    "start": 35,
                    "end": 47
                  }
                ],
                "start": 18,
                "end": 48
              },
              "start": 16,
              "end": 48
            },
            "start": 14,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 48
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 80,
                        "end": 87
                      },
                      "start": 80,
                      "end": 89
                    },
                    "start": 77,
                    "end": 89
                  }
                ],
                "start": 68,
                "end": 90
              },
              "start": 66,
              "end": 90
            },
            "start": 64,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 90
        }
      ],
      "declare": true,
      "start": 50,
      "end": 91
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 114,
                        "end": 121
                      },
                      "start": 114,
                      "end": 123
                    },
                    "start": 111,
                    "end": 123
                  }
                ],
                "start": 110,
                "end": 124
              },
              "start": 108,
              "end": 124
            },
            "start": 106,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 124
        }
      ],
      "declare": true,
      "start": 92,
      "end": 125
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 144,
                "end": 146
              },
              "start": 142,
              "end": 146
            },
            "start": 140,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 146
        }
      ],
      "declare": true,
      "start": 126,
      "end": 147
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
            "name": "f00",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 171
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 174,
                            "end": 180
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 182,
                            "end": 188
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 190,
                            "end": 197
                          }
                        ],
                        "start": 173,
                        "end": 198
                      },
                      "start": 171,
                      "end": 198
                    },
                    "value": null,
                    "start": 167,
                    "end": 198
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 203,
                    "end": 207
                  },
                  "start": 200,
                  "end": 207
                },
                "start": 166,
                "end": 207
              },
              "start": 164,
              "end": 207
            },
            "start": 161,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 161,
          "end": 207
        }
      ],
      "declare": true,
      "start": 149,
      "end": 208
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
            "name": "f01",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 230,
                        "end": 236
                      },
                      "start": 228,
                      "end": 236
                    },
                    "start": 227,
                    "end": 236
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 242
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 245,
                            "end": 251
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 253,
                            "end": 260
                          }
                        ],
                        "start": 244,
                        "end": 261
                      },
                      "start": 242,
                      "end": 261
                    },
                    "value": null,
                    "start": 238,
                    "end": 261
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 266,
                    "end": 270
                  },
                  "start": 263,
                  "end": 270
                },
                "start": 226,
                "end": 270
              },
              "start": 224,
              "end": 270
            },
            "start": 221,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 221,
          "end": 270
        }
      ],
      "declare": true,
      "start": 209,
      "end": 271
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
            "name": "f02",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 293,
                        "end": 299
                      },
                      "start": 291,
                      "end": 299
                    },
                    "start": 290,
                    "end": 299
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      },
                      "start": 302,
                      "end": 310
                    },
                    "start": 301,
                    "end": 310
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 316
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 319,
                            "end": 326
                          }
                        ],
                        "start": 318,
                        "end": 327
                      },
                      "start": 316,
                      "end": 327
                    },
                    "value": null,
                    "start": 312,
                    "end": 327
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 332,
                    "end": 336
                  },
                  "start": 329,
                  "end": 336
                },
                "start": 289,
                "end": 336
              },
              "start": 287,
              "end": 336
            },
            "start": 284,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 284,
          "end": 336
        }
      ],
      "declare": true,
      "start": 272,
      "end": 337
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
            "name": "f03",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 359,
                        "end": 365
                      },
                      "start": 357,
                      "end": 365
                    },
                    "start": 356,
                    "end": 365
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 370,
                        "end": 376
                      },
                      "start": 368,
                      "end": 376
                    },
                    "start": 367,
                    "end": 376
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 381,
                        "end": 388
                      },
                      "start": 379,
                      "end": 388
                    },
                    "start": 378,
                    "end": 388
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 393,
                    "end": 397
                  },
                  "start": 390,
                  "end": 397
                },
                "start": 355,
                "end": 397
              },
              "start": 353,
              "end": 397
            },
            "start": 350,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 350,
          "end": 397
        }
      ],
      "declare": true,
      "start": 338,
      "end": 398
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
            "name": "f04",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 420,
                        "end": 426
                      },
                      "start": 418,
                      "end": 426
                    },
                    "start": 417,
                    "end": 426
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 431,
                        "end": 437
                      },
                      "start": 429,
                      "end": 437
                    },
                    "start": 428,
                    "end": 437
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 442,
                        "end": 449
                      },
                      "start": 440,
                      "end": 449
                    },
                    "start": 439,
                    "end": 449
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 455
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 457,
                        "end": 459
                      },
                      "start": 455,
                      "end": 459
                    },
                    "value": null,
                    "start": 451,
                    "end": 459
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 464,
                    "end": 468
                  },
                  "start": 461,
                  "end": 468
                },
                "start": 416,
                "end": 468
              },
              "start": 414,
              "end": 468
            },
            "start": 411,
            "end": 468
          },
          "init": null,
          "definite": false,
          "start": 411,
          "end": 468
        }
      ],
      "declare": true,
      "start": 399,
      "end": 469
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 493
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 496,
                            "end": 502
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 504,
                            "end": 510
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSBooleanKeyword",
                                "start": 515,
                                "end": 522
                              },
                              "start": 515,
                              "end": 524
                            },
                            "start": 512,
                            "end": 524
                          }
                        ],
                        "start": 495,
                        "end": 525
                      },
                      "start": 493,
                      "end": 525
                    },
                    "value": null,
                    "start": 489,
                    "end": 525
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 530,
                    "end": 534
                  },
                  "start": 527,
                  "end": 534
                },
                "start": 488,
                "end": 534
              },
              "start": 486,
              "end": 534
            },
            "start": 483,
            "end": 534
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 534
        }
      ],
      "declare": true,
      "start": 471,
      "end": 535
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 557,
                        "end": 563
                      },
                      "start": 555,
                      "end": 563
                    },
                    "start": 554,
                    "end": 563
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 569
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 572,
                            "end": 578
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSBooleanKeyword",
                                "start": 583,
                                "end": 590
                              },
                              "start": 583,
                              "end": 592
                            },
                            "start": 580,
                            "end": 592
                          }
                        ],
                        "start": 571,
                        "end": 593
                      },
                      "start": 569,
                      "end": 593
                    },
                    "value": null,
                    "start": 565,
                    "end": 593
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 598,
                    "end": 602
                  },
                  "start": 595,
                  "end": 602
                },
                "start": 553,
                "end": 602
              },
              "start": 551,
              "end": 602
            },
            "start": 548,
            "end": 602
          },
          "init": null,
          "definite": false,
          "start": 548,
          "end": 602
        }
      ],
      "declare": true,
      "start": 536,
      "end": 603
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 625,
                        "end": 631
                      },
                      "start": 623,
                      "end": 631
                    },
                    "start": 622,
                    "end": 631
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 636,
                        "end": 642
                      },
                      "start": 634,
                      "end": 642
                    },
                    "start": 633,
                    "end": 642
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 648
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSBooleanKeyword",
                                "start": 654,
                                "end": 661
                              },
                              "start": 654,
                              "end": 663
                            },
                            "start": 651,
                            "end": 663
                          }
                        ],
                        "start": 650,
                        "end": 664
                      },
                      "start": 648,
                      "end": 664
                    },
                    "value": null,
                    "start": 644,
                    "end": 664
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 669,
                    "end": 673
                  },
                  "start": 666,
                  "end": 673
                },
                "start": 621,
                "end": 673
              },
              "start": 619,
              "end": 673
            },
            "start": 616,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 616,
          "end": 673
        }
      ],
      "declare": true,
      "start": 604,
      "end": 674
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 696,
                        "end": 702
                      },
                      "start": 694,
                      "end": 702
                    },
                    "start": 693,
                    "end": 702
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 707,
                        "end": 713
                      },
                      "start": 705,
                      "end": 713
                    },
                    "start": 704,
                    "end": 713
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 719
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSBooleanKeyword",
                          "start": 721,
                          "end": 728
                        },
                        "start": 721,
                        "end": 730
                      },
                      "start": 719,
                      "end": 730
                    },
                    "value": null,
                    "start": 715,
                    "end": 730
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 735,
                    "end": 739
                  },
                  "start": 732,
                  "end": 739
                },
                "start": 692,
                "end": 739
              },
              "start": 690,
              "end": 739
            },
            "start": 687,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 687,
          "end": 739
        }
      ],
      "declare": true,
      "start": 675,
      "end": 740
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 761,
                    "end": 767
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 769,
                    "end": 775
                  }
                ],
                "start": 760,
                "end": 776
              },
              "start": 758,
              "end": 776
            },
            "start": 756,
            "end": 776
          },
          "init": null,
          "definite": false,
          "start": 756,
          "end": 776
        }
      ],
      "declare": true,
      "start": 742,
      "end": 777
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
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 797,
                    "end": 803
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 805,
                    "end": 811
                  }
                ],
                "start": 796,
                "end": 812
              },
              "start": 794,
              "end": 812
            },
            "start": 792,
            "end": 812
          },
          "init": null,
          "definite": false,
          "start": 792,
          "end": 812
        }
      ],
      "declare": true,
      "start": 778,
      "end": 813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 815,
          "end": 818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 819,
            "end": 821
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 823,
            "end": 830
          }
        ],
        "optional": false,
        "start": 815,
        "end": 831
      },
      "directive": null,
      "start": 815,
      "end": 832
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 833,
          "end": 836
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 837,
            "end": 839
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 841,
            "end": 848
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 850,
            "end": 854
          }
        ],
        "optional": false,
        "start": 833,
        "end": 855
      },
      "directive": null,
      "start": 833,
      "end": 856
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 857,
          "end": 860
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 861,
            "end": 863
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 865,
            "end": 872
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 874,
            "end": 878
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 880,
            "end": 885
          }
        ],
        "optional": false,
        "start": 857,
        "end": 886
      },
      "directive": null,
      "start": 857,
      "end": 887
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 888,
          "end": 891
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 894
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 895,
              "end": 896
            },
            "optional": false,
            "computed": true,
            "start": 892,
            "end": 897
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 901
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 902,
              "end": 903
            },
            "optional": false,
            "computed": true,
            "start": 899,
            "end": 904
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 908
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 909,
              "end": 910
            },
            "optional": false,
            "computed": true,
            "start": 906,
            "end": 911
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 915
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 916,
              "end": 917
            },
            "optional": false,
            "computed": true,
            "start": 913,
            "end": 918
          }
        ],
        "optional": false,
        "start": 888,
        "end": 919
      },
      "directive": null,
      "start": 888,
      "end": 920
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 921,
          "end": 924
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 930
            },
            "start": 925,
            "end": 930
          }
        ],
        "optional": false,
        "start": 921,
        "end": 931
      },
      "directive": null,
      "start": 921,
      "end": 932
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 933,
          "end": 936
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 937,
            "end": 939
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 946
            },
            "start": 941,
            "end": 946
          }
        ],
        "optional": false,
        "start": 933,
        "end": 947
      },
      "directive": null,
      "start": 933,
      "end": 948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 952
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 953,
            "end": 955
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 957,
            "end": 964
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 971
            },
            "start": 966,
            "end": 971
          }
        ],
        "optional": false,
        "start": 949,
        "end": 972
      },
      "directive": null,
      "start": 949,
      "end": 973
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 974,
          "end": 977
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 978,
            "end": 980
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 982,
            "end": 989
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 991,
            "end": 995
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1002
            },
            "start": 997,
            "end": 1002
          }
        ],
        "optional": false,
        "start": 974,
        "end": 1003
      },
      "directive": null,
      "start": 974,
      "end": 1004
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null,
          "start": 1005,
          "end": 1008
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1009,
            "end": 1011
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1013,
            "end": 1020
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1022,
            "end": 1026
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1033
            },
            "start": 1028,
            "end": 1033
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1035,
            "end": 1040
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1047
            },
            "start": 1042,
            "end": 1047
          }
        ],
        "optional": false,
        "start": 1005,
        "end": 1048
      },
      "directive": null,
      "start": 1005,
      "end": 1049
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1051,
          "end": 1054
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1055,
            "end": 1057
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1059,
            "end": 1066
          }
        ],
        "optional": false,
        "start": 1051,
        "end": 1067
      },
      "directive": null,
      "start": 1051,
      "end": 1068
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1072
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1073,
            "end": 1075
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1077,
            "end": 1084
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1086,
            "end": 1090
          }
        ],
        "optional": false,
        "start": 1069,
        "end": 1091
      },
      "directive": null,
      "start": 1069,
      "end": 1092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1093,
          "end": 1096
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1097,
            "end": 1099
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1101,
            "end": 1108
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1110,
            "end": 1114
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1116,
            "end": 1121
          }
        ],
        "optional": false,
        "start": 1093,
        "end": 1122
      },
      "directive": null,
      "start": 1093,
      "end": 1123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1124,
          "end": 1127
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1130
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1131,
              "end": 1132
            },
            "optional": false,
            "computed": true,
            "start": 1128,
            "end": 1133
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1137
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1138,
              "end": 1139
            },
            "optional": false,
            "computed": true,
            "start": 1135,
            "end": 1140
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1142,
              "end": 1144
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1145,
              "end": 1146
            },
            "optional": false,
            "computed": true,
            "start": 1142,
            "end": 1147
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1151
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1152,
              "end": 1153
            },
            "optional": false,
            "computed": true,
            "start": 1149,
            "end": 1154
          }
        ],
        "optional": false,
        "start": 1124,
        "end": 1155
      },
      "directive": null,
      "start": 1124,
      "end": 1156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1166
            },
            "start": 1161,
            "end": 1166
          }
        ],
        "optional": false,
        "start": 1157,
        "end": 1167
      },
      "directive": null,
      "start": 1157,
      "end": 1168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1169,
          "end": 1172
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1173,
            "end": 1175
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1180,
              "end": 1182
            },
            "start": 1177,
            "end": 1182
          }
        ],
        "optional": false,
        "start": 1169,
        "end": 1183
      },
      "directive": null,
      "start": 1169,
      "end": 1184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1189,
            "end": 1191
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1193,
            "end": 1200
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1207
            },
            "start": 1202,
            "end": 1207
          }
        ],
        "optional": false,
        "start": 1185,
        "end": 1208
      },
      "directive": null,
      "start": 1185,
      "end": 1209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1210,
          "end": 1213
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1214,
            "end": 1216
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1218,
            "end": 1225
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1227,
            "end": 1231
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1238
            },
            "start": 1233,
            "end": 1238
          }
        ],
        "optional": false,
        "start": 1210,
        "end": 1239
      },
      "directive": null,
      "start": 1210,
      "end": 1240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1241,
          "end": 1244
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1245,
            "end": 1247
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1249,
            "end": 1256
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1258,
            "end": 1262
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1269
            },
            "start": 1264,
            "end": 1269
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1271,
            "end": 1276
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1283
            },
            "start": 1278,
            "end": 1283
          }
        ],
        "optional": false,
        "start": 1241,
        "end": 1284
      },
      "directive": null,
      "start": 1241,
      "end": 1285
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1287,
          "end": 1290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1291,
            "end": 1293
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1295,
            "end": 1302
          }
        ],
        "optional": false,
        "start": 1287,
        "end": 1303
      },
      "directive": null,
      "start": 1287,
      "end": 1304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1305,
          "end": 1308
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1309,
            "end": 1311
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1313,
            "end": 1320
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1322,
            "end": 1326
          }
        ],
        "optional": false,
        "start": 1305,
        "end": 1327
      },
      "directive": null,
      "start": 1305,
      "end": 1328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1329,
          "end": 1332
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1333,
            "end": 1335
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1337,
            "end": 1344
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1346,
            "end": 1350
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1352,
            "end": 1357
          }
        ],
        "optional": false,
        "start": 1329,
        "end": 1358
      },
      "directive": null,
      "start": 1329,
      "end": 1359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1360,
          "end": 1363
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1364,
              "end": 1366
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1367,
              "end": 1368
            },
            "optional": false,
            "computed": true,
            "start": 1364,
            "end": 1369
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1373
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1374,
              "end": 1375
            },
            "optional": false,
            "computed": true,
            "start": 1371,
            "end": 1376
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1380
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1381,
              "end": 1382
            },
            "optional": false,
            "computed": true,
            "start": 1378,
            "end": 1383
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1387
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1388,
              "end": 1389
            },
            "optional": false,
            "computed": true,
            "start": 1385,
            "end": 1390
          }
        ],
        "optional": false,
        "start": 1360,
        "end": 1391
      },
      "directive": null,
      "start": 1360,
      "end": 1392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1393,
          "end": 1396
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1402
            },
            "start": 1397,
            "end": 1402
          }
        ],
        "optional": false,
        "start": 1393,
        "end": 1403
      },
      "directive": null,
      "start": 1393,
      "end": 1404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1405,
          "end": 1408
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1409,
            "end": 1411
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1416,
              "end": 1418
            },
            "start": 1413,
            "end": 1418
          }
        ],
        "optional": false,
        "start": 1405,
        "end": 1419
      },
      "directive": null,
      "start": 1405,
      "end": 1420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1421,
          "end": 1424
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1425,
            "end": 1427
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1429,
            "end": 1436
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1443
            },
            "start": 1438,
            "end": 1443
          }
        ],
        "optional": false,
        "start": 1421,
        "end": 1444
      },
      "directive": null,
      "start": 1421,
      "end": 1445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1450,
            "end": 1452
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1454,
            "end": 1461
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1463,
            "end": 1467
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1472,
              "end": 1474
            },
            "start": 1469,
            "end": 1474
          }
        ],
        "optional": false,
        "start": 1446,
        "end": 1475
      },
      "directive": null,
      "start": 1446,
      "end": 1476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1480
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1481,
            "end": 1483
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1485,
            "end": 1492
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1494,
            "end": 1498
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1505
            },
            "start": 1500,
            "end": 1505
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1507,
            "end": 1512
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1519
            },
            "start": 1514,
            "end": 1519
          }
        ],
        "optional": false,
        "start": 1477,
        "end": 1520
      },
      "directive": null,
      "start": 1477,
      "end": 1521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1523,
          "end": 1526
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1527,
            "end": 1529
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1531,
            "end": 1538
          }
        ],
        "optional": false,
        "start": 1523,
        "end": 1539
      },
      "directive": null,
      "start": 1523,
      "end": 1540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1541,
          "end": 1544
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1545,
            "end": 1547
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1549,
            "end": 1556
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1558,
            "end": 1562
          }
        ],
        "optional": false,
        "start": 1541,
        "end": 1563
      },
      "directive": null,
      "start": 1541,
      "end": 1564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1565,
          "end": 1568
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1569,
            "end": 1571
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1573,
            "end": 1580
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1582,
            "end": 1586
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1588,
            "end": 1593
          }
        ],
        "optional": false,
        "start": 1565,
        "end": 1594
      },
      "directive": null,
      "start": 1565,
      "end": 1595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1596,
          "end": 1599
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1600,
              "end": 1602
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1603,
              "end": 1604
            },
            "optional": false,
            "computed": true,
            "start": 1600,
            "end": 1605
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1607,
              "end": 1609
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1610,
              "end": 1611
            },
            "optional": false,
            "computed": true,
            "start": 1607,
            "end": 1612
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1616
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1617,
              "end": 1618
            },
            "optional": false,
            "computed": true,
            "start": 1614,
            "end": 1619
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1623
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1624,
              "end": 1625
            },
            "optional": false,
            "computed": true,
            "start": 1621,
            "end": 1626
          }
        ],
        "optional": false,
        "start": 1596,
        "end": 1627
      },
      "directive": null,
      "start": 1596,
      "end": 1628
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1632
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1636,
              "end": 1638
            },
            "start": 1633,
            "end": 1638
          }
        ],
        "optional": false,
        "start": 1629,
        "end": 1639
      },
      "directive": null,
      "start": 1629,
      "end": 1640
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1641,
          "end": 1644
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1645,
            "end": 1647
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1652,
              "end": 1654
            },
            "start": 1649,
            "end": 1654
          }
        ],
        "optional": false,
        "start": 1641,
        "end": 1655
      },
      "directive": null,
      "start": 1641,
      "end": 1656
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1657,
          "end": 1660
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1661,
            "end": 1663
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1665,
            "end": 1672
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1679
            },
            "start": 1674,
            "end": 1679
          }
        ],
        "optional": false,
        "start": 1657,
        "end": 1680
      },
      "directive": null,
      "start": 1657,
      "end": 1681
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1682,
          "end": 1685
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1686,
            "end": 1688
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1690,
            "end": 1697
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1699,
            "end": 1703
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1708,
              "end": 1710
            },
            "start": 1705,
            "end": 1710
          }
        ],
        "optional": false,
        "start": 1682,
        "end": 1711
      },
      "directive": null,
      "start": 1682,
      "end": 1712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1713,
          "end": 1716
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1717,
            "end": 1719
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1721,
            "end": 1728
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1730,
            "end": 1734
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1741
            },
            "start": 1736,
            "end": 1741
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1743,
            "end": 1748
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1753,
              "end": 1755
            },
            "start": 1750,
            "end": 1755
          }
        ],
        "optional": false,
        "start": 1713,
        "end": 1756
      },
      "directive": null,
      "start": 1713,
      "end": 1757
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
            "name": "f20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1779,
                        "end": 1780
                      },
                      "constraint": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 1789,
                          "end": 1796
                        },
                        "start": 1789,
                        "end": 1798
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1779,
                      "end": 1798
                    }
                  ],
                  "start": 1778,
                  "end": 1799
                },
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1803,
                      "end": 1807
                    },
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
                          "start": 1809,
                          "end": 1810
                        },
                        "typeArguments": null,
                        "start": 1809,
                        "end": 1810
                      },
                      "start": 1807,
                      "end": 1810
                    },
                    "value": null,
                    "start": 1800,
                    "end": 1810
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
                      "start": 1815,
                      "end": 1816
                    },
                    "typeArguments": null,
                    "start": 1815,
                    "end": 1816
                  },
                  "start": 1812,
                  "end": 1816
                },
                "start": 1778,
                "end": 1816
              },
              "start": 1776,
              "end": 1816
            },
            "start": 1773,
            "end": 1816
          },
          "init": null,
          "definite": false,
          "start": 1773,
          "end": 1816
        }
      ],
      "declare": true,
      "start": 1759,
      "end": 1817
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1819,
          "end": 1822
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1826,
              "end": 1828
            },
            "start": 1823,
            "end": 1828
          }
        ],
        "optional": false,
        "start": 1819,
        "end": 1829
      },
      "directive": null,
      "start": 1819,
      "end": 1830
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1831,
          "end": 1834
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1835,
            "end": 1837
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1844
            },
            "start": 1839,
            "end": 1844
          }
        ],
        "optional": false,
        "start": 1831,
        "end": 1845
      },
      "directive": null,
      "start": 1831,
      "end": 1846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1847,
          "end": 1850
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1851,
            "end": 1853
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1855,
            "end": 1862
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1867,
              "end": 1869
            },
            "start": 1864,
            "end": 1869
          }
        ],
        "optional": false,
        "start": 1847,
        "end": 1870
      },
      "directive": null,
      "start": 1847,
      "end": 1871
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1872,
          "end": 1875
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1876,
            "end": 1878
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1880,
            "end": 1887
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1892,
              "end": 1894
            },
            "start": 1889,
            "end": 1894
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1896,
            "end": 1900
          }
        ],
        "optional": false,
        "start": 1872,
        "end": 1901
      },
      "directive": null,
      "start": 1872,
      "end": 1902
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 1909,
        "end": 1912
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 1915,
          "end": 1925
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "start": 1930,
                      "end": 1936
                    },
                    "start": 1928,
                    "end": 1936
                  },
                  "start": 1927,
                  "end": 1936
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1941,
                      "end": 1947
                    },
                    "start": 1939,
                    "end": 1947
                  },
                  "start": 1938,
                  "end": 1947
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1952,
                    "end": 1953
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 1955,
                        "end": 1962
                      },
                      "start": 1955,
                      "end": 1964
                    },
                    "start": 1953,
                    "end": 1964
                  },
                  "value": null,
                  "start": 1949,
                  "end": 1964
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1969,
                  "end": 1973
                },
                "start": 1966,
                "end": 1973
              },
              "start": 1926,
              "end": 1973
            }
          ],
          "start": 1925,
          "end": 1974
        },
        "start": 1915,
        "end": 1974
      },
      "declare": false,
      "start": 1904,
      "end": 1975
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1984
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 1987,
          "end": 1997
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2002,
                    "end": 2006
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2009,
                          "end": 2015
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2017,
                          "end": 2023
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 2028,
                              "end": 2035
                            },
                            "start": 2028,
                            "end": 2037
                          },
                          "start": 2025,
                          "end": 2037
                        }
                      ],
                      "start": 2008,
                      "end": 2038
                    },
                    "start": 2006,
                    "end": 2038
                  },
                  "value": null,
                  "start": 1999,
                  "end": 2038
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2043,
                  "end": 2047
                },
                "start": 2040,
                "end": 2047
              },
              "start": 1998,
              "end": 2047
            }
          ],
          "start": 1997,
          "end": 2048
        },
        "start": 1987,
        "end": 2048
      },
      "declare": false,
      "start": 1976,
      "end": 2049
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 2055,
        "end": 2058
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2061,
          "end": 2082
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
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
                      "start": 2091,
                      "end": 2097
                    },
                    "start": 2089,
                    "end": 2097
                  },
                  "start": 2088,
                  "end": 2097
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2102,
                      "end": 2108
                    },
                    "start": 2100,
                    "end": 2108
                  },
                  "start": 2099,
                  "end": 2108
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2113,
                    "end": 2114
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 2116,
                        "end": 2123
                      },
                      "start": 2116,
                      "end": 2125
                    },
                    "start": 2114,
                    "end": 2125
                  },
                  "value": null,
                  "start": 2110,
                  "end": 2125
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2130,
                  "end": 2134
                },
                "start": 2127,
                "end": 2134
              },
              "start": 2083,
              "end": 2134
            }
          ],
          "start": 2082,
          "end": 2135
        },
        "start": 2061,
        "end": 2135
      },
      "declare": false,
      "start": 2050,
      "end": 2136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 2142,
        "end": 2145
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2148,
          "end": 2169
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2178,
                    "end": 2182
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2185,
                          "end": 2191
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2193,
                          "end": 2199
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 2204,
                              "end": 2211
                            },
                            "start": 2204,
                            "end": 2213
                          },
                          "start": 2201,
                          "end": 2213
                        }
                      ],
                      "start": 2184,
                      "end": 2214
                    },
                    "start": 2182,
                    "end": 2214
                  },
                  "value": null,
                  "start": 2175,
                  "end": 2214
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2219,
                  "end": 2223
                },
                "start": 2216,
                "end": 2223
              },
              "start": 2170,
              "end": 2223
            }
          ],
          "start": 2169,
          "end": 2224
        },
        "start": 2148,
        "end": 2224
      },
      "declare": false,
      "start": 2137,
      "end": 2225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 2231,
        "end": 2234
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
              "start": 2235,
              "end": 2236
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2245,
                "end": 2248
              },
              "start": 2245,
              "end": 2250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2235,
            "end": 2250
          }
        ],
        "start": 2234,
        "end": 2251
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2254,
          "end": 2264
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "start": 2269,
                      "end": 2275
                    },
                    "start": 2267,
                    "end": 2275
                  },
                  "start": 2266,
                  "end": 2275
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
                    "start": 2280,
                    "end": 2284
                  },
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
                        "start": 2286,
                        "end": 2287
                      },
                      "typeArguments": null,
                      "start": 2286,
                      "end": 2287
                    },
                    "start": 2284,
                    "end": 2287
                  },
                  "value": null,
                  "start": 2277,
                  "end": 2287
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2292,
                  "end": 2296
                },
                "start": 2289,
                "end": 2296
              },
              "start": 2265,
              "end": 2296
            }
          ],
          "start": 2264,
          "end": 2297
        },
        "start": 2254,
        "end": 2297
      },
      "declare": false,
      "start": 2226,
      "end": 2298
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 2304,
        "end": 2307
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T05",
          "optional": false,
          "typeAnnotation": null,
          "start": 2310,
          "end": 2313
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2315,
                  "end": 2321
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 2326,
                      "end": 2333
                    },
                    "start": 2326,
                    "end": 2335
                  },
                  "start": 2323,
                  "end": 2335
                }
              ],
              "start": 2314,
              "end": 2336
            }
          ],
          "start": 2313,
          "end": 2337
        },
        "start": 2310,
        "end": 2337
      },
      "declare": false,
      "start": 2299,
      "end": 2338
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2345,
        "end": 2347
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
              "start": 2348,
              "end": 2349
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 2358,
                "end": 2366
              },
              "typeArguments": null,
              "start": 2358,
              "end": 2366
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2348,
            "end": 2366
          }
        ],
        "start": 2347,
        "end": 2367
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2370,
            "end": 2371
          },
          "typeArguments": null,
          "start": 2370,
          "end": 2371
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "head",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2393,
                      "end": 2394
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2393,
                    "end": 2394
                  },
                  "start": 2387,
                  "end": 2394
                },
                "start": 2385,
                "end": 2394
              },
              "start": 2381,
              "end": 2394
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 2399,
                "end": 2403
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2411,
                      "end": 2412
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2411,
                    "end": 2412
                  },
                  "start": 2405,
                  "end": 2412
                },
                "start": 2403,
                "end": 2412
              },
              "value": null,
              "start": 2396,
              "end": 2412
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2417,
              "end": 2420
            },
            "start": 2414,
            "end": 2420
          },
          "start": 2380,
          "end": 2420
        },
        "trueType": {
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
                "name": "head",
                "optional": false,
                "typeAnnotation": null,
                "start": 2425,
                "end": 2429
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2431,
                    "end": 2432
                  },
                  "typeArguments": null,
                  "start": 2431,
                  "end": 2432
                },
                "start": 2429,
                "end": 2432
              },
              "accessibility": null,
              "static": false,
              "start": 2425,
              "end": 2433
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 2434,
                "end": 2438
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2440,
                    "end": 2441
                  },
                  "typeArguments": null,
                  "start": 2440,
                  "end": 2441
                },
                "start": 2438,
                "end": 2441
              },
              "accessibility": null,
              "static": false,
              "start": 2434,
              "end": 2441
            }
          ],
          "start": 2423,
          "end": 2443
        },
        "falseType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 2446,
            "end": 2449
          },
          "start": 2446,
          "end": 2451
        },
        "start": 2370,
        "end": 2451
      },
      "declare": false,
      "start": 2340,
      "end": 2452
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2462
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "P1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2465,
          "end": 2467
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "start": 2472,
                      "end": 2478
                    },
                    "start": 2470,
                    "end": 2478
                  },
                  "start": 2469,
                  "end": 2478
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2483,
                      "end": 2489
                    },
                    "start": 2481,
                    "end": 2489
                  },
                  "start": 2480,
                  "end": 2489
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2494,
                    "end": 2495
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 2497,
                        "end": 2504
                      },
                      "start": 2497,
                      "end": 2506
                    },
                    "start": 2495,
                    "end": 2506
                  },
                  "value": null,
                  "start": 2491,
                  "end": 2506
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2511,
                  "end": 2515
                },
                "start": 2508,
                "end": 2515
              },
              "start": 2468,
              "end": 2515
            }
          ],
          "start": 2467,
          "end": 2516
        },
        "start": 2465,
        "end": 2516
      },
      "declare": false,
      "start": 2454,
      "end": 2517
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2523,
        "end": 2526
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "P1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2529,
          "end": 2531
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2536,
                    "end": 2537
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2539,
                        "end": 2545
                      },
                      "start": 2539,
                      "end": 2547
                    },
                    "start": 2537,
                    "end": 2547
                  },
                  "value": null,
                  "start": 2533,
                  "end": 2547
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2552,
                  "end": 2556
                },
                "start": 2549,
                "end": 2556
              },
              "start": 2532,
              "end": 2556
            }
          ],
          "start": 2531,
          "end": 2557
        },
        "start": 2529,
        "end": 2557
      },
      "declare": false,
      "start": 2518,
      "end": 2558
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2564,
        "end": 2567
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "P1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2570,
          "end": 2572
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "start": 2577,
                      "end": 2583
                    },
                    "start": 2575,
                    "end": 2583
                  },
                  "start": 2574,
                  "end": 2583
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2588,
                      "end": 2594
                    },
                    "start": 2586,
                    "end": 2594
                  },
                  "start": 2585,
                  "end": 2594
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2599,
                  "end": 2603
                },
                "start": 2596,
                "end": 2603
              },
              "start": 2573,
              "end": 2603
            }
          ],
          "start": 2572,
          "end": 2604
        },
        "start": 2570,
        "end": 2604
      },
      "declare": false,
      "start": 2559,
      "end": 2605
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2605
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 50,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 92,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 126,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 149,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "f00",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 200,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 209,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 260,
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
    "value": "=>",
    "start": 263,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 272,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "f02",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 329,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 338,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 346,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 381,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 390,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 399,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "f04",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 417,
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
    "type": "Identifier",
    "value": "b",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 442,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 461,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 471,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 515,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 527,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 536,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 565,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 583,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 595,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 604,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 625,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 636,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 644,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 654,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 662,
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
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 666,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 675,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 696,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 715,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 721,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 732,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 735,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 742,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 750,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 778,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 786,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 805,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 823,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 839,
    "end": 840
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 841,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 865,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 880,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 892,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 894,
    "end": 895
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 899,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 901,
    "end": 902
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 906,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 908,
    "end": 909
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 909,
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
    "value": ",",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 915,
    "end": 916
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 928,
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
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 944,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 949,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 953,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 957,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 966,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 969,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 974,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 980,
    "end": 981
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 982,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 989,
    "end": 990
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 991,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 997,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1000,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1013,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1042,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1045,
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
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1051,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1055,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1077,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1110,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1128,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "t1",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1149,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1180,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1185,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1189,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1193,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1218,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1249,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1258,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1271,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1278,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1281,
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
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1287,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1291,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1295,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1313,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1322,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1337,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1346,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1352,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1360,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1371,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1378,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1385,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1393,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1409,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1416,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1425,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1429,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1441,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1450,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1454,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1463,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1477,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1481,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1485,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1494,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1503,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1507,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1517,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1531,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1545,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1549,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1558,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1565,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1569,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1573,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1582,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1588,
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
    "value": ";",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1596,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1600,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1607,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1614,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1629,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1636,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1641,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1645,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1649,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1652,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1657,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1661,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1665,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1674,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1677,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1682,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1686,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1690,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1699,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1705,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1708,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1717,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1721,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1730,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1739,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1743,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1753,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1759,
    "end": 1766
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1767,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1773,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1781,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1789,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1803,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1812,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1819,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1826,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
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
    "value": "f20",
    "start": 1831,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1835,
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
    "value": "...",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1842,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1847,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1851,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1855,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1864,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1867,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1876,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1880,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1889,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1892,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1896,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1904,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 1909,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1915,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1930,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1941,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1955,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 1966,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1969,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1976,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 1981,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1987,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1999,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2002,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2009,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2017,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2025,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2028,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2040,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2043,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2050,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 2055,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 2061,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2083,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2091,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2102,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2110,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2116,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2127,
    "end": 2129
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2130,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2137,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 2142,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 2148,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2170,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2175,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2178,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2185,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2193,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2204,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2216,
    "end": 2218
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2219,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2226,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 2231,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2237,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2245,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 2254,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2269,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2277,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2280,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2289,
    "end": 2291
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2292,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2299,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 2304,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 2310,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2315,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2323,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2326,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2340,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2345,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2350,
    "end": 2357
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2358,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2372,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 2381,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2387,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2396,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 2399,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2405,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2414,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2417,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 2425,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 2434,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2446,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2454,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 2459,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2465,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2472,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2483,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2491,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2497,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2508,
    "end": 2510
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2511,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2518,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 2523,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2529,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2539,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2549,
    "end": 2551
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2552,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2559,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 2564,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2570,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2588,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2596,
    "end": 2598
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2599,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2604,
    "end": 2605
  }
]
```

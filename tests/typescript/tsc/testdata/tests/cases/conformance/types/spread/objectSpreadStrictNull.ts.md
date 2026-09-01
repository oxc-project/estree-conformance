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
          "name": "definiteBoolean",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 37
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 39,
                      "end": 46
                    },
                    "start": 37,
                    "end": 46
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 35,
                  "end": 46
                }
              ],
              "start": 33,
              "end": 48
            },
            "start": 31,
            "end": 48
          },
          "start": 16,
          "end": 48
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definiteString",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 74
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 76,
                      "end": 82
                    },
                    "start": 74,
                    "end": 82
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 72,
                  "end": 82
                }
              ],
              "start": 70,
              "end": 84
            },
            "start": 68,
            "end": 84
          },
          "start": 54,
          "end": 84
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 110
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    },
                    "start": 111,
                    "end": 119
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 108,
                  "end": 119
                }
              ],
              "start": 106,
              "end": 121
            },
            "start": 104,
            "end": 121
          },
          "start": 90,
          "end": 121
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 147
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 150,
                      "end": 156
                    },
                    "start": 148,
                    "end": 156
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 145,
                  "end": 156
                }
              ],
              "start": 143,
              "end": 158
            },
            "start": 141,
            "end": 158
          },
          "start": 127,
          "end": 158
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "undefinedString",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 185
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 196,
                          "end": 205
                        }
                      ],
                      "start": 187,
                      "end": 205
                    },
                    "start": 185,
                    "end": 205
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 183,
                  "end": 205
                }
              ],
              "start": 181,
              "end": 207
            },
            "start": 179,
            "end": 207
          },
          "start": 164,
          "end": 207
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "undefinedNumber",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 234
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 236,
                          "end": 242
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 245,
                          "end": 254
                        }
                      ],
                      "start": 236,
                      "end": 254
                    },
                    "start": 234,
                    "end": 254
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 232,
                  "end": 254
                }
              ],
              "start": 230,
              "end": 256
            },
            "start": 228,
            "end": 256
          },
          "start": 213,
          "end": 256
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
                  "name": "optionalUnionStops",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 308
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 310,
                                  "end": 316
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 319,
                                  "end": 325
                                }
                              ],
                              "start": 310,
                              "end": 325
                            },
                            "start": 308,
                            "end": 325
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 306,
                          "end": 325
                        }
                      ],
                      "start": 304,
                      "end": 327
                    },
                    "start": 302,
                    "end": 327
                  },
                  "start": 284,
                  "end": 327
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 335,
                        "end": 350
                      },
                      "start": 332,
                      "end": 350
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 369
                      },
                      "start": 352,
                      "end": 369
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 388
                      },
                      "start": 371,
                      "end": 388
                    }
                  ],
                  "start": 330,
                  "end": 390
                },
                "definite": false,
                "start": 284,
                "end": 390
              }
            ],
            "declare": false,
            "start": 280,
            "end": 391
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
                  "name": "optionalUnionDuplicates",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 427,
                            "end": 429
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 431,
                                  "end": 437
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 440,
                                  "end": 446
                                }
                              ],
                              "start": 431,
                              "end": 446
                            },
                            "start": 429,
                            "end": 446
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 427,
                          "end": 446
                        }
                      ],
                      "start": 425,
                      "end": 448
                    },
                    "start": 423,
                    "end": 448
                  },
                  "start": 400,
                  "end": 448
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 471
                      },
                      "start": 453,
                      "end": 471
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 490
                      },
                      "start": 473,
                      "end": 490
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 509
                      },
                      "start": 492,
                      "end": 509
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 528
                      },
                      "start": 511,
                      "end": 528
                    }
                  ],
                  "start": 451,
                  "end": 530
                },
                "definite": false,
                "start": 400,
                "end": 530
              }
            ],
            "declare": false,
            "start": 396,
            "end": 531
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
                  "name": "allOptional",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 557
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 560,
                                  "end": 566
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 569,
                                  "end": 575
                                }
                              ],
                              "start": 560,
                              "end": 575
                            },
                            "start": 558,
                            "end": 575
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 555,
                          "end": 575
                        }
                      ],
                      "start": 553,
                      "end": 577
                    },
                    "start": 551,
                    "end": 577
                  },
                  "start": 540,
                  "end": 577
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 599
                      },
                      "start": 582,
                      "end": 599
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 604,
                        "end": 618
                      },
                      "start": 601,
                      "end": 618
                    }
                  ],
                  "start": 580,
                  "end": 620
                },
                "definite": false,
                "start": 540,
                "end": 620
              }
            ],
            "declare": false,
            "start": 536,
            "end": 621
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
                  "name": "undefinedUnionStops",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 673
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 675,
                                  "end": 681
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 684,
                                  "end": 690
                                }
                              ],
                              "start": 675,
                              "end": 690
                            },
                            "start": 673,
                            "end": 690
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 671,
                          "end": 690
                        }
                      ],
                      "start": 669,
                      "end": 692
                    },
                    "start": 667,
                    "end": 692
                  },
                  "start": 648,
                  "end": 692
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 715
                      },
                      "start": 697,
                      "end": 715
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 734
                      },
                      "start": 717,
                      "end": 734
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 739,
                        "end": 754
                      },
                      "start": 736,
                      "end": 754
                    }
                  ],
                  "start": 695,
                  "end": 756
                },
                "definite": false,
                "start": 648,
                "end": 756
              }
            ],
            "declare": false,
            "start": 644,
            "end": 757
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
                  "name": "undefinedUnionDuplicates",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 794,
                            "end": 796
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 798,
                                  "end": 804
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 807,
                                  "end": 813
                                }
                              ],
                              "start": 798,
                              "end": 813
                            },
                            "start": 796,
                            "end": 813
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 794,
                          "end": 813
                        }
                      ],
                      "start": 792,
                      "end": 815
                    },
                    "start": 790,
                    "end": 815
                  },
                  "start": 766,
                  "end": 815
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 838
                      },
                      "start": 820,
                      "end": 838
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 843,
                        "end": 857
                      },
                      "start": 840,
                      "end": 857
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 862,
                        "end": 877
                      },
                      "start": 859,
                      "end": 877
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 897
                      },
                      "start": 879,
                      "end": 897
                    }
                  ],
                  "start": 818,
                  "end": 899
                },
                "definite": false,
                "start": 766,
                "end": 899
              }
            ],
            "declare": false,
            "start": 762,
            "end": 900
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
                  "name": "allUndefined",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 925,
                            "end": 927
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 929,
                                  "end": 935
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 938,
                                  "end": 944
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 947,
                                  "end": 956
                                }
                              ],
                              "start": 929,
                              "end": 956
                            },
                            "start": 927,
                            "end": 956
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 925,
                          "end": 956
                        }
                      ],
                      "start": 923,
                      "end": 958
                    },
                    "start": 921,
                    "end": 958
                  },
                  "start": 909,
                  "end": 958
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 966,
                        "end": 981
                      },
                      "start": 963,
                      "end": 981
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 986,
                        "end": 1001
                      },
                      "start": 983,
                      "end": 1001
                    }
                  ],
                  "start": 961,
                  "end": 1003
                },
                "definite": false,
                "start": 909,
                "end": 1003
              }
            ],
            "declare": false,
            "start": 905,
            "end": 1004
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
                  "name": "undefinedWithOptionalContinues",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1048,
                            "end": 1050
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1052,
                                  "end": 1058
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1061,
                                  "end": 1067
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 1070,
                                  "end": 1077
                                }
                              ],
                              "start": 1052,
                              "end": 1077
                            },
                            "start": 1050,
                            "end": 1077
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1048,
                          "end": 1077
                        }
                      ],
                      "start": 1046,
                      "end": 1079
                    },
                    "start": 1044,
                    "end": 1079
                  },
                  "start": 1014,
                  "end": 1079
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1087,
                        "end": 1102
                      },
                      "start": 1084,
                      "end": 1102
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1107,
                        "end": 1122
                      },
                      "start": 1104,
                      "end": 1122
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1127,
                        "end": 1141
                      },
                      "start": 1124,
                      "end": 1141
                    }
                  ],
                  "start": 1082,
                  "end": 1143
                },
                "definite": false,
                "start": 1014,
                "end": 1143
              }
            ],
            "declare": false,
            "start": 1010,
            "end": 1144
          }
        ],
        "start": 258,
        "end": 1146
      },
      "expression": false,
      "start": 0,
      "end": 1146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Movie",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1158
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
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1174,
                "end": 1180
              },
              "start": 1172,
              "end": 1180
            },
            "accessibility": null,
            "static": false,
            "start": 1167,
            "end": 1181
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "yearReleased",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1198
            },
            "typeAnnotation": {
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
            "static": false,
            "start": 1186,
            "end": 1207
          }
        ],
        "start": 1161,
        "end": 1209
      },
      "declare": false,
      "start": 1148,
      "end": 1209
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1218
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
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1223,
                  "end": 1228
                },
                "value": {
                  "type": "Literal",
                  "value": "The Matrix",
                  "raw": "\"The Matrix\"",
                  "start": 1230,
                  "end": 1242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1223,
                "end": 1242
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yearReleased",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1256
                },
                "value": {
                  "type": "Literal",
                  "value": 1999,
                  "raw": "1999",
                  "start": 1258,
                  "end": 1262
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1244,
                "end": 1262
              }
            ],
            "start": 1221,
            "end": 1264
          },
          "definite": false,
          "start": 1217,
          "end": 1264
        }
      ],
      "declare": false,
      "start": 1211,
      "end": 1265
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Movie",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1349,
                  "end": 1354
                },
                "typeArguments": null,
                "start": 1349,
                "end": 1354
              },
              "start": 1347,
              "end": 1354
            },
            "start": 1346,
            "end": 1354
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1363
                },
                "start": 1359,
                "end": 1363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1365,
                  "end": 1370
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1381
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1365,
                "end": 1381
              }
            ],
            "start": 1357,
            "end": 1383
          },
          "definite": false,
          "start": 1346,
          "end": 1383
        }
      ],
      "declare": false,
      "start": 1340,
      "end": 1384
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fields",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1402
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1409,
              "end": 1412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1414,
                "end": 1420
              },
              "start": 1412,
              "end": 1420
            },
            "accessibility": null,
            "static": false,
            "start": 1409,
            "end": 1421
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1426,
              "end": 1429
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1431,
                "end": 1437
              },
              "start": 1429,
              "end": 1437
            },
            "accessibility": null,
            "static": false,
            "start": 1426,
            "end": 1438
          }
        ],
        "start": 1403,
        "end": 1440
      },
      "declare": false,
      "start": 1386,
      "end": 1440
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NearlyPartialFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1470
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1477,
              "end": 1480
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1482,
                    "end": 1488
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1491,
                    "end": 1500
                  }
                ],
                "start": 1482,
                "end": 1500
              },
              "start": 1480,
              "end": 1500
            },
            "accessibility": null,
            "static": false,
            "start": 1477,
            "end": 1501
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1506,
              "end": 1509
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1511,
                    "end": 1517
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1520,
                    "end": 1529
                  }
                ],
                "start": 1511,
                "end": 1529
              },
              "start": 1509,
              "end": 1529
            },
            "accessibility": null,
            "static": false,
            "start": 1506,
            "end": 1530
          }
        ],
        "start": 1471,
        "end": 1532
      },
      "declare": false,
      "start": 1441,
      "end": 1532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1542,
        "end": 1543
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1552,
                "end": 1558
              },
              "typeArguments": null,
              "start": 1552,
              "end": 1558
            },
            "start": 1550,
            "end": 1558
          },
          "start": 1544,
          "end": 1558
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "partialFields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1575,
                "end": 1582
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1583,
                      "end": 1589
                    },
                    "typeArguments": null,
                    "start": 1583,
                    "end": 1589
                  }
                ],
                "start": 1582,
                "end": 1590
              },
              "start": 1575,
              "end": 1590
            },
            "start": 1573,
            "end": 1590
          },
          "start": 1560,
          "end": 1590
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nearlyPartialFields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NearlyPartialFields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1613,
                "end": 1632
              },
              "typeArguments": null,
              "start": 1613,
              "end": 1632
            },
            "start": 1611,
            "end": 1632
          },
          "start": 1592,
          "end": 1632
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1716
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1730
                    },
                    "start": 1721,
                    "end": 1730
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "partialFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1735,
                      "end": 1748
                    },
                    "start": 1732,
                    "end": 1748
                  }
                ],
                "start": 1719,
                "end": 1750
              },
              "start": 1710,
              "end": 1750
            },
            "directive": null,
            "start": 1710,
            "end": 1751
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1802,
                "end": 1808
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1816,
                      "end": 1822
                    },
                    "start": 1813,
                    "end": 1822
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nearlyPartialFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1827,
                      "end": 1846
                    },
                    "start": 1824,
                    "end": 1846
                  }
                ],
                "start": 1811,
                "end": 1848
              },
              "start": 1802,
              "end": 1848
            },
            "directive": null,
            "start": 1802,
            "end": 1849
          }
        ],
        "start": 1634,
        "end": 1851
      },
      "expression": false,
      "start": 1533,
      "end": 1851
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1851
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
    "value": "definiteBoolean",
    "start": 16,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 54,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 90,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 127,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "sn",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "undefinedString",
    "start": 164,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "undefinedNumber",
    "start": 213,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 245,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "optionalUnionStops",
    "start": 284,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 335,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 355,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 371,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 374,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "optionalUnionDuplicates",
    "start": 400,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 427,
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
    "value": "|",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 456,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 476,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 495,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 514,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "allOptional",
    "start": 540,
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
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "string",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 582,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 585,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 601,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 604,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 644,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "undefinedUnionStops",
    "start": 648,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 700,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 717,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 720,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 736,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "undefinedNumber",
    "start": 739,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 762,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "undefinedUnionDuplicates",
    "start": 766,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 820,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 823,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 840,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 843,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 859,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "undefinedString",
    "start": 862,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 879,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "undefinedNumber",
    "start": 882,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 905,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "allUndefined",
    "start": 909,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 938,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 947,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 963,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "undefinedString",
    "start": 966,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 983,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "undefinedNumber",
    "start": 986,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "let",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "undefinedWithOptionalContinues",
    "start": 1014,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1070,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 1087,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "undefinedString",
    "start": 1107,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 1127,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1148,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "Movie",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1167,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1174,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "yearReleased",
    "start": 1186,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1211,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1223,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "String",
    "value": "\"The Matrix\"",
    "start": 1230,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "yearReleased",
    "start": 1244,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Numeric",
    "value": "1999",
    "start": 1258,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1340,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "Movie",
    "start": 1349,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1372,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1386,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 1396,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1414,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1441,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "NearlyPartialFields",
    "start": 1451,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1477,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1482,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1491,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1506,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1511,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1520,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1533,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 1552,
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
    "value": "partialFields",
    "start": 1560,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1575,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 1583,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "nearlyPartialFields",
    "start": 1592,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "NearlyPartialFields",
    "start": 1613,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 1710,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1721,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 1724,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1732,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "partialFields",
    "start": 1735,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 1802,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1813,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "nearlyPartialFields",
    "start": 1827,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1850,
    "end": 1851
  }
]
```

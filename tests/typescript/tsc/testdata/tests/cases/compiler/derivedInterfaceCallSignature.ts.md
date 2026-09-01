__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3SvgPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 33,
                    "end": 36
                  },
                  "start": 31,
                  "end": 36
                },
                "start": 27,
                "end": 36
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  },
                  "start": 44,
                  "end": 52
                },
                "start": 38,
                "end": 52
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "start": 26,
            "end": 62
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 80,
                        "end": 83
                      },
                      "start": 78,
                      "end": 83
                    },
                    "start": 74,
                    "end": 83
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 93,
                        "end": 99
                      },
                      "start": 91,
                      "end": 99
                    },
                    "start": 85,
                    "end": 99
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 104,
                    "end": 110
                  },
                  "start": 101,
                  "end": 110
                },
                "start": 73,
                "end": 110
              },
              "start": 71,
              "end": 110
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 68,
            "end": 111
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 128,
                        "end": 131
                      },
                      "start": 126,
                      "end": 131
                    },
                    "start": 122,
                    "end": 131
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
                      },
                      "start": 139,
                      "end": 147
                    },
                    "start": 133,
                    "end": 147
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 152,
                    "end": 158
                  },
                  "start": 149,
                  "end": 158
                },
                "start": 121,
                "end": 158
              },
              "start": 119,
              "end": 158
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 116,
            "end": 159
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interpolate",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 175
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 164,
            "end": 186
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tension",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 198
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 191,
            "end": 209
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defined",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 221
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 232,
                        "end": 235
                      },
                      "start": 230,
                      "end": 235
                    },
                    "start": 226,
                    "end": 235
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 245,
                        "end": 251
                      },
                      "start": 243,
                      "end": 251
                    },
                    "start": 237,
                    "end": 251
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 256,
                    "end": 263
                  },
                  "start": 253,
                  "end": 263
                },
                "start": 225,
                "end": 263
              },
              "start": 223,
              "end": 263
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 214,
            "end": 264
          }
        ],
        "start": 20,
        "end": 266
      },
      "declare": false,
      "start": 0,
      "end": 266
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3SvgArea",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 287
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "D3SvgPath",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 305
          },
          "typeArguments": null,
          "start": 296,
          "end": 305
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 324,
                            "end": 327
                          },
                          "start": 322,
                          "end": 327
                        },
                        "start": 318,
                        "end": 327
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 337,
                            "end": 343
                          },
                          "start": 335,
                          "end": 343
                        },
                        "start": 329,
                        "end": 343
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 348,
                        "end": 354
                      },
                      "start": 345,
                      "end": 354
                    },
                    "start": 317,
                    "end": 354
                  },
                  "start": 315,
                  "end": 354
                },
                "start": 314,
                "end": 354
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 366
                },
                "typeArguments": null,
                "start": 357,
                "end": 366
              },
              "start": 355,
              "end": 366
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 312,
            "end": 367
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 384,
                            "end": 387
                          },
                          "start": 382,
                          "end": 387
                        },
                        "start": 378,
                        "end": 387
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 397,
                            "end": 403
                          },
                          "start": 395,
                          "end": 403
                        },
                        "start": 389,
                        "end": 403
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 408,
                        "end": 414
                      },
                      "start": 405,
                      "end": 414
                    },
                    "start": 377,
                    "end": 414
                  },
                  "start": 375,
                  "end": 414
                },
                "start": 374,
                "end": 414
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 426
                },
                "typeArguments": null,
                "start": 417,
                "end": 426
              },
              "start": 415,
              "end": 426
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 372,
            "end": 427
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y0",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 434
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 445,
                        "end": 448
                      },
                      "start": 443,
                      "end": 448
                    },
                    "start": 439,
                    "end": 448
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 458,
                        "end": 464
                      },
                      "start": 456,
                      "end": 464
                    },
                    "start": 450,
                    "end": 464
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 469,
                    "end": 475
                  },
                  "start": 466,
                  "end": 475
                },
                "start": 438,
                "end": 475
              },
              "start": 436,
              "end": 475
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 432,
            "end": 476
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y0",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 483
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 487,
                    "end": 493
                  },
                  "start": 485,
                  "end": 493
                },
                "start": 484,
                "end": 493
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 505
                },
                "typeArguments": null,
                "start": 496,
                "end": 505
              },
              "start": 494,
              "end": 505
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 481,
            "end": 506
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y0",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 513
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 524,
                            "end": 527
                          },
                          "start": 522,
                          "end": 527
                        },
                        "start": 518,
                        "end": 527
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 537,
                            "end": 543
                          },
                          "start": 535,
                          "end": 543
                        },
                        "start": 529,
                        "end": 543
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 548,
                        "end": 554
                      },
                      "start": 545,
                      "end": 554
                    },
                    "start": 517,
                    "end": 554
                  },
                  "start": 515,
                  "end": 554
                },
                "start": 514,
                "end": 554
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 566
                },
                "typeArguments": null,
                "start": 557,
                "end": 566
              },
              "start": 555,
              "end": 566
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 511,
            "end": 567
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 572,
              "end": 574
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 585,
                        "end": 588
                      },
                      "start": 583,
                      "end": 588
                    },
                    "start": 579,
                    "end": 588
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 598,
                        "end": 604
                      },
                      "start": 596,
                      "end": 604
                    },
                    "start": 590,
                    "end": 604
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 609,
                    "end": 615
                  },
                  "start": 606,
                  "end": 615
                },
                "start": 578,
                "end": 615
              },
              "start": 576,
              "end": 615
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 572,
            "end": 616
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 623
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 627,
                    "end": 633
                  },
                  "start": 625,
                  "end": 633
                },
                "start": 624,
                "end": 633
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 645
                },
                "typeArguments": null,
                "start": 636,
                "end": 645
              },
              "start": 634,
              "end": 645
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 621,
            "end": 646
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 653
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 664,
                            "end": 667
                          },
                          "start": 662,
                          "end": 667
                        },
                        "start": 658,
                        "end": 667
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 677,
                            "end": 683
                          },
                          "start": 675,
                          "end": 683
                        },
                        "start": 669,
                        "end": 683
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 688,
                        "end": 694
                      },
                      "start": 685,
                      "end": 694
                    },
                    "start": 657,
                    "end": 694
                  },
                  "start": 655,
                  "end": 694
                },
                "start": 654,
                "end": 694
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 706
                },
                "typeArguments": null,
                "start": 697,
                "end": 706
              },
              "start": 695,
              "end": 706
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 651,
            "end": 707
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interpolate",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 724
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "interpolator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 739,
                    "end": 745
                  },
                  "start": 737,
                  "end": 745
                },
                "start": 725,
                "end": 745
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 757
                },
                "typeArguments": null,
                "start": 748,
                "end": 757
              },
              "start": 746,
              "end": 757
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 713,
            "end": 758
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tension",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 770
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tension",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 780,
                    "end": 786
                  },
                  "start": 778,
                  "end": 786
                },
                "start": 771,
                "end": 786
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 789,
                  "end": 798
                },
                "typeArguments": null,
                "start": 789,
                "end": 798
              },
              "start": 787,
              "end": 798
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 763,
            "end": 799
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defined",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 811
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "defined",
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 828,
                            "end": 831
                          },
                          "start": 826,
                          "end": 831
                        },
                        "start": 822,
                        "end": 831
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 841,
                            "end": 847
                          },
                          "start": 839,
                          "end": 847
                        },
                        "start": 833,
                        "end": 847
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 852,
                        "end": 859
                      },
                      "start": 849,
                      "end": 859
                    },
                    "start": 821,
                    "end": 859
                  },
                  "start": 819,
                  "end": 859
                },
                "start": 812,
                "end": 859
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 871
                },
                "typeArguments": null,
                "start": 862,
                "end": 871
              },
              "start": 860,
              "end": 871
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 804,
            "end": 872
          }
        ],
        "start": 306,
        "end": 874
      },
      "declare": false,
      "start": 268,
      "end": 874
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
            "name": "area",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D3SvgArea",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 903
                },
                "typeArguments": null,
                "start": 894,
                "end": 903
              },
              "start": 892,
              "end": 903
            },
            "start": 888,
            "end": 903
          },
          "init": null,
          "definite": false,
          "start": 888,
          "end": 903
        }
      ],
      "declare": true,
      "start": 876,
      "end": 904
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "area",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 909
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "interpolate",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 921
            },
            "optional": false,
            "computed": false,
            "start": 905,
            "end": 921
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "two",
              "raw": "'two'",
              "start": 922,
              "end": 927
            }
          ],
          "optional": false,
          "start": 905,
          "end": 928
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "one",
            "raw": "'one'",
            "start": 929,
            "end": 934
          }
        ],
        "optional": false,
        "start": 905,
        "end": 935
      },
      "directive": null,
      "start": 905,
      "end": 936
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 936
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "D3SvgPath",
    "start": 10,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 101,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "interpolate",
    "start": 164,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "tension",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "defined",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 268,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 278,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 288,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "D3SvgPath",
    "start": 296,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 357,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 384,
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
    "value": "index",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 405,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 417,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "y0",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
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
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 466,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "y0",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 496,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "y0",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 545,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "D3SvgArea",
    "start": 557,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 590,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 606,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 609,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 621,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 627,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "D3SvgArea",
    "start": 636,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 669,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 697,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "interpolate",
    "start": 713,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "interpolator",
    "start": 725,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 748,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "tension",
    "start": 763,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "tension",
    "start": 771,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 780,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 789,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "defined",
    "start": 804,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "defined",
    "start": 812,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 833,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 849,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 852,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 862,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 876,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 888,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "D3SvgArea",
    "start": 894,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 905,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "interpolate",
    "start": 910,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 922,
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
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 929,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  }
]
```

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
        "name": "TakeString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "start": 19,
            "end": 28
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 33,
            "end": 36
          },
          "start": 30,
          "end": 36
        },
        "start": 18,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 183
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
              "start": 184,
              "end": 185
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 220
                },
                "typeArguments": null,
                "start": 210,
                "end": 220
              },
              "optional": false,
              "readonly": null,
              "start": 194,
              "end": 221
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 221
          }
        ],
        "start": 183,
        "end": 222
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
                "start": 228,
                "end": 229
              },
              "typeArguments": null,
              "start": 228,
              "end": 229
            },
            "start": 226,
            "end": 229
          },
          "start": 223,
          "end": 229
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 232,
          "end": 236
        },
        "start": 230,
        "end": 236
      },
      "body": null,
      "expression": false,
      "start": 159,
      "end": 237
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 262
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
              "start": 263,
              "end": 264
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 276
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 286,
                    "end": 287
                  },
                  "typeArguments": null,
                  "start": 286,
                  "end": 287
                },
                "start": 280,
                "end": 287
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 300
                },
                "typeArguments": null,
                "start": 290,
                "end": 300
              },
              "optional": false,
              "readonly": null,
              "start": 273,
              "end": 301
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 301
          }
        ],
        "start": 262,
        "end": 302
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
                "start": 308,
                "end": 309
              },
              "typeArguments": null,
              "start": 308,
              "end": 309
            },
            "start": 306,
            "end": 309
          },
          "start": 303,
          "end": 309
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 312,
          "end": 316
        },
        "start": 310,
        "end": 316
      },
      "body": null,
      "expression": false,
      "start": 238,
      "end": 317
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped3",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 342
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
              "start": 343,
              "end": 344
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 356
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 366,
                  "end": 369
                },
                "start": 360,
                "end": 369
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 382
                },
                "typeArguments": null,
                "start": 372,
                "end": 382
              },
              "optional": false,
              "readonly": null,
              "start": 353,
              "end": 383
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 383
          }
        ],
        "start": 342,
        "end": 384
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
                "start": 390,
                "end": 391
              },
              "typeArguments": null,
              "start": 390,
              "end": 391
            },
            "start": 388,
            "end": 391
          },
          "start": 385,
          "end": 391
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 394,
          "end": 398
        },
        "start": 392,
        "end": 398
      },
      "body": null,
      "expression": false,
      "start": 318,
      "end": 399
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped4",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 424
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
              "start": 425,
              "end": 426
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 425,
            "end": 426
          }
        ],
        "start": 424,
        "end": 427
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 434
                  },
                  "typeArguments": null,
                  "start": 433,
                  "end": 434
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 451
                      },
                      "typeArguments": null,
                      "start": 450,
                      "end": 451
                    },
                    "start": 444,
                    "end": 451
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 464
                    },
                    "typeArguments": null,
                    "start": 454,
                    "end": 464
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 437,
                  "end": 465
                }
              ],
              "start": 433,
              "end": 465
            },
            "start": 431,
            "end": 465
          },
          "start": 428,
          "end": 465
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 468,
          "end": 472
        },
        "start": 466,
        "end": 472
      },
      "body": null,
      "expression": false,
      "start": 400,
      "end": 473
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped5",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 498
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
              "start": 499,
              "end": 500
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 499,
            "end": 500
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 503
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 519
                },
                "typeArguments": null,
                "start": 518,
                "end": 519
              },
              "start": 512,
              "end": 519
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 502,
            "end": 519
          }
        ],
        "start": 498,
        "end": 520
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "typeArguments": null,
                  "start": 526,
                  "end": 527
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 532,
                    "end": 533
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 538
                    },
                    "typeArguments": null,
                    "start": 537,
                    "end": 538
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 551
                    },
                    "typeArguments": null,
                    "start": 541,
                    "end": 551
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 530,
                  "end": 552
                }
              ],
              "start": 526,
              "end": 552
            },
            "start": 524,
            "end": 552
          },
          "start": 521,
          "end": 552
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 555,
          "end": 559
        },
        "start": 553,
        "end": 559
      },
      "body": null,
      "expression": false,
      "start": 474,
      "end": 560
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped6",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 585
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 596,
              "end": 602
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 586,
            "end": 602
          }
        ],
        "start": 585,
        "end": 603
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "typeArguments": null,
                "start": 616,
                "end": 617
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 620,
                  "end": 630
                },
                "typeArguments": null,
                "start": 620,
                "end": 630
              },
              "optional": false,
              "readonly": null,
              "start": 609,
              "end": 631
            },
            "start": 607,
            "end": 631
          },
          "start": 604,
          "end": 631
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 634,
          "end": 638
        },
        "start": 632,
        "end": 638
      },
      "body": null,
      "expression": false,
      "start": 561,
      "end": 639
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped7",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 664
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 681,
                "end": 684
              },
              "start": 675,
              "end": 684
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 665,
            "end": 684
          }
        ],
        "start": 664,
        "end": 685
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 694
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 699
                },
                "typeArguments": null,
                "start": 698,
                "end": 699
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 712
                },
                "typeArguments": null,
                "start": 702,
                "end": 712
              },
              "optional": false,
              "readonly": null,
              "start": 691,
              "end": 713
            },
            "start": 689,
            "end": 713
          },
          "start": 686,
          "end": 713
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 716,
          "end": 720
        },
        "start": 714,
        "end": 720
      },
      "body": null,
      "expression": false,
      "start": 640,
      "end": 721
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped8",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 746
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 757,
                "end": 762
              },
              "start": 757,
              "end": 762
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 747,
            "end": 762
          }
        ],
        "start": 746,
        "end": 763
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 772
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 776,
                  "end": 777
                },
                "typeArguments": null,
                "start": 776,
                "end": 777
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 780,
                  "end": 790
                },
                "typeArguments": null,
                "start": 780,
                "end": 790
              },
              "optional": false,
              "readonly": null,
              "start": 769,
              "end": 791
            },
            "start": 767,
            "end": 791
          },
          "start": 764,
          "end": 791
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 794,
          "end": 798
        },
        "start": 792,
        "end": 798
      },
      "body": null,
      "expression": false,
      "start": 722,
      "end": 799
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped9",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 824
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 826
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 835,
                    "end": 840
                  },
                  "start": 835,
                  "end": 840
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 841,
                    "end": 846
                  },
                  "start": 841,
                  "end": 846
                }
              ],
              "start": 835,
              "end": 846
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 825,
            "end": 846
          }
        ],
        "start": 824,
        "end": 847
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 856
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                },
                "typeArguments": null,
                "start": 860,
                "end": 861
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 864,
                  "end": 874
                },
                "typeArguments": null,
                "start": 864,
                "end": 874
              },
              "optional": false,
              "readonly": null,
              "start": 853,
              "end": 875
            },
            "start": 851,
            "end": 875
          },
          "start": 848,
          "end": 875
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 878,
          "end": 882
        },
        "start": 876,
        "end": 882
      },
      "body": null,
      "expression": false,
      "start": 800,
      "end": 883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped1",
          "optional": false,
          "typeAnnotation": null,
          "start": 885,
          "end": 892
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 897
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 899,
                      "end": 900
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 904,
                    "end": 906
                  },
                  "id": null,
                  "generator": false,
                  "start": 899,
                  "end": 906
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 894,
                "end": 906
              }
            ],
            "start": 893,
            "end": 907
          }
        ],
        "optional": false,
        "start": 885,
        "end": 908
      },
      "directive": null,
      "start": 885,
      "end": 909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped2",
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 917
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 922
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 925
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 929,
                    "end": 931
                  },
                  "id": null,
                  "generator": false,
                  "start": 924,
                  "end": 931
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 919,
                "end": 931
              }
            ],
            "start": 918,
            "end": 932
          }
        ],
        "optional": false,
        "start": 910,
        "end": 933
      },
      "directive": null,
      "start": 910,
      "end": 934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped3",
          "optional": false,
          "typeAnnotation": null,
          "start": 935,
          "end": 942
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 947
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 949,
                      "end": 950
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 954,
                    "end": 956
                  },
                  "id": null,
                  "generator": false,
                  "start": 949,
                  "end": 956
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 944,
                "end": 956
              }
            ],
            "start": 943,
            "end": 957
          }
        ],
        "optional": false,
        "start": 935,
        "end": 958
      },
      "directive": null,
      "start": 935,
      "end": 959
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped4",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 967
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 972
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 975
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 979,
                    "end": 981
                  },
                  "id": null,
                  "generator": false,
                  "start": 974,
                  "end": 981
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 969,
                "end": 981
              }
            ],
            "start": 968,
            "end": 982
          }
        ],
        "optional": false,
        "start": 960,
        "end": 983
      },
      "directive": null,
      "start": 960,
      "end": 984
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped5",
          "optional": false,
          "typeAnnotation": null,
          "start": 985,
          "end": 992
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 997
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1000
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1004,
                    "end": 1006
                  },
                  "id": null,
                  "generator": false,
                  "start": 999,
                  "end": 1006
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 994,
                "end": 1006
              }
            ],
            "start": 993,
            "end": 1007
          }
        ],
        "optional": false,
        "start": 985,
        "end": 1008
      },
      "directive": null,
      "start": 985,
      "end": 1009
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1010,
          "end": 1017
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1019,
                  "end": 1022
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1024,
                      "end": 1025
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1029,
                    "end": 1031
                  },
                  "id": null,
                  "generator": false,
                  "start": 1024,
                  "end": 1031
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1019,
                "end": 1031
              }
            ],
            "start": 1018,
            "end": 1032
          }
        ],
        "optional": false,
        "start": 1010,
        "end": 1033
      },
      "directive": null,
      "start": 1010,
      "end": 1034
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1035,
          "end": 1042
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1047
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1049,
                      "end": 1050
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1054,
                    "end": 1056
                  },
                  "id": null,
                  "generator": false,
                  "start": 1049,
                  "end": 1056
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1044,
                "end": 1056
              }
            ],
            "start": 1043,
            "end": 1057
          }
        ],
        "optional": false,
        "start": 1035,
        "end": 1058
      },
      "directive": null,
      "start": 1035,
      "end": 1059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1060,
          "end": 1067
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1072
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1074,
                      "end": 1075
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1079,
                    "end": 1081
                  },
                  "id": null,
                  "generator": false,
                  "start": 1074,
                  "end": 1081
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1069,
                "end": 1081
              }
            ],
            "start": 1068,
            "end": 1082
          }
        ],
        "optional": false,
        "start": 1060,
        "end": 1083
      },
      "directive": null,
      "start": 1060,
      "end": 1084
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1085,
          "end": 1092
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1094,
                  "end": 1097
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1104,
                    "end": 1106
                  },
                  "id": null,
                  "generator": false,
                  "start": 1099,
                  "end": 1106
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1094,
                "end": 1106
              }
            ],
            "start": 1093,
            "end": 1107
          }
        ],
        "optional": false,
        "start": 1085,
        "end": 1108
      },
      "directive": null,
      "start": 1085,
      "end": 1109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1109
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
    "value": "TakeString",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 30,
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
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 159,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 167,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "mapped1",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 198,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 210,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 238,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "mapped2",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 290,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 318,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 326,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "mapped3",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 357,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 360,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 372,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 385,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 400,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 408,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "mapped4",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 441,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 444,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 454,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 474,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 482,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "mapped5",
    "start": 491,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 504,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 512,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 534,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 541,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 555,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 561,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 569,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "mapped6",
    "start": 578,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 588,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 613,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 620,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 640,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 648,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "mapped7",
    "start": 657,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 667,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 675,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 681,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 695,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 702,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 722,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 730,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "mapped8",
    "start": 739,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 749,
    "end": 756
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 757,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 762,
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
    "value": "obj",
    "start": 764,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 773,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 777,
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
    "value": "TakeString",
    "start": 780,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 794,
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
    "value": "declare",
    "start": 800,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 808,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "mapped9",
    "start": 817,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 827,
    "end": 834
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 835,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 840,
    "end": 841
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 848,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 857,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "TakeString",
    "start": 864,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "mapped1",
    "start": 885,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 901,
    "end": 903
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 904,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 906,
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
    "type": "Identifier",
    "value": "mapped2",
    "start": 910,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 926,
    "end": 928
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 929,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "mapped3",
    "start": 935,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 944,
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
    "value": "s",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 951,
    "end": 953
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "mapped4",
    "start": 960,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 976,
    "end": 978
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 979,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "mapped5",
    "start": 985,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 994,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "mapped6",
    "start": 1010,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "mapped7",
    "start": 1035,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1051,
    "end": 1053
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "mapped8",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "mapped9",
    "start": 1085,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1101,
    "end": 1103
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1104,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1106,
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
    "value": ";",
    "start": 1108,
    "end": 1109
  }
]
```

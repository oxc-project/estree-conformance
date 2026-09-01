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
        "name": "String",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 30
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
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 41
          }
        ],
        "start": 17,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotString",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 64
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 78
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
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 71,
            "end": 89
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 102
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
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 94,
            "end": 113
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "charAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 124
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "pos",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 130,
                    "end": 136
                  },
                  "start": 128,
                  "end": 136
                },
                "start": 125,
                "end": 136
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              },
              "start": 137,
              "end": 145
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 118,
            "end": 146
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "charCodeAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 161
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 169,
                    "end": 175
                  },
                  "start": 167,
                  "end": 175
                },
                "start": 162,
                "end": 175
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 151,
            "end": 185
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 207
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 209,
                      "end": 215
                    },
                    "start": 209,
                    "end": 217
                  },
                  "start": 207,
                  "end": 217
                },
                "value": null,
                "start": 197,
                "end": 217
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 190,
            "end": 227
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 239
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchString",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 254,
                    "end": 260
                  },
                  "start": 252,
                  "end": 260
                },
                "start": 240,
                "end": 260
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "position",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 273,
                    "end": 279
                  },
                  "start": 271,
                  "end": 279
                },
                "start": 262,
                "end": 279
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              },
              "start": 280,
              "end": 288
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 232,
            "end": 289
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lastIndexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 305
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchString",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 320,
                    "end": 326
                  },
                  "start": 318,
                  "end": 326
                },
                "start": 306,
                "end": 326
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "position",
                "optional": true,
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
                "start": 328,
                "end": 345
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 348,
                "end": 354
              },
              "start": 346,
              "end": 354
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 294,
            "end": 355
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "localeCompare",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
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
                "name": "that",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 380,
                    "end": 386
                  },
                  "start": 378,
                  "end": 386
                },
                "start": 374,
                "end": 386
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 389,
                "end": 395
              },
              "start": 387,
              "end": 395
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 360,
            "end": 396
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "match",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 406
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  },
                  "start": 413,
                  "end": 421
                },
                "start": 407,
                "end": 421
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 440
                },
                "typeArguments": null,
                "start": 424,
                "end": 440
              },
              "start": 422,
              "end": 440
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 401,
            "end": 441
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "match",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 451
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 460,
                    "end": 466
                  },
                  "start": 458,
                  "end": 466
                },
                "start": 452,
                "end": 466
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 485
                },
                "typeArguments": null,
                "start": 469,
                "end": 485
              },
              "start": 467,
              "end": 485
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 446,
            "end": 486
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 498
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 512,
                    "end": 518
                  },
                  "start": 510,
                  "end": 518
                },
                "start": 499,
                "end": 518
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 534,
                    "end": 540
                  },
                  "start": 532,
                  "end": 540
                },
                "start": 520,
                "end": 540
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 543,
                "end": 549
              },
              "start": 541,
              "end": 549
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 491,
            "end": 550
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 562
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 576,
                    "end": 582
                  },
                  "start": 574,
                  "end": 582
                },
                "start": 563,
                "end": 582
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
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
                        "name": "substring",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 610,
                            "end": 616
                          },
                          "start": 608,
                          "end": 616
                        },
                        "start": 599,
                        "end": 616
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
                          "start": 621,
                          "end": 625
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 627,
                              "end": 630
                            },
                            "start": 627,
                            "end": 632
                          },
                          "start": 625,
                          "end": 632
                        },
                        "value": null,
                        "start": 618,
                        "end": 632
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 637,
                        "end": 643
                      },
                      "start": 634,
                      "end": 643
                    },
                    "start": 598,
                    "end": 643
                  },
                  "start": 596,
                  "end": 643
                },
                "start": 584,
                "end": 643
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 646,
                "end": 652
              },
              "start": 644,
              "end": 652
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 555,
            "end": 653
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 665
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 685
                    },
                    "typeArguments": null,
                    "start": 679,
                    "end": 685
                  },
                  "start": 677,
                  "end": 685
                },
                "start": 666,
                "end": 685
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 701,
                    "end": 707
                  },
                  "start": 699,
                  "end": 707
                },
                "start": 687,
                "end": 707
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 710,
                "end": 716
              },
              "start": 708,
              "end": 716
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 658,
            "end": 717
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 729
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 749
                    },
                    "typeArguments": null,
                    "start": 743,
                    "end": 749
                  },
                  "start": 741,
                  "end": 749
                },
                "start": 730,
                "end": 749
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceValue",
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
                        "name": "substring",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 777,
                            "end": 783
                          },
                          "start": 775,
                          "end": 783
                        },
                        "start": 766,
                        "end": 783
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
                          "start": 788,
                          "end": 792
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 794,
                              "end": 797
                            },
                            "start": 794,
                            "end": 799
                          },
                          "start": 792,
                          "end": 799
                        },
                        "value": null,
                        "start": 785,
                        "end": 799
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 804,
                        "end": 810
                      },
                      "start": 801,
                      "end": 810
                    },
                    "start": 765,
                    "end": 810
                  },
                  "start": 763,
                  "end": 810
                },
                "start": 751,
                "end": 810
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 813,
                "end": 819
              },
              "start": 811,
              "end": 819
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 722,
            "end": 820
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "search",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 831
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 840,
                    "end": 846
                  },
                  "start": 838,
                  "end": 846
                },
                "start": 832,
                "end": 846
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 849,
                "end": 855
              },
              "start": 847,
              "end": 855
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 825,
            "end": 856
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "search",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 867
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "regexp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 882
                    },
                    "typeArguments": null,
                    "start": 876,
                    "end": 882
                  },
                  "start": 874,
                  "end": 882
                },
                "start": 868,
                "end": 882
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 885,
                "end": 891
              },
              "start": 883,
              "end": 891
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 861,
            "end": 892
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 902
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 911,
                    "end": 917
                  },
                  "start": 909,
                  "end": 917
                },
                "start": 903,
                "end": 917
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 925,
                    "end": 931
                  },
                  "start": 923,
                  "end": 931
                },
                "start": 919,
                "end": 931
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 934,
                "end": 940
              },
              "start": 932,
              "end": 940
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 897,
            "end": 941
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "split",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 951
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "separator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 963,
                    "end": 969
                  },
                  "start": 961,
                  "end": 969
                },
                "start": 952,
                "end": 969
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 979,
                    "end": 985
                  },
                  "start": 977,
                  "end": 985
                },
                "start": 971,
                "end": 985
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 988,
                  "end": 994
                },
                "start": 988,
                "end": 996
              },
              "start": 986,
              "end": 996
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 946,
            "end": 997
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "split",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1007
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "separator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1025
                    },
                    "typeArguments": null,
                    "start": 1019,
                    "end": 1025
                  },
                  "start": 1017,
                  "end": 1025
                },
                "start": 1008,
                "end": 1025
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1035,
                    "end": 1041
                  },
                  "start": 1033,
                  "end": 1041
                },
                "start": 1027,
                "end": 1041
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1044,
                  "end": 1050
                },
                "start": 1044,
                "end": 1052
              },
              "start": 1042,
              "end": 1052
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1002,
            "end": 1053
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "substring",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1067
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1075,
                    "end": 1081
                  },
                  "start": 1073,
                  "end": 1081
                },
                "start": 1068,
                "end": 1081
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1089,
                    "end": 1095
                  },
                  "start": 1087,
                  "end": 1095
                },
                "start": 1083,
                "end": 1095
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1098,
                "end": 1104
              },
              "start": 1096,
              "end": 1104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1058,
            "end": 1105
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1121
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
                "start": 1125,
                "end": 1131
              },
              "start": 1123,
              "end": 1131
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1110,
            "end": 1132
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1154
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
                "start": 1158,
                "end": 1164
              },
              "start": 1156,
              "end": 1164
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1137,
            "end": 1165
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toUpperCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1170,
              "end": 1181
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
                "start": 1185,
                "end": 1191
              },
              "start": 1183,
              "end": 1191
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1170,
            "end": 1192
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleUpperCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1214
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
                "start": 1218,
                "end": 1224
              },
              "start": 1216,
              "end": 1224
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1197,
            "end": 1225
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "trim",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1234
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
                "start": 1238,
                "end": 1244
              },
              "start": 1236,
              "end": 1244
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1230,
            "end": 1245
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1250,
              "end": 1256
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1258,
                "end": 1264
              },
              "start": 1256,
              "end": 1264
            },
            "accessibility": null,
            "static": false,
            "start": 1250,
            "end": 1265
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "substr",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1276
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1283,
                    "end": 1289
                  },
                  "start": 1281,
                  "end": 1289
                },
                "start": 1277,
                "end": 1289
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1300,
                    "end": 1306
                  },
                  "start": 1298,
                  "end": 1306
                },
                "start": 1291,
                "end": 1306
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1309,
                "end": 1315
              },
              "start": 1307,
              "end": 1315
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1270,
            "end": 1316
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1328
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
                "start": 1332,
                "end": 1338
              },
              "start": 1330,
              "end": 1338
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1321,
            "end": 1339
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1352,
                    "end": 1358
                  },
                  "start": 1350,
                  "end": 1358
                },
                "start": 1345,
                "end": 1358
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1361,
                "end": 1367
              },
              "start": 1359,
              "end": 1367
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1344,
            "end": 1368
          }
        ],
        "start": 65,
        "end": 1370
      },
      "declare": false,
      "start": 45,
      "end": 1370
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1376,
            "end": 1377
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1380,
            "end": 1382
          },
          "definite": false,
          "start": 1376,
          "end": 1382
        }
      ],
      "declare": false,
      "start": 1372,
      "end": 1383
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1399,
                  "end": 1405
                },
                "typeArguments": null,
                "start": 1399,
                "end": 1405
              },
              "start": 1397,
              "end": 1405
            },
            "start": 1396,
            "end": 1405
          },
          "init": null,
          "definite": false,
          "start": 1396,
          "end": 1405
        }
      ],
      "declare": true,
      "start": 1384,
      "end": 1406
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NotString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1422,
                  "end": 1431
                },
                "typeArguments": null,
                "start": 1422,
                "end": 1431
              },
              "start": 1420,
              "end": 1431
            },
            "start": 1419,
            "end": 1431
          },
          "init": null,
          "definite": false,
          "start": 1419,
          "end": 1431
        }
      ],
      "declare": true,
      "start": 1407,
      "end": 1432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1434,
          "end": 1435
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1438,
          "end": 1439
        },
        "start": 1434,
        "end": 1439
      },
      "directive": null,
      "start": 1434,
      "end": 1440
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1441,
          "end": 1442
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1445,
          "end": 1446
        },
        "start": 1441,
        "end": 1446
      },
      "directive": null,
      "start": 1441,
      "end": 1447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1449,
          "end": 1450
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1453,
          "end": 1454
        },
        "start": 1449,
        "end": 1454
      },
      "directive": null,
      "start": 1449,
      "end": 1455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1456,
          "end": 1457
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1460,
          "end": 1461
        },
        "start": 1456,
        "end": 1461
      },
      "directive": null,
      "start": 1456,
      "end": 1462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1465
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1468,
          "end": 1469
        },
        "start": 1464,
        "end": 1469
      },
      "directive": null,
      "start": 1464,
      "end": 1470
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1489,
          "end": 1490
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1493,
          "end": 1494
        },
        "start": 1489,
        "end": 1494
      },
      "directive": null,
      "start": 1489,
      "end": 1495
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1514
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
    "value": "String",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "doStuff",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "NotString",
    "start": 55,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "doStuff",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 94,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "charCodeAt",
    "start": 151,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "number",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "searchString",
    "start": 240,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "type": "Identifier",
    "value": "position",
    "start": 262,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "lastIndexOf",
    "start": 294,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "searchString",
    "start": 306,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 328,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
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
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "localeCompare",
    "start": 360,
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
    "value": "that",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 380,
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
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "regexp",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "RegExpMatchArray",
    "start": 424,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 446,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "regexp",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "RegExpMatchArray",
    "start": 469,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 491,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "searchValue",
    "start": 499,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "replaceValue",
    "start": 520,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 543,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "searchValue",
    "start": 563,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "replaceValue",
    "start": 584,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "substring",
    "start": 599,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 618,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 621,
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
    "value": "any",
    "start": 627,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 634,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 646,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 658,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "searchValue",
    "start": 666,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "replaceValue",
    "start": 687,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 722,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "searchValue",
    "start": 730,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 743,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "replaceValue",
    "start": 751,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "substring",
    "start": 766,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 777,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 785,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 794,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 801,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "search",
    "start": 825,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "regexp",
    "start": 832,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 849,
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
    "value": "search",
    "start": 861,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "regexp",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 876,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 885,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 897,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 925,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 934,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "split",
    "start": 946,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "separator",
    "start": 952,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 963,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "limit",
    "start": 971,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 988,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "split",
    "start": 1002,
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
    "value": "separator",
    "start": 1008,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "limit",
    "start": 1027,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1035,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "substring",
    "start": 1058,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1075,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1089,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 1110,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
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
    "value": "string",
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
    "value": "toLocaleLowerCase",
    "start": 1137,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1158,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1170,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
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
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1185,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "toLocaleUpperCase",
    "start": 1197,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1218,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "trim",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1238,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1258,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1277,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1283,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1291,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1300,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 1321,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1345,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1361,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1372,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "String",
    "value": "''",
    "start": 1380,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1384,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1399,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1407,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1415,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "NotString",
    "start": 1422,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
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
    "value": "x",
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
    "type": "Identifier",
    "value": "a",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  }
]
```

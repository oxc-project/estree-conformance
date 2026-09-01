__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 15
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 23
          }
        ],
        "start": 7,
        "end": 25
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 128,
                    "end": 134
                  },
                  "start": 126,
                  "end": 134
                },
                "start": 125,
                "end": 134
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 137,
                "end": 140
              },
              "start": 135,
              "end": 140
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 124,
            "end": 141
          },
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
              "start": 146,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 151,
                    "end": 157
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 160,
                    "end": 166
                  }
                ],
                "start": 151,
                "end": 166
              },
              "start": 149,
              "end": 166
            },
            "accessibility": null,
            "static": false,
            "start": 146,
            "end": 167
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 185
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 185
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 188,
                    "end": 194
                  }
                ],
                "start": 184,
                "end": 194
              },
              "start": 182,
              "end": 194
            },
            "accessibility": null,
            "static": false,
            "start": 178,
            "end": 195
          }
        ],
        "start": 118,
        "end": 203
      },
      "declare": false,
      "start": 106,
      "end": 203
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 216
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 227,
                    "end": 233
                  },
                  "start": 225,
                  "end": 233
                },
                "start": 224,
                "end": 233
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 236,
                "end": 242
              },
              "start": 234,
              "end": 242
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 223,
            "end": 243
          },
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
              "start": 320,
              "end": 323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 325,
                    "end": 331
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 334,
                    "end": 340
                  }
                ],
                "start": 325,
                "end": 340
              },
              "start": 323,
              "end": 340
            },
            "accessibility": null,
            "static": false,
            "start": 320,
            "end": 341
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 391
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 394
                    },
                    "typeArguments": null,
                    "start": 393,
                    "end": 394
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 397,
                    "end": 403
                  }
                ],
                "start": 393,
                "end": 403
              },
              "start": 391,
              "end": 403
            },
            "accessibility": null,
            "static": false,
            "start": 387,
            "end": 404
          }
        ],
        "start": 217,
        "end": 448
      },
      "declare": false,
      "start": 204,
      "end": 448
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 462
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 473,
                    "end": 479
                  },
                  "start": 471,
                  "end": 479
                },
                "start": 470,
                "end": 479
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 482,
                "end": 488
              },
              "start": 480,
              "end": 488
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 469,
            "end": 489
          },
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
              "start": 494,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 499,
                "end": 514
              },
              "start": 497,
              "end": 514
            },
            "accessibility": null,
            "static": false,
            "start": 494,
            "end": 515
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 564
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 566,
                      "end": 567
                    },
                    "typeArguments": null,
                    "start": 566,
                    "end": 567
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 570,
                    "end": 576
                  }
                ],
                "start": 566,
                "end": 576
              },
              "start": 564,
              "end": 576
            },
            "accessibility": null,
            "static": false,
            "start": 560,
            "end": 577
          }
        ],
        "start": 463,
        "end": 628
      },
      "declare": false,
      "start": 450,
      "end": 628
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 657
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 668,
                    "end": 674
                  },
                  "start": 666,
                  "end": 674
                },
                "start": 665,
                "end": 674
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 677,
                "end": 684
              },
              "start": 675,
              "end": 684
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 664,
            "end": 685
          },
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
              "start": 690,
              "end": 693
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 695,
                    "end": 701
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 704,
                    "end": 710
                  }
                ],
                "start": 695,
                "end": 710
              },
              "start": 693,
              "end": 710
            },
            "accessibility": null,
            "static": false,
            "start": 690,
            "end": 711
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 720
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 722,
                      "end": 723
                    },
                    "typeArguments": null,
                    "start": 722,
                    "end": 723
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 726,
                    "end": 732
                  }
                ],
                "start": 722,
                "end": 732
              },
              "start": 720,
              "end": 732
            },
            "accessibility": null,
            "static": false,
            "start": 716,
            "end": 733
          }
        ],
        "start": 658,
        "end": 735
      },
      "declare": false,
      "start": 645,
      "end": 735
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 750
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 761,
                    "end": 767
                  },
                  "start": 759,
                  "end": 767
                },
                "start": 758,
                "end": 767
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 774
                },
                "typeArguments": null,
                "start": 770,
                "end": 774
              },
              "start": 768,
              "end": 774
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 757,
            "end": 775
          },
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
              "start": 780,
              "end": 783
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 785,
                    "end": 791
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 794,
                    "end": 800
                  }
                ],
                "start": 785,
                "end": 800
              },
              "start": 783,
              "end": 800
            },
            "accessibility": null,
            "static": false,
            "start": 780,
            "end": 801
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 810
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 813
                    },
                    "typeArguments": null,
                    "start": 812,
                    "end": 813
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 816,
                    "end": 822
                  }
                ],
                "start": 812,
                "end": 822
              },
              "start": 810,
              "end": 822
            },
            "accessibility": null,
            "static": false,
            "start": 806,
            "end": 823
          }
        ],
        "start": 751,
        "end": 825
      },
      "declare": false,
      "start": 738,
      "end": 825
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 840
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 851,
                    "end": 857
                  },
                  "start": 849,
                  "end": 857
                },
                "start": 848,
                "end": 857
              }
            ],
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
                  "start": 860,
                  "end": 866
                },
                "typeArguments": null,
                "start": 860,
                "end": 866
              },
              "start": 858,
              "end": 866
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 847,
            "end": 867
          },
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
              "start": 872,
              "end": 875
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 877,
                    "end": 883
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 886,
                    "end": 892
                  }
                ],
                "start": 877,
                "end": 892
              },
              "start": 875,
              "end": 892
            },
            "accessibility": null,
            "static": false,
            "start": 872,
            "end": 893
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 902
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 904,
                      "end": 905
                    },
                    "typeArguments": null,
                    "start": 904,
                    "end": 905
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 908,
                    "end": 914
                  }
                ],
                "start": 904,
                "end": 914
              },
              "start": 902,
              "end": 914
            },
            "accessibility": null,
            "static": false,
            "start": 898,
            "end": 915
          }
        ],
        "start": 841,
        "end": 917
      },
      "declare": false,
      "start": 828,
      "end": 917
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null,
        "start": 930,
        "end": 932
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 943,
                    "end": 949
                  },
                  "start": 941,
                  "end": 949
                },
                "start": 940,
                "end": 949
              }
            ],
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 957
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 959,
                        "end": 965
                      },
                      "start": 957,
                      "end": 965
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 954,
                    "end": 965
                  }
                ],
                "start": 952,
                "end": 967
              },
              "start": 950,
              "end": 967
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 939,
            "end": 968
          },
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
              "start": 973,
              "end": 976
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 978,
                    "end": 984
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 987,
                    "end": 993
                  }
                ],
                "start": 978,
                "end": 993
              },
              "start": 976,
              "end": 993
            },
            "accessibility": null,
            "static": false,
            "start": 973,
            "end": 994
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1003
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1005,
                      "end": 1006
                    },
                    "typeArguments": null,
                    "start": 1005,
                    "end": 1006
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1009,
                    "end": 1015
                  }
                ],
                "start": 1005,
                "end": 1015
              },
              "start": 1003,
              "end": 1015
            },
            "accessibility": null,
            "static": false,
            "start": 999,
            "end": 1016
          }
        ],
        "start": 933,
        "end": 1018
      },
      "declare": false,
      "start": 920,
      "end": 1018
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1031,
        "end": 1033
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1044,
                    "end": 1050
                  },
                  "start": 1042,
                  "end": 1050
                },
                "start": 1041,
                "end": 1050
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1053,
                  "end": 1059
                },
                "start": 1053,
                "end": 1061
              },
              "start": 1051,
              "end": 1061
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1040,
            "end": 1062
          },
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
              "start": 1067,
              "end": 1070
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1072,
                    "end": 1078
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1081,
                    "end": 1087
                  }
                ],
                "start": 1072,
                "end": 1087
              },
              "start": 1070,
              "end": 1087
            },
            "accessibility": null,
            "static": false,
            "start": 1067,
            "end": 1088
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1093,
              "end": 1097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    },
                    "typeArguments": null,
                    "start": 1099,
                    "end": 1100
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1103,
                    "end": 1109
                  }
                ],
                "start": 1099,
                "end": 1109
              },
              "start": 1097,
              "end": 1109
            },
            "accessibility": null,
            "static": false,
            "start": 1093,
            "end": 1110
          }
        ],
        "start": 1034,
        "end": 1112
      },
      "declare": false,
      "start": 1021,
      "end": 1112
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1125,
        "end": 1127
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1138,
                    "end": 1144
                  },
                  "start": 1136,
                  "end": 1144
                },
                "start": 1135,
                "end": 1144
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1149
                },
                "typeArguments": null,
                "start": 1147,
                "end": 1149
              },
              "start": 1145,
              "end": 1149
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1134,
            "end": 1150
          },
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
              "start": 1155,
              "end": 1158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1160,
                    "end": 1166
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1169,
                    "end": 1175
                  }
                ],
                "start": 1160,
                "end": 1175
              },
              "start": 1158,
              "end": 1175
            },
            "accessibility": null,
            "static": false,
            "start": 1155,
            "end": 1176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1187,
                      "end": 1188
                    },
                    "typeArguments": null,
                    "start": 1187,
                    "end": 1188
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1191,
                    "end": 1197
                  }
                ],
                "start": 1187,
                "end": 1197
              },
              "start": 1185,
              "end": 1197
            },
            "accessibility": null,
            "static": false,
            "start": 1181,
            "end": 1198
          }
        ],
        "start": 1128,
        "end": 1200
      },
      "declare": false,
      "start": 1115,
      "end": 1200
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1209
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1215
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1217,
                "end": 1223
              },
              "start": 1215,
              "end": 1223
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1212,
            "end": 1224
          }
        ],
        "start": 1210,
        "end": 1226
      },
      "abstract": false,
      "declare": false,
      "start": 1202,
      "end": 1226
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1240
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1251,
                    "end": 1257
                  },
                  "start": 1249,
                  "end": 1257
                },
                "start": 1248,
                "end": 1257
              }
            ],
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
                  "start": 1260,
                  "end": 1261
                },
                "typeArguments": null,
                "start": 1260,
                "end": 1261
              },
              "start": 1258,
              "end": 1261
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1247,
            "end": 1262
          },
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
              "start": 1267,
              "end": 1270
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1272,
                    "end": 1278
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1281,
                    "end": 1287
                  }
                ],
                "start": 1272,
                "end": 1287
              },
              "start": 1270,
              "end": 1287
            },
            "accessibility": null,
            "static": false,
            "start": 1267,
            "end": 1288
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1299,
                      "end": 1300
                    },
                    "typeArguments": null,
                    "start": 1299,
                    "end": 1300
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1303,
                    "end": 1309
                  }
                ],
                "start": 1299,
                "end": 1309
              },
              "start": 1297,
              "end": 1309
            },
            "accessibility": null,
            "static": false,
            "start": 1293,
            "end": 1310
          }
        ],
        "start": 1241,
        "end": 1312
      },
      "declare": false,
      "start": 1227,
      "end": 1312
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1320,
        "end": 1322
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
              "start": 1323,
              "end": 1324
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1323,
            "end": 1324
          }
        ],
        "start": 1322,
        "end": 1325
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1331
            },
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
                  "start": 1333,
                  "end": 1334
                },
                "typeArguments": null,
                "start": 1333,
                "end": 1334
              },
              "start": 1331,
              "end": 1334
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1328,
            "end": 1335
          }
        ],
        "start": 1326,
        "end": 1337
      },
      "abstract": false,
      "declare": false,
      "start": 1314,
      "end": 1337
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1348,
        "end": 1351
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1362,
                    "end": 1368
                  },
                  "start": 1360,
                  "end": 1368
                },
                "start": 1359,
                "end": 1368
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1371,
                  "end": 1373
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1374,
                      "end": 1380
                    }
                  ],
                  "start": 1373,
                  "end": 1381
                },
                "start": 1371,
                "end": 1381
              },
              "start": 1369,
              "end": 1381
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1358,
            "end": 1382
          },
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
              "start": 1387,
              "end": 1390
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1392,
                    "end": 1398
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1401,
                    "end": 1407
                  }
                ],
                "start": 1392,
                "end": 1407
              },
              "start": 1390,
              "end": 1407
            },
            "accessibility": null,
            "static": false,
            "start": 1387,
            "end": 1408
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1417
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1419,
                      "end": 1420
                    },
                    "typeArguments": null,
                    "start": 1419,
                    "end": 1420
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1423,
                    "end": 1429
                  }
                ],
                "start": 1419,
                "end": 1429
              },
              "start": 1417,
              "end": 1429
            },
            "accessibility": null,
            "static": false,
            "start": 1413,
            "end": 1430
          }
        ],
        "start": 1352,
        "end": 1432
      },
      "declare": false,
      "start": 1338,
      "end": 1432
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1445,
        "end": 1448
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1459,
                    "end": 1465
                  },
                  "start": 1457,
                  "end": 1465
                },
                "start": 1456,
                "end": 1465
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1469,
                    "end": 1470
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1475,
                    "end": 1481
                  },
                  "start": 1472,
                  "end": 1481
                },
                "start": 1468,
                "end": 1481
              },
              "start": 1466,
              "end": 1481
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1455,
            "end": 1482
          },
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
              "start": 1487,
              "end": 1490
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1492,
                    "end": 1498
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1501,
                    "end": 1507
                  }
                ],
                "start": 1492,
                "end": 1507
              },
              "start": 1490,
              "end": 1507
            },
            "accessibility": null,
            "static": false,
            "start": 1487,
            "end": 1508
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1513,
              "end": 1517
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1519,
                      "end": 1520
                    },
                    "typeArguments": null,
                    "start": 1519,
                    "end": 1520
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1523,
                    "end": 1529
                  }
                ],
                "start": 1519,
                "end": 1529
              },
              "start": 1517,
              "end": 1529
            },
            "accessibility": null,
            "static": false,
            "start": 1513,
            "end": 1530
          }
        ],
        "start": 1449,
        "end": 1532
      },
      "declare": false,
      "start": 1435,
      "end": 1532
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1548
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1559,
                    "end": 1565
                  },
                  "start": 1557,
                  "end": 1565
                },
                "start": 1556,
                "end": 1565
              }
            ],
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
                        "start": 1569,
                        "end": 1570
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1569,
                      "end": 1570
                    }
                  ],
                  "start": 1568,
                  "end": 1571
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1575,
                          "end": 1576
                        },
                        "typeArguments": null,
                        "start": 1575,
                        "end": 1576
                      },
                      "start": 1573,
                      "end": 1576
                    },
                    "start": 1572,
                    "end": 1576
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
                      "start": 1581,
                      "end": 1582
                    },
                    "typeArguments": null,
                    "start": 1581,
                    "end": 1582
                  },
                  "start": 1578,
                  "end": 1582
                },
                "start": 1568,
                "end": 1582
              },
              "start": 1566,
              "end": 1582
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1555,
            "end": 1583
          },
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
              "start": 1588,
              "end": 1591
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1593,
                    "end": 1599
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1602,
                    "end": 1608
                  }
                ],
                "start": 1593,
                "end": 1608
              },
              "start": 1591,
              "end": 1608
            },
            "accessibility": null,
            "static": false,
            "start": 1588,
            "end": 1609
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1618
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1620,
                      "end": 1621
                    },
                    "typeArguments": null,
                    "start": 1620,
                    "end": 1621
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1624,
                    "end": 1630
                  }
                ],
                "start": 1620,
                "end": 1630
              },
              "start": 1618,
              "end": 1630
            },
            "accessibility": null,
            "static": false,
            "start": 1614,
            "end": 1631
          }
        ],
        "start": 1549,
        "end": 1633
      },
      "declare": false,
      "start": 1535,
      "end": 1633
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1641,
        "end": 1643
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1646,
              "end": 1647
            },
            "initializer": null,
            "computed": false,
            "start": 1646,
            "end": 1647
          }
        ],
        "start": 1644,
        "end": 1649
      },
      "const": false,
      "declare": false,
      "start": 1636,
      "end": 1649
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1663
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1674,
                    "end": 1680
                  },
                  "start": 1672,
                  "end": 1680
                },
                "start": 1671,
                "end": 1680
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1683,
                  "end": 1685
                },
                "typeArguments": null,
                "start": 1683,
                "end": 1685
              },
              "start": 1681,
              "end": 1685
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1670,
            "end": 1686
          },
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
              "start": 1691,
              "end": 1694
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1696,
                    "end": 1702
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1705,
                    "end": 1711
                  }
                ],
                "start": 1696,
                "end": 1711
              },
              "start": 1694,
              "end": 1711
            },
            "accessibility": null,
            "static": false,
            "start": 1691,
            "end": 1712
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1721
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1723,
                      "end": 1724
                    },
                    "typeArguments": null,
                    "start": 1723,
                    "end": 1724
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1727,
                    "end": 1733
                  }
                ],
                "start": 1723,
                "end": 1733
              },
              "start": 1721,
              "end": 1733
            },
            "accessibility": null,
            "static": false,
            "start": 1717,
            "end": 1734
          }
        ],
        "start": 1664,
        "end": 1736
      },
      "declare": false,
      "start": 1650,
      "end": 1736
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1748,
        "end": 1749
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1752,
        "end": 1755
      },
      "expression": false,
      "start": 1739,
      "end": 1755
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1766,
        "end": 1767
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1785,
                    "end": 1788
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1791,
                    "end": 1792
                  },
                  "definite": false,
                  "start": 1785,
                  "end": 1792
                }
              ],
              "declare": false,
              "start": 1781,
              "end": 1793
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1774,
            "end": 1793
          }
        ],
        "start": 1768,
        "end": 1795
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1756,
      "end": 1795
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1809
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1820,
                    "end": 1826
                  },
                  "start": 1818,
                  "end": 1826
                },
                "start": 1817,
                "end": 1826
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1837
                },
                "typeArguments": null,
                "start": 1829,
                "end": 1837
              },
              "start": 1827,
              "end": 1837
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1816,
            "end": 1838
          },
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
              "start": 1843,
              "end": 1846
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1848,
                    "end": 1854
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1857,
                    "end": 1863
                  }
                ],
                "start": 1848,
                "end": 1863
              },
              "start": 1846,
              "end": 1863
            },
            "accessibility": null,
            "static": false,
            "start": 1843,
            "end": 1864
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1869,
              "end": 1873
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1875,
                      "end": 1876
                    },
                    "typeArguments": null,
                    "start": 1875,
                    "end": 1876
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1879,
                    "end": 1885
                  }
                ],
                "start": 1875,
                "end": 1885
              },
              "start": 1873,
              "end": 1885
            },
            "accessibility": null,
            "static": false,
            "start": 1869,
            "end": 1886
          }
        ],
        "start": 1810,
        "end": 1888
      },
      "declare": false,
      "start": 1796,
      "end": 1888
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
        "start": 1897,
        "end": 1898
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1901,
              "end": 1904
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1906,
                "end": 1912
              },
              "start": 1904,
              "end": 1912
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1901,
            "end": 1912
          }
        ],
        "start": 1899,
        "end": 1914
      },
      "abstract": false,
      "declare": false,
      "start": 1891,
      "end": 1914
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1925,
        "end": 1926
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1944,
                    "end": 1947
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1950,
                    "end": 1951
                  },
                  "definite": false,
                  "start": 1944,
                  "end": 1951
                }
              ],
              "declare": false,
              "start": 1940,
              "end": 1952
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1933,
            "end": 1952
          }
        ],
        "start": 1927,
        "end": 1954
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1915,
      "end": 1954
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1965,
        "end": 1968
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1979,
                    "end": 1985
                  },
                  "start": 1977,
                  "end": 1985
                },
                "start": 1976,
                "end": 1985
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1995,
                  "end": 1996
                },
                "typeArguments": null,
                "start": 1988,
                "end": 1996
              },
              "start": 1986,
              "end": 1996
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1975,
            "end": 1997
          },
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
              "start": 2002,
              "end": 2005
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2007,
                    "end": 2013
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2016,
                    "end": 2022
                  }
                ],
                "start": 2007,
                "end": 2022
              },
              "start": 2005,
              "end": 2022
            },
            "accessibility": null,
            "static": false,
            "start": 2002,
            "end": 2023
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2028,
              "end": 2032
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2034,
                      "end": 2035
                    },
                    "typeArguments": null,
                    "start": 2034,
                    "end": 2035
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2038,
                    "end": 2044
                  }
                ],
                "start": 2034,
                "end": 2044
              },
              "start": 2032,
              "end": 2044
            },
            "accessibility": null,
            "static": false,
            "start": 2028,
            "end": 2045
          }
        ],
        "start": 1969,
        "end": 2047
      },
      "declare": false,
      "start": 1955,
      "end": 2047
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2063
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
              "start": 2064,
              "end": 2065
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2064,
            "end": 2065
          }
        ],
        "start": 2063,
        "end": 2066
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2077,
                    "end": 2083
                  },
                  "start": 2075,
                  "end": 2083
                },
                "start": 2074,
                "end": 2083
              }
            ],
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
                  "start": 2086,
                  "end": 2087
                },
                "typeArguments": null,
                "start": 2086,
                "end": 2087
              },
              "start": 2084,
              "end": 2087
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2073,
            "end": 2088
          },
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
              "start": 2093,
              "end": 2096
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2098,
                    "end": 2104
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2107,
                    "end": 2113
                  }
                ],
                "start": 2098,
                "end": 2113
              },
              "start": 2096,
              "end": 2113
            },
            "accessibility": null,
            "static": false,
            "start": 2093,
            "end": 2114
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2119,
              "end": 2123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2125,
                      "end": 2126
                    },
                    "typeArguments": null,
                    "start": 2125,
                    "end": 2126
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2129,
                    "end": 2135
                  }
                ],
                "start": 2125,
                "end": 2135
              },
              "start": 2123,
              "end": 2135
            },
            "accessibility": null,
            "static": false,
            "start": 2119,
            "end": 2136
          }
        ],
        "start": 2067,
        "end": 2138
      },
      "declare": false,
      "start": 2050,
      "end": 2138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I19",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2153
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2164,
                    "end": 2170
                  },
                  "start": 2162,
                  "end": 2170
                },
                "start": 2161,
                "end": 2170
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2173,
                  "end": 2179
                },
                "typeArguments": null,
                "start": 2173,
                "end": 2179
              },
              "start": 2171,
              "end": 2179
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2160,
            "end": 2180
          },
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
              "start": 2185,
              "end": 2188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2190,
                    "end": 2196
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2199,
                    "end": 2205
                  }
                ],
                "start": 2190,
                "end": 2205
              },
              "start": 2188,
              "end": 2205
            },
            "accessibility": null,
            "static": false,
            "start": 2185,
            "end": 2206
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2211,
              "end": 2215
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2217,
                      "end": 2218
                    },
                    "typeArguments": null,
                    "start": 2217,
                    "end": 2218
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2221,
                    "end": 2227
                  }
                ],
                "start": 2217,
                "end": 2227
              },
              "start": 2215,
              "end": 2227
            },
            "accessibility": null,
            "static": false,
            "start": 2211,
            "end": 2228
          }
        ],
        "start": 2154,
        "end": 2230
      },
      "declare": false,
      "start": 2140,
      "end": 2230
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2243,
        "end": 2246
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2257,
                    "end": 2263
                  },
                  "start": 2255,
                  "end": 2263
                },
                "start": 2254,
                "end": 2263
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 2266,
                "end": 2268
              },
              "start": 2264,
              "end": 2268
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2253,
            "end": 2269
          },
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
              "start": 2274,
              "end": 2277
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2279,
                    "end": 2285
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2288,
                    "end": 2294
                  }
                ],
                "start": 2279,
                "end": 2294
              },
              "start": 2277,
              "end": 2294
            },
            "accessibility": null,
            "static": false,
            "start": 2274,
            "end": 2295
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2304
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2306,
                      "end": 2307
                    },
                    "typeArguments": null,
                    "start": 2306,
                    "end": 2307
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2310,
                    "end": 2316
                  }
                ],
                "start": 2306,
                "end": 2316
              },
              "start": 2304,
              "end": 2316
            },
            "accessibility": null,
            "static": false,
            "start": 2300,
            "end": 2317
          }
        ],
        "start": 2247,
        "end": 2319
      },
      "declare": false,
      "start": 2233,
      "end": 2319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2319
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 106,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
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
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 178,
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
    "value": "e",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
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
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 450,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 566,
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
    "value": "number",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 645,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 665,
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
    "value": "string",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "boolean",
    "start": 677,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 726,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 738,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 770,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 794,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 816,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 828,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 838,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 860,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 877,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 886,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 898,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 920,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 930,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 943,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 973,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 987,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "]",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1053,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1072,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1081,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1093,
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
    "value": "e",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1115,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1155,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1160,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1169,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1181,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1217,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1227,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1248,
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
    "value": "string",
    "start": 1251,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1293,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1303,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1314,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1320,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1338,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1348,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1362,
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
    "value": ":",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1371,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1374,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1392,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1401,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1413,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1423,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1435,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 1445,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1459,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1469,
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
    "value": "=>",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1475,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1487,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1492,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1501,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1513,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1523,
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
    "value": "interface",
    "start": 1535,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1559,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1572,
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
    "value": "T",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1578,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1588,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1593,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1602,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1614,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1624,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1636,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1650,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 1660,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1674,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1683,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1691,
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
    "value": "string",
    "start": 1696,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1705,
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
    "value": "foo2",
    "start": 1717,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1727,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1739,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1756,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1781,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1785,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1796,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1820,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1829,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1843,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1857,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1869,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1879,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1891,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1901,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1906,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1915,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1933,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1940,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1944,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1955,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 1965,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1979,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1988,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2007,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2016,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2028,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2038,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2050,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "I17",
    "start": 2060,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2077,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2119,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2129,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2140,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "I19",
    "start": 2150,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2164,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2173,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2185,
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
    "value": "|",
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
    "type": "Identifier",
    "value": "foo2",
    "start": 2211,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2233,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "I20",
    "start": 2243,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2257,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2279,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2288,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2300,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2310,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2318,
    "end": 2319
  }
]
```

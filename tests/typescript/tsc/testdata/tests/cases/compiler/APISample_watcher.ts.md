__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
              },
              "start": 332,
              "end": 337
            },
            "start": 325,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 325,
          "end": 337
        }
      ],
      "declare": true,
      "start": 313,
      "end": 338
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 360,
                "end": 363
              },
              "start": 358,
              "end": 363
            },
            "start": 351,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 363
        }
      ],
      "declare": true,
      "start": 339,
      "end": 364
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
            "name": "fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "existsSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 387,
                      "end": 397
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 404,
                            "end": 410
                          },
                          "start": 402,
                          "end": 410
                        },
                        "start": 398,
                        "end": 410
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 413,
                        "end": 420
                      },
                      "start": 411,
                      "end": 420
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 387,
                    "end": 421
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "readdirSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 437
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 444,
                            "end": 450
                          },
                          "start": 442,
                          "end": 450
                        },
                        "start": 438,
                        "end": 450
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 453,
                          "end": 459
                        },
                        "start": 453,
                        "end": 461
                      },
                      "start": 451,
                      "end": 461
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 426,
                    "end": 462
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "readFileSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 479
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 490,
                            "end": 496
                          },
                          "start": 488,
                          "end": 496
                        },
                        "start": 480,
                        "end": 496
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "encoding",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 509,
                            "end": 515
                          },
                          "start": 507,
                          "end": 515
                        },
                        "start": 498,
                        "end": 515
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 518,
                        "end": 524
                      },
                      "start": 516,
                      "end": 524
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 467,
                    "end": 525
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "writeFileSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 543
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 554,
                            "end": 560
                          },
                          "start": 552,
                          "end": 560
                        },
                        "start": 544,
                        "end": 560
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 568,
                            "end": 571
                          },
                          "start": 566,
                          "end": 571
                        },
                        "start": 562,
                        "end": 571
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
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
                                      "name": "encoding",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 585,
                                      "end": 593
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 596,
                                        "end": 602
                                      },
                                      "start": 594,
                                      "end": 602
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 585,
                                    "end": 603
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "mode",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 604,
                                      "end": 608
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 611,
                                        "end": 617
                                      },
                                      "start": 609,
                                      "end": 617
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 604,
                                    "end": 618
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "flag",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 619,
                                      "end": 623
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 626,
                                        "end": 632
                                      },
                                      "start": 624,
                                      "end": 632
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 619,
                                    "end": 633
                                  }
                                ],
                                "start": 583,
                                "end": 635
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 638,
                                "end": 644
                              }
                            ],
                            "start": 583,
                            "end": 644
                          },
                          "start": 581,
                          "end": 644
                        },
                        "start": 573,
                        "end": 644
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 647,
                        "end": 651
                      },
                      "start": 645,
                      "end": 651
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 530,
                    "end": 652
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "watchFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 666
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 677,
                            "end": 683
                          },
                          "start": 675,
                          "end": 683
                        },
                        "start": 667,
                        "end": 683
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
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
                                  "name": "persistent",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 696,
                                  "end": 706
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 709,
                                    "end": 716
                                  },
                                  "start": 707,
                                  "end": 716
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 696,
                                "end": 717
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "interval",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 718,
                                  "end": 726
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 729,
                                    "end": 735
                                  },
                                  "start": 727,
                                  "end": 735
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 718,
                                "end": 736
                              }
                            ],
                            "start": 694,
                            "end": 738
                          },
                          "start": 692,
                          "end": 738
                        },
                        "start": 685,
                        "end": 738
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "listener",
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
                                "name": "curr",
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
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 759,
                                          "end": 764
                                        },
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
                                              "start": 766,
                                              "end": 770
                                            },
                                            "typeArguments": null,
                                            "start": 766,
                                            "end": 770
                                          },
                                          "start": 764,
                                          "end": 770
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 759,
                                        "end": 770
                                      }
                                    ],
                                    "start": 757,
                                    "end": 772
                                  },
                                  "start": 755,
                                  "end": 772
                                },
                                "start": 751,
                                "end": 772
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prev",
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
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 782,
                                          "end": 787
                                        },
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
                                              "start": 789,
                                              "end": 793
                                            },
                                            "typeArguments": null,
                                            "start": 789,
                                            "end": 793
                                          },
                                          "start": 787,
                                          "end": 793
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 782,
                                        "end": 793
                                      }
                                    ],
                                    "start": 780,
                                    "end": 795
                                  },
                                  "start": 778,
                                  "end": 795
                                },
                                "start": 774,
                                "end": 795
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 800,
                                "end": 804
                              },
                              "start": 797,
                              "end": 804
                            },
                            "start": 750,
                            "end": 804
                          },
                          "start": 748,
                          "end": 804
                        },
                        "start": 740,
                        "end": 804
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 807,
                        "end": 811
                      },
                      "start": 805,
                      "end": 811
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 657,
                    "end": 812
                  }
                ],
                "start": 381,
                "end": 814
              },
              "start": 379,
              "end": 814
            },
            "start": 377,
            "end": 814
          },
          "init": null,
          "definite": false,
          "start": 377,
          "end": 814
        }
      ],
      "declare": true,
      "start": 365,
      "end": 815
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
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 834,
                "end": 837
              },
              "start": 832,
              "end": 837
            },
            "start": 828,
            "end": 837
          },
          "init": null,
          "definite": false,
          "start": 828,
          "end": 837
        }
      ],
      "declare": true,
      "start": 816,
      "end": 838
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 852,
            "end": 854
          },
          "start": 847,
          "end": 854
        }
      ],
      "source": {
        "type": "Literal",
        "value": "typescript",
        "raw": "\"typescript\"",
        "start": 860,
        "end": 872
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 840,
      "end": 873
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watch",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 889
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rootFileNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 905,
                "end": 911
              },
              "start": 905,
              "end": 913
            },
            "start": 903,
            "end": 913
          },
          "start": 890,
          "end": 913
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 926
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CompilerOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 942
                },
                "start": 924,
                "end": 942
              },
              "typeArguments": null,
              "start": 924,
              "end": 942
            },
            "start": 922,
            "end": 942
          },
          "start": 915,
          "end": 942
        }
      ],
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
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 963,
                          "end": 965
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MapLike",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 966,
                          "end": 973
                        },
                        "start": 963,
                        "end": 973
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
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
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 976,
                                  "end": 983
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 985,
                                    "end": 991
                                  },
                                  "start": 983,
                                  "end": 991
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 976,
                                "end": 991
                              }
                            ],
                            "start": 974,
                            "end": 993
                          }
                        ],
                        "start": 973,
                        "end": 994
                      },
                      "start": 963,
                      "end": 994
                    },
                    "start": 961,
                    "end": 994
                  },
                  "start": 956,
                  "end": 994
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 997,
                  "end": 999
                },
                "definite": false,
                "start": 956,
                "end": 999
              }
            ],
            "declare": false,
            "start": 950,
            "end": 1000
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1055
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1063
                },
                "optional": false,
                "computed": false,
                "start": 1042,
                "end": 1063
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fileName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1064,
                      "end": 1072
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1086,
                              "end": 1091
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1092,
                              "end": 1100
                            },
                            "optional": false,
                            "computed": true,
                            "start": 1086,
                            "end": 1101
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1106,
                                  "end": 1113
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 1115,
                                  "end": 1116
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1106,
                                "end": 1116
                              }
                            ],
                            "start": 1104,
                            "end": 1118
                          },
                          "start": 1086,
                          "end": 1118
                        },
                        "directive": null,
                        "start": 1086,
                        "end": 1119
                      }
                    ],
                    "start": 1076,
                    "end": 1125
                  },
                  "id": null,
                  "generator": false,
                  "start": 1064,
                  "end": 1125
                }
              ],
              "optional": false,
              "start": 1042,
              "end": 1126
            },
            "directive": null,
            "start": 1042,
            "end": 1127
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
                  "name": "servicesHost",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1238,
                          "end": 1240
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LanguageServiceHost",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1241,
                          "end": 1260
                        },
                        "start": 1238,
                        "end": 1260
                      },
                      "typeArguments": null,
                      "start": 1238,
                      "end": 1260
                    },
                    "start": 1236,
                    "end": 1260
                  },
                  "start": 1224,
                  "end": 1260
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
                        "name": "getScriptFileNames",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1273,
                        "end": 1291
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rootFileNames",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1299,
                          "end": 1312
                        },
                        "id": null,
                        "generator": false,
                        "start": 1293,
                        "end": 1312
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1273,
                      "end": 1312
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getScriptVersion",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1322,
                        "end": 1338
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
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1341,
                            "end": 1349
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1354,
                              "end": 1359
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1360,
                              "end": 1368
                            },
                            "optional": false,
                            "computed": true,
                            "start": 1354,
                            "end": 1369
                          },
                          "operator": "&&",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "files",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1373,
                                    "end": 1378
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1379,
                                    "end": 1387
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1373,
                                  "end": 1388
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1389,
                                  "end": 1396
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1373,
                                "end": 1396
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1397,
                                "end": 1405
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1373,
                              "end": 1405
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1373,
                            "end": 1407
                          },
                          "start": 1354,
                          "end": 1407
                        },
                        "id": null,
                        "generator": false,
                        "start": 1340,
                        "end": 1407
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1322,
                      "end": 1407
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getScriptSnapshot",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1434
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1437,
                            "end": 1445
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1469,
                                      "end": 1471
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "existsSync",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1472,
                                      "end": 1482
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1469,
                                    "end": 1482
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fileName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1483,
                                      "end": 1491
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1469,
                                  "end": 1492
                                },
                                "prefix": true,
                                "start": 1468,
                                "end": 1492
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1519,
                                      "end": 1528
                                    },
                                    "start": 1512,
                                    "end": 1529
                                  }
                                ],
                                "start": 1494,
                                "end": 1543
                              },
                              "alternate": null,
                              "start": 1464,
                              "end": 1543
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1564,
                                      "end": 1566
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ScriptSnapshot",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1567,
                                      "end": 1581
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1564,
                                    "end": 1581
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fromString",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1582,
                                    "end": 1592
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1564,
                                  "end": 1592
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fs",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1593,
                                            "end": 1595
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "readFileSync",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1596,
                                            "end": 1608
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1593,
                                          "end": 1608
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fileName",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1609,
                                            "end": 1617
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1593,
                                        "end": 1618
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toString",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1619,
                                        "end": 1627
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1593,
                                      "end": 1627
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 1593,
                                    "end": 1629
                                  }
                                ],
                                "optional": false,
                                "start": 1564,
                                "end": 1630
                              },
                              "start": 1557,
                              "end": 1631
                            }
                          ],
                          "start": 1450,
                          "end": 1641
                        },
                        "id": null,
                        "generator": false,
                        "start": 1436,
                        "end": 1641
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1417,
                      "end": 1641
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getCurrentDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1651,
                        "end": 1670
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "process",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1678,
                              "end": 1685
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cwd",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1686,
                              "end": 1689
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1678,
                            "end": 1689
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1678,
                          "end": 1691
                        },
                        "id": null,
                        "generator": false,
                        "start": 1672,
                        "end": 1691
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1651,
                      "end": 1691
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getCompilationSettings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1701,
                        "end": 1723
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1731,
                          "end": 1738
                        },
                        "id": null,
                        "generator": false,
                        "start": 1725,
                        "end": 1738
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1701,
                      "end": 1738
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getDefaultLibFileName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1748,
                        "end": 1769
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
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1772,
                            "end": 1779
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1784,
                              "end": 1786
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getDefaultLibFilePath",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1787,
                              "end": 1808
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1784,
                            "end": 1808
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1809,
                              "end": 1816
                            }
                          ],
                          "optional": false,
                          "start": 1784,
                          "end": 1817
                        },
                        "id": null,
                        "generator": false,
                        "start": 1771,
                        "end": 1817
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1748,
                      "end": 1817
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1827,
                        "end": 1837
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
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1839,
                            "end": 1847
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1851,
                              "end": 1853
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "existsSync",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1854,
                              "end": 1864
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1851,
                            "end": 1864
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1865,
                              "end": 1873
                            }
                          ],
                          "optional": false,
                          "start": 1851,
                          "end": 1874
                        },
                        "id": null,
                        "generator": false,
                        "start": 1839,
                        "end": 1874
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1827,
                      "end": 1874
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "readFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1884,
                        "end": 1892
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
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1894,
                            "end": 1902
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1906,
                              "end": 1908
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "readFileSync",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1909,
                              "end": 1921
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1906,
                            "end": 1921
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1922,
                              "end": 1930
                            }
                          ],
                          "optional": false,
                          "start": 1906,
                          "end": 1931
                        },
                        "id": null,
                        "generator": false,
                        "start": 1894,
                        "end": 1931
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1884,
                      "end": 1931
                    }
                  ],
                  "start": 1263,
                  "end": 1938
                },
                "definite": false,
                "start": 1224,
                "end": 1938
              }
            ],
            "declare": false,
            "start": 1218,
            "end": 1939
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
                  "name": "services",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1992,
                  "end": 2000
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2003,
                      "end": 2005
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createLanguageService",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2006,
                      "end": 2027
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2003,
                    "end": 2027
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "servicesHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2040
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2042,
                          "end": 2044
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createDocumentRegistry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2067
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2042,
                        "end": 2067
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2042,
                      "end": 2069
                    }
                  ],
                  "optional": false,
                  "start": 2003,
                  "end": 2070
                },
                "definite": false,
                "start": 1992,
                "end": 2070
              }
            ],
            "declare": false,
            "start": 1986,
            "end": 2070
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2109,
                  "end": 2122
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2123,
                  "end": 2130
                },
                "optional": false,
                "computed": false,
                "start": 2109,
                "end": 2130
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fileName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2131,
                      "end": 2139
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "emitFile",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2198,
                            "end": 2206
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2207,
                              "end": 2215
                            }
                          ],
                          "optional": false,
                          "start": 2198,
                          "end": 2216
                        },
                        "directive": null,
                        "start": 2198,
                        "end": 2217
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2284,
                              "end": 2286
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "watchFile",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2287,
                              "end": 2296
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2284,
                            "end": 2296
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2297,
                              "end": 2305
                            },
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "persistent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2321,
                                    "end": 2331
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 2333,
                                    "end": 2337
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2321,
                                  "end": 2337
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "interval",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2339,
                                    "end": 2347
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 250,
                                    "raw": "250",
                                    "start": 2349,
                                    "end": 2352
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2339,
                                  "end": 2352
                                }
                              ],
                              "start": 2319,
                              "end": 2354
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "curr",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2369,
                                  "end": 2373
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2375,
                                  "end": 2379
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "curr",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2442,
                                            "end": 2446
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2447,
                                            "end": 2452
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2442,
                                          "end": 2452
                                        },
                                        "prefix": true,
                                        "start": 2441,
                                        "end": 2452
                                      },
                                      "operator": "<=",
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2457,
                                            "end": 2461
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2462,
                                            "end": 2467
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2457,
                                          "end": 2467
                                        },
                                        "prefix": true,
                                        "start": 2456,
                                        "end": 2467
                                      },
                                      "start": 2441,
                                      "end": 2467
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": null,
                                          "start": 2491,
                                          "end": 2498
                                        }
                                      ],
                                      "start": 2469,
                                      "end": 2516
                                    },
                                    "alternate": null,
                                    "start": 2437,
                                    "end": 2516
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "UpdateExpression",
                                      "operator": "++",
                                      "prefix": false,
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "files",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2603,
                                            "end": 2608
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fileName",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2609,
                                            "end": 2617
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 2603,
                                          "end": 2618
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "version",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2619,
                                          "end": 2626
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 2603,
                                        "end": 2626
                                      },
                                      "start": 2603,
                                      "end": 2628
                                    },
                                    "directive": null,
                                    "start": 2603,
                                    "end": 2629
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "emitFile",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2692,
                                        "end": 2700
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fileName",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2701,
                                          "end": 2709
                                        }
                                      ],
                                      "optional": false,
                                      "start": 2692,
                                      "end": 2710
                                    },
                                    "directive": null,
                                    "start": 2692,
                                    "end": 2711
                                  }
                                ],
                                "start": 2384,
                                "end": 2725
                              },
                              "id": null,
                              "generator": false,
                              "start": 2368,
                              "end": 2725
                            }
                          ],
                          "optional": false,
                          "start": 2284,
                          "end": 2726
                        },
                        "directive": null,
                        "start": 2284,
                        "end": 2727
                      }
                    ],
                    "start": 2143,
                    "end": 2733
                  },
                  "id": null,
                  "generator": false,
                  "start": 2131,
                  "end": 2733
                }
              ],
              "optional": false,
              "start": 2109,
              "end": 2734
            },
            "directive": null,
            "start": 2109,
            "end": 2735
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "emitFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 2750,
              "end": 2758
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2769,
                    "end": 2775
                  },
                  "start": 2767,
                  "end": 2775
                },
                "start": 2759,
                "end": 2775
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
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2791,
                        "end": 2797
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "services",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2800,
                            "end": 2808
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getEmitOutput",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2809,
                            "end": 2822
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2800,
                          "end": 2822
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2823,
                            "end": 2831
                          }
                        ],
                        "optional": false,
                        "start": 2800,
                        "end": 2832
                      },
                      "definite": false,
                      "start": 2791,
                      "end": 2832
                    }
                  ],
                  "declare": false,
                  "start": 2787,
                  "end": 2833
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2848,
                        "end": 2854
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "emitSkipped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2855,
                        "end": 2866
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2848,
                      "end": 2866
                    },
                    "prefix": true,
                    "start": 2847,
                    "end": 2866
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2882,
                              "end": 2889
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2890,
                              "end": 2893
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2882,
                            "end": 2893
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "Emitting ",
                                    "cooked": "Emitting "
                                  },
                                  "tail": false,
                                  "start": 2894,
                                  "end": 2906
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "",
                                    "cooked": ""
                                  },
                                  "tail": true,
                                  "start": 2914,
                                  "end": 2916
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fileName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2906,
                                  "end": 2914
                                }
                              ],
                              "start": 2894,
                              "end": 2916
                            }
                          ],
                          "optional": false,
                          "start": 2882,
                          "end": 2917
                        },
                        "directive": null,
                        "start": 2882,
                        "end": 2918
                      }
                    ],
                    "start": 2868,
                    "end": 2928
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2956,
                              "end": 2963
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2964,
                              "end": 2967
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2956,
                            "end": 2967
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "Emitting ",
                                    "cooked": "Emitting "
                                  },
                                  "tail": false,
                                  "start": 2968,
                                  "end": 2980
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": " failed",
                                    "cooked": " failed"
                                  },
                                  "tail": true,
                                  "start": 2988,
                                  "end": 2997
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fileName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2980,
                                  "end": 2988
                                }
                              ],
                              "start": 2968,
                              "end": 2997
                            }
                          ],
                          "optional": false,
                          "start": 2956,
                          "end": 2998
                        },
                        "directive": null,
                        "start": 2956,
                        "end": 2999
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "logErrors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3012,
                            "end": 3021
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3022,
                              "end": 3030
                            }
                          ],
                          "optional": false,
                          "start": 3012,
                          "end": 3031
                        },
                        "directive": null,
                        "start": 3012,
                        "end": 3032
                      }
                    ],
                    "start": 2942,
                    "end": 3042
                  },
                  "start": 2843,
                  "end": 3042
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3052,
                          "end": 3058
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "outputFiles",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3059,
                          "end": 3070
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3052,
                        "end": 3070
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3071,
                        "end": 3078
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3052,
                      "end": 3078
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3079,
                            "end": 3080
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3098,
                                    "end": 3100
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "writeFileSync",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3101,
                                    "end": 3114
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3098,
                                  "end": 3114
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3115,
                                      "end": 3116
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3117,
                                      "end": 3121
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3115,
                                    "end": 3121
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3123,
                                      "end": 3124
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "text",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3125,
                                      "end": 3129
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3123,
                                    "end": 3129
                                  },
                                  {
                                    "type": "Literal",
                                    "value": "utf8",
                                    "raw": "\"utf8\"",
                                    "start": 3131,
                                    "end": 3137
                                  }
                                ],
                                "optional": false,
                                "start": 3098,
                                "end": 3138
                              },
                              "directive": null,
                              "start": 3098,
                              "end": 3139
                            }
                          ],
                          "start": 3084,
                          "end": 3149
                        },
                        "id": null,
                        "generator": false,
                        "start": 3079,
                        "end": 3149
                      }
                    ],
                    "optional": false,
                    "start": 3052,
                    "end": 3150
                  },
                  "directive": null,
                  "start": 3052,
                  "end": 3151
                }
              ],
              "start": 2777,
              "end": 3157
            },
            "expression": false,
            "start": 2741,
            "end": 3157
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "logErrors",
              "optional": false,
              "typeAnnotation": null,
              "start": 3172,
              "end": 3181
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3192,
                    "end": 3198
                  },
                  "start": 3190,
                  "end": 3198
                },
                "start": 3182,
                "end": 3198
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
                        "name": "allDiagnostics",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3214,
                        "end": 3228
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3231,
                                    "end": 3239
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getCompilerOptionsDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3240,
                                    "end": 3269
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3231,
                                  "end": 3269
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 3231,
                                "end": 3271
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "concat",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3285,
                                "end": 3291
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3231,
                              "end": 3291
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3292,
                                    "end": 3300
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getSyntacticDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3301,
                                    "end": 3324
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3292,
                                  "end": 3324
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3325,
                                    "end": 3333
                                  }
                                ],
                                "optional": false,
                                "start": 3292,
                                "end": 3334
                              }
                            ],
                            "optional": false,
                            "start": 3231,
                            "end": 3335
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "concat",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3349,
                            "end": 3355
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3231,
                          "end": 3355
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "services",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3356,
                                "end": 3364
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getSemanticDiagnostics",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3365,
                                "end": 3387
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3356,
                              "end": 3387
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fileName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3388,
                                "end": 3396
                              }
                            ],
                            "optional": false,
                            "start": 3356,
                            "end": 3397
                          }
                        ],
                        "optional": false,
                        "start": 3231,
                        "end": 3398
                      },
                      "definite": false,
                      "start": 3214,
                      "end": 3398
                    }
                  ],
                  "declare": false,
                  "start": 3210,
                  "end": 3399
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allDiagnostics",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3409,
                        "end": 3423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3424,
                        "end": 3431
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3409,
                      "end": 3431
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "diagnostic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3432,
                            "end": 3442
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
                                    "name": "message",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3464,
                                    "end": 3471
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3474,
                                        "end": 3476
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "flattenDiagnosticMessageText",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3477,
                                        "end": 3505
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3474,
                                      "end": 3505
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "diagnostic",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3506,
                                          "end": 3516
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "messageText",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3517,
                                          "end": 3528
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3506,
                                        "end": 3528
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "\n",
                                        "raw": "\"\\n\"",
                                        "start": 3530,
                                        "end": 3534
                                      }
                                    ],
                                    "optional": false,
                                    "start": 3474,
                                    "end": 3535
                                  },
                                  "definite": false,
                                  "start": 3464,
                                  "end": 3535
                                }
                              ],
                              "declare": false,
                              "start": 3460,
                              "end": 3536
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "diagnostic",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3553,
                                  "end": 3563
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "file",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3564,
                                  "end": 3568
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3553,
                                "end": 3568
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "kind": "let",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "ObjectPattern",
                                          "decorators": [],
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3594,
                                                "end": 3598
                                              },
                                              "value": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3594,
                                                "end": 3598
                                              },
                                              "method": false,
                                              "shorthand": true,
                                              "computed": false,
                                              "optional": false,
                                              "start": 3594,
                                              "end": 3598
                                            },
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3600,
                                                "end": 3609
                                              },
                                              "value": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3600,
                                                "end": 3609
                                              },
                                              "method": false,
                                              "shorthand": true,
                                              "computed": false,
                                              "optional": false,
                                              "start": 3600,
                                              "end": 3609
                                            }
                                          ],
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3592,
                                          "end": 3611
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "diagnostic",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3614,
                                                "end": 3624
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "file",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3625,
                                                "end": 3629
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3614,
                                              "end": 3629
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "getLineAndCharacterOfPosition",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3630,
                                              "end": 3659
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 3614,
                                            "end": 3659
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "TSNonNullExpression",
                                              "expression": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3660,
                                                  "end": 3670
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "start",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3671,
                                                  "end": 3676
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3660,
                                                "end": 3676
                                              },
                                              "start": 3660,
                                              "end": 3677
                                            }
                                          ],
                                          "optional": false,
                                          "start": 3614,
                                          "end": 3678
                                        },
                                        "definite": false,
                                        "start": 3592,
                                        "end": 3678
                                      }
                                    ],
                                    "declare": false,
                                    "start": 3588,
                                    "end": 3679
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3696,
                                          "end": 3703
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3704,
                                          "end": 3707
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3696,
                                        "end": 3707
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "  Error ",
                                                "cooked": "  Error "
                                              },
                                              "tail": false,
                                              "start": 3708,
                                              "end": 3719
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": " (",
                                                "cooked": " ("
                                              },
                                              "tail": false,
                                              "start": 3743,
                                              "end": 3748
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": ",",
                                                "cooked": ","
                                              },
                                              "tail": false,
                                              "start": 3756,
                                              "end": 3760
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "): ",
                                                "cooked": "): "
                                              },
                                              "tail": false,
                                              "start": 3773,
                                              "end": 3779
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "",
                                                "cooked": ""
                                              },
                                              "tail": true,
                                              "start": 3786,
                                              "end": 3788
                                            }
                                          ],
                                          "expressions": [
                                            {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3719,
                                                  "end": 3729
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "file",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3730,
                                                  "end": 3734
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3719,
                                                "end": 3734
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "fileName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3735,
                                                "end": 3743
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3719,
                                              "end": 3743
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3748,
                                                "end": 3752
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 3755,
                                                "end": 3756
                                              },
                                              "start": 3748,
                                              "end": 3756
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3760,
                                                "end": 3769
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 3772,
                                                "end": 3773
                                              },
                                              "start": 3760,
                                              "end": 3773
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "message",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3779,
                                              "end": 3786
                                            }
                                          ],
                                          "start": 3708,
                                          "end": 3788
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3696,
                                      "end": 3789
                                    },
                                    "directive": null,
                                    "start": 3696,
                                    "end": 3790
                                  }
                                ],
                                "start": 3570,
                                "end": 3804
                              },
                              "alternate": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3840,
                                          "end": 3847
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3848,
                                          "end": 3851
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3840,
                                        "end": 3851
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "  Error: ",
                                                "cooked": "  Error: "
                                              },
                                              "tail": false,
                                              "start": 3852,
                                              "end": 3864
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "",
                                                "cooked": ""
                                              },
                                              "tail": true,
                                              "start": 3871,
                                              "end": 3873
                                            }
                                          ],
                                          "expressions": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "message",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3864,
                                              "end": 3871
                                            }
                                          ],
                                          "start": 3852,
                                          "end": 3873
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3840,
                                      "end": 3874
                                    },
                                    "directive": null,
                                    "start": 3840,
                                    "end": 3875
                                  }
                                ],
                                "start": 3822,
                                "end": 3889
                              },
                              "start": 3549,
                              "end": 3889
                            }
                          ],
                          "start": 3446,
                          "end": 3899
                        },
                        "id": null,
                        "generator": false,
                        "start": 3432,
                        "end": 3899
                      }
                    ],
                    "optional": false,
                    "start": 3409,
                    "end": 3900
                  },
                  "directive": null,
                  "start": 3409,
                  "end": 3901
                }
              ],
              "start": 3200,
              "end": 3907
            },
            "expression": false,
            "start": 3163,
            "end": 3907
          }
        ],
        "start": 944,
        "end": 3909
      },
      "expression": false,
      "start": 875,
      "end": 3909
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
            "name": "currentDirectoryFiles",
            "optional": false,
            "typeAnnotation": null,
            "start": 4004,
            "end": 4025
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4028,
                    "end": 4030
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readdirSync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4031,
                    "end": 4042
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4028,
                  "end": 4042
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "process",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4043,
                        "end": 4050
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cwd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4051,
                        "end": 4054
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4043,
                      "end": 4054
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4043,
                    "end": 4056
                  }
                ],
                "optional": false,
                "start": 4028,
                "end": 4057
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 4063,
                "end": 4069
              },
              "optional": false,
              "computed": false,
              "start": 4028,
              "end": 4069
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fileName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4070,
                    "end": 4078
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4081,
                        "end": 4089
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4090,
                        "end": 4096
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4081,
                      "end": 4096
                    },
                    "operator": ">=",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 4100,
                      "end": 4101
                    },
                    "start": 4081,
                    "end": 4101
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fileName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4105,
                          "end": 4113
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "substr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4114,
                          "end": 4120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4105,
                        "end": 4120
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4121,
                              "end": 4129
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4130,
                              "end": 4136
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4121,
                            "end": 4136
                          },
                          "operator": "-",
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 4139,
                            "end": 4140
                          },
                          "start": 4121,
                          "end": 4140
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 4142,
                          "end": 4143
                        }
                      ],
                      "optional": false,
                      "start": 4105,
                      "end": 4144
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": ".ts",
                      "raw": "\".ts\"",
                      "start": 4149,
                      "end": 4154
                    },
                    "start": 4105,
                    "end": 4154
                  },
                  "start": 4081,
                  "end": 4154
                },
                "id": null,
                "generator": false,
                "start": 4070,
                "end": 4154
              }
            ],
            "optional": false,
            "start": 4028,
            "end": 4155
          },
          "definite": false,
          "start": 4004,
          "end": 4155
        }
      ],
      "declare": false,
      "start": 3998,
      "end": 4156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "watch",
          "optional": false,
          "typeAnnotation": null,
          "start": 4179,
          "end": 4184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "currentDirectoryFiles",
            "optional": false,
            "typeAnnotation": null,
            "start": 4185,
            "end": 4206
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4210,
                  "end": 4216
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4218,
                      "end": 4220
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleKind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4221,
                      "end": 4231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4218,
                    "end": 4231
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CommonJS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4232,
                    "end": 4240
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4218,
                  "end": 4240
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4210,
                "end": 4240
              }
            ],
            "start": 4208,
            "end": 4242
          }
        ],
        "optional": false,
        "start": 4179,
        "end": 4243
      },
      "directive": null,
      "start": 4179,
      "end": 4244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 313,
  "end": 4244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 313,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 334,
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
    "value": "declare",
    "start": 339,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 365,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "existsSync",
    "start": 387,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 413,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "readdirSync",
    "start": 426,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "readFileSync",
    "start": 467,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 480,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 498,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "writeFileSync",
    "start": 530,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 544,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 562,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 573,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 585,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
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
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "watchFile",
    "start": 657,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 667,
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
    "value": "string",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 685,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "persistent",
    "start": 696,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 709,
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
    "value": "interval",
    "start": 718,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 740,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
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
    "value": "curr",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "mtime",
    "start": 759,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 774,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "mtime",
    "start": 782,
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
    "value": "Date",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 797,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 800,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 807,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 816,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 824,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 849,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 852,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 855,
    "end": 859
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 860,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 875,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "watch",
    "start": 884,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "rootFileNames",
    "start": 890,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 905,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 915,
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
    "value": "ts",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "CompilerOptions",
    "start": 927,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "files",
    "start": 956,
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
    "value": "ts",
    "start": 963,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "MapLike",
    "start": 966,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 976,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 985,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "rootFileNames",
    "start": 1042,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1064,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1092,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 1106,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1218,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "servicesHost",
    "start": 1224,
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
    "value": "ts",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "LanguageServiceHost",
    "start": 1241,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "getScriptFileNames",
    "start": 1273,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "rootFileNames",
    "start": 1299,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "getScriptVersion",
    "start": 1322,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1341,
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
    "value": "=>",
    "start": 1351,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 1354,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1360,
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
    "value": "&&",
    "start": 1370,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 1373,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1379,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 1389,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1397,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "getScriptSnapshot",
    "start": 1417,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1437,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1447,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1464,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "existsSync",
    "start": 1472,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1483,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1519,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1557,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "ScriptSnapshot",
    "start": 1567,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "fromString",
    "start": 1582,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 1593,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "readFileSync",
    "start": 1596,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1609,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1619,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
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
    "value": ")",
    "start": 1629,
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
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "getCurrentDirectory",
    "start": 1651,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1675,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 1678,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "cwd",
    "start": 1686,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "getCompilationSettings",
    "start": 1701,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1728,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1731,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "getDefaultLibFileName",
    "start": 1748,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1772,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1781,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1784,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "getDefaultLibFilePath",
    "start": 1787,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1809,
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
    "value": ",",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 1827,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1839,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 1851,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "existsSync",
    "start": 1854,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1865,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 1884,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1894,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1903,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 1906,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "readFileSync",
    "start": 1909,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 1922,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1986,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 1992,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2003,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "createLanguageService",
    "start": 2006,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "servicesHost",
    "start": 2028,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "createDocumentRegistry",
    "start": 2045,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "rootFileNames",
    "start": 2109,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 2123,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2131,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2140,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "emitFile",
    "start": 2198,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2207,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 2284,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "watchFile",
    "start": 2287,
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
    "value": "fileName",
    "start": 2297,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "persistent",
    "start": 2321,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2333,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "interval",
    "start": 2339,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Numeric",
    "value": "250",
    "start": 2349,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "curr",
    "start": 2369,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2375,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2381,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2437,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "curr",
    "start": 2442,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "mtime",
    "start": 2447,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 2453,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2457,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "mtime",
    "start": 2462,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2491,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 2603,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2609,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 2619,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2626,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "emitFile",
    "start": 2692,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2701,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2741,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "emitFile",
    "start": 2750,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2759,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2769,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2787,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2791,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 2800,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "getEmitOutput",
    "start": 2809,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2823,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2843,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2848,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "emitSkipped",
    "start": 2855,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2866,
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
    "value": "console",
    "start": 2882,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2890,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Template",
    "value": "`Emitting ${",
    "start": 2894,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2906,
    "end": 2914
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2914,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2937,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2956,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2964,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Template",
    "value": "`Emitting ${",
    "start": 2968,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2980,
    "end": 2988
  },
  {
    "type": "Template",
    "value": "} failed`",
    "start": 2988,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "logErrors",
    "start": 3012,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 3022,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 3052,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "outputFiles",
    "start": 3059,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 3071,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3081,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 3098,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "writeFileSync",
    "start": 3101,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3117,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 3125,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "String",
    "value": "\"utf8\"",
    "start": 3131,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3163,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "logErrors",
    "start": 3172,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 3182,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3192,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3210,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "allDiagnostics",
    "start": 3214,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 3231,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "getCompilerOptionsDiagnostics",
    "start": 3240,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3285,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 3292,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "getSyntacticDiagnostics",
    "start": 3301,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 3325,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3349,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 3356,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "getSemanticDiagnostics",
    "start": 3365,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 3388,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "allDiagnostics",
    "start": 3409,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 3424,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3432,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3443,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3460,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 3464,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3474,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "flattenDiagnosticMessageText",
    "start": 3477,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3506,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "messageText",
    "start": 3517,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "String",
    "value": "\"\\n\"",
    "start": 3530,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3549,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3553,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 3564,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3588,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 3594,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 3600,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3614,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 3625,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "getLineAndCharacterOfPosition",
    "start": 3630,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3660,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 3671,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3696,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3704,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Template",
    "value": "`  Error ${",
    "start": 3708,
    "end": 3719
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3719,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 3730,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 3735,
    "end": 3743
  },
  {
    "type": "Template",
    "value": "} (${",
    "start": 3743,
    "end": 3748
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 3748,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Template",
    "value": "},${",
    "start": 3756,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 3760,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Template",
    "value": "}): ${",
    "start": 3773,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 3779,
    "end": 3786
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3786,
    "end": 3788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3817,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3840,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3848,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Template",
    "value": "`  Error: ${",
    "start": 3852,
    "end": 3864
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 3864,
    "end": 3871
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3871,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3998,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "currentDirectoryFiles",
    "start": 4004,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 4028,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "readdirSync",
    "start": 4031,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 4043,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "cwd",
    "start": 4051,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 4063,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 4070,
    "end": 4078
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4078,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 4081,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4090,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 4097,
    "end": 4099
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4102,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 4105,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 4114,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 4121,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4130,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4145,
    "end": 4148
  },
  {
    "type": "String",
    "value": "\".ts\"",
    "start": 4149,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Identifier",
    "value": "watch",
    "start": 4179,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Identifier",
    "value": "currentDirectoryFiles",
    "start": 4185,
    "end": 4206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4206,
    "end": 4207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 4210,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 4218,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Identifier",
    "value": "ModuleKind",
    "start": 4221,
    "end": 4231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Identifier",
    "value": "CommonJS",
    "start": 4232,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4243,
    "end": 4244
  }
]
```

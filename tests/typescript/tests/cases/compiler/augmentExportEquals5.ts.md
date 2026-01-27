__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Express",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Request",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 56
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 57,
                "end": 60
              },
              "declare": false,
              "start": 39,
              "end": 60
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 32,
            "end": 60
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Response",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 90
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 91,
                "end": 94
              },
              "declare": false,
              "start": 72,
              "end": 94
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 65,
            "end": 94
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Application",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 127
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 128,
                "end": 131
              },
              "declare": false,
              "start": 106,
              "end": 131
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 99,
            "end": 131
          }
        ],
        "start": 26,
        "end": 133
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 133
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 150,
        "end": 159
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 181
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 189
                  },
                  "start": 180,
                  "end": 189
                },
                "typeArguments": null,
                "start": 180,
                "end": 189
              },
              "start": 178,
              "end": 189
            },
            "body": null,
            "expression": false,
            "start": 166,
            "end": 190
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRoute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 233
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
                          "name": "all",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 251
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
                              "name": "handler",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 255,
                              "end": 262
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RequestHandler",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 264,
                                    "end": 278
                                  },
                                  "typeArguments": null,
                                  "start": 264,
                                  "end": 278
                                },
                                "start": 264,
                                "end": 280
                              },
                              "start": 262,
                              "end": 280
                            },
                            "value": null,
                            "start": 252,
                            "end": 280
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IRoute",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 283,
                              "end": 289
                            },
                            "typeArguments": null,
                            "start": 283,
                            "end": 289
                          },
                          "start": 281,
                          "end": 289
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 248,
                        "end": 290
                      }
                    ],
                    "start": 234,
                    "end": 300
                  },
                  "declare": false,
                  "start": 217,
                  "end": 300
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRouterMatcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 334
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
                          "start": 335,
                          "end": 336
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 335,
                        "end": 336
                      }
                    ],
                    "start": 334,
                    "end": 337
                  },
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
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 359,
                                    "end": 365
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RegExp",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 366,
                                      "end": 372
                                    },
                                    "typeArguments": null,
                                    "start": 366,
                                    "end": 372
                                  }
                                ],
                                "start": 359,
                                "end": 372
                              },
                              "start": 357,
                              "end": 372
                            },
                            "start": 353,
                            "end": 372
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handlers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 377,
                              "end": 385
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RequestHandler",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 387,
                                    "end": 401
                                  },
                                  "typeArguments": null,
                                  "start": 387,
                                  "end": 401
                                },
                                "start": 387,
                                "end": 403
                              },
                              "start": 385,
                              "end": 403
                            },
                            "value": null,
                            "start": 374,
                            "end": 403
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
                              "start": 406,
                              "end": 407
                            },
                            "typeArguments": null,
                            "start": 406,
                            "end": 407
                          },
                          "start": 404,
                          "end": 407
                        },
                        "start": 352,
                        "end": 408
                      }
                    ],
                    "start": 338,
                    "end": 418
                  },
                  "declare": false,
                  "start": 310,
                  "end": 418
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRouter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 445
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
                          "start": 446,
                          "end": 447
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 446,
                        "end": 447
                      }
                    ],
                    "start": 445,
                    "end": 448
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 471
                      },
                      "typeArguments": null,
                      "start": 457,
                      "end": 471
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
                          "name": "route",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 486,
                          "end": 491
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
                                "start": 498,
                                "end": 504
                              },
                              "start": 496,
                              "end": 504
                            },
                            "start": 492,
                            "end": 504
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IRoute",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 507,
                              "end": 513
                            },
                            "typeArguments": null,
                            "start": 507,
                            "end": 513
                          },
                          "start": 505,
                          "end": 513
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 486,
                        "end": 514
                      }
                    ],
                    "start": 472,
                    "end": 524
                  },
                  "declare": false,
                  "start": 428,
                  "end": 524
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Router",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 556
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 567,
                            "end": 570
                          },
                          "start": 565,
                          "end": 570
                        },
                        "start": 557,
                        "end": 570
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Router",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 573,
                          "end": 579
                        },
                        "typeArguments": null,
                        "start": 573,
                        "end": 579
                      },
                      "start": 571,
                      "end": 579
                    },
                    "body": null,
                    "expression": false,
                    "start": 541,
                    "end": 580
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 534,
                  "end": 580
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Router",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 607,
                      "end": 613
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IRouter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 622,
                          "end": 629
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Router",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 630,
                                "end": 636
                              },
                              "typeArguments": null,
                              "start": 630,
                              "end": 636
                            }
                          ],
                          "start": 629,
                          "end": 637
                        },
                        "start": 622,
                        "end": 637
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 638,
                      "end": 640
                    },
                    "declare": false,
                    "start": 597,
                    "end": 640
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 590,
                  "end": 640
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Errback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 667
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
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 676,
                                  "end": 681
                                },
                                "typeArguments": null,
                                "start": 676,
                                "end": 681
                              },
                              "start": 674,
                              "end": 681
                            },
                            "start": 671,
                            "end": 681
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 684,
                            "end": 688
                          },
                          "start": 682,
                          "end": 688
                        },
                        "start": 670,
                        "end": 689
                      }
                    ],
                    "start": 668,
                    "end": 691
                  },
                  "declare": false,
                  "start": 650,
                  "end": 691
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Request",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 718
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 734
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 742
                        },
                        "optional": false,
                        "computed": false,
                        "start": 727,
                        "end": 742
                      },
                      "typeArguments": null,
                      "start": 727,
                      "end": 742
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
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 761
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 769,
                                "end": 775
                              },
                              "start": 767,
                              "end": 775
                            },
                            "start": 763,
                            "end": 775
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 778,
                            "end": 784
                          },
                          "start": 776,
                          "end": 784
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 758,
                        "end": 785
                      }
                    ],
                    "start": 743,
                    "end": 795
                  },
                  "declare": false,
                  "start": 701,
                  "end": 795
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Response",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 823
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 832,
                          "end": 839
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Response",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 840,
                          "end": 848
                        },
                        "optional": false,
                        "computed": false,
                        "start": 832,
                        "end": 848
                      },
                      "typeArguments": null,
                      "start": 832,
                      "end": 848
                    }
                  ],
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
                          "name": "charset",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 863,
                          "end": 870
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 872,
                            "end": 878
                          },
                          "start": 870,
                          "end": 878
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 863,
                        "end": 879
                      }
                    ],
                    "start": 849,
                    "end": 889
                  },
                  "declare": false,
                  "start": 805,
                  "end": 889
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ErrorRequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 909,
                    "end": 928
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
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 949,
                                "end": 952
                              },
                              "start": 947,
                              "end": 952
                            },
                            "start": 944,
                            "end": 952
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 959,
                                  "end": 966
                                },
                                "typeArguments": null,
                                "start": 959,
                                "end": 966
                              },
                              "start": 957,
                              "end": 966
                            },
                            "start": 954,
                            "end": 966
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 973,
                                  "end": 981
                                },
                                "typeArguments": null,
                                "start": 973,
                                "end": 981
                              },
                              "start": 971,
                              "end": 981
                            },
                            "start": 968,
                            "end": 981
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 989,
                                  "end": 997
                                },
                                "typeArguments": null,
                                "start": 989,
                                "end": 997
                              },
                              "start": 987,
                              "end": 997
                            },
                            "start": 983,
                            "end": 997
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1000,
                            "end": 1003
                          },
                          "start": 998,
                          "end": 1003
                        },
                        "start": 943,
                        "end": 1004
                      }
                    ],
                    "start": 929,
                    "end": 1014
                  },
                  "declare": false,
                  "start": 899,
                  "end": 1014
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1034,
                    "end": 1048
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
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1069,
                                  "end": 1076
                                },
                                "typeArguments": null,
                                "start": 1069,
                                "end": 1076
                              },
                              "start": 1067,
                              "end": 1076
                            },
                            "start": 1064,
                            "end": 1076
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1083,
                                  "end": 1091
                                },
                                "typeArguments": null,
                                "start": 1083,
                                "end": 1091
                              },
                              "start": 1081,
                              "end": 1091
                            },
                            "start": 1078,
                            "end": 1091
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1099,
                                  "end": 1107
                                },
                                "typeArguments": null,
                                "start": 1099,
                                "end": 1107
                              },
                              "start": 1097,
                              "end": 1107
                            },
                            "start": 1093,
                            "end": 1107
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1110,
                            "end": 1113
                          },
                          "start": 1108,
                          "end": 1113
                        },
                        "start": 1063,
                        "end": 1114
                      }
                    ],
                    "start": 1049,
                    "end": 1124
                  },
                  "declare": false,
                  "start": 1024,
                  "end": 1124
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Handler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1144,
                    "end": 1151
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1160,
                        "end": 1174
                      },
                      "typeArguments": null,
                      "start": 1160,
                      "end": 1174
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 1175,
                    "end": 1177
                  },
                  "declare": false,
                  "start": 1134,
                  "end": 1177
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestParamHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1197,
                    "end": 1216
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
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1237,
                                  "end": 1244
                                },
                                "typeArguments": null,
                                "start": 1237,
                                "end": 1244
                              },
                              "start": 1235,
                              "end": 1244
                            },
                            "start": 1232,
                            "end": 1244
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1251,
                                  "end": 1259
                                },
                                "typeArguments": null,
                                "start": 1251,
                                "end": 1259
                              },
                              "start": 1249,
                              "end": 1259
                            },
                            "start": 1246,
                            "end": 1259
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1267,
                                  "end": 1275
                                },
                                "typeArguments": null,
                                "start": 1267,
                                "end": 1275
                              },
                              "start": 1265,
                              "end": 1275
                            },
                            "start": 1261,
                            "end": 1275
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 1284,
                                "end": 1287
                              },
                              "start": 1282,
                              "end": 1287
                            },
                            "start": 1277,
                            "end": 1287
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1290,
                            "end": 1293
                          },
                          "start": 1288,
                          "end": 1293
                        },
                        "start": 1231,
                        "end": 1294
                      }
                    ],
                    "start": 1217,
                    "end": 1304
                  },
                  "declare": false,
                  "start": 1187,
                  "end": 1304
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1324,
                    "end": 1335
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IRouter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1344,
                        "end": 1351
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Application",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1352,
                              "end": 1363
                            },
                            "typeArguments": null,
                            "start": 1352,
                            "end": 1363
                          }
                        ],
                        "start": 1351,
                        "end": 1364
                      },
                      "start": 1344,
                      "end": 1364
                    },
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1366,
                          "end": 1373
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Application",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1374,
                          "end": 1385
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1366,
                        "end": 1385
                      },
                      "typeArguments": null,
                      "start": 1366,
                      "end": 1385
                    }
                  ],
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
                          "name": "routes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1400,
                          "end": 1406
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1408,
                            "end": 1411
                          },
                          "start": 1406,
                          "end": 1411
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1400,
                        "end": 1412
                      }
                    ],
                    "start": 1386,
                    "end": 1422
                  },
                  "declare": false,
                  "start": 1314,
                  "end": 1422
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1442,
                    "end": 1449
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1458,
                        "end": 1469
                      },
                      "typeArguments": null,
                      "start": 1458,
                      "end": 1469
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
                          "name": "createApplication",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1484,
                          "end": 1501
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Application",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1505,
                              "end": 1516
                            },
                            "typeArguments": null,
                            "start": 1505,
                            "end": 1516
                          },
                          "start": 1503,
                          "end": 1516
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 1484,
                        "end": 1517
                      }
                    ],
                    "start": 1470,
                    "end": 1527
                  },
                  "declare": false,
                  "start": 1432,
                  "end": 1527
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
                        "name": "static",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1549,
                            "end": 1552
                          },
                          "start": 1547,
                          "end": 1552
                        },
                        "start": 1541,
                        "end": 1552
                      },
                      "init": null,
                      "definite": false,
                      "start": 1541,
                      "end": 1552
                    }
                  ],
                  "declare": false,
                  "start": 1537,
                  "end": 1553
                }
              ],
              "start": 207,
              "end": 1559
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 195,
            "end": 1559
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1574,
              "end": 1575
            },
            "start": 1565,
            "end": 1576
          }
        ],
        "start": 160,
        "end": 1578
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 135,
      "end": 1578
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1579
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Express",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 49,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 72,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 99,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 106,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 116,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 135,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 143,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"express\"",
    "start": 150,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 166,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "e",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Express",
    "start": 182,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 195,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 217,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "IRoute",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 264,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
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
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "IRoute",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 310,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "IRouterMatcher",
    "start": 320,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 353,
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
    "value": "string",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 374,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 377,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 387,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 402,
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
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 428,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "IRouter",
    "start": 438,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 449,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 457,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "IRoute",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 534,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 541,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Router",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 557,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Router",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 590,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 597,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "Router",
    "start": 607,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 614,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "IRouter",
    "start": 622,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "Router",
    "start": 630,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 650,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Errback",
    "start": 660,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 684,
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
    "type": "Keyword",
    "value": "interface",
    "start": 701,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 711,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 719,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Express",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 735,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 778,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 805,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 815,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 824,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "Express",
    "start": 832,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 840,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "charset",
    "start": 863,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 899,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "ErrorRequestHandler",
    "start": 909,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "err",
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
    "value": "any",
    "start": 949,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "req",
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
    "value": "Request",
    "start": 959,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 973,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 989,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1024,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 1034,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 1069,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 1083,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "next",
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
    "value": "Function",
    "start": 1099,
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
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1134,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "Handler",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1152,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 1160,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1187,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "RequestParamHandler",
    "start": 1197,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 1232,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 1237,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 1246,
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
    "value": "Response",
    "start": 1251,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1267,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1277,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1314,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 1324,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1336,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "IRouter",
    "start": 1344,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 1352,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "Express",
    "start": 1366,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 1374,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "routes",
    "start": 1400,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1432,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "Express",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1450,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 1458,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "createApplication",
    "start": 1484,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 1505,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1537,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 1541,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1549,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1565,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "start": 44,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 56,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 37,
      "end": 66
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 82,
        "end": 91
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Request",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 128
                  },
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
                  "accessibility": null,
                  "static": false,
                  "start": 126,
                  "end": 137
                }
              ],
              "start": 116,
              "end": 143
            },
            "declare": false,
            "start": 98,
            "end": 143
          }
        ],
        "start": 92,
        "end": 145
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 67,
      "end": 145
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 51,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"express\"",
    "start": 56,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 75,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"express\"",
    "start": 82,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 98,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 126,
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
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Request",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Request",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "importKind": "value",
          "start": 9,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 24,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./augmentation",
        "raw": "\"./augmentation\"",
        "start": 42,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 59
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 74
                },
                "typeArguments": null,
                "start": 67,
                "end": 74
              },
              "start": 65,
              "end": 74
            },
            "start": 64,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 74
        }
      ],
      "declare": false,
      "start": 60,
      "end": 75
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 90
            },
            "optional": false,
            "computed": false,
            "start": 86,
            "end": 90
          },
          "definite": false,
          "start": 82,
          "end": 90
        }
      ],
      "declare": false,
      "start": 76,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
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
    "value": "Request",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"express\"",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "String",
    "value": "\"./augmentation\"",
    "start": 42,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  }
]
```

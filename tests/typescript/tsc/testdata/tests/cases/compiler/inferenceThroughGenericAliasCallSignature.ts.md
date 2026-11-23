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
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 178
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 179,
            "end": 184
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 191
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 194,
              "end": 199
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 186,
            "end": 199
          }
        ],
        "start": 178,
        "end": 200
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 225
                    },
                    "typeArguments": null,
                    "start": 224,
                    "end": 225
                  },
                  "start": 221,
                  "end": 225
                },
                "start": 218,
                "end": 225
              },
              "start": 216,
              "end": 225
            },
            "accessibility": null,
            "static": false,
            "start": 205,
            "end": 226
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "typeArguments": null,
                    "start": 248,
                    "end": 249
                  },
                  "start": 245,
                  "end": 249
                },
                "start": 242,
                "end": 249
              },
              "start": 240,
              "end": 249
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 250
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 260
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 269
              },
              "optional": false,
              "computed": false,
              "start": 254,
              "end": 269
            },
            "computed": true,
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
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 282
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Effect",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 289
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 290,
                              "end": 291
                            },
                            "typeArguments": null,
                            "start": 290,
                            "end": 291
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 293,
                              "end": 294
                            },
                            "typeArguments": null,
                            "start": 293,
                            "end": 294
                          }
                        ],
                        "start": 289,
                        "end": 295
                      },
                      "start": 283,
                      "end": 295
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 298
                      },
                      "typeArguments": null,
                      "start": 297,
                      "end": 298
                    }
                  ],
                  "start": 282,
                  "end": 299
                },
                "start": 274,
                "end": 299
              },
              "start": 272,
              "end": 299
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 253,
            "end": 300
          }
        ],
        "start": 201,
        "end": 302
      },
      "declare": false,
      "start": 162,
      "end": 302
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "succeed",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 327
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 329
          }
        ],
        "start": 327,
        "end": 330
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
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
                "start": 338,
                "end": 339
              },
              "typeArguments": null,
              "start": 338,
              "end": 339
            },
            "start": 336,
            "end": 339
          },
          "start": 331,
          "end": 339
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Effect",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 348
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
                },
                "typeArguments": null,
                "start": 349,
                "end": 350
              }
            ],
            "start": 348,
            "end": 351
          },
          "start": 342,
          "end": 351
        },
        "start": 340,
        "end": 351
      },
      "body": null,
      "expression": false,
      "start": 303,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 373
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
              "name": "Eff",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 377
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 392
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 393,
                    "end": 396
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 398,
                    "end": 401
                  }
                ],
                "start": 392,
                "end": 402
              },
              "start": 386,
              "end": 402
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 402
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 408
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 404,
            "end": 408
          }
        ],
        "start": 373,
        "end": 409
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "body",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 434
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 435,
                          "end": 438
                        },
                        "typeArguments": null,
                        "start": 435,
                        "end": 438
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 444
                        },
                        "typeArguments": null,
                        "start": 440,
                        "end": 444
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 446,
                        "end": 451
                      }
                    ],
                    "start": 434,
                    "end": 452
                  },
                  "start": 425,
                  "end": 452
                },
                "start": 422,
                "end": 452
              },
              "start": 419,
              "end": 452
            },
            "start": 417,
            "end": 452
          },
          "start": 413,
          "end": 452
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 469
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AEff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 470,
                    "end": 474
                  },
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Eff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 479
                      },
                      "typeArguments": null,
                      "start": 476,
                      "end": 479
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Effect",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 494
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 501,
                                "end": 503
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 501,
                              "end": 503
                            },
                            "start": 495,
                            "end": 503
                          },
                          {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 511,
                                "end": 512
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 511,
                              "end": 512
                            },
                            "start": 505,
                            "end": 512
                          }
                        ],
                        "start": 494,
                        "end": 513
                      },
                      "start": 488,
                      "end": 513
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 517
                      },
                      "typeArguments": null,
                      "start": 516,
                      "end": 517
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 520,
                      "end": 525
                    },
                    "start": 476,
                    "end": 525
                  }
                ],
                "start": 469,
                "end": 526
              },
              "start": 463,
              "end": 526
            },
            "start": 460,
            "end": 526
          },
          "start": 457,
          "end": 526
        },
        "start": 455,
        "end": 526
      },
      "body": null,
      "expression": false,
      "start": 353,
      "end": 527
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Req",
        "optional": false,
        "typeAnnotation": null,
        "start": 539,
        "end": 542
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "url",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 557
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 559,
                "end": 565
              },
              "start": 557,
              "end": 565
            },
            "accessibility": null,
            "static": false,
            "start": 545,
            "end": 565
          }
        ],
        "start": 543,
        "end": 567
      },
      "declare": false,
      "start": 529,
      "end": 567
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
            "name": "req",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Effect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 593
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 597
                      },
                      "typeArguments": null,
                      "start": 594,
                      "end": 597
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 602
                      },
                      "typeArguments": null,
                      "start": 599,
                      "end": 602
                    }
                  ],
                  "start": 593,
                  "end": 603
                },
                "start": 587,
                "end": 603
              },
              "start": 585,
              "end": 603
            },
            "start": 582,
            "end": 603
          },
          "init": null,
          "definite": false,
          "start": 582,
          "end": 603
        }
      ],
      "declare": true,
      "start": 568,
      "end": 604
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Make",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 615
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 617
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 616,
            "end": 617
          }
        ],
        "start": 615,
        "end": 618
      },
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
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 623
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 622,
              "end": 623
            }
          ],
          "start": 621,
          "end": 624
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Effect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 634
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Effect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 641,
                            "end": 647
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 648,
                                "end": 654
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 656,
                                  "end": 657
                                },
                                "typeArguments": null,
                                "start": 656,
                                "end": 657
                              }
                            ],
                            "start": 647,
                            "end": 658
                          },
                          "start": 641,
                          "end": 658
                        },
                        "start": 638,
                        "end": 658
                      },
                      "start": 635,
                      "end": 658
                    }
                  ],
                  "start": 634,
                  "end": 659
                },
                "start": 628,
                "end": 659
              },
              "start": 626,
              "end": 659
            },
            "start": 625,
            "end": 659
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 666
                },
                "typeArguments": null,
                "start": 665,
                "end": 666
              }
            ],
            "start": 664,
            "end": 667
          },
          "start": 661,
          "end": 667
        },
        "start": 621,
        "end": 667
      },
      "declare": false,
      "start": 606,
      "end": 668
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
            "name": "make",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Make",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 693
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 694,
                      "end": 701
                    }
                  ],
                  "start": 693,
                  "end": 702
                },
                "start": 689,
                "end": 702
              },
              "start": 687,
              "end": 702
            },
            "start": 683,
            "end": 702
          },
          "init": null,
          "definite": false,
          "start": 683,
          "end": 702
        }
      ],
      "declare": true,
      "start": 669,
      "end": 703
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 712
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "make",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 719
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "succeed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 727
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "gen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 728,
                      "end": 731
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": true,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "YieldExpression",
                                "delegate": true,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "req",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 756,
                                  "end": 759
                                },
                                "start": 749,
                                "end": 759
                              },
                              "directive": null,
                              "start": 749,
                              "end": 760
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 770,
                                "end": 772
                              },
                              "start": 763,
                              "end": 773
                            }
                          ],
                          "start": 745,
                          "end": 775
                        },
                        "expression": false,
                        "start": 732,
                        "end": 775
                      }
                    ],
                    "optional": false,
                    "start": 728,
                    "end": 776
                  }
                ],
                "optional": false,
                "start": 720,
                "end": 777
              }
            ],
            "optional": false,
            "start": 715,
            "end": 778
          },
          "definite": false,
          "start": 711,
          "end": 778
        }
      ],
      "declare": false,
      "start": 705,
      "end": 779
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
            "name": "check",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 794,
                      "end": 795
                    },
                    "start": 794,
                    "end": 795
                  }
                ],
                "start": 793,
                "end": 796
              },
              "start": 791,
              "end": 796
            },
            "start": 786,
            "end": 796
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 800
          },
          "definite": false,
          "start": 786,
          "end": 800
        }
      ],
      "declare": false,
      "start": 780,
      "end": 801
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Payload",
        "optional": false,
        "typeAnnotation": null,
        "start": 854,
        "end": 861
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
              "name": "scalars",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 873
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 875,
                "end": 881
              },
              "start": 873,
              "end": 881
            },
            "accessibility": null,
            "static": false,
            "start": 866,
            "end": 882
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "objects",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 890
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 892,
                "end": 898
              },
              "start": 890,
              "end": 898
            },
            "accessibility": null,
            "static": false,
            "start": 883,
            "end": 898
          }
        ],
        "start": 864,
        "end": 900
      },
      "declare": false,
      "start": 849,
      "end": 901
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FindResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 918
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 920
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 936
              },
              "typeArguments": null,
              "start": 929,
              "end": 936
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 919,
            "end": 936
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 938,
              "end": 939
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 938,
            "end": 939
          }
        ],
        "start": 918,
        "end": 940
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 944
          },
          "typeArguments": null,
          "start": 943,
          "end": 944
        },
        "extendsType": {
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
                "name": "select",
                "optional": false,
                "typeAnnotation": null,
                "start": 955,
                "end": 961
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 969,
                      "end": 970
                    },
                    "constraint": {
                      "type": "TSObjectKeyword",
                      "start": 979,
                      "end": 985
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 969,
                    "end": 985
                  },
                  "start": 963,
                  "end": 985
                },
                "start": 961,
                "end": 985
              },
              "accessibility": null,
              "static": false,
              "start": 955,
              "end": 985
            }
          ],
          "start": 953,
          "end": 987
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1002
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1013
              },
              "typeArguments": null,
              "start": 1012,
              "end": 1013
            },
            "start": 1006,
            "end": 1013
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1017
                },
                "typeArguments": null,
                "start": 1016,
                "end": 1017
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1019
                },
                "typeArguments": null,
                "start": 1018,
                "end": 1019
              },
              "start": 1016,
              "end": 1020
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 1029,
              "end": 1035
            },
            "trueType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1046,
                  "end": 1047
                },
                "typeArguments": null,
                "start": 1046,
                "end": 1047
              },
              "extendsType": {
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
                      "name": "objects",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1058,
                      "end": 1065
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1070,
                          "end": 1071
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1075,
                            "end": 1076
                          },
                          "typeArguments": null,
                          "start": 1075,
                          "end": 1076
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "O",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1086,
                                "end": 1087
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1086,
                              "end": 1087
                            },
                            "start": 1080,
                            "end": 1087
                          },
                          "start": 1079,
                          "end": 1090
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 1067,
                        "end": 1092
                      },
                      "start": 1065,
                      "end": 1092
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1058,
                    "end": 1092
                  }
                ],
                "start": 1056,
                "end": 1094
              },
              "trueType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FindResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1107,
                    "end": 1117
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1118,
                              "end": 1119
                            },
                            "typeArguments": null,
                            "start": 1118,
                            "end": 1119
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1122,
                              "end": 1129
                            },
                            "typeArguments": null,
                            "start": 1122,
                            "end": 1129
                          }
                        ],
                        "start": 1118,
                        "end": 1129
                      },
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1131,
                            "end": 1132
                          },
                          "typeArguments": null,
                          "start": 1131,
                          "end": 1132
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1133,
                            "end": 1134
                          },
                          "typeArguments": null,
                          "start": 1133,
                          "end": 1134
                        },
                        "start": 1131,
                        "end": 1135
                      }
                    ],
                    "start": 1117,
                    "end": 1136
                  },
                  "start": 1107,
                  "end": 1136
                },
                "start": 1107,
                "end": 1138
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1151,
                "end": 1156
              },
              "start": 1046,
              "end": 1156
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1167,
                    "end": 1168
                  },
                  "typeArguments": null,
                  "start": 1167,
                  "end": 1168
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "scalars",
                    "raw": "'scalars'",
                    "start": 1169,
                    "end": 1178
                  },
                  "start": 1169,
                  "end": 1178
                },
                "start": 1167,
                "end": 1179
              },
              "indexType": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1180,
                      "end": 1181
                    },
                    "typeArguments": null,
                    "start": 1180,
                    "end": 1181
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1190,
                          "end": 1191
                        },
                        "typeArguments": null,
                        "start": 1190,
                        "end": 1191
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "scalars",
                          "raw": "'scalars'",
                          "start": 1192,
                          "end": 1201
                        },
                        "start": 1192,
                        "end": 1201
                      },
                      "start": 1190,
                      "end": 1202
                    },
                    "start": 1184,
                    "end": 1202
                  }
                ],
                "start": 1180,
                "end": 1202
              },
              "start": 1167,
              "end": 1203
            },
            "start": 1016,
            "end": 1203
          },
          "optional": false,
          "readonly": null,
          "start": 992,
          "end": 1210
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1215,
          "end": 1220
        },
        "start": 943,
        "end": 1220
      },
      "declare": false,
      "start": 903,
      "end": 1221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MessagePayload",
        "optional": false,
        "typeAnnotation": null,
        "start": 1228,
        "end": 1242
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
              "name": "objects",
              "optional": false,
              "typeAnnotation": null,
              "start": 1247,
              "end": 1254
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1256,
                "end": 1258
              },
              "start": 1254,
              "end": 1258
            },
            "accessibility": null,
            "static": false,
            "start": 1247,
            "end": 1259
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scalars",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1267
            },
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
                      "name": "body",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1271,
                      "end": 1275
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1277,
                        "end": 1283
                      },
                      "start": 1275,
                      "end": 1283
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1271,
                    "end": 1283
                  }
                ],
                "start": 1269,
                "end": 1285
              },
              "start": 1267,
              "end": 1285
            },
            "accessibility": null,
            "static": false,
            "start": 1260,
            "end": 1285
          }
        ],
        "start": 1245,
        "end": 1287
      },
      "declare": false,
      "start": 1223,
      "end": 1288
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConversationPayload",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1313
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
              "name": "objects",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1325
            },
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
                      "name": "messages",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1329,
                      "end": 1337
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MessagePayload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1339,
                            "end": 1353
                          },
                          "typeArguments": null,
                          "start": 1339,
                          "end": 1353
                        },
                        "start": 1339,
                        "end": 1355
                      },
                      "start": 1337,
                      "end": 1355
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1329,
                    "end": 1355
                  }
                ],
                "start": 1327,
                "end": 1357
              },
              "start": 1325,
              "end": 1357
            },
            "accessibility": null,
            "static": false,
            "start": 1318,
            "end": 1358
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scalars",
              "optional": false,
              "typeAnnotation": null,
              "start": 1359,
              "end": 1366
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1368,
                "end": 1370
              },
              "start": 1366,
              "end": 1370
            },
            "accessibility": null,
            "static": false,
            "start": 1359,
            "end": 1370
          }
        ],
        "start": 1316,
        "end": 1372
      },
      "declare": false,
      "start": 1289,
      "end": 1373
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThreadPayload",
        "optional": false,
        "typeAnnotation": null,
        "start": 1379,
        "end": 1392
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
              "name": "objects",
              "optional": false,
              "typeAnnotation": null,
              "start": 1397,
              "end": 1404
            },
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
                      "name": "conversations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1421
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ConversationPayload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1423,
                            "end": 1442
                          },
                          "typeArguments": null,
                          "start": 1423,
                          "end": 1442
                        },
                        "start": 1423,
                        "end": 1444
                      },
                      "start": 1421,
                      "end": 1444
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1408,
                    "end": 1444
                  }
                ],
                "start": 1406,
                "end": 1446
              },
              "start": 1404,
              "end": 1446
            },
            "accessibility": null,
            "static": false,
            "start": 1397,
            "end": 1447
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scalars",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1455
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1457,
                "end": 1459
              },
              "start": 1455,
              "end": 1459
            },
            "accessibility": null,
            "static": false,
            "start": 1448,
            "end": 1459
          }
        ],
        "start": 1395,
        "end": 1461
      },
      "declare": false,
      "start": 1374,
      "end": 1462
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "findThread",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1491
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1493
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1492,
            "end": 1493
          }
        ],
        "start": 1491,
        "end": 1494
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
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
                "start": 1501,
                "end": 1502
              },
              "typeArguments": null,
              "start": 1501,
              "end": 1502
            },
            "start": 1499,
            "end": 1502
          },
          "start": 1495,
          "end": 1502
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FindResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 1505,
            "end": 1515
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThreadPayload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1516,
                  "end": 1529
                },
                "typeArguments": null,
                "start": 1516,
                "end": 1529
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1531,
                  "end": 1532
                },
                "typeArguments": null,
                "start": 1531,
                "end": 1532
              }
            ],
            "start": 1515,
            "end": 1533
          },
          "start": 1505,
          "end": 1533
        },
        "start": 1503,
        "end": 1533
      },
      "body": null,
      "expression": false,
      "start": 1464,
      "end": 1534
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
            "name": "thread",
            "optional": false,
            "typeAnnotation": null,
            "start": 1542,
            "end": 1548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "findThread",
              "optional": false,
              "typeAnnotation": null,
              "start": 1551,
              "end": 1561
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
                      "name": "select",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1566,
                      "end": 1572
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "conversations",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1576,
                            "end": 1589
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "select",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1593,
                                  "end": 1599
                                },
                                "value": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "messages",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1603,
                                        "end": 1611
                                      },
                                      "value": {
                                        "type": "ObjectExpression",
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "kind": "init",
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "select",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1615,
                                              "end": 1621
                                            },
                                            "value": {
                                              "type": "ObjectExpression",
                                              "properties": [
                                                {
                                                  "type": "Property",
                                                  "kind": "init",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "body",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1625,
                                                    "end": 1629
                                                  },
                                                  "value": {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true",
                                                    "start": 1631,
                                                    "end": 1635
                                                  },
                                                  "method": false,
                                                  "shorthand": false,
                                                  "computed": false,
                                                  "optional": false,
                                                  "start": 1625,
                                                  "end": 1635
                                                }
                                              ],
                                              "start": 1623,
                                              "end": 1637
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "optional": false,
                                            "start": 1615,
                                            "end": 1637
                                          }
                                        ],
                                        "start": 1613,
                                        "end": 1639
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1603,
                                      "end": 1639
                                    }
                                  ],
                                  "start": 1601,
                                  "end": 1641
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1593,
                                "end": 1641
                              }
                            ],
                            "start": 1591,
                            "end": 1643
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1576,
                          "end": 1643
                        }
                      ],
                      "start": 1574,
                      "end": 1645
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1566,
                    "end": 1645
                  }
                ],
                "start": 1562,
                "end": 1648
              }
            ],
            "optional": false,
            "start": 1551,
            "end": 1649
          },
          "definite": false,
          "start": 1542,
          "end": 1649
        }
      ],
      "declare": false,
      "start": 1536,
      "end": 1650
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThreadRow",
        "optional": false,
        "typeAnnotation": null,
        "start": 1657,
        "end": 1666
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1667,
              "end": 1668
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1667,
            "end": 1668
          }
        ],
        "start": 1666,
        "end": 1669
      },
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
              "name": "conversations",
              "optional": false,
              "typeAnnotation": null,
              "start": 1674,
              "end": 1687
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1689,
                  "end": 1694
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
                            "name": "messages",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1697,
                            "end": 1705
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1707,
                                "end": 1712
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "M",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1713,
                                      "end": 1714
                                    },
                                    "typeArguments": null,
                                    "start": 1713,
                                    "end": 1714
                                  }
                                ],
                                "start": 1712,
                                "end": 1715
                              },
                              "start": 1707,
                              "end": 1715
                            },
                            "start": 1705,
                            "end": 1715
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1697,
                          "end": 1715
                        }
                      ],
                      "start": 1695,
                      "end": 1717
                    }
                  ],
                  "start": 1694,
                  "end": 1718
                },
                "start": 1689,
                "end": 1718
              },
              "start": 1687,
              "end": 1718
            },
            "accessibility": null,
            "static": false,
            "start": 1674,
            "end": 1718
          }
        ],
        "start": 1672,
        "end": 1720
      },
      "declare": false,
      "start": 1652,
      "end": 1721
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "firstMessageViaAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 1740,
        "end": 1760
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1762
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1761,
            "end": 1762
          }
        ],
        "start": 1760,
        "end": 1763
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thread",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThreadRow",
                "optional": false,
                "typeAnnotation": null,
                "start": 1772,
                "end": 1781
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1782,
                      "end": 1783
                    },
                    "typeArguments": null,
                    "start": 1782,
                    "end": 1783
                  }
                ],
                "start": 1781,
                "end": 1784
              },
              "start": 1772,
              "end": 1784
            },
            "start": 1770,
            "end": 1784
          },
          "start": 1764,
          "end": 1784
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1787,
            "end": 1788
          },
          "typeArguments": null,
          "start": 1787,
          "end": 1788
        },
        "start": 1785,
        "end": 1788
      },
      "body": null,
      "expression": false,
      "start": 1723,
      "end": 1789
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "firstMessageInline",
        "optional": false,
        "typeAnnotation": null,
        "start": 1807,
        "end": 1825
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1826,
              "end": 1827
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1826,
            "end": 1827
          }
        ],
        "start": 1825,
        "end": 1828
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thread",
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
                    "name": "conversations",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1839,
                    "end": 1852
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1854,
                        "end": 1859
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
                                  "name": "messages",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1862,
                                  "end": 1870
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1872,
                                      "end": 1877
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "M",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1878,
                                            "end": 1879
                                          },
                                          "typeArguments": null,
                                          "start": 1878,
                                          "end": 1879
                                        }
                                      ],
                                      "start": 1877,
                                      "end": 1880
                                    },
                                    "start": 1872,
                                    "end": 1880
                                  },
                                  "start": 1870,
                                  "end": 1880
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1862,
                                "end": 1880
                              }
                            ],
                            "start": 1860,
                            "end": 1882
                          }
                        ],
                        "start": 1859,
                        "end": 1883
                      },
                      "start": 1854,
                      "end": 1883
                    },
                    "start": 1852,
                    "end": 1883
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1839,
                  "end": 1883
                }
              ],
              "start": 1837,
              "end": 1885
            },
            "start": 1835,
            "end": 1885
          },
          "start": 1829,
          "end": 1885
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1888,
            "end": 1889
          },
          "typeArguments": null,
          "start": 1888,
          "end": 1889
        },
        "start": 1886,
        "end": 1889
      },
      "body": null,
      "expression": false,
      "start": 1790,
      "end": 1890
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
            "name": "viaAlias",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1908,
                "end": 1914
              },
              "start": 1906,
              "end": 1914
            },
            "start": 1898,
            "end": 1914
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "firstMessageViaAlias",
                "optional": false,
                "typeAnnotation": null,
                "start": 1917,
                "end": 1937
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thread",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1938,
                  "end": 1944
                }
              ],
              "optional": false,
              "start": 1917,
              "end": 1945
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "body",
              "optional": false,
              "typeAnnotation": null,
              "start": 1946,
              "end": 1950
            },
            "optional": false,
            "computed": false,
            "start": 1917,
            "end": 1950
          },
          "definite": false,
          "start": 1898,
          "end": 1950
        }
      ],
      "declare": false,
      "start": 1892,
      "end": 1951
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1952
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 162,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 205,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 229,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 261,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 274,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 303,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "succeed",
    "start": 320,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 353,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 361,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 374,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 378,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 386,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 413,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 422,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 425,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 446,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 460,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 476,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 480,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 495,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 505,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 529,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 545,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 559,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 568,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 576,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 587,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 599,
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
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 606,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Make",
    "start": 611,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 628,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 638,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 669,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 677,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "Make",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 694,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 705,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "succeed",
    "start": 720,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 732,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 749,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 763,
    "end": 769
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
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
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 786,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 793,
    "end": 794
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 799,
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
    "value": "type",
    "start": 849,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 854,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "scalars",
    "start": 866,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 875,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 883,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 892,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 903,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "FindResult",
    "start": 908,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 921,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 945,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 955,
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
    "value": "infer",
    "start": 963,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 971,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1006,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1021,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1048,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 1058,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1080,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "FindResult",
    "start": 1107,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 1122,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1151,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "String",
    "value": "'scalars'",
    "start": 1169,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "String",
    "value": "'scalars'",
    "start": 1192,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1215,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "MessagePayload",
    "start": 1228,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 1247,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "scalars",
    "start": 1260,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 1271,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1277,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1286,
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
    "value": "type",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "ConversationPayload",
    "start": 1294,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 1318,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "messages",
    "start": 1329,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "MessagePayload",
    "start": 1339,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "scalars",
    "start": 1359,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1374,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "ThreadPayload",
    "start": 1379,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "objects",
    "start": 1397,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "conversations",
    "start": 1408,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "ConversationPayload",
    "start": 1423,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "scalars",
    "start": 1448,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "declare",
    "start": 1464,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1472,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "findThread",
    "start": 1481,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1495,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "FindResult",
    "start": 1505,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "ThreadPayload",
    "start": 1516,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1536,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "thread",
    "start": 1542,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "findThread",
    "start": 1551,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 1566,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "conversations",
    "start": 1576,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 1593,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "messages",
    "start": 1603,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 1625,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1631,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1652,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "ThreadRow",
    "start": 1657,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "conversations",
    "start": 1674,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "messages",
    "start": 1697,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1707,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1723,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1731,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "firstMessageViaAlias",
    "start": 1740,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "thread",
    "start": 1764,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "ThreadRow",
    "start": 1772,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1790,
    "end": 1797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1798,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "firstMessageInline",
    "start": 1807,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "thread",
    "start": 1829,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "conversations",
    "start": 1839,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1854,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "messages",
    "start": 1862,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1872,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1892,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "viaAlias",
    "start": 1898,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "firstMessageViaAlias",
    "start": 1917,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "thread",
    "start": 1938,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 1946,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  }
]
```

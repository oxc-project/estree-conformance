__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 24
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
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
            "start": 31,
            "end": 41
          }
        ],
        "start": 25,
        "end": 43
      },
      "abstract": false,
      "declare": false,
      "start": 17,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              },
              "start": 59,
              "end": 67
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
            "start": 58,
            "end": 68
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 85
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 92,
                      "end": 96
                    },
                    "start": 90,
                    "end": 96
                  },
                  "start": 86,
                  "end": 96
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    },
                    "start": 99,
                    "end": 107
                  },
                  "start": 98,
                  "end": 107
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 110,
                  "end": 116
                },
                "start": 108,
                "end": 116
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 134,
                        "end": 140
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 144
                      },
                      "start": 134,
                      "end": 144
                    },
                    "start": 127,
                    "end": 145
                  }
                ],
                "start": 117,
                "end": 151
              },
              "expression": false,
              "start": 85,
              "end": 151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 73,
            "end": 151
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitC",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 165
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 173
                      },
                      "typeArguments": null,
                      "start": 172,
                      "end": 173
                    },
                    "start": 170,
                    "end": 173
                  },
                  "start": 166,
                  "end": 173
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 178,
                      "end": 184
                    },
                    "start": 176,
                    "end": 184
                  },
                  "start": 175,
                  "end": 184
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 187,
                  "end": 193
                },
                "start": 185,
                "end": 193
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 211,
                          "end": 215
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 211,
                        "end": 217
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 221
                      },
                      "start": 211,
                      "end": 221
                    },
                    "start": 204,
                    "end": 222
                  }
                ],
                "start": 194,
                "end": 228
              },
              "expression": false,
              "start": 165,
              "end": 228
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 156,
            "end": 228
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 249
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 258
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 260,
                              "end": 266
                            },
                            "start": 258,
                            "end": 266
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 257,
                          "end": 266
                        }
                      ],
                      "start": 256,
                      "end": 267
                    },
                    "start": 254,
                    "end": 267
                  },
                  "start": 250,
                  "end": 267
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    },
                    "start": 270,
                    "end": 278
                  },
                  "start": 269,
                  "end": 278
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 281,
                  "end": 287
                },
                "start": 279,
                "end": 287
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 305,
                          "end": 309
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "optional": false,
                        "computed": false,
                        "start": 305,
                        "end": 311
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 315
                      },
                      "start": 305,
                      "end": 315
                    },
                    "start": 298,
                    "end": 316
                  }
                ],
                "start": 288,
                "end": 322
              },
              "expression": false,
              "start": 249,
              "end": 322
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 233,
            "end": 322
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 339
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 346,
                      "end": 350
                    },
                    "start": 344,
                    "end": 350
                  },
                  "start": 340,
                  "end": 350
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 355,
                      "end": 361
                    },
                    "start": 353,
                    "end": 361
                  },
                  "start": 352,
                  "end": 361
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 364,
                  "end": 370
                },
                "start": 362,
                "end": 370
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 389
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 392,
                        "end": 393
                      },
                      "start": 388,
                      "end": 393
                    },
                    "start": 381,
                    "end": 394
                  }
                ],
                "start": 371,
                "end": 400
              },
              "expression": false,
              "start": 339,
              "end": 400
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 400
          }
        ],
        "start": 52,
        "end": 402
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 402
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 410
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 420
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 421,
        "end": 424
      },
      "abstract": false,
      "declare": false,
      "start": 403,
      "end": 424
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 436
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              },
              "start": 444,
              "end": 452
            },
            "accessibility": null,
            "static": false,
            "start": 443,
            "end": 453
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid1",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 471
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 478,
                    "end": 482
                  },
                  "start": 476,
                  "end": 482
                },
                "start": 472,
                "end": 482
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 485,
                "end": 491
              },
              "start": 483,
              "end": 491
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 458,
            "end": 492
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid2",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 510
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 517,
                    "end": 521
                  },
                  "start": 515,
                  "end": 521
                },
                "start": 511,
                "end": 521
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 524,
                "end": 530
              },
              "start": 522,
              "end": 530
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 497,
            "end": 531
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitStructural",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 554
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 562,
                          "end": 563
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 565,
                            "end": 571
                          },
                          "start": 563,
                          "end": 571
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 562,
                        "end": 571
                      }
                    ],
                    "start": 561,
                    "end": 572
                  },
                  "start": 559,
                  "end": 572
                },
                "start": 555,
                "end": 572
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 575,
                "end": 581
              },
              "start": 573,
              "end": 581
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 536,
            "end": 582
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 604
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 612
                    },
                    "typeArguments": null,
                    "start": 611,
                    "end": 612
                  },
                  "start": 609,
                  "end": 612
                },
                "start": 605,
                "end": 612
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 615,
                "end": 621
              },
              "start": 613,
              "end": 621
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 587,
            "end": 622
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 639
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 646,
                    "end": 650
                  },
                  "start": 644,
                  "end": 650
                },
                "start": 640,
                "end": 650
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 653,
                "end": 659
              },
              "start": 651,
              "end": 659
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 627,
            "end": 660
          }
        ],
        "start": 437,
        "end": 662
      },
      "declare": false,
      "start": 425,
      "end": 662
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitStructural",
        "optional": false,
        "typeAnnotation": null,
        "start": 672,
        "end": 690
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 699,
                    "end": 700
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    },
                    "start": 700,
                    "end": 708
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 699,
                  "end": 708
                }
              ],
              "start": 697,
              "end": 710
            },
            "start": 695,
            "end": 710
          },
          "start": 691,
          "end": 710
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 715,
              "end": 721
            },
            "start": 713,
            "end": 721
          },
          "start": 712,
          "end": 721
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 724,
          "end": 730
        },
        "start": 722,
        "end": 730
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 745
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 748,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 754
                },
                "optional": false,
                "computed": false,
                "start": 748,
                "end": 754
              },
              "start": 744,
              "end": 754
            },
            "start": 737,
            "end": 755
          }
        ],
        "start": 731,
        "end": 757
      },
      "expression": false,
      "start": 663,
      "end": 757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "justThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 775
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 785
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 787,
                      "end": 793
                    },
                    "start": 785,
                    "end": 793
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 784,
                  "end": 793
                }
              ],
              "start": 782,
              "end": 795
            },
            "start": 780,
            "end": 795
          },
          "start": 776,
          "end": 795
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 798,
          "end": 804
        },
        "start": 796,
        "end": 804
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 818,
                "end": 822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 824
            },
            "start": 811,
            "end": 825
          }
        ],
        "start": 805,
        "end": 827
      },
      "expression": false,
      "start": 758,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "implicitThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 849
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 853,
              "end": 859
            },
            "start": 851,
            "end": 859
          },
          "start": 850,
          "end": 859
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 862,
          "end": 868
        },
        "start": 860,
        "end": 868
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 882,
                    "end": 886
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 888
                  },
                  "optional": false,
                  "computed": false,
                  "start": 882,
                  "end": 888
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 891,
                  "end": 892
                },
                "start": 882,
                "end": 892
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 895,
                "end": 897
              },
              "start": 882,
              "end": 897
            },
            "start": 875,
            "end": 898
          }
        ],
        "start": 869,
        "end": 900
      },
      "expression": false,
      "start": 828,
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 912
                },
                "typeArguments": null,
                "start": 911,
                "end": 912
              },
              "start": 909,
              "end": 912
            },
            "start": 905,
            "end": 912
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 922
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 924,
                  "end": 926
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 921,
                "end": 926
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 932,
                  "end": 945
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 953,
                      "end": 957
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 958,
                      "end": 959
                    },
                    "optional": false,
                    "computed": false,
                    "start": 953,
                    "end": 959
                  },
                  "id": null,
                  "generator": false,
                  "start": 947,
                  "end": 959
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 932,
                "end": 959
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1031,
                  "end": 1044
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 1056,
                          "end": 1058
                        },
                        "start": 1049,
                        "end": 1059
                      }
                    ],
                    "start": 1047,
                    "end": 1061
                  },
                  "expression": false,
                  "start": 1044,
                  "end": 1061
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1031,
                "end": 1061
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1067,
                  "end": 1085
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1105,
                            "end": 1109
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1110,
                            "end": 1111
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1105,
                          "end": 1111
                        },
                        "start": 1098,
                        "end": 1112
                      }
                    ],
                    "start": 1088,
                    "end": 1118
                  },
                  "expression": false,
                  "start": 1085,
                  "end": 1118
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1067,
                "end": 1118
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1124,
                  "end": 1141
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1161,
                            "end": 1165
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1167
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1161,
                          "end": 1167
                        },
                        "start": 1154,
                        "end": 1168
                      }
                    ],
                    "start": 1144,
                    "end": 1174
                  },
                  "expression": false,
                  "start": 1141,
                  "end": 1174
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1124,
                "end": 1174
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
                  "end": 1192
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1212,
                            "end": 1216
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1217,
                            "end": 1218
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1212,
                          "end": 1218
                        },
                        "start": 1205,
                        "end": 1219
                      }
                    ],
                    "start": 1195,
                    "end": 1225
                  },
                  "expression": false,
                  "start": 1192,
                  "end": 1225
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1180,
                "end": 1225
              }
            ],
            "start": 915,
            "end": 1228
          },
          "definite": false,
          "start": 905,
          "end": 1228
        }
      ],
      "declare": false,
      "start": 901,
      "end": 1228
    },
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1233
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1234,
            "end": 1247
          },
          "optional": false,
          "computed": false,
          "start": 1229,
          "end": 1247
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 1271,
                  "end": 1273
                },
                "start": 1264,
                "end": 1274
              }
            ],
            "start": 1262,
            "end": 1276
          },
          "expression": false,
          "start": 1250,
          "end": 1276
        },
        "start": 1229,
        "end": 1276
      },
      "directive": null,
      "start": 1229,
      "end": 1277
    },
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1278,
            "end": 1282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1296
          },
          "optional": false,
          "computed": false,
          "start": 1278,
          "end": 1296
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1305,
            "end": 1307
          },
          "id": null,
          "generator": false,
          "start": 1299,
          "end": 1307
        },
        "start": 1278,
        "end": 1307
      },
      "directive": null,
      "start": 1278,
      "end": 1308
    },
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1309,
            "end": 1313
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "typeAnnotation": null,
            "start": 1314,
            "end": 1332
          },
          "optional": false,
          "computed": false,
          "start": 1309,
          "end": 1332
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1355,
                    "end": 1359
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1361
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1355,
                  "end": 1361
                },
                "start": 1348,
                "end": 1362
              }
            ],
            "start": 1346,
            "end": 1364
          },
          "expression": false,
          "start": 1335,
          "end": 1364
        },
        "start": 1309,
        "end": 1364
      },
      "directive": null,
      "start": 1309,
      "end": 1365
    },
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1366,
            "end": 1370
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 1371,
            "end": 1388
          },
          "optional": false,
          "computed": false,
          "start": 1366,
          "end": 1388
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1411,
                    "end": 1415
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1417
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1411,
                  "end": 1417
                },
                "start": 1404,
                "end": 1418
              }
            ],
            "start": 1402,
            "end": 1420
          },
          "expression": false,
          "start": 1391,
          "end": 1420
        },
        "start": 1366,
        "end": 1420
      },
      "directive": null,
      "start": 1366,
      "end": 1421
    },
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1422,
            "end": 1426
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "typeAnnotation": null,
            "start": 1427,
            "end": 1445
          },
          "optional": false,
          "computed": false,
          "start": 1422,
          "end": 1445
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1454,
            "end": 1456
          },
          "id": null,
          "generator": false,
          "start": 1448,
          "end": 1456
        },
        "start": 1422,
        "end": 1456
      },
      "directive": null,
      "start": 1422,
      "end": 1457
    },
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1458,
            "end": 1462
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 1463,
            "end": 1480
          },
          "optional": false,
          "computed": false,
          "start": 1458,
          "end": 1480
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1489,
            "end": 1491
          },
          "id": null,
          "generator": false,
          "start": 1483,
          "end": 1491
        },
        "start": 1458,
        "end": 1491
      },
      "directive": null,
      "start": 1458,
      "end": 1492
    },
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1493,
            "end": 1497
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1498,
            "end": 1510
          },
          "optional": false,
          "computed": false,
          "start": 1493,
          "end": 1510
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1534,
                    "end": 1538
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1540
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1534,
                  "end": 1540
                },
                "start": 1527,
                "end": 1541
              }
            ],
            "start": 1525,
            "end": 1543
          },
          "expression": false,
          "start": 1513,
          "end": 1543
        },
        "start": 1493,
        "end": 1543
      },
      "directive": null,
      "start": 1493,
      "end": 1544
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
            "name": "ok",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1577
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1579,
                        "end": 1585
                      },
                      "start": 1577,
                      "end": 1585
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1576,
                    "end": 1586
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1587,
                      "end": 1588
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "this",
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
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1599,
                                      "end": 1600
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1602,
                                        "end": 1608
                                      },
                                      "start": 1600,
                                      "end": 1608
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1599,
                                    "end": 1608
                                  }
                                ],
                                "start": 1597,
                                "end": 1610
                              },
                              "start": 1595,
                              "end": 1610
                            },
                            "start": 1591,
                            "end": 1610
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1615,
                                "end": 1621
                              },
                              "start": 1613,
                              "end": 1621
                            },
                            "start": 1612,
                            "end": 1621
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1626,
                            "end": 1632
                          },
                          "start": 1623,
                          "end": 1632
                        },
                        "start": 1590,
                        "end": 1632
                      },
                      "start": 1588,
                      "end": 1632
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1587,
                    "end": 1632
                  }
                ],
                "start": 1575,
                "end": 1633
              },
              "start": 1573,
              "end": 1633
            },
            "start": 1571,
            "end": 1633
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1638,
                  "end": 1639
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 1641,
                  "end": 1643
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1638,
                "end": 1643
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1645,
                  "end": 1646
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1648,
                  "end": 1666
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1645,
                "end": 1666
              }
            ],
            "start": 1636,
            "end": 1668
          },
          "definite": false,
          "start": 1571,
          "end": 1668
        }
      ],
      "declare": false,
      "start": 1567,
      "end": 1669
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
            "name": "implicitAnyOk",
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
                      "name": "notSpecified",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1690,
                      "end": 1702
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1704,
                        "end": 1710
                      },
                      "start": 1702,
                      "end": 1710
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1690,
                    "end": 1711
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1712,
                      "end": 1713
                    },
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
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1719,
                                "end": 1725
                              },
                              "start": 1717,
                              "end": 1725
                            },
                            "start": 1716,
                            "end": 1725
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1730,
                            "end": 1736
                          },
                          "start": 1727,
                          "end": 1736
                        },
                        "start": 1715,
                        "end": 1736
                      },
                      "start": 1713,
                      "end": 1736
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1712,
                    "end": 1736
                  }
                ],
                "start": 1689,
                "end": 1737
              },
              "start": 1687,
              "end": 1737
            },
            "start": 1674,
            "end": 1737
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
                  "name": "notSpecified",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1742,
                  "end": 1754
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 1756,
                  "end": 1758
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1742,
                "end": 1758
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1760,
                  "end": 1761
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "implicitThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1763,
                  "end": 1775
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1760,
                "end": 1775
              }
            ],
            "start": 1740,
            "end": 1777
          },
          "definite": false,
          "start": 1674,
          "end": 1777
        }
      ],
      "declare": false,
      "start": 1670,
      "end": 1778
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
            "name": "ok",
            "optional": false,
            "typeAnnotation": null,
            "start": 1779,
            "end": 1781
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1782,
            "end": 1783
          },
          "optional": false,
          "computed": false,
          "start": 1779,
          "end": 1783
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 13,
            "raw": "13",
            "start": 1784,
            "end": 1786
          }
        ],
        "optional": false,
        "start": 1779,
        "end": 1787
      },
      "directive": null,
      "start": 1779,
      "end": 1788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "implicitThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 1789,
          "end": 1801
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1802,
            "end": 1804
          }
        ],
        "optional": false,
        "start": 1789,
        "end": 1805
      },
      "directive": null,
      "start": 1789,
      "end": 1806
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
            "name": "implicitAnyOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1820
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1821,
            "end": 1822
          },
          "optional": false,
          "computed": false,
          "start": 1807,
          "end": 1822
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1823,
            "end": 1825
          }
        ],
        "optional": false,
        "start": 1807,
        "end": 1826
      },
      "directive": null,
      "start": 1807,
      "end": 1827
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1833,
            "end": 1834
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1842
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1837,
            "end": 1844
          },
          "definite": false,
          "start": 1833,
          "end": 1844
        }
      ],
      "declare": false,
      "start": 1829,
      "end": 1845
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1851
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1858,
              "end": 1859
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1854,
            "end": 1861
          },
          "definite": false,
          "start": 1850,
          "end": 1861
        }
      ],
      "declare": false,
      "start": 1846,
      "end": 1862
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
            "name": "ripped",
            "optional": false,
            "typeAnnotation": null,
            "start": 1867,
            "end": 1873
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1876,
              "end": 1877
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1878,
              "end": 1887
            },
            "optional": false,
            "computed": false,
            "start": 1876,
            "end": 1887
          },
          "definite": false,
          "start": 1867,
          "end": 1887
        }
      ],
      "declare": false,
      "start": 1863,
      "end": 1888
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1889,
            "end": 1890
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1900
          },
          "optional": false,
          "computed": false,
          "start": 1889,
          "end": 1900
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1901,
            "end": 1903
          }
        ],
        "optional": false,
        "start": 1889,
        "end": 1904
      },
      "directive": null,
      "start": 1889,
      "end": 1905
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1906,
            "end": 1907
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 1908,
            "end": 1924
          },
          "optional": false,
          "computed": false,
          "start": 1906,
          "end": 1924
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1925,
            "end": 1927
          }
        ],
        "optional": false,
        "start": 1906,
        "end": 1928
      },
      "directive": null,
      "start": 1906,
      "end": 1929
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1930,
            "end": 1931
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1932,
            "end": 1944
          },
          "optional": false,
          "computed": false,
          "start": 1930,
          "end": 1944
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1945,
            "end": 1947
          }
        ],
        "optional": false,
        "start": 1930,
        "end": 1948
      },
      "directive": null,
      "start": 1930,
      "end": 1949
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1950,
            "end": 1951
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1952,
            "end": 1961
          },
          "optional": false,
          "computed": false,
          "start": 1950,
          "end": 1961
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1962,
            "end": 1964
          }
        ],
        "optional": false,
        "start": 1950,
        "end": 1965
      },
      "directive": null,
      "start": 1950,
      "end": 1966
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1967,
            "end": 1968
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 1969,
            "end": 1985
          },
          "optional": false,
          "computed": false,
          "start": 1967,
          "end": 1985
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1986,
            "end": 1988
          }
        ],
        "optional": false,
        "start": 1967,
        "end": 1989
      },
      "directive": null,
      "start": 1967,
      "end": 1990
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1992
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1993,
            "end": 2005
          },
          "optional": false,
          "computed": false,
          "start": 1991,
          "end": 2005
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 2006,
            "end": 2008
          }
        ],
        "optional": false,
        "start": 1991,
        "end": 2009
      },
      "directive": null,
      "start": 1991,
      "end": 2010
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
            "name": "reconstructed",
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2037,
                      "end": 2038
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2040,
                        "end": 2046
                      },
                      "start": 2038,
                      "end": 2046
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2037,
                    "end": 2047
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2052,
                      "end": 2064
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2071,
                              "end": 2072
                            },
                            "typeArguments": null,
                            "start": 2071,
                            "end": 2072
                          },
                          "start": 2069,
                          "end": 2072
                        },
                        "start": 2065,
                        "end": 2072
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2086,
                        "end": 2092
                      },
                      "start": 2084,
                      "end": 2092
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2052,
                    "end": 2093
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2160,
                      "end": 2169
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2176,
                              "end": 2177
                            },
                            "typeArguments": null,
                            "start": 2176,
                            "end": 2177
                          },
                          "start": 2174,
                          "end": 2177
                        },
                        "start": 2170,
                        "end": 2177
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2182,
                            "end": 2188
                          },
                          "start": 2180,
                          "end": 2188
                        },
                        "start": 2179,
                        "end": 2188
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2191,
                        "end": 2197
                      },
                      "start": 2189,
                      "end": 2197
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2160,
                    "end": 2198
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2203,
                      "end": 2219
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "this",
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
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2229,
                                      "end": 2230
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2233,
                                        "end": 2239
                                      },
                                      "start": 2231,
                                      "end": 2239
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2229,
                                    "end": 2239
                                  }
                                ],
                                "start": 2228,
                                "end": 2240
                              },
                              "start": 2226,
                              "end": 2240
                            },
                            "start": 2222,
                            "end": 2240
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2245,
                                "end": 2251
                              },
                              "start": 2243,
                              "end": 2251
                            },
                            "start": 2242,
                            "end": 2251
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2256,
                            "end": 2262
                          },
                          "start": 2253,
                          "end": 2262
                        },
                        "start": 2221,
                        "end": 2262
                      },
                      "start": 2219,
                      "end": 2262
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2203,
                    "end": 2263
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitVoid",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2268,
                      "end": 2280
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 2287,
                            "end": 2291
                          },
                          "start": 2285,
                          "end": 2291
                        },
                        "start": 2281,
                        "end": 2291
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2296,
                            "end": 2302
                          },
                          "start": 2294,
                          "end": 2302
                        },
                        "start": 2293,
                        "end": 2302
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2305,
                        "end": 2311
                      },
                      "start": 2303,
                      "end": 2311
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2268,
                    "end": 2312
                  }
                ],
                "start": 2030,
                "end": 2314
              },
              "start": 2028,
              "end": 2314
            },
            "start": 2015,
            "end": 2314
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2324,
                  "end": 2325
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 2327,
                  "end": 2329
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2324,
                "end": 2329
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2335,
                  "end": 2347
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2349,
                    "end": 2350
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2351,
                    "end": 2363
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2349,
                  "end": 2363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2335,
                "end": 2363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2369,
                  "end": 2378
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2382,
                    "end": 2391
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2380,
                  "end": 2391
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2369,
                "end": 2391
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2397,
                  "end": 2413
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2415,
                    "end": 2416
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2417,
                    "end": 2433
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2415,
                  "end": 2433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2397,
                "end": 2433
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2439,
                  "end": 2451
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2453,
                    "end": 2454
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitVoid",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2455,
                    "end": 2467
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2453,
                  "end": 2467
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2439,
                "end": 2467
              }
            ],
            "start": 2317,
            "end": 2469
          },
          "definite": false,
          "start": 2015,
          "end": 2469
        }
      ],
      "declare": false,
      "start": 2011,
      "end": 2470
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
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": null,
            "start": 2471,
            "end": 2484
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 2485,
            "end": 2497
          },
          "optional": false,
          "computed": false,
          "start": 2471,
          "end": 2497
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2498,
            "end": 2500
          }
        ],
        "optional": false,
        "start": 2471,
        "end": 2501
      },
      "directive": null,
      "start": 2471,
      "end": 2502
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
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": null,
            "start": 2503,
            "end": 2516
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 2517,
            "end": 2533
          },
          "optional": false,
          "computed": false,
          "start": 2503,
          "end": 2533
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 11,
            "raw": "11",
            "start": 2534,
            "end": 2536
          }
        ],
        "optional": false,
        "start": 2503,
        "end": 2537
      },
      "directive": null,
      "start": 2503,
      "end": 2538
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
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null,
            "start": 2543,
            "end": 2555
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "reconstructed",
              "optional": false,
              "typeAnnotation": null,
              "start": 2558,
              "end": 2571
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid",
              "optional": false,
              "typeAnnotation": null,
              "start": 2572,
              "end": 2584
            },
            "optional": false,
            "computed": false,
            "start": 2558,
            "end": 2584
          },
          "definite": false,
          "start": 2543,
          "end": 2584
        }
      ],
      "declare": false,
      "start": 2539,
      "end": 2585
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitVoid",
          "optional": false,
          "typeAnnotation": null,
          "start": 2586,
          "end": 2598
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 2599,
            "end": 2601
          }
        ],
        "optional": false,
        "start": 2586,
        "end": 2602
      },
      "directive": null,
      "start": 2586,
      "end": 2603
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
            "name": "unboundToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2660,
                              "end": 2661
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2663,
                                "end": 2669
                              },
                              "start": 2661,
                              "end": 2669
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2660,
                            "end": 2669
                          }
                        ],
                        "start": 2658,
                        "end": 2671
                      },
                      "start": 2656,
                      "end": 2671
                    },
                    "start": 2652,
                    "end": 2671
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2676,
                        "end": 2682
                      },
                      "start": 2674,
                      "end": 2682
                    },
                    "start": 2673,
                    "end": 2682
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2687,
                    "end": 2693
                  },
                  "start": 2684,
                  "end": 2693
                },
                "start": 2651,
                "end": 2693
              },
              "start": 2649,
              "end": 2693
            },
            "start": 2631,
            "end": 2693
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2696,
                "end": 2697
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2701,
                "end": 2702
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 2705,
                  "end": 2709
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2710,
                  "end": 2711
                },
                "optional": false,
                "computed": false,
                "start": 2705,
                "end": 2711
              },
              "start": 2701,
              "end": 2711
            },
            "id": null,
            "generator": false,
            "start": 2696,
            "end": 2711
          },
          "definite": false,
          "start": 2631,
          "end": 2711
        }
      ],
      "declare": false,
      "start": 2627,
      "end": 2712
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
            "name": "specifiedToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2763,
                              "end": 2764
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2766,
                                "end": 2772
                              },
                              "start": 2764,
                              "end": 2772
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2763,
                            "end": 2772
                          }
                        ],
                        "start": 2762,
                        "end": 2773
                      },
                      "start": 2760,
                      "end": 2773
                    },
                    "start": 2756,
                    "end": 2773
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2778,
                        "end": 2784
                      },
                      "start": 2776,
                      "end": 2784
                    },
                    "start": 2775,
                    "end": 2784
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2789,
                    "end": 2795
                  },
                  "start": 2786,
                  "end": 2795
                },
                "start": 2755,
                "end": 2795
              },
              "start": 2753,
              "end": 2795
            },
            "start": 2733,
            "end": 2795
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "typeAnnotation": null,
            "start": 2798,
            "end": 2816
          },
          "definite": false,
          "start": 2733,
          "end": 2816
        }
      ],
      "declare": false,
      "start": 2729,
      "end": 2817
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
            "name": "anyToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2847,
                              "end": 2848
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2850,
                                "end": 2856
                              },
                              "start": 2848,
                              "end": 2856
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2847,
                            "end": 2856
                          }
                        ],
                        "start": 2845,
                        "end": 2858
                      },
                      "start": 2843,
                      "end": 2858
                    },
                    "start": 2839,
                    "end": 2858
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2863,
                        "end": 2869
                      },
                      "start": 2861,
                      "end": 2869
                    },
                    "start": 2860,
                    "end": 2869
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2874,
                    "end": 2880
                  },
                  "start": 2871,
                  "end": 2880
                },
                "start": 2838,
                "end": 2880
              },
              "start": 2836,
              "end": 2880
            },
            "start": 2822,
            "end": 2880
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 2895,
                    "end": 2901
                  },
                  "start": 2893,
                  "end": 2901
                },
                "start": 2892,
                "end": 2901
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2904,
                "end": 2910
              },
              "start": 2902,
              "end": 2910
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2920,
                      "end": 2921
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2924,
                      "end": 2926
                    },
                    "start": 2920,
                    "end": 2926
                  },
                  "start": 2913,
                  "end": 2927
                }
              ],
              "start": 2911,
              "end": 2929
            },
            "expression": false,
            "start": 2883,
            "end": 2929
          },
          "definite": false,
          "start": 2822,
          "end": 2929
        }
      ],
      "declare": false,
      "start": 2818,
      "end": 2930
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
            "name": "unspecifiedLambda",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2959,
                        "end": 2965
                      },
                      "start": 2957,
                      "end": 2965
                    },
                    "start": 2956,
                    "end": 2965
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2970,
                    "end": 2976
                  },
                  "start": 2967,
                  "end": 2976
                },
                "start": 2955,
                "end": 2976
              },
              "start": 2953,
              "end": 2976
            },
            "start": 2936,
            "end": 2976
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2979,
                "end": 2980
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2984,
                "end": 2985
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 2988,
                "end": 2990
              },
              "start": 2984,
              "end": 2990
            },
            "id": null,
            "generator": false,
            "start": 2979,
            "end": 2990
          },
          "definite": false,
          "start": 2936,
          "end": 2990
        }
      ],
      "declare": false,
      "start": 2932,
      "end": 2991
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
            "name": "specifiedLambda",
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
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3020,
                        "end": 3024
                      },
                      "start": 3018,
                      "end": 3024
                    },
                    "start": 3014,
                    "end": 3024
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3029,
                        "end": 3035
                      },
                      "start": 3027,
                      "end": 3035
                    },
                    "start": 3026,
                    "end": 3035
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3040,
                    "end": 3046
                  },
                  "start": 3037,
                  "end": 3046
                },
                "start": 3013,
                "end": 3046
              },
              "start": 3011,
              "end": 3046
            },
            "start": 2996,
            "end": 3046
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3049,
                "end": 3050
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3054,
                "end": 3055
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 3058,
                "end": 3060
              },
              "start": 3054,
              "end": 3060
            },
            "id": null,
            "generator": false,
            "start": 3049,
            "end": 3060
          },
          "definite": false,
          "start": 2996,
          "end": 3060
        }
      ],
      "declare": false,
      "start": 2992,
      "end": 3061
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
            "name": "unspecifiedLambdaToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3104,
                              "end": 3105
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3107,
                                "end": 3113
                              },
                              "start": 3105,
                              "end": 3113
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3104,
                            "end": 3113
                          }
                        ],
                        "start": 3103,
                        "end": 3114
                      },
                      "start": 3101,
                      "end": 3114
                    },
                    "start": 3097,
                    "end": 3114
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3119,
                        "end": 3125
                      },
                      "start": 3117,
                      "end": 3125
                    },
                    "start": 3116,
                    "end": 3125
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3130,
                    "end": 3136
                  },
                  "start": 3127,
                  "end": 3136
                },
                "start": 3096,
                "end": 3136
              },
              "start": 3094,
              "end": 3136
            },
            "start": 3066,
            "end": 3136
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "unspecifiedLambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 3139,
            "end": 3156
          },
          "definite": false,
          "start": 3066,
          "end": 3156
        }
      ],
      "declare": false,
      "start": 3062,
      "end": 3157
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
            "name": "specifiedLambdaToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3198,
                              "end": 3199
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3201,
                                "end": 3207
                              },
                              "start": 3199,
                              "end": 3207
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3198,
                            "end": 3207
                          }
                        ],
                        "start": 3197,
                        "end": 3208
                      },
                      "start": 3195,
                      "end": 3208
                    },
                    "start": 3191,
                    "end": 3208
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3213,
                        "end": 3219
                      },
                      "start": 3211,
                      "end": 3219
                    },
                    "start": 3210,
                    "end": 3219
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3224,
                    "end": 3230
                  },
                  "start": 3221,
                  "end": 3230
                },
                "start": 3190,
                "end": 3230
              },
              "start": 3188,
              "end": 3230
            },
            "start": 3162,
            "end": 3230
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "specifiedLambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 3233,
            "end": 3248
          },
          "definite": false,
          "start": 3162,
          "end": 3248
        }
      ],
      "declare": false,
      "start": 3158,
      "end": 3249
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
            "name": "explicitCFunction",
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
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3290,
                          "end": 3291
                        },
                        "typeArguments": null,
                        "start": 3290,
                        "end": 3291
                      },
                      "start": 3288,
                      "end": 3291
                    },
                    "start": 3284,
                    "end": 3291
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3296,
                        "end": 3302
                      },
                      "start": 3294,
                      "end": 3302
                    },
                    "start": 3293,
                    "end": 3302
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3307,
                    "end": 3313
                  },
                  "start": 3304,
                  "end": 3313
                },
                "start": 3283,
                "end": 3313
              },
              "start": 3281,
              "end": 3313
            },
            "start": 3264,
            "end": 3313
          },
          "init": null,
          "definite": false,
          "start": 3264,
          "end": 3313
        }
      ],
      "declare": true,
      "start": 3252,
      "end": 3314
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
            "name": "explicitPropertyFunction",
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
                    "name": "this",
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
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3361,
                              "end": 3362
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3364,
                                "end": 3370
                              },
                              "start": 3362,
                              "end": 3370
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3361,
                            "end": 3370
                          }
                        ],
                        "start": 3360,
                        "end": 3371
                      },
                      "start": 3358,
                      "end": 3371
                    },
                    "start": 3354,
                    "end": 3371
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3376,
                        "end": 3382
                      },
                      "start": 3374,
                      "end": 3382
                    },
                    "start": 3373,
                    "end": 3382
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3387,
                    "end": 3393
                  },
                  "start": 3384,
                  "end": 3393
                },
                "start": 3353,
                "end": 3393
              },
              "start": 3351,
              "end": 3393
            },
            "start": 3327,
            "end": 3393
          },
          "init": null,
          "definite": false,
          "start": 3327,
          "end": 3393
        }
      ],
      "declare": true,
      "start": 3315,
      "end": 3394
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3395,
            "end": 3396
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3397,
            "end": 3406
          },
          "optional": false,
          "computed": false,
          "start": 3395,
          "end": 3406
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 3409,
          "end": 3426
        },
        "start": 3395,
        "end": 3426
      },
      "directive": null,
      "start": 3395,
      "end": 3427
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3428,
            "end": 3429
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3430,
            "end": 3439
          },
          "optional": false,
          "computed": false,
          "start": 3428,
          "end": 3439
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3457,
                    "end": 3458
                  },
                  "typeArguments": null,
                  "start": 3457,
                  "end": 3458
                },
                "start": 3455,
                "end": 3458
              },
              "start": 3451,
              "end": 3458
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3463,
                  "end": 3469
                },
                "start": 3461,
                "end": 3469
              },
              "start": 3460,
              "end": 3469
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 3480,
                      "end": 3484
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3485,
                      "end": 3486
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3480,
                    "end": 3486
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3489,
                    "end": 3490
                  },
                  "start": 3480,
                  "end": 3490
                },
                "start": 3473,
                "end": 3490
              }
            ],
            "start": 3471,
            "end": 3492
          },
          "expression": false,
          "start": 3442,
          "end": 3492
        },
        "start": 3428,
        "end": 3492
      },
      "directive": null,
      "start": 3428,
      "end": 3493
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3494,
            "end": 3495
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3496,
            "end": 3512
          },
          "optional": false,
          "computed": false,
          "start": 3494,
          "end": 3512
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitPropertyFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 3515,
          "end": 3539
        },
        "start": 3494,
        "end": 3539
      },
      "directive": null,
      "start": 3494,
      "end": 3540
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3541,
            "end": 3542
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3543,
            "end": 3559
          },
          "optional": false,
          "computed": false,
          "start": 3541,
          "end": 3559
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3578,
                        "end": 3579
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3581,
                          "end": 3587
                        },
                        "start": 3579,
                        "end": 3587
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3578,
                      "end": 3587
                    }
                  ],
                  "start": 3577,
                  "end": 3588
                },
                "start": 3575,
                "end": 3588
              },
              "start": 3571,
              "end": 3588
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3593,
                  "end": 3599
                },
                "start": 3591,
                "end": 3599
              },
              "start": 3590,
              "end": 3599
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 3610,
                      "end": 3614
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3615,
                      "end": 3616
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3610,
                    "end": 3616
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3619,
                    "end": 3620
                  },
                  "start": 3610,
                  "end": 3620
                },
                "start": 3603,
                "end": 3620
              }
            ],
            "start": 3601,
            "end": 3622
          },
          "expression": false,
          "start": 3562,
          "end": 3622
        },
        "start": 3541,
        "end": 3622
      },
      "directive": null,
      "start": 3541,
      "end": 3623
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3624,
            "end": 3625
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3626,
            "end": 3642
          },
          "optional": false,
          "computed": false,
          "start": 3624,
          "end": 3642
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": null,
            "start": 3645,
            "end": 3658
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3659,
            "end": 3675
          },
          "optional": false,
          "computed": false,
          "start": 3645,
          "end": 3675
        },
        "start": 3624,
        "end": 3675
      },
      "directive": null,
      "start": 3624,
      "end": 3676
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3716,
            "end": 3717
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3718,
            "end": 3727
          },
          "optional": false,
          "computed": false,
          "start": 3716,
          "end": 3727
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3730,
              "end": 3731
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 3735,
            "end": 3736
          },
          "id": null,
          "generator": false,
          "start": 3730,
          "end": 3736
        },
        "start": 3716,
        "end": 3736
      },
      "directive": null,
      "start": 3716,
      "end": 3737
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3738,
            "end": 3739
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 3740,
            "end": 3752
          },
          "optional": false,
          "computed": false,
          "start": 3738,
          "end": 3752
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3755,
              "end": 3756
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 3760,
            "end": 3761
          },
          "id": null,
          "generator": false,
          "start": 3755,
          "end": 3761
        },
        "start": 3738,
        "end": 3761
      },
      "directive": null,
      "start": 3738,
      "end": 3762
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3763,
            "end": 3764
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3765,
            "end": 3781
          },
          "optional": false,
          "computed": false,
          "start": 3763,
          "end": 3781
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3784,
              "end": 3785
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 3789,
            "end": 3790
          },
          "id": null,
          "generator": false,
          "start": 3784,
          "end": 3790
        },
        "start": 3763,
        "end": 3790
      },
      "directive": null,
      "start": 3763,
      "end": 3791
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3897,
            "end": 3898
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3899,
            "end": 3908
          },
          "optional": false,
          "computed": false,
          "start": 3897,
          "end": 3908
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3911,
              "end": 3912
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3916,
              "end": 3917
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 3920,
                "end": 3924
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3925,
                "end": 3926
              },
              "optional": false,
              "computed": false,
              "start": 3920,
              "end": 3926
            },
            "start": 3916,
            "end": 3926
          },
          "id": null,
          "generator": false,
          "start": 3911,
          "end": 3926
        },
        "start": 3897,
        "end": 3926
      },
      "directive": null,
      "start": 3897,
      "end": 3927
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3928,
            "end": 3929
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 3930,
            "end": 3942
          },
          "optional": false,
          "computed": false,
          "start": 3928,
          "end": 3942
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3945,
              "end": 3946
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3950,
              "end": 3951
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 3954,
                "end": 3958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3959,
                "end": 3960
              },
              "optional": false,
              "computed": false,
              "start": 3954,
              "end": 3960
            },
            "start": 3950,
            "end": 3960
          },
          "id": null,
          "generator": false,
          "start": 3945,
          "end": 3960
        },
        "start": 3928,
        "end": 3960
      },
      "directive": null,
      "start": 3928,
      "end": 3961
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3962,
            "end": 3963
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3964,
            "end": 3980
          },
          "optional": false,
          "computed": false,
          "start": 3962,
          "end": 3980
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3983,
              "end": 3984
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3988,
              "end": 3989
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 3992,
                "end": 3996
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3997,
                "end": 3998
              },
              "optional": false,
              "computed": false,
              "start": 3992,
              "end": 3998
            },
            "start": 3988,
            "end": 3998
          },
          "id": null,
          "generator": false,
          "start": 3983,
          "end": 3998
        },
        "start": 3962,
        "end": 3998
      },
      "directive": null,
      "start": 3962,
      "end": 3999
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4031,
            "end": 4032
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4033,
            "end": 4045
          },
          "optional": false,
          "computed": false,
          "start": 4031,
          "end": 4045
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 4048,
          "end": 4065
        },
        "start": 4031,
        "end": 4065
      },
      "directive": null,
      "start": 4031,
      "end": 4066
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4067,
            "end": 4068
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4069,
            "end": 4081
          },
          "optional": false,
          "computed": false,
          "start": 4067,
          "end": 4081
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4099,
                    "end": 4100
                  },
                  "typeArguments": null,
                  "start": 4099,
                  "end": 4100
                },
                "start": 4097,
                "end": 4100
              },
              "start": 4093,
              "end": 4100
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4105,
                  "end": 4111
                },
                "start": 4103,
                "end": 4111
              },
              "start": 4102,
              "end": 4111
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4122,
                      "end": 4126
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4127,
                      "end": 4128
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4122,
                    "end": 4128
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4131,
                    "end": 4132
                  },
                  "start": 4122,
                  "end": 4132
                },
                "start": 4115,
                "end": 4132
              }
            ],
            "start": 4113,
            "end": 4134
          },
          "expression": false,
          "start": 4084,
          "end": 4134
        },
        "start": 4067,
        "end": 4134
      },
      "directive": null,
      "start": 4067,
      "end": 4135
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4163,
            "end": 4164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 4165,
            "end": 4174
          },
          "optional": false,
          "computed": false,
          "start": 4163,
          "end": 4174
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 4186,
              "end": 4187
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4198,
                      "end": 4202
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4203,
                      "end": 4204
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4198,
                    "end": 4204
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4207,
                    "end": 4208
                  },
                  "start": 4198,
                  "end": 4208
                },
                "start": 4191,
                "end": 4208
              }
            ],
            "start": 4189,
            "end": 4210
          },
          "expression": false,
          "start": 4177,
          "end": 4210
        },
        "start": 4163,
        "end": 4210
      },
      "directive": null,
      "start": 4163,
      "end": 4211
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4212,
            "end": 4213
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 4214,
            "end": 4230
          },
          "optional": false,
          "computed": false,
          "start": 4212,
          "end": 4230
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 4242,
              "end": 4243
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4254,
                      "end": 4258
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4259,
                      "end": 4260
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4254,
                    "end": 4260
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4263,
                    "end": 4264
                  },
                  "start": 4254,
                  "end": 4264
                },
                "start": 4247,
                "end": 4264
              }
            ],
            "start": 4245,
            "end": 4266
          },
          "expression": false,
          "start": 4233,
          "end": 4266
        },
        "start": 4212,
        "end": 4266
      },
      "directive": null,
      "start": 4212,
      "end": 4267
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4268,
            "end": 4269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4270,
            "end": 4282
          },
          "optional": false,
          "computed": false,
          "start": 4268,
          "end": 4282
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 4294,
              "end": 4295
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4306,
                      "end": 4310
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4311,
                      "end": 4312
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4306,
                    "end": 4312
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4315,
                    "end": 4316
                  },
                  "start": 4306,
                  "end": 4316
                },
                "start": 4299,
                "end": 4316
              }
            ],
            "start": 4297,
            "end": 4318
          },
          "expression": false,
          "start": 4285,
          "end": 4318
        },
        "start": 4268,
        "end": 4318
      },
      "directive": null,
      "start": 4268,
      "end": 4319
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4348,
            "end": 4349
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4350,
            "end": 4362
          },
          "optional": false,
          "computed": false,
          "start": 4348,
          "end": 4362
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": null,
              "start": 4374,
              "end": 4378
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 4380,
              "end": 4381
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4392,
                      "end": 4396
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4397,
                      "end": 4398
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4392,
                    "end": 4398
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4401,
                    "end": 4402
                  },
                  "start": 4392,
                  "end": 4402
                },
                "start": 4385,
                "end": 4402
              }
            ],
            "start": 4383,
            "end": 4404
          },
          "expression": false,
          "start": 4365,
          "end": 4404
        },
        "start": 4348,
        "end": 4404
      },
      "directive": null,
      "start": 4348,
      "end": 4405
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4441,
            "end": 4442
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 4443,
            "end": 4452
          },
          "optional": false,
          "computed": false,
          "start": 4441,
          "end": 4452
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
              "optional": false,
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
                    "start": 4470,
                    "end": 4471
                  },
                  "typeArguments": null,
                  "start": 4470,
                  "end": 4471
                },
                "start": 4468,
                "end": 4471
              },
              "start": 4464,
              "end": 4471
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4476,
                  "end": 4482
                },
                "start": 4474,
                "end": 4482
              },
              "start": 4473,
              "end": 4482
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4493,
                      "end": 4497
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4498,
                      "end": 4499
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4493,
                    "end": 4499
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4502,
                    "end": 4503
                  },
                  "start": 4493,
                  "end": 4503
                },
                "start": 4486,
                "end": 4503
              }
            ],
            "start": 4484,
            "end": 4505
          },
          "expression": false,
          "start": 4455,
          "end": 4505
        },
        "start": 4441,
        "end": 4505
      },
      "directive": null,
      "start": 4441,
      "end": 4506
    },
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4535,
            "end": 4536
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null,
            "start": 4537,
            "end": 4549
          },
          "optional": false,
          "computed": false,
          "start": 4535,
          "end": 4549
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 4552,
              "end": 4553
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 4557,
            "end": 4558
          },
          "id": null,
          "generator": false,
          "start": 4552,
          "end": 4558
        },
        "start": 4535,
        "end": 4558
      },
      "directive": null,
      "start": 4535,
      "end": 4559
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4596,
        "end": 4601
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4608,
              "end": 4609
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4611,
                "end": 4617
              },
              "start": 4609,
              "end": 4617
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
            "start": 4608,
            "end": 4618
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "polymorphic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4630,
              "end": 4641
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 4648,
                      "end": 4652
                    },
                    "start": 4646,
                    "end": 4652
                  },
                  "start": 4642,
                  "end": 4652
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4655,
                  "end": 4661
                },
                "start": 4653,
                "end": 4661
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4671,
                        "end": 4675
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4676,
                        "end": 4677
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4671,
                      "end": 4677
                    },
                    "start": 4664,
                    "end": 4678
                  }
                ],
                "start": 4662,
                "end": 4680
              },
              "expression": false,
              "start": 4641,
              "end": 4680
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4623,
            "end": 4680
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicit",
              "optional": false,
              "typeAnnotation": null,
              "start": 4685,
              "end": 4693
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4700,
                        "end": 4705
                      },
                      "typeArguments": null,
                      "start": 4700,
                      "end": 4705
                    },
                    "start": 4698,
                    "end": 4705
                  },
                  "start": 4694,
                  "end": 4705
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4708,
                  "end": 4714
                },
                "start": 4706,
                "end": 4714
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4724,
                        "end": 4728
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4729,
                        "end": 4730
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4724,
                      "end": 4730
                    },
                    "start": 4717,
                    "end": 4731
                  }
                ],
                "start": 4715,
                "end": 4733
              },
              "expression": false,
              "start": 4693,
              "end": 4733
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4685,
            "end": 4733
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitStatic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4745,
              "end": 4759
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4773,
                        "end": 4778
                      },
                      "typeArguments": null,
                      "start": 4766,
                      "end": 4778
                    },
                    "start": 4764,
                    "end": 4778
                  },
                  "start": 4760,
                  "end": 4778
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4781,
                  "end": 4787
                },
                "start": 4779,
                "end": 4787
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4797,
                        "end": 4801
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4802,
                        "end": 4803
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4797,
                      "end": 4803
                    },
                    "start": 4790,
                    "end": 4804
                  }
                ],
                "start": 4788,
                "end": 4806
              },
              "expression": false,
              "start": 4759,
              "end": 4806
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4738,
            "end": 4806
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4818,
              "end": 4819
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4821,
                "end": 4827
              },
              "start": 4819,
              "end": 4827
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4811,
            "end": 4828
          }
        ],
        "start": 4602,
        "end": 4830
      },
      "abstract": false,
      "declare": false,
      "start": 4590,
      "end": 4830
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4837,
        "end": 4845
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4854,
        "end": 4859
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4866,
              "end": 4867
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4869,
                "end": 4875
              },
              "start": 4867,
              "end": 4875
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
            "start": 4866,
            "end": 4875
          }
        ],
        "start": 4860,
        "end": 4877
      },
      "abstract": false,
      "declare": false,
      "start": 4831,
      "end": 4877
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4884,
        "end": 4889
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4896,
              "end": 4897
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4899,
                "end": 4905
              },
              "start": 4897,
              "end": 4905
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
            "start": 4896,
            "end": 4905
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "polymorphic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4910,
              "end": 4921
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 4928,
                      "end": 4932
                    },
                    "start": 4926,
                    "end": 4932
                  },
                  "start": 4922,
                  "end": 4932
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4935,
                  "end": 4941
                },
                "start": 4933,
                "end": 4941
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4951,
                        "end": 4955
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4956,
                        "end": 4957
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4951,
                      "end": 4957
                    },
                    "start": 4944,
                    "end": 4958
                  }
                ],
                "start": 4942,
                "end": 4960
              },
              "expression": false,
              "start": 4921,
              "end": 4960
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4910,
            "end": 4960
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicit",
              "optional": false,
              "typeAnnotation": null,
              "start": 4965,
              "end": 4973
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4980,
                        "end": 4985
                      },
                      "typeArguments": null,
                      "start": 4980,
                      "end": 4985
                    },
                    "start": 4978,
                    "end": 4985
                  },
                  "start": 4974,
                  "end": 4985
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4988,
                  "end": 4994
                },
                "start": 4986,
                "end": 4994
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 5004,
                        "end": 5008
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5009,
                        "end": 5010
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5004,
                      "end": 5010
                    },
                    "start": 4997,
                    "end": 5011
                  }
                ],
                "start": 4995,
                "end": 5013
              },
              "expression": false,
              "start": 4973,
              "end": 5013
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4965,
            "end": 5013
          }
        ],
        "start": 4890,
        "end": 5015
      },
      "abstract": false,
      "declare": false,
      "start": 4878,
      "end": 5015
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5022,
        "end": 5030
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5039,
        "end": 5044
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5051,
              "end": 5052
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5054,
                "end": 5060
              },
              "start": 5052,
              "end": 5060
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
            "start": 5051,
            "end": 5060
          }
        ],
        "start": 5045,
        "end": 5062
      },
      "abstract": false,
      "declare": false,
      "start": 5016,
      "end": 5062
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5067,
            "end": 5069
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5076,
              "end": 5081
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5072,
            "end": 5083
          },
          "definite": false,
          "start": 5067,
          "end": 5083
        }
      ],
      "declare": false,
      "start": 5063,
      "end": 5084
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5089,
            "end": 5091
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5098,
              "end": 5103
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5094,
            "end": 5105
          },
          "definite": false,
          "start": 5089,
          "end": 5105
        }
      ],
      "declare": false,
      "start": 5085,
      "end": 5106
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5111,
            "end": 5113
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5120,
              "end": 5128
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5116,
            "end": 5130
          },
          "definite": false,
          "start": 5111,
          "end": 5130
        }
      ],
      "declare": false,
      "start": 5107,
      "end": 5131
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5136,
            "end": 5138
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5145,
              "end": 5153
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5141,
            "end": 5155
          },
          "definite": false,
          "start": 5136,
          "end": 5155
        }
      ],
      "declare": false,
      "start": 5132,
      "end": 5156
    },
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5157,
            "end": 5159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5160,
            "end": 5171
          },
          "optional": false,
          "computed": false,
          "start": 5157,
          "end": 5171
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5174,
            "end": 5176
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5177,
            "end": 5188
          },
          "optional": false,
          "computed": false,
          "start": 5174,
          "end": 5188
        },
        "start": 5157,
        "end": 5188
      },
      "directive": null,
      "start": 5157,
      "end": 5188
    },
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5220,
            "end": 5222
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5223,
            "end": 5234
          },
          "optional": false,
          "computed": false,
          "start": 5220,
          "end": 5234
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5237,
            "end": 5239
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5240,
            "end": 5251
          },
          "optional": false,
          "computed": false,
          "start": 5237,
          "end": 5251
        },
        "start": 5220,
        "end": 5251
      },
      "directive": null,
      "start": 5220,
      "end": 5251
    },
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5312,
            "end": 5314
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5315,
            "end": 5326
          },
          "optional": false,
          "computed": false,
          "start": 5312,
          "end": 5326
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5329,
            "end": 5331
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5332,
            "end": 5343
          },
          "optional": false,
          "computed": false,
          "start": 5329,
          "end": 5343
        },
        "start": 5312,
        "end": 5343
      },
      "directive": null,
      "start": 5312,
      "end": 5343
    },
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5370,
            "end": 5372
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5373,
            "end": 5384
          },
          "optional": false,
          "computed": false,
          "start": 5370,
          "end": 5384
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5387,
            "end": 5389
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5390,
            "end": 5398
          },
          "optional": false,
          "computed": false,
          "start": 5387,
          "end": 5398
        },
        "start": 5370,
        "end": 5398
      },
      "directive": null,
      "start": 5370,
      "end": 5398
    },
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5422,
            "end": 5424
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5425,
            "end": 5436
          },
          "optional": false,
          "computed": false,
          "start": 5422,
          "end": 5436
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5439,
            "end": 5441
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5442,
            "end": 5453
          },
          "optional": false,
          "computed": false,
          "start": 5439,
          "end": 5453
        },
        "start": 5422,
        "end": 5453
      },
      "directive": null,
      "start": 5422,
      "end": 5453
    },
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5493,
            "end": 5495
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5496,
            "end": 5504
          },
          "optional": false,
          "computed": false,
          "start": 5493,
          "end": 5504
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5507,
            "end": 5509
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5510,
            "end": 5521
          },
          "optional": false,
          "computed": false,
          "start": 5507,
          "end": 5521
        },
        "start": 5493,
        "end": 5521
      },
      "directive": null,
      "start": 5493,
      "end": 5521
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 5623,
        "end": 5636
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 5643,
                "end": 5644
              },
              "typeArguments": null,
              "start": 5643,
              "end": 5644
            },
            "start": 5641,
            "end": 5644
          },
          "start": 5637,
          "end": 5644
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
                  "type": "ThisExpression",
                  "start": 5652,
                  "end": 5656
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5657,
                  "end": 5658
                },
                "optional": false,
                "computed": false,
                "start": 5652,
                "end": 5658
              },
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 5661,
                "end": 5663
              },
              "start": 5652,
              "end": 5663
            },
            "directive": null,
            "start": 5652,
            "end": 5664
          }
        ],
        "start": 5646,
        "end": 5666
      },
      "expression": false,
      "start": 5614,
      "end": 5666
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralTypeThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 5676,
        "end": 5691
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5699,
                    "end": 5700
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5702,
                      "end": 5708
                    },
                    "start": 5700,
                    "end": 5708
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5699,
                  "end": 5708
                }
              ],
              "start": 5698,
              "end": 5709
            },
            "start": 5696,
            "end": 5709
          },
          "start": 5692,
          "end": 5709
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
                  "type": "ThisExpression",
                  "start": 5717,
                  "end": 5721
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5722,
                  "end": 5723
                },
                "optional": false,
                "computed": false,
                "start": 5717,
                "end": 5723
              },
              "right": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 5726,
                "end": 5730
              },
              "start": 5717,
              "end": 5730
            },
            "directive": null,
            "start": 5717,
            "end": 5731
          }
        ],
        "start": 5711,
        "end": 5733
      },
      "expression": false,
      "start": 5667,
      "end": 5733
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 5743,
        "end": 5750
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 5757,
              "end": 5760
            },
            "start": 5755,
            "end": 5760
          },
          "start": 5751,
          "end": 5760
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
                  "type": "ThisExpression",
                  "start": 5768,
                  "end": 5772
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5773,
                  "end": 5774
                },
                "optional": false,
                "computed": false,
                "start": 5768,
                "end": 5774
              },
              "right": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 5777,
                "end": 5781
              },
              "start": 5768,
              "end": 5781
            },
            "directive": null,
            "start": 5768,
            "end": 5782
          }
        ],
        "start": 5762,
        "end": 5784
      },
      "expression": false,
      "start": 5734,
      "end": 5784
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
            "name": "interfaceThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 5789,
            "end": 5802
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "InterfaceThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 5809,
              "end": 5822
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5805,
            "end": 5824
          },
          "definite": false,
          "start": 5789,
          "end": 5824
        }
      ],
      "declare": false,
      "start": 5785,
      "end": 5825
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
            "name": "literalTypeThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 5830,
            "end": 5845
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "LiteralTypeThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 5852,
              "end": 5867
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5848,
            "end": 5869
          },
          "definite": false,
          "start": 5830,
          "end": 5869
        }
      ],
      "declare": false,
      "start": 5826,
      "end": 5870
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
            "name": "anyThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 5875,
            "end": 5882
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnyThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 5889,
              "end": 5896
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5885,
            "end": 5898
          },
          "definite": false,
          "start": 5875,
          "end": 5898
        }
      ],
      "declare": false,
      "start": 5871,
      "end": 5899
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 5965,
                            "end": 5969
                          },
                          "start": 5963,
                          "end": 5969
                        },
                        "start": 5959,
                        "end": 5969
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 5974,
                            "end": 5980
                          },
                          "start": 5972,
                          "end": 5980
                        },
                        "start": 5971,
                        "end": 5980
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 5983,
                        "end": 5989
                      },
                      "start": 5981,
                      "end": 5989
                    },
                    "start": 5958,
                    "end": 5990
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "call",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5996,
                      "end": 6000
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6001,
                            "end": 6002
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 6001,
                          "end": 6002
                        }
                      ],
                      "start": 6000,
                      "end": 6003
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
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
                                  "name": "argArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6014,
                                  "end": 6022
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 6024,
                                      "end": 6027
                                    },
                                    "start": 6024,
                                    "end": 6029
                                  },
                                  "start": 6022,
                                  "end": 6029
                                },
                                "value": null,
                                "start": 6011,
                                "end": 6029
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6034,
                                  "end": 6035
                                },
                                "typeArguments": null,
                                "start": 6034,
                                "end": 6035
                              },
                              "start": 6031,
                              "end": 6035
                            },
                            "start": 6010,
                            "end": 6035
                          },
                          "start": 6008,
                          "end": 6035
                        },
                        "start": 6004,
                        "end": 6035
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6040,
                          "end": 6048
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 6050,
                              "end": 6053
                            },
                            "start": 6050,
                            "end": 6055
                          },
                          "start": 6048,
                          "end": 6055
                        },
                        "value": null,
                        "start": 6037,
                        "end": 6055
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6058,
                          "end": 6059
                        },
                        "typeArguments": null,
                        "start": 6058,
                        "end": 6059
                      },
                      "start": 6056,
                      "end": 6059
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5996,
                    "end": 6060
                  }
                ],
                "start": 5951,
                "end": 6062
              },
              "start": 5949,
              "end": 6062
            },
            "start": 5948,
            "end": 6062
          },
          "init": null,
          "definite": false,
          "start": 5948,
          "end": 6062
        }
      ],
      "declare": true,
      "start": 5936,
      "end": 6063
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6071,
                "end": 6077
              },
              "start": 6069,
              "end": 6077
            },
            "start": 6068,
            "end": 6077
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 6080,
                "end": 6081
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 6082,
                "end": 6086
              },
              "optional": false,
              "computed": false,
              "start": 6080,
              "end": 6086
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 6087,
                "end": 6089
              }
            ],
            "optional": false,
            "start": 6080,
            "end": 6090
          },
          "definite": false,
          "start": 6068,
          "end": 6090
        }
      ],
      "declare": false,
      "start": 6064,
      "end": 6091
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "missingTypeIsImplicitAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 6102,
        "end": 6126
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": null,
          "start": 6127,
          "end": 6131
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 6136,
              "end": 6142
            },
            "start": 6134,
            "end": 6142
          },
          "start": 6133,
          "end": 6142
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 6153,
                  "end": 6157
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6158,
                  "end": 6166
                },
                "optional": false,
                "computed": false,
                "start": 6153,
                "end": 6166
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 6169,
                "end": 6170
              },
              "start": 6153,
              "end": 6170
            },
            "start": 6146,
            "end": 6171
          }
        ],
        "start": 6144,
        "end": 6173
      },
      "expression": false,
      "start": 6093,
      "end": 6173
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 6174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 17,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
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
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 73,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 156,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "value": ")",
    "start": 184,
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
    "value": "number",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 204,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 233,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 327,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 425,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Identifier",
    "value": "a",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "explicitVoid1",
    "start": 458,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 472,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "explicitVoid2",
    "start": 497,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 517,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
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
    "value": "number",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 536,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 555,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 587,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 605,
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
    "value": "I",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 615,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 627,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 640,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 653,
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
    "type": "Keyword",
    "value": "function",
    "start": 663,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 672,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 724,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 737,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 758,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "justThis",
    "start": 767,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 787,
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
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 811,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 828,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "implicitThis",
    "start": 837,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 853,
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
    "value": "number",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 875,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 882,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 893,
    "end": 894
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 905,
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
    "value": "I",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "explicitVoid2",
    "start": 932,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 950,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 953,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "explicitVoid1",
    "start": 1031,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1049,
    "end": 1055
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1067,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1105,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 1124,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1161,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1180,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1212,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1229,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "explicitVoid1",
    "start": 1234,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1250,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
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
    "type": "Numeric",
    "value": "12",
    "start": 1271,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1278,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "explicitVoid2",
    "start": 1283,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1302,
    "end": 1304
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1305,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1309,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1314,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1335,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1348,
    "end": 1354
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1355,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1366,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 1371,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1391,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
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
    "value": "impl",
    "start": 1422,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1427,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1451,
    "end": 1453
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1454,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1458,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 1463,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1486,
    "end": 1488
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1489,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1493,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1498,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1513,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1527,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1534,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 1571,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1579,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1591,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "}",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1623,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1648,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1670,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "implicitAnyOk",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "notSpecified",
    "start": 1690,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1704,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1719,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1727,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1730,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "notSpecified",
    "start": 1742,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1756,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "implicitThis",
    "start": 1763,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 1779,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1784,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "implicitThis",
    "start": 1789,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "implicitAnyOk",
    "start": 1807,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1823,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1829,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1837,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1846,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1854,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1863,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "ripped",
    "start": 1867,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 1878,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 1891,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 1908,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1925,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1932,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1945,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 1952,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1962,
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
    "value": ";",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 1969,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1986,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1993,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2006,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2011,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2015,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2040,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2052,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2065,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "value": "number",
    "start": 2077,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 2086,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 2160,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2170,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2182,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2191,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2203,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2222,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2233,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2245,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2253,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2256,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2268,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2281,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2287,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2296,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2305,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2327,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2335,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2351,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 2369,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 2382,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2397,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2417,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2439,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2455,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2471,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2485,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2498,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2503,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2517,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 2534,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2539,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2543,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2558,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2572,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2586,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2599,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2627,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "unboundToSpecified",
    "start": 2631,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2652,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2663,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2676,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2684,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2687,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2698,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2705,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2729,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "specifiedToSpecified",
    "start": 2733,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2756,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2766,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2778,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2786,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2789,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 2798,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2818,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "anyToSpecified",
    "start": 2822,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2839,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2850,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2863,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2871,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2874,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2883,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2895,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2904,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2913,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2924,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2932,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "unspecifiedLambda",
    "start": 2936,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2959,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2967,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2970,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2981,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2988,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2992,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "specifiedLambda",
    "start": 2996,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3014,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3020,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3029,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3037,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3040,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3051,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3058,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3062,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "unspecifiedLambdaToSpecified",
    "start": 3066,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3097,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3107,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3119,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3127,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3130,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "unspecifiedLambda",
    "start": 3139,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3158,
    "end": 3161
  },
  {
    "type": "Identifier",
    "value": "specifiedLambdaToSpecified",
    "start": 3162,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3191,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3201,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3213,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3221,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3224,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "specifiedLambda",
    "start": 3233,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3252,
    "end": 3259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3260,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "explicitCFunction",
    "start": 3264,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3284,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3296,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3304,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3307,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3315,
    "end": 3322
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3323,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "explicitPropertyFunction",
    "start": 3327,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3354,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3364,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3376,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3384,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3387,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3397,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "explicitCFunction",
    "start": 3409,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3430,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3442,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3451,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3463,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3473,
    "end": 3479
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3480,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3496,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "explicitPropertyFunction",
    "start": 3515,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3543,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3562,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3571,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3581,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3593,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3603,
    "end": 3609
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3610,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3626,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 3645,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3659,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3718,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3732,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 3740,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3757,
    "end": 3759
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3765,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3786,
    "end": 3788
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3899,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3913,
    "end": 3915
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3920,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 3930,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3947,
    "end": 3949
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3954,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3964,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3985,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3992,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4033,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Identifier",
    "value": "explicitCFunction",
    "start": 4048,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4069,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4084,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4093,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4105,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4115,
    "end": 4121
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4122,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 4165,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4177,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4191,
    "end": 4197
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4198,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 4214,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4233,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4247,
    "end": 4253
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4254,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4269,
    "end": 4270
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4270,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4285,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4299,
    "end": 4305
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4306,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4311,
    "end": 4312
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4350,
    "end": 4362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4365,
    "end": 4373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4373,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4374,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4383,
    "end": 4384
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4385,
    "end": 4391
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4392,
    "end": 4396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4442,
    "end": 4443
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 4443,
    "end": 4452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4455,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4464,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4471,
    "end": 4472
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4476,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4486,
    "end": 4492
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4493,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4505,
    "end": 4506
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 4537,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4554,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4590,
    "end": 4595
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4596,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4602,
    "end": 4603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4611,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4623,
    "end": 4629
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 4630,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4642,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4648,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4655,
    "end": 4661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4664,
    "end": 4670
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4671,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4677,
    "end": 4678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4679,
    "end": 4680
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 4685,
    "end": 4693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4693,
    "end": 4694
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4694,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4700,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4706,
    "end": 4707
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4708,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4717,
    "end": 4723
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4724,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4729,
    "end": 4730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4738,
    "end": 4744
  },
  {
    "type": "Identifier",
    "value": "explicitStatic",
    "start": 4745,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4760,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4766,
    "end": 4772
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4773,
    "end": 4778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4781,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4790,
    "end": 4796
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4797,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4802,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4803,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4811,
    "end": 4817
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4821,
    "end": 4827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4831,
    "end": 4836
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 4837,
    "end": 4845
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4846,
    "end": 4853
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4854,
    "end": 4859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4860,
    "end": 4861
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4869,
    "end": 4875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4876,
    "end": 4877
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4878,
    "end": 4883
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4884,
    "end": 4889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4890,
    "end": 4891
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4899,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 4910,
    "end": 4921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4922,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4928,
    "end": 4932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4935,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4944,
    "end": 4950
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4951,
    "end": 4955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4956,
    "end": 4957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4957,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4959,
    "end": 4960
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 4965,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4974,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4980,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4988,
    "end": 4994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4997,
    "end": 5003
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5004,
    "end": 5008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5008,
    "end": 5009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5009,
    "end": 5010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5010,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5016,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 5022,
    "end": 5030
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5031,
    "end": 5038
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5039,
    "end": 5044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5045,
    "end": 5046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5052,
    "end": 5053
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5054,
    "end": 5060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5063,
    "end": 5066
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 5067,
    "end": 5069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5070,
    "end": 5071
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5072,
    "end": 5075
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 5076,
    "end": 5081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5083,
    "end": 5084
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5085,
    "end": 5088
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 5089,
    "end": 5091
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5094,
    "end": 5097
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5098,
    "end": 5103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5103,
    "end": 5104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5105,
    "end": 5106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5107,
    "end": 5110
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5111,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5116,
    "end": 5119
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 5120,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5132,
    "end": 5135
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5136,
    "end": 5138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5139,
    "end": 5140
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5141,
    "end": 5144
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 5145,
    "end": 5153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5154,
    "end": 5155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5157,
    "end": 5159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5160,
    "end": 5171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5174,
    "end": 5176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5176,
    "end": 5177
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5177,
    "end": 5188
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5220,
    "end": 5222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5222,
    "end": 5223
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5223,
    "end": 5234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5235,
    "end": 5236
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5237,
    "end": 5239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5239,
    "end": 5240
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5240,
    "end": 5251
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5312,
    "end": 5314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5315,
    "end": 5326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5327,
    "end": 5328
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 5329,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5332,
    "end": 5343
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5370,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5373,
    "end": 5384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5385,
    "end": 5386
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5387,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5389,
    "end": 5390
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 5390,
    "end": 5398
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 5422,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5424,
    "end": 5425
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5425,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5437,
    "end": 5438
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5439,
    "end": 5441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5442,
    "end": 5453
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 5493,
    "end": 5495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5495,
    "end": 5496
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 5496,
    "end": 5504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5505,
    "end": 5506
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5507,
    "end": 5509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5509,
    "end": 5510
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5510,
    "end": 5521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5614,
    "end": 5622
  },
  {
    "type": "Identifier",
    "value": "InterfaceThis",
    "start": 5623,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5637,
    "end": 5641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5641,
    "end": 5642
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 5643,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5652,
    "end": 5656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5656,
    "end": 5657
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5657,
    "end": 5658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5659,
    "end": 5660
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 5661,
    "end": 5663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5663,
    "end": 5664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5665,
    "end": 5666
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5667,
    "end": 5675
  },
  {
    "type": "Identifier",
    "value": "LiteralTypeThis",
    "start": 5676,
    "end": 5691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5691,
    "end": 5692
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5692,
    "end": 5696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5702,
    "end": 5708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5708,
    "end": 5709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5709,
    "end": 5710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5711,
    "end": 5712
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5717,
    "end": 5721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5722,
    "end": 5723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5724,
    "end": 5725
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 5726,
    "end": 5730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5730,
    "end": 5731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5732,
    "end": 5733
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5734,
    "end": 5742
  },
  {
    "type": "Identifier",
    "value": "AnyThis",
    "start": 5743,
    "end": 5750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5750,
    "end": 5751
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5751,
    "end": 5755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5755,
    "end": 5756
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5757,
    "end": 5760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5762,
    "end": 5763
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5768,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5773,
    "end": 5774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5775,
    "end": 5776
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 5777,
    "end": 5781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5781,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5783,
    "end": 5784
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5785,
    "end": 5788
  },
  {
    "type": "Identifier",
    "value": "interfaceThis",
    "start": 5789,
    "end": 5802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5803,
    "end": 5804
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5805,
    "end": 5808
  },
  {
    "type": "Identifier",
    "value": "InterfaceThis",
    "start": 5809,
    "end": 5822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5822,
    "end": 5823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5823,
    "end": 5824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5826,
    "end": 5829
  },
  {
    "type": "Identifier",
    "value": "literalTypeThis",
    "start": 5830,
    "end": 5845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5846,
    "end": 5847
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5848,
    "end": 5851
  },
  {
    "type": "Identifier",
    "value": "LiteralTypeThis",
    "start": 5852,
    "end": 5867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5867,
    "end": 5868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5868,
    "end": 5869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5869,
    "end": 5870
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5871,
    "end": 5874
  },
  {
    "type": "Identifier",
    "value": "anyThis",
    "start": 5875,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5883,
    "end": 5884
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5885,
    "end": 5888
  },
  {
    "type": "Identifier",
    "value": "AnyThis",
    "start": 5889,
    "end": 5896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5896,
    "end": 5897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5897,
    "end": 5898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5898,
    "end": 5899
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5936,
    "end": 5943
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5944,
    "end": 5947
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5948,
    "end": 5949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5949,
    "end": 5950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5951,
    "end": 5952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5958,
    "end": 5959
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5959,
    "end": 5963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5963,
    "end": 5964
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5965,
    "end": 5969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5969,
    "end": 5970
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5971,
    "end": 5972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5972,
    "end": 5973
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5974,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5981,
    "end": 5982
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5983,
    "end": 5989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5989,
    "end": 5990
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 5996,
    "end": 6000
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6000,
    "end": 6001
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6001,
    "end": 6002
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6002,
    "end": 6003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6003,
    "end": 6004
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 6004,
    "end": 6008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6008,
    "end": 6009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6010,
    "end": 6011
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6011,
    "end": 6014
  },
  {
    "type": "Identifier",
    "value": "argArray",
    "start": 6014,
    "end": 6022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6022,
    "end": 6023
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6024,
    "end": 6027
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6027,
    "end": 6028
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6028,
    "end": 6029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6029,
    "end": 6030
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6031,
    "end": 6033
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6034,
    "end": 6035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6035,
    "end": 6036
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6037,
    "end": 6040
  },
  {
    "type": "Identifier",
    "value": "argArray",
    "start": 6040,
    "end": 6048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6048,
    "end": 6049
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6050,
    "end": 6053
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6053,
    "end": 6054
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6054,
    "end": 6055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6055,
    "end": 6056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6058,
    "end": 6059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6059,
    "end": 6060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6061,
    "end": 6062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6062,
    "end": 6063
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6064,
    "end": 6067
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 6068,
    "end": 6069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6071,
    "end": 6077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6078,
    "end": 6079
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 6080,
    "end": 6081
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6081,
    "end": 6082
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 6082,
    "end": 6086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6086,
    "end": 6087
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 6087,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6093,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "missingTypeIsImplicitAny",
    "start": 6102,
    "end": 6126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6126,
    "end": 6127
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 6127,
    "end": 6131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6131,
    "end": 6132
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6133,
    "end": 6134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6134,
    "end": 6135
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6136,
    "end": 6142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6142,
    "end": 6143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6144,
    "end": 6145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6146,
    "end": 6152
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 6153,
    "end": 6157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6157,
    "end": 6158
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 6158,
    "end": 6166
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6167,
    "end": 6168
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6169,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6170,
    "end": 6171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6172,
    "end": 6173
  }
]
```

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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 69
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 73,
                      "end": 79
                    },
                    "start": 71,
                    "end": 79
                  },
                  "start": 70,
                  "end": 79
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 90,
                      "end": 94
                    },
                    "start": 83,
                    "end": 95
                  }
                ],
                "start": 81,
                "end": 97
              },
              "expression": false,
              "start": 69,
              "end": 97
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 97
          }
        ],
        "start": 52,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 99
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
        "start": 107,
        "end": 108
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
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 108,
        "end": 111
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 129
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
                        "start": 133,
                        "end": 134
                      },
                      "typeArguments": null,
                      "start": 133,
                      "end": 134
                    },
                    "start": 131,
                    "end": 134
                  },
                  "start": 130,
                  "end": 134
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 145,
                      "end": 149
                    },
                    "start": 138,
                    "end": 150
                  }
                ],
                "start": 136,
                "end": 152
              },
              "expression": false,
              "start": 129,
              "end": 152
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 118,
            "end": 152
          }
        ],
        "start": 112,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 154
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 167
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSBooleanKeyword",
                    "start": 181,
                    "end": 188
                  },
                  "start": 179,
                  "end": 188
                },
                "start": 178,
                "end": 188
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 191,
                "end": 197
              },
              "start": 189,
              "end": 197
            },
            "start": 174,
            "end": 198
          }
        ],
        "start": 168,
        "end": 200
      },
      "declare": false,
      "start": 156,
      "end": 200
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 214
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
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 216
          }
        ],
        "start": 214,
        "end": 217
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 232
                    },
                    "typeArguments": null,
                    "start": 231,
                    "end": 232
                  },
                  "start": 229,
                  "end": 232
                },
                "start": 228,
                "end": 232
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
                  "start": 235,
                  "end": 236
                },
                "typeArguments": null,
                "start": 235,
                "end": 236
              },
              "start": 233,
              "end": 236
            },
            "start": 224,
            "end": 237
          }
        ],
        "start": 218,
        "end": 239
      },
      "declare": false,
      "start": 202,
      "end": 239
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 257,
                              "end": 261
                            },
                            "typeArguments": null,
                            "start": 257,
                            "end": 261
                          },
                          "start": 255,
                          "end": 261
                        },
                        "start": 254,
                        "end": 261
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 264,
                        "end": 270
                      },
                      "start": 262,
                      "end": 270
                    },
                    "start": 250,
                    "end": 270
                  }
                ],
                "start": 248,
                "end": 272
              },
              "start": 246,
              "end": 272
            },
            "start": 245,
            "end": 272
          },
          "init": null,
          "definite": false,
          "start": 245,
          "end": 272
        }
      ],
      "declare": false,
      "start": 241,
      "end": 272
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
            "typeAnnotation": null,
            "start": 277,
            "end": 278
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
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 286
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
                      "name": "x",
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
                            "start": 290,
                            "end": 296
                          },
                          "typeArguments": null,
                          "start": 290,
                          "end": 296
                        },
                        "start": 288,
                        "end": 296
                      },
                      "start": 287,
                      "end": 296
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 307,
                          "end": 309
                        },
                        "start": 300,
                        "end": 310
                      }
                    ],
                    "start": 298,
                    "end": 312
                  },
                  "expression": false,
                  "start": 286,
                  "end": 312
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 283,
                "end": 312
              }
            ],
            "start": 281,
            "end": 314
          },
          "definite": false,
          "start": 277,
          "end": 314
        }
      ],
      "declare": false,
      "start": 273,
      "end": 315
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 381
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 386
              },
              "typeArguments": null,
              "start": 385,
              "end": 386
            },
            "start": 383,
            "end": 386
          },
          "start": 382,
          "end": 386
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 367,
      "end": 388
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 403
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
              "typeArguments": null,
              "start": 407,
              "end": 408
            },
            "start": 405,
            "end": 408
          },
          "start": 404,
          "end": 408
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 389,
      "end": 410
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 434
      },
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
              "type": "TSAnyKeyword",
              "start": 438,
              "end": 441
            },
            "start": 436,
            "end": 441
          },
          "start": 435,
          "end": 441
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 443,
        "end": 446
      },
      "expression": false,
      "start": 420,
      "end": 446
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 462
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 467
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 468,
                    "end": 474
                  }
                ],
                "start": 467,
                "end": 475
              },
              "start": 466,
              "end": 475
            },
            "start": 464,
            "end": 475
          },
          "start": 463,
          "end": 475
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 448,
      "end": 477
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 487,
        "end": 492
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 498,
                    "end": 504
                  }
                ],
                "start": 497,
                "end": 505
              },
              "start": 496,
              "end": 505
            },
            "start": 494,
            "end": 505
          },
          "start": 493,
          "end": 505
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 478,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 531
      },
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
              "type": "TSAnyKeyword",
              "start": 535,
              "end": 538
            },
            "start": 533,
            "end": 538
          },
          "start": 532,
          "end": 538
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 540,
        "end": 543
      },
      "expression": false,
      "start": 517,
      "end": 543
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 558
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 563
              },
              "typeArguments": null,
              "start": 562,
              "end": 563
            },
            "start": 560,
            "end": 563
          },
          "start": 559,
          "end": 563
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 545,
      "end": 565
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 575,
        "end": 579
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 584
              },
              "typeArguments": null,
              "start": 583,
              "end": 584
            },
            "start": 581,
            "end": 584
          },
          "start": 580,
          "end": 584
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 566,
      "end": 586
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 605,
        "end": 609
      },
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
              "type": "TSAnyKeyword",
              "start": 613,
              "end": 616
            },
            "start": 611,
            "end": 616
          },
          "start": 610,
          "end": 616
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 618,
        "end": 621
      },
      "expression": false,
      "start": 596,
      "end": 621
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 636
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "typeArguments": null,
              "start": 640,
              "end": 648
            },
            "start": 638,
            "end": 648
          },
          "start": 637,
          "end": 648
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 623,
      "end": 650
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 664
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 676
              },
              "typeArguments": null,
              "start": 668,
              "end": 676
            },
            "start": 666,
            "end": 676
          },
          "start": 665,
          "end": 676
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 651,
      "end": 678
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 701
      },
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
              "type": "TSAnyKeyword",
              "start": 705,
              "end": 708
            },
            "start": 703,
            "end": 708
          },
          "start": 702,
          "end": 708
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 710,
        "end": 713
      },
      "expression": false,
      "start": 688,
      "end": 713
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 724,
        "end": 728
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 740
              },
              "typeArguments": null,
              "start": 732,
              "end": 740
            },
            "start": 730,
            "end": 740
          },
          "start": 729,
          "end": 740
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 715,
      "end": 742
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 752,
        "end": 756
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 768
              },
              "typeArguments": null,
              "start": 760,
              "end": 768
            },
            "start": 758,
            "end": 768
          },
          "start": 757,
          "end": 768
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 743,
      "end": 770
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 793
      },
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
              "type": "TSAnyKeyword",
              "start": 797,
              "end": 800
            },
            "start": 795,
            "end": 800
          },
          "start": 794,
          "end": 800
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 802,
        "end": 805
      },
      "expression": false,
      "start": 780,
      "end": 805
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 816,
        "end": 820
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 825
              },
              "typeArguments": null,
              "start": 824,
              "end": 825
            },
            "start": 822,
            "end": 825
          },
          "start": 821,
          "end": 825
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 807,
      "end": 827
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 841
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 846
              },
              "typeArguments": null,
              "start": 845,
              "end": 846
            },
            "start": 843,
            "end": 846
          },
          "start": 842,
          "end": 846
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 828,
      "end": 848
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 864,
        "end": 868
      },
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
              "type": "TSAnyKeyword",
              "start": 872,
              "end": 875
            },
            "start": 870,
            "end": 875
          },
          "start": 869,
          "end": 875
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 877,
        "end": 880
      },
      "expression": false,
      "start": 855,
      "end": 880
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 891,
        "end": 895
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 899,
                "end": 900
              },
              "typeArguments": null,
              "start": 899,
              "end": 900
            },
            "start": 897,
            "end": 900
          },
          "start": 896,
          "end": 900
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 882,
      "end": 902
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 916
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 920,
                "end": 921
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 922,
                    "end": 928
                  }
                ],
                "start": 921,
                "end": 929
              },
              "start": 920,
              "end": 929
            },
            "start": 918,
            "end": 929
          },
          "start": 917,
          "end": 929
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 903,
      "end": 931
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
        "end": 984
      },
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
              "type": "TSAnyKeyword",
              "start": 988,
              "end": 991
            },
            "start": 986,
            "end": 991
          },
          "start": 985,
          "end": 991
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 993,
        "end": 996
      },
      "expression": false,
      "start": 971,
      "end": 996
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1012
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1017
              },
              "typeArguments": null,
              "start": 1016,
              "end": 1017
            },
            "start": 1014,
            "end": 1017
          },
          "start": 1013,
          "end": 1017
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 998,
      "end": 1019
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1029,
        "end": 1034
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1046
              },
              "typeArguments": null,
              "start": 1038,
              "end": 1046
            },
            "start": 1036,
            "end": 1046
          },
          "start": 1035,
          "end": 1046
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1020,
      "end": 1048
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1064,
        "end": 1069
      },
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
              "type": "TSAnyKeyword",
              "start": 1073,
              "end": 1076
            },
            "start": 1071,
            "end": 1076
          },
          "start": 1070,
          "end": 1076
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1078,
        "end": 1081
      },
      "expression": false,
      "start": 1055,
      "end": 1081
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1097
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1101,
                "end": 1102
              },
              "typeArguments": null,
              "start": 1101,
              "end": 1102
            },
            "start": 1099,
            "end": 1102
          },
          "start": 1098,
          "end": 1102
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1083,
      "end": 1104
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1114,
        "end": 1119
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1130,
                "end": 1131
              },
              "typeArguments": null,
              "start": 1123,
              "end": 1131
            },
            "start": 1121,
            "end": 1131
          },
          "start": 1120,
          "end": 1131
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1105,
      "end": 1133
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1154
      },
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
              "type": "TSAnyKeyword",
              "start": 1158,
              "end": 1161
            },
            "start": 1156,
            "end": 1161
          },
          "start": 1155,
          "end": 1161
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1163,
        "end": 1166
      },
      "expression": false,
      "start": 1140,
      "end": 1166
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1177,
        "end": 1182
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1186,
                "end": 1187
              },
              "typeArguments": null,
              "start": 1186,
              "end": 1187
            },
            "start": 1184,
            "end": 1187
          },
          "start": 1183,
          "end": 1187
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1168,
      "end": 1189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1204
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1209
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1210,
                    "end": 1216
                  }
                ],
                "start": 1209,
                "end": 1217
              },
              "start": 1208,
              "end": 1217
            },
            "start": 1206,
            "end": 1217
          },
          "start": 1205,
          "end": 1217
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1190,
      "end": 1219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1235,
        "end": 1240
      },
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
              "type": "TSAnyKeyword",
              "start": 1244,
              "end": 1247
            },
            "start": 1242,
            "end": 1247
          },
          "start": 1241,
          "end": 1247
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1249,
        "end": 1252
      },
      "expression": false,
      "start": 1226,
      "end": 1252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1263,
        "end": 1269
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1275
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1276,
                    "end": 1282
                  }
                ],
                "start": 1275,
                "end": 1283
              },
              "start": 1273,
              "end": 1283
            },
            "start": 1271,
            "end": 1283
          },
          "start": 1270,
          "end": 1283
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1254,
      "end": 1285
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1295,
        "end": 1301
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1305,
                "end": 1306
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1307,
                    "end": 1313
                  }
                ],
                "start": 1306,
                "end": 1314
              },
              "start": 1305,
              "end": 1314
            },
            "start": 1303,
            "end": 1314
          },
          "start": 1302,
          "end": 1314
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1286,
      "end": 1316
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1332,
        "end": 1338
      },
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
              "type": "TSAnyKeyword",
              "start": 1342,
              "end": 1345
            },
            "start": 1340,
            "end": 1345
          },
          "start": 1339,
          "end": 1345
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1347,
        "end": 1350
      },
      "expression": false,
      "start": 1323,
      "end": 1350
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1361,
        "end": 1366
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1370,
                "end": 1371
              },
              "typeArguments": null,
              "start": 1370,
              "end": 1371
            },
            "start": 1368,
            "end": 1371
          },
          "start": 1367,
          "end": 1371
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1352,
      "end": 1373
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1388
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1399,
                "end": 1400
              },
              "typeArguments": null,
              "start": 1392,
              "end": 1400
            },
            "start": 1390,
            "end": 1400
          },
          "start": 1389,
          "end": 1400
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1374,
      "end": 1402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1418,
        "end": 1423
      },
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
              "type": "TSAnyKeyword",
              "start": 1427,
              "end": 1430
            },
            "start": 1425,
            "end": 1430
          },
          "start": 1424,
          "end": 1430
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1432,
        "end": 1435
      },
      "expression": false,
      "start": 1409,
      "end": 1435
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1446,
        "end": 1451
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1455,
                "end": 1456
              },
              "typeArguments": null,
              "start": 1455,
              "end": 1456
            },
            "start": 1453,
            "end": 1456
          },
          "start": 1452,
          "end": 1456
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1437,
      "end": 1458
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1468,
        "end": 1473
      },
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1484,
                "end": 1485
              },
              "typeArguments": null,
              "start": 1477,
              "end": 1485
            },
            "start": 1475,
            "end": 1485
          },
          "start": 1474,
          "end": 1485
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1459,
      "end": 1487
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1503,
        "end": 1508
      },
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
              "type": "TSAnyKeyword",
              "start": 1512,
              "end": 1515
            },
            "start": 1510,
            "end": 1515
          },
          "start": 1509,
          "end": 1515
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1517,
        "end": 1520
      },
      "expression": false,
      "start": 1494,
      "end": 1520
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1536
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1540,
                "end": 1542
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1543,
                    "end": 1549
                  }
                ],
                "start": 1542,
                "end": 1550
              },
              "start": 1540,
              "end": 1550
            },
            "start": 1538,
            "end": 1550
          },
          "start": 1537,
          "end": 1550
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1522,
      "end": 1552
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1567
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1571,
                "end": 1572
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1573,
                    "end": 1579
                  }
                ],
                "start": 1572,
                "end": 1580
              },
              "start": 1571,
              "end": 1580
            },
            "start": 1569,
            "end": 1580
          },
          "start": 1568,
          "end": 1580
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1553,
      "end": 1582
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1598,
        "end": 1603
      },
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
              "type": "TSAnyKeyword",
              "start": 1607,
              "end": 1610
            },
            "start": 1605,
            "end": 1610
          },
          "start": 1604,
          "end": 1610
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1612,
        "end": 1615
      },
      "expression": false,
      "start": 1589,
      "end": 1615
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 1615
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "constructor",
    "start": 58,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "number",
    "start": 73,
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
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 83,
    "end": 89
  },
  {
    "type": "Null",
    "value": "null",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 118,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 138,
    "end": 144
  },
  {
    "type": "Null",
    "value": "null",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 156,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 202,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 257,
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
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "RegExp",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 300,
    "end": 306
  },
  {
    "type": "String",
    "value": "''",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 367,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 376,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 385,
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
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 420,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 448,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 457,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 468,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 478,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "C",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 545,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 566,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "I",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 596,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 623,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 640,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 651,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 668,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 688,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 715,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 732,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 743,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 760,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 780,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 807,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "foo8",
    "start": 837,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 845,
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
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 855,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 869,
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
    "value": "any",
    "start": 872,
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
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 882,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 891,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 896,
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
    "value": "B",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 903,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 912,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 922,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 971,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 980,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 988,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 998,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1020,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1055,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1064,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1083,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1092,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1105,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1114,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1140,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 1158,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1168,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1177,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1190,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1210,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1226,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1235,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1254,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1263,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1276,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1282,
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
    "type": "Keyword",
    "value": "function",
    "start": 1286,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1295,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1323,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1342,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1352,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1361,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1374,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1383,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1392,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1409,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1418,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1437,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1446,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1459,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1468,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1494,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1503,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1512,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1522,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1531,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1543,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1553,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1562,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1589,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1598,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1614,
    "end": 1615
  }
]
```

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
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          },
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
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 38
          }
        ],
        "start": 16,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point3D",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 58
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 71
          },
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
              "start": 72,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 82
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 83,
            "end": 92
          }
        ],
        "start": 59,
        "end": 94
      },
      "declare": false,
      "start": 41,
      "end": 94
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point3D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 113
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 127
          },
          "typeArguments": null,
          "start": 122,
          "end": 127
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 139
          }
        ],
        "start": 128,
        "end": 141
      },
      "declare": false,
      "start": 95,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Line",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
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
              "name": "start",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 171
                },
                "typeArguments": null,
                "start": 166,
                "end": 171
              },
              "start": 164,
              "end": 171
            },
            "accessibility": null,
            "static": false,
            "start": 159,
            "end": 172
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "end",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 183
                },
                "typeArguments": null,
                "start": 178,
                "end": 183
              },
              "start": 176,
              "end": 183
            },
            "accessibility": null,
            "static": false,
            "start": 173,
            "end": 183
          }
        ],
        "start": 157,
        "end": 185
      },
      "declare": false,
      "start": 142,
      "end": 185
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
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                        "start": 208,
                        "end": 214
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 226
                      },
                      "optional": false,
                      "computed": false,
                      "start": 208,
                      "end": 226
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 235,
                            "end": 242
                          },
                          "start": 233,
                          "end": 242
                        },
                        "start": 228,
                        "end": 242
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 245,
                        "end": 252
                      },
                      "start": 243,
                      "end": 252
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 207,
                    "end": 253
                  }
                ],
                "start": 205,
                "end": 255
              },
              "start": 203,
              "end": 255
            },
            "start": 199,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 199,
          "end": 255
        }
      ],
      "declare": true,
      "start": 187,
      "end": 256
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
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                        "start": 278,
                        "end": 284
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 296
                      },
                      "optional": false,
                      "computed": false,
                      "start": 278,
                      "end": 296
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 305,
                            "end": 308
                          },
                          "start": 303,
                          "end": 308
                        },
                        "start": 298,
                        "end": 308
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 311,
                        "end": 318
                      },
                      "start": 309,
                      "end": 318
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 277,
                    "end": 319
                  }
                ],
                "start": 275,
                "end": 321
              },
              "start": 273,
              "end": 321
            },
            "start": 269,
            "end": 321
          },
          "init": null,
          "definite": false,
          "start": 269,
          "end": 321
        }
      ],
      "declare": true,
      "start": 257,
      "end": 322
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
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                        "start": 344,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 362
                      },
                      "optional": false,
                      "computed": false,
                      "start": 344,
                      "end": 362
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 371,
                            "end": 374
                          },
                          "start": 369,
                          "end": 374
                        },
                        "start": 364,
                        "end": 374
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 382
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 386,
                              "end": 391
                            },
                            "typeArguments": null,
                            "start": 386,
                            "end": 391
                          },
                          "start": 386,
                          "end": 391
                        },
                        "start": 377,
                        "end": 391
                      },
                      "start": 375,
                      "end": 391
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 343,
                    "end": 392
                  }
                ],
                "start": 341,
                "end": 394
              },
              "start": 339,
              "end": 394
            },
            "start": 335,
            "end": 394
          },
          "init": null,
          "definite": false,
          "start": 335,
          "end": 394
        }
      ],
      "declare": true,
      "start": 323,
      "end": 395
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
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                        "start": 417,
                        "end": 423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 435
                      },
                      "optional": false,
                      "computed": false,
                      "start": 417,
                      "end": 435
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 444,
                                  "end": 449
                                },
                                "typeArguments": null,
                                "start": 444,
                                "end": 449
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 452,
                                  "end": 456
                                },
                                "typeArguments": null,
                                "start": 452,
                                "end": 456
                              }
                            ],
                            "start": 444,
                            "end": 456
                          },
                          "start": 442,
                          "end": 456
                        },
                        "start": 437,
                        "end": 456
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 464
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 468,
                              "end": 473
                            },
                            "typeArguments": null,
                            "start": 468,
                            "end": 473
                          },
                          "start": 468,
                          "end": 473
                        },
                        "start": 459,
                        "end": 473
                      },
                      "start": 457,
                      "end": 473
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 416,
                    "end": 474
                  }
                ],
                "start": 414,
                "end": 476
              },
              "start": 412,
              "end": 476
            },
            "start": 408,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 408,
          "end": 476
        }
      ],
      "declare": true,
      "start": 396,
      "end": 477
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
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                        "start": 499,
                        "end": 505
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 517
                      },
                      "optional": false,
                      "computed": false,
                      "start": 499,
                      "end": 517
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 526,
                                  "end": 531
                                },
                                "typeArguments": null,
                                "start": 526,
                                "end": 531
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 534,
                                  "end": 538
                                },
                                "typeArguments": null,
                                "start": 534,
                                "end": 538
                              }
                            ],
                            "start": 526,
                            "end": 538
                          },
                          "start": 524,
                          "end": 538
                        },
                        "start": 519,
                        "end": 538
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 546
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Line",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 550,
                              "end": 554
                            },
                            "typeArguments": null,
                            "start": 550,
                            "end": 554
                          },
                          "start": 550,
                          "end": 554
                        },
                        "start": 541,
                        "end": 554
                      },
                      "start": 539,
                      "end": 554
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 498,
                    "end": 555
                  }
                ],
                "start": 496,
                "end": 557
              },
              "start": 494,
              "end": 557
            },
            "start": 490,
            "end": 557
          },
          "init": null,
          "definite": false,
          "start": 490,
          "end": 557
        }
      ],
      "declare": true,
      "start": 478,
      "end": 558
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
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                        "start": 580,
                        "end": 586
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 598
                      },
                      "optional": false,
                      "computed": false,
                      "start": 580,
                      "end": 598
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 607,
                                  "end": 612
                                },
                                "typeArguments": null,
                                "start": 607,
                                "end": 612
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point3D",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 615,
                                  "end": 622
                                },
                                "typeArguments": null,
                                "start": 615,
                                "end": 622
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 625,
                                  "end": 629
                                },
                                "typeArguments": null,
                                "start": 625,
                                "end": 629
                              }
                            ],
                            "start": 607,
                            "end": 629
                          },
                          "start": 605,
                          "end": 629
                        },
                        "start": 600,
                        "end": 629
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 632,
                          "end": 637
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point3D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 648
                            },
                            "typeArguments": null,
                            "start": 641,
                            "end": 648
                          },
                          "start": 641,
                          "end": 648
                        },
                        "start": 632,
                        "end": 648
                      },
                      "start": 630,
                      "end": 648
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 579,
                    "end": 649
                  }
                ],
                "start": 577,
                "end": 651
              },
              "start": 575,
              "end": 651
            },
            "start": 571,
            "end": 651
          },
          "init": null,
          "definite": false,
          "start": 571,
          "end": 651
        }
      ],
      "declare": true,
      "start": 559,
      "end": 652
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
            "name": "rhs6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                        "start": 674,
                        "end": 680
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 681,
                        "end": 692
                      },
                      "optional": false,
                      "computed": false,
                      "start": 674,
                      "end": 692
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "name": "Point3D",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 701,
                                  "end": 708
                                },
                                "typeArguments": null,
                                "start": 701,
                                "end": 708
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 711,
                                  "end": 715
                                },
                                "typeArguments": null,
                                "start": 711,
                                "end": 715
                              }
                            ],
                            "start": 701,
                            "end": 715
                          },
                          "start": 699,
                          "end": 715
                        },
                        "start": 694,
                        "end": 715
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 723
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point3D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 727,
                              "end": 734
                            },
                            "typeArguments": null,
                            "start": 727,
                            "end": 734
                          },
                          "start": 727,
                          "end": 734
                        },
                        "start": 718,
                        "end": 734
                      },
                      "start": 716,
                      "end": 734
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 673,
                    "end": 735
                  }
                ],
                "start": 671,
                "end": 737
              },
              "start": 669,
              "end": 737
            },
            "start": 665,
            "end": 737
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 737
        }
      ],
      "declare": true,
      "start": 653,
      "end": 738
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs7",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 758
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 775
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 787
              },
              "optional": false,
              "computed": false,
              "start": 769,
              "end": 787
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 796,
                      "end": 803
                    },
                    "start": 794,
                    "end": 803
                  },
                  "start": 789,
                  "end": 803
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 806,
                  "end": 813
                },
                "start": 804,
                "end": 813
              },
              "body": null,
              "expression": false,
              "start": 788,
              "end": 814
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 761,
            "end": 814
          }
        ],
        "start": 759,
        "end": 816
      },
      "abstract": false,
      "declare": true,
      "start": 740,
      "end": 816
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs8",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 835
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 852
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 853,
                "end": 864
              },
              "optional": false,
              "computed": false,
              "start": 846,
              "end": 864
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 873,
                      "end": 876
                    },
                    "start": 871,
                    "end": 876
                  },
                  "start": 866,
                  "end": 876
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 879,
                  "end": 886
                },
                "start": 877,
                "end": 886
              },
              "body": null,
              "expression": false,
              "start": 865,
              "end": 887
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 838,
            "end": 887
          }
        ],
        "start": 836,
        "end": 889
      },
      "abstract": false,
      "declare": true,
      "start": 817,
      "end": 889
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs9",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 908
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 919,
                "end": 925
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 937
              },
              "optional": false,
              "computed": false,
              "start": 919,
              "end": 937
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 946,
                      "end": 949
                    },
                    "start": 944,
                    "end": 949
                  },
                  "start": 939,
                  "end": 949
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 952,
                    "end": 957
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 966
                      },
                      "typeArguments": null,
                      "start": 961,
                      "end": 966
                    },
                    "start": 961,
                    "end": 966
                  },
                  "start": 952,
                  "end": 966
                },
                "start": 950,
                "end": 966
              },
              "body": null,
              "expression": false,
              "start": 938,
              "end": 967
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 911,
            "end": 967
          }
        ],
        "start": 909,
        "end": 969
      },
      "abstract": false,
      "declare": true,
      "start": 890,
      "end": 969
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs10",
        "optional": false,
        "typeAnnotation": null,
        "start": 984,
        "end": 989
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1000,
                "end": 1006
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1018
              },
              "optional": false,
              "computed": false,
              "start": 1000,
              "end": 1018
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1027,
                            "end": 1032
                          },
                          "typeArguments": null,
                          "start": 1027,
                          "end": 1032
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1039
                          },
                          "typeArguments": null,
                          "start": 1035,
                          "end": 1039
                        }
                      ],
                      "start": 1027,
                      "end": 1039
                    },
                    "start": 1025,
                    "end": 1039
                  },
                  "start": 1020,
                  "end": 1039
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1042,
                    "end": 1047
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1051,
                        "end": 1056
                      },
                      "typeArguments": null,
                      "start": 1051,
                      "end": 1056
                    },
                    "start": 1051,
                    "end": 1056
                  },
                  "start": 1042,
                  "end": 1056
                },
                "start": 1040,
                "end": 1056
              },
              "body": null,
              "expression": false,
              "start": 1019,
              "end": 1057
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 992,
            "end": 1057
          }
        ],
        "start": 990,
        "end": 1059
      },
      "abstract": false,
      "declare": true,
      "start": 970,
      "end": 1059
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1079
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1090,
                "end": 1096
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1097,
                "end": 1108
              },
              "optional": false,
              "computed": false,
              "start": 1090,
              "end": 1108
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1117,
                            "end": 1122
                          },
                          "typeArguments": null,
                          "start": 1117,
                          "end": 1122
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1125,
                            "end": 1129
                          },
                          "typeArguments": null,
                          "start": 1125,
                          "end": 1129
                        }
                      ],
                      "start": 1117,
                      "end": 1129
                    },
                    "start": 1115,
                    "end": 1129
                  },
                  "start": 1110,
                  "end": 1129
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1132,
                    "end": 1137
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1141,
                        "end": 1145
                      },
                      "typeArguments": null,
                      "start": 1141,
                      "end": 1145
                    },
                    "start": 1141,
                    "end": 1145
                  },
                  "start": 1132,
                  "end": 1145
                },
                "start": 1130,
                "end": 1145
              },
              "body": null,
              "expression": false,
              "start": 1109,
              "end": 1146
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1082,
            "end": 1146
          }
        ],
        "start": 1080,
        "end": 1148
      },
      "abstract": false,
      "declare": true,
      "start": 1060,
      "end": 1148
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1163,
        "end": 1168
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1186,
                "end": 1197
              },
              "optional": false,
              "computed": false,
              "start": 1179,
              "end": 1197
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1206,
                            "end": 1211
                          },
                          "typeArguments": null,
                          "start": 1206,
                          "end": 1211
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point3D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1214,
                            "end": 1221
                          },
                          "typeArguments": null,
                          "start": 1214,
                          "end": 1221
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1224,
                            "end": 1228
                          },
                          "typeArguments": null,
                          "start": 1224,
                          "end": 1228
                        }
                      ],
                      "start": 1206,
                      "end": 1228
                    },
                    "start": 1204,
                    "end": 1228
                  },
                  "start": 1199,
                  "end": 1228
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1231,
                    "end": 1236
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point3D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1240,
                        "end": 1247
                      },
                      "typeArguments": null,
                      "start": 1240,
                      "end": 1247
                    },
                    "start": 1240,
                    "end": 1247
                  },
                  "start": 1231,
                  "end": 1247
                },
                "start": 1229,
                "end": 1247
              },
              "body": null,
              "expression": false,
              "start": 1198,
              "end": 1248
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1171,
            "end": 1248
          }
        ],
        "start": 1169,
        "end": 1250
      },
      "abstract": false,
      "declare": true,
      "start": 1149,
      "end": 1250
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1270
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1287
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1299
              },
              "optional": false,
              "computed": false,
              "start": 1281,
              "end": 1299
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "name": "Point3D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1308,
                            "end": 1315
                          },
                          "typeArguments": null,
                          "start": 1308,
                          "end": 1315
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1318,
                            "end": 1322
                          },
                          "typeArguments": null,
                          "start": 1318,
                          "end": 1322
                        }
                      ],
                      "start": 1308,
                      "end": 1322
                    },
                    "start": 1306,
                    "end": 1322
                  },
                  "start": 1301,
                  "end": 1322
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1325,
                    "end": 1330
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point3D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1334,
                        "end": 1341
                      },
                      "typeArguments": null,
                      "start": 1334,
                      "end": 1341
                    },
                    "start": 1334,
                    "end": 1341
                  },
                  "start": 1325,
                  "end": 1341
                },
                "start": 1323,
                "end": 1341
              },
              "body": null,
              "expression": false,
              "start": 1300,
              "end": 1342
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1273,
            "end": 1342
          }
        ],
        "start": 1271,
        "end": 1344
      },
      "abstract": false,
      "declare": true,
      "start": 1251,
      "end": 1344
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
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1364,
                "end": 1367
              },
              "start": 1362,
              "end": 1367
            },
            "start": 1358,
            "end": 1367
          },
          "init": null,
          "definite": false,
          "start": 1358,
          "end": 1367
        }
      ],
      "declare": true,
      "start": 1346,
      "end": 1368
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
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 1387,
                "end": 1393
              },
              "start": 1385,
              "end": 1393
            },
            "start": 1381,
            "end": 1393
          },
          "init": null,
          "definite": false,
          "start": 1381,
          "end": 1393
        }
      ],
      "declare": true,
      "start": 1369,
      "end": 1394
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
            "name": "lhs2",
            "optional": false,
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
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1413,
                      "end": 1418
                    },
                    "typeArguments": null,
                    "start": 1413,
                    "end": 1418
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point3D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1421,
                      "end": 1428
                    },
                    "typeArguments": null,
                    "start": 1421,
                    "end": 1428
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1431,
                      "end": 1435
                    },
                    "typeArguments": null,
                    "start": 1431,
                    "end": 1435
                  }
                ],
                "start": 1413,
                "end": 1435
              },
              "start": 1411,
              "end": 1435
            },
            "start": 1407,
            "end": 1435
          },
          "init": null,
          "definite": false,
          "start": 1407,
          "end": 1435
        }
      ],
      "declare": true,
      "start": 1395,
      "end": 1436
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
            "name": "lhs3",
            "optional": false,
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
                      "name": "Point3D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1455,
                      "end": 1462
                    },
                    "typeArguments": null,
                    "start": 1455,
                    "end": 1462
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1469
                    },
                    "typeArguments": null,
                    "start": 1465,
                    "end": 1469
                  }
                ],
                "start": 1455,
                "end": 1469
              },
              "start": 1453,
              "end": 1469
            },
            "start": 1449,
            "end": 1469
          },
          "init": null,
          "definite": false,
          "start": 1449,
          "end": 1469
        }
      ],
      "declare": true,
      "start": 1437,
      "end": 1470
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
            "name": "lhs4",
            "optional": false,
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
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1489,
                      "end": 1494
                    },
                    "typeArguments": null,
                    "start": 1489,
                    "end": 1494
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point3D2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1497,
                      "end": 1505
                    },
                    "typeArguments": null,
                    "start": 1497,
                    "end": 1505
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1512
                    },
                    "typeArguments": null,
                    "start": 1508,
                    "end": 1512
                  }
                ],
                "start": 1489,
                "end": 1512
              },
              "start": 1487,
              "end": 1512
            },
            "start": 1483,
            "end": 1512
          },
          "init": null,
          "definite": false,
          "start": 1483,
          "end": 1512
        }
      ],
      "declare": true,
      "start": 1471,
      "end": 1513
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1515,
            "end": 1519
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1531,
            "end": 1535
          },
          "start": 1515,
          "end": 1535
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1539,
          "end": 1543
        },
        "start": 1515,
        "end": 1543
      },
      "directive": null,
      "start": 1515,
      "end": 1544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1545,
            "end": 1549
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1565
          },
          "start": 1545,
          "end": 1565
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1569,
          "end": 1573
        },
        "start": 1545,
        "end": 1573
      },
      "directive": null,
      "start": 1545,
      "end": 1574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1575,
            "end": 1579
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1591,
            "end": 1595
          },
          "start": 1575,
          "end": 1595
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1599,
          "end": 1603
        },
        "start": 1575,
        "end": 1603
      },
      "directive": null,
      "start": 1575,
      "end": 1604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1605,
            "end": 1609
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1621,
            "end": 1625
          },
          "start": 1605,
          "end": 1625
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1633
        },
        "start": 1605,
        "end": 1633
      },
      "directive": null,
      "start": 1605,
      "end": 1634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1635,
            "end": 1639
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1651,
            "end": 1655
          },
          "start": 1635,
          "end": 1655
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1659,
          "end": 1663
        },
        "start": 1635,
        "end": 1663
      },
      "directive": null,
      "start": 1635,
      "end": 1664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1665,
            "end": 1669
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1681,
            "end": 1685
          },
          "start": 1665,
          "end": 1685
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1689,
          "end": 1693
        },
        "start": 1665,
        "end": 1693
      },
      "directive": null,
      "start": 1665,
      "end": 1694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1699
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1711,
            "end": 1715
          },
          "start": 1695,
          "end": 1715
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1719,
          "end": 1723
        },
        "start": 1695,
        "end": 1723
      },
      "directive": null,
      "start": 1695,
      "end": 1724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1725,
            "end": 1729
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1741,
            "end": 1745
          },
          "start": 1725,
          "end": 1745
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1753
        },
        "start": 1725,
        "end": 1753
      },
      "directive": null,
      "start": 1725,
      "end": 1754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1755,
            "end": 1759
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1771,
            "end": 1775
          },
          "start": 1755,
          "end": 1775
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1779,
          "end": 1783
        },
        "start": 1755,
        "end": 1783
      },
      "directive": null,
      "start": 1755,
      "end": 1784
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1785,
            "end": 1789
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1801,
            "end": 1805
          },
          "start": 1785,
          "end": 1805
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1809,
          "end": 1813
        },
        "start": 1785,
        "end": 1813
      },
      "directive": null,
      "start": 1785,
      "end": 1814
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1815,
            "end": 1819
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1831,
            "end": 1836
          },
          "start": 1815,
          "end": 1836
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1840,
          "end": 1844
        },
        "start": 1815,
        "end": 1844
      },
      "directive": null,
      "start": 1815,
      "end": 1845
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1846,
            "end": 1850
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1862,
            "end": 1867
          },
          "start": 1846,
          "end": 1867
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1871,
          "end": 1875
        },
        "start": 1846,
        "end": 1875
      },
      "directive": null,
      "start": 1846,
      "end": 1876
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1877,
            "end": 1881
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1893,
            "end": 1898
          },
          "start": 1877,
          "end": 1898
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1902,
          "end": 1906
        },
        "start": 1877,
        "end": 1906
      },
      "directive": null,
      "start": 1877,
      "end": 1907
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1908,
            "end": 1912
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1924,
            "end": 1929
          },
          "start": 1908,
          "end": 1929
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1933,
          "end": 1937
        },
        "start": 1908,
        "end": 1937
      },
      "directive": null,
      "start": 1908,
      "end": 1938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1940,
            "end": 1944
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1956,
            "end": 1960
          },
          "start": 1940,
          "end": 1960
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1964,
          "end": 1968
        },
        "start": 1940,
        "end": 1968
      },
      "directive": null,
      "start": 1940,
      "end": 1969
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1970,
            "end": 1974
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1986,
            "end": 1990
          },
          "start": 1970,
          "end": 1990
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1994,
          "end": 1998
        },
        "start": 1970,
        "end": 1998
      },
      "directive": null,
      "start": 1970,
      "end": 1999
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2000,
            "end": 2004
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2016,
            "end": 2020
          },
          "start": 2000,
          "end": 2020
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2024,
          "end": 2028
        },
        "start": 2000,
        "end": 2028
      },
      "directive": null,
      "start": 2000,
      "end": 2029
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2030,
            "end": 2034
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2046,
            "end": 2050
          },
          "start": 2030,
          "end": 2050
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2054,
          "end": 2058
        },
        "start": 2030,
        "end": 2058
      },
      "directive": null,
      "start": 2030,
      "end": 2059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2060,
            "end": 2064
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2076,
            "end": 2080
          },
          "start": 2060,
          "end": 2080
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2084,
          "end": 2088
        },
        "start": 2060,
        "end": 2088
      },
      "directive": null,
      "start": 2060,
      "end": 2089
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2090,
            "end": 2094
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2106,
            "end": 2110
          },
          "start": 2090,
          "end": 2110
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2114,
          "end": 2118
        },
        "start": 2090,
        "end": 2118
      },
      "directive": null,
      "start": 2090,
      "end": 2119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2121,
            "end": 2125
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2137,
            "end": 2141
          },
          "start": 2121,
          "end": 2141
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2145,
          "end": 2149
        },
        "start": 2121,
        "end": 2149
      },
      "directive": null,
      "start": 2121,
      "end": 2150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2151,
            "end": 2155
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2167,
            "end": 2171
          },
          "start": 2151,
          "end": 2171
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2175,
          "end": 2179
        },
        "start": 2151,
        "end": 2179
      },
      "directive": null,
      "start": 2151,
      "end": 2180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2181,
            "end": 2185
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2197,
            "end": 2201
          },
          "start": 2181,
          "end": 2201
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2205,
          "end": 2209
        },
        "start": 2181,
        "end": 2209
      },
      "directive": null,
      "start": 2181,
      "end": 2210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2211,
            "end": 2215
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2227,
            "end": 2231
          },
          "start": 2211,
          "end": 2231
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2235,
          "end": 2239
        },
        "start": 2211,
        "end": 2239
      },
      "directive": null,
      "start": 2211,
      "end": 2240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2241,
            "end": 2245
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2257,
            "end": 2261
          },
          "start": 2241,
          "end": 2261
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2265,
          "end": 2269
        },
        "start": 2241,
        "end": 2269
      },
      "directive": null,
      "start": 2241,
      "end": 2270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2271,
            "end": 2275
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2287,
            "end": 2291
          },
          "start": 2271,
          "end": 2291
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2295,
          "end": 2299
        },
        "start": 2271,
        "end": 2299
      },
      "directive": null,
      "start": 2271,
      "end": 2300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2301,
            "end": 2305
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2317,
            "end": 2321
          },
          "start": 2301,
          "end": 2321
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2325,
          "end": 2329
        },
        "start": 2301,
        "end": 2329
      },
      "directive": null,
      "start": 2301,
      "end": 2330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2331,
            "end": 2335
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2347,
            "end": 2351
          },
          "start": 2331,
          "end": 2351
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2355,
          "end": 2359
        },
        "start": 2331,
        "end": 2359
      },
      "directive": null,
      "start": 2331,
      "end": 2360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2361,
            "end": 2365
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2377,
            "end": 2381
          },
          "start": 2361,
          "end": 2381
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2385,
          "end": 2389
        },
        "start": 2361,
        "end": 2389
      },
      "directive": null,
      "start": 2361,
      "end": 2390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2391,
            "end": 2395
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2407,
            "end": 2412
          },
          "start": 2391,
          "end": 2412
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2416,
          "end": 2420
        },
        "start": 2391,
        "end": 2420
      },
      "directive": null,
      "start": 2391,
      "end": 2421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2422,
            "end": 2426
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2438,
            "end": 2443
          },
          "start": 2422,
          "end": 2443
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2451
        },
        "start": 2422,
        "end": 2451
      },
      "directive": null,
      "start": 2422,
      "end": 2452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2453,
            "end": 2457
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 2469,
            "end": 2474
          },
          "start": 2453,
          "end": 2474
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2478,
          "end": 2482
        },
        "start": 2453,
        "end": 2482
      },
      "directive": null,
      "start": 2453,
      "end": 2483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2485,
            "end": 2489
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2501,
            "end": 2505
          },
          "start": 2485,
          "end": 2505
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2509,
          "end": 2513
        },
        "start": 2485,
        "end": 2513
      },
      "directive": null,
      "start": 2485,
      "end": 2514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2515,
            "end": 2519
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2531,
            "end": 2535
          },
          "start": 2515,
          "end": 2535
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2539,
          "end": 2543
        },
        "start": 2515,
        "end": 2543
      },
      "directive": null,
      "start": 2515,
      "end": 2544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2545,
            "end": 2549
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2561,
            "end": 2565
          },
          "start": 2545,
          "end": 2565
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2569,
          "end": 2573
        },
        "start": 2545,
        "end": 2573
      },
      "directive": null,
      "start": 2545,
      "end": 2574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2575,
            "end": 2579
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2591,
            "end": 2595
          },
          "start": 2575,
          "end": 2595
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2599,
          "end": 2603
        },
        "start": 2575,
        "end": 2603
      },
      "directive": null,
      "start": 2575,
      "end": 2604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2605,
            "end": 2609
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2621,
            "end": 2625
          },
          "start": 2605,
          "end": 2625
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2629,
          "end": 2633
        },
        "start": 2605,
        "end": 2633
      },
      "directive": null,
      "start": 2605,
      "end": 2634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2635,
            "end": 2639
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2651,
            "end": 2655
          },
          "start": 2635,
          "end": 2655
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2659,
          "end": 2663
        },
        "start": 2635,
        "end": 2663
      },
      "directive": null,
      "start": 2635,
      "end": 2664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2665,
            "end": 2669
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2681,
            "end": 2685
          },
          "start": 2665,
          "end": 2685
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2689,
          "end": 2693
        },
        "start": 2665,
        "end": 2693
      },
      "directive": null,
      "start": 2665,
      "end": 2694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2695,
            "end": 2699
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2711,
            "end": 2715
          },
          "start": 2695,
          "end": 2715
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2719,
          "end": 2723
        },
        "start": 2695,
        "end": 2723
      },
      "directive": null,
      "start": 2695,
      "end": 2724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2725,
            "end": 2729
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2741,
            "end": 2745
          },
          "start": 2725,
          "end": 2745
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2749,
          "end": 2753
        },
        "start": 2725,
        "end": 2753
      },
      "directive": null,
      "start": 2725,
      "end": 2754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2755,
            "end": 2759
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2771,
            "end": 2775
          },
          "start": 2755,
          "end": 2775
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2779,
          "end": 2783
        },
        "start": 2755,
        "end": 2783
      },
      "directive": null,
      "start": 2755,
      "end": 2784
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2785,
            "end": 2789
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2801,
            "end": 2806
          },
          "start": 2785,
          "end": 2806
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2810,
          "end": 2814
        },
        "start": 2785,
        "end": 2814
      },
      "directive": null,
      "start": 2785,
      "end": 2815
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2816,
            "end": 2820
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2832,
            "end": 2837
          },
          "start": 2816,
          "end": 2837
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2841,
          "end": 2845
        },
        "start": 2816,
        "end": 2845
      },
      "directive": null,
      "start": 2816,
      "end": 2846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2847,
            "end": 2851
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 2863,
            "end": 2868
          },
          "start": 2847,
          "end": 2868
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2872,
          "end": 2876
        },
        "start": 2847,
        "end": 2876
      },
      "directive": null,
      "start": 2847,
      "end": 2877
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2878,
            "end": 2882
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs13",
            "optional": false,
            "typeAnnotation": null,
            "start": 2894,
            "end": 2899
          },
          "start": 2878,
          "end": 2899
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2903,
          "end": 2907
        },
        "start": 2878,
        "end": 2907
      },
      "directive": null,
      "start": 2878,
      "end": 2908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2910,
            "end": 2914
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2926,
            "end": 2930
          },
          "start": 2910,
          "end": 2930
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2934,
          "end": 2938
        },
        "start": 2910,
        "end": 2938
      },
      "directive": null,
      "start": 2910,
      "end": 2939
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2940,
            "end": 2944
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2956,
            "end": 2960
          },
          "start": 2940,
          "end": 2960
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2964,
          "end": 2968
        },
        "start": 2940,
        "end": 2968
      },
      "directive": null,
      "start": 2940,
      "end": 2969
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2970,
            "end": 2974
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2986,
            "end": 2990
          },
          "start": 2970,
          "end": 2990
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2994,
          "end": 2998
        },
        "start": 2970,
        "end": 2998
      },
      "directive": null,
      "start": 2970,
      "end": 2999
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3000,
            "end": 3004
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3016,
            "end": 3020
          },
          "start": 3000,
          "end": 3020
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3024,
          "end": 3028
        },
        "start": 3000,
        "end": 3028
      },
      "directive": null,
      "start": 3000,
      "end": 3029
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3030,
            "end": 3034
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3046,
            "end": 3050
          },
          "start": 3030,
          "end": 3050
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3054,
          "end": 3058
        },
        "start": 3030,
        "end": 3058
      },
      "directive": null,
      "start": 3030,
      "end": 3059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3060,
            "end": 3064
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3076,
            "end": 3080
          },
          "start": 3060,
          "end": 3080
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3084,
          "end": 3088
        },
        "start": 3060,
        "end": 3088
      },
      "directive": null,
      "start": 3060,
      "end": 3089
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3090,
            "end": 3094
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3106,
            "end": 3110
          },
          "start": 3090,
          "end": 3110
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3114,
          "end": 3118
        },
        "start": 3090,
        "end": 3118
      },
      "directive": null,
      "start": 3090,
      "end": 3119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3120,
            "end": 3124
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3136,
            "end": 3140
          },
          "start": 3120,
          "end": 3140
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3144,
          "end": 3148
        },
        "start": 3120,
        "end": 3148
      },
      "directive": null,
      "start": 3120,
      "end": 3149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3150,
            "end": 3154
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 3166,
            "end": 3170
          },
          "start": 3150,
          "end": 3170
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3174,
          "end": 3178
        },
        "start": 3150,
        "end": 3178
      },
      "directive": null,
      "start": 3150,
      "end": 3179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3180,
            "end": 3184
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3196,
            "end": 3201
          },
          "start": 3180,
          "end": 3201
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3205,
          "end": 3209
        },
        "start": 3180,
        "end": 3209
      },
      "directive": null,
      "start": 3180,
      "end": 3210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3211,
            "end": 3215
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3227,
            "end": 3232
          },
          "start": 3211,
          "end": 3232
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3236,
          "end": 3240
        },
        "start": 3211,
        "end": 3240
      },
      "directive": null,
      "start": 3211,
      "end": 3241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3242,
            "end": 3246
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3258,
            "end": 3263
          },
          "start": 3242,
          "end": 3263
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3267,
          "end": 3271
        },
        "start": 3242,
        "end": 3271
      },
      "directive": null,
      "start": 3242,
      "end": 3272
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
        "start": 3288,
        "end": 3289
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
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 3296,
              "end": 3298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3300,
                "end": 3306
              },
              "start": 3298,
              "end": 3306
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
            "start": 3296,
            "end": 3307
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3549,
                "end": 3555
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 3556,
                "end": 3567
              },
              "optional": false,
              "computed": false,
              "start": 3549,
              "end": 3567
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 3569,
                      "end": 3570
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3569,
                    "end": 3570
                  }
                ],
                "start": 3568,
                "end": 3571
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3578,
                        "end": 3579
                      },
                      "typeArguments": null,
                      "start": 3578,
                      "end": 3579
                    },
                    "start": 3576,
                    "end": 3579
                  },
                  "start": 3572,
                  "end": 3579
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3588,
                      "end": 3595
                    },
                    "start": 3586,
                    "end": 3595
                  },
                  "start": 3581,
                  "end": 3595
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3598,
                    "end": 3603
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3617,
                          "end": 3618
                        },
                        "typeArguments": null,
                        "start": 3617,
                        "end": 3618
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "globalThis",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3627,
                            "end": 3637
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3638,
                            "end": 3646
                          },
                          "start": 3627,
                          "end": 3646
                        },
                        "typeArguments": null,
                        "start": 3627,
                        "end": 3646
                      },
                      "trueType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3661,
                            "end": 3662
                          },
                          "typeArguments": null,
                          "start": 3661,
                          "end": 3662
                        },
                        "extendsType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": true,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3682,
                                "end": 3691
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
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3699,
                                      "end": 3700
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3699,
                                    "end": 3700
                                  },
                                  "start": 3693,
                                  "end": 3700
                                },
                                "start": 3691,
                                "end": 3700
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3673,
                              "end": 3700
                            }
                          ],
                          "start": 3671,
                          "end": 3702
                        },
                        "trueType": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSBooleanKeyword",
                            "start": 3721,
                            "end": 3728
                          },
                          "extendsType": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3738,
                                "end": 3739
                              },
                              "typeArguments": null,
                              "start": 3738,
                              "end": 3739
                            },
                            "extendsType": {
                              "type": "TSNeverKeyword",
                              "start": 3748,
                              "end": 3753
                            },
                            "trueType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 3756,
                                "end": 3760
                              },
                              "start": 3756,
                              "end": 3760
                            },
                            "falseType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 3763,
                                "end": 3768
                              },
                              "start": 3763,
                              "end": 3768
                            },
                            "start": 3738,
                            "end": 3768
                          },
                          "trueType": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3825,
                                "end": 3826
                              },
                              "typeArguments": null,
                              "start": 3825,
                              "end": 3826
                            },
                            "extendsType": {
                              "type": "TSConstructorType",
                              "abstract": true,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3853,
                                    "end": 3857
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 3859,
                                      "end": 3862
                                    },
                                    "start": 3857,
                                    "end": 3862
                                  },
                                  "value": null,
                                  "start": 3850,
                                  "end": 3862
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSInferType",
                                  "typeParameter": {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3873,
                                      "end": 3874
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3873,
                                    "end": 3874
                                  },
                                  "start": 3867,
                                  "end": 3874
                                },
                                "start": 3864,
                                "end": 3874
                              },
                              "start": 3836,
                              "end": 3874
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3878,
                                "end": 3879
                              },
                              "typeArguments": null,
                              "start": 3878,
                              "end": 3879
                            },
                            "falseType": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 3882,
                              "end": 3884
                            },
                            "start": 3825,
                            "end": 3884
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3903,
                              "end": 3904
                            },
                            "typeArguments": null,
                            "start": 3903,
                            "end": 3904
                          },
                          "start": 3721,
                          "end": 3904
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 3919,
                          "end": 3924
                        },
                        "start": 3661,
                        "end": 3924
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 3935,
                        "end": 3940
                      },
                      "start": 3617,
                      "end": 3940
                    },
                    "start": 3617,
                    "end": 3940
                  },
                  "start": 3598,
                  "end": 3946
                },
                "start": 3596,
                "end": 3946
              },
              "body": null,
              "expression": false,
              "start": 3568,
              "end": 3947
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3541,
            "end": 3947
          }
        ],
        "start": 3290,
        "end": 3949
      },
      "abstract": false,
      "declare": true,
      "start": 3274,
      "end": 3949
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 3965,
        "end": 3966
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 3975,
        "end": 3976
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
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 3979,
              "end": 3981
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3983,
                "end": 3989
              },
              "start": 3981,
              "end": 3989
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
            "start": 3979,
            "end": 3990
          }
        ],
        "start": 3977,
        "end": 3992
      },
      "abstract": false,
      "declare": true,
      "start": 3951,
      "end": 3992
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 4013,
                "end": 4020
              },
              "start": 4011,
              "end": 4020
            },
            "start": 4008,
            "end": 4020
          },
          "init": null,
          "definite": false,
          "start": 4008,
          "end": 4020
        }
      ],
      "declare": true,
      "start": 3994,
      "end": 4021
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 4026,
          "end": 4029
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 4041,
          "end": 4042
        },
        "start": 4026,
        "end": 4042
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 4050,
              "end": 4053
            },
            "directive": null,
            "start": 4050,
            "end": 4054
          }
        ],
        "start": 4044,
        "end": 4061
      },
      "alternate": null,
      "start": 4022,
      "end": 4061
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 4066,
          "end": 4069
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 4081,
          "end": 4082
        },
        "start": 4066,
        "end": 4082
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 4090,
              "end": 4093
            },
            "directive": null,
            "start": 4090,
            "end": 4094
          }
        ],
        "start": 4084,
        "end": 4101
      },
      "alternate": null,
      "start": 4062,
      "end": 4101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasInstanceOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 4187,
        "end": 4200
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                "start": 4204,
                "end": 4210
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 4211,
                "end": 4222
              },
              "optional": false,
              "computed": false,
              "start": 4204,
              "end": 4222
            },
            "computed": true,
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
                    "type": "TSUnknownKeyword",
                    "start": 4227,
                    "end": 4234
                  },
                  "start": 4225,
                  "end": 4234
                },
                "start": 4224,
                "end": 4234
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4237,
                "end": 4244
              },
              "start": 4235,
              "end": 4244
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4203,
            "end": 4244
          }
        ],
        "start": 4201,
        "end": 4246
      },
      "declare": false,
      "start": 4177,
      "end": 4246
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs14",
        "optional": false,
        "typeAnnotation": null,
        "start": 4252,
        "end": 4257
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasInstanceOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 4260,
              "end": 4273
            },
            "typeArguments": null,
            "start": 4260,
            "end": 4273
          },
          {
            "type": "TSObjectKeyword",
            "start": 4276,
            "end": 4282
          }
        ],
        "start": 4260,
        "end": 4282
      },
      "declare": false,
      "start": 4247,
      "end": 4283
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
            "name": "rhs14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rhs14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4305,
                  "end": 4310
                },
                "typeArguments": null,
                "start": 4305,
                "end": 4310
              },
              "start": 4303,
              "end": 4310
            },
            "start": 4298,
            "end": 4310
          },
          "init": null,
          "definite": false,
          "start": 4298,
          "end": 4310
        }
      ],
      "declare": true,
      "start": 4284,
      "end": 4311
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 4312,
            "end": 4316
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs14",
            "optional": false,
            "typeAnnotation": null,
            "start": 4328,
            "end": 4333
          },
          "start": 4312,
          "end": 4333
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 4337,
          "end": 4341
        },
        "start": 4312,
        "end": 4341
      },
      "directive": null,
      "start": 4312,
      "end": 4342
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasInstanceOf1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4365,
        "end": 4379
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                "start": 4383,
                "end": 4389
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 4390,
                "end": 4401
              },
              "optional": false,
              "computed": false,
              "start": 4383,
              "end": 4401
            },
            "computed": true,
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
                    "type": "TSUnknownKeyword",
                    "start": 4406,
                    "end": 4413
                  },
                  "start": 4404,
                  "end": 4413
                },
                "start": 4403,
                "end": 4413
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4416,
                  "end": 4417
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4421,
                      "end": 4426
                    },
                    "typeArguments": null,
                    "start": 4421,
                    "end": 4426
                  },
                  "start": 4421,
                  "end": 4426
                },
                "start": 4416,
                "end": 4426
              },
              "start": 4414,
              "end": 4426
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4382,
            "end": 4426
          }
        ],
        "start": 4380,
        "end": 4428
      },
      "declare": false,
      "start": 4355,
      "end": 4428
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasInstanceOf2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4439,
        "end": 4453
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                "start": 4457,
                "end": 4463
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 4464,
                "end": 4475
              },
              "optional": false,
              "computed": false,
              "start": 4457,
              "end": 4475
            },
            "computed": true,
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
                    "type": "TSUnknownKeyword",
                    "start": 4480,
                    "end": 4487
                  },
                  "start": 4478,
                  "end": 4487
                },
                "start": 4477,
                "end": 4487
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4490,
                  "end": 4491
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4495,
                      "end": 4499
                    },
                    "typeArguments": null,
                    "start": 4495,
                    "end": 4499
                  },
                  "start": 4495,
                  "end": 4499
                },
                "start": 4490,
                "end": 4499
              },
              "start": 4488,
              "end": 4499
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4456,
            "end": 4499
          }
        ],
        "start": 4454,
        "end": 4501
      },
      "declare": false,
      "start": 4429,
      "end": 4501
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs15",
        "optional": false,
        "typeAnnotation": null,
        "start": 4507,
        "end": 4512
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasInstanceOf1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4515,
              "end": 4529
            },
            "typeArguments": null,
            "start": 4515,
            "end": 4529
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasInstanceOf2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4532,
              "end": 4546
            },
            "typeArguments": null,
            "start": 4532,
            "end": 4546
          }
        ],
        "start": 4515,
        "end": 4546
      },
      "declare": false,
      "start": 4502,
      "end": 4547
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
            "name": "rhs15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rhs15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4569,
                  "end": 4574
                },
                "typeArguments": null,
                "start": 4569,
                "end": 4574
              },
              "start": 4567,
              "end": 4574
            },
            "start": 4562,
            "end": 4574
          },
          "init": null,
          "definite": false,
          "start": 4562,
          "end": 4574
        }
      ],
      "declare": true,
      "start": 4548,
      "end": 4575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 4576,
            "end": 4580
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs15",
            "optional": false,
            "typeAnnotation": null,
            "start": 4592,
            "end": 4597
          },
          "start": 4576,
          "end": 4597
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 4601,
          "end": 4605
        },
        "start": 4576,
        "end": 4605
      },
      "directive": null,
      "start": 4576,
      "end": 4606
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4606
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
    "value": "Point",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 41,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
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
    "value": "interface",
    "start": 95,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Point3D2",
    "start": 105,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 142,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 173,
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
    "value": "Point",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "rhs0",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 215,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
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
    "value": "value",
    "start": 228,
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
    "value": "unknown",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "boolean",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 257,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "rhs1",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 285,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 311,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 323,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "rhs2",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 351,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 364,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "value",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 383,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 396,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "rhs3",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 424,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 437,
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
    "value": "Point",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 459,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 465,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 478,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "rhs4",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 506,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 519,
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
    "value": "Point",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 534,
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
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 541,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 547,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 559,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 567,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "rhs5",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 587,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 600,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 607,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 615,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 632,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 638,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 641,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
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
    "value": "declare",
    "start": 653,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 661,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "rhs6",
    "start": 665,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 674,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 681,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 694,
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
    "value": "Point3D",
    "start": 701,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 718,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 724,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 740,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 748,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Rhs7",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 776,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 789,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 806,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 817,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 825,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "Rhs8",
    "start": 831,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 853,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 866,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 879,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 890,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 898,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "Rhs9",
    "start": 904,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 926,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 939,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 946,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "value",
    "start": 952,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 958,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 970,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 978,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "Rhs10",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 992,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1007,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1027,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1035,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1042,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "Rhs11",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1082,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1097,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1117,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1125,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1132,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1141,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1149,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "Rhs12",
    "start": 1163,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1186,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 1214,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1224,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1231,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1237,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 1240,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1251,
    "end": 1258
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1259,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "Rhs13",
    "start": 1265,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1288,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1301,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 1308,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1325,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 1334,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1346,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1354,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1358,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 1381,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1387,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1395,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1413,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "Point3D",
    "start": 1421,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1431,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1437,
    "end": 1444
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1445,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 1449,
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
    "value": "Point3D",
    "start": 1455,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1465,
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
    "value": "declare",
    "start": 1471,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1479,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 1483,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1489,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "Point3D2",
    "start": 1497,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 1508,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1515,
    "end": 1519
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1520,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "rhs0",
    "start": 1531,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1536,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1539,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1545,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1550,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "rhs1",
    "start": 1561,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1569,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1575,
    "end": 1579
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1580,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "rhs2",
    "start": 1591,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1599,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1605,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1610,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "rhs3",
    "start": 1621,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1629,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1635,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1640,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "rhs4",
    "start": 1651,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1656,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1659,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1670,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "rhs5",
    "start": 1681,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1686,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1689,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1695,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1700,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "rhs6",
    "start": 1711,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1716,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1725,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1730,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "Rhs7",
    "start": 1741,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1746,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1749,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1755,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1760,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "Rhs8",
    "start": 1771,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1776,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1779,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1785,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1790,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "Rhs9",
    "start": 1801,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1809,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1815,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1820,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "Rhs10",
    "start": 1831,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1837,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1840,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1846,
    "end": 1850
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1851,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "Rhs11",
    "start": 1862,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1868,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1871,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1877,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1882,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "Rhs12",
    "start": 1893,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1902,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1908,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1913,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "Rhs13",
    "start": 1924,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1930,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 1933,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 1940,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1945,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "rhs0",
    "start": 1956,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1961,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 1964,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 1970,
    "end": 1974
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1975,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "rhs1",
    "start": 1986,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1991,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 1994,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2000,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2005,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "rhs2",
    "start": 2016,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2021,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2024,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2030,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2035,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "Rhs7",
    "start": 2046,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2051,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2054,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2060,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2065,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "Rhs8",
    "start": 2076,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2081,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2084,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2090,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2095,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "Rhs9",
    "start": 2106,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2111,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "lhs1",
    "start": 2114,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2121,
    "end": 2125
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2126,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "rhs0",
    "start": 2137,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2142,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2145,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2151,
    "end": 2155
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2156,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "rhs1",
    "start": 2167,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2172,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2175,
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
    "value": "lhs2",
    "start": 2181,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2186,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "rhs2",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2202,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2205,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2211,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2216,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "rhs3",
    "start": 2227,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2232,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2235,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2241,
    "end": 2245
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2246,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "rhs4",
    "start": 2257,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2262,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2265,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2271,
    "end": 2275
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2276,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "rhs5",
    "start": 2287,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2292,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2295,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2301,
    "end": 2305
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2306,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "Rhs7",
    "start": 2317,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2322,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2325,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2331,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2336,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "Rhs8",
    "start": 2347,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2352,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2355,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2361,
    "end": 2365
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2366,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "Rhs9",
    "start": 2377,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2382,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2385,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2391,
    "end": 2395
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2396,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "Rhs10",
    "start": 2407,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2413,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2416,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2422,
    "end": 2426
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2427,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "Rhs11",
    "start": 2438,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2444,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2447,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2453,
    "end": 2457
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2458,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "Rhs12",
    "start": 2469,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2475,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "lhs2",
    "start": 2478,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2485,
    "end": 2489
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2490,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "rhs0",
    "start": 2501,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2506,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2509,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2515,
    "end": 2519
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2520,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "rhs1",
    "start": 2531,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2536,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2539,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2545,
    "end": 2549
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2550,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "rhs2",
    "start": 2561,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2566,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2569,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2575,
    "end": 2579
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2580,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "rhs3",
    "start": 2591,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2596,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2599,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2605,
    "end": 2609
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2610,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "rhs4",
    "start": 2621,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2626,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2629,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2635,
    "end": 2639
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2640,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "rhs5",
    "start": 2651,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2656,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2659,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2665,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2670,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "rhs6",
    "start": 2681,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2686,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2689,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2695,
    "end": 2699
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2700,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "Rhs7",
    "start": 2711,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2716,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2719,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2725,
    "end": 2729
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2730,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "Rhs8",
    "start": 2741,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2746,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2749,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2755,
    "end": 2759
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2760,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "Rhs9",
    "start": 2771,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2776,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2779,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2785,
    "end": 2789
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2790,
    "end": 2800
  },
  {
    "type": "Identifier",
    "value": "Rhs10",
    "start": 2801,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2807,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2810,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2816,
    "end": 2820
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2821,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "Rhs11",
    "start": 2832,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2838,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2841,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2847,
    "end": 2851
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2852,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "Rhs12",
    "start": 2863,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2869,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2872,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2878,
    "end": 2882
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2883,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "Rhs13",
    "start": 2894,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2900,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "lhs3",
    "start": 2903,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 2910,
    "end": 2914
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2915,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "rhs0",
    "start": 2926,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2931,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 2934,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 2940,
    "end": 2944
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2945,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "rhs1",
    "start": 2956,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2961,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 2964,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 2970,
    "end": 2974
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2975,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "rhs2",
    "start": 2986,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2991,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 2994,
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
    "value": "lhs4",
    "start": 3000,
    "end": 3004
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3005,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "rhs3",
    "start": 3016,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3021,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3024,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3030,
    "end": 3034
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3035,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "rhs4",
    "start": 3046,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3051,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3054,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3060,
    "end": 3064
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3065,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "rhs5",
    "start": 3076,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3081,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3084,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3090,
    "end": 3094
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3095,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "Rhs7",
    "start": 3106,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3111,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3114,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3120,
    "end": 3124
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3125,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "Rhs8",
    "start": 3136,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3141,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3144,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3150,
    "end": 3154
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3155,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "Rhs9",
    "start": 3166,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3171,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3174,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3180,
    "end": 3184
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3185,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "Rhs10",
    "start": 3196,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3202,
    "end": 3204
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3205,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3211,
    "end": 3215
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3216,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "Rhs11",
    "start": 3227,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3233,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3236,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3242,
    "end": 3246
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3247,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "Rhs12",
    "start": 3258,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3264,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "lhs4",
    "start": 3267,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3274,
    "end": 3281
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3282,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 3296,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3300,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3541,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3549,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 3556,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3572,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3581,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3588,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3598,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3604,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3619,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 3627,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 3638,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3663,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3673,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 3682,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3693,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3721,
    "end": 3728
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3729,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3740,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3748,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3756,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3763,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3827,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 3836,
    "end": 3844
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3845,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3850,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3853,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3859,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3864,
    "end": 3866
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3867,
    "end": 3872
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3919,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3935,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3948,
    "end": 3949
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3951,
    "end": 3958
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3959,
    "end": 3964
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3967,
    "end": 3974
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 3979,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3983,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3994,
    "end": 4001
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4002,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4008,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4013,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4022,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4026,
    "end": 4029
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 4030,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4050,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4062,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4066,
    "end": 4069
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 4070,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4081,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4090,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4177,
    "end": 4186
  },
  {
    "type": "Identifier",
    "value": "HasInstanceOf",
    "start": 4187,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4204,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 4211,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4225,
    "end": 4226
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4227,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4237,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4247,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "Rhs14",
    "start": 4252,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Identifier",
    "value": "HasInstanceOf",
    "start": 4260,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4276,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4284,
    "end": 4291
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4292,
    "end": 4297
  },
  {
    "type": "Identifier",
    "value": "rhs14",
    "start": 4298,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "Rhs14",
    "start": 4305,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 4312,
    "end": 4316
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 4317,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "rhs14",
    "start": 4328,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4334,
    "end": 4336
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 4337,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4341,
    "end": 4342
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4355,
    "end": 4364
  },
  {
    "type": "Identifier",
    "value": "HasInstanceOf1",
    "start": 4365,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4383,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 4390,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4406,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4418,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 4421,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4429,
    "end": 4438
  },
  {
    "type": "Identifier",
    "value": "HasInstanceOf2",
    "start": 4439,
    "end": 4453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4457,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 4464,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4480,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4492,
    "end": 4494
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 4495,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4502,
    "end": 4506
  },
  {
    "type": "Identifier",
    "value": "Rhs15",
    "start": 4507,
    "end": 4512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Identifier",
    "value": "HasInstanceOf1",
    "start": 4515,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Identifier",
    "value": "HasInstanceOf2",
    "start": 4532,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4548,
    "end": 4555
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4556,
    "end": 4561
  },
  {
    "type": "Identifier",
    "value": "rhs15",
    "start": 4562,
    "end": 4567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4567,
    "end": 4568
  },
  {
    "type": "Identifier",
    "value": "Rhs15",
    "start": 4569,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 4576,
    "end": 4580
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 4581,
    "end": 4591
  },
  {
    "type": "Identifier",
    "value": "rhs15",
    "start": 4592,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4598,
    "end": 4600
  },
  {
    "type": "Identifier",
    "value": "lhs0",
    "start": 4601,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4605,
    "end": 4606
  }
]
```

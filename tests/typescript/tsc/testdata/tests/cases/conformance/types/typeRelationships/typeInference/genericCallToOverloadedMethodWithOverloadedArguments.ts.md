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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 36
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
                    "start": 37,
                    "end": 38
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 37,
                  "end": 38
                }
              ],
              "start": 36,
              "end": 39
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 54
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
                          "start": 55,
                          "end": 56
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 55,
                        "end": 56
                      }
                    ],
                    "start": 54,
                    "end": 57
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 66,
                                    "end": 67
                                  },
                                  "typeArguments": null,
                                  "start": 66,
                                  "end": 67
                                },
                                "start": 64,
                                "end": 67
                              },
                              "start": 63,
                              "end": 67
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 72,
                                "end": 79
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 80,
                                      "end": 81
                                    },
                                    "typeArguments": null,
                                    "start": 80,
                                    "end": 81
                                  }
                                ],
                                "start": 79,
                                "end": 82
                              },
                              "start": 72,
                              "end": 82
                            },
                            "start": 69,
                            "end": 82
                          },
                          "start": 62,
                          "end": 82
                        },
                        "start": 60,
                        "end": 82
                      },
                      "start": 58,
                      "end": 82
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 92
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 93,
                              "end": 94
                            },
                            "typeArguments": null,
                            "start": 93,
                            "end": 94
                          }
                        ],
                        "start": 92,
                        "end": 95
                      },
                      "start": 85,
                      "end": 95
                    },
                    "start": 83,
                    "end": 95
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 50,
                  "end": 96
                }
              ],
              "start": 40,
              "end": 102
            },
            "declare": false,
            "start": 19,
            "end": 102
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 137
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 141,
                    "end": 147
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 138,
                "end": 147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 157
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  ],
                  "start": 157,
                  "end": 165
                },
                "start": 150,
                "end": 165
              },
              "start": 148,
              "end": 165
            },
            "body": null,
            "expression": false,
            "start": 108,
            "end": 166
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
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 203
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 204,
                            "end": 210
                          }
                        ],
                        "start": 203,
                        "end": 211
                      },
                      "start": 196,
                      "end": 211
                    },
                    "start": 194,
                    "end": 211
                  },
                  "start": 184,
                  "end": 211
                },
                "init": null,
                "definite": false,
                "start": 184,
                "end": 211
              }
            ],
            "declare": true,
            "start": 172,
            "end": 212
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
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 231
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 244
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 249
                    },
                    "optional": false,
                    "computed": false,
                    "start": 234,
                    "end": 249
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 262
                    }
                  ],
                  "optional": false,
                  "start": 234,
                  "end": 263
                },
                "definite": false,
                "start": 221,
                "end": 263
              }
            ],
            "declare": false,
            "start": 217,
            "end": 264
          }
        ],
        "start": 13,
        "end": 266
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 266
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 320
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 344
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
                    "start": 345,
                    "end": 346
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 345,
                  "end": 346
                }
              ],
              "start": 344,
              "end": 347
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 362
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
                          "start": 363,
                          "end": 364
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 363,
                        "end": 364
                      }
                    ],
                    "start": 362,
                    "end": 365
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 374,
                                    "end": 375
                                  },
                                  "typeArguments": null,
                                  "start": 374,
                                  "end": 375
                                },
                                "start": 372,
                                "end": 375
                              },
                              "start": 371,
                              "end": 375
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 380,
                                "end": 387
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 388,
                                      "end": 389
                                    },
                                    "typeArguments": null,
                                    "start": 388,
                                    "end": 389
                                  }
                                ],
                                "start": 387,
                                "end": 390
                              },
                              "start": 380,
                              "end": 390
                            },
                            "start": 377,
                            "end": 390
                          },
                          "start": 370,
                          "end": 390
                        },
                        "start": 368,
                        "end": 390
                      },
                      "start": 366,
                      "end": 390
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 400
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 402
                            },
                            "typeArguments": null,
                            "start": 401,
                            "end": 402
                          }
                        ],
                        "start": 400,
                        "end": 403
                      },
                      "start": 393,
                      "end": 403
                    },
                    "start": 391,
                    "end": 403
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 358,
                  "end": 404
                }
              ],
              "start": 348,
              "end": 410
            },
            "declare": false,
            "start": 327,
            "end": 410
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 445
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 449,
                    "end": 455
                  },
                  "start": 447,
                  "end": 455
                },
                "start": 446,
                "end": 455
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 465
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 466,
                      "end": 472
                    }
                  ],
                  "start": 465,
                  "end": 473
                },
                "start": 458,
                "end": 473
              },
              "start": 456,
              "end": 473
            },
            "body": null,
            "expression": false,
            "start": 416,
            "end": 474
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 508
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 512,
                    "end": 518
                  },
                  "start": 510,
                  "end": 518
                },
                "start": 509,
                "end": 518
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 528
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 529,
                      "end": 535
                    }
                  ],
                  "start": 528,
                  "end": 536
                },
                "start": 521,
                "end": 536
              },
              "start": 519,
              "end": 536
            },
            "body": null,
            "expression": false,
            "start": 479,
            "end": 537
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
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 567,
                        "end": 574
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 575,
                            "end": 581
                          }
                        ],
                        "start": 574,
                        "end": 582
                      },
                      "start": 567,
                      "end": 582
                    },
                    "start": 565,
                    "end": 582
                  },
                  "start": 555,
                  "end": 582
                },
                "init": null,
                "definite": false,
                "start": 555,
                "end": 582
              }
            ],
            "declare": true,
            "start": 543,
            "end": 583
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
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 602
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 615
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 616,
                      "end": 620
                    },
                    "optional": false,
                    "computed": false,
                    "start": 605,
                    "end": 620
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 633
                    }
                  ],
                  "optional": false,
                  "start": 605,
                  "end": 634
                },
                "definite": false,
                "start": 592,
                "end": 634
              }
            ],
            "declare": false,
            "start": 588,
            "end": 635
          }
        ],
        "start": 321,
        "end": 637
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 308,
      "end": 637
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 689,
        "end": 691
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 715
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
                    "start": 716,
                    "end": 717
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 716,
                  "end": 717
                }
              ],
              "start": 715,
              "end": 718
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 733
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
                          "start": 734,
                          "end": 735
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 734,
                        "end": 735
                      }
                    ],
                    "start": 733,
                    "end": 736
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 745,
                                    "end": 746
                                  },
                                  "typeArguments": null,
                                  "start": 745,
                                  "end": 746
                                },
                                "start": 743,
                                "end": 746
                              },
                              "start": 742,
                              "end": 746
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 751,
                                "end": 758
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 759,
                                      "end": 760
                                    },
                                    "typeArguments": null,
                                    "start": 759,
                                    "end": 760
                                  }
                                ],
                                "start": 758,
                                "end": 761
                              },
                              "start": 751,
                              "end": 761
                            },
                            "start": 748,
                            "end": 761
                          },
                          "start": 741,
                          "end": 761
                        },
                        "start": 739,
                        "end": 761
                      },
                      "start": 737,
                      "end": 761
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 764,
                        "end": 771
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 772,
                              "end": 773
                            },
                            "typeArguments": null,
                            "start": 772,
                            "end": 773
                          }
                        ],
                        "start": 771,
                        "end": 774
                      },
                      "start": 764,
                      "end": 774
                    },
                    "start": 762,
                    "end": 774
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 729,
                  "end": 775
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 788
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
                          "start": 789,
                          "end": 790
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 789,
                        "end": 790
                      }
                    ],
                    "start": 788,
                    "end": 791
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 800,
                                    "end": 801
                                  },
                                  "typeArguments": null,
                                  "start": 800,
                                  "end": 801
                                },
                                "start": 798,
                                "end": 801
                              },
                              "start": 797,
                              "end": 801
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 806,
                                "end": 813
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 814,
                                      "end": 815
                                    },
                                    "typeArguments": null,
                                    "start": 814,
                                    "end": 815
                                  }
                                ],
                                "start": 813,
                                "end": 816
                              },
                              "start": 806,
                              "end": 816
                            },
                            "start": 803,
                            "end": 816
                          },
                          "start": 796,
                          "end": 816
                        },
                        "start": 794,
                        "end": 816
                      },
                      "start": 792,
                      "end": 816
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
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
                              "start": 827,
                              "end": 837
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 842,
                                "end": 849
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 850,
                                      "end": 851
                                    },
                                    "typeArguments": null,
                                    "start": 850,
                                    "end": 851
                                  }
                                ],
                                "start": 849,
                                "end": 852
                              },
                              "start": 842,
                              "end": 852
                            },
                            "start": 839,
                            "end": 852
                          },
                          "start": 826,
                          "end": 852
                        },
                        "start": 824,
                        "end": 852
                      },
                      "start": 818,
                      "end": 852
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 855,
                        "end": 862
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 863,
                              "end": 864
                            },
                            "typeArguments": null,
                            "start": 863,
                            "end": 864
                          }
                        ],
                        "start": 862,
                        "end": 865
                      },
                      "start": 855,
                      "end": 865
                    },
                    "start": 853,
                    "end": 865
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 784,
                  "end": 866
                }
              ],
              "start": 719,
              "end": 872
            },
            "declare": false,
            "start": 698,
            "end": 872
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 907
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 911,
                    "end": 917
                  },
                  "start": 909,
                  "end": 917
                },
                "start": 908,
                "end": 917
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 927
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 928,
                      "end": 934
                    }
                  ],
                  "start": 927,
                  "end": 935
                },
                "start": 920,
                "end": 935
              },
              "start": 918,
              "end": 935
            },
            "body": null,
            "expression": false,
            "start": 878,
            "end": 936
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
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 966,
                        "end": 973
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 974,
                            "end": 980
                          }
                        ],
                        "start": 973,
                        "end": 981
                      },
                      "start": 966,
                      "end": 981
                    },
                    "start": 964,
                    "end": 981
                  },
                  "start": 954,
                  "end": 981
                },
                "init": null,
                "definite": false,
                "start": 954,
                "end": 981
              }
            ],
            "declare": true,
            "start": 942,
            "end": 982
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
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 1001
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1004,
                      "end": 1014
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1015,
                      "end": 1019
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1004,
                    "end": 1019
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1020,
                      "end": 1032
                    }
                  ],
                  "optional": false,
                  "start": 1004,
                  "end": 1033
                },
                "definite": false,
                "start": 991,
                "end": 1033
              }
            ],
            "declare": false,
            "start": 987,
            "end": 1034
          }
        ],
        "start": 692,
        "end": 1036
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 679,
      "end": 1036
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1088,
        "end": 1090
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1114
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
                    "start": 1115,
                    "end": 1116
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1115,
                  "end": 1116
                }
              ],
              "start": 1114,
              "end": 1117
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1132
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
                          "start": 1133,
                          "end": 1134
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1133,
                        "end": 1134
                      }
                    ],
                    "start": 1132,
                    "end": 1135
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1144,
                                    "end": 1145
                                  },
                                  "typeArguments": null,
                                  "start": 1144,
                                  "end": 1145
                                },
                                "start": 1142,
                                "end": 1145
                              },
                              "start": 1141,
                              "end": 1145
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1150,
                                "end": 1157
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1158,
                                      "end": 1159
                                    },
                                    "typeArguments": null,
                                    "start": 1158,
                                    "end": 1159
                                  }
                                ],
                                "start": 1157,
                                "end": 1160
                              },
                              "start": 1150,
                              "end": 1160
                            },
                            "start": 1147,
                            "end": 1160
                          },
                          "start": 1140,
                          "end": 1160
                        },
                        "start": 1138,
                        "end": 1160
                      },
                      "start": 1136,
                      "end": 1160
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1163,
                        "end": 1170
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1171,
                              "end": 1172
                            },
                            "typeArguments": null,
                            "start": 1171,
                            "end": 1172
                          }
                        ],
                        "start": 1170,
                        "end": 1173
                      },
                      "start": 1163,
                      "end": 1173
                    },
                    "start": 1161,
                    "end": 1173
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1128,
                  "end": 1174
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1183,
                    "end": 1187
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
                          "start": 1188,
                          "end": 1189
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1188,
                        "end": 1189
                      }
                    ],
                    "start": 1187,
                    "end": 1190
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1199,
                                    "end": 1200
                                  },
                                  "typeArguments": null,
                                  "start": 1199,
                                  "end": 1200
                                },
                                "start": 1197,
                                "end": 1200
                              },
                              "start": 1196,
                              "end": 1200
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1205,
                                "end": 1212
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1213,
                                      "end": 1214
                                    },
                                    "typeArguments": null,
                                    "start": 1213,
                                    "end": 1214
                                  }
                                ],
                                "start": 1212,
                                "end": 1215
                              },
                              "start": 1205,
                              "end": 1215
                            },
                            "start": 1202,
                            "end": 1215
                          },
                          "start": 1195,
                          "end": 1215
                        },
                        "start": 1193,
                        "end": 1215
                      },
                      "start": 1191,
                      "end": 1215
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1233,
                                  "end": 1236
                                },
                                "start": 1231,
                                "end": 1236
                              },
                              "start": 1226,
                              "end": 1236
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1241,
                                "end": 1248
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1249,
                                      "end": 1250
                                    },
                                    "typeArguments": null,
                                    "start": 1249,
                                    "end": 1250
                                  }
                                ],
                                "start": 1248,
                                "end": 1251
                              },
                              "start": 1241,
                              "end": 1251
                            },
                            "start": 1238,
                            "end": 1251
                          },
                          "start": 1225,
                          "end": 1251
                        },
                        "start": 1223,
                        "end": 1251
                      },
                      "start": 1217,
                      "end": 1251
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1254,
                        "end": 1261
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1262,
                              "end": 1263
                            },
                            "typeArguments": null,
                            "start": 1262,
                            "end": 1263
                          }
                        ],
                        "start": 1261,
                        "end": 1264
                      },
                      "start": 1254,
                      "end": 1264
                    },
                    "start": 1252,
                    "end": 1264
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1183,
                  "end": 1265
                }
              ],
              "start": 1118,
              "end": 1271
            },
            "declare": false,
            "start": 1097,
            "end": 1271
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1306
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 1310,
                    "end": 1316
                  },
                  "start": 1308,
                  "end": 1316
                },
                "start": 1307,
                "end": 1316
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1319,
                  "end": 1326
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1327,
                      "end": 1333
                    }
                  ],
                  "start": 1326,
                  "end": 1334
                },
                "start": 1319,
                "end": 1334
              },
              "start": 1317,
              "end": 1334
            },
            "body": null,
            "expression": false,
            "start": 1277,
            "end": 1335
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1369
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 1373,
                    "end": 1379
                  },
                  "start": 1371,
                  "end": 1379
                },
                "start": 1370,
                "end": 1379
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1382,
                  "end": 1389
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1390,
                      "end": 1396
                    }
                  ],
                  "start": 1389,
                  "end": 1397
                },
                "start": 1382,
                "end": 1397
              },
              "start": 1380,
              "end": 1397
            },
            "body": null,
            "expression": false,
            "start": 1340,
            "end": 1398
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
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1428,
                        "end": 1435
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1436,
                            "end": 1442
                          }
                        ],
                        "start": 1435,
                        "end": 1443
                      },
                      "start": 1428,
                      "end": 1443
                    },
                    "start": 1426,
                    "end": 1443
                  },
                  "start": 1416,
                  "end": 1443
                },
                "init": null,
                "definite": false,
                "start": 1416,
                "end": 1443
              }
            ],
            "declare": true,
            "start": 1404,
            "end": 1444
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
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1463
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1466,
                      "end": 1476
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1477,
                      "end": 1481
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1466,
                    "end": 1481
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1482,
                      "end": 1494
                    }
                  ],
                  "optional": false,
                  "start": 1466,
                  "end": 1495
                },
                "definite": false,
                "start": 1453,
                "end": 1495
              }
            ],
            "declare": false,
            "start": 1449,
            "end": 1496
          }
        ],
        "start": 1091,
        "end": 1498
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1078,
      "end": 1498
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1550,
        "end": 1552
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 1569,
              "end": 1576
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
                    "start": 1577,
                    "end": 1578
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1577,
                  "end": 1578
                }
              ],
              "start": 1576,
              "end": 1579
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1590,
                    "end": 1594
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
                          "start": 1595,
                          "end": 1596
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1595,
                        "end": 1596
                      }
                    ],
                    "start": 1594,
                    "end": 1597
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1606,
                                    "end": 1607
                                  },
                                  "typeArguments": null,
                                  "start": 1606,
                                  "end": 1607
                                },
                                "start": 1604,
                                "end": 1607
                              },
                              "start": 1603,
                              "end": 1607
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1612,
                                "end": 1619
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1620,
                                      "end": 1621
                                    },
                                    "typeArguments": null,
                                    "start": 1620,
                                    "end": 1621
                                  }
                                ],
                                "start": 1619,
                                "end": 1622
                              },
                              "start": 1612,
                              "end": 1622
                            },
                            "start": 1609,
                            "end": 1622
                          },
                          "start": 1602,
                          "end": 1622
                        },
                        "start": 1600,
                        "end": 1622
                      },
                      "start": 1598,
                      "end": 1622
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1625,
                        "end": 1632
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1633,
                              "end": 1634
                            },
                            "typeArguments": null,
                            "start": 1633,
                            "end": 1634
                          }
                        ],
                        "start": 1632,
                        "end": 1635
                      },
                      "start": 1625,
                      "end": 1635
                    },
                    "start": 1623,
                    "end": 1635
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1590,
                  "end": 1636
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1645,
                    "end": 1649
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
                          "start": 1650,
                          "end": 1651
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1650,
                        "end": 1651
                      }
                    ],
                    "start": 1649,
                    "end": 1652
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1661,
                                    "end": 1662
                                  },
                                  "typeArguments": null,
                                  "start": 1661,
                                  "end": 1662
                                },
                                "start": 1659,
                                "end": 1662
                              },
                              "start": 1658,
                              "end": 1662
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1667,
                                "end": 1674
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1675,
                                      "end": 1676
                                    },
                                    "typeArguments": null,
                                    "start": 1675,
                                    "end": 1676
                                  }
                                ],
                                "start": 1674,
                                "end": 1677
                              },
                              "start": 1667,
                              "end": 1677
                            },
                            "start": 1664,
                            "end": 1677
                          },
                          "start": 1657,
                          "end": 1677
                        },
                        "start": 1655,
                        "end": 1677
                      },
                      "start": 1653,
                      "end": 1677
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1695,
                                  "end": 1698
                                },
                                "start": 1693,
                                "end": 1698
                              },
                              "start": 1688,
                              "end": 1698
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1703,
                                "end": 1710
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1711,
                                      "end": 1712
                                    },
                                    "typeArguments": null,
                                    "start": 1711,
                                    "end": 1712
                                  }
                                ],
                                "start": 1710,
                                "end": 1713
                              },
                              "start": 1703,
                              "end": 1713
                            },
                            "start": 1700,
                            "end": 1713
                          },
                          "start": 1687,
                          "end": 1713
                        },
                        "start": 1685,
                        "end": 1713
                      },
                      "start": 1679,
                      "end": 1713
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1716,
                        "end": 1723
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1724,
                              "end": 1725
                            },
                            "typeArguments": null,
                            "start": 1724,
                            "end": 1725
                          }
                        ],
                        "start": 1723,
                        "end": 1726
                      },
                      "start": 1716,
                      "end": 1726
                    },
                    "start": 1714,
                    "end": 1726
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1645,
                  "end": 1727
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1736,
                    "end": 1740
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
                          "start": 1741,
                          "end": 1742
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1741,
                        "end": 1742
                      }
                    ],
                    "start": 1740,
                    "end": 1743
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1752,
                                    "end": 1753
                                  },
                                  "typeArguments": null,
                                  "start": 1752,
                                  "end": 1753
                                },
                                "start": 1750,
                                "end": 1753
                              },
                              "start": 1749,
                              "end": 1753
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1758,
                                "end": 1765
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1766,
                                      "end": 1767
                                    },
                                    "typeArguments": null,
                                    "start": 1766,
                                    "end": 1767
                                  }
                                ],
                                "start": 1765,
                                "end": 1768
                              },
                              "start": 1758,
                              "end": 1768
                            },
                            "start": 1755,
                            "end": 1768
                          },
                          "start": 1748,
                          "end": 1768
                        },
                        "start": 1746,
                        "end": 1768
                      },
                      "start": 1744,
                      "end": 1768
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1786,
                                  "end": 1789
                                },
                                "start": 1784,
                                "end": 1789
                              },
                              "start": 1779,
                              "end": 1789
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
                                "start": 1794,
                                "end": 1795
                              },
                              "typeArguments": null,
                              "start": 1794,
                              "end": 1795
                            },
                            "start": 1791,
                            "end": 1795
                          },
                          "start": 1778,
                          "end": 1795
                        },
                        "start": 1776,
                        "end": 1795
                      },
                      "start": 1770,
                      "end": 1795
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "progress",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "preservation",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1823,
                                  "end": 1826
                                },
                                "start": 1821,
                                "end": 1826
                              },
                              "start": 1809,
                              "end": 1826
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1831,
                              "end": 1835
                            },
                            "start": 1828,
                            "end": 1835
                          },
                          "start": 1808,
                          "end": 1835
                        },
                        "start": 1806,
                        "end": 1835
                      },
                      "start": 1797,
                      "end": 1835
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1838,
                        "end": 1845
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1846,
                              "end": 1847
                            },
                            "typeArguments": null,
                            "start": 1846,
                            "end": 1847
                          }
                        ],
                        "start": 1845,
                        "end": 1848
                      },
                      "start": 1838,
                      "end": 1848
                    },
                    "start": 1836,
                    "end": 1848
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1736,
                  "end": 1849
                }
              ],
              "start": 1580,
              "end": 1855
            },
            "declare": false,
            "start": 1559,
            "end": 1855
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1878,
              "end": 1890
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 1894,
                    "end": 1900
                  },
                  "start": 1892,
                  "end": 1900
                },
                "start": 1891,
                "end": 1900
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1903,
                  "end": 1910
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1911,
                      "end": 1917
                    }
                  ],
                  "start": 1910,
                  "end": 1918
                },
                "start": 1903,
                "end": 1918
              },
              "start": 1901,
              "end": 1918
            },
            "body": null,
            "expression": false,
            "start": 1861,
            "end": 1919
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1941,
              "end": 1953
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 1957,
                    "end": 1963
                  },
                  "start": 1955,
                  "end": 1963
                },
                "start": 1954,
                "end": 1963
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1966,
                  "end": 1973
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1974,
                      "end": 1980
                    }
                  ],
                  "start": 1973,
                  "end": 1981
                },
                "start": 1966,
                "end": 1981
              },
              "start": 1964,
              "end": 1981
            },
            "body": null,
            "expression": false,
            "start": 1924,
            "end": 1982
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
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2012,
                        "end": 2019
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2020,
                            "end": 2026
                          }
                        ],
                        "start": 2019,
                        "end": 2027
                      },
                      "start": 2012,
                      "end": 2027
                    },
                    "start": 2010,
                    "end": 2027
                  },
                  "start": 2000,
                  "end": 2027
                },
                "init": null,
                "definite": false,
                "start": 2000,
                "end": 2027
              }
            ],
            "declare": true,
            "start": 1988,
            "end": 2028
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
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2037,
                  "end": 2047
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2050,
                      "end": 2060
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2061,
                      "end": 2065
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2050,
                    "end": 2065
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2066,
                      "end": 2078
                    }
                  ],
                  "optional": false,
                  "start": 2050,
                  "end": 2079
                },
                "definite": false,
                "start": 2037,
                "end": 2079
              }
            ],
            "declare": false,
            "start": 2033,
            "end": 2080
          }
        ],
        "start": 1553,
        "end": 2082
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1540,
      "end": 2082
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2134,
        "end": 2136
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 2153,
              "end": 2160
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
                    "start": 2161,
                    "end": 2162
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2161,
                  "end": 2162
                }
              ],
              "start": 2160,
              "end": 2163
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2174,
                    "end": 2178
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
                          "start": 2179,
                          "end": 2180
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2179,
                        "end": 2180
                      }
                    ],
                    "start": 2178,
                    "end": 2181
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2190,
                                    "end": 2191
                                  },
                                  "typeArguments": null,
                                  "start": 2190,
                                  "end": 2191
                                },
                                "start": 2188,
                                "end": 2191
                              },
                              "start": 2187,
                              "end": 2191
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2196,
                                "end": 2203
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2204,
                                      "end": 2205
                                    },
                                    "typeArguments": null,
                                    "start": 2204,
                                    "end": 2205
                                  }
                                ],
                                "start": 2203,
                                "end": 2206
                              },
                              "start": 2196,
                              "end": 2206
                            },
                            "start": 2193,
                            "end": 2206
                          },
                          "start": 2186,
                          "end": 2206
                        },
                        "start": 2184,
                        "end": 2206
                      },
                      "start": 2182,
                      "end": 2206
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2209,
                        "end": 2216
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2217,
                              "end": 2218
                            },
                            "typeArguments": null,
                            "start": 2217,
                            "end": 2218
                          }
                        ],
                        "start": 2216,
                        "end": 2219
                      },
                      "start": 2209,
                      "end": 2219
                    },
                    "start": 2207,
                    "end": 2219
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2174,
                  "end": 2220
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2229,
                    "end": 2233
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
                          "start": 2234,
                          "end": 2235
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2234,
                        "end": 2235
                      }
                    ],
                    "start": 2233,
                    "end": 2236
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2245,
                                    "end": 2246
                                  },
                                  "typeArguments": null,
                                  "start": 2245,
                                  "end": 2246
                                },
                                "start": 2243,
                                "end": 2246
                              },
                              "start": 2242,
                              "end": 2246
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2251,
                                "end": 2258
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2259,
                                      "end": 2260
                                    },
                                    "typeArguments": null,
                                    "start": 2259,
                                    "end": 2260
                                  }
                                ],
                                "start": 2258,
                                "end": 2261
                              },
                              "start": 2251,
                              "end": 2261
                            },
                            "start": 2248,
                            "end": 2261
                          },
                          "start": 2241,
                          "end": 2261
                        },
                        "start": 2239,
                        "end": 2261
                      },
                      "start": 2237,
                      "end": 2261
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2279,
                                  "end": 2282
                                },
                                "start": 2277,
                                "end": 2282
                              },
                              "start": 2272,
                              "end": 2282
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2287,
                                "end": 2294
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2295,
                                      "end": 2296
                                    },
                                    "typeArguments": null,
                                    "start": 2295,
                                    "end": 2296
                                  }
                                ],
                                "start": 2294,
                                "end": 2297
                              },
                              "start": 2287,
                              "end": 2297
                            },
                            "start": 2284,
                            "end": 2297
                          },
                          "start": 2271,
                          "end": 2297
                        },
                        "start": 2269,
                        "end": 2297
                      },
                      "start": 2263,
                      "end": 2297
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2300,
                        "end": 2307
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2308,
                              "end": 2309
                            },
                            "typeArguments": null,
                            "start": 2308,
                            "end": 2309
                          }
                        ],
                        "start": 2307,
                        "end": 2310
                      },
                      "start": 2300,
                      "end": 2310
                    },
                    "start": 2298,
                    "end": 2310
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2229,
                  "end": 2311
                }
              ],
              "start": 2164,
              "end": 2317
            },
            "declare": false,
            "start": 2143,
            "end": 2317
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2340,
              "end": 2352
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 2356,
                    "end": 2362
                  },
                  "start": 2354,
                  "end": 2362
                },
                "start": 2353,
                "end": 2362
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2365,
                  "end": 2372
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2373,
                      "end": 2379
                    }
                  ],
                  "start": 2372,
                  "end": 2380
                },
                "start": 2365,
                "end": 2380
              },
              "start": 2363,
              "end": 2380
            },
            "body": null,
            "expression": false,
            "start": 2323,
            "end": 2381
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2403,
              "end": 2415
            },
            "generator": false,
            "async": false,
            "declare": true,
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
                    "start": 2419,
                    "end": 2425
                  },
                  "start": 2417,
                  "end": 2425
                },
                "start": 2416,
                "end": 2425
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2428,
                  "end": 2435
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2436,
                      "end": 2442
                    }
                  ],
                  "start": 2435,
                  "end": 2443
                },
                "start": 2428,
                "end": 2443
              },
              "start": 2426,
              "end": 2443
            },
            "body": null,
            "expression": false,
            "start": 2386,
            "end": 2444
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 2466,
              "end": 2478
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2482,
                    "end": 2489
                  },
                  "start": 2480,
                  "end": 2489
                },
                "start": 2479,
                "end": 2489
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2492,
                  "end": 2499
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2500,
                      "end": 2507
                    }
                  ],
                  "start": 2499,
                  "end": 2508
                },
                "start": 2492,
                "end": 2508
              },
              "start": 2490,
              "end": 2508
            },
            "body": null,
            "expression": false,
            "start": 2449,
            "end": 2509
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
                  "name": "numPromise",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2539,
                        "end": 2546
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2547,
                            "end": 2553
                          }
                        ],
                        "start": 2546,
                        "end": 2554
                      },
                      "start": 2539,
                      "end": 2554
                    },
                    "start": 2537,
                    "end": 2554
                  },
                  "start": 2527,
                  "end": 2554
                },
                "init": null,
                "definite": false,
                "start": 2527,
                "end": 2554
              }
            ],
            "declare": true,
            "start": 2515,
            "end": 2555
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
                  "name": "newPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2564,
                  "end": 2574
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2577,
                      "end": 2587
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2588,
                      "end": 2592
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2577,
                    "end": 2592
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2593,
                      "end": 2605
                    }
                  ],
                  "optional": false,
                  "start": 2577,
                  "end": 2606
                },
                "definite": false,
                "start": 2564,
                "end": 2606
              }
            ],
            "declare": false,
            "start": 2560,
            "end": 2607
          }
        ],
        "start": 2137,
        "end": 2609
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2124,
      "end": 2609
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2609
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 19,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 108,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 125,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 172,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 184,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 196,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 221,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 234,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 245,
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
    "value": "testFunction",
    "start": 250,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
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
    "type": "Identifier",
    "value": "namespace",
    "start": 308,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 327,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 377,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
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
    "value": "Promise",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
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
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 416,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 424,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 433,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Promise",
    "start": 458,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 479,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 487,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 496,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 509,
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
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 543,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 551,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 555,
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
    "value": "Promise",
    "start": 567,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 592,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 605,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 621,
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
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 679,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 698,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 708,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 748,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 751,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 764,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 773,
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
    "value": "then",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 803,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 806,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 827,
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
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 839,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 842,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 855,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 878,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 886,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 895,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": ")",
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
    "value": "Promise",
    "start": 920,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 928,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 942,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 954,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "Promise",
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
    "type": "Identifier",
    "value": "number",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 987,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 991,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 1004,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1015,
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
    "value": "testFunction",
    "start": 1020,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1078,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1097,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1107,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1128,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1150,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1163,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1191,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1202,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1205,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1217,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1226,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1241,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1254,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1277,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1294,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1319,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1327,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1340,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1348,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1357,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1382,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1390,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1404,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 1416,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1428,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1449,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 1453,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 1466,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1477,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1482,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1540,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1550,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1559,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1569,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1590,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1598,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1609,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1612,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1625,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1645,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1653,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1664,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1667,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1679,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1688,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1700,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1703,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1716,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1736,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1744,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1755,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1758,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1770,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1779,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1797,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "preservation",
    "start": 1809,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1828,
    "end": 1830
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1831,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1838,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1861,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1869,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1878,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1891,
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
    "value": "number",
    "start": 1894,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1903,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1911,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1924,
    "end": 1931
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1932,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1941,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1957,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1966,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1974,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1988,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1996,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 2000,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2012,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2020,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2033,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 2037,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 2050,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2061,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2066,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2124,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 2134,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2143,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2153,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2174,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2182,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2187,
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
    "value": "T",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2193,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2196,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2209,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2229,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2237,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2248,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2251,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2263,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2272,
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
    "value": "any",
    "start": 2279,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2284,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2287,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2300,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2323,
    "end": 2330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2331,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2340,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2356,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2365,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2373,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2386,
    "end": 2393
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2394,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2403,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2428,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2436,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2449,
    "end": 2456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2457,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2466,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2482,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2492,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2500,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2515,
    "end": 2522
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2523,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 2527,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2539,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2547,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2560,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "newPromise",
    "start": 2564,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "numPromise",
    "start": 2577,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2588,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2593,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2608,
    "end": 2609
  }
]
```

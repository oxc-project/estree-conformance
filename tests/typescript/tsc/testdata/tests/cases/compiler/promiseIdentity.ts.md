__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 25
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
                "start": 26,
                "end": 27
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 26,
              "end": 27
            }
          ],
          "start": 25,
          "end": 28
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
                "start": 35,
                "end": 39
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
                      "start": 40,
                      "end": 41
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 40,
                    "end": 41
                  }
                ],
                "start": 39,
                "end": 42
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                                "start": 57,
                                "end": 58
                              },
                              "typeArguments": null,
                              "start": 57,
                              "end": 58
                            },
                            "start": 55,
                            "end": 58
                          },
                          "start": 54,
                          "end": 58
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 71
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
                                  "start": 72,
                                  "end": 73
                                },
                                "typeArguments": null,
                                "start": 72,
                                "end": 73
                              }
                            ],
                            "start": 71,
                            "end": 74
                          },
                          "start": 63,
                          "end": 74
                        },
                        "start": 60,
                        "end": 74
                      },
                      "start": 53,
                      "end": 74
                    },
                    "start": 51,
                    "end": 74
                  },
                  "start": 43,
                  "end": 74
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 85
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
                          "start": 86,
                          "end": 87
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 87
                      }
                    ],
                    "start": 85,
                    "end": 88
                  },
                  "start": 77,
                  "end": 88
                },
                "start": 75,
                "end": 88
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 35,
              "end": 89
            }
          ],
          "start": 29,
          "end": 91
        },
        "declare": false,
        "start": 7,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 91
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 109
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
              "start": 110,
              "end": 111
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 110,
            "end": 111
          }
        ],
        "start": 109,
        "end": 112
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
              "start": 119,
              "end": 123
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
                    "start": 124,
                    "end": 125
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 124,
                  "end": 125
                }
              ],
              "start": 123,
              "end": 126
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                              "start": 141,
                              "end": 142
                            },
                            "typeArguments": null,
                            "start": 141,
                            "end": 142
                          },
                          "start": 139,
                          "end": 142
                        },
                        "start": 138,
                        "end": 142
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
                          "start": 147,
                          "end": 154
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
                                "start": 155,
                                "end": 156
                              },
                              "typeArguments": null,
                              "start": 155,
                              "end": 156
                            }
                          ],
                          "start": 154,
                          "end": 157
                        },
                        "start": 147,
                        "end": 157
                      },
                      "start": 144,
                      "end": 157
                    },
                    "start": 137,
                    "end": 157
                  },
                  "start": 135,
                  "end": 157
                },
                "start": 127,
                "end": 157
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
                  "start": 160,
                  "end": 167
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
                        "start": 168,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 169
                    }
                  ],
                  "start": 167,
                  "end": 170
                },
                "start": 160,
                "end": 170
              },
              "start": 158,
              "end": 170
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 119,
            "end": 171
          }
        ],
        "start": 113,
        "end": 173
      },
      "declare": false,
      "start": 92,
      "end": 173
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 189
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 190,
                      "end": 196
                    }
                  ],
                  "start": 189,
                  "end": 197
                },
                "start": 181,
                "end": 197
              },
              "start": 179,
              "end": 197
            },
            "start": 178,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 178,
          "end": 197
        }
      ],
      "declare": false,
      "start": 174,
      "end": 198
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
                  "start": 206,
                  "end": 213
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 214,
                      "end": 220
                    }
                  ],
                  "start": 213,
                  "end": 221
                },
                "start": 206,
                "end": 221
              },
              "start": 204,
              "end": 221
            },
            "start": 203,
            "end": 221
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 221
        }
      ],
      "declare": false,
      "start": 199,
      "end": 222
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 244
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
              "start": 245,
              "end": 246
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 245,
            "end": 246
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 248,
            "end": 249
          }
        ],
        "start": 244,
        "end": 250
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
              "start": 257,
              "end": 261
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
                    "start": 262,
                    "end": 263
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 262,
                  "end": 263
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 266
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 265,
                  "end": 266
                }
              ],
              "start": 261,
              "end": 267
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                              "start": 282,
                              "end": 283
                            },
                            "typeArguments": null,
                            "start": 282,
                            "end": 283
                          },
                          "start": 280,
                          "end": 283
                        },
                        "start": 279,
                        "end": 283
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 297
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
                                "start": 298,
                                "end": 299
                              },
                              "typeArguments": null,
                              "start": 298,
                              "end": 299
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "W",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 301,
                                "end": 302
                              },
                              "typeArguments": null,
                              "start": 301,
                              "end": 302
                            }
                          ],
                          "start": 297,
                          "end": 303
                        },
                        "start": 288,
                        "end": 303
                      },
                      "start": 285,
                      "end": 303
                    },
                    "start": 278,
                    "end": 303
                  },
                  "start": 276,
                  "end": 303
                },
                "start": 268,
                "end": 303
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 315
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "W",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 316,
                      "end": 317
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 319,
                        "end": 320
                      },
                      "typeArguments": null,
                      "start": 319,
                      "end": 320
                    }
                  ],
                  "start": 315,
                  "end": 321
                },
                "start": 306,
                "end": 321
              },
              "start": 304,
              "end": 321
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 257,
            "end": 322
          }
        ],
        "start": 251,
        "end": 324
      },
      "declare": false,
      "start": 225,
      "end": 324
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 343
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
              "start": 344,
              "end": 345
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 344,
            "end": 345
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 348
          }
        ],
        "start": 343,
        "end": 349
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
              "start": 356,
              "end": 360
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
                    "start": 361,
                    "end": 362
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 361,
                  "end": 362
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 365
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 364,
                  "end": 365
                }
              ],
              "start": 360,
              "end": 366
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 381,
                              "end": 382
                            },
                            "typeArguments": null,
                            "start": 381,
                            "end": 382
                          },
                          "start": 379,
                          "end": 382
                        },
                        "start": 378,
                        "end": 382
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 387,
                          "end": 395
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
                                "start": 396,
                                "end": 397
                              },
                              "typeArguments": null,
                              "start": 396,
                              "end": 397
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 399,
                                "end": 400
                              },
                              "typeArguments": null,
                              "start": 399,
                              "end": 400
                            }
                          ],
                          "start": 395,
                          "end": 401
                        },
                        "start": 387,
                        "end": 401
                      },
                      "start": 384,
                      "end": 401
                    },
                    "start": 377,
                    "end": 401
                  },
                  "start": 375,
                  "end": 401
                },
                "start": 367,
                "end": 401
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 412
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 413,
                        "end": 414
                      },
                      "typeArguments": null,
                      "start": 413,
                      "end": 414
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "W",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 417
                      },
                      "typeArguments": null,
                      "start": 416,
                      "end": 417
                    }
                  ],
                  "start": 412,
                  "end": 418
                },
                "start": 404,
                "end": 418
              },
              "start": 402,
              "end": 418
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 356,
            "end": 419
          }
        ],
        "start": 350,
        "end": 468
      },
      "declare": false,
      "start": 325,
      "end": 468
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 668
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 669,
                      "end": 675
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 677,
                      "end": 683
                    }
                  ],
                  "start": 668,
                  "end": 684
                },
                "start": 659,
                "end": 684
              },
              "start": 657,
              "end": 684
            },
            "start": 656,
            "end": 684
          },
          "init": null,
          "definite": false,
          "start": 656,
          "end": 684
        }
      ],
      "declare": false,
      "start": 652,
      "end": 685
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 701
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 702,
                      "end": 705
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 707,
                      "end": 713
                    }
                  ],
                  "start": 701,
                  "end": 714
                },
                "start": 693,
                "end": 714
              },
              "start": 691,
              "end": 714
            },
            "start": 690,
            "end": 714
          },
          "init": null,
          "definite": false,
          "start": 690,
          "end": 714
        }
      ],
      "declare": false,
      "start": 686,
      "end": 715
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 715
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 63,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 92,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 144,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 174,
    "end": 177
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
    "value": "IPromise",
    "start": 181,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "interface",
    "start": 225,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "IPromise2",
    "start": 235,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 285,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "IPromise2",
    "start": 288,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "IPromise2",
    "start": 306,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 325,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Promise2",
    "start": 335,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "Promise2",
    "start": 387,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
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
    "value": "Promise2",
    "start": 404,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 652,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "IPromise2",
    "start": 659,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 669,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 686,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "Promise2",
    "start": 693,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 702,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  }
]
```

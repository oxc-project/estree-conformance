__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
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
              "start": 41,
              "end": 42
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 42
          }
        ],
        "start": 40,
        "end": 43
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 50
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "typeArguments": null,
            "start": 60,
            "end": 61
          },
          "start": 54,
          "end": 61
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Id",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 68
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                "start": 67,
                "end": 71
              }
            ],
            "start": 66,
            "end": 72
          },
          "start": 64,
          "end": 72
        },
        "optional": false,
        "readonly": null,
        "start": 46,
        "end": 74
      },
      "declare": false,
      "start": 33,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 86
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 91
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 100
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 104,
                                    "end": 105
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 109,
                                            "end": 110
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 114,
                                                    "end": 115
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 119,
                                                            "end": 120
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "start": 122,
                                                              "end": 128
                                                            },
                                                            "start": 120,
                                                            "end": 128
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 119,
                                                          "end": 128
                                                        }
                                                      ],
                                                      "start": 117,
                                                      "end": 130
                                                    },
                                                    "start": 115,
                                                    "end": 130
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 114,
                                                  "end": 130
                                                }
                                              ],
                                              "start": 112,
                                              "end": 132
                                            },
                                            "start": 110,
                                            "end": 132
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 109,
                                          "end": 132
                                        }
                                      ],
                                      "start": 107,
                                      "end": 134
                                    },
                                    "start": 105,
                                    "end": 134
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 104,
                                  "end": 134
                                }
                              ],
                              "start": 102,
                              "end": 136
                            },
                            "start": 100,
                            "end": 136
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 99,
                          "end": 136
                        }
                      ],
                      "start": 97,
                      "end": 138
                    },
                    "start": 95,
                    "end": 138
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 94,
                  "end": 138
                }
              ],
              "start": 92,
              "end": 140
            }
          ],
          "start": 91,
          "end": 141
        },
        "start": 89,
        "end": 141
      },
      "declare": false,
      "start": 77,
      "end": 142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 157
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 170,
                                    "end": 171
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 175,
                                            "end": 176
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 180,
                                                    "end": 181
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 185,
                                                            "end": 186
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "start": 188,
                                                              "end": 194
                                                            },
                                                            "start": 186,
                                                            "end": 194
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 185,
                                                          "end": 194
                                                        }
                                                      ],
                                                      "start": 183,
                                                      "end": 196
                                                    },
                                                    "start": 181,
                                                    "end": 196
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 180,
                                                  "end": 196
                                                }
                                              ],
                                              "start": 178,
                                              "end": 198
                                            },
                                            "start": 176,
                                            "end": 198
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 175,
                                          "end": 198
                                        }
                                      ],
                                      "start": 173,
                                      "end": 200
                                    },
                                    "start": 171,
                                    "end": 200
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 170,
                                  "end": 200
                                }
                              ],
                              "start": 168,
                              "end": 202
                            },
                            "start": 166,
                            "end": 202
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 165,
                          "end": 202
                        }
                      ],
                      "start": 163,
                      "end": 204
                    },
                    "start": 161,
                    "end": 204
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 160,
                  "end": 204
                }
              ],
              "start": 158,
              "end": 206
            }
          ],
          "start": 157,
          "end": 207
        },
        "start": 155,
        "end": 207
      },
      "declare": false,
      "start": 143,
      "end": 208
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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 234
                },
                "typeArguments": null,
                "start": 230,
                "end": 234
              },
              "start": 228,
              "end": 234
            },
            "start": 224,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 224,
          "end": 234
        }
      ],
      "declare": true,
      "start": 210,
      "end": 235
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 252
                },
                "typeArguments": null,
                "start": 248,
                "end": 252
              },
              "start": 246,
              "end": 252
            },
            "start": 242,
            "end": 252
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 259
          },
          "definite": false,
          "start": 242,
          "end": 259
        }
      ],
      "declare": false,
      "start": 236,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id2",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 289
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
              "start": 290,
              "end": 291
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 290,
            "end": 291
          }
        ],
        "start": 289,
        "end": 292
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 299
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "typeArguments": null,
            "start": 309,
            "end": 310
          },
          "start": 303,
          "end": 310
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Id2",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 316
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 320
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 322
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 322
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 324
                        },
                        "typeArguments": null,
                        "start": 323,
                        "end": 324
                      },
                      "start": 321,
                      "end": 325
                    }
                  ],
                  "start": 320,
                  "end": 326
                },
                "start": 317,
                "end": 326
              }
            ],
            "start": 316,
            "end": 327
          },
          "start": 313,
          "end": 327
        },
        "optional": false,
        "readonly": null,
        "start": 295,
        "end": 329
      },
      "declare": false,
      "start": 281,
      "end": 330
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 341
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 347
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 351
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 355,
                            "end": 356
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 360,
                                    "end": 361
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 365,
                                            "end": 366
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 370,
                                                    "end": 371
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 375,
                                                            "end": 376
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "start": 378,
                                                              "end": 384
                                                            },
                                                            "start": 376,
                                                            "end": 384
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 375,
                                                          "end": 384
                                                        }
                                                      ],
                                                      "start": 373,
                                                      "end": 386
                                                    },
                                                    "start": 371,
                                                    "end": 386
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 370,
                                                  "end": 386
                                                }
                                              ],
                                              "start": 368,
                                              "end": 388
                                            },
                                            "start": 366,
                                            "end": 388
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 365,
                                          "end": 388
                                        }
                                      ],
                                      "start": 363,
                                      "end": 390
                                    },
                                    "start": 361,
                                    "end": 390
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 360,
                                  "end": 390
                                }
                              ],
                              "start": 358,
                              "end": 392
                            },
                            "start": 356,
                            "end": 392
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 355,
                          "end": 392
                        }
                      ],
                      "start": 353,
                      "end": 394
                    },
                    "start": 351,
                    "end": 394
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 350,
                  "end": 394
                }
              ],
              "start": 348,
              "end": 396
            }
          ],
          "start": 347,
          "end": 397
        },
        "start": 344,
        "end": 397
      },
      "declare": false,
      "start": 332,
      "end": 398
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 414
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 422,
                            "end": 423
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 427,
                                    "end": 428
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 432,
                                            "end": 433
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 437,
                                                    "end": 438
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 442,
                                                            "end": 443
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "start": 445,
                                                              "end": 451
                                                            },
                                                            "start": 443,
                                                            "end": 451
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 442,
                                                          "end": 451
                                                        }
                                                      ],
                                                      "start": 440,
                                                      "end": 453
                                                    },
                                                    "start": 438,
                                                    "end": 453
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 437,
                                                  "end": 453
                                                }
                                              ],
                                              "start": 435,
                                              "end": 455
                                            },
                                            "start": 433,
                                            "end": 455
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 432,
                                          "end": 455
                                        }
                                      ],
                                      "start": 430,
                                      "end": 457
                                    },
                                    "start": 428,
                                    "end": 457
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 427,
                                  "end": 457
                                }
                              ],
                              "start": 425,
                              "end": 459
                            },
                            "start": 423,
                            "end": 459
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 422,
                          "end": 459
                        }
                      ],
                      "start": 420,
                      "end": 461
                    },
                    "start": 418,
                    "end": 461
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 417,
                  "end": 461
                }
              ],
              "start": 415,
              "end": 463
            }
          ],
          "start": 414,
          "end": 464
        },
        "start": 411,
        "end": 464
      },
      "declare": false,
      "start": 399,
      "end": 465
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 491
                },
                "typeArguments": null,
                "start": 487,
                "end": 491
              },
              "start": 485,
              "end": 491
            },
            "start": 481,
            "end": 491
          },
          "init": null,
          "definite": false,
          "start": 481,
          "end": 491
        }
      ],
      "declare": true,
      "start": 467,
      "end": 492
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
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 509
                },
                "typeArguments": null,
                "start": 505,
                "end": 509
              },
              "start": 503,
              "end": 509
            },
            "start": 499,
            "end": 509
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 516
          },
          "definite": false,
          "start": 499,
          "end": 516
        }
      ],
      "declare": false,
      "start": 493,
      "end": 517
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiredDeep",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 593
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
              "start": 594,
              "end": 595
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 594,
            "end": 595
          }
        ],
        "start": 593,
        "end": 596
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 603
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 614
            },
            "typeArguments": null,
            "start": 613,
            "end": 614
          },
          "start": 607,
          "end": 614
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequiredDeep",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 631
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 633
                  },
                  "typeArguments": null,
                  "start": 632,
                  "end": 633
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 634,
                    "end": 635
                  },
                  "typeArguments": null,
                  "start": 634,
                  "end": 635
                },
                "start": 632,
                "end": 636
              }
            ],
            "start": 631,
            "end": 637
          },
          "start": 619,
          "end": 637
        },
        "optional": "-",
        "readonly": null,
        "start": 599,
        "end": 639
      },
      "declare": false,
      "start": 576,
      "end": 640
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 648
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 660
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 664,
                              "end": 665
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 667,
                                      "end": 668
                                    },
                                    "start": 667,
                                    "end": 668
                                  },
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
                                          "name": "d",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 673,
                                          "end": 674
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": 2000,
                                              "raw": "2000",
                                              "start": 676,
                                              "end": 680
                                            },
                                            "start": 676,
                                            "end": 680
                                          },
                                          "start": 674,
                                          "end": 680
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 673,
                                        "end": 680
                                      }
                                    ],
                                    "start": 671,
                                    "end": 682
                                  }
                                ],
                                "start": 667,
                                "end": 682
                              },
                              "start": 665,
                              "end": 682
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 664,
                            "end": 682
                          }
                        ],
                        "start": 662,
                        "end": 684
                      },
                      "start": 660,
                      "end": 684
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 659,
                    "end": 684
                  }
                ],
                "start": 657,
                "end": 685
              },
              "start": 655,
              "end": 685
            },
            "accessibility": null,
            "static": false,
            "start": 653,
            "end": 685
          }
        ],
        "start": 651,
        "end": 686
      },
      "declare": false,
      "start": 642,
      "end": 686
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 692,
        "end": 693
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 699
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 705
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 709,
                              "end": 710
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
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 714,
                                      "end": 715
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
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 719,
                                              "end": 720
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
                                                      "name": "f",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 724,
                                                      "end": 725
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
                                                              "name": "g",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 729,
                                                              "end": 730
                                                            },
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "typeAnnotation": {
                                                                "type": "TSLiteralType",
                                                                "literal": {
                                                                  "type": "Literal",
                                                                  "value": 2,
                                                                  "raw": "2",
                                                                  "start": 732,
                                                                  "end": 733
                                                                },
                                                                "start": 732,
                                                                "end": 733
                                                              },
                                                              "start": 730,
                                                              "end": 733
                                                            },
                                                            "accessibility": null,
                                                            "static": false,
                                                            "start": 729,
                                                            "end": 733
                                                          }
                                                        ],
                                                        "start": 727,
                                                        "end": 735
                                                      },
                                                      "start": 725,
                                                      "end": 735
                                                    },
                                                    "accessibility": null,
                                                    "static": false,
                                                    "start": 724,
                                                    "end": 735
                                                  }
                                                ],
                                                "start": 722,
                                                "end": 736
                                              },
                                              "start": 720,
                                              "end": 736
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 719,
                                            "end": 736
                                          }
                                        ],
                                        "start": 717,
                                        "end": 737
                                      },
                                      "start": 715,
                                      "end": 737
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 714,
                                    "end": 737
                                  }
                                ],
                                "start": 712,
                                "end": 738
                              },
                              "start": 710,
                              "end": 738
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 709,
                            "end": 739
                          },
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
                              "start": 740,
                              "end": 741
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 1000,
                                  "raw": "1000",
                                  "start": 743,
                                  "end": 747
                                },
                                "start": 743,
                                "end": 747
                              },
                              "start": 741,
                              "end": 747
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 740,
                            "end": 747
                          }
                        ],
                        "start": 707,
                        "end": 749
                      },
                      "start": 705,
                      "end": 749
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 704,
                    "end": 749
                  }
                ],
                "start": 702,
                "end": 750
              },
              "start": 700,
              "end": 750
            },
            "accessibility": null,
            "static": false,
            "start": 698,
            "end": 750
          }
        ],
        "start": 696,
        "end": 751
      },
      "declare": false,
      "start": 687,
      "end": 751
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 759
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "typeAnnotation": null,
          "start": 762,
          "end": 774
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
                "start": 775,
                "end": 776
              },
              "typeArguments": null,
              "start": 775,
              "end": 776
            }
          ],
          "start": 774,
          "end": 777
        },
        "start": 762,
        "end": 777
      },
      "declare": false,
      "start": 753,
      "end": 778
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 784,
        "end": 785
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "typeAnnotation": null,
          "start": 788,
          "end": 800
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 802
              },
              "typeArguments": null,
              "start": 801,
              "end": 802
            }
          ],
          "start": 800,
          "end": 803
        },
        "start": 788,
        "end": 803
      },
      "declare": false,
      "start": 779,
      "end": 804
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 816
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 821
              },
              "typeArguments": null,
              "start": 820,
              "end": 821
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "typeArguments": null,
              "start": 823,
              "end": 824
            }
          ],
          "start": 819,
          "end": 825
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 836
              },
              "typeArguments": null,
              "start": 835,
              "end": 836
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "typeArguments": null,
              "start": 838,
              "end": 839
            }
          ],
          "start": 834,
          "end": 840
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 843,
            "end": 847
          },
          "start": 843,
          "end": 847
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 850,
            "end": 855
          },
          "start": 850,
          "end": 855
        },
        "start": 819,
        "end": 855
      },
      "declare": false,
      "start": 806,
      "end": 856
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 877
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 880,
            "end": 881
          },
          "typeArguments": null,
          "start": 880,
          "end": 881
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 891
          },
          "typeArguments": null,
          "start": 890,
          "end": 891
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 894,
            "end": 898
          },
          "start": 894,
          "end": 898
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 901,
            "end": 906
          },
          "start": 901,
          "end": 906
        },
        "start": 880,
        "end": 906
      },
      "declare": false,
      "start": 867,
      "end": 907
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 923,
        "end": 928
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 932
          },
          "typeArguments": null,
          "start": 931,
          "end": 932
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 942
          },
          "typeArguments": null,
          "start": 941,
          "end": 942
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 945,
            "end": 949
          },
          "start": 945,
          "end": 949
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 952,
            "end": 957
          },
          "start": 952,
          "end": 957
        },
        "start": 931,
        "end": 957
      },
      "declare": false,
      "start": 918,
      "end": 958
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1343
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1345
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1354,
              "end": 1360
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1344,
            "end": 1360
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1363
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1362,
            "end": 1363
          }
        ],
        "start": 1343,
        "end": 1364
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1367,
            "end": 1368
          },
          "typeArguments": null,
          "start": 1367,
          "end": 1368
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1377,
              "end": 1380
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 1388,
              "end": 1392
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1400,
              "end": 1402
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1386,
                  "end": 1388
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1386,
                "end": 1388
              },
              "start": 1380,
              "end": 1388
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1398,
                  "end": 1400
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1398,
                "end": 1400
              },
              "start": 1392,
              "end": 1400
            }
          ],
          "start": 1377,
          "end": 1402
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1408,
            "end": 1409
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1415
            },
            "typeArguments": null,
            "start": 1413,
            "end": 1415
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NestedRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1430
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "KR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1433
                  },
                  "typeArguments": null,
                  "start": 1431,
                  "end": 1433
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1435,
                    "end": 1436
                  },
                  "typeArguments": null,
                  "start": 1435,
                  "end": 1436
                }
              ],
              "start": 1430,
              "end": 1437
            },
            "start": 1418,
            "end": 1437
          },
          "optional": false,
          "readonly": null,
          "start": 1405,
          "end": 1439
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 1442,
            "end": 1448
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1450
                },
                "typeArguments": null,
                "start": 1449,
                "end": 1450
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1452,
                  "end": 1453
                },
                "typeArguments": null,
                "start": 1452,
                "end": 1453
              }
            ],
            "start": 1448,
            "end": 1454
          },
          "start": 1442,
          "end": 1454
        },
        "start": 1367,
        "end": 1454
      },
      "declare": false,
      "start": 1326,
      "end": 1455
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1462,
        "end": 1466
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 1469,
          "end": 1481
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x.y.z.a.b.c",
                "raw": "\"x.y.z.a.b.c\"",
                "start": 1482,
                "end": 1495
              },
              "start": 1482,
              "end": 1495
            },
            {
              "type": "TSNumberKeyword",
              "start": 1497,
              "end": 1503
            }
          ],
          "start": 1481,
          "end": 1504
        },
        "start": 1469,
        "end": 1504
      },
      "declare": false,
      "start": 1457,
      "end": 1505
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1511,
        "end": 1515
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1530
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x.y.z.a.b.c",
                "raw": "\"x.y.z.a.b.c\"",
                "start": 1531,
                "end": 1544
              },
              "start": 1531,
              "end": 1544
            },
            {
              "type": "TSStringKeyword",
              "start": 1546,
              "end": 1552
            }
          ],
          "start": 1530,
          "end": 1553
        },
        "start": 1518,
        "end": 1553
      },
      "declare": false,
      "start": 1506,
      "end": 1554
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
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1576,
                  "end": 1580
                },
                "typeArguments": null,
                "start": 1576,
                "end": 1580
              },
              "start": 1574,
              "end": 1580
            },
            "start": 1570,
            "end": 1580
          },
          "init": null,
          "definite": false,
          "start": 1570,
          "end": 1580
        }
      ],
      "declare": true,
      "start": 1556,
      "end": 1581
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
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1594,
                  "end": 1598
                },
                "typeArguments": null,
                "start": 1594,
                "end": 1598
              },
              "start": 1592,
              "end": 1598
            },
            "start": 1588,
            "end": 1598
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1601,
            "end": 1605
          },
          "definite": false,
          "start": 1588,
          "end": 1605
        }
      ],
      "declare": false,
      "start": 1582,
      "end": 1606
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Input",
          "optional": false,
          "typeAnnotation": null,
          "start": 1661,
          "end": 1666
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Static",
            "optional": false,
            "typeAnnotation": null,
            "start": 1669,
            "end": 1675
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1683,
                  "end": 1688
                },
                "typeArguments": null,
                "start": 1676,
                "end": 1688
              }
            ],
            "start": 1675,
            "end": 1689
          },
          "start": 1669,
          "end": 1689
        },
        "declare": false,
        "start": 1656,
        "end": 1689
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1649,
      "end": 1689
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 1703,
              "end": 1708
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1711,
                  "end": 1715
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1716,
                  "end": 1722
                },
                "optional": false,
                "computed": false,
                "start": 1711,
                "end": 1722
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
                        "name": "level1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1729,
                        "end": 1735
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1737,
                            "end": 1741
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1742,
                            "end": 1748
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1737,
                          "end": 1748
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
                                  "name": "level2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1759,
                                  "end": 1765
                                },
                                "value": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1767,
                                      "end": 1771
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1772,
                                      "end": 1778
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1767,
                                    "end": 1778
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
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1793,
                                            "end": 1796
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1798,
                                                "end": 1802
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1803,
                                                "end": 1809
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1798,
                                              "end": 1809
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 1798,
                                            "end": 1811
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1793,
                                          "end": 1811
                                        }
                                      ],
                                      "start": 1779,
                                      "end": 1822
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1767,
                                  "end": 1823
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1759,
                                "end": 1823
                              }
                            ],
                            "start": 1749,
                            "end": 1829
                          }
                        ],
                        "optional": false,
                        "start": 1737,
                        "end": 1830
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1729,
                      "end": 1830
                    }
                  ],
                  "start": 1723,
                  "end": 1832
                }
              ],
              "optional": false,
              "start": 1711,
              "end": 1833
            },
            "definite": false,
            "start": 1703,
            "end": 1833
          }
        ],
        "declare": false,
        "start": 1697,
        "end": 1833
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1690,
      "end": 1833
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Output",
          "optional": false,
          "typeAnnotation": null,
          "start": 1847,
          "end": 1853
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Static",
            "optional": false,
            "typeAnnotation": null,
            "start": 1856,
            "end": 1862
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1870,
                  "end": 1876
                },
                "typeArguments": null,
                "start": 1863,
                "end": 1876
              }
            ],
            "start": 1862,
            "end": 1877
          },
          "start": 1856,
          "end": 1877
        },
        "declare": false,
        "start": 1842,
        "end": 1877
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1835,
      "end": 1877
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1897
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1900,
                  "end": 1904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1905,
                  "end": 1911
                },
                "optional": false,
                "computed": false,
                "start": 1900,
                "end": 1911
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
                        "name": "level1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1918,
                        "end": 1924
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1926,
                            "end": 1930
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1931,
                            "end": 1937
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1926,
                          "end": 1937
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
                                  "name": "level2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1948,
                                  "end": 1954
                                },
                                "value": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1956,
                                      "end": 1960
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1961,
                                      "end": 1967
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1956,
                                    "end": 1967
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
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1982,
                                            "end": 1985
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1987,
                                                "end": 1991
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1992,
                                                "end": 1998
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1987,
                                              "end": 1998
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 1987,
                                            "end": 2000
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1982,
                                          "end": 2000
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2014,
                                            "end": 2017
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2019,
                                                "end": 2023
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2024,
                                                "end": 2030
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 2019,
                                              "end": 2030
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 2019,
                                            "end": 2032
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 2014,
                                          "end": 2032
                                        }
                                      ],
                                      "start": 1968,
                                      "end": 2043
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1956,
                                  "end": 2044
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1948,
                                "end": 2044
                              }
                            ],
                            "start": 1938,
                            "end": 2050
                          }
                        ],
                        "optional": false,
                        "start": 1926,
                        "end": 2051
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1918,
                      "end": 2051
                    }
                  ],
                  "start": 1912,
                  "end": 2053
                }
              ],
              "optional": false,
              "start": 1900,
              "end": 2054
            },
            "definite": false,
            "start": 1891,
            "end": 2054
          }
        ],
        "declare": false,
        "start": 1885,
        "end": 2054
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1878,
      "end": 2054
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2065,
        "end": 2085
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
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
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2091,
                  "end": 2096
                },
                "typeArguments": null,
                "start": 2091,
                "end": 2096
              },
              "start": 2091,
              "end": 2098
            },
            "start": 2089,
            "end": 2098
          },
          "start": 2086,
          "end": 2098
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 2101,
              "end": 2107
            },
            "typeArguments": null,
            "start": 2101,
            "end": 2107
          },
          "start": 2101,
          "end": 2109
        },
        "start": 2099,
        "end": 2109
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null,
              "start": 2123,
              "end": 2126
            },
            "start": 2116,
            "end": 2127
          }
        ],
        "start": 2110,
        "end": 2139
      },
      "expression": false,
      "start": 2056,
      "end": 2139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2170
      },
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
              "start": 2171,
              "end": 2172
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2181,
                  "end": 2187
                },
                "typeArguments": null,
                "start": 2181,
                "end": 2187
              },
              "start": 2181,
              "end": 2189
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2171,
            "end": 2189
          }
        ],
        "start": 2170,
        "end": 2190
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
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
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2201
                },
                "typeArguments": null,
                "start": 2196,
                "end": 2201
              },
              "start": 2196,
              "end": 2203
            },
            "start": 2194,
            "end": 2203
          },
          "start": 2191,
          "end": 2203
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
            "start": 2206,
            "end": 2207
          },
          "typeArguments": null,
          "start": 2206,
          "end": 2207
        },
        "start": 2204,
        "end": 2207
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null,
              "start": 2221,
              "end": 2224
            },
            "start": 2214,
            "end": 2225
          }
        ],
        "start": 2208,
        "end": 2237
      },
      "expression": false,
      "start": 2141,
      "end": 2237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2268
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2282,
                    "end": 2287
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2288,
                    "end": 2294
                  },
                  "start": 2282,
                  "end": 2294
                },
                "typeArguments": null,
                "start": 2275,
                "end": 2294
              },
              "start": 2274,
              "end": 2297
            },
            "start": 2272,
            "end": 2297
          },
          "start": 2269,
          "end": 2297
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2306
            },
            "typeArguments": null,
            "start": 2300,
            "end": 2306
          },
          "start": 2300,
          "end": 2308
        },
        "start": 2298,
        "end": 2308
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null,
              "start": 2322,
              "end": 2325
            },
            "start": 2315,
            "end": 2326
          }
        ],
        "start": 2309,
        "end": 2338
      },
      "expression": false,
      "start": 2239,
      "end": 2338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Evaluate",
          "optional": false,
          "typeAnnotation": null,
          "start": 2352,
          "end": 2360
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
                "start": 2361,
                "end": 2362
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2361,
              "end": 2362
            }
          ],
          "start": 2360,
          "end": 2363
        },
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
              "start": 2366,
              "end": 2367
            },
            "typeArguments": null,
            "start": 2366,
            "end": 2367
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2382,
                "end": 2383
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2382,
              "end": 2383
            },
            "start": 2376,
            "end": 2383
          },
          "trueType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2389,
              "end": 2390
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2400,
                  "end": 2401
                },
                "typeArguments": null,
                "start": 2400,
                "end": 2401
              },
              "start": 2394,
              "end": 2401
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2404,
                  "end": 2405
                },
                "typeArguments": null,
                "start": 2404,
                "end": 2405
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2406,
                  "end": 2407
                },
                "typeArguments": null,
                "start": 2406,
                "end": 2407
              },
              "start": 2404,
              "end": 2408
            },
            "optional": false,
            "readonly": null,
            "start": 2386,
            "end": 2410
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2413,
            "end": 2418
          },
          "start": 2366,
          "end": 2418
        },
        "declare": false,
        "start": 2347,
        "end": 2418
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2340,
      "end": 2418
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2458,
                    "end": 2464
                  },
                  "start": 2451,
                  "end": 2464
                },
                "start": 2449,
                "end": 2464
              },
              "start": 2441,
              "end": 2464
            },
            "init": null,
            "definite": false,
            "start": 2441,
            "end": 2464
          }
        ],
        "declare": true,
        "start": 2427,
        "end": 2465
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2420,
      "end": 2465
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Optional",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2504,
                    "end": 2510
                  },
                  "start": 2497,
                  "end": 2510
                },
                "start": 2495,
                "end": 2510
              },
              "start": 2487,
              "end": 2510
            },
            "init": null,
            "definite": false,
            "start": 2487,
            "end": 2510
          }
        ],
        "declare": true,
        "start": 2473,
        "end": 2511
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2466,
      "end": 2511
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Hint",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2546,
                    "end": 2552
                  },
                  "start": 2539,
                  "end": 2552
                },
                "start": 2537,
                "end": 2552
              },
              "start": 2533,
              "end": 2552
            },
            "init": null,
            "definite": false,
            "start": 2533,
            "end": 2552
          }
        ],
        "declare": true,
        "start": 2519,
        "end": 2553
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2512,
      "end": 2553
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Kind",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2588,
                    "end": 2594
                  },
                  "start": 2581,
                  "end": 2594
                },
                "start": 2579,
                "end": 2594
              },
              "start": 2575,
              "end": 2594
            },
            "init": null,
            "definite": false,
            "start": 2575,
            "end": 2594
          }
        ],
        "declare": true,
        "start": 2561,
        "end": 2595
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2554,
      "end": 2595
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 2614,
          "end": 2619
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2627,
                "end": 2631
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2634,
                  "end": 2640
                },
                "start": 2632,
                "end": 2640
              },
              "accessibility": null,
              "static": false,
              "start": 2626,
              "end": 2640
            }
          ],
          "start": 2620,
          "end": 2642
        },
        "declare": false,
        "start": 2604,
        "end": 2642
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2597,
      "end": 2642
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TSchema",
          "optional": false,
          "typeAnnotation": null,
          "start": 2660,
          "end": 2667
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2676,
              "end": 2681
            },
            "typeArguments": null,
            "start": 2676,
            "end": 2681
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2689,
                "end": 2697
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2701,
                  "end": 2707
                },
                "start": 2699,
                "end": 2707
              },
              "accessibility": null,
              "static": false,
              "start": 2688,
              "end": 2707
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Optional",
                "optional": false,
                "typeAnnotation": null,
                "start": 2713,
                "end": 2721
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2725,
                  "end": 2731
                },
                "start": 2723,
                "end": 2731
              },
              "accessibility": null,
              "static": false,
              "start": 2712,
              "end": 2731
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Hint",
                "optional": false,
                "typeAnnotation": null,
                "start": 2737,
                "end": 2741
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2745,
                  "end": 2751
                },
                "start": 2743,
                "end": 2751
              },
              "accessibility": null,
              "static": false,
              "start": 2736,
              "end": 2751
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": null,
                "start": 2756,
                "end": 2762
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 2764,
                    "end": 2771
                  },
                  "start": 2764,
                  "end": 2773
                },
                "start": 2762,
                "end": 2773
              },
              "accessibility": null,
              "static": false,
              "start": 2756,
              "end": 2773
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 2778,
                "end": 2784
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 2786,
                  "end": 2793
                },
                "start": 2784,
                "end": 2793
              },
              "accessibility": null,
              "static": false,
              "start": 2778,
              "end": 2793
            }
          ],
          "start": 2682,
          "end": 2795
        },
        "declare": false,
        "start": 2650,
        "end": 2795
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2643,
      "end": 2795
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TReadonlyOptional",
          "optional": false,
          "typeAnnotation": null,
          "start": 2809,
          "end": 2826
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
                "start": 2827,
                "end": 2828
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2837,
                  "end": 2844
                },
                "typeArguments": null,
                "start": 2837,
                "end": 2844
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2827,
              "end": 2844
            }
          ],
          "start": 2826,
          "end": 2845
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 2848,
                "end": 2857
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
                      "start": 2858,
                      "end": 2859
                    },
                    "typeArguments": null,
                    "start": 2858,
                    "end": 2859
                  }
                ],
                "start": 2857,
                "end": 2860
              },
              "start": 2848,
              "end": 2860
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TReadonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2863,
                "end": 2872
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
                      "start": 2873,
                      "end": 2874
                    },
                    "typeArguments": null,
                    "start": 2873,
                    "end": 2874
                  }
                ],
                "start": 2872,
                "end": 2875
              },
              "start": 2863,
              "end": 2875
            }
          ],
          "start": 2848,
          "end": 2875
        },
        "declare": false,
        "start": 2804,
        "end": 2875
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2797,
      "end": 2875
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TReadonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 2888,
          "end": 2897
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
                "start": 2898,
                "end": 2899
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2908,
                  "end": 2915
                },
                "typeArguments": null,
                "start": 2908,
                "end": 2915
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2898,
              "end": 2915
            }
          ],
          "start": 2897,
          "end": 2916
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2919,
                "end": 2920
              },
              "typeArguments": null,
              "start": 2919,
              "end": 2920
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2926,
                    "end": 2934
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Readonly",
                        "raw": "'Readonly'",
                        "start": 2937,
                        "end": 2947
                      },
                      "start": 2937,
                      "end": 2947
                    },
                    "start": 2935,
                    "end": 2947
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2925,
                  "end": 2947
                }
              ],
              "start": 2923,
              "end": 2949
            }
          ],
          "start": 2919,
          "end": 2949
        },
        "declare": false,
        "start": 2883,
        "end": 2949
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2876,
      "end": 2949
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TOptional",
          "optional": false,
          "typeAnnotation": null,
          "start": 2962,
          "end": 2971
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
                "start": 2972,
                "end": 2973
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2982,
                  "end": 2989
                },
                "typeArguments": null,
                "start": 2982,
                "end": 2989
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2972,
              "end": 2989
            }
          ],
          "start": 2971,
          "end": 2990
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2994
              },
              "typeArguments": null,
              "start": 2993,
              "end": 2994
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3000,
                    "end": 3008
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Optional",
                        "raw": "'Optional'",
                        "start": 3011,
                        "end": 3021
                      },
                      "start": 3011,
                      "end": 3021
                    },
                    "start": 3009,
                    "end": 3021
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2999,
                  "end": 3021
                }
              ],
              "start": 2997,
              "end": 3023
            }
          ],
          "start": 2993,
          "end": 3023
        },
        "declare": false,
        "start": 2957,
        "end": 3023
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2950,
      "end": 3023
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TString",
          "optional": false,
          "typeAnnotation": null,
          "start": 3042,
          "end": 3049
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 3058,
              "end": 3065
            },
            "typeArguments": null,
            "start": 3058,
            "end": 3065
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 3073,
                "end": 3077
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "String",
                    "raw": "'String'",
                    "start": 3080,
                    "end": 3088
                  },
                  "start": 3080,
                  "end": 3088
                },
                "start": 3078,
                "end": 3088
              },
              "accessibility": null,
              "static": false,
              "start": 3072,
              "end": 3089
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 3094,
                "end": 3100
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3102,
                  "end": 3108
                },
                "start": 3100,
                "end": 3108
              },
              "accessibility": null,
              "static": false,
              "start": 3094,
              "end": 3109
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 3114,
                "end": 3118
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 3120,
                    "end": 3128
                  },
                  "start": 3120,
                  "end": 3128
                },
                "start": 3118,
                "end": 3128
              },
              "accessibility": null,
              "static": false,
              "start": 3114,
              "end": 3129
            }
          ],
          "start": 3066,
          "end": 3131
        },
        "declare": false,
        "start": 3032,
        "end": 3131
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3025,
      "end": 3131
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyOptionalPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3145,
          "end": 3173
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
                "start": 3174,
                "end": 3175
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3184,
                  "end": 3195
                },
                "typeArguments": null,
                "start": 3184,
                "end": 3195
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3174,
              "end": 3195
            }
          ],
          "start": 3173,
          "end": 3196
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3202,
              "end": 3203
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3213,
                  "end": 3214
                },
                "typeArguments": null,
                "start": 3213,
                "end": 3214
              },
              "start": 3207,
              "end": 3214
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3217,
                    "end": 3218
                  },
                  "typeArguments": null,
                  "start": 3217,
                  "end": 3218
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3219,
                    "end": 3220
                  },
                  "typeArguments": null,
                  "start": 3219,
                  "end": 3220
                },
                "start": 3217,
                "end": 3221
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3230,
                  "end": 3239
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3240,
                        "end": 3247
                      },
                      "typeArguments": null,
                      "start": 3240,
                      "end": 3247
                    }
                  ],
                  "start": 3239,
                  "end": 3248
                },
                "start": 3230,
                "end": 3248
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3252,
                      "end": 3253
                    },
                    "typeArguments": null,
                    "start": 3252,
                    "end": 3253
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3254,
                      "end": 3255
                    },
                    "typeArguments": null,
                    "start": 3254,
                    "end": 3255
                  },
                  "start": 3252,
                  "end": 3256
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3265,
                    "end": 3274
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3275,
                            "end": 3276
                          },
                          "typeArguments": null,
                          "start": 3275,
                          "end": 3276
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3277,
                            "end": 3278
                          },
                          "typeArguments": null,
                          "start": 3277,
                          "end": 3278
                        },
                        "start": 3275,
                        "end": 3279
                      }
                    ],
                    "start": 3274,
                    "end": 3280
                  },
                  "start": 3265,
                  "end": 3280
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3283,
                    "end": 3284
                  },
                  "typeArguments": null,
                  "start": 3283,
                  "end": 3284
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 3287,
                  "end": 3292
                },
                "start": 3252,
                "end": 3292
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3296,
                "end": 3301
              },
              "start": 3217,
              "end": 3301
            },
            "optional": false,
            "readonly": null,
            "start": 3199,
            "end": 3303
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3310,
                "end": 3311
              },
              "typeArguments": null,
              "start": 3310,
              "end": 3311
            },
            "start": 3304,
            "end": 3311
          },
          "start": 3199,
          "end": 3312
        },
        "declare": false,
        "start": 3140,
        "end": 3312
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3133,
      "end": 3312
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3325,
          "end": 3345
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
                "start": 3346,
                "end": 3347
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3356,
                  "end": 3367
                },
                "typeArguments": null,
                "start": 3356,
                "end": 3367
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3346,
              "end": 3367
            }
          ],
          "start": 3345,
          "end": 3368
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3374,
              "end": 3375
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3385,
                  "end": 3386
                },
                "typeArguments": null,
                "start": 3385,
                "end": 3386
              },
              "start": 3379,
              "end": 3386
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3389,
                    "end": 3390
                  },
                  "typeArguments": null,
                  "start": 3389,
                  "end": 3390
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3391,
                    "end": 3392
                  },
                  "typeArguments": null,
                  "start": 3391,
                  "end": 3392
                },
                "start": 3389,
                "end": 3393
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3402,
                  "end": 3411
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3412,
                        "end": 3419
                      },
                      "typeArguments": null,
                      "start": 3412,
                      "end": 3419
                    }
                  ],
                  "start": 3411,
                  "end": 3420
                },
                "start": 3402,
                "end": 3420
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3424,
                      "end": 3425
                    },
                    "typeArguments": null,
                    "start": 3424,
                    "end": 3425
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3426,
                      "end": 3427
                    },
                    "typeArguments": null,
                    "start": 3426,
                    "end": 3427
                  },
                  "start": 3424,
                  "end": 3428
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3437,
                    "end": 3446
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3447,
                            "end": 3448
                          },
                          "typeArguments": null,
                          "start": 3447,
                          "end": 3448
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3449,
                            "end": 3450
                          },
                          "typeArguments": null,
                          "start": 3449,
                          "end": 3450
                        },
                        "start": 3447,
                        "end": 3451
                      }
                    ],
                    "start": 3446,
                    "end": 3452
                  },
                  "start": 3437,
                  "end": 3452
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 3455,
                  "end": 3460
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3463,
                    "end": 3464
                  },
                  "typeArguments": null,
                  "start": 3463,
                  "end": 3464
                },
                "start": 3424,
                "end": 3464
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3468,
                "end": 3473
              },
              "start": 3389,
              "end": 3473
            },
            "optional": false,
            "readonly": null,
            "start": 3371,
            "end": 3475
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3482,
                "end": 3483
              },
              "typeArguments": null,
              "start": 3482,
              "end": 3483
            },
            "start": 3476,
            "end": 3483
          },
          "start": 3371,
          "end": 3484
        },
        "declare": false,
        "start": 3320,
        "end": 3484
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3313,
      "end": 3484
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3497,
          "end": 3517
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
                "start": 3518,
                "end": 3519
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3528,
                  "end": 3539
                },
                "typeArguments": null,
                "start": 3528,
                "end": 3539
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3518,
              "end": 3539
            }
          ],
          "start": 3517,
          "end": 3540
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3546,
              "end": 3547
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3557,
                  "end": 3558
                },
                "typeArguments": null,
                "start": 3557,
                "end": 3558
              },
              "start": 3551,
              "end": 3558
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3561,
                    "end": 3562
                  },
                  "typeArguments": null,
                  "start": 3561,
                  "end": 3562
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3563,
                    "end": 3564
                  },
                  "typeArguments": null,
                  "start": 3563,
                  "end": 3564
                },
                "start": 3561,
                "end": 3565
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3574,
                  "end": 3583
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3584,
                        "end": 3591
                      },
                      "typeArguments": null,
                      "start": 3584,
                      "end": 3591
                    }
                  ],
                  "start": 3583,
                  "end": 3592
                },
                "start": 3574,
                "end": 3592
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3596,
                      "end": 3597
                    },
                    "typeArguments": null,
                    "start": 3596,
                    "end": 3597
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3598,
                      "end": 3599
                    },
                    "typeArguments": null,
                    "start": 3598,
                    "end": 3599
                  },
                  "start": 3596,
                  "end": 3600
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3609,
                    "end": 3618
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3619,
                            "end": 3620
                          },
                          "typeArguments": null,
                          "start": 3619,
                          "end": 3620
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3621,
                            "end": 3622
                          },
                          "typeArguments": null,
                          "start": 3621,
                          "end": 3622
                        },
                        "start": 3619,
                        "end": 3623
                      }
                    ],
                    "start": 3618,
                    "end": 3624
                  },
                  "start": 3609,
                  "end": 3624
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 3627,
                  "end": 3632
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3635,
                    "end": 3636
                  },
                  "typeArguments": null,
                  "start": 3635,
                  "end": 3636
                },
                "start": 3596,
                "end": 3636
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3640,
                "end": 3645
              },
              "start": 3561,
              "end": 3645
            },
            "optional": false,
            "readonly": null,
            "start": 3543,
            "end": 3647
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3654,
                "end": 3655
              },
              "typeArguments": null,
              "start": 3654,
              "end": 3655
            },
            "start": 3648,
            "end": 3655
          },
          "start": 3543,
          "end": 3656
        },
        "declare": false,
        "start": 3492,
        "end": 3656
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3485,
      "end": 3656
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3669,
          "end": 3689
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
                "start": 3690,
                "end": 3691
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3700,
                  "end": 3711
                },
                "typeArguments": null,
                "start": 3700,
                "end": 3711
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3690,
              "end": 3711
            }
          ],
          "start": 3689,
          "end": 3712
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 3721,
              "end": 3725
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
                    "start": 3726,
                    "end": 3727
                  },
                  "typeArguments": null,
                  "start": 3726,
                  "end": 3727
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyOptionalPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3729,
                        "end": 3757
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
                              "start": 3758,
                              "end": 3759
                            },
                            "typeArguments": null,
                            "start": 3758,
                            "end": 3759
                          }
                        ],
                        "start": 3757,
                        "end": 3760
                      },
                      "start": 3729,
                      "end": 3760
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3763,
                        "end": 3783
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
                              "start": 3784,
                              "end": 3785
                            },
                            "typeArguments": null,
                            "start": 3784,
                            "end": 3785
                          }
                        ],
                        "start": 3783,
                        "end": 3786
                      },
                      "start": 3763,
                      "end": 3786
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OptionalPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3789,
                        "end": 3809
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
                              "start": 3810,
                              "end": 3811
                            },
                            "typeArguments": null,
                            "start": 3810,
                            "end": 3811
                          }
                        ],
                        "start": 3809,
                        "end": 3812
                      },
                      "start": 3789,
                      "end": 3812
                    }
                  ],
                  "start": 3729,
                  "end": 3812
                }
              ],
              "start": 3725,
              "end": 3813
            },
            "start": 3721,
            "end": 3813
          },
          "start": 3715,
          "end": 3813
        },
        "declare": false,
        "start": 3664,
        "end": 3813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3657,
      "end": 3813
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesReducer",
          "optional": false,
          "typeAnnotation": null,
          "start": 3826,
          "end": 3843
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
                "start": 3844,
                "end": 3845
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3854,
                  "end": 3865
                },
                "typeArguments": null,
                "start": 3854,
                "end": 3865
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3844,
              "end": 3865
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 3867,
                "end": 3868
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3877,
                  "end": 3883
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 3890,
                        "end": 3893
                      },
                      "start": 3884,
                      "end": 3893
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 3895,
                      "end": 3902
                    }
                  ],
                  "start": 3883,
                  "end": 3903
                },
                "start": 3877,
                "end": 3903
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3867,
              "end": 3903
            }
          ],
          "start": 3843,
          "end": 3904
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Evaluate",
            "optional": false,
            "typeAnnotation": null,
            "start": 3907,
            "end": 3915
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
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3922,
                      "end": 3930
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3931,
                            "end": 3938
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Pick",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3939,
                                  "end": 3943
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3944,
                                        "end": 3945
                                      },
                                      "typeArguments": null,
                                      "start": 3944,
                                      "end": 3945
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ReadonlyOptionalPropertyKeys",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3947,
                                        "end": 3975
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
                                              "start": 3976,
                                              "end": 3977
                                            },
                                            "typeArguments": null,
                                            "start": 3976,
                                            "end": 3977
                                          }
                                        ],
                                        "start": 3975,
                                        "end": 3978
                                      },
                                      "start": 3947,
                                      "end": 3978
                                    }
                                  ],
                                  "start": 3943,
                                  "end": 3979
                                },
                                "start": 3939,
                                "end": 3979
                              }
                            ],
                            "start": 3938,
                            "end": 3980
                          },
                          "start": 3931,
                          "end": 3980
                        }
                      ],
                      "start": 3930,
                      "end": 3981
                    },
                    "start": 3922,
                    "end": 3981
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3988,
                      "end": 3996
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3997,
                            "end": 4001
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4002,
                                  "end": 4003
                                },
                                "typeArguments": null,
                                "start": 4002,
                                "end": 4003
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ReadonlyPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4005,
                                  "end": 4025
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
                                        "start": 4026,
                                        "end": 4027
                                      },
                                      "typeArguments": null,
                                      "start": 4026,
                                      "end": 4027
                                    }
                                  ],
                                  "start": 4025,
                                  "end": 4028
                                },
                                "start": 4005,
                                "end": 4028
                              }
                            ],
                            "start": 4001,
                            "end": 4029
                          },
                          "start": 3997,
                          "end": 4029
                        }
                      ],
                      "start": 3996,
                      "end": 4030
                    },
                    "start": 3988,
                    "end": 4030
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4037,
                      "end": 4044
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4045,
                            "end": 4049
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4050,
                                  "end": 4051
                                },
                                "typeArguments": null,
                                "start": 4050,
                                "end": 4051
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OptionalPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4053,
                                  "end": 4073
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
                                        "start": 4074,
                                        "end": 4075
                                      },
                                      "typeArguments": null,
                                      "start": 4074,
                                      "end": 4075
                                    }
                                  ],
                                  "start": 4073,
                                  "end": 4076
                                },
                                "start": 4053,
                                "end": 4076
                              }
                            ],
                            "start": 4049,
                            "end": 4077
                          },
                          "start": 4045,
                          "end": 4077
                        }
                      ],
                      "start": 4044,
                      "end": 4078
                    },
                    "start": 4037,
                    "end": 4078
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4085,
                      "end": 4093
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4094,
                            "end": 4098
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4099,
                                  "end": 4100
                                },
                                "typeArguments": null,
                                "start": 4099,
                                "end": 4100
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "RequiredPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4102,
                                  "end": 4122
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
                                        "start": 4123,
                                        "end": 4124
                                      },
                                      "typeArguments": null,
                                      "start": 4123,
                                      "end": 4124
                                    }
                                  ],
                                  "start": 4122,
                                  "end": 4125
                                },
                                "start": 4102,
                                "end": 4125
                              }
                            ],
                            "start": 4098,
                            "end": 4126
                          },
                          "start": 4094,
                          "end": 4126
                        }
                      ],
                      "start": 4093,
                      "end": 4127
                    },
                    "start": 4085,
                    "end": 4127
                  }
                ],
                "start": 3922,
                "end": 4127
              }
            ],
            "start": 3915,
            "end": 4130
          },
          "start": 3907,
          "end": 4130
        },
        "declare": false,
        "start": 3821,
        "end": 4130
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3814,
      "end": 4130
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesReduce",
          "optional": false,
          "typeAnnotation": null,
          "start": 4143,
          "end": 4159
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
                "start": 4160,
                "end": 4161
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4170,
                  "end": 4181
                },
                "typeArguments": null,
                "start": 4170,
                "end": 4181
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4160,
              "end": 4181
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4183,
                "end": 4184
              },
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4193,
                  "end": 4200
                },
                "start": 4193,
                "end": 4202
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4183,
              "end": 4202
            }
          ],
          "start": 4159,
          "end": 4203
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertiesReducer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4206,
            "end": 4223
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
                  "start": 4224,
                  "end": 4225
                },
                "typeArguments": null,
                "start": 4224,
                "end": 4225
              },
              {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4234,
                  "end": 4235
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4245,
                      "end": 4246
                    },
                    "typeArguments": null,
                    "start": 4245,
                    "end": 4246
                  },
                  "start": 4239,
                  "end": 4246
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4249,
                    "end": 4255
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4256,
                            "end": 4257
                          },
                          "typeArguments": null,
                          "start": 4256,
                          "end": 4257
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4258,
                            "end": 4259
                          },
                          "typeArguments": null,
                          "start": 4258,
                          "end": 4259
                        },
                        "start": 4256,
                        "end": 4260
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4262,
                          "end": 4263
                        },
                        "typeArguments": null,
                        "start": 4262,
                        "end": 4263
                      }
                    ],
                    "start": 4255,
                    "end": 4264
                  },
                  "start": 4249,
                  "end": 4264
                },
                "optional": false,
                "readonly": null,
                "start": 4227,
                "end": 4266
              }
            ],
            "start": 4223,
            "end": 4267
          },
          "start": 4206,
          "end": 4267
        },
        "declare": false,
        "start": 4138,
        "end": 4267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4131,
      "end": 4267
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TPropertyKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 4280,
          "end": 4292
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 4295,
              "end": 4301
            },
            {
              "type": "TSNumberKeyword",
              "start": 4304,
              "end": 4310
            }
          ],
          "start": 4295,
          "end": 4310
        },
        "declare": false,
        "start": 4275,
        "end": 4310
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4268,
      "end": 4310
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 4323,
          "end": 4334
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 4337,
            "end": 4343
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPropertyKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4344,
                  "end": 4356
                },
                "typeArguments": null,
                "start": 4344,
                "end": 4356
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4358,
                  "end": 4365
                },
                "typeArguments": null,
                "start": 4358,
                "end": 4365
              }
            ],
            "start": 4343,
            "end": 4366
          },
          "start": 4337,
          "end": 4366
        },
        "declare": false,
        "start": 4318,
        "end": 4366
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4311,
      "end": 4366
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 4384,
          "end": 4391
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
                "start": 4392,
                "end": 4393
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4402,
                  "end": 4413
                },
                "typeArguments": null,
                "start": 4402,
                "end": 4413
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4416,
                  "end": 4427
                },
                "typeArguments": null,
                "start": 4416,
                "end": 4427
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4392,
              "end": 4427
            }
          ],
          "start": 4391,
          "end": 4428
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 4437,
              "end": 4444
            },
            "typeArguments": null,
            "start": 4437,
            "end": 4444
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 4452,
                "end": 4456
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Object",
                    "raw": "'Object'",
                    "start": 4459,
                    "end": 4467
                  },
                  "start": 4459,
                  "end": 4467
                },
                "start": 4457,
                "end": 4467
              },
              "accessibility": null,
              "static": false,
              "start": 4451,
              "end": 4467
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 4472,
                "end": 4478
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertiesReduce",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4480,
                    "end": 4496
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
                          "start": 4497,
                          "end": 4498
                        },
                        "typeArguments": null,
                        "start": 4497,
                        "end": 4498
                      },
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSThisType",
                          "start": 4500,
                          "end": 4504
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "params",
                            "raw": "'params'",
                            "start": 4505,
                            "end": 4513
                          },
                          "start": 4505,
                          "end": 4513
                        },
                        "start": 4500,
                        "end": 4514
                      }
                    ],
                    "start": 4496,
                    "end": 4515
                  },
                  "start": 4480,
                  "end": 4515
                },
                "start": 4478,
                "end": 4515
              },
              "accessibility": null,
              "static": false,
              "start": 4472,
              "end": 4515
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 4520,
                "end": 4524
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "object",
                    "raw": "'object'",
                    "start": 4526,
                    "end": 4534
                  },
                  "start": 4526,
                  "end": 4534
                },
                "start": 4524,
                "end": 4534
              },
              "accessibility": null,
              "static": false,
              "start": 4520,
              "end": 4534
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": false,
                "typeAnnotation": null,
                "start": 4539,
                "end": 4549
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
                    "start": 4551,
                    "end": 4552
                  },
                  "typeArguments": null,
                  "start": 4551,
                  "end": 4552
                },
                "start": 4549,
                "end": 4552
              },
              "accessibility": null,
              "static": false,
              "start": 4539,
              "end": 4552
            }
          ],
          "start": 4445,
          "end": 4554
        },
        "declare": false,
        "start": 4374,
        "end": 4554
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4367,
      "end": 4554
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Static",
          "optional": false,
          "typeAnnotation": null,
          "start": 4568,
          "end": 4574
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
                "start": 4575,
                "end": 4576
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4585,
                  "end": 4592
                },
                "typeArguments": null,
                "start": 4585,
                "end": 4592
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4575,
              "end": 4592
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4594,
                "end": 4595
              },
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4604,
                  "end": 4611
                },
                "start": 4604,
                "end": 4613
              },
              "default": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 4616,
                "end": 4618
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4594,
              "end": 4618
            }
          ],
          "start": 4574,
          "end": 4619
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4623,
                  "end": 4624
                },
                "typeArguments": null,
                "start": 4623,
                "end": 4624
              },
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
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4629,
                      "end": 4635
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4637,
                          "end": 4638
                        },
                        "typeArguments": null,
                        "start": 4637,
                        "end": 4638
                      },
                      "start": 4635,
                      "end": 4638
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4629,
                    "end": 4639
                  }
                ],
                "start": 4627,
                "end": 4641
              }
            ],
            "start": 4623,
            "end": 4641
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "static",
              "raw": "'static'",
              "start": 4643,
              "end": 4651
            },
            "start": 4643,
            "end": 4651
          },
          "start": 4622,
          "end": 4652
        },
        "declare": false,
        "start": 4563,
        "end": 4652
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4556,
      "end": 4652
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 4672,
        "end": 4676
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 4692,
              "end": 4698
            },
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
                    "start": 4699,
                    "end": 4700
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4709,
                      "end": 4720
                    },
                    "typeArguments": null,
                    "start": 4709,
                    "end": 4720
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4699,
                  "end": 4720
                }
              ],
              "start": 4698,
              "end": 4721
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
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
                      "start": 4730,
                      "end": 4731
                    },
                    "typeArguments": null,
                    "start": 4730,
                    "end": 4731
                  },
                  "start": 4728,
                  "end": 4731
                },
                "start": 4722,
                "end": 4731
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4734,
                  "end": 4741
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
                        "start": 4742,
                        "end": 4743
                      },
                      "typeArguments": null,
                      "start": 4742,
                      "end": 4743
                    }
                  ],
                  "start": 4741,
                  "end": 4744
                },
                "start": 4734,
                "end": 4744
              },
              "start": 4732,
              "end": 4744
            },
            "body": null,
            "expression": false,
            "start": 4683,
            "end": 4744
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null,
              "start": 4758,
              "end": 4764
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4768,
                  "end": 4775
                },
                "typeArguments": null,
                "start": 4768,
                "end": 4775
              },
              "start": 4766,
              "end": 4775
            },
            "body": null,
            "expression": false,
            "start": 4749,
            "end": 4775
          }
        ],
        "start": 4677,
        "end": 4777
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 4654,
      "end": 4777
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 4777
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 33,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Id",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "b",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 143,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "z",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 218,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 236,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 281,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Id2",
    "start": 286,
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
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 300,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Id2",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "Id2",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 332,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 337,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Id2",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 399,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Foo4",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "Id2",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 445,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 467,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 475,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 481,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 493,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "Foo4",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 576,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "RequiredDeep",
    "start": 581,
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
    "value": "T",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 604,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "RequiredDeep",
    "start": 619,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 635,
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
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 642,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "type": "Identifier",
    "value": "d",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "2000",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 687,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "type": "Numeric",
    "value": "2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
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
    "value": "x",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 753,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "RequiredDeep",
    "start": 762,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 779,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "RequiredDeep",
    "start": 788,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 806,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 826,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 841,
    "end": 842
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 843,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 850,
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
    "value": "type",
    "start": 867,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 882,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 892,
    "end": 893
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 894,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 901,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 918,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "Test3",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 933,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 943,
    "end": 944
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1326,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "NestedRecord",
    "start": 1331,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1346,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1362,
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
    "value": "=",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1380,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "K0",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 1388,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1392,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "KR",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1410,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "K0",
    "start": 1413,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "NestedRecord",
    "start": 1418,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "KR",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1442,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "type",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "Bar1",
    "start": 1462,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "NestedRecord",
    "start": 1469,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "String",
    "value": "\"x.y.z.a.b.c\"",
    "start": 1482,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1506,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 1511,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "NestedRecord",
    "start": 1518,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "String",
    "value": "\"x.y.z.a.b.c\"",
    "start": 1531,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1546,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1556,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1564,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1570,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "Bar1",
    "start": 1576,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1582,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 1594,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1649,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1656,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 1661,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 1669,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1676,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 1683,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1690,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1697,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 1703,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1711,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1716,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "level1",
    "start": 1729,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1737,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1742,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "level2",
    "start": 1759,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1767,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1772,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1793,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1798,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1803,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 1847,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1863,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 1870,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1878,
    "end": 1884
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1885,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 1891,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1900,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1905,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "level1",
    "start": 1918,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1926,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1931,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "level2",
    "start": 1948,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1956,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1961,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1982,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1987,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1992,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2019,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2056,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "problematicFunction1",
    "start": 2065,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "ors",
    "start": 2086,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 2091,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 2101,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2116,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "ors",
    "start": 2123,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2141,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "problematicFunction2",
    "start": 2150,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2173,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 2181,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "ors",
    "start": 2191,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 2196,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2214,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "ors",
    "start": 2221,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2239,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "problematicFunction3",
    "start": 2248,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "ors",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2275,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 2282,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 2288,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Output",
    "start": 2300,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2315,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "ors",
    "start": 2322,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2340,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2347,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "Evaluate",
    "start": 2352,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2368,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2376,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2391,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2394,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2413,
    "end": 2418
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2420,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2427,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2435,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 2441,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2451,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2458,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2466,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2473,
    "end": 2480
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2481,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 2487,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2497,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2504,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2512,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2519,
    "end": 2526
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2527,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "Hint",
    "start": 2533,
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
    "value": "unique",
    "start": 2539,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2546,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2554,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2561,
    "end": 2568
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2569,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2575,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2581,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2588,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2597,
    "end": 2603
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2604,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "TKind",
    "start": 2614,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2627,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2634,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2643,
    "end": 2649
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2650,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 2660,
    "end": 2667
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2668,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "TKind",
    "start": 2676,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 2689,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2701,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 2713,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2725,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "Hint",
    "start": 2737,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2745,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 2756,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2764,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 2778,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2786,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2797,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2804,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "TReadonlyOptional",
    "start": 2809,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2829,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 2837,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "TOptional",
    "start": 2848,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "TReadonly",
    "start": 2863,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2876,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2883,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "TReadonly",
    "start": 2888,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2900,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 2908,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 2926,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "String",
    "value": "'Readonly'",
    "start": 2937,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2950,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2957,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "TOptional",
    "start": 2962,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2974,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 2982,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 3000,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "String",
    "value": "'Optional'",
    "start": 3011,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3025,
    "end": 3031
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3032,
    "end": 3041
  },
  {
    "type": "Identifier",
    "value": "TString",
    "start": 3042,
    "end": 3049
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3050,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 3058,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3073,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "String",
    "value": "'String'",
    "start": 3080,
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
    "value": "static",
    "start": 3094,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3102,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3114,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 3120,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3133,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3140,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "ReadonlyOptionalPropertyKeys",
    "start": 3145,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3176,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 3184,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3204,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3207,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3222,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "TReadonly",
    "start": 3230,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 3240,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3257,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "TOptional",
    "start": 3265,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3287,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3296,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3304,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3313,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3320,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "ReadonlyPropertyKeys",
    "start": 3325,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3348,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 3356,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3376,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3379,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3394,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "TReadonly",
    "start": 3402,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 3412,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3429,
    "end": 3436
  },
  {
    "type": "Identifier",
    "value": "TOptional",
    "start": 3437,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3455,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3468,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3476,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3485,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3492,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "OptionalPropertyKeys",
    "start": 3497,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3520,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 3528,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3548,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3551,
    "end": 3556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3566,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "TOptional",
    "start": 3574,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 3584,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3601,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "TReadonly",
    "start": 3609,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3627,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3640,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3648,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3657,
    "end": 3663
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3664,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "RequiredPropertyKeys",
    "start": 3669,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3692,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 3700,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3715,
    "end": 3720
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 3721,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "ReadonlyOptionalPropertyKeys",
    "start": 3729,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "ReadonlyPropertyKeys",
    "start": 3763,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Identifier",
    "value": "OptionalPropertyKeys",
    "start": 3789,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3814,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3821,
    "end": 3825
  },
  {
    "type": "Identifier",
    "value": "PropertiesReducer",
    "start": 3826,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3846,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 3854,
    "end": 3865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3869,
    "end": 3876
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3877,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3884,
    "end": 3889
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3890,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3895,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3902,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "Evaluate",
    "start": 3907,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 3922,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3930,
    "end": 3931
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3931,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3939,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Identifier",
    "value": "ReadonlyOptionalPropertyKeys",
    "start": 3947,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 3988,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3997,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Identifier",
    "value": "ReadonlyPropertyKeys",
    "start": 4005,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 4037,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4045,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Identifier",
    "value": "OptionalPropertyKeys",
    "start": 4053,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 4085,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4094,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "value": "RequiredPropertyKeys",
    "start": 4102,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4131,
    "end": 4137
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4138,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "PropertiesReduce",
    "start": 4143,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4162,
    "end": 4169
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 4170,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4185,
    "end": 4192
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4193,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Identifier",
    "value": "PropertiesReducer",
    "start": 4206,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4225,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4236,
    "end": 4238
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4239,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 4249,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4255,
    "end": 4256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ">",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4268,
    "end": 4274
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4275,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "TPropertyKey",
    "start": 4280,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4295,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4304,
    "end": 4310
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4311,
    "end": 4317
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4318,
    "end": 4322
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 4323,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 4337,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Identifier",
    "value": "TPropertyKey",
    "start": 4344,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 4358,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4367,
    "end": 4373
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4374,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "TObject",
    "start": 4384,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4394,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 4402,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 4416,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4429,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 4437,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 4452,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "String",
    "value": "'Object'",
    "start": 4459,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 4472,
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
    "value": "PropertiesReduce",
    "start": 4480,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4500,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "String",
    "value": "'params'",
    "start": 4505,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4520,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 4526,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 4539,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4549,
    "end": 4550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4556,
    "end": 4562
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4563,
    "end": 4567
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 4568,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4575,
    "end": 4576
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4577,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 4585,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4594,
    "end": 4595
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4596,
    "end": 4603
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4604,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 4629,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "String",
    "value": "'static'",
    "start": 4643,
    "end": 4651
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4654,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4662,
    "end": 4671
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 4672,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4677,
    "end": 4678
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4683,
    "end": 4691
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 4692,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4701,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "TProperties",
    "start": 4709,
    "end": 4720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4722,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Identifier",
    "value": "TObject",
    "start": 4734,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4742,
    "end": 4743
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4743,
    "end": 4744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4749,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 4758,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Identifier",
    "value": "TString",
    "start": 4768,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4776,
    "end": 4777
  }
]
```

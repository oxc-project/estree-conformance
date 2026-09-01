__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
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
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 42,
                  "end": 45
                },
                "abstract": false,
                "declare": false,
                "start": 32,
                "end": 45
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 45
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 65,
                  "end": 68
                },
                "abstract": false,
                "declare": false,
                "start": 57,
                "end": 68
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 50,
              "end": 68
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 95
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
                        "start": 96,
                        "end": 97
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 96,
                      "end": 97
                    }
                  ],
                  "start": 95,
                  "end": 98
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
                          "start": 102,
                          "end": 103
                        },
                        "typeArguments": null,
                        "start": 102,
                        "end": 103
                      },
                      "start": 100,
                      "end": 103
                    },
                    "start": 99,
                    "end": 103
                  }
                ],
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
                      "start": 106,
                      "end": 107
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
                            "start": 108,
                            "end": 109
                          },
                          "typeArguments": null,
                          "start": 108,
                          "end": 109
                        }
                      ],
                      "start": 107,
                      "end": 110
                    },
                    "start": 106,
                    "end": 110
                  },
                  "start": 104,
                  "end": 110
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 120,
                        "end": 124
                      },
                      "start": 113,
                      "end": 125
                    }
                  ],
                  "start": 111,
                  "end": 127
                },
                "expression": false,
                "start": 85,
                "end": 127
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 78,
              "end": 127
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 150
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
                        "start": 151,
                        "end": 152
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 151,
                      "end": 152
                    }
                  ],
                  "start": 150,
                  "end": 153
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
                          "start": 157,
                          "end": 158
                        },
                        "typeArguments": null,
                        "start": 157,
                        "end": 158
                      },
                      "start": 155,
                      "end": 158
                    },
                    "start": 154,
                    "end": 158
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 162
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "start": 161,
                      "end": 164
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 165,
                              "end": 166
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 168
                            },
                            "start": 165,
                            "end": 168
                          },
                          "typeArguments": null,
                          "start": 165,
                          "end": 168
                        }
                      ],
                      "start": 164,
                      "end": 169
                    },
                    "start": 161,
                    "end": 169
                  },
                  "start": 159,
                  "end": 169
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 179,
                        "end": 183
                      },
                      "start": 172,
                      "end": 184
                    }
                  ],
                  "start": 170,
                  "end": 186
                },
                "expression": false,
                "start": 139,
                "end": 186
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 132,
              "end": 186
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 209
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
                        "start": 210,
                        "end": 211
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 210,
                      "end": 211
                    }
                  ],
                  "start": 209,
                  "end": 212
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
                          "start": 216,
                          "end": 217
                        },
                        "typeArguments": null,
                        "start": 216,
                        "end": 217
                      },
                      "start": 214,
                      "end": 217
                    },
                    "start": 213,
                    "end": 217
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 220,
                          "end": 221
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 223
                        },
                        "start": 220,
                        "end": 223
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 225
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 227
                              },
                              "start": 224,
                              "end": 227
                            },
                            "typeArguments": null,
                            "start": 224,
                            "end": 227
                          }
                        ],
                        "start": 223,
                        "end": 228
                      },
                      "start": 220,
                      "end": 228
                    },
                    "start": 220,
                    "end": 230
                  },
                  "start": 218,
                  "end": 230
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 240,
                        "end": 244
                      },
                      "start": 233,
                      "end": 245
                    }
                  ],
                  "start": 231,
                  "end": 247
                },
                "expression": false,
                "start": 198,
                "end": 247
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 191,
              "end": 247
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 270
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
                        "start": 271,
                        "end": 272
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 281,
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
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 283,
                                "end": 284
                              },
                              "typeArguments": null,
                              "start": 283,
                              "end": 284
                            }
                          ],
                          "start": 282,
                          "end": 285
                        },
                        "start": 281,
                        "end": 285
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 271,
                      "end": 285
                    }
                  ],
                  "start": 270,
                  "end": 286
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
                          "start": 290,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 291
                      },
                      "start": 288,
                      "end": 291
                    },
                    "start": 287,
                    "end": 291
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 299
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 300,
                              "end": 301
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 303
                            },
                            "start": 300,
                            "end": 303
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 304,
                                    "end": 305
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 306,
                                    "end": 307
                                  },
                                  "start": 304,
                                  "end": 307
                                },
                                "typeArguments": null,
                                "start": 304,
                                "end": 307
                              }
                            ],
                            "start": 303,
                            "end": 308
                          },
                          "start": 300,
                          "end": 308
                        }
                      ],
                      "start": 299,
                      "end": 309
                    },
                    "start": 294,
                    "end": 309
                  },
                  "start": 292,
                  "end": 309
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 319,
                        "end": 323
                      },
                      "start": 312,
                      "end": 324
                    }
                  ],
                  "start": 310,
                  "end": 326
                },
                "expression": false,
                "start": 259,
                "end": 326
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 252,
              "end": 326
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 350
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
                        "start": 351,
                        "end": 352
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 351,
                      "end": 352
                    }
                  ],
                  "start": 350,
                  "end": 353
                },
                "params": [],
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
                      "start": 357,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 357,
                    "end": 358
                  },
                  "start": 355,
                  "end": 358
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 368,
                        "end": 372
                      },
                      "start": 361,
                      "end": 373
                    }
                  ],
                  "start": 359,
                  "end": 375
                },
                "expression": false,
                "start": 339,
                "end": 375
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 332,
              "end": 375
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 399
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
                        "start": 400,
                        "end": 401
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 411
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
                                "start": 412,
                                "end": 413
                              },
                              "typeArguments": null,
                              "start": 412,
                              "end": 413
                            }
                          ],
                          "start": 411,
                          "end": 414
                        },
                        "start": 410,
                        "end": 414
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 400,
                      "end": 414
                    }
                  ],
                  "start": 399,
                  "end": 415
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
                          "start": 419,
                          "end": 420
                        },
                        "typeArguments": null,
                        "start": 419,
                        "end": 420
                      },
                      "start": 417,
                      "end": 420
                    },
                    "start": 416,
                    "end": 420
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
                      "start": 423,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 423,
                    "end": 424
                  },
                  "start": 421,
                  "end": 424
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 434,
                        "end": 438
                      },
                      "start": 427,
                      "end": 439
                    }
                  ],
                  "start": 425,
                  "end": 441
                },
                "expression": false,
                "start": 388,
                "end": 441
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 381,
              "end": 441
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 461
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
                        "start": 462,
                        "end": 463
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 462,
                      "end": 463
                    }
                  ],
                  "start": 461,
                  "end": 464
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
                        "start": 475,
                        "end": 486
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
                            "type": "TSParameterProperty",
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
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
                                    "start": 499,
                                    "end": 500
                                  },
                                  "typeArguments": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "start": 497,
                                "end": 500
                              },
                              "start": 494,
                              "end": 500
                            },
                            "readonly": false,
                            "static": false,
                            "start": 487,
                            "end": 500
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 502,
                          "end": 505
                        },
                        "expression": false,
                        "start": 486,
                        "end": 505
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 475,
                      "end": 505
                    }
                  ],
                  "start": 464,
                  "end": 512
                },
                "abstract": false,
                "declare": false,
                "start": 454,
                "end": 512
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 447,
              "end": 512
            }
          ],
          "start": 19,
          "end": 514
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 514
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 514
    },
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
              "name": "a",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 531
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 533
                    },
                    "start": 530,
                    "end": 533
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 534,
                            "end": 535
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 536,
                            "end": 537
                          },
                          "start": 534,
                          "end": 537
                        },
                        "typeArguments": null,
                        "start": 534,
                        "end": 537
                      }
                    ],
                    "start": 533,
                    "end": 538
                  },
                  "start": 530,
                  "end": 538
                },
                "start": 528,
                "end": 538
              },
              "start": 527,
              "end": 538
            },
            "init": null,
            "definite": false,
            "start": 527,
            "end": 538
          }
        ],
        "declare": false,
        "start": 523,
        "end": 539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 516,
      "end": 539
    },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 553
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 557
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 559
              },
              "optional": false,
              "computed": false,
              "start": 556,
              "end": 559
            },
            "definite": false,
            "start": 552,
            "end": 559
          }
        ],
        "declare": false,
        "start": 548,
        "end": 560
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 541,
      "end": 560
    },
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 572,
              "end": 573
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 577
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              },
              "optional": false,
              "computed": false,
              "start": 576,
              "end": 580
            },
            "definite": false,
            "start": 572,
            "end": 580
          }
        ],
        "declare": false,
        "start": 568,
        "end": 581
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 561,
      "end": 581
    },
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 594
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F3",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 601
              },
              "optional": false,
              "computed": false,
              "start": 597,
              "end": 601
            },
            "definite": false,
            "start": 593,
            "end": 601
          }
        ],
        "declare": false,
        "start": 589,
        "end": 602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 582,
      "end": 602
    },
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 619
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F4",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 622
              },
              "optional": false,
              "computed": false,
              "start": 618,
              "end": 622
            },
            "definite": false,
            "start": 614,
            "end": 622
          }
        ],
        "declare": false,
        "start": 610,
        "end": 623
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 603,
      "end": 623
    },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 637
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 645,
                    "end": 646
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 648
                  },
                  "optional": false,
                  "computed": false,
                  "start": 645,
                  "end": 648
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 650
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 651,
                          "end": 652
                        },
                        "start": 649,
                        "end": 652
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 653,
                                "end": 654
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 655,
                                "end": 656
                              },
                              "start": 653,
                              "end": 656
                            },
                            "typeArguments": null,
                            "start": 653,
                            "end": 656
                          }
                        ],
                        "start": 652,
                        "end": 657
                      },
                      "start": 649,
                      "end": 657
                    }
                  ],
                  "start": 648,
                  "end": 658
                },
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 664
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 666
                      },
                      "optional": false,
                      "computed": false,
                      "start": 663,
                      "end": 666
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 667,
                              "end": 668
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 669,
                              "end": 670
                            },
                            "start": 667,
                            "end": 670
                          },
                          "typeArguments": null,
                          "start": 667,
                          "end": 670
                        }
                      ],
                      "start": 666,
                      "end": 671
                    },
                    "arguments": [],
                    "start": 659,
                    "end": 673
                  }
                ],
                "start": 641,
                "end": 674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 679
              },
              "optional": false,
              "computed": false,
              "start": 640,
              "end": 679
            },
            "definite": false,
            "start": 636,
            "end": 679
          }
        ],
        "declare": false,
        "start": 632,
        "end": 680
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 625,
      "end": 680
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 699
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
                "start": 700,
                "end": 701
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 710,
                    "end": 711
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 712,
                    "end": 713
                  },
                  "start": 710,
                  "end": 713
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 714,
                          "end": 715
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 717
                        },
                        "start": 714,
                        "end": 717
                      },
                      "typeArguments": null,
                      "start": 714,
                      "end": 717
                    }
                  ],
                  "start": 713,
                  "end": 718
                },
                "start": 710,
                "end": 718
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 700,
              "end": 718
            }
          ],
          "start": 699,
          "end": 719
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 722,
          "end": 725
        },
        "expression": false,
        "start": 689,
        "end": 725
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 682,
      "end": 725
    },
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 739
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 743
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 744,
                  "end": 746
                },
                "optional": false,
                "computed": false,
                "start": 742,
                "end": 746
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 747,
                        "end": 748
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      },
                      "start": 747,
                      "end": 750
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 752
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 753,
                              "end": 754
                            },
                            "start": 751,
                            "end": 754
                          },
                          "typeArguments": null,
                          "start": 751,
                          "end": 754
                        }
                      ],
                      "start": 750,
                      "end": 755
                    },
                    "start": 747,
                    "end": 755
                  }
                ],
                "start": 746,
                "end": 756
              },
              "arguments": [],
              "optional": false,
              "start": 742,
              "end": 758
            },
            "definite": false,
            "start": 738,
            "end": 758
          }
        ],
        "declare": false,
        "start": 734,
        "end": 759
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 727,
      "end": 759
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 774,
          "end": 775
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 785
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "optional": false,
          "computed": false,
          "start": 784,
          "end": 787
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 789
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 791
                },
                "start": 788,
                "end": 791
              },
              "typeArguments": null,
              "start": 788,
              "end": 791
            }
          ],
          "start": 787,
          "end": 792
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 792,
          "end": 795
        },
        "abstract": false,
        "declare": false,
        "start": 768,
        "end": 795
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 761,
      "end": 795
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 815
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 825
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 827
              },
              "optional": false,
              "computed": false,
              "start": 824,
              "end": 827
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 828,
                      "end": 829
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 830,
                      "end": 831
                    },
                    "start": 828,
                    "end": 831
                  },
                  "typeArguments": null,
                  "start": 828,
                  "end": 831
                }
              ],
              "start": 827,
              "end": 832
            },
            "start": 824,
            "end": 832
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 833,
          "end": 836
        },
        "declare": false,
        "start": 804,
        "end": 836
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 797,
      "end": 836
    },
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
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 850
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 853,
                "end": 854
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F6",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 857
              },
              "optional": false,
              "computed": false,
              "start": 853,
              "end": 857
            },
            "definite": false,
            "start": 849,
            "end": 857
          }
        ],
        "declare": false,
        "start": 845,
        "end": 858
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 838,
      "end": 858
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 858
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
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 38,
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
    "value": "T",
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
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 78,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 113,
    "end": 119
  },
  {
    "type": "Null",
    "value": "null",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 132,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 139,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 172,
    "end": 178
  },
  {
    "type": "Null",
    "value": "null",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 198,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 233,
    "end": 239
  },
  {
    "type": "Null",
    "value": "null",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 252,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 259,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "F4",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 273,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 281,
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
    "value": "B",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
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
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 312,
    "end": 318
  },
  {
    "type": "Null",
    "value": "null",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 332,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 339,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "F5",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 361,
    "end": 367
  },
  {
    "type": "Null",
    "value": "null",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 381,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 388,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "F6",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 402,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Null",
    "value": "null",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 447,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 454,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 475,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 487,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "val",
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
    "value": "T",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 516,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 541,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 561,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 568,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 582,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 589,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 603,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "F4",
    "start": 620,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 625,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 641,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 682,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 689,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 702,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": ">",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 727,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 734,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "F5",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 751,
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
    "value": "B",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 761,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 768,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 776,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 797,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 804,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 816,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 838,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 845,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "F6",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  }
]
```

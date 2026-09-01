__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildError",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 23
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
                "start": 24,
                "end": 25
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 25
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 27,
              "end": 28
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 30,
              "end": 31
            }
          ],
          "start": 23,
          "end": 32
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
                "name": "parent",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 49
              },
              "value": {
                "type": "FunctionExpression",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 51
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 50,
                      "end": 51
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 54
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 64
                        },
                        "typeArguments": null,
                        "start": 63,
                        "end": 64
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 53,
                      "end": 64
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 67
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 66,
                      "end": 67
                    }
                  ],
                  "start": 49,
                  "end": 68
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FileWithErrors",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 86
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
                            "start": 87,
                            "end": 88
                          },
                          "typeArguments": null,
                          "start": 87,
                          "end": 88
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 91
                          },
                          "typeArguments": null,
                          "start": 90,
                          "end": 91
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
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
                      "start": 86,
                      "end": 95
                    },
                    "start": 72,
                    "end": 95
                  },
                  "start": 70,
                  "end": 95
                },
                "body": {
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
                        "start": 109,
                        "end": 118
                      },
                      "start": 102,
                      "end": 119
                    }
                  ],
                  "start": 96,
                  "end": 123
                },
                "expression": false,
                "start": 49,
                "end": 123
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 36,
              "end": 123
            }
          ],
          "start": 32,
          "end": 125
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FileWithErrors",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 153
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
                "start": 154,
                "end": 155
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 154,
              "end": 155
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 158
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 157,
              "end": 158
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 160,
              "end": 161
            }
          ],
          "start": 153,
          "end": 162
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
                "name": "errors",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 179
              },
              "value": {
                "type": "FunctionExpression",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 181
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 180,
                      "end": 181
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 184
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 194
                        },
                        "typeArguments": null,
                        "start": 193,
                        "end": 194
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 183,
                      "end": 194
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 197
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 196,
                      "end": 197
                    }
                  ],
                  "start": 179,
                  "end": 198
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 212
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
                              "start": 213,
                              "end": 214
                            },
                            "typeArguments": null,
                            "start": 213,
                            "end": 214
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 216,
                              "end": 217
                            },
                            "typeArguments": null,
                            "start": 216,
                            "end": 217
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 219,
                              "end": 220
                            },
                            "typeArguments": null,
                            "start": 219,
                            "end": 220
                          }
                        ],
                        "start": 212,
                        "end": 221
                      },
                      "start": 202,
                      "end": 221
                    },
                    "start": 202,
                    "end": 223
                  },
                  "start": 200,
                  "end": 223
                },
                "body": {
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
                        "start": 237,
                        "end": 246
                      },
                      "start": 230,
                      "end": 247
                    }
                  ],
                  "start": 224,
                  "end": 251
                },
                "expression": false,
                "start": 179,
                "end": 251
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 166,
              "end": 251
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "parent",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 267
              },
              "value": {
                "type": "FunctionExpression",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 269
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 268,
                      "end": 269
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
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
                        "typeArguments": null,
                        "start": 281,
                        "end": 282
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 271,
                      "end": 282
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 285
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 284,
                      "end": 285
                    }
                  ],
                  "start": 267,
                  "end": 286
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BuildResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 301
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
                            "start": 302,
                            "end": 303
                          },
                          "typeArguments": null,
                          "start": 302,
                          "end": 303
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 305,
                            "end": 306
                          },
                          "typeArguments": null,
                          "start": 305,
                          "end": 306
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 308,
                            "end": 309
                          },
                          "typeArguments": null,
                          "start": 308,
                          "end": 309
                        }
                      ],
                      "start": 301,
                      "end": 310
                    },
                    "start": 290,
                    "end": 310
                  },
                  "start": 288,
                  "end": 310
                },
                "body": {
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
                        "start": 324,
                        "end": 333
                      },
                      "start": 317,
                      "end": 334
                    }
                  ],
                  "start": 311,
                  "end": 338
                },
                "expression": false,
                "start": 267,
                "end": 338
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 254,
              "end": 338
            }
          ],
          "start": 162,
          "end": 340
        },
        "abstract": false,
        "declare": false,
        "start": 133,
        "end": 340
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 126,
      "end": 340
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 354,
          "end": 365
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
                "start": 366,
                "end": 367
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 366,
              "end": 367
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 369,
              "end": 370
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 373
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 372,
              "end": 373
            }
          ],
          "start": 365,
          "end": 374
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
                "name": "merge",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 390
              },
              "value": {
                "type": "FunctionExpression",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 392
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 391,
                      "end": 392
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 395
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 405
                        },
                        "typeArguments": null,
                        "start": 404,
                        "end": 405
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 394,
                      "end": 405
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 408
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 407,
                      "end": 408
                    }
                  ],
                  "start": 390,
                  "end": 409
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BuildResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 428
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
                                "start": 429,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 429,
                              "end": 430
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 432,
                                "end": 433
                              },
                              "typeArguments": null,
                              "start": 432,
                              "end": 433
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 435,
                                "end": 436
                              },
                              "typeArguments": null,
                              "start": 435,
                              "end": 436
                            }
                          ],
                          "start": 428,
                          "end": 437
                        },
                        "start": 417,
                        "end": 437
                      },
                      "start": 415,
                      "end": 437
                    },
                    "start": 410,
                    "end": 437
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 440,
                    "end": 444
                  },
                  "start": 438,
                  "end": 444
                },
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 451,
                                      "end": 452
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 453,
                                      "end": 454
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 451,
                                    "end": 454
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 455,
                                    "end": 456
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 451,
                                  "end": 456
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 457,
                                  "end": 458
                                },
                                "optional": false,
                                "computed": false,
                                "start": 451,
                                "end": 458
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 459,
                                "end": 460
                              },
                              "optional": false,
                              "computed": false,
                              "start": 451,
                              "end": 460
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 461,
                              "end": 462
                            },
                            "optional": false,
                            "computed": false,
                            "start": 451,
                            "end": 462
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "g",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 464
                          },
                          "optional": false,
                          "computed": false,
                          "start": 451,
                          "end": 464
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 467,
                          "end": 468
                        },
                        "start": 451,
                        "end": 468
                      },
                      "directive": null,
                      "start": 451,
                      "end": 469
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
                            "name": "removedFiles",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 474,
                            "end": 486
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "forEach",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 487,
                            "end": 494
                          },
                          "optional": false,
                          "computed": false,
                          "start": 474,
                          "end": 494
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
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
                                    "start": 496,
                                    "end": 497
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 496,
                                  "end": 497
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 499,
                                    "end": 500
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 509,
                                      "end": 510
                                    },
                                    "typeArguments": null,
                                    "start": 509,
                                    "end": 510
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 499,
                                  "end": 510
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 512,
                                    "end": 513
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 512,
                                  "end": 513
                                }
                              ],
                              "start": 495,
                              "end": 514
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "each",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "FileWithErrors",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 521,
                                      "end": 535
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
                                            "start": 536,
                                            "end": 537
                                          },
                                          "typeArguments": null,
                                          "start": 536,
                                          "end": 537
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 539,
                                            "end": 540
                                          },
                                          "typeArguments": null,
                                          "start": 539,
                                          "end": 540
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 542,
                                            "end": 543
                                          },
                                          "typeArguments": null,
                                          "start": 542,
                                          "end": 543
                                        }
                                      ],
                                      "start": 535,
                                      "end": 544
                                    },
                                    "start": 521,
                                    "end": 544
                                  },
                                  "start": 519,
                                  "end": 544
                                },
                                "start": 515,
                                "end": 544
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
                                        "type": "ThisExpression",
                                        "start": 557,
                                        "end": 561
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "removeFile",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 562,
                                        "end": 572
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 557,
                                      "end": 572
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "each",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 573,
                                        "end": 577
                                      }
                                    ],
                                    "optional": false,
                                    "start": 557,
                                    "end": 578
                                  },
                                  "directive": null,
                                  "start": 557,
                                  "end": 579
                                }
                              ],
                              "start": 549,
                              "end": 585
                            },
                            "id": null,
                            "generator": false,
                            "start": 495,
                            "end": 585
                          }
                        ],
                        "optional": false,
                        "start": 474,
                        "end": 586
                      },
                      "directive": null,
                      "start": 474,
                      "end": 587
                    }
                  ],
                  "start": 445,
                  "end": 591
                },
                "expression": false,
                "start": 390,
                "end": 591
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 378,
              "end": 591
            }
          ],
          "start": 374,
          "end": 593
        },
        "abstract": false,
        "declare": false,
        "start": 348,
        "end": 593
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 341,
      "end": 593
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 593
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "BuildError",
    "start": 13,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 36,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 55,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "FileWithErrors",
    "start": 72,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 102,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 109,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "FileWithErrors",
    "start": 139,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 166,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 185,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "BuildError",
    "start": 202,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 219,
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
    "value": "[",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 230,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 237,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 254,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": ",",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": ")",
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
    "value": "BuildResult",
    "start": 290,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 317,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 324,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 341,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 348,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "BuildResult",
    "start": 354,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 378,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "merge",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 396,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 407,
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
    "value": "other",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "BuildResult",
    "start": 417,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "removedFiles",
    "start": 474,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 487,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 501,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "each",
    "start": 515,
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
    "value": "FileWithErrors",
    "start": 521,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "removeFile",
    "start": 562,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "each",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  }
]
```

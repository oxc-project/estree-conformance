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
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 32
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
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "typeArguments": null,
            "start": 38,
            "end": 39
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 42,
            "end": 51
          }
        ],
        "start": 38,
        "end": 51
      },
      "declare": false,
      "start": 22,
      "end": 52
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "concatMaybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 81
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 82,
            "end": 83
          }
        ],
        "start": 81,
        "end": 84
      },
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
            "start": 88,
            "end": 92
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Maybe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 100
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
                            "start": 101,
                            "end": 102
                          },
                          "typeArguments": null,
                          "start": 101,
                          "end": 102
                        }
                      ],
                      "start": 100,
                      "end": 103
                    },
                    "start": 95,
                    "end": 103
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Maybe",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 111
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
                              "start": 112,
                              "end": 113
                            },
                            "typeArguments": null,
                            "start": 112,
                            "end": 113
                          }
                        ],
                        "start": 111,
                        "end": 114
                      },
                      "start": 106,
                      "end": 114
                    },
                    "start": 106,
                    "end": 116
                  }
                ],
                "start": 95,
                "end": 116
              },
              "start": 94,
              "end": 119
            },
            "start": 92,
            "end": 119
          },
          "value": null,
          "start": 85,
          "end": 119
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "typeArguments": null,
            "start": 122,
            "end": 123
          },
          "start": 122,
          "end": 125
        },
        "start": 120,
        "end": 125
      },
      "body": null,
      "expression": false,
      "start": 53,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "concatMaybe",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 138
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 140,
                "end": 141
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 143,
                "end": 144
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 146,
                "end": 147
              }
            ],
            "start": 139,
            "end": 148
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 150,
            "end": 151
          }
        ],
        "optional": false,
        "start": 127,
        "end": 152
      },
      "directive": null,
      "start": 127,
      "end": 153
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 189
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 188,
                      "end": 189
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 192
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 191,
                      "end": 192
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 195
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 194,
                      "end": 195
                    }
                  ],
                  "start": 187,
                  "end": 196
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "com",
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
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Iterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 208,
                                  "end": 216
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 217,
                                        "end": 218
                                      },
                                      "typeArguments": null,
                                      "start": 217,
                                      "end": 218
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 220,
                                        "end": 221
                                      },
                                      "typeArguments": null,
                                      "start": 220,
                                      "end": 221
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 223,
                                        "end": 224
                                      },
                                      "typeArguments": null,
                                      "start": 223,
                                      "end": 224
                                    }
                                  ],
                                  "start": 216,
                                  "end": 225
                                },
                                "start": 208,
                                "end": 225
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AsyncIterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 228,
                                  "end": 241
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 242,
                                        "end": 243
                                      },
                                      "typeArguments": null,
                                      "start": 242,
                                      "end": 243
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 245,
                                        "end": 246
                                      },
                                      "typeArguments": null,
                                      "start": 245,
                                      "end": 246
                                    },
                                    {
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
                                    }
                                  ],
                                  "start": 241,
                                  "end": 250
                                },
                                "start": 228,
                                "end": 250
                              }
                            ],
                            "start": 208,
                            "end": 250
                          },
                          "start": 205,
                          "end": 250
                        },
                        "start": 202,
                        "end": 250
                      },
                      "start": 200,
                      "end": 250
                    },
                    "start": 197,
                    "end": 250
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
                      "start": 255,
                      "end": 262
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
                            "start": 263,
                            "end": 264
                          },
                          "typeArguments": null,
                          "start": 263,
                          "end": 264
                        }
                      ],
                      "start": 262,
                      "end": 265
                    },
                    "start": 255,
                    "end": 265
                  },
                  "start": 252,
                  "end": 265
                },
                "start": 187,
                "end": 265
              },
              "start": 185,
              "end": 265
            },
            "start": 184,
            "end": 265
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
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
                    "start": 275,
                    "end": 276
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 275,
                  "end": 276
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 279
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 278,
                  "end": 279
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 282
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 281,
                  "end": 282
                }
              ],
              "start": 274,
              "end": 283
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "com",
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 295,
                              "end": 303
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 304,
                                    "end": 305
                                  },
                                  "typeArguments": null,
                                  "start": 304,
                                  "end": 305
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 307,
                                    "end": 308
                                  },
                                  "typeArguments": null,
                                  "start": 307,
                                  "end": 308
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 310,
                                    "end": 311
                                  },
                                  "typeArguments": null,
                                  "start": 310,
                                  "end": 311
                                }
                              ],
                              "start": 303,
                              "end": 312
                            },
                            "start": 295,
                            "end": 312
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AsyncIterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 328
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 329,
                                    "end": 330
                                  },
                                  "typeArguments": null,
                                  "start": 329,
                                  "end": 330
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 332,
                                    "end": 333
                                  },
                                  "typeArguments": null,
                                  "start": 332,
                                  "end": 333
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 335,
                                    "end": 336
                                  },
                                  "typeArguments": null,
                                  "start": 335,
                                  "end": 336
                                }
                              ],
                              "start": 328,
                              "end": 337
                            },
                            "start": 315,
                            "end": 337
                          }
                        ],
                        "start": 295,
                        "end": 337
                      },
                      "start": 292,
                      "end": 337
                    },
                    "start": 289,
                    "end": 337
                  },
                  "start": 287,
                  "end": 337
                },
                "start": 284,
                "end": 337
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
                  "start": 340,
                  "end": 347
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
                        "start": 348,
                        "end": 349
                      },
                      "typeArguments": null,
                      "start": 348,
                      "end": 349
                    }
                  ],
                  "start": 347,
                  "end": 350
                },
                "start": 340,
                "end": 350
              },
              "start": 338,
              "end": 350
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "com",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 367
                  },
                  "start": 358,
                  "end": 368
                }
              ],
              "start": 354,
              "end": 370
            },
            "id": null,
            "generator": false,
            "start": 268,
            "end": 370
          },
          "definite": false,
          "start": 184,
          "end": 370
        }
      ],
      "declare": false,
      "start": 178,
      "end": 371
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 387
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
              "start": 388,
              "end": 389
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 388,
            "end": 389
          }
        ],
        "start": 387,
        "end": 390
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 401
            },
            "computed": false,
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 410
                    },
                    "typeArguments": null,
                    "start": 409,
                    "end": 410
                  },
                  "start": 407,
                  "end": 410
                },
                "start": 402,
                "end": 410
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 413,
                "end": 417
              },
              "start": 411,
              "end": 417
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 397,
            "end": 418
          }
        ],
        "start": 391,
        "end": 420
      },
      "declare": false,
      "start": 373,
      "end": 420
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 436
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
              "start": 437,
              "end": 438
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 437,
            "end": 438
          }
        ],
        "start": 436,
        "end": 439
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 450
            },
            "computed": false,
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 458,
                          "end": 459
                        },
                        "typeArguments": null,
                        "start": 458,
                        "end": 459
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 462,
                          "end": 473
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
                                "start": 474,
                                "end": 475
                              },
                              "typeArguments": null,
                              "start": 474,
                              "end": 475
                            }
                          ],
                          "start": 473,
                          "end": 476
                        },
                        "start": 462,
                        "end": 476
                      }
                    ],
                    "start": 458,
                    "end": 476
                  },
                  "start": 456,
                  "end": 476
                },
                "start": 451,
                "end": 476
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 479,
                "end": 483
              },
              "start": 477,
              "end": 483
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 446,
            "end": 484
          }
        ],
        "start": 440,
        "end": 486
      },
      "declare": false,
      "start": 422,
      "end": 486
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 506
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 505,
                      "end": 506
                    }
                  ],
                  "start": 504,
                  "end": 507
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 511,
                              "end": 515
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
                                    "start": 516,
                                    "end": 517
                                  },
                                  "typeArguments": null,
                                  "start": 516,
                                  "end": 517
                                }
                              ],
                              "start": 515,
                              "end": 518
                            },
                            "start": 511,
                            "end": 518
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 521,
                              "end": 525
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
                                    "start": 526,
                                    "end": 527
                                  },
                                  "typeArguments": null,
                                  "start": 526,
                                  "end": 527
                                }
                              ],
                              "start": 525,
                              "end": 528
                            },
                            "start": 521,
                            "end": 528
                          }
                        ],
                        "start": 511,
                        "end": 528
                      },
                      "start": 509,
                      "end": 528
                    },
                    "start": 508,
                    "end": 528
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
                      "start": 533,
                      "end": 540
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
                            "start": 541,
                            "end": 542
                          },
                          "typeArguments": null,
                          "start": 541,
                          "end": 542
                        }
                      ],
                      "start": 540,
                      "end": 543
                    },
                    "start": 533,
                    "end": 543
                  },
                  "start": 530,
                  "end": 543
                },
                "start": 504,
                "end": 543
              },
              "start": 502,
              "end": 543
            },
            "start": 500,
            "end": 543
          },
          "init": null,
          "definite": false,
          "start": 500,
          "end": 543
        }
      ],
      "declare": true,
      "start": 488,
      "end": 544
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 562,
                        "end": 563
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 562,
                      "end": 563
                    }
                  ],
                  "start": 561,
                  "end": 564
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 572
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
                                    "start": 573,
                                    "end": 574
                                  },
                                  "typeArguments": null,
                                  "start": 573,
                                  "end": 574
                                }
                              ],
                              "start": 572,
                              "end": 575
                            },
                            "start": 568,
                            "end": 575
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 578,
                              "end": 582
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
                                    "start": 583,
                                    "end": 584
                                  },
                                  "typeArguments": null,
                                  "start": 583,
                                  "end": 584
                                }
                              ],
                              "start": 582,
                              "end": 585
                            },
                            "start": 578,
                            "end": 585
                          }
                        ],
                        "start": 568,
                        "end": 585
                      },
                      "start": 566,
                      "end": 585
                    },
                    "start": 565,
                    "end": 585
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
                      "start": 590,
                      "end": 597
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
                            "start": 598,
                            "end": 599
                          },
                          "typeArguments": null,
                          "start": 598,
                          "end": 599
                        }
                      ],
                      "start": 597,
                      "end": 600
                    },
                    "start": 590,
                    "end": 600
                  },
                  "start": 587,
                  "end": 600
                },
                "start": 561,
                "end": 600
              },
              "start": 559,
              "end": 600
            },
            "start": 557,
            "end": 600
          },
          "init": null,
          "definite": false,
          "start": 557,
          "end": 600
        }
      ],
      "declare": true,
      "start": 545,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 603,
          "end": 605
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 610
        },
        "start": 603,
        "end": 610
      },
      "directive": null,
      "start": 603,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 614
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 619
        },
        "start": 612,
        "end": 619
      },
      "directive": null,
      "start": 612,
      "end": 620
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 631
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
              "start": 632,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 633
          }
        ],
        "start": 631,
        "end": 634
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 647
            },
            "computed": false,
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 656
                    },
                    "typeArguments": null,
                    "start": 655,
                    "end": 656
                  },
                  "start": 653,
                  "end": 656
                },
                "start": 648,
                "end": 656
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 659,
                "end": 663
              },
              "start": 657,
              "end": 663
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 643,
            "end": 664
          }
        ],
        "start": 637,
        "end": 666
      },
      "declare": false,
      "start": 622,
      "end": 666
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 677
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
              "start": 678,
              "end": 679
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 678,
            "end": 679
          }
        ],
        "start": 677,
        "end": 680
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 693
            },
            "computed": false,
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 701,
                          "end": 702
                        },
                        "typeArguments": null,
                        "start": 701,
                        "end": 702
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 705,
                          "end": 716
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
                                "start": 717,
                                "end": 718
                              },
                              "typeArguments": null,
                              "start": 717,
                              "end": 718
                            }
                          ],
                          "start": 716,
                          "end": 719
                        },
                        "start": 705,
                        "end": 719
                      }
                    ],
                    "start": 701,
                    "end": 719
                  },
                  "start": 699,
                  "end": 719
                },
                "start": 694,
                "end": 719
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 722,
                "end": 726
              },
              "start": 720,
              "end": 726
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 689,
            "end": 727
          }
        ],
        "start": 683,
        "end": 729
      },
      "declare": false,
      "start": 668,
      "end": 729
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 749
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 748,
                      "end": 749
                    }
                  ],
                  "start": 747,
                  "end": 750
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 754,
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
                                    "name": "T",
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
                            "start": 754,
                            "end": 761
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 764,
                              "end": 768
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
                                    "start": 769,
                                    "end": 770
                                  },
                                  "typeArguments": null,
                                  "start": 769,
                                  "end": 770
                                }
                              ],
                              "start": 768,
                              "end": 771
                            },
                            "start": 764,
                            "end": 771
                          }
                        ],
                        "start": 754,
                        "end": 771
                      },
                      "start": 752,
                      "end": 771
                    },
                    "start": 751,
                    "end": 771
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
                      "start": 776,
                      "end": 783
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
                            "start": 784,
                            "end": 785
                          },
                          "typeArguments": null,
                          "start": 784,
                          "end": 785
                        }
                      ],
                      "start": 783,
                      "end": 786
                    },
                    "start": 776,
                    "end": 786
                  },
                  "start": 773,
                  "end": 786
                },
                "start": 747,
                "end": 786
              },
              "start": 745,
              "end": 786
            },
            "start": 743,
            "end": 786
          },
          "init": null,
          "definite": false,
          "start": 743,
          "end": 786
        }
      ],
      "declare": true,
      "start": 731,
      "end": 787
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 805,
                        "end": 806
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 805,
                      "end": 806
                    }
                  ],
                  "start": 804,
                  "end": 807
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 811,
                              "end": 815
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
                                    "start": 816,
                                    "end": 817
                                  },
                                  "typeArguments": null,
                                  "start": 816,
                                  "end": 817
                                }
                              ],
                              "start": 815,
                              "end": 818
                            },
                            "start": 811,
                            "end": 818
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 821,
                              "end": 825
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
                                    "start": 826,
                                    "end": 827
                                  },
                                  "typeArguments": null,
                                  "start": 826,
                                  "end": 827
                                }
                              ],
                              "start": 825,
                              "end": 828
                            },
                            "start": 821,
                            "end": 828
                          }
                        ],
                        "start": 811,
                        "end": 828
                      },
                      "start": 809,
                      "end": 828
                    },
                    "start": 808,
                    "end": 828
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
                      "start": 833,
                      "end": 840
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
                            "start": 841,
                            "end": 842
                          },
                          "typeArguments": null,
                          "start": 841,
                          "end": 842
                        }
                      ],
                      "start": 840,
                      "end": 843
                    },
                    "start": 833,
                    "end": 843
                  },
                  "start": 830,
                  "end": 843
                },
                "start": 804,
                "end": 843
              },
              "start": 802,
              "end": 843
            },
            "start": 800,
            "end": 843
          },
          "init": null,
          "definite": false,
          "start": 800,
          "end": 843
        }
      ],
      "declare": true,
      "start": 788,
      "end": 844
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 846,
          "end": 848
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 853
        },
        "start": 846,
        "end": 853
      },
      "directive": null,
      "start": 846,
      "end": 854
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 855,
          "end": 857
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 860,
          "end": 862
        },
        "start": 855,
        "end": 862
      },
      "directive": null,
      "start": 855,
      "end": 863
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 908
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 910
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 909,
            "end": 910
          }
        ],
        "start": 908,
        "end": 911
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  },
                  "start": 917,
                  "end": 925
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 928,
                    "end": 936
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
                          "start": 937,
                          "end": 938
                        },
                        "typeArguments": null,
                        "start": 937,
                        "end": 938
                      }
                    ],
                    "start": 936,
                    "end": 939
                  },
                  "start": 928,
                  "end": 939
                }
              ],
              "start": 917,
              "end": 939
            },
            "start": 915,
            "end": 939
          },
          "start": 912,
          "end": 939
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
            "start": 942,
            "end": 943
          },
          "typeArguments": null,
          "start": 942,
          "end": 943
        },
        "start": 940,
        "end": 943
      },
      "body": null,
      "expression": false,
      "start": 887,
      "end": 944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 966
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 968
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 967,
            "end": 968
          }
        ],
        "start": 966,
        "end": 969
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 975,
                    "end": 981
                  },
                  "start": 975,
                  "end": 983
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 987
                  },
                  "typeArguments": null,
                  "start": 986,
                  "end": 987
                }
              ],
              "start": 975,
              "end": 987
            },
            "start": 973,
            "end": 987
          },
          "start": 970,
          "end": 987
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
            "start": 990,
            "end": 991
          },
          "typeArguments": null,
          "start": 990,
          "end": 991
        },
        "start": 988,
        "end": 991
      },
      "body": null,
      "expression": false,
      "start": 945,
      "end": 992
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
            "name": "sa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1010,
                  "end": 1016
                },
                "start": 1010,
                "end": 1018
              },
              "start": 1008,
              "end": 1018
            },
            "start": 1006,
            "end": 1018
          },
          "init": null,
          "definite": false,
          "start": 1006,
          "end": 1018
        }
      ],
      "declare": true,
      "start": 994,
      "end": 1019
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
            "name": "sx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1036,
                      "end": 1042
                    },
                    "start": 1036,
                    "end": 1044
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
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1049,
                          "end": 1054
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1056,
                            "end": 1062
                          },
                          "start": 1054,
                          "end": 1062
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1049,
                        "end": 1062
                      }
                    ],
                    "start": 1047,
                    "end": 1064
                  }
                ],
                "start": 1036,
                "end": 1064
              },
              "start": 1034,
              "end": 1064
            },
            "start": 1032,
            "end": 1064
          },
          "init": null,
          "definite": false,
          "start": 1032,
          "end": 1064
        }
      ],
      "declare": true,
      "start": 1020,
      "end": 1065
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1071,
            "end": 1073
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1080
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1083
              }
            ],
            "optional": false,
            "start": 1076,
            "end": 1084
          },
          "definite": false,
          "start": 1071,
          "end": 1084
        }
      ],
      "declare": false,
      "start": 1067,
      "end": 1085
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1101,
            "end": 1103
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1110
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sx",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1113
              }
            ],
            "optional": false,
            "start": 1106,
            "end": 1114
          },
          "definite": false,
          "start": 1101,
          "end": 1114
        }
      ],
      "declare": false,
      "start": 1097,
      "end": 1115
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1132,
            "end": 1134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1141
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1144
              }
            ],
            "optional": false,
            "start": 1137,
            "end": 1145
          },
          "definite": false,
          "start": 1132,
          "end": 1145
        }
      ],
      "declare": false,
      "start": 1128,
      "end": 1146
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1165
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1168,
              "end": 1172
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sx",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1175
              }
            ],
            "optional": false,
            "start": 1168,
            "end": 1176
          },
          "definite": false,
          "start": 1163,
          "end": 1176
        }
      ],
      "declare": false,
      "start": 1159,
      "end": 1177
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1246
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
              "start": 1247,
              "end": 1248
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1247,
            "end": 1248
          }
        ],
        "start": 1246,
        "end": 1249
      },
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
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 1252,
              "end": 1257
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
                  "start": 1259,
                  "end": 1260
                },
                "typeArguments": null,
                "start": 1259,
                "end": 1260
              },
              "start": 1257,
              "end": 1260
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
            "start": 1252,
            "end": 1260
          }
        ],
        "start": 1250,
        "end": 1262
      },
      "abstract": false,
      "declare": true,
      "start": 1223,
      "end": 1262
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1276,
          "end": 1290
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
                "start": 1291,
                "end": 1292
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1291,
              "end": 1292
            }
          ],
          "start": 1290,
          "end": 1293
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
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
                    "start": 1308,
                    "end": 1309
                  },
                  "typeArguments": null,
                  "start": 1308,
                  "end": 1309
                },
                "start": 1306,
                "end": 1309
              },
              "start": 1301,
              "end": 1309
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 1314,
                "end": 1323
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1325
                    },
                    "typeArguments": null,
                    "start": 1324,
                    "end": 1325
                  }
                ],
                "start": 1323,
                "end": 1326
              },
              "start": 1314,
              "end": 1326
            },
            "start": 1311,
            "end": 1326
          },
          "start": 1296,
          "end": 1326
        },
        "declare": false,
        "start": 1271,
        "end": 1327
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1264,
      "end": 1327
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FunctionComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 1340,
          "end": 1357
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
                "start": 1358,
                "end": 1359
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1358,
              "end": 1359
            }
          ],
          "start": 1357,
          "end": 1360
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
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
                    "start": 1371,
                    "end": 1372
                  },
                  "typeArguments": null,
                  "start": 1371,
                  "end": 1372
                },
                "start": 1369,
                "end": 1372
              },
              "start": 1364,
              "end": 1372
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNullKeyword",
              "start": 1377,
              "end": 1381
            },
            "start": 1374,
            "end": 1381
          },
          "start": 1363,
          "end": 1381
        },
        "declare": false,
        "start": 1335,
        "end": 1382
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1328,
      "end": 1382
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1396,
          "end": 1409
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
                "start": 1410,
                "end": 1411
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1410,
              "end": 1411
            }
          ],
          "start": 1409,
          "end": 1412
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 1415,
                "end": 1432
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1433,
                      "end": 1434
                    },
                    "typeArguments": null,
                    "start": 1433,
                    "end": 1434
                  }
                ],
                "start": 1432,
                "end": 1435
              },
              "start": 1415,
              "end": 1435
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1438,
                "end": 1452
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1454
                    },
                    "typeArguments": null,
                    "start": 1453,
                    "end": 1454
                  }
                ],
                "start": 1452,
                "end": 1455
              },
              "start": 1438,
              "end": 1455
            }
          ],
          "start": 1415,
          "end": 1455
        },
        "declare": false,
        "start": 1391,
        "end": 1456
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1384,
      "end": 1456
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RouteComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 1475,
          "end": 1494
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
                "name": "route",
                "optional": false,
                "typeAnnotation": null,
                "start": 1497,
                "end": 1502
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1504,
                  "end": 1510
                },
                "start": 1502,
                "end": 1510
              },
              "accessibility": null,
              "static": false,
              "start": 1497,
              "end": 1510
            }
          ],
          "start": 1495,
          "end": 1512
        },
        "declare": false,
        "start": 1465,
        "end": 1512
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1458,
      "end": 1512
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withRouter",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1541
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1546
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RouteComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1555,
                "end": 1574
              },
              "typeArguments": null,
              "start": 1555,
              "end": 1574
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1545,
            "end": 1574
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1578,
              "end": 1579
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1601
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1602,
                      "end": 1603
                    },
                    "typeArguments": null,
                    "start": 1602,
                    "end": 1603
                  }
                ],
                "start": 1601,
                "end": 1604
              },
              "start": 1588,
              "end": 1604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1578,
            "end": 1604
          }
        ],
        "start": 1541,
        "end": 1606
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1621,
                    "end": 1622
                  },
                  "typeArguments": null,
                  "start": 1621,
                  "end": 1622
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1625,
                    "end": 1638
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1639,
                          "end": 1640
                        },
                        "typeArguments": null,
                        "start": 1639,
                        "end": 1640
                      }
                    ],
                    "start": 1638,
                    "end": 1641
                  },
                  "start": 1625,
                  "end": 1641
                }
              ],
              "start": 1621,
              "end": 1641
            },
            "start": 1619,
            "end": 1641
          },
          "start": 1610,
          "end": 1641
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 1645,
            "end": 1659
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Omit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1660,
                  "end": 1664
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1666
                      },
                      "typeArguments": null,
                      "start": 1665,
                      "end": 1666
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RouteComponentProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1674,
                          "end": 1693
                        },
                        "typeArguments": null,
                        "start": 1674,
                        "end": 1693
                      },
                      "start": 1668,
                      "end": 1693
                    }
                  ],
                  "start": 1664,
                  "end": 1694
                },
                "start": 1660,
                "end": 1694
              }
            ],
            "start": 1659,
            "end": 1695
          },
          "start": 1645,
          "end": 1695
        },
        "start": 1643,
        "end": 1695
      },
      "body": null,
      "expression": false,
      "start": 1514,
      "end": 1696
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 1708,
        "end": 1713
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RouteComponentProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 1722,
            "end": 1741
          },
          "typeArguments": null,
          "start": 1722,
          "end": 1741
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
              "name": "username",
              "optional": false,
              "typeAnnotation": null,
              "start": 1744,
              "end": 1752
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1754,
                "end": 1760
              },
              "start": 1752,
              "end": 1760
            },
            "accessibility": null,
            "static": false,
            "start": 1744,
            "end": 1760
          }
        ],
        "start": 1742,
        "end": 1762
      },
      "declare": false,
      "start": 1698,
      "end": 1762
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
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1791,
                  "end": 1804
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1805,
                        "end": 1810
                      },
                      "typeArguments": null,
                      "start": 1805,
                      "end": 1810
                    }
                  ],
                  "start": 1804,
                  "end": 1811
                },
                "start": 1791,
                "end": 1811
              },
              "start": 1789,
              "end": 1811
            },
            "start": 1778,
            "end": 1811
          },
          "init": null,
          "definite": false,
          "start": 1778,
          "end": 1811
        }
      ],
      "declare": true,
      "start": 1764,
      "end": 1812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRouter",
          "optional": false,
          "typeAnnotation": null,
          "start": 1814,
          "end": 1824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1836
          }
        ],
        "optional": false,
        "start": 1814,
        "end": 1837
      },
      "directive": null,
      "start": 1814,
      "end": 1838
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1867,
        "end": 1869
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
              "start": 1870,
              "end": 1871
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1870,
            "end": 1871
          }
        ],
        "start": 1869,
        "end": 1872
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1877,
                  "end": 1878
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
                      "start": 1880,
                      "end": 1881
                    },
                    "typeArguments": null,
                    "start": 1880,
                    "end": 1881
                  },
                  "start": 1878,
                  "end": 1881
                },
                "accessibility": null,
                "static": false,
                "start": 1877,
                "end": 1881
              }
            ],
            "start": 1875,
            "end": 1883
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1888,
                  "end": 1889
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
                      "start": 1891,
                      "end": 1892
                    },
                    "typeArguments": null,
                    "start": 1891,
                    "end": 1892
                  },
                  "start": 1889,
                  "end": 1892
                },
                "accessibility": null,
                "static": false,
                "start": 1888,
                "end": 1892
              }
            ],
            "start": 1886,
            "end": 1894
          }
        ],
        "start": 1875,
        "end": 1894
      },
      "declare": false,
      "start": 1862,
      "end": 1895
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1975,
        "end": 1978
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1979,
              "end": 1980
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1979,
            "end": 1980
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1982,
              "end": 1983
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1982,
            "end": 1983
          }
        ],
        "start": 1978,
        "end": 1984
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "start": 1990,
                    "end": 1991
                  },
                  "typeArguments": null,
                  "start": 1990,
                  "end": 1991
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1994,
                    "end": 1996
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
                          "start": 1997,
                          "end": 1998
                        },
                        "typeArguments": null,
                        "start": 1997,
                        "end": 1998
                      }
                    ],
                    "start": 1996,
                    "end": 1999
                  },
                  "start": 1994,
                  "end": 1999
                }
              ],
              "start": 1990,
              "end": 1999
            },
            "start": 1988,
            "end": 1999
          },
          "start": 1985,
          "end": 1999
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2003,
                "end": 2004
              },
              "typeArguments": null,
              "start": 2003,
              "end": 2004
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2006,
                "end": 2007
              },
              "typeArguments": null,
              "start": 2006,
              "end": 2007
            }
          ],
          "start": 2002,
          "end": 2008
        },
        "start": 2000,
        "end": 2008
      },
      "body": null,
      "expression": false,
      "start": 1958,
      "end": 2009
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2026,
                  "end": 2028
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2029,
                      "end": 2035
                    }
                  ],
                  "start": 2028,
                  "end": 2036
                },
                "start": 2026,
                "end": 2036
              },
              "start": 2024,
              "end": 2036
            },
            "start": 2022,
            "end": 2036
          },
          "init": null,
          "definite": false,
          "start": 2022,
          "end": 2036
        }
      ],
      "declare": true,
      "start": 2010,
      "end": 2037
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 2043,
            "end": 2044
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2047,
              "end": 2050
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ab",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2053
              }
            ],
            "optional": false,
            "start": 2047,
            "end": 2054
          },
          "definite": false,
          "start": 2043,
          "end": 2054
        }
      ],
      "declare": false,
      "start": 2039,
      "end": 2055
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2120,
                        "end": 2121
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2120,
                      "end": 2121
                    }
                  ],
                  "start": 2119,
                  "end": 2122
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2129,
                            "end": 2130
                          },
                          "typeArguments": null,
                          "start": 2129,
                          "end": 2130
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2139,
                            "end": 2143
                          },
                          "start": 2139,
                          "end": 2143
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2146,
                            "end": 2150
                          },
                          "start": 2146,
                          "end": 2150
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 2153,
                            "end": 2158
                          },
                          "start": 2153,
                          "end": 2158
                        },
                        "start": 2129,
                        "end": 2158
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2162,
                        "end": 2169
                      }
                    ],
                    "start": 2128,
                    "end": 2169
                  },
                  "start": 2125,
                  "end": 2169
                },
                "start": 2119,
                "end": 2169
              },
              "start": 2117,
              "end": 2169
            },
            "start": 2116,
            "end": 2169
          },
          "init": null,
          "definite": false,
          "start": 2116,
          "end": 2169
        }
      ],
      "declare": true,
      "start": 2104,
      "end": 2170
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2187,
                        "end": 2188
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2187,
                      "end": 2188
                    }
                  ],
                  "start": 2186,
                  "end": 2189
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2196,
                            "end": 2197
                          },
                          "typeArguments": null,
                          "start": 2196,
                          "end": 2197
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2206,
                            "end": 2210
                          },
                          "start": 2206,
                          "end": 2210
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2213,
                            "end": 2217
                          },
                          "start": 2213,
                          "end": 2217
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 2220,
                            "end": 2225
                          },
                          "start": 2220,
                          "end": 2225
                        },
                        "start": 2196,
                        "end": 2225
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2229,
                        "end": 2236
                      }
                    ],
                    "start": 2195,
                    "end": 2236
                  },
                  "start": 2192,
                  "end": 2236
                },
                "start": 2186,
                "end": 2236
              },
              "start": 2184,
              "end": 2236
            },
            "start": 2183,
            "end": 2236
          },
          "init": null,
          "definite": false,
          "start": 2183,
          "end": 2236
        }
      ],
      "declare": true,
      "start": 2171,
      "end": 2237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 2238,
          "end": 2239
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 2242,
          "end": 2243
        },
        "start": 2238,
        "end": 2243
      },
      "directive": null,
      "start": 2238,
      "end": 2244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 42,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "concatMaybe",
    "start": 70,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "concatMaybe",
    "start": 127,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "com",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 205,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 208,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 228,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "R",
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
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 252,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "com",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 292,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 295,
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
    "value": "S",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 315,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 358,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "com",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 373,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 383,
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
    "value": "T",
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
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 413,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 422,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "Bar1",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "test",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 451,
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
    "value": "T",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 462,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 488,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Bar1",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 530,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 533,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 545,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 557,
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
    "value": "<",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "Bar1",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 587,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 590,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 608,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 622,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 627,
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
    "value": ">",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 668,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 689,
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
    "value": "T",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 705,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 731,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 739,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 754,
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
    "value": "T",
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
    "value": "|",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 773,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 776,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 788,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 796,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 800,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 830,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 833,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 846,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 887,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 895,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 904,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 928,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 945,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 953,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 994,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "sa",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Identifier",
    "value": "extra",
    "start": 1049,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1056,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1071,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "sa",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1101,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1106,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 1111,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1132,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1137,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "sa",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1163,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1168,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1223,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1231,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1237,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1252,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1271,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 1276,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "props",
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
    "value": "P",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1311,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1314,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1328,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 1340,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1364,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1374,
    "end": 1376
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1377,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1384,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1391,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1396,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 1415,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 1438,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1458,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1465,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "RouteComponentProps",
    "start": 1475,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 1497,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1514,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1522,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "withRouter",
    "start": 1531,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1547,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "RouteComponentProps",
    "start": 1555,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1580,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1588,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 1610,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1625,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 1645,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1660,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1668,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "RouteComponentProps",
    "start": 1674,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1698,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 1708,
    "end": 1713
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1714,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "RouteComponentProps",
    "start": 1722,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "username",
    "start": 1744,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1754,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1764,
    "end": 1771
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1772,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 1778,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1791,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 1805,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "withRouter",
    "start": 1814,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 1825,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1862,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1867,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1958,
    "end": 1965
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1966,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1994,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2010,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2018,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 2022,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 2026,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2029,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2039,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2047,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 2051,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2104,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2112,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2125,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2131,
    "end": 2138
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2139,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2146,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2153,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2162,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2171,
    "end": 2178
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2183,
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
    "value": "<",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2192,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2198,
    "end": 2205
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2206,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2213,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2220,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2229,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2243,
    "end": 2244
  }
]
```

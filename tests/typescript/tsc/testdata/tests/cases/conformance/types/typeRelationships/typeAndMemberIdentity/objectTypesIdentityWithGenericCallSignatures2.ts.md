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
        "name": "A",
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 63
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 62,
                    "end": 63
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 65,
                    "end": 66
                  }
                ],
                "start": 61,
                "end": 67
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
                        "start": 71,
                        "end": 72
                      },
                      "typeArguments": null,
                      "start": 71,
                      "end": 72
                    },
                    "start": 69,
                    "end": 72
                  },
                  "start": 68,
                  "end": 72
                },
                {
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "typeArguments": null,
                      "start": 77,
                      "end": 78
                    },
                    "start": 75,
                    "end": 78
                  },
                  "start": 74,
                  "end": 78
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
                    "start": 81,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 81,
                  "end": 82
                },
                "start": 79,
                "end": 82
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
                      "start": 92,
                      "end": 96
                    },
                    "start": 85,
                    "end": 97
                  }
                ],
                "start": 83,
                "end": 99
              },
              "expression": false,
              "start": 61,
              "end": 99
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 99
          }
        ],
        "start": 52,
        "end": 101
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 101
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
        "start": 109,
        "end": 110
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
              "start": 111,
              "end": 112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 112
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 110,
        "end": 116
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 126
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
                        "start": 130,
                        "end": 131
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 131
                    },
                    "start": 128,
                    "end": 131
                  },
                  "start": 127,
                  "end": 131
                },
                {
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 137
                      },
                      "typeArguments": null,
                      "start": 136,
                      "end": 137
                    },
                    "start": 134,
                    "end": 137
                  },
                  "start": 133,
                  "end": 137
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
                    "start": 140,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 141
                },
                "start": 138,
                "end": 141
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
                      "start": 151,
                      "end": 155
                    },
                    "start": 144,
                    "end": 156
                  }
                ],
                "start": 142,
                "end": 158
              },
              "expression": false,
              "start": 126,
              "end": 158
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 123,
            "end": 158
          }
        ],
        "start": 117,
        "end": 160
      },
      "abstract": false,
      "declare": false,
      "start": 103,
      "end": 160
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
        "start": 168,
        "end": 169
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
              "start": 170,
              "end": 171
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 170,
            "end": 171
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 173,
            "end": 174
          }
        ],
        "start": 169,
        "end": 175
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 185
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
                        "start": 189,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 189,
                      "end": 190
                    },
                    "start": 187,
                    "end": 190
                  },
                  "start": 186,
                  "end": 190
                },
                {
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 196
                      },
                      "typeArguments": null,
                      "start": 195,
                      "end": 196
                    },
                    "start": 193,
                    "end": 196
                  },
                  "start": 192,
                  "end": 196
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
                    "start": 199,
                    "end": 200
                  },
                  "typeArguments": null,
                  "start": 199,
                  "end": 200
                },
                "start": 197,
                "end": 200
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
                      "start": 210,
                      "end": 214
                    },
                    "start": 203,
                    "end": 215
                  }
                ],
                "start": 201,
                "end": 217
              },
              "expression": false,
              "start": 185,
              "end": 217
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 182,
            "end": 217
          }
        ],
        "start": 176,
        "end": 219
      },
      "abstract": false,
      "declare": false,
      "start": 162,
      "end": 219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 232
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
              "start": 233,
              "end": 234
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 233,
            "end": 234
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 237
          }
        ],
        "start": 232,
        "end": 238
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 248
            },
            "computed": false,
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "typeArguments": null,
                    "start": 252,
                    "end": 253
                  },
                  "start": 250,
                  "end": 253
                },
                "start": 249,
                "end": 253
              },
              {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "typeArguments": null,
                    "start": 258,
                    "end": 259
                  },
                  "start": 256,
                  "end": 259
                },
                "start": 255,
                "end": 259
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
                  "start": 262,
                  "end": 263
                },
                "typeArguments": null,
                "start": 262,
                "end": 263
              },
              "start": 260,
              "end": 263
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 245,
            "end": 264
          }
        ],
        "start": 239,
        "end": 266
      },
      "declare": false,
      "start": 221,
      "end": 266
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 280
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 290
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 291,
                  "end": 292
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 294,
                  "end": 295
                }
              ],
              "start": 290,
              "end": 296
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
                      "start": 300,
                      "end": 301
                    },
                    "typeArguments": null,
                    "start": 300,
                    "end": 301
                  },
                  "start": 298,
                  "end": 301
                },
                "start": 297,
                "end": 301
              },
              {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 307
                    },
                    "typeArguments": null,
                    "start": 306,
                    "end": 307
                  },
                  "start": 304,
                  "end": 307
                },
                "start": 303,
                "end": 307
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
                  "start": 310,
                  "end": 311
                },
                "typeArguments": null,
                "start": 310,
                "end": 311
              },
              "start": 308,
              "end": 311
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 287,
            "end": 312
          }
        ],
        "start": 281,
        "end": 314
      },
      "declare": false,
      "start": 268,
      "end": 314
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
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 328
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 330
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 329,
                          "end": 330
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 332,
                            "end": 333
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 332,
                          "end": 333
                        }
                      ],
                      "start": 328,
                      "end": 334
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
                        "start": 335,
                        "end": 339
                      },
                      {
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 344,
                              "end": 345
                            },
                            "typeArguments": null,
                            "start": 344,
                            "end": 345
                          },
                          "start": 342,
                          "end": 345
                        },
                        "start": 341,
                        "end": 345
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
                          "start": 348,
                          "end": 349
                        },
                        "typeArguments": null,
                        "start": 348,
                        "end": 349
                      },
                      "start": 346,
                      "end": 349
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 325,
                    "end": 349
                  }
                ],
                "start": 323,
                "end": 351
              },
              "start": 321,
              "end": 351
            },
            "start": 320,
            "end": 351
          },
          "init": null,
          "definite": false,
          "start": 320,
          "end": 351
        }
      ],
      "declare": false,
      "start": 316,
      "end": 351
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
            "start": 356,
            "end": 357
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 365
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
                          "name": "T",
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
                          "name": "U",
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
                      }
                    ],
                    "start": 365,
                    "end": 371
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
                            "start": 375,
                            "end": 376
                          },
                          "typeArguments": null,
                          "start": 375,
                          "end": 376
                        },
                        "start": 373,
                        "end": 376
                      },
                      "start": 372,
                      "end": 376
                    },
                    {
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
                            "name": "U",
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
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 394
                        },
                        "start": 386,
                        "end": 395
                      }
                    ],
                    "start": 384,
                    "end": 397
                  },
                  "expression": false,
                  "start": 365,
                  "end": 397
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 362,
                "end": 397
              }
            ],
            "start": 360,
            "end": 399
          },
          "definite": false,
          "start": 356,
          "end": 399
        }
      ],
      "declare": false,
      "start": 352,
      "end": 400
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 415
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
                "name": "A",
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
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 402,
      "end": 422
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 436
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "start": 438,
            "end": 441
          },
          "start": 437,
          "end": 441
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 423,
      "end": 443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 466
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
              "start": 470,
              "end": 473
            },
            "start": 468,
            "end": 473
          },
          "start": 467,
          "end": 473
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 475,
        "end": 478
      },
      "expression": false,
      "start": 453,
      "end": 478
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 494
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
                "start": 498,
                "end": 499
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 500,
                    "end": 506
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 499,
                "end": 515
              },
              "start": 498,
              "end": 515
            },
            "start": 496,
            "end": 515
          },
          "start": 495,
          "end": 515
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 480,
      "end": 517
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 532
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
                "start": 536,
                "end": 537
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 546,
                    "end": 552
                  }
                ],
                "start": 537,
                "end": 553
              },
              "start": 536,
              "end": 553
            },
            "start": 534,
            "end": 553
          },
          "start": 533,
          "end": 553
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 518,
      "end": 555
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
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
              "type": "TSAnyKeyword",
              "start": 583,
              "end": 586
            },
            "start": 581,
            "end": 586
          },
          "start": 580,
          "end": 586
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 588,
        "end": 591
      },
      "expression": false,
      "start": 565,
      "end": 591
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 602,
        "end": 607
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
                "start": 611,
                "end": 612
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 613,
                    "end": 619
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 621,
                    "end": 627
                  }
                ],
                "start": 612,
                "end": 628
              },
              "start": 611,
              "end": 628
            },
            "start": 609,
            "end": 628
          },
          "start": 608,
          "end": 628
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 593,
      "end": 630
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 645
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
                "start": 649,
                "end": 650
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 651,
                    "end": 657
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 659,
                    "end": 665
                  }
                ],
                "start": 650,
                "end": 666
              },
              "start": 649,
              "end": 666
            },
            "start": 647,
            "end": 666
          },
          "start": 646,
          "end": 666
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 631,
      "end": 668
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 687,
        "end": 692
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
              "start": 696,
              "end": 699
            },
            "start": 694,
            "end": 699
          },
          "start": 693,
          "end": 699
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 701,
        "end": 704
      },
      "expression": false,
      "start": 678,
      "end": 704
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 719
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
                "start": 723,
                "end": 724
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 725,
                    "end": 731
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 733,
                    "end": 739
                  }
                ],
                "start": 724,
                "end": 740
              },
              "start": 723,
              "end": 740
            },
            "start": 721,
            "end": 740
          },
          "start": 720,
          "end": 740
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 706,
      "end": 742
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 761
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 762,
                    "end": 768
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 770,
                    "end": 776
                  }
                ],
                "start": 761,
                "end": 777
              },
              "start": 760,
              "end": 777
            },
            "start": 758,
            "end": 777
          },
          "start": 757,
          "end": 777
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 743,
      "end": 779
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 798,
        "end": 802
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
              "start": 806,
              "end": 809
            },
            "start": 804,
            "end": 809
          },
          "start": 803,
          "end": 809
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 811,
        "end": 814
      },
      "expression": false,
      "start": 789,
      "end": 814
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 825,
        "end": 829
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
                "start": 840,
                "end": 841
              },
              "typeArguments": null,
              "start": 833,
              "end": 841
            },
            "start": 831,
            "end": 841
          },
          "start": 830,
          "end": 841
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 816,
      "end": 843
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 853,
        "end": 857
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
                "start": 868,
                "end": 869
              },
              "typeArguments": null,
              "start": 861,
              "end": 869
            },
            "start": 859,
            "end": 869
          },
          "start": 858,
          "end": 869
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 844,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 894
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
              "start": 898,
              "end": 901
            },
            "start": 896,
            "end": 901
          },
          "start": 895,
          "end": 901
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 903,
        "end": 906
      },
      "expression": false,
      "start": 881,
      "end": 906
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 921
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
                "start": 932,
                "end": 933
              },
              "typeArguments": null,
              "start": 925,
              "end": 933
            },
            "start": 923,
            "end": 933
          },
          "start": 922,
          "end": 933
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 908,
      "end": 935
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 945,
        "end": 949
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
                "start": 960,
                "end": 961
              },
              "typeArguments": null,
              "start": 953,
              "end": 961
            },
            "start": 951,
            "end": 961
          },
          "start": 950,
          "end": 961
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 936,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 986
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
              "start": 990,
              "end": 993
            },
            "start": 988,
            "end": 993
          },
          "start": 987,
          "end": 993
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 995,
        "end": 998
      },
      "expression": false,
      "start": 973,
      "end": 998
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1009,
        "end": 1013
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1018
              },
              "typeArguments": null,
              "start": 1017,
              "end": 1018
            },
            "start": 1015,
            "end": 1018
          },
          "start": 1014,
          "end": 1018
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1000,
      "end": 1020
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1030,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1039
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1040,
                    "end": 1046
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1048,
                    "end": 1054
                  }
                ],
                "start": 1039,
                "end": 1055
              },
              "start": 1038,
              "end": 1055
            },
            "start": 1036,
            "end": 1055
          },
          "start": 1035,
          "end": 1055
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1021,
      "end": 1057
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1077
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
              "start": 1081,
              "end": 1084
            },
            "start": 1079,
            "end": 1084
          },
          "start": 1078,
          "end": 1084
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1086,
        "end": 1089
      },
      "expression": false,
      "start": 1064,
      "end": 1089
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1105
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1110
              },
              "typeArguments": null,
              "start": 1109,
              "end": 1110
            },
            "start": 1107,
            "end": 1110
          },
          "start": 1106,
          "end": 1110
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1091,
      "end": 1112
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1127
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
                "start": 1131,
                "end": 1132
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1133,
                    "end": 1139
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1141,
                    "end": 1147
                  }
                ],
                "start": 1132,
                "end": 1148
              },
              "start": 1131,
              "end": 1148
            },
            "start": 1129,
            "end": 1148
          },
          "start": 1128,
          "end": 1148
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1113,
      "end": 1150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1166,
        "end": 1171
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
              "start": 1175,
              "end": 1178
            },
            "start": 1173,
            "end": 1178
          },
          "start": 1172,
          "end": 1178
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1180,
        "end": 1183
      },
      "expression": false,
      "start": 1157,
      "end": 1183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1194,
        "end": 1198
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1202,
                "end": 1203
              },
              "typeArguments": null,
              "start": 1202,
              "end": 1203
            },
            "start": 1200,
            "end": 1203
          },
          "start": 1199,
          "end": 1203
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1185,
      "end": 1205
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1215,
        "end": 1219
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
                "start": 1223,
                "end": 1224
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1225,
                    "end": 1231
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1233,
                    "end": 1239
                  }
                ],
                "start": 1224,
                "end": 1240
              },
              "start": 1223,
              "end": 1240
            },
            "start": 1221,
            "end": 1240
          },
          "start": 1220,
          "end": 1240
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1206,
      "end": 1242
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1258,
        "end": 1262
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
              "start": 1266,
              "end": 1269
            },
            "start": 1264,
            "end": 1269
          },
          "start": 1263,
          "end": 1269
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1271,
        "end": 1274
      },
      "expression": false,
      "start": 1249,
      "end": 1274
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1285,
        "end": 1289
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1294
              },
              "typeArguments": null,
              "start": 1293,
              "end": 1294
            },
            "start": 1291,
            "end": 1294
          },
          "start": 1290,
          "end": 1294
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1276,
      "end": 1296
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1310
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
                "start": 1321,
                "end": 1322
              },
              "typeArguments": null,
              "start": 1314,
              "end": 1322
            },
            "start": 1312,
            "end": 1322
          },
          "start": 1311,
          "end": 1322
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1297,
      "end": 1324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1352,
        "end": 1356
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
              "start": 1360,
              "end": 1363
            },
            "start": 1358,
            "end": 1363
          },
          "start": 1357,
          "end": 1363
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1365,
        "end": 1368
      },
      "expression": false,
      "start": 1343,
      "end": 1368
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1379,
        "end": 1383
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
                "start": 1387,
                "end": 1388
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1389,
                    "end": 1395
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1397,
                    "end": 1403
                  }
                ],
                "start": 1388,
                "end": 1404
              },
              "start": 1387,
              "end": 1404
            },
            "start": 1385,
            "end": 1404
          },
          "start": 1384,
          "end": 1404
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1370,
      "end": 1406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1416,
        "end": 1420
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
                "start": 1424,
                "end": 1425
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1426,
                    "end": 1432
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1434,
                    "end": 1440
                  }
                ],
                "start": 1425,
                "end": 1441
              },
              "start": 1424,
              "end": 1441
            },
            "start": 1422,
            "end": 1441
          },
          "start": 1421,
          "end": 1441
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1407,
      "end": 1443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1462,
        "end": 1466
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
              "start": 1470,
              "end": 1473
            },
            "start": 1468,
            "end": 1473
          },
          "start": 1467,
          "end": 1473
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1475,
        "end": 1478
      },
      "expression": false,
      "start": 1453,
      "end": 1478
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1489,
        "end": 1493
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
                "start": 1497,
                "end": 1498
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1499,
                    "end": 1505
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1507,
                    "end": 1513
                  }
                ],
                "start": 1498,
                "end": 1514
              },
              "start": 1497,
              "end": 1514
            },
            "start": 1495,
            "end": 1514
          },
          "start": 1494,
          "end": 1514
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1480,
      "end": 1516
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1530
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
                "start": 1534,
                "end": 1535
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1536,
                    "end": 1542
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1544,
                    "end": 1550
                  }
                ],
                "start": 1535,
                "end": 1551
              },
              "start": 1534,
              "end": 1551
            },
            "start": 1532,
            "end": 1551
          },
          "start": 1531,
          "end": 1551
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1517,
      "end": 1553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1572,
        "end": 1576
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
              "start": 1580,
              "end": 1583
            },
            "start": 1578,
            "end": 1583
          },
          "start": 1577,
          "end": 1583
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1585,
        "end": 1588
      },
      "expression": false,
      "start": 1563,
      "end": 1588
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1599,
        "end": 1604
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
                "start": 1608,
                "end": 1609
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1610,
                    "end": 1616
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1618,
                    "end": 1624
                  }
                ],
                "start": 1609,
                "end": 1625
              },
              "start": 1608,
              "end": 1625
            },
            "start": 1606,
            "end": 1625
          },
          "start": 1605,
          "end": 1625
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1590,
      "end": 1627
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1637,
        "end": 1642
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
                "start": 1653,
                "end": 1654
              },
              "typeArguments": null,
              "start": 1646,
              "end": 1654
            },
            "start": 1644,
            "end": 1654
          },
          "start": 1643,
          "end": 1654
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1628,
      "end": 1656
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1672,
        "end": 1677
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
              "start": 1681,
              "end": 1684
            },
            "start": 1679,
            "end": 1684
          },
          "start": 1678,
          "end": 1684
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1686,
        "end": 1689
      },
      "expression": false,
      "start": 1663,
      "end": 1689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1700,
        "end": 1705
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
                "start": 1709,
                "end": 1710
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1711,
                    "end": 1717
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1719,
                    "end": 1725
                  }
                ],
                "start": 1710,
                "end": 1726
              },
              "start": 1709,
              "end": 1726
            },
            "start": 1707,
            "end": 1726
          },
          "start": 1706,
          "end": 1726
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1691,
      "end": 1728
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1743
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
                "start": 1754,
                "end": 1755
              },
              "typeArguments": null,
              "start": 1747,
              "end": 1755
            },
            "start": 1745,
            "end": 1755
          },
          "start": 1744,
          "end": 1755
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1729,
      "end": 1757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1773,
        "end": 1778
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
              "start": 1782,
              "end": 1785
            },
            "start": 1780,
            "end": 1785
          },
          "start": 1779,
          "end": 1785
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1787,
        "end": 1790
      },
      "expression": false,
      "start": 1764,
      "end": 1790
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1806
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
                "start": 1810,
                "end": 1811
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1812,
                    "end": 1818
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1820,
                    "end": 1826
                  }
                ],
                "start": 1811,
                "end": 1827
              },
              "start": 1810,
              "end": 1827
            },
            "start": 1808,
            "end": 1827
          },
          "start": 1807,
          "end": 1827
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1792,
      "end": 1829
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1844
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
                "start": 1848,
                "end": 1849
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1850,
                    "end": 1856
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1858,
                    "end": 1864
                  }
                ],
                "start": 1849,
                "end": 1865
              },
              "start": 1848,
              "end": 1865
            },
            "start": 1846,
            "end": 1865
          },
          "start": 1845,
          "end": 1865
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1830,
      "end": 1867
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1886,
        "end": 1891
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
              "start": 1895,
              "end": 1898
            },
            "start": 1893,
            "end": 1898
          },
          "start": 1892,
          "end": 1898
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1900,
        "end": 1903
      },
      "expression": false,
      "start": 1877,
      "end": 1903
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1914,
        "end": 1920
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
                "start": 1924,
                "end": 1926
              },
              "typeArguments": null,
              "start": 1924,
              "end": 1926
            },
            "start": 1922,
            "end": 1926
          },
          "start": 1921,
          "end": 1926
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1905,
      "end": 1928
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1938,
        "end": 1944
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
                "start": 1948,
                "end": 1949
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1950,
                    "end": 1956
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1958,
                    "end": 1964
                  }
                ],
                "start": 1949,
                "end": 1965
              },
              "start": 1948,
              "end": 1965
            },
            "start": 1946,
            "end": 1965
          },
          "start": 1945,
          "end": 1965
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1929,
      "end": 1967
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1983,
        "end": 1989
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
              "start": 1993,
              "end": 1996
            },
            "start": 1991,
            "end": 1996
          },
          "start": 1990,
          "end": 1996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1998,
        "end": 2001
      },
      "expression": false,
      "start": 1974,
      "end": 2001
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2012,
        "end": 2017
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
                "start": 2021,
                "end": 2022
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2023,
                    "end": 2029
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2031,
                    "end": 2037
                  }
                ],
                "start": 2022,
                "end": 2038
              },
              "start": 2021,
              "end": 2038
            },
            "start": 2019,
            "end": 2038
          },
          "start": 2018,
          "end": 2038
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2003,
      "end": 2040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2050,
        "end": 2055
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
                "start": 2066,
                "end": 2067
              },
              "typeArguments": null,
              "start": 2059,
              "end": 2067
            },
            "start": 2057,
            "end": 2067
          },
          "start": 2056,
          "end": 2067
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2041,
      "end": 2069
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2085,
        "end": 2090
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
              "start": 2094,
              "end": 2097
            },
            "start": 2092,
            "end": 2097
          },
          "start": 2091,
          "end": 2097
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2099,
        "end": 2102
      },
      "expression": false,
      "start": 2076,
      "end": 2102
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2118
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
                "start": 2122,
                "end": 2123
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2124,
                    "end": 2130
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2132,
                    "end": 2138
                  }
                ],
                "start": 2123,
                "end": 2139
              },
              "start": 2122,
              "end": 2139
            },
            "start": 2120,
            "end": 2139
          },
          "start": 2119,
          "end": 2139
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2104,
      "end": 2141
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2151,
        "end": 2156
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
                "start": 2167,
                "end": 2168
              },
              "typeArguments": null,
              "start": 2160,
              "end": 2168
            },
            "start": 2158,
            "end": 2168
          },
          "start": 2157,
          "end": 2168
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2142,
      "end": 2170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2186,
        "end": 2191
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
              "start": 2195,
              "end": 2198
            },
            "start": 2193,
            "end": 2198
          },
          "start": 2192,
          "end": 2198
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2200,
        "end": 2203
      },
      "expression": false,
      "start": 2177,
      "end": 2203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2214,
        "end": 2219
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
                "start": 2223,
                "end": 2225
              },
              "typeArguments": null,
              "start": 2223,
              "end": 2225
            },
            "start": 2221,
            "end": 2225
          },
          "start": 2220,
          "end": 2225
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2205,
      "end": 2227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2237,
        "end": 2242
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
                "start": 2246,
                "end": 2247
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2248,
                    "end": 2254
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2256,
                    "end": 2262
                  }
                ],
                "start": 2247,
                "end": 2263
              },
              "start": 2246,
              "end": 2263
            },
            "start": 2244,
            "end": 2263
          },
          "start": 2243,
          "end": 2263
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2228,
      "end": 2265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2281,
        "end": 2286
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
              "start": 2290,
              "end": 2293
            },
            "start": 2288,
            "end": 2293
          },
          "start": 2287,
          "end": 2293
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2295,
        "end": 2298
      },
      "expression": false,
      "start": 2272,
      "end": 2298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2298
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
    "value": "A",
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
    "value": "foo",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Null",
    "value": "null",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "foo",
    "start": 123,
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
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 144,
    "end": 150
  },
  {
    "type": "Null",
    "value": "null",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 170,
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
    "value": "U",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209
  },
  {
    "type": "Null",
    "value": "null",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 221,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "interface",
    "start": 268,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 278,
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
    "value": "foo",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "var",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 325,
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
    "value": "T",
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
    "value": ">",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 335,
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
    "value": "T",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 362,
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
    "value": "T",
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
    "value": "U",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
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
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 386,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 402,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 411,
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
    "value": "A",
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
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 423,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 432,
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
    "value": "x",
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
    "type": "Identifier",
    "value": "A",
    "start": 440,
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
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 453,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 480,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 518,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 546,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 565,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 574,
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
    "value": "any",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 593,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 602,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 608,
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
    "value": "C",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 631,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 678,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 687,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 696,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 706,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "foo2",
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
    "value": "x",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "foo2",
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
    "type": "Identifier",
    "value": "I",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 762,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 770,
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
    "value": "function",
    "start": 789,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 798,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 816,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 833,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 844,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 853,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 861,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 881,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 890,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 898,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 908,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 917,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 925,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 936,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 953,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 973,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 982,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1000,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1009,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1021,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1030,
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
    "type": "Identifier",
    "value": "B",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1064,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1073,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1091,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1100,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1131,
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
    "value": "string",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1141,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1157,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1166,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1185,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1194,
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
    "value": "x",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1206,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1225,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1233,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1249,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1258,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1276,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1297,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1306,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1321,
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
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1343,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1352,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1360,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1370,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1379,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1384,
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
    "value": "B",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1389,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1407,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1426,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1434,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1453,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1462,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1480,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1489,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1507,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1517,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1526,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1536,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1563,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1572,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1580,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1590,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1599,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1618,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1628,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1637,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1646,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1663,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1672,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1691,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1700,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1709,
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
    "value": "string",
    "start": 1711,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1729,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1738,
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
    "value": "x",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1747,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1764,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1773,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1782,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1792,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1801,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1812,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1820,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1830,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1839,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1850,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1877,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1886,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1895,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1905,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1914,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1924,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1929,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1938,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1950,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1958,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1974,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1983,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2003,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2012,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2023,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2031,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2041,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2050,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2059,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2076,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2085,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2094,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2104,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2113,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2124,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2132,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2142,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2151,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2160,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2177,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2186,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2195,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2205,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2214,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2223,
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
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2228,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2237,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2248,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2254,
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
    "value": ">",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2272,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2281,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2290,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2297,
    "end": 2298
  }
]
```

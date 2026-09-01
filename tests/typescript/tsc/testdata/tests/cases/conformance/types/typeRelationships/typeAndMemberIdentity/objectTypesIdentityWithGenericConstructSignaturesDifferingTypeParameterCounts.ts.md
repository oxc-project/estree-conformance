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
              "start": 52,
              "end": 53
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 52,
            "end": 53
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
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
        "start": 51,
        "end": 57
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
              "start": 64,
              "end": 75
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 80
                      },
                      "typeArguments": null,
                      "start": 79,
                      "end": 80
                    },
                    "start": 77,
                    "end": 80
                  },
                  "start": 76,
                  "end": 80
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
                      "start": 91,
                      "end": 95
                    },
                    "start": 84,
                    "end": 96
                  }
                ],
                "start": 82,
                "end": 98
              },
              "expression": false,
              "start": 75,
              "end": 98
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 64,
            "end": 98
          }
        ],
        "start": 58,
        "end": 100
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 100
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
        "start": 108,
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
              "name": "V",
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 117
          }
        ],
        "start": 109,
        "end": 118
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
              "start": 125,
              "end": 136
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
                        "name": "V",
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
                  "start": 137,
                  "end": 141
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
                      "start": 152,
                      "end": 156
                    },
                    "start": 145,
                    "end": 157
                  }
                ],
                "start": 143,
                "end": 159
              },
              "expression": false,
              "start": 136,
              "end": 159
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 125,
            "end": 159
          }
        ],
        "start": 119,
        "end": 161
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 161
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 174
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 176
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 178,
            "end": 179
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 182
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 174,
        "end": 186
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
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 201
                    },
                    "typeArguments": null,
                    "start": 200,
                    "end": 201
                  },
                  "start": 198,
                  "end": 201
                },
                "start": 197,
                "end": 201
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 207
                      },
                      "typeArguments": null,
                      "start": 206,
                      "end": 207
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 208,
                      "end": 209
                    }
                  ],
                  "start": 205,
                  "end": 210
                },
                "start": 204,
                "end": 210
              },
              "start": 202,
              "end": 210
            },
            "start": 193,
            "end": 211
          }
        ],
        "start": 187,
        "end": 213
      },
      "declare": false,
      "start": 163,
      "end": 213
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 227
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 239,
                  "end": 240
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 243
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 242,
                  "end": 243
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
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
                    "name": "B",
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
              "start": 238,
              "end": 250
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
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 254,
                    "end": 255
                  },
                  "start": 252,
                  "end": 255
                },
                "start": 251,
                "end": 255
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 259
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 261
                      },
                      "typeArguments": null,
                      "start": 260,
                      "end": 261
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 264
                      },
                      "typeArguments": null,
                      "start": 263,
                      "end": 264
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 267
                      },
                      "typeArguments": null,
                      "start": 266,
                      "end": 267
                    }
                  ],
                  "start": 259,
                  "end": 268
                },
                "start": 258,
                "end": 268
              },
              "start": 256,
              "end": 268
            },
            "start": 234,
            "end": 269
          }
        ],
        "start": 228,
        "end": 271
      },
      "declare": false,
      "start": 215,
      "end": 271
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 287,
                            "end": 288
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 287,
                          "end": 288
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
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
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 293,
                            "end": 294
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 293,
                          "end": 294
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CC",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 298
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 296,
                          "end": 298
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 300,
                            "end": 301
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 300,
                          "end": 301
                        }
                      ],
                      "start": 286,
                      "end": 302
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
                              "name": "Z",
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
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 312,
                                "end": 313
                              },
                              "typeArguments": null,
                              "start": 312,
                              "end": 313
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 315,
                                "end": 316
                              },
                              "typeArguments": null,
                              "start": 315,
                              "end": 316
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 318,
                                "end": 319
                              },
                              "typeArguments": null,
                              "start": 318,
                              "end": 319
                            }
                          ],
                          "start": 311,
                          "end": 320
                        },
                        "start": 310,
                        "end": 320
                      },
                      "start": 308,
                      "end": 320
                    },
                    "start": 282,
                    "end": 321
                  }
                ],
                "start": 280,
                "end": 323
              },
              "start": 278,
              "end": 323
            },
            "start": 277,
            "end": 323
          },
          "init": null,
          "definite": false,
          "start": 277,
          "end": 323
        }
      ],
      "declare": false,
      "start": 273,
      "end": 323
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
            "start": 328,
            "end": 329
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
                  "start": 334,
                  "end": 337
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
                          "start": 338,
                          "end": 339
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 338,
                        "end": 339
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 341,
                          "end": 342
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 341,
                        "end": 342
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
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
                          "name": "D",
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
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 351
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 350,
                        "end": 351
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 353,
                          "end": 354
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 353,
                        "end": 354
                      }
                    ],
                    "start": 337,
                    "end": 355
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 360
                          },
                          "typeArguments": null,
                          "start": 359,
                          "end": 360
                        },
                        "start": 357,
                        "end": 360
                      },
                      "start": 356,
                      "end": 360
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
                          "start": 371,
                          "end": 372
                        },
                        "start": 364,
                        "end": 373
                      }
                    ],
                    "start": 362,
                    "end": 375
                  },
                  "expression": false,
                  "start": 337,
                  "end": 375
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 334,
                "end": 375
              }
            ],
            "start": 332,
            "end": 377
          },
          "definite": false,
          "start": 328,
          "end": 377
        }
      ],
      "declare": false,
      "start": 324,
      "end": 378
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 394
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
                "start": 398,
                "end": 399
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 400,
                    "end": 406
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 408,
                    "end": 414
                  }
                ],
                "start": 399,
                "end": 415
              },
              "start": 398,
              "end": 415
            },
            "start": 396,
            "end": 415
          },
          "start": 395,
          "end": 415
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 380,
      "end": 417
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 432
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
                "start": 436,
                "end": 437
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 438,
                    "end": 444
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 446,
                    "end": 452
                  }
                ],
                "start": 437,
                "end": 453
              },
              "start": 436,
              "end": 453
            },
            "start": 434,
            "end": 453
          },
          "start": 433,
          "end": 453
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 418,
      "end": 455
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 479
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
              "start": 483,
              "end": 486
            },
            "start": 481,
            "end": 486
          },
          "start": 480,
          "end": 486
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 488,
        "end": 491
      },
      "expression": false,
      "start": 465,
      "end": 491
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 507
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
                "start": 511,
                "end": 512
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 513,
                    "end": 519
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 521,
                    "end": 527
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 529,
                    "end": 536
                  }
                ],
                "start": 512,
                "end": 537
              },
              "start": 511,
              "end": 537
            },
            "start": 509,
            "end": 537
          },
          "start": 508,
          "end": 537
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 493,
      "end": 539
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 554
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
                "start": 558,
                "end": 559
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 560,
                    "end": 566
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 568,
                    "end": 574
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 576,
                    "end": 583
                  }
                ],
                "start": 559,
                "end": 584
              },
              "start": 558,
              "end": 584
            },
            "start": 556,
            "end": 584
          },
          "start": 555,
          "end": 584
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 540,
      "end": 586
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 605,
        "end": 610
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
              "start": 614,
              "end": 617
            },
            "start": 612,
            "end": 617
          },
          "start": 611,
          "end": 617
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 619,
        "end": 622
      },
      "expression": false,
      "start": 596,
      "end": 622
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 633,
        "end": 637
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
                "start": 641,
                "end": 642
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 643,
                    "end": 649
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 651,
                    "end": 658
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 660,
                    "end": 666
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 668,
                    "end": 674
                  }
                ],
                "start": 642,
                "end": 675
              },
              "start": 641,
              "end": 675
            },
            "start": 639,
            "end": 675
          },
          "start": 638,
          "end": 675
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 624,
      "end": 677
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 687,
        "end": 691
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
                "start": 695,
                "end": 696
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 697,
                    "end": 703
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 705,
                    "end": 712
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 714,
                    "end": 720
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 722,
                    "end": 728
                  }
                ],
                "start": 696,
                "end": 729
              },
              "start": 695,
              "end": 729
            },
            "start": 693,
            "end": 729
          },
          "start": 692,
          "end": 729
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 678,
      "end": 731
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 754
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
              "start": 758,
              "end": 761
            },
            "start": 756,
            "end": 761
          },
          "start": 755,
          "end": 761
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 763,
        "end": 766
      },
      "expression": false,
      "start": 741,
      "end": 766
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 781
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
                "start": 792,
                "end": 793
              },
              "typeArguments": null,
              "start": 785,
              "end": 793
            },
            "start": 783,
            "end": 793
          },
          "start": 782,
          "end": 793
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 768,
      "end": 795
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 809
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
                "start": 820,
                "end": 821
              },
              "typeArguments": null,
              "start": 813,
              "end": 821
            },
            "start": 811,
            "end": 821
          },
          "start": 810,
          "end": 821
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 796,
      "end": 823
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 846
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
              "start": 850,
              "end": 853
            },
            "start": 848,
            "end": 853
          },
          "start": 847,
          "end": 853
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 855,
        "end": 858
      },
      "expression": false,
      "start": 833,
      "end": 858
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 873
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
                "start": 884,
                "end": 885
              },
              "typeArguments": null,
              "start": 877,
              "end": 885
            },
            "start": 875,
            "end": 885
          },
          "start": 874,
          "end": 885
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 860,
      "end": 887
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 901
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
                "start": 912,
                "end": 913
              },
              "typeArguments": null,
              "start": 905,
              "end": 913
            },
            "start": 903,
            "end": 913
          },
          "start": 902,
          "end": 913
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 888,
      "end": 915
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 938
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
              "start": 942,
              "end": 945
            },
            "start": 940,
            "end": 945
          },
          "start": 939,
          "end": 945
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 947,
        "end": 950
      },
      "expression": false,
      "start": 925,
      "end": 950
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 961,
        "end": 965
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
                "start": 969,
                "end": 970
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 971,
                    "end": 977
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 979,
                    "end": 985
                  }
                ],
                "start": 970,
                "end": 986
              },
              "start": 969,
              "end": 986
            },
            "start": 967,
            "end": 986
          },
          "start": 966,
          "end": 986
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 952,
      "end": 988
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 998,
        "end": 1002
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
                "start": 1006,
                "end": 1007
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1008,
                    "end": 1014
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1016,
                    "end": 1022
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1024,
                    "end": 1031
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1033,
                      "end": 1037
                    },
                    "typeArguments": null,
                    "start": 1033,
                    "end": 1037
                  }
                ],
                "start": 1007,
                "end": 1038
              },
              "start": 1006,
              "end": 1038
            },
            "start": 1004,
            "end": 1038
          },
          "start": 1003,
          "end": 1038
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 989,
      "end": 1040
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1064,
        "end": 1068
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
              "start": 1072,
              "end": 1075
            },
            "start": 1070,
            "end": 1075
          },
          "start": 1069,
          "end": 1075
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1077,
        "end": 1080
      },
      "expression": false,
      "start": 1055,
      "end": 1080
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1095
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
                "start": 1099,
                "end": 1100
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1101,
                    "end": 1107
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1109,
                    "end": 1115
                  }
                ],
                "start": 1100,
                "end": 1116
              },
              "start": 1099,
              "end": 1116
            },
            "start": 1097,
            "end": 1116
          },
          "start": 1096,
          "end": 1116
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1082,
      "end": 1118
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1132
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
                "start": 1136,
                "end": 1137
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1138,
                    "end": 1144
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1146,
                    "end": 1152
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1154,
                      "end": 1155
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1156,
                          "end": 1162
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1164,
                          "end": 1170
                        }
                      ],
                      "start": 1155,
                      "end": 1171
                    },
                    "start": 1154,
                    "end": 1171
                  }
                ],
                "start": 1137,
                "end": 1172
              },
              "start": 1136,
              "end": 1172
            },
            "start": 1134,
            "end": 1172
          },
          "start": 1133,
          "end": 1172
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1119,
      "end": 1174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1197
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
              "start": 1201,
              "end": 1204
            },
            "start": 1199,
            "end": 1204
          },
          "start": 1198,
          "end": 1204
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1206,
        "end": 1209
      },
      "expression": false,
      "start": 1184,
      "end": 1209
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1220,
        "end": 1225
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
                "start": 1229,
                "end": 1230
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1231,
                    "end": 1237
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1239,
                    "end": 1246
                  }
                ],
                "start": 1230,
                "end": 1247
              },
              "start": 1229,
              "end": 1247
            },
            "start": 1227,
            "end": 1247
          },
          "start": 1226,
          "end": 1247
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1211,
      "end": 1249
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1259,
        "end": 1264
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
                "start": 1275,
                "end": 1276
              },
              "typeArguments": null,
              "start": 1268,
              "end": 1276
            },
            "start": 1266,
            "end": 1276
          },
          "start": 1265,
          "end": 1276
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1250,
      "end": 1278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1299
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
              "start": 1303,
              "end": 1306
            },
            "start": 1301,
            "end": 1306
          },
          "start": 1300,
          "end": 1306
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1308,
        "end": 1311
      },
      "expression": false,
      "start": 1285,
      "end": 1311
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1322,
        "end": 1327
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
                "start": 1331,
                "end": 1332
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1333,
                    "end": 1339
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1341,
                    "end": 1348
                  }
                ],
                "start": 1332,
                "end": 1349
              },
              "start": 1331,
              "end": 1349
            },
            "start": 1329,
            "end": 1349
          },
          "start": 1328,
          "end": 1349
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1313,
      "end": 1351
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1378
              },
              "typeArguments": null,
              "start": 1370,
              "end": 1378
            },
            "start": 1368,
            "end": 1378
          },
          "start": 1367,
          "end": 1378
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1352,
      "end": 1380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1401
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
              "start": 1405,
              "end": 1408
            },
            "start": 1403,
            "end": 1408
          },
          "start": 1402,
          "end": 1408
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1410,
        "end": 1413
      },
      "expression": false,
      "start": 1387,
      "end": 1413
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1429
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
                "start": 1433,
                "end": 1434
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
                      "start": 1435,
                      "end": 1436
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1437,
                          "end": 1443
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1445,
                          "end": 1451
                        }
                      ],
                      "start": 1436,
                      "end": 1452
                    },
                    "start": 1435,
                    "end": 1452
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1454,
                    "end": 1460
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1462,
                      "end": 1466
                    },
                    "typeArguments": null,
                    "start": 1462,
                    "end": 1466
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1468,
                    "end": 1474
                  }
                ],
                "start": 1434,
                "end": 1475
              },
              "start": 1433,
              "end": 1475
            },
            "start": 1431,
            "end": 1475
          },
          "start": 1430,
          "end": 1475
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1415,
      "end": 1477
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1487,
        "end": 1492
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
                "start": 1496,
                "end": 1497
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
                      "start": 1498,
                      "end": 1499
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1500,
                          "end": 1506
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1508,
                          "end": 1514
                        }
                      ],
                      "start": 1499,
                      "end": 1515
                    },
                    "start": 1498,
                    "end": 1515
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1517,
                    "end": 1523
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1529
                    },
                    "typeArguments": null,
                    "start": 1525,
                    "end": 1529
                  }
                ],
                "start": 1497,
                "end": 1530
              },
              "start": 1496,
              "end": 1530
            },
            "start": 1494,
            "end": 1530
          },
          "start": 1493,
          "end": 1530
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1478,
      "end": 1532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1548,
        "end": 1553
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
              "start": 1557,
              "end": 1560
            },
            "start": 1555,
            "end": 1560
          },
          "start": 1554,
          "end": 1560
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1562,
        "end": 1565
      },
      "expression": false,
      "start": 1539,
      "end": 1565
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1576,
        "end": 1582
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
                "start": 1586,
                "end": 1588
              },
              "typeArguments": null,
              "start": 1586,
              "end": 1588
            },
            "start": 1584,
            "end": 1588
          },
          "start": 1583,
          "end": 1588
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1567,
      "end": 1590
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1600,
        "end": 1606
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
                "start": 1610,
                "end": 1611
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1612,
                    "end": 1618
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1620,
                    "end": 1626
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1628,
                    "end": 1635
                  }
                ],
                "start": 1611,
                "end": 1636
              },
              "start": 1610,
              "end": 1636
            },
            "start": 1608,
            "end": 1636
          },
          "start": 1607,
          "end": 1636
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1591,
      "end": 1638
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1662,
        "end": 1668
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
              "start": 1672,
              "end": 1675
            },
            "start": 1670,
            "end": 1675
          },
          "start": 1669,
          "end": 1675
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1677,
        "end": 1680
      },
      "expression": false,
      "start": 1653,
      "end": 1680
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1691,
        "end": 1696
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
                "start": 1700,
                "end": 1701
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1702,
                    "end": 1708
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1710,
                      "end": 1714
                    },
                    "typeArguments": null,
                    "start": 1710,
                    "end": 1714
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1716,
                      "end": 1722
                    },
                    "typeArguments": null,
                    "start": 1716,
                    "end": 1722
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1728
                    },
                    "typeArguments": null,
                    "start": 1724,
                    "end": 1728
                  }
                ],
                "start": 1701,
                "end": 1729
              },
              "start": 1700,
              "end": 1729
            },
            "start": 1698,
            "end": 1729
          },
          "start": 1697,
          "end": 1729
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1682,
      "end": 1731
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1741,
        "end": 1746
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
                "start": 1757,
                "end": 1758
              },
              "typeArguments": null,
              "start": 1750,
              "end": 1758
            },
            "start": 1748,
            "end": 1758
          },
          "start": 1747,
          "end": 1758
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1732,
      "end": 1760
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1776,
        "end": 1781
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
              "start": 1785,
              "end": 1788
            },
            "start": 1783,
            "end": 1788
          },
          "start": 1782,
          "end": 1788
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1790,
        "end": 1793
      },
      "expression": false,
      "start": 1767,
      "end": 1793
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1804,
        "end": 1809
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
                "start": 1813,
                "end": 1814
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1815,
                    "end": 1821
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1823,
                      "end": 1827
                    },
                    "typeArguments": null,
                    "start": 1823,
                    "end": 1827
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1829,
                      "end": 1835
                    },
                    "typeArguments": null,
                    "start": 1829,
                    "end": 1835
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1837,
                    "end": 1844
                  }
                ],
                "start": 1814,
                "end": 1845
              },
              "start": 1813,
              "end": 1845
            },
            "start": 1811,
            "end": 1845
          },
          "start": 1810,
          "end": 1845
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1795,
      "end": 1847
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1857,
        "end": 1862
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
                "start": 1873,
                "end": 1874
              },
              "typeArguments": null,
              "start": 1866,
              "end": 1874
            },
            "start": 1864,
            "end": 1874
          },
          "start": 1863,
          "end": 1874
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1848,
      "end": 1876
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1892,
        "end": 1897
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
              "start": 1901,
              "end": 1904
            },
            "start": 1899,
            "end": 1904
          },
          "start": 1898,
          "end": 1904
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1906,
        "end": 1909
      },
      "expression": false,
      "start": 1883,
      "end": 1909
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 1909
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
    "value": "<",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 64,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 84,
    "end": 90
  },
  {
    "type": "Null",
    "value": "null",
    "start": 91,
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
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 108,
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
    "value": "V",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 125,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "V",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 145,
    "end": 151
  },
  {
    "type": "Null",
    "value": "null",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 163,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 193,
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
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 215,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Z",
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
    "value": "A",
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
    "value": "B",
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
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "C",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "Z",
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
    "value": "C",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "B",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "D",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 364,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
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
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 380,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 398,
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
    "value": "string",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 408,
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
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 418,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 465,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 493,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 502,
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
    "value": "C",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 529,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 540,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 549,
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
    "value": "x",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "foo1c",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 614,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 624,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 651,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 660,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 678,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 697,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 705,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 714,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 741,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 758,
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
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 768,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 777,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 785,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 796,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 813,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 833,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 842,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 860,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 869,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 877,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 888,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 897,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 905,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 925,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 934,
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
    "value": "x",
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
    "value": "any",
    "start": 942,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 952,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 971,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 989,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1016,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1024,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1055,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1064,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1082,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1101,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1119,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1128,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1156,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1184,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1193,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1211,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1220,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1239,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1246,
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
    "value": ";",
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
    "type": "Identifier",
    "value": "foo10",
    "start": 1259,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1294,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1313,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1322,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1333,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1341,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1352,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "foo11",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1370,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1387,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1396,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1415,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1424,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1437,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1445,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1454,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1462,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1468,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1478,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1487,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1500,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1508,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1517,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1525,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1539,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1548,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1567,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1576,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1586,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1591,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1600,
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
    "value": "x",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1612,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1628,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1653,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1682,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1691,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1702,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1710,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1716,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1724,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1732,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1741,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1750,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1776,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1785,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1795,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1804,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1815,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1823,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1829,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1837,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1848,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1857,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1866,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1883,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1892,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1901,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1908,
    "end": 1909
  }
]
```

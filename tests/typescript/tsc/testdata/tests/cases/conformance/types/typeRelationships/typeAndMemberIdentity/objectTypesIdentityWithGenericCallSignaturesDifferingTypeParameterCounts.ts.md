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
                  }
                ],
                "start": 61,
                "end": 64
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
                        "start": 68,
                        "end": 69
                      },
                      "typeArguments": null,
                      "start": 68,
                      "end": 69
                    },
                    "start": 66,
                    "end": 69
                  },
                  "start": 65,
                  "end": 69
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
                    "start": 72,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 72,
                  "end": 73
                },
                "start": 70,
                "end": 73
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
                      "start": 83,
                      "end": 87
                    },
                    "start": 76,
                    "end": 88
                  }
                ],
                "start": 74,
                "end": 90
              },
              "expression": false,
              "start": 61,
              "end": 90
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 90
          }
        ],
        "start": 52,
        "end": 92
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 92
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
        "start": 100,
        "end": 101
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
              "start": 102,
              "end": 103
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 102,
            "end": 103
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 105,
            "end": 106
          }
        ],
        "start": 101,
        "end": 107
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
              "start": 114,
              "end": 117
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
                        "start": 121,
                        "end": 122
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 122
                    },
                    "start": 119,
                    "end": 122
                  },
                  "start": 118,
                  "end": 122
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
                    "start": 125,
                    "end": 126
                  },
                  "typeArguments": null,
                  "start": 125,
                  "end": 126
                },
                "start": 123,
                "end": 126
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
                      "start": 136,
                      "end": 140
                    },
                    "start": 129,
                    "end": 141
                  }
                ],
                "start": 127,
                "end": 143
              },
              "expression": false,
              "start": 117,
              "end": 143
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 143
          }
        ],
        "start": 108,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 145
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
        "start": 153,
        "end": 154
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
              "start": 155,
              "end": 156
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 156
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 158,
            "end": 159
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 161,
            "end": 162
          }
        ],
        "start": 154,
        "end": 163
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
              "start": 170,
              "end": 173
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
                        "start": 177,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 178
                    },
                    "start": 175,
                    "end": 178
                  },
                  "start": 174,
                  "end": 178
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 182
                  },
                  "typeArguments": null,
                  "start": 181,
                  "end": 182
                },
                "start": 179,
                "end": 182
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
                      "start": 192,
                      "end": 196
                    },
                    "start": 185,
                    "end": 197
                  }
                ],
                "start": 183,
                "end": 199
              },
              "expression": false,
              "start": 173,
              "end": 199
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 170,
            "end": 199
          }
        ],
        "start": 164,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 147,
      "end": 201
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
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
              "name": "X",
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 219
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 218,
            "end": 219
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 221,
            "end": 222
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          }
        ],
        "start": 214,
        "end": 226
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
              "start": 233,
              "end": 236
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
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 241
                    },
                    "typeArguments": null,
                    "start": 240,
                    "end": 241
                  },
                  "start": 238,
                  "end": 241
                },
                "start": 237,
                "end": 241
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
              },
              "start": 242,
              "end": 245
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 233,
            "end": 246
          }
        ],
        "start": 227,
        "end": 248
      },
      "declare": false,
      "start": 203,
      "end": 248
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 262
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
              "start": 269,
              "end": 272
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
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 273,
                  "end": 274
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 276,
                  "end": 277
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 280
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 279,
                  "end": 280
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 283
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 282,
                  "end": 283
                }
              ],
              "start": 272,
              "end": 284
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
                      "start": 288,
                      "end": 289
                    },
                    "typeArguments": null,
                    "start": 288,
                    "end": 289
                  },
                  "start": 286,
                  "end": 289
                },
                "start": 285,
                "end": 289
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 293
                },
                "typeArguments": null,
                "start": 292,
                "end": 293
              },
              "start": 290,
              "end": 293
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 269,
            "end": 294
          }
        ],
        "start": 263,
        "end": 296
      },
      "declare": false,
      "start": 250,
      "end": 296
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
                      "start": 307,
                      "end": 310
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
                            "name": "Z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 312
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 311,
                          "end": 312
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 314,
                            "end": 315
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 314,
                          "end": 315
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 317,
                            "end": 318
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 317,
                          "end": 318
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 320,
                            "end": 321
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 320,
                          "end": 321
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 323,
                            "end": 324
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 323,
                          "end": 324
                        }
                      ],
                      "start": 310,
                      "end": 325
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
                              "start": 329,
                              "end": 330
                            },
                            "typeArguments": null,
                            "start": 329,
                            "end": 330
                          },
                          "start": 327,
                          "end": 330
                        },
                        "start": 326,
                        "end": 330
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 334
                        },
                        "typeArguments": null,
                        "start": 333,
                        "end": 334
                      },
                      "start": 331,
                      "end": 334
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 307,
                    "end": 334
                  }
                ],
                "start": 305,
                "end": 336
              },
              "start": 303,
              "end": 336
            },
            "start": 302,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 302,
          "end": 336
        }
      ],
      "declare": false,
      "start": 298,
      "end": 336
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
            "start": 341,
            "end": 342
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
                  "start": 347,
                  "end": 350
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
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 354,
                          "end": 355
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 354,
                        "end": 355
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 358
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 357,
                        "end": 358
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 360,
                          "end": 361
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 360,
                        "end": 361
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
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
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
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
                      }
                    ],
                    "start": 350,
                    "end": 368
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
                            "start": 372,
                            "end": 373
                          },
                          "typeArguments": null,
                          "start": 372,
                          "end": 373
                        },
                        "start": 370,
                        "end": 373
                      },
                      "start": 369,
                      "end": 373
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
                          "start": 384,
                          "end": 385
                        },
                        "start": 377,
                        "end": 386
                      }
                    ],
                    "start": 375,
                    "end": 388
                  },
                  "expression": false,
                  "start": 350,
                  "end": 388
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 347,
                "end": 388
              }
            ],
            "start": 345,
            "end": 390
          },
          "definite": false,
          "start": 341,
          "end": 390
        }
      ],
      "declare": false,
      "start": 337,
      "end": 391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 406
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
                "start": 410,
                "end": 411
              },
              "typeArguments": null,
              "start": 410,
              "end": 411
            },
            "start": 408,
            "end": 411
          },
          "start": 407,
          "end": 411
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 393,
      "end": 413
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 427
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
                "start": 431,
                "end": 432
              },
              "typeArguments": null,
              "start": 431,
              "end": 432
            },
            "start": 429,
            "end": 432
          },
          "start": 428,
          "end": 432
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 414,
      "end": 434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 457
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
              "start": 461,
              "end": 464
            },
            "start": 459,
            "end": 464
          },
          "start": 458,
          "end": 464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 466,
        "end": 469
      },
      "expression": false,
      "start": 444,
      "end": 469
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 485
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
                "start": 489,
                "end": 490
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 491,
                    "end": 497
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  }
                ],
                "start": 490,
                "end": 506
              },
              "start": 489,
              "end": 506
            },
            "start": 487,
            "end": 506
          },
          "start": 486,
          "end": 506
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 471,
      "end": 508
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 523
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
                "start": 527,
                "end": 528
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 529,
                    "end": 535
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 537,
                    "end": 543
                  }
                ],
                "start": 528,
                "end": 544
              },
              "start": 527,
              "end": 544
            },
            "start": 525,
            "end": 544
          },
          "start": 524,
          "end": 544
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 509,
      "end": 546
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 565,
        "end": 570
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
              "start": 574,
              "end": 577
            },
            "start": 572,
            "end": 577
          },
          "start": 571,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 579,
        "end": 582
      },
      "expression": false,
      "start": 556,
      "end": 582
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 598
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
                "start": 602,
                "end": 603
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 604,
                    "end": 610
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 612,
                    "end": 618
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 620,
                    "end": 627
                  }
                ],
                "start": 603,
                "end": 628
              },
              "start": 602,
              "end": 628
            },
            "start": 600,
            "end": 628
          },
          "start": 599,
          "end": 628
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 584,
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
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 667,
                    "end": 674
                  }
                ],
                "start": 650,
                "end": 675
              },
              "start": 649,
              "end": 675
            },
            "start": 647,
            "end": 675
          },
          "start": 646,
          "end": 675
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 631,
      "end": 677
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
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
      "start": 687,
      "end": 713
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 734,
                    "end": 740
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 742,
                    "end": 749
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 751,
                    "end": 757
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 759,
                    "end": 765
                  }
                ],
                "start": 733,
                "end": 766
              },
              "start": 732,
              "end": 766
            },
            "start": 730,
            "end": 766
          },
          "start": 729,
          "end": 766
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 715,
      "end": 768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 782
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
                "start": 786,
                "end": 787
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 788,
                    "end": 794
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 796,
                    "end": 803
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 805,
                    "end": 811
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 813,
                    "end": 819
                  }
                ],
                "start": 787,
                "end": 820
              },
              "start": 786,
              "end": 820
            },
            "start": 784,
            "end": 820
          },
          "start": 783,
          "end": 820
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 769,
      "end": 822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 845
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
              "start": 849,
              "end": 852
            },
            "start": 847,
            "end": 852
          },
          "start": 846,
          "end": 852
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 854,
        "end": 857
      },
      "expression": false,
      "start": 832,
      "end": 857
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 868,
        "end": 872
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
                "start": 883,
                "end": 884
              },
              "typeArguments": null,
              "start": 876,
              "end": 884
            },
            "start": 874,
            "end": 884
          },
          "start": 873,
          "end": 884
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 859,
      "end": 886
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 900
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
                "start": 911,
                "end": 912
              },
              "typeArguments": null,
              "start": 904,
              "end": 912
            },
            "start": 902,
            "end": 912
          },
          "start": 901,
          "end": 912
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 887,
      "end": 914
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 933,
        "end": 937
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
              "start": 941,
              "end": 944
            },
            "start": 939,
            "end": 944
          },
          "start": 938,
          "end": 944
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 946,
        "end": 949
      },
      "expression": false,
      "start": 924,
      "end": 949
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 964
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
                "start": 975,
                "end": 976
              },
              "typeArguments": null,
              "start": 968,
              "end": 976
            },
            "start": 966,
            "end": 976
          },
          "start": 965,
          "end": 976
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 951,
      "end": 978
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 988,
        "end": 992
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
                "start": 1003,
                "end": 1004
              },
              "typeArguments": null,
              "start": 996,
              "end": 1004
            },
            "start": 994,
            "end": 1004
          },
          "start": 993,
          "end": 1004
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 979,
      "end": 1006
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1025,
        "end": 1029
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
              "start": 1033,
              "end": 1036
            },
            "start": 1031,
            "end": 1036
          },
          "start": 1030,
          "end": 1036
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1038,
        "end": 1041
      },
      "expression": false,
      "start": 1016,
      "end": 1041
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1056
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
                "start": 1060,
                "end": 1061
              },
              "typeArguments": null,
              "start": 1060,
              "end": 1061
            },
            "start": 1058,
            "end": 1061
          },
          "start": 1057,
          "end": 1061
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1043,
      "end": 1063
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1082
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1083,
                    "end": 1089
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1091,
                    "end": 1097
                  }
                ],
                "start": 1082,
                "end": 1098
              },
              "start": 1081,
              "end": 1098
            },
            "start": 1079,
            "end": 1098
          },
          "start": 1078,
          "end": 1098
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1064,
      "end": 1100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1116,
        "end": 1120
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
              "start": 1124,
              "end": 1127
            },
            "start": 1122,
            "end": 1127
          },
          "start": 1121,
          "end": 1127
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1129,
        "end": 1132
      },
      "expression": false,
      "start": 1107,
      "end": 1132
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1143,
        "end": 1148
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
                "start": 1152,
                "end": 1153
              },
              "typeArguments": null,
              "start": 1152,
              "end": 1153
            },
            "start": 1150,
            "end": 1153
          },
          "start": 1149,
          "end": 1153
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1134,
      "end": 1155
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1165,
        "end": 1170
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
                "start": 1174,
                "end": 1175
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1176,
                    "end": 1182
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1184,
                    "end": 1190
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1192,
                    "end": 1199
                  }
                ],
                "start": 1175,
                "end": 1200
              },
              "start": 1174,
              "end": 1200
            },
            "start": 1172,
            "end": 1200
          },
          "start": 1171,
          "end": 1200
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1156,
      "end": 1202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1218,
        "end": 1223
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
              "start": 1227,
              "end": 1230
            },
            "start": 1225,
            "end": 1230
          },
          "start": 1224,
          "end": 1230
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1232,
        "end": 1235
      },
      "expression": false,
      "start": 1209,
      "end": 1235
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1246,
        "end": 1250
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
                "start": 1254,
                "end": 1255
              },
              "typeArguments": null,
              "start": 1254,
              "end": 1255
            },
            "start": 1252,
            "end": 1255
          },
          "start": 1251,
          "end": 1255
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1237,
      "end": 1257
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1267,
        "end": 1271
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
                "start": 1275,
                "end": 1276
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1277,
                    "end": 1283
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1285,
                    "end": 1291
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1293,
                    "end": 1300
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1302,
                      "end": 1306
                    },
                    "typeArguments": null,
                    "start": 1302,
                    "end": 1306
                  }
                ],
                "start": 1276,
                "end": 1307
              },
              "start": 1275,
              "end": 1307
            },
            "start": 1273,
            "end": 1307
          },
          "start": 1272,
          "end": 1307
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1258,
      "end": 1309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1325,
        "end": 1329
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
              "start": 1333,
              "end": 1336
            },
            "start": 1331,
            "end": 1336
          },
          "start": 1330,
          "end": 1336
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1338,
        "end": 1341
      },
      "expression": false,
      "start": 1316,
      "end": 1341
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1361
              },
              "typeArguments": null,
              "start": 1360,
              "end": 1361
            },
            "start": 1358,
            "end": 1361
          },
          "start": 1357,
          "end": 1361
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1343,
      "end": 1363
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1373,
        "end": 1377
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
                "start": 1388,
                "end": 1389
              },
              "typeArguments": null,
              "start": 1381,
              "end": 1389
            },
            "start": 1379,
            "end": 1389
          },
          "start": 1378,
          "end": 1389
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1364,
      "end": 1391
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1419,
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
      "start": 1410,
      "end": 1435
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1446,
        "end": 1450
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
                "start": 1454,
                "end": 1455
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1456,
                    "end": 1462
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1464,
                    "end": 1470
                  }
                ],
                "start": 1455,
                "end": 1471
              },
              "start": 1454,
              "end": 1471
            },
            "start": 1452,
            "end": 1471
          },
          "start": 1451,
          "end": 1471
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1437,
      "end": 1473
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1483,
        "end": 1487
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
                "start": 1491,
                "end": 1492
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1493,
                    "end": 1499
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1501,
                    "end": 1507
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1509,
                    "end": 1516
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1518,
                      "end": 1522
                    },
                    "typeArguments": null,
                    "start": 1518,
                    "end": 1522
                  }
                ],
                "start": 1492,
                "end": 1523
              },
              "start": 1491,
              "end": 1523
            },
            "start": 1489,
            "end": 1523
          },
          "start": 1488,
          "end": 1523
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1474,
      "end": 1525
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1544,
        "end": 1548
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
              "start": 1552,
              "end": 1555
            },
            "start": 1550,
            "end": 1555
          },
          "start": 1549,
          "end": 1555
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1557,
        "end": 1560
      },
      "expression": false,
      "start": 1535,
      "end": 1560
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1571,
        "end": 1575
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
                "start": 1579,
                "end": 1580
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1581,
                    "end": 1587
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1589,
                    "end": 1595
                  }
                ],
                "start": 1580,
                "end": 1596
              },
              "start": 1579,
              "end": 1596
            },
            "start": 1577,
            "end": 1596
          },
          "start": 1576,
          "end": 1596
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1562,
      "end": 1598
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1608,
        "end": 1612
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
                "start": 1616,
                "end": 1617
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1618,
                    "end": 1624
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1626,
                    "end": 1632
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1634,
                      "end": 1635
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1636,
                          "end": 1642
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1644,
                          "end": 1650
                        }
                      ],
                      "start": 1635,
                      "end": 1651
                    },
                    "start": 1634,
                    "end": 1651
                  }
                ],
                "start": 1617,
                "end": 1652
              },
              "start": 1616,
              "end": 1652
            },
            "start": 1614,
            "end": 1652
          },
          "start": 1613,
          "end": 1652
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1599,
      "end": 1654
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1673,
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
      "start": 1664,
      "end": 1689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
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
                    "type": "TSBooleanKeyword",
                    "start": 1719,
                    "end": 1726
                  }
                ],
                "start": 1710,
                "end": 1727
              },
              "start": 1709,
              "end": 1727
            },
            "start": 1707,
            "end": 1727
          },
          "start": 1706,
          "end": 1727
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1691,
      "end": 1729
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1744
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
                "start": 1755,
                "end": 1756
              },
              "typeArguments": null,
              "start": 1748,
              "end": 1756
            },
            "start": 1746,
            "end": 1756
          },
          "start": 1745,
          "end": 1756
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1730,
      "end": 1758
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1774,
        "end": 1779
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
              "start": 1783,
              "end": 1786
            },
            "start": 1781,
            "end": 1786
          },
          "start": 1780,
          "end": 1786
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1788,
        "end": 1791
      },
      "expression": false,
      "start": 1765,
      "end": 1791
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1802,
        "end": 1807
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
                "start": 1811,
                "end": 1812
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1813,
                    "end": 1819
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1821,
                    "end": 1828
                  }
                ],
                "start": 1812,
                "end": 1829
              },
              "start": 1811,
              "end": 1829
            },
            "start": 1809,
            "end": 1829
          },
          "start": 1808,
          "end": 1829
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1793,
      "end": 1831
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1841,
        "end": 1846
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
                "start": 1857,
                "end": 1858
              },
              "typeArguments": null,
              "start": 1850,
              "end": 1858
            },
            "start": 1848,
            "end": 1858
          },
          "start": 1847,
          "end": 1858
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1832,
      "end": 1860
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1876,
        "end": 1881
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
              "start": 1885,
              "end": 1888
            },
            "start": 1883,
            "end": 1888
          },
          "start": 1882,
          "end": 1888
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1890,
        "end": 1893
      },
      "expression": false,
      "start": 1867,
      "end": 1893
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1904,
        "end": 1909
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
                "start": 1913,
                "end": 1914
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
                      "start": 1915,
                      "end": 1916
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1917,
                          "end": 1923
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1925,
                          "end": 1931
                        }
                      ],
                      "start": 1916,
                      "end": 1932
                    },
                    "start": 1915,
                    "end": 1932
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1934,
                    "end": 1940
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1942,
                      "end": 1946
                    },
                    "typeArguments": null,
                    "start": 1942,
                    "end": 1946
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1948,
                    "end": 1954
                  }
                ],
                "start": 1914,
                "end": 1955
              },
              "start": 1913,
              "end": 1955
            },
            "start": 1911,
            "end": 1955
          },
          "start": 1910,
          "end": 1955
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1895,
      "end": 1957
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1967,
        "end": 1972
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
                "start": 1976,
                "end": 1977
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
                      "start": 1978,
                      "end": 1979
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1980,
                          "end": 1986
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1988,
                          "end": 1994
                        }
                      ],
                      "start": 1979,
                      "end": 1995
                    },
                    "start": 1978,
                    "end": 1995
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1997,
                    "end": 2003
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2005,
                      "end": 2009
                    },
                    "typeArguments": null,
                    "start": 2005,
                    "end": 2009
                  }
                ],
                "start": 1977,
                "end": 2010
              },
              "start": 1976,
              "end": 2010
            },
            "start": 1974,
            "end": 2010
          },
          "start": 1973,
          "end": 2010
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1958,
      "end": 2012
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2031,
        "end": 2036
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
              "start": 2040,
              "end": 2043
            },
            "start": 2038,
            "end": 2043
          },
          "start": 2037,
          "end": 2043
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2045,
        "end": 2048
      },
      "expression": false,
      "start": 2022,
      "end": 2048
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2059,
        "end": 2065
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
                "start": 2069,
                "end": 2071
              },
              "typeArguments": null,
              "start": 2069,
              "end": 2071
            },
            "start": 2067,
            "end": 2071
          },
          "start": 2066,
          "end": 2071
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2050,
      "end": 2073
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2083,
        "end": 2089
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
                "start": 2093,
                "end": 2094
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2095,
                    "end": 2101
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2103,
                    "end": 2109
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 2111,
                    "end": 2118
                  }
                ],
                "start": 2094,
                "end": 2119
              },
              "start": 2093,
              "end": 2119
            },
            "start": 2091,
            "end": 2119
          },
          "start": 2090,
          "end": 2119
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2074,
      "end": 2121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2137,
        "end": 2143
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
              "start": 2147,
              "end": 2150
            },
            "start": 2145,
            "end": 2150
          },
          "start": 2144,
          "end": 2150
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2152,
        "end": 2155
      },
      "expression": false,
      "start": 2128,
      "end": 2155
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2166,
        "end": 2171
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
                "start": 2175,
                "end": 2176
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2177,
                    "end": 2183
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2185,
                      "end": 2189
                    },
                    "typeArguments": null,
                    "start": 2185,
                    "end": 2189
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2191,
                      "end": 2197
                    },
                    "typeArguments": null,
                    "start": 2191,
                    "end": 2197
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2199,
                      "end": 2203
                    },
                    "typeArguments": null,
                    "start": 2199,
                    "end": 2203
                  }
                ],
                "start": 2176,
                "end": 2204
              },
              "start": 2175,
              "end": 2204
            },
            "start": 2173,
            "end": 2204
          },
          "start": 2172,
          "end": 2204
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2157,
      "end": 2206
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2216,
        "end": 2221
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
                "start": 2232,
                "end": 2233
              },
              "typeArguments": null,
              "start": 2225,
              "end": 2233
            },
            "start": 2223,
            "end": 2233
          },
          "start": 2222,
          "end": 2233
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2207,
      "end": 2235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2251,
        "end": 2256
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
              "start": 2260,
              "end": 2263
            },
            "start": 2258,
            "end": 2263
          },
          "start": 2257,
          "end": 2263
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2265,
        "end": 2268
      },
      "expression": false,
      "start": 2242,
      "end": 2268
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2279,
        "end": 2284
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
                "start": 2288,
                "end": 2289
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2290,
                    "end": 2296
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2298,
                      "end": 2302
                    },
                    "typeArguments": null,
                    "start": 2298,
                    "end": 2302
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2304,
                      "end": 2310
                    },
                    "typeArguments": null,
                    "start": 2304,
                    "end": 2310
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 2312,
                    "end": 2319
                  }
                ],
                "start": 2289,
                "end": 2320
              },
              "start": 2288,
              "end": 2320
            },
            "start": 2286,
            "end": 2320
          },
          "start": 2285,
          "end": 2320
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2270,
      "end": 2322
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2332,
        "end": 2337
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
                "start": 2348,
                "end": 2349
              },
              "typeArguments": null,
              "start": 2341,
              "end": 2349
            },
            "start": 2339,
            "end": 2349
          },
          "start": 2338,
          "end": 2349
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2323,
      "end": 2351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2367,
        "end": 2372
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
              "start": 2376,
              "end": 2379
            },
            "start": 2374,
            "end": 2379
          },
          "start": 2373,
          "end": 2379
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2381,
        "end": 2384
      },
      "expression": false,
      "start": 2358,
      "end": 2384
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2395,
        "end": 2400
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
                "start": 2404,
                "end": 2406
              },
              "typeArguments": null,
              "start": 2404,
              "end": 2406
            },
            "start": 2402,
            "end": 2406
          },
          "start": 2401,
          "end": 2406
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2386,
      "end": 2408
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2418,
        "end": 2423
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
                "start": 2427,
                "end": 2428
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2429,
                    "end": 2435
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2437,
                      "end": 2438
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2439,
                          "end": 2445
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2447,
                          "end": 2453
                        }
                      ],
                      "start": 2438,
                      "end": 2454
                    },
                    "start": 2437,
                    "end": 2454
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2456,
                      "end": 2457
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2458,
                          "end": 2464
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2466,
                          "end": 2472
                        }
                      ],
                      "start": 2457,
                      "end": 2473
                    },
                    "start": 2456,
                    "end": 2473
                  }
                ],
                "start": 2428,
                "end": 2474
              },
              "start": 2427,
              "end": 2474
            },
            "start": 2425,
            "end": 2474
          },
          "start": 2424,
          "end": 2474
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2409,
      "end": 2476
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2492,
        "end": 2497
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
              "start": 2501,
              "end": 2504
            },
            "start": 2499,
            "end": 2504
          },
          "start": 2498,
          "end": 2504
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2506,
        "end": 2509
      },
      "expression": false,
      "start": 2483,
      "end": 2509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2509
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
    "value": ">",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 76,
    "end": 82
  },
  {
    "type": "Null",
    "value": "null",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "Null",
    "value": "null",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 153,
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
    "value": "V",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "V",
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
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191
  },
  {
    "type": "Null",
    "value": "null",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 203,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 213,
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
    "value": "X",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 250,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 347,
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
    "value": "A",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 393,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
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
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 414,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 444,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 471,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 491,
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
    "value": "string",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 509,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 527,
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
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 537,
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
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 556,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 574,
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
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 612,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 620,
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
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 667,
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
    "start": 687,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 696,
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
    "value": "foo2",
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
    "type": "Identifier",
    "value": "I",
    "start": 732,
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
    "value": "string",
    "start": 734,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 742,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 769,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "string",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 805,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 832,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 841,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 849,
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
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 859,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 868,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 876,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 887,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 896,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 904,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 924,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 933,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 951,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 960,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 968,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 979,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 988,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1043,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1052,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
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
    "value": "B",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1107,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1134,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1143,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1156,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1165,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1176,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1184,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1192,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1209,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1218,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1227,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1237,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1246,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "A",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1258,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1267,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1277,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1293,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1302,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1316,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1325,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
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
    "value": "A",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1364,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1373,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1381,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1410,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1419,
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
    "value": "foo8",
    "start": 1446,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1456,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1464,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1474,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1483,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1493,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1501,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1509,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1518,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1535,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1544,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1552,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1562,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1571,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1581,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1599,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1618,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1636,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1644,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ")",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1664,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1673,
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
    "value": "foo10",
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
    "value": "boolean",
    "start": 1719,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1739,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1748,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1765,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1774,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1783,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1793,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1802,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1813,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1821,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1832,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1841,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1850,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1867,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1876,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1885,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1895,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1904,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1934,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1942,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1948,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1958,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1967,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1980,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1988,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1997,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2005,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2022,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2031,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2040,
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
    "value": "{",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2050,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2059,
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
    "value": "x",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2069,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2074,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2083,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2095,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2103,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2111,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2128,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2137,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2147,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2157,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2166,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2177,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2185,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 2191,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2199,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2207,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2216,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2225,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2242,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2251,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2260,
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
    "value": "{",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2270,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2290,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2298,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 2304,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2312,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2323,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2332,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2341,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2358,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2367,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2376,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2386,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2395,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "I2",
    "start": 2404,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2409,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2418,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2429,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2439,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2447,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2458,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2466,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2483,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2492,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2501,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2508,
    "end": 2509
  }
]
```

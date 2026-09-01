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
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
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
          }
        ],
        "start": 20,
        "end": 26
      },
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 48
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 56
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
                      "start": 60,
                      "end": 61
                    },
                    "typeArguments": null,
                    "start": 60,
                    "end": 61
                  },
                  "start": 58,
                  "end": 61
                },
                "start": 57,
                "end": 61
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
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              },
              "start": 68,
              "end": 74
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 53,
            "end": 75
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
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
                      "start": 90,
                      "end": 91
                    },
                    "typeArguments": null,
                    "start": 90,
                    "end": 91
                  },
                  "start": 88,
                  "end": 91
                },
                "start": 87,
                "end": 91
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
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  },
                  "start": 94,
                  "end": 97
                },
                "start": 93,
                "end": 97
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 100,
                "end": 107
              },
              "start": 98,
              "end": 107
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 80,
            "end": 108
          }
        ],
        "start": 27,
        "end": 110
      },
      "declare": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Combinators",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 132
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
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 142
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
                    "start": 143,
                    "end": 144
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 143,
                  "end": 144
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 147
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 146,
                  "end": 147
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 149,
                  "end": 150
                }
              ],
              "start": 142,
              "end": 151
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 165
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
                            "start": 166,
                            "end": 167
                          },
                          "typeArguments": null,
                          "start": 166,
                          "end": 167
                        },
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
                      "start": 165,
                      "end": 170
                    },
                    "start": 155,
                    "end": 170
                  },
                  "start": 153,
                  "end": 170
                },
                "start": 152,
                "end": 170
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
                              "start": 179,
                              "end": 180
                            },
                            "typeArguments": null,
                            "start": 179,
                            "end": 180
                          },
                          "start": 177,
                          "end": 180
                        },
                        "start": 176,
                        "end": 180
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
                              "start": 185,
                              "end": 186
                            },
                            "typeArguments": null,
                            "start": 185,
                            "end": 186
                          },
                          "start": 183,
                          "end": 186
                        },
                        "start": 182,
                        "end": 186
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
                          "start": 191,
                          "end": 192
                        },
                        "typeArguments": null,
                        "start": 191,
                        "end": 192
                      },
                      "start": 188,
                      "end": 192
                    },
                    "start": 175,
                    "end": 192
                  },
                  "start": 173,
                  "end": 192
                },
                "start": 172,
                "end": 192
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
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
                        "name": "T",
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
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 210
                      },
                      "typeArguments": null,
                      "start": 209,
                      "end": 210
                    }
                  ],
                  "start": 205,
                  "end": 211
                },
                "start": 195,
                "end": 211
              },
              "start": 193,
              "end": 211
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 139,
            "end": 212
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
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
                    "name": "U",
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
              "start": 220,
              "end": 226
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 240
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
                            "start": 241,
                            "end": 242
                          },
                          "typeArguments": null,
                          "start": 241,
                          "end": 242
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 243,
                            "end": 244
                          },
                          "typeArguments": null,
                          "start": 243,
                          "end": 244
                        }
                      ],
                      "start": 240,
                      "end": 245
                    },
                    "start": 230,
                    "end": 245
                  },
                  "start": 228,
                  "end": 245
                },
                "start": 227,
                "end": 245
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
                              "start": 260,
                              "end": 261
                            },
                            "typeArguments": null,
                            "start": 260,
                            "end": 261
                          },
                          "start": 258,
                          "end": 261
                        },
                        "start": 257,
                        "end": 261
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 266,
                        "end": 269
                      },
                      "start": 263,
                      "end": 269
                    },
                    "start": 250,
                    "end": 269
                  },
                  "start": 248,
                  "end": 269
                },
                "start": 247,
                "end": 269
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 282
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 283,
                      "end": 286
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 288,
                      "end": 291
                    }
                  ],
                  "start": 282,
                  "end": 292
                },
                "start": 272,
                "end": 292
              },
              "start": 270,
              "end": 292
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 217,
            "end": 293
          }
        ],
        "start": 133,
        "end": 295
      },
      "declare": false,
      "start": 111,
      "end": 295
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 314
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 315,
                      "end": 321
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 323,
                      "end": 329
                    }
                  ],
                  "start": 314,
                  "end": 330
                },
                "start": 304,
                "end": 330
              },
              "start": 302,
              "end": 330
            },
            "start": 300,
            "end": 330
          },
          "init": null,
          "definite": false,
          "start": 300,
          "end": 330
        }
      ],
      "declare": false,
      "start": 296,
      "end": 331
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
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Combinators",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 350
                },
                "typeArguments": null,
                "start": 339,
                "end": 350
              },
              "start": 337,
              "end": 350
            },
            "start": 336,
            "end": 350
          },
          "init": null,
          "definite": false,
          "start": 336,
          "end": 350
        }
      ],
      "declare": false,
      "start": 332,
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 359
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 367
              },
              "optional": false,
              "computed": false,
              "start": 362,
              "end": 367
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 370
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 374
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 389
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 390,
                            "end": 397
                          },
                          "optional": false,
                          "computed": false,
                          "start": 388,
                          "end": 397
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 388,
                        "end": 399
                      },
                      "start": 381,
                      "end": 399
                    }
                  ],
                  "start": 379,
                  "end": 401
                },
                "id": null,
                "generator": false,
                "start": 372,
                "end": 401
              }
            ],
            "optional": false,
            "start": 362,
            "end": 402
          },
          "definite": false,
          "start": 356,
          "end": 402
        }
      ],
      "declare": false,
      "start": 352,
      "end": 403
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
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 412
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSNumberKeyword",
                    "start": 419,
                    "end": 425
                  },
                  "start": 417,
                  "end": 425
                },
                "start": 416,
                "end": 425
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 440
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 448
                      },
                      "optional": false,
                      "computed": false,
                      "start": 439,
                      "end": 448
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 439,
                    "end": 450
                  },
                  "start": 432,
                  "end": 450
                }
              ],
              "start": 430,
              "end": 452
            },
            "id": null,
            "generator": false,
            "start": 415,
            "end": 452
          },
          "definite": false,
          "start": 409,
          "end": 452
        }
      ],
      "declare": false,
      "start": 405,
      "end": 453
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 461
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 469
              },
              "optional": false,
              "computed": false,
              "start": 464,
              "end": 469
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 472
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "rf1",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 477
              }
            ],
            "optional": false,
            "start": 464,
            "end": 478
          },
          "definite": false,
          "start": 458,
          "end": 478
        }
      ],
      "declare": false,
      "start": 454,
      "end": 479
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 481
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
    "value": "Collection",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
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
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
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
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 70,
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
    "value": "remove",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "y",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 111,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Combinators",
    "start": 121,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "U",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 155,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Collection",
    "start": 195,
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
    "value": "T",
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
    "value": "V",
    "start": 209,
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
    "type": "Identifier",
    "value": "map",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "U",
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
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 227,
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
    "value": "Collection",
    "start": 230,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
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
    "value": "T",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 263,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 272,
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
    "value": "any",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 288,
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
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 304,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 315,
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
    "value": "string",
    "start": 323,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Combinators",
    "start": 339,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "r1a",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 368,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
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
    "value": "=>",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 390,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
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
    "value": "number",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 432,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 441,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  }
]
```

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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
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
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
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
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 44
          }
        ],
        "start": 33,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
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
                    "start": 75,
                    "end": 76
                  },
                  "typeArguments": null,
                  "start": 75,
                  "end": 76
                },
                "start": 69,
                "end": 76
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 79,
                  "end": 80
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
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
                "end": 83
              },
              "optional": false,
              "readonly": null,
              "start": 61,
              "end": 85
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 94
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 103,
                    "end": 107
                  }
                ],
                "start": 94,
                "end": 108
              },
              "start": 88,
              "end": 108
            }
          ],
          "start": 61,
          "end": 108
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
              "start": 116,
              "end": 117
            },
            "typeArguments": null,
            "start": 116,
            "end": 117
          },
          "start": 110,
          "end": 117
        },
        "start": 60,
        "end": 118
      },
      "declare": false,
      "start": 48,
      "end": 119
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 127
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
              "start": 128,
              "end": 129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 129
          }
        ],
        "start": 127,
        "end": 130
      },
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 139
            },
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
                  "start": 141,
                  "end": 142
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
                        "start": 143,
                        "end": 144
                      },
                      "typeArguments": null,
                      "start": 143,
                      "end": 144
                    }
                  ],
                  "start": 142,
                  "end": 145
                },
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 145
          }
        ],
        "start": 133,
        "end": 147
      },
      "declare": false,
      "start": 120,
      "end": 148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
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
          }
        ],
        "start": 156,
        "end": 159
      },
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 168
            },
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
                  "start": 170,
                  "end": 171
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
                        "start": 172,
                        "end": 173
                      },
                      "typeArguments": null,
                      "start": 172,
                      "end": 173
                    }
                  ],
                  "start": 171,
                  "end": 174
                },
                "start": 170,
                "end": 174
              },
              "start": 168,
              "end": 174
            },
            "accessibility": null,
            "static": false,
            "start": 164,
            "end": 174
          }
        ],
        "start": 162,
        "end": 176
      },
      "declare": false,
      "start": 149,
      "end": 177
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 190
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
          }
        ],
        "start": 190,
        "end": 193
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 202
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
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 204
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
                        "start": 219,
                        "end": 220
                      },
                      "typeArguments": null,
                      "start": 219,
                      "end": 220
                    },
                    "start": 213,
                    "end": 220
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 203,
                  "end": 220
                }
              ],
              "start": 202,
              "end": 221
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 228
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
                            "start": 229,
                            "end": 233
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
                                  "start": 234,
                                  "end": 235
                                },
                                "typeArguments": null,
                                "start": 234,
                                "end": 235
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 237,
                                  "end": 238
                                },
                                "typeArguments": null,
                                "start": 237,
                                "end": 238
                              }
                            ],
                            "start": 233,
                            "end": 239
                          },
                          "start": 229,
                          "end": 239
                        }
                      ],
                      "start": 228,
                      "end": 240
                    },
                    "start": 226,
                    "end": 240
                  },
                  "start": 224,
                  "end": 240
                },
                "start": 222,
                "end": 240
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 248
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
                            "start": 249,
                            "end": 253
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
                                  "start": 254,
                                  "end": 255
                                },
                                "typeArguments": null,
                                "start": 254,
                                "end": 255
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 257,
                                  "end": 258
                                },
                                "typeArguments": null,
                                "start": 257,
                                "end": 258
                              }
                            ],
                            "start": 253,
                            "end": 259
                          },
                          "start": 249,
                          "end": 259
                        }
                      ],
                      "start": 248,
                      "end": 260
                    },
                    "start": 246,
                    "end": 260
                  },
                  "start": 244,
                  "end": 260
                },
                "start": 242,
                "end": 260
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 263,
                "end": 267
              },
              "start": 261,
              "end": 267
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 200,
            "end": 268
          }
        ],
        "start": 194,
        "end": 270
      },
      "declare": false,
      "start": 179,
      "end": 270
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
            "name": "i",
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
                  "start": 281,
                  "end": 282
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 283,
                            "end": 284
                          },
                          "typeArguments": null,
                          "start": 283,
                          "end": 284
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 287,
                            "end": 288
                          },
                          "typeArguments": null,
                          "start": 287,
                          "end": 288
                        }
                      ],
                      "start": 283,
                      "end": 288
                    }
                  ],
                  "start": 282,
                  "end": 289
                },
                "start": 281,
                "end": 289
              },
              "start": 279,
              "end": 289
            },
            "start": 278,
            "end": 289
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 292,
              "end": 296
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 300,
              "end": 303
            },
            "start": 292,
            "end": 303
          },
          "definite": false,
          "start": 278,
          "end": 303
        }
      ],
      "declare": false,
      "start": 272,
      "end": 304
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 317
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
                        "start": 318,
                        "end": 319
                      },
                      "typeArguments": null,
                      "start": 318,
                      "end": 319
                    }
                  ],
                  "start": 317,
                  "end": 320
                },
                "start": 315,
                "end": 320
              },
              "start": 313,
              "end": 320
            },
            "start": 311,
            "end": 320
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 323,
              "end": 327
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 331,
              "end": 334
            },
            "start": 323,
            "end": 334
          },
          "definite": false,
          "start": 311,
          "end": 334
        }
      ],
      "declare": false,
      "start": 305,
      "end": 335
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 422
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 425
          },
          "optional": false,
          "computed": false,
          "start": 421,
          "end": 425
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 426,
              "end": 430
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 434,
              "end": 437
            },
            "start": 426,
            "end": 437
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 441
          }
        ],
        "optional": false,
        "start": 421,
        "end": 442
      },
      "directive": null,
      "start": 421,
      "end": 443
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
            "name": "_i",
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
                  "start": 455,
                  "end": 456
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
                        "start": 457,
                        "end": 458
                      },
                      "typeArguments": null,
                      "start": 457,
                      "end": 458
                    }
                  ],
                  "start": 456,
                  "end": 459
                },
                "start": 455,
                "end": 459
              },
              "start": 453,
              "end": 459
            },
            "start": 451,
            "end": 459
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 463
          },
          "definite": false,
          "start": 451,
          "end": 463
        }
      ],
      "declare": false,
      "start": 445,
      "end": 464
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 464
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 24,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 53,
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
    "value": "T",
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
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 66,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "T",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 120,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
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
    "value": "data",
    "start": 135,
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
    "value": "X",
    "start": 141,
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
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 149,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 179,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 205,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "p2",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
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
    "value": "K",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "A",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Null",
    "value": "null",
    "start": 292,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 297,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 305,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Null",
    "value": "null",
    "start": 323,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Null",
    "value": "null",
    "start": 426,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 431,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 439,
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
    "value": "const",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  }
]
```

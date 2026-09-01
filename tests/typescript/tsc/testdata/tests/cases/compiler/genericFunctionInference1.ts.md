__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 32,
              "end": 37
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 37
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 21,
        "end": 41
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
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
                    "start": 50,
                    "end": 54
                  },
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
                        "start": 56,
                        "end": 57
                      },
                      "typeArguments": null,
                      "start": 56,
                      "end": 57
                    },
                    "start": 54,
                    "end": 57
                  },
                  "value": null,
                  "start": 47,
                  "end": 57
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
                    "start": 62,
                    "end": 63
                  },
                  "typeArguments": null,
                  "start": 62,
                  "end": 63
                },
                "start": 59,
                "end": 63
              },
              "start": 46,
              "end": 63
            },
            "start": 44,
            "end": 63
          },
          "start": 42,
          "end": 63
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
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
                "start": 70,
                "end": 74
              },
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
                    "start": 76,
                    "end": 77
                  },
                  "typeArguments": null,
                  "start": 76,
                  "end": 77
                },
                "start": 74,
                "end": 77
              },
              "value": null,
              "start": 67,
              "end": 77
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
                "start": 82,
                "end": 83
              },
              "typeArguments": null,
              "start": 82,
              "end": 83
            },
            "start": 79,
            "end": 83
          },
          "start": 66,
          "end": 83
        },
        "start": 64,
        "end": 83
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 106
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 117,
                "end": 120
              },
              "start": 117,
              "end": 122
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 122
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 128
          }
        ],
        "start": 106,
        "end": 129
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
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
                    "start": 138,
                    "end": 142
                  },
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
                        "start": 144,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 145
                    },
                    "start": 142,
                    "end": 145
                  },
                  "value": null,
                  "start": 135,
                  "end": 145
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
                    "start": 150,
                    "end": 151
                  },
                  "typeArguments": null,
                  "start": 150,
                  "end": 151
                },
                "start": 147,
                "end": 151
              },
              "start": 134,
              "end": 151
            },
            "start": 132,
            "end": 151
          },
          "start": 130,
          "end": 151
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bc",
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
                  "name": "b",
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
                        "start": 161,
                        "end": 162
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 162
                    },
                    "start": 159,
                    "end": 162
                  },
                  "start": 158,
                  "end": 162
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
                    "start": 167,
                    "end": 168
                  },
                  "typeArguments": null,
                  "start": 167,
                  "end": 168
                },
                "start": 164,
                "end": 168
              },
              "start": 157,
              "end": 168
            },
            "start": 155,
            "end": 168
          },
          "start": 153,
          "end": 168
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
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
                "start": 175,
                "end": 179
              },
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
              "value": null,
              "start": 172,
              "end": 182
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
                "start": 187,
                "end": 188
              },
              "typeArguments": null,
              "start": 187,
              "end": 188
            },
            "start": 184,
            "end": 188
          },
          "start": 171,
          "end": 188
        },
        "start": 169,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 85,
      "end": 189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 211
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 222,
                "end": 225
              },
              "start": 222,
              "end": 227
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 212,
            "end": 227
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 229,
            "end": 230
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 232,
            "end": 233
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 236
          }
        ],
        "start": 211,
        "end": 237
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
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
                    "start": 246,
                    "end": 250
                  },
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
                  "value": null,
                  "start": 243,
                  "end": 253
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
                    "start": 258,
                    "end": 259
                  },
                  "typeArguments": null,
                  "start": 258,
                  "end": 259
                },
                "start": 255,
                "end": 259
              },
              "start": 242,
              "end": 259
            },
            "start": 240,
            "end": 259
          },
          "start": 238,
          "end": 259
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bc",
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
                  "name": "b",
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
                        "start": 269,
                        "end": 270
                      },
                      "typeArguments": null,
                      "start": 269,
                      "end": 270
                    },
                    "start": 267,
                    "end": 270
                  },
                  "start": 266,
                  "end": 270
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
                    "start": 275,
                    "end": 276
                  },
                  "typeArguments": null,
                  "start": 275,
                  "end": 276
                },
                "start": 272,
                "end": 276
              },
              "start": 265,
              "end": 276
            },
            "start": 263,
            "end": 276
          },
          "start": 261,
          "end": 276
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cd",
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
                  "name": "c",
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
                        "start": 286,
                        "end": 287
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 287
                    },
                    "start": 284,
                    "end": 287
                  },
                  "start": 283,
                  "end": 287
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 293
                  },
                  "typeArguments": null,
                  "start": 292,
                  "end": 293
                },
                "start": 289,
                "end": 293
              },
              "start": 282,
              "end": 293
            },
            "start": 280,
            "end": 293
          },
          "start": 278,
          "end": 293
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
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
                "start": 300,
                "end": 304
              },
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
              "value": null,
              "start": 297,
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "typeArguments": null,
              "start": 312,
              "end": 313
            },
            "start": 309,
            "end": 313
          },
          "start": 296,
          "end": 313
        },
        "start": 294,
        "end": 313
      },
      "body": null,
      "expression": false,
      "start": 190,
      "end": 314
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "list",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 337
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
          }
        ],
        "start": 337,
        "end": 340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
          "type": "TSArrayType",
          "elementType": {
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
          "start": 348,
          "end": 351
        },
        "start": 346,
        "end": 351
      },
      "body": null,
      "expression": false,
      "start": 316,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "box",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 373
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
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 375
          }
        ],
        "start": 373,
        "end": 376
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
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 381
              },
              "typeArguments": null,
              "start": 380,
              "end": 381
            },
            "start": 378,
            "end": 381
          },
          "start": 377,
          "end": 381
        }
      ],
      "returnType": {
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 391
              },
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
                    "start": 393,
                    "end": 394
                  },
                  "typeArguments": null,
                  "start": 393,
                  "end": 394
                },
                "start": 391,
                "end": 394
              },
              "accessibility": null,
              "static": false,
              "start": 386,
              "end": 394
            }
          ],
          "start": 384,
          "end": 396
        },
        "start": 382,
        "end": 396
      },
      "body": null,
      "expression": false,
      "start": 353,
      "end": 397
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 418
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
              "start": 419,
              "end": 420
            },
            "constraint": {
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 436
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
                        "start": 438,
                        "end": 439
                      },
                      "typeArguments": null,
                      "start": 438,
                      "end": 439
                    },
                    "start": 436,
                    "end": 439
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 431,
                  "end": 439
                }
              ],
              "start": 429,
              "end": 441
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 419,
            "end": 441
          }
        ],
        "start": 418,
        "end": 442
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
                "start": 446,
                "end": 447
              },
              "typeArguments": null,
              "start": 446,
              "end": 447
            },
            "start": 444,
            "end": 447
          },
          "start": 443,
          "end": 447
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
            "start": 450,
            "end": 451
          },
          "typeArguments": null,
          "start": 450,
          "end": 451
        },
        "start": 448,
        "end": 451
      },
      "body": null,
      "expression": false,
      "start": 398,
      "end": 452
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
            "name": "f00",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 463
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 470
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 475
              }
            ],
            "optional": false,
            "start": 466,
            "end": 476
          },
          "definite": false,
          "start": 460,
          "end": 476
        }
      ],
      "declare": false,
      "start": 454,
      "end": 477
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
            "name": "f01",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 487
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 494
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 499
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 504
              }
            ],
            "optional": false,
            "start": 490,
            "end": 505
          },
          "definite": false,
          "start": 484,
          "end": 505
        }
      ],
      "declare": false,
      "start": 478,
      "end": 506
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
            "name": "f02",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 516
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 523
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 527
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 533
              }
            ],
            "optional": false,
            "start": 519,
            "end": 534
          },
          "definite": false,
          "start": 513,
          "end": 534
        }
      ],
      "declare": false,
      "start": 507,
      "end": 535
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
            "name": "f03",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 552
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 554
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 562
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 563,
                      "end": 564
                    }
                  ],
                  "optional": false,
                  "start": 558,
                  "end": 565
                },
                "id": null,
                "generator": false,
                "start": 553,
                "end": 565
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 570
              }
            ],
            "optional": false,
            "start": 548,
            "end": 571
          },
          "definite": false,
          "start": 542,
          "end": 571
        }
      ],
      "declare": false,
      "start": 536,
      "end": 572
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
            "name": "f04",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 589
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 594
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 596,
                    "end": 597
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 601,
                    "end": 604
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 606
                    }
                  ],
                  "optional": false,
                  "start": 601,
                  "end": 607
                },
                "id": null,
                "generator": false,
                "start": 596,
                "end": 607
              }
            ],
            "optional": false,
            "start": 585,
            "end": 608
          },
          "definite": false,
          "start": 579,
          "end": 608
        }
      ],
      "declare": false,
      "start": 573,
      "end": 609
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
            "name": "f05",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 619
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 626
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 628
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 636
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 638
                    }
                  ],
                  "optional": false,
                  "start": 632,
                  "end": 639
                },
                "id": null,
                "generator": false,
                "start": 627,
                "end": 639
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 642
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 649
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 650,
                      "end": 651
                    }
                  ],
                  "optional": false,
                  "start": 646,
                  "end": 652
                },
                "id": null,
                "generator": false,
                "start": 641,
                "end": 652
              }
            ],
            "optional": false,
            "start": 622,
            "end": 653
          },
          "definite": false,
          "start": 616,
          "end": 653
        }
      ],
      "declare": false,
      "start": 610,
      "end": 653
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
            "name": "f06",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 663
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 666,
              "end": 670
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 675
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 681
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 685
                  }
                ],
                "optional": false,
                "start": 677,
                "end": 686
              }
            ],
            "optional": false,
            "start": 666,
            "end": 687
          },
          "definite": false,
          "start": 660,
          "end": 687
        }
      ],
      "declare": false,
      "start": 654,
      "end": 688
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
            "name": "f07",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 698
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 705
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 707
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 715
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 717
                    }
                  ],
                  "optional": false,
                  "start": 711,
                  "end": 718
                },
                "id": null,
                "generator": false,
                "start": 706,
                "end": 718
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 724
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 728
                  }
                ],
                "optional": false,
                "start": 720,
                "end": 729
              }
            ],
            "optional": false,
            "start": 701,
            "end": 730
          },
          "definite": false,
          "start": 695,
          "end": 730
        }
      ],
      "declare": false,
      "start": 689,
      "end": 731
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
            "name": "f08",
            "optional": false,
            "typeAnnotation": null,
            "start": 738,
            "end": 741
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 748
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 750
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 758
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 760
                    }
                  ],
                  "optional": false,
                  "start": 754,
                  "end": 761
                },
                "id": null,
                "generator": false,
                "start": 749,
                "end": 761
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 767
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 768,
                        "end": 769
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "box",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 773,
                        "end": 776
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 777,
                          "end": 778
                        }
                      ],
                      "optional": false,
                      "start": 773,
                      "end": 779
                    },
                    "id": null,
                    "generator": false,
                    "start": 768,
                    "end": 779
                  }
                ],
                "optional": false,
                "start": 763,
                "end": 780
              }
            ],
            "optional": false,
            "start": 744,
            "end": 781
          },
          "definite": false,
          "start": 738,
          "end": 781
        }
      ],
      "declare": false,
      "start": 732,
      "end": 782
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
            "name": "f09",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 792
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 799
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 800,
                "end": 804
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 807
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 811,
                    "end": 812
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 819
                  },
                  "optional": false,
                  "computed": false,
                  "start": 811,
                  "end": 819
                },
                "id": null,
                "generator": false,
                "start": 806,
                "end": 819
              }
            ],
            "optional": false,
            "start": 795,
            "end": 820
          },
          "definite": false,
          "start": 789,
          "end": 820
        }
      ],
      "declare": false,
      "start": 783,
      "end": 821
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 831
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 838
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 842
              }
            ],
            "optional": false,
            "start": 834,
            "end": 843
          },
          "definite": false,
          "start": 828,
          "end": 843
        }
      ],
      "declare": false,
      "start": 822,
      "end": 844
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 854
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 861
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 865
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 870
              }
            ],
            "optional": false,
            "start": 857,
            "end": 871
          },
          "definite": false,
          "start": 851,
          "end": 871
        }
      ],
      "declare": false,
      "start": 845,
      "end": 872
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
            "name": "g00",
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
                        "start": 886,
                        "end": 887
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 886,
                      "end": 887
                    }
                  ],
                  "start": 885,
                  "end": 888
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
                          "start": 892,
                          "end": 893
                        },
                        "typeArguments": null,
                        "start": 892,
                        "end": 893
                      },
                      "start": 890,
                      "end": 893
                    },
                    "start": 889,
                    "end": 893
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
                        "start": 898,
                        "end": 899
                      },
                      "typeArguments": null,
                      "start": 898,
                      "end": 899
                    },
                    "start": 898,
                    "end": 901
                  },
                  "start": 895,
                  "end": 901
                },
                "start": 885,
                "end": 901
              },
              "start": 883,
              "end": 901
            },
            "start": 880,
            "end": 901
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 908
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 909,
                "end": 913
              }
            ],
            "optional": false,
            "start": 904,
            "end": 914
          },
          "definite": false,
          "start": 880,
          "end": 914
        }
      ],
      "declare": false,
      "start": 874,
      "end": 915
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
            "name": "g01",
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
                        "start": 928,
                        "end": 929
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 928,
                      "end": 929
                    }
                  ],
                  "start": 927,
                  "end": 930
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
                          "start": 934,
                          "end": 935
                        },
                        "typeArguments": null,
                        "start": 934,
                        "end": 935
                      },
                      "start": 932,
                      "end": 935
                    },
                    "start": 931,
                    "end": 935
                  }
                ],
                "returnType": {
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 942,
                          "end": 947
                        },
                        "typeAnnotation": {
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
                                "start": 949,
                                "end": 950
                              },
                              "typeArguments": null,
                              "start": 949,
                              "end": 950
                            },
                            "start": 949,
                            "end": 952
                          },
                          "start": 947,
                          "end": 952
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 942,
                        "end": 952
                      }
                    ],
                    "start": 940,
                    "end": 954
                  },
                  "start": 937,
                  "end": 954
                },
                "start": 927,
                "end": 954
              },
              "start": 925,
              "end": 954
            },
            "start": 922,
            "end": 954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 961
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 962,
                "end": 966
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 971
              }
            ],
            "optional": false,
            "start": 957,
            "end": 972
          },
          "definite": false,
          "start": 922,
          "end": 972
        }
      ],
      "declare": false,
      "start": 916,
      "end": 973
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
            "name": "g02",
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
                        "start": 986,
                        "end": 987
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 986,
                      "end": 987
                    }
                  ],
                  "start": 985,
                  "end": 988
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
                          "start": 992,
                          "end": 993
                        },
                        "typeArguments": null,
                        "start": 992,
                        "end": 993
                      },
                      "start": 990,
                      "end": 993
                    },
                    "start": 989,
                    "end": 993
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1000,
                            "end": 1005
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
                                "start": 1007,
                                "end": 1008
                              },
                              "typeArguments": null,
                              "start": 1007,
                              "end": 1008
                            },
                            "start": 1005,
                            "end": 1008
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1000,
                          "end": 1008
                        }
                      ],
                      "start": 998,
                      "end": 1010
                    },
                    "start": 998,
                    "end": 1012
                  },
                  "start": 995,
                  "end": 1012
                },
                "start": 985,
                "end": 1012
              },
              "start": 983,
              "end": 1012
            },
            "start": 980,
            "end": 1012
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1019
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1020,
                "end": 1023
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1025,
                "end": 1029
              }
            ],
            "optional": false,
            "start": 1015,
            "end": 1030
          },
          "definite": false,
          "start": 980,
          "end": 1030
        }
      ],
      "declare": false,
      "start": 974,
      "end": 1031
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
            "name": "g03",
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
                        "start": 1044,
                        "end": 1045
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1044,
                      "end": 1045
                    }
                  ],
                  "start": 1043,
                  "end": 1046
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
                          "start": 1050,
                          "end": 1051
                        },
                        "typeArguments": null,
                        "start": 1050,
                        "end": 1051
                      },
                      "start": 1048,
                      "end": 1051
                    },
                    "start": 1047,
                    "end": 1051
                  }
                ],
                "returnType": {
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1058,
                          "end": 1063
                        },
                        "typeAnnotation": {
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
                                "start": 1065,
                                "end": 1066
                              },
                              "typeArguments": null,
                              "start": 1065,
                              "end": 1066
                            },
                            "start": 1065,
                            "end": 1068
                          },
                          "start": 1063,
                          "end": 1068
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1058,
                        "end": 1068
                      }
                    ],
                    "start": 1056,
                    "end": 1070
                  },
                  "start": 1053,
                  "end": 1070
                },
                "start": 1043,
                "end": 1070
              },
              "start": 1041,
              "end": 1070
            },
            "start": 1038,
            "end": 1070
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1077
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1078,
                    "end": 1079
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1083,
                    "end": 1087
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1088,
                      "end": 1089
                    }
                  ],
                  "optional": false,
                  "start": 1083,
                  "end": 1090
                },
                "id": null,
                "generator": false,
                "start": 1078,
                "end": 1090
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1095
              }
            ],
            "optional": false,
            "start": 1073,
            "end": 1096
          },
          "definite": false,
          "start": 1038,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 1032,
      "end": 1097
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
            "name": "g04",
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
                        "start": 1110,
                        "end": 1111
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1110,
                      "end": 1111
                    }
                  ],
                  "start": 1109,
                  "end": 1112
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
                          "start": 1116,
                          "end": 1117
                        },
                        "typeArguments": null,
                        "start": 1116,
                        "end": 1117
                      },
                      "start": 1114,
                      "end": 1117
                    },
                    "start": 1113,
                    "end": 1117
                  }
                ],
                "returnType": {
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1124,
                          "end": 1129
                        },
                        "typeAnnotation": {
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
                                "start": 1131,
                                "end": 1132
                              },
                              "typeArguments": null,
                              "start": 1131,
                              "end": 1132
                            },
                            "start": 1131,
                            "end": 1134
                          },
                          "start": 1129,
                          "end": 1134
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1124,
                        "end": 1134
                      }
                    ],
                    "start": 1122,
                    "end": 1136
                  },
                  "start": 1119,
                  "end": 1136
                },
                "start": 1109,
                "end": 1136
              },
              "start": 1107,
              "end": 1136
            },
            "start": 1104,
            "end": 1136
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1143
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1144,
                "end": 1148
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1155,
                    "end": 1158
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1159,
                      "end": 1160
                    }
                  ],
                  "optional": false,
                  "start": 1155,
                  "end": 1161
                },
                "id": null,
                "generator": false,
                "start": 1150,
                "end": 1161
              }
            ],
            "optional": false,
            "start": 1139,
            "end": 1162
          },
          "definite": false,
          "start": 1104,
          "end": 1162
        }
      ],
      "declare": false,
      "start": 1098,
      "end": 1163
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
            "name": "g05",
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
                        "start": 1176,
                        "end": 1177
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1176,
                      "end": 1177
                    }
                  ],
                  "start": 1175,
                  "end": 1178
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
                          "start": 1182,
                          "end": 1183
                        },
                        "typeArguments": null,
                        "start": 1182,
                        "end": 1183
                      },
                      "start": 1180,
                      "end": 1183
                    },
                    "start": 1179,
                    "end": 1183
                  }
                ],
                "returnType": {
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1190,
                          "end": 1195
                        },
                        "typeAnnotation": {
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
                                "start": 1197,
                                "end": 1198
                              },
                              "typeArguments": null,
                              "start": 1197,
                              "end": 1198
                            },
                            "start": 1197,
                            "end": 1200
                          },
                          "start": 1195,
                          "end": 1200
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1190,
                        "end": 1200
                      }
                    ],
                    "start": 1188,
                    "end": 1202
                  },
                  "start": 1185,
                  "end": 1202
                },
                "start": 1175,
                "end": 1202
              },
              "start": 1173,
              "end": 1202
            },
            "start": 1170,
            "end": 1202
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1209
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1210,
                    "end": 1211
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1215,
                    "end": 1219
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1220,
                      "end": 1221
                    }
                  ],
                  "optional": false,
                  "start": 1215,
                  "end": 1222
                },
                "id": null,
                "generator": false,
                "start": 1210,
                "end": 1222
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1224,
                    "end": 1225
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1229,
                    "end": 1232
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1234
                    }
                  ],
                  "optional": false,
                  "start": 1229,
                  "end": 1235
                },
                "id": null,
                "generator": false,
                "start": 1224,
                "end": 1235
              }
            ],
            "optional": false,
            "start": 1205,
            "end": 1236
          },
          "definite": false,
          "start": 1170,
          "end": 1236
        }
      ],
      "declare": false,
      "start": 1164,
      "end": 1236
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
            "name": "g06",
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
                        "start": 1249,
                        "end": 1250
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1249,
                      "end": 1250
                    }
                  ],
                  "start": 1248,
                  "end": 1251
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
                          "start": 1255,
                          "end": 1256
                        },
                        "typeArguments": null,
                        "start": 1255,
                        "end": 1256
                      },
                      "start": 1253,
                      "end": 1256
                    },
                    "start": 1252,
                    "end": 1256
                  }
                ],
                "returnType": {
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1263,
                          "end": 1268
                        },
                        "typeAnnotation": {
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
                                "start": 1270,
                                "end": 1271
                              },
                              "typeArguments": null,
                              "start": 1270,
                              "end": 1271
                            },
                            "start": 1270,
                            "end": 1273
                          },
                          "start": 1268,
                          "end": 1273
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1263,
                        "end": 1273
                      }
                    ],
                    "start": 1261,
                    "end": 1275
                  },
                  "start": 1258,
                  "end": 1275
                },
                "start": 1248,
                "end": 1275
              },
              "start": 1246,
              "end": 1275
            },
            "start": 1243,
            "end": 1275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1282
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1287
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1293
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1294,
                    "end": 1297
                  }
                ],
                "optional": false,
                "start": 1289,
                "end": 1298
              }
            ],
            "optional": false,
            "start": 1278,
            "end": 1299
          },
          "definite": false,
          "start": 1243,
          "end": 1299
        }
      ],
      "declare": false,
      "start": 1237,
      "end": 1300
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
            "name": "g07",
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
                        "start": 1313,
                        "end": 1314
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1313,
                      "end": 1314
                    }
                  ],
                  "start": 1312,
                  "end": 1315
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
                          "start": 1319,
                          "end": 1320
                        },
                        "typeArguments": null,
                        "start": 1319,
                        "end": 1320
                      },
                      "start": 1317,
                      "end": 1320
                    },
                    "start": 1316,
                    "end": 1320
                  }
                ],
                "returnType": {
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1327,
                          "end": 1332
                        },
                        "typeAnnotation": {
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
                                "start": 1334,
                                "end": 1335
                              },
                              "typeArguments": null,
                              "start": 1334,
                              "end": 1335
                            },
                            "start": 1334,
                            "end": 1337
                          },
                          "start": 1332,
                          "end": 1337
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1327,
                        "end": 1337
                      }
                    ],
                    "start": 1325,
                    "end": 1339
                  },
                  "start": 1322,
                  "end": 1339
                },
                "start": 1312,
                "end": 1339
              },
              "start": 1310,
              "end": 1339
            },
            "start": 1307,
            "end": 1339
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1342,
              "end": 1346
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1347,
                    "end": 1348
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1352,
                    "end": 1356
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1357,
                      "end": 1358
                    }
                  ],
                  "optional": false,
                  "start": 1352,
                  "end": 1359
                },
                "id": null,
                "generator": false,
                "start": 1347,
                "end": 1359
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1365
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1366,
                    "end": 1369
                  }
                ],
                "optional": false,
                "start": 1361,
                "end": 1370
              }
            ],
            "optional": false,
            "start": 1342,
            "end": 1371
          },
          "definite": false,
          "start": 1307,
          "end": 1371
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1372
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
            "name": "g08",
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
                        "start": 1385,
                        "end": 1386
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1385,
                      "end": 1386
                    }
                  ],
                  "start": 1384,
                  "end": 1387
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
                          "start": 1391,
                          "end": 1392
                        },
                        "typeArguments": null,
                        "start": 1391,
                        "end": 1392
                      },
                      "start": 1389,
                      "end": 1392
                    },
                    "start": 1388,
                    "end": 1392
                  }
                ],
                "returnType": {
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1399,
                          "end": 1404
                        },
                        "typeAnnotation": {
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
                                "start": 1406,
                                "end": 1407
                              },
                              "typeArguments": null,
                              "start": 1406,
                              "end": 1407
                            },
                            "start": 1406,
                            "end": 1409
                          },
                          "start": 1404,
                          "end": 1409
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1399,
                        "end": 1409
                      }
                    ],
                    "start": 1397,
                    "end": 1411
                  },
                  "start": 1394,
                  "end": 1411
                },
                "start": 1384,
                "end": 1411
              },
              "start": 1382,
              "end": 1411
            },
            "start": 1379,
            "end": 1411
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1414,
              "end": 1418
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1419,
                    "end": 1420
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1424,
                    "end": 1428
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1429,
                      "end": 1430
                    }
                  ],
                  "optional": false,
                  "start": 1424,
                  "end": 1431
                },
                "id": null,
                "generator": false,
                "start": 1419,
                "end": 1431
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1437
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1438,
                        "end": 1439
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "box",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1443,
                        "end": 1446
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1447,
                          "end": 1448
                        }
                      ],
                      "optional": false,
                      "start": 1443,
                      "end": 1449
                    },
                    "id": null,
                    "generator": false,
                    "start": 1438,
                    "end": 1449
                  }
                ],
                "optional": false,
                "start": 1433,
                "end": 1450
              }
            ],
            "optional": false,
            "start": 1414,
            "end": 1451
          },
          "definite": false,
          "start": 1379,
          "end": 1451
        }
      ],
      "declare": false,
      "start": 1373,
      "end": 1452
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
            "name": "g09",
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
                        "start": 1465,
                        "end": 1466
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1465,
                      "end": 1466
                    }
                  ],
                  "start": 1464,
                  "end": 1467
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
                          "start": 1471,
                          "end": 1472
                        },
                        "typeArguments": null,
                        "start": 1471,
                        "end": 1472
                      },
                      "start": 1469,
                      "end": 1472
                    },
                    "start": 1468,
                    "end": 1472
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1477,
                    "end": 1483
                  },
                  "start": 1474,
                  "end": 1483
                },
                "start": 1464,
                "end": 1483
              },
              "start": 1462,
              "end": 1483
            },
            "start": 1459,
            "end": 1483
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1486,
              "end": 1490
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1491,
                "end": 1495
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1497,
                    "end": 1498
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1502,
                    "end": 1503
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1504,
                    "end": 1510
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1502,
                  "end": 1510
                },
                "id": null,
                "generator": false,
                "start": 1497,
                "end": 1510
              }
            ],
            "optional": false,
            "start": 1486,
            "end": 1511
          },
          "definite": false,
          "start": 1459,
          "end": 1511
        }
      ],
      "declare": false,
      "start": 1453,
      "end": 1512
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
            "name": "g10",
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
                        "start": 1525,
                        "end": 1526
                      },
                      "constraint": {
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
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1537,
                              "end": 1542
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
                                  "start": 1544,
                                  "end": 1545
                                },
                                "typeArguments": null,
                                "start": 1544,
                                "end": 1545
                              },
                              "start": 1542,
                              "end": 1545
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1537,
                            "end": 1545
                          }
                        ],
                        "start": 1535,
                        "end": 1547
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1525,
                      "end": 1547
                    }
                  ],
                  "start": 1524,
                  "end": 1548
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
                          "start": 1552,
                          "end": 1553
                        },
                        "typeArguments": null,
                        "start": 1552,
                        "end": 1553
                      },
                      "start": 1550,
                      "end": 1553
                    },
                    "start": 1549,
                    "end": 1553
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
                      "start": 1558,
                      "end": 1559
                    },
                    "typeArguments": null,
                    "start": 1558,
                    "end": 1559
                  },
                  "start": 1555,
                  "end": 1559
                },
                "start": 1524,
                "end": 1559
              },
              "start": 1522,
              "end": 1559
            },
            "start": 1519,
            "end": 1559
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1562,
              "end": 1566
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1570
              }
            ],
            "optional": false,
            "start": 1562,
            "end": 1571
          },
          "definite": false,
          "start": 1519,
          "end": 1571
        }
      ],
      "declare": false,
      "start": 1513,
      "end": 1572
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
            "name": "g12",
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
                        "start": 1585,
                        "end": 1586
                      },
                      "constraint": {
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
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1597,
                              "end": 1602
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
                                  "start": 1604,
                                  "end": 1605
                                },
                                "typeArguments": null,
                                "start": 1604,
                                "end": 1605
                              },
                              "start": 1602,
                              "end": 1605
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1597,
                            "end": 1605
                          }
                        ],
                        "start": 1595,
                        "end": 1607
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1585,
                      "end": 1607
                    }
                  ],
                  "start": 1584,
                  "end": 1608
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
                          "start": 1612,
                          "end": 1613
                        },
                        "typeArguments": null,
                        "start": 1612,
                        "end": 1613
                      },
                      "start": 1610,
                      "end": 1613
                    },
                    "start": 1609,
                    "end": 1613
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
                      "start": 1618,
                      "end": 1619
                    },
                    "typeArguments": null,
                    "start": 1618,
                    "end": 1619
                  },
                  "start": 1615,
                  "end": 1619
                },
                "start": 1584,
                "end": 1619
              },
              "start": 1582,
              "end": 1619
            },
            "start": 1579,
            "end": 1619
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1622,
              "end": 1626
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1627,
                "end": 1630
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1632,
                "end": 1635
              }
            ],
            "optional": false,
            "start": 1622,
            "end": 1636
          },
          "definite": false,
          "start": 1579,
          "end": 1636
        }
      ],
      "declare": false,
      "start": 1573,
      "end": 1637
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1656,
        "end": 1661
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1662,
              "end": 1663
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1662,
            "end": 1663
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1666
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1665,
            "end": 1666
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1668,
              "end": 1669
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1668,
            "end": 1669
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1672
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1671,
            "end": 1672
          }
        ],
        "start": 1661,
        "end": 1673
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
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
                  "name": "a",
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
                        "start": 1682,
                        "end": 1683
                      },
                      "typeArguments": null,
                      "start": 1682,
                      "end": 1683
                    },
                    "start": 1680,
                    "end": 1683
                  },
                  "start": 1679,
                  "end": 1683
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
                    "start": 1688,
                    "end": 1689
                  },
                  "typeArguments": null,
                  "start": 1688,
                  "end": 1689
                },
                "start": 1685,
                "end": 1689
              },
              "start": 1678,
              "end": 1689
            },
            "start": 1676,
            "end": 1689
          },
          "start": 1674,
          "end": 1689
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cd",
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
                  "name": "c",
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
                        "start": 1699,
                        "end": 1700
                      },
                      "typeArguments": null,
                      "start": 1699,
                      "end": 1700
                    },
                    "start": 1697,
                    "end": 1700
                  },
                  "start": 1696,
                  "end": 1700
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1705,
                    "end": 1706
                  },
                  "typeArguments": null,
                  "start": 1705,
                  "end": 1706
                },
                "start": 1702,
                "end": 1706
              },
              "start": 1695,
              "end": 1706
            },
            "start": 1693,
            "end": 1706
          },
          "start": 1691,
          "end": 1706
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1714,
                        "end": 1715
                      },
                      "typeArguments": null,
                      "start": 1714,
                      "end": 1715
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1717,
                        "end": 1718
                      },
                      "typeArguments": null,
                      "start": 1717,
                      "end": 1718
                    }
                  ],
                  "start": 1713,
                  "end": 1719
                },
                "start": 1711,
                "end": 1719
              },
              "start": 1710,
              "end": 1719
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
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1725,
                    "end": 1726
                  },
                  "typeArguments": null,
                  "start": 1725,
                  "end": 1726
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1728,
                    "end": 1729
                  },
                  "typeArguments": null,
                  "start": 1728,
                  "end": 1729
                }
              ],
              "start": 1724,
              "end": 1730
            },
            "start": 1721,
            "end": 1730
          },
          "start": 1709,
          "end": 1730
        },
        "start": 1707,
        "end": 1730
      },
      "body": null,
      "expression": false,
      "start": 1639,
      "end": 1731
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
            "name": "f20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1739,
            "end": 1742
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1750
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1751,
                "end": 1755
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1757,
                "end": 1760
              }
            ],
            "optional": false,
            "start": 1745,
            "end": 1761
          },
          "definite": false,
          "start": 1739,
          "end": 1761
        }
      ],
      "declare": false,
      "start": 1733,
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
            "name": "f21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1769,
            "end": 1772
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1775,
              "end": 1780
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1781,
                "end": 1784
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1786,
                "end": 1790
              }
            ],
            "optional": false,
            "start": 1775,
            "end": 1791
          },
          "definite": false,
          "start": 1769,
          "end": 1791
        }
      ],
      "declare": false,
      "start": 1763,
      "end": 1792
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
            "name": "f22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1799,
            "end": 1802
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1805,
              "end": 1810
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1811,
                "end": 1815
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1817,
                "end": 1821
              }
            ],
            "optional": false,
            "start": 1805,
            "end": 1822
          },
          "definite": false,
          "start": 1799,
          "end": 1822
        }
      ],
      "declare": false,
      "start": 1793,
      "end": 1823
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
            "name": "f23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1830,
            "end": 1833
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1836,
              "end": 1841
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1845
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1847,
                "end": 1850
              }
            ],
            "optional": false,
            "start": 1836,
            "end": 1851
          },
          "definite": false,
          "start": 1830,
          "end": 1851
        }
      ],
      "declare": false,
      "start": 1824,
      "end": 1852
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
            "name": "f24",
            "optional": false,
            "typeAnnotation": null,
            "start": 1859,
            "end": 1862
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1865,
              "end": 1870
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f20",
                "optional": false,
                "typeAnnotation": null,
                "start": 1871,
                "end": 1874
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f20",
                "optional": false,
                "typeAnnotation": null,
                "start": 1876,
                "end": 1879
              }
            ],
            "optional": false,
            "start": 1865,
            "end": 1880
          },
          "definite": false,
          "start": 1859,
          "end": 1880
        }
      ],
      "declare": false,
      "start": 1853,
      "end": 1881
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
            "name": "f25",
            "optional": false,
            "typeAnnotation": null,
            "start": 1888,
            "end": 1891
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1894,
              "end": 1899
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1900,
                "end": 1903
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1905,
                "end": 1908
              }
            ],
            "optional": false,
            "start": 1894,
            "end": 1909
          },
          "definite": false,
          "start": 1888,
          "end": 1909
        }
      ],
      "declare": false,
      "start": 1882,
      "end": 1910
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
            "name": "f26",
            "optional": false,
            "typeAnnotation": null,
            "start": 1917,
            "end": 1920
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1928
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f25",
                "optional": false,
                "typeAnnotation": null,
                "start": 1929,
                "end": 1932
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f25",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1937
              }
            ],
            "optional": false,
            "start": 1923,
            "end": 1938
          },
          "definite": false,
          "start": 1917,
          "end": 1938
        }
      ],
      "declare": false,
      "start": 1911,
      "end": 1939
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1958,
        "end": 1963
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 1965
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1964,
            "end": 1965
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1967,
              "end": 1968
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1967,
            "end": 1968
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1970,
              "end": 1971
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1970,
            "end": 1971
          }
        ],
        "start": 1963,
        "end": 1972
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
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
                  "name": "a",
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
                        "start": 1981,
                        "end": 1982
                      },
                      "typeArguments": null,
                      "start": 1981,
                      "end": 1982
                    },
                    "start": 1979,
                    "end": 1982
                  },
                  "start": 1978,
                  "end": 1982
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
                    "start": 1987,
                    "end": 1988
                  },
                  "typeArguments": null,
                  "start": 1987,
                  "end": 1988
                },
                "start": 1984,
                "end": 1988
              },
              "start": 1977,
              "end": 1988
            },
            "start": 1975,
            "end": 1988
          },
          "start": 1973,
          "end": 1988
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ac",
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
                  "name": "a",
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
                        "start": 1998,
                        "end": 1999
                      },
                      "typeArguments": null,
                      "start": 1998,
                      "end": 1999
                    },
                    "start": 1996,
                    "end": 1999
                  },
                  "start": 1995,
                  "end": 1999
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
                    "start": 2004,
                    "end": 2005
                  },
                  "typeArguments": null,
                  "start": 2004,
                  "end": 2005
                },
                "start": 2001,
                "end": 2005
              },
              "start": 1994,
              "end": 2005
            },
            "start": 1992,
            "end": 2005
          },
          "start": 1990,
          "end": 2005
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
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
                    "start": 2012,
                    "end": 2013
                  },
                  "typeArguments": null,
                  "start": 2012,
                  "end": 2013
                },
                "start": 2010,
                "end": 2013
              },
              "start": 2009,
              "end": 2013
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
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2019,
                    "end": 2020
                  },
                  "typeArguments": null,
                  "start": 2019,
                  "end": 2020
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2022,
                    "end": 2023
                  },
                  "typeArguments": null,
                  "start": 2022,
                  "end": 2023
                }
              ],
              "start": 2018,
              "end": 2024
            },
            "start": 2015,
            "end": 2024
          },
          "start": 2008,
          "end": 2024
        },
        "start": 2006,
        "end": 2024
      },
      "body": null,
      "expression": false,
      "start": 1941,
      "end": 2025
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
            "name": "f30",
            "optional": false,
            "typeAnnotation": null,
            "start": 2033,
            "end": 2036
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2039,
              "end": 2044
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 2045,
                "end": 2049
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2054
              }
            ],
            "optional": false,
            "start": 2039,
            "end": 2055
          },
          "definite": false,
          "start": 2033,
          "end": 2055
        }
      ],
      "declare": false,
      "start": 2027,
      "end": 2056
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
            "name": "f31",
            "optional": false,
            "typeAnnotation": null,
            "start": 2063,
            "end": 2066
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2074
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2075,
                "end": 2078
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 2080,
                "end": 2084
              }
            ],
            "optional": false,
            "start": 2069,
            "end": 2085
          },
          "definite": false,
          "start": 2063,
          "end": 2085
        }
      ],
      "declare": false,
      "start": 2057,
      "end": 2086
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
            "name": "f32",
            "optional": false,
            "typeAnnotation": null,
            "start": 2093,
            "end": 2096
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2099,
              "end": 2104
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2109
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 2111,
                "end": 2115
              }
            ],
            "optional": false,
            "start": 2099,
            "end": 2116
          },
          "definite": false,
          "start": 2093,
          "end": 2116
        }
      ],
      "declare": false,
      "start": 2087,
      "end": 2117
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2136,
        "end": 2141
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2142,
              "end": 2143
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2142,
            "end": 2143
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2145,
              "end": 2146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2145,
            "end": 2146
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2148,
              "end": 2149
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2148,
            "end": 2149
          }
        ],
        "start": 2141,
        "end": 2150
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
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
                            "start": 2163,
                            "end": 2164
                          },
                          "typeArguments": null,
                          "start": 2163,
                          "end": 2164
                        },
                        "start": 2161,
                        "end": 2164
                      },
                      "start": 2160,
                      "end": 2164
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
                        "start": 2169,
                        "end": 2170
                      },
                      "typeArguments": null,
                      "start": 2169,
                      "end": 2170
                    },
                    "start": 2166,
                    "end": 2170
                  },
                  "start": 2159,
                  "end": 2170
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
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
                            "start": 2176,
                            "end": 2177
                          },
                          "typeArguments": null,
                          "start": 2176,
                          "end": 2177
                        },
                        "start": 2174,
                        "end": 2177
                      },
                      "start": 2173,
                      "end": 2177
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
                        "start": 2182,
                        "end": 2183
                      },
                      "typeArguments": null,
                      "start": 2182,
                      "end": 2183
                    },
                    "start": 2179,
                    "end": 2183
                  },
                  "start": 2172,
                  "end": 2183
                }
              ],
              "start": 2158,
              "end": 2184
            },
            "start": 2156,
            "end": 2184
          },
          "start": 2151,
          "end": 2184
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
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
                    "start": 2191,
                    "end": 2192
                  },
                  "typeArguments": null,
                  "start": 2191,
                  "end": 2192
                },
                "start": 2189,
                "end": 2192
              },
              "start": 2188,
              "end": 2192
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
                "start": 2197,
                "end": 2198
              },
              "typeArguments": null,
              "start": 2197,
              "end": 2198
            },
            "start": 2194,
            "end": 2198
          },
          "start": 2187,
          "end": 2198
        },
        "start": 2185,
        "end": 2198
      },
      "body": null,
      "expression": false,
      "start": 2119,
      "end": 2199
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
            "name": "f40",
            "optional": false,
            "typeAnnotation": null,
            "start": 2207,
            "end": 2210
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2213,
              "end": 2218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2220,
                    "end": 2224
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2226,
                    "end": 2229
                  }
                ],
                "start": 2219,
                "end": 2230
              }
            ],
            "optional": false,
            "start": 2213,
            "end": 2231
          },
          "definite": false,
          "start": 2207,
          "end": 2231
        }
      ],
      "declare": false,
      "start": 2201,
      "end": 2232
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
            "name": "f41",
            "optional": false,
            "typeAnnotation": null,
            "start": 2239,
            "end": 2242
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2245,
              "end": 2250
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2252,
                    "end": 2255
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2257,
                    "end": 2261
                  }
                ],
                "start": 2251,
                "end": 2262
              }
            ],
            "optional": false,
            "start": 2245,
            "end": 2263
          },
          "definite": false,
          "start": 2239,
          "end": 2263
        }
      ],
      "declare": false,
      "start": 2233,
      "end": 2264
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2283,
        "end": 2288
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2289,
              "end": 2290
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2289,
            "end": 2290
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2292,
              "end": 2293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2292,
            "end": 2293
          }
        ],
        "start": 2288,
        "end": 2294
      },
      "params": [
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
                  "name": "a",
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
                        "start": 2302,
                        "end": 2303
                      },
                      "typeArguments": null,
                      "start": 2302,
                      "end": 2303
                    },
                    "start": 2300,
                    "end": 2303
                  },
                  "start": 2299,
                  "end": 2303
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
                    "start": 2308,
                    "end": 2309
                  },
                  "typeArguments": null,
                  "start": 2308,
                  "end": 2309
                },
                "start": 2305,
                "end": 2309
              },
              "start": 2298,
              "end": 2309
            },
            "start": 2296,
            "end": 2309
          },
          "start": 2295,
          "end": 2309
        }
      ],
      "returnType": {
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
                "start": 2314,
                "end": 2315
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
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
                            "start": 2321,
                            "end": 2322
                          },
                          "typeArguments": null,
                          "start": 2321,
                          "end": 2322
                        },
                        "start": 2319,
                        "end": 2322
                      },
                      "start": 2318,
                      "end": 2322
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
                        "start": 2327,
                        "end": 2328
                      },
                      "typeArguments": null,
                      "start": 2327,
                      "end": 2328
                    },
                    "start": 2324,
                    "end": 2328
                  },
                  "start": 2317,
                  "end": 2328
                },
                "start": 2315,
                "end": 2328
              },
              "accessibility": null,
              "static": false,
              "start": 2314,
              "end": 2328
            }
          ],
          "start": 2312,
          "end": 2330
        },
        "start": 2310,
        "end": 2330
      },
      "body": null,
      "expression": false,
      "start": 2266,
      "end": 2331
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
            "name": "f50",
            "optional": false,
            "typeAnnotation": null,
            "start": 2339,
            "end": 2342
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2350
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 2351,
                "end": 2355
              }
            ],
            "optional": false,
            "start": 2345,
            "end": 2356
          },
          "definite": false,
          "start": 2339,
          "end": 2356
        }
      ],
      "declare": false,
      "start": 2333,
      "end": 2357
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2406,
        "end": 2411
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2412,
              "end": 2413
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2412,
            "end": 2413
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2415,
              "end": 2416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2415,
            "end": 2416
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2418,
              "end": 2419
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2418,
            "end": 2419
          }
        ],
        "start": 2411,
        "end": 2420
      },
      "params": [
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
                  "name": "a",
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
                        "start": 2428,
                        "end": 2429
                      },
                      "typeArguments": null,
                      "start": 2428,
                      "end": 2429
                    },
                    "start": 2426,
                    "end": 2429
                  },
                  "start": 2425,
                  "end": 2429
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
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
                        "start": 2435,
                        "end": 2436
                      },
                      "typeArguments": null,
                      "start": 2435,
                      "end": 2436
                    },
                    "start": 2433,
                    "end": 2436
                  },
                  "start": 2431,
                  "end": 2436
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2",
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
                        "start": 2442,
                        "end": 2443
                      },
                      "typeArguments": null,
                      "start": 2442,
                      "end": 2443
                    },
                    "start": 2440,
                    "end": 2443
                  },
                  "start": 2438,
                  "end": 2443
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
                    "start": 2448,
                    "end": 2449
                  },
                  "typeArguments": null,
                  "start": 2448,
                  "end": 2449
                },
                "start": 2445,
                "end": 2449
              },
              "start": 2424,
              "end": 2449
            },
            "start": 2422,
            "end": 2449
          },
          "start": 2421,
          "end": 2449
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
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
                    "start": 2456,
                    "end": 2457
                  },
                  "typeArguments": null,
                  "start": 2456,
                  "end": 2457
                },
                "start": 2454,
                "end": 2457
              },
              "start": 2453,
              "end": 2457
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
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
                    "start": 2463,
                    "end": 2464
                  },
                  "typeArguments": null,
                  "start": 2463,
                  "end": 2464
                },
                "start": 2461,
                "end": 2464
              },
              "start": 2459,
              "end": 2464
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
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
                    "start": 2470,
                    "end": 2471
                  },
                  "typeArguments": null,
                  "start": 2470,
                  "end": 2471
                },
                "start": 2468,
                "end": 2471
              },
              "start": 2466,
              "end": 2471
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
                "start": 2476,
                "end": 2477
              },
              "typeArguments": null,
              "start": 2476,
              "end": 2477
            },
            "start": 2473,
            "end": 2477
          },
          "start": 2452,
          "end": 2477
        },
        "start": 2450,
        "end": 2477
      },
      "body": null,
      "expression": false,
      "start": 2389,
      "end": 2478
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 2496,
        "end": 2499
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
              "start": 2500,
              "end": 2501
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2500,
            "end": 2501
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2503,
              "end": 2504
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2513,
                "end": 2514
              },
              "typeArguments": null,
              "start": 2513,
              "end": 2514
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2503,
            "end": 2514
          }
        ],
        "start": 2499,
        "end": 2515
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
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
                "start": 2520,
                "end": 2521
              },
              "typeArguments": null,
              "start": 2520,
              "end": 2521
            },
            "start": 2518,
            "end": 2521
          },
          "start": 2516,
          "end": 2521
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
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
                "start": 2527,
                "end": 2528
              },
              "typeArguments": null,
              "start": 2527,
              "end": 2528
            },
            "start": 2525,
            "end": 2528
          },
          "start": 2523,
          "end": 2528
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
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
                "start": 2533,
                "end": 2534
              },
              "typeArguments": null,
              "start": 2533,
              "end": 2534
            },
            "start": 2531,
            "end": 2534
          },
          "start": 2530,
          "end": 2534
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
                "start": 2538,
                "end": 2539
              },
              "typeArguments": null,
              "start": 2538,
              "end": 2539
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2541,
                "end": 2542
              },
              "typeArguments": null,
              "start": 2541,
              "end": 2542
            }
          ],
          "start": 2537,
          "end": 2543
        },
        "start": 2535,
        "end": 2543
      },
      "body": null,
      "expression": false,
      "start": 2479,
      "end": 2544
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
            "name": "f60",
            "optional": false,
            "typeAnnotation": null,
            "start": 2550,
            "end": 2553
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrap3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2556,
              "end": 2561
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 2562,
                "end": 2565
              }
            ],
            "optional": false,
            "start": 2556,
            "end": 2566
          },
          "definite": false,
          "start": 2550,
          "end": 2566
        }
      ],
      "declare": false,
      "start": 2546,
      "end": 2567
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
            "name": "list2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 2597,
                            "end": 2598
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2597,
                          "end": 2598
                        }
                      ],
                      "start": 2596,
                      "end": 2599
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
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
                              "start": 2603,
                              "end": 2604
                            },
                            "typeArguments": null,
                            "start": 2603,
                            "end": 2604
                          },
                          "start": 2601,
                          "end": 2604
                        },
                        "start": 2600,
                        "end": 2604
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
                            "start": 2607,
                            "end": 2608
                          },
                          "typeArguments": null,
                          "start": 2607,
                          "end": 2608
                        },
                        "start": 2607,
                        "end": 2610
                      },
                      "start": 2605,
                      "end": 2610
                    },
                    "start": 2596,
                    "end": 2611
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2616,
                      "end": 2619
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2621,
                        "end": 2627
                      },
                      "start": 2619,
                      "end": 2627
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2616,
                    "end": 2628
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2633,
                      "end": 2636
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2640,
                        "end": 2646
                      },
                      "start": 2638,
                      "end": 2646
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2633,
                    "end": 2647
                  }
                ],
                "start": 2590,
                "end": 2649
              },
              "start": 2588,
              "end": 2649
            },
            "start": 2583,
            "end": 2649
          },
          "init": null,
          "definite": false,
          "start": 2583,
          "end": 2649
        }
      ],
      "declare": true,
      "start": 2569,
      "end": 2649
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
            "name": "f70",
            "optional": false,
            "typeAnnotation": null,
            "start": 2655,
            "end": 2658
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 2661,
              "end": 2665
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2666,
                "end": 2671
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2673,
                "end": 2676
              }
            ],
            "optional": false,
            "start": 2661,
            "end": 2677
          },
          "definite": false,
          "start": 2655,
          "end": 2677
        }
      ],
      "declare": false,
      "start": 2651,
      "end": 2678
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
            "name": "f71",
            "optional": false,
            "typeAnnotation": null,
            "start": 2683,
            "end": 2686
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 2689,
              "end": 2693
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2694,
                "end": 2697
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2699,
                "end": 2704
              }
            ],
            "optional": false,
            "start": 2689,
            "end": 2705
          },
          "definite": false,
          "start": 2683,
          "end": 2705
        }
      ],
      "declare": false,
      "start": 2679,
      "end": 2706
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 2722,
        "end": 2727
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2734,
              "end": 2745
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "type": "TSNumberKeyword",
                      "start": 2749,
                      "end": 2755
                    },
                    "start": 2747,
                    "end": 2755
                  },
                  "start": 2746,
                  "end": 2755
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2760,
                      "end": 2766
                    },
                    "start": 2758,
                    "end": 2766
                  },
                  "start": 2757,
                  "end": 2766
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2745,
              "end": 2768
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2734,
            "end": 2768
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2782,
              "end": 2783
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2785,
                "end": 2791
              },
              "start": 2783,
              "end": 2791
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2773,
            "end": 2792
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2806,
              "end": 2807
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2809,
                "end": 2815
              },
              "start": 2807,
              "end": 2815
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2797,
            "end": 2816
          }
        ],
        "start": 2728,
        "end": 2818
      },
      "abstract": false,
      "declare": true,
      "start": 2708,
      "end": 2818
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bag",
        "optional": false,
        "typeAnnotation": null,
        "start": 2834,
        "end": 2837
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
              "start": 2838,
              "end": 2839
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2838,
            "end": 2839
          }
        ],
        "start": 2837,
        "end": 2840
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
              "start": 2847,
              "end": 2858
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "start": 2862,
                    "end": 2866
                  },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2868,
                          "end": 2869
                        },
                        "typeArguments": null,
                        "start": 2868,
                        "end": 2869
                      },
                      "start": 2868,
                      "end": 2871
                    },
                    "start": 2866,
                    "end": 2871
                  },
                  "value": null,
                  "start": 2859,
                  "end": 2871
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2858,
              "end": 2873
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2847,
            "end": 2873
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "contains",
              "optional": false,
              "typeAnnotation": null,
              "start": 2878,
              "end": 2886
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                        "start": 2894,
                        "end": 2895
                      },
                      "typeArguments": null,
                      "start": 2894,
                      "end": 2895
                    },
                    "start": 2892,
                    "end": 2895
                  },
                  "start": 2887,
                  "end": 2895
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 2898,
                  "end": 2905
                },
                "start": 2896,
                "end": 2905
              },
              "body": null,
              "expression": false,
              "start": 2886,
              "end": 2906
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2878,
            "end": 2906
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2921
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2923,
                "end": 2929
              },
              "start": 2921,
              "end": 2929
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2911,
            "end": 2930
          }
        ],
        "start": 2841,
        "end": 2932
      },
      "abstract": false,
      "declare": true,
      "start": 2820,
      "end": 2932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 2943,
        "end": 2953
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2954,
              "end": 2955
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2964,
                "end": 2967
              },
              "start": 2964,
              "end": 2969
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2954,
            "end": 2969
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2971,
              "end": 2972
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2971,
            "end": 2972
          }
        ],
        "start": 2953,
        "end": 2973
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cf",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
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
                    "start": 2986,
                    "end": 2990
                  },
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
                        "start": 2992,
                        "end": 2993
                      },
                      "typeArguments": null,
                      "start": 2992,
                      "end": 2993
                    },
                    "start": 2990,
                    "end": 2993
                  },
                  "value": null,
                  "start": 2983,
                  "end": 2993
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
                    "start": 2998,
                    "end": 2999
                  },
                  "typeArguments": null,
                  "start": 2998,
                  "end": 2999
                },
                "start": 2995,
                "end": 2999
              },
              "start": 2978,
              "end": 2999
            },
            "start": 2976,
            "end": 2999
          },
          "start": 2974,
          "end": 2999
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
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
                    "start": 3018,
                    "end": 3022
                  },
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
                        "start": 3024,
                        "end": 3025
                      },
                      "typeArguments": null,
                      "start": 3024,
                      "end": 3025
                    },
                    "start": 3022,
                    "end": 3025
                  },
                  "value": null,
                  "start": 3015,
                  "end": 3025
                }
              ],
              "returnType": null,
              "body": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3034,
                  "end": 3036
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3040,
                      "end": 3044
                    },
                    "start": 3037,
                    "end": 3044
                  }
                ],
                "start": 3030,
                "end": 3045
              },
              "id": null,
              "generator": false,
              "start": 3014,
              "end": 3045
            },
            "start": 3007,
            "end": 3046
          }
        ],
        "start": 3001,
        "end": 3048
      },
      "expression": false,
      "start": 2934,
      "end": 3048
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
            "name": "newPoint",
            "optional": false,
            "typeAnnotation": null,
            "start": 3056,
            "end": 3064
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "asFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 3067,
              "end": 3077
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 3078,
                "end": 3083
              }
            ],
            "optional": false,
            "start": 3067,
            "end": 3084
          },
          "definite": false,
          "start": 3056,
          "end": 3084
        }
      ],
      "declare": false,
      "start": 3050,
      "end": 3085
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
            "name": "newBag",
            "optional": false,
            "typeAnnotation": null,
            "start": 3092,
            "end": 3098
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "asFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 3101,
              "end": 3111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Bag",
                "optional": false,
                "typeAnnotation": null,
                "start": 3112,
                "end": 3115
              }
            ],
            "optional": false,
            "start": 3101,
            "end": 3116
          },
          "definite": false,
          "start": 3092,
          "end": 3116
        }
      ],
      "declare": false,
      "start": 3086,
      "end": 3117
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3124,
            "end": 3126
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 3133,
              "end": 3138
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3139,
                "end": 3141
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 3143,
                "end": 3145
              }
            ],
            "start": 3129,
            "end": 3146
          },
          "definite": false,
          "start": 3124,
          "end": 3146
        }
      ],
      "declare": false,
      "start": 3118,
      "end": 3147
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
            "typeAnnotation": null,
            "start": 3154,
            "end": 3156
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "newPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 3159,
              "end": 3167
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3168,
                "end": 3170
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 3172,
                "end": 3174
              }
            ],
            "optional": false,
            "start": 3159,
            "end": 3175
          },
          "definite": false,
          "start": 3154,
          "end": 3175
        }
      ],
      "declare": false,
      "start": 3148,
      "end": 3176
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
            "name": "bag1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3183,
            "end": 3187
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bag",
              "optional": false,
              "typeAnnotation": null,
              "start": 3194,
              "end": 3197
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3198,
                "end": 3199
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3201,
                "end": 3202
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 3204,
                "end": 3205
              }
            ],
            "start": 3190,
            "end": 3206
          },
          "definite": false,
          "start": 3183,
          "end": 3206
        }
      ],
      "declare": false,
      "start": 3177,
      "end": 3207
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
            "name": "bag2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3214,
            "end": 3218
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "newBag",
              "optional": false,
              "typeAnnotation": null,
              "start": 3221,
              "end": 3227
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 3228,
                "end": 3231
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 3233,
                "end": 3236
              },
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 3238,
                "end": 3241
              }
            ],
            "optional": false,
            "start": 3221,
            "end": 3242
          },
          "definite": false,
          "start": 3214,
          "end": 3242
        }
      ],
      "declare": false,
      "start": 3208,
      "end": 3243
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 3259,
        "end": 3263
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
              "start": 3264,
              "end": 3265
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3264,
            "end": 3265
          }
        ],
        "start": 3263,
        "end": 3266
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
              "start": 3273,
              "end": 3278
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
                  "start": 3280,
                  "end": 3281
                },
                "typeArguments": null,
                "start": 3280,
                "end": 3281
              },
              "start": 3278,
              "end": 3281
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
            "start": 3273,
            "end": 3282
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3287,
              "end": 3298
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                        "start": 3306,
                        "end": 3307
                      },
                      "typeArguments": null,
                      "start": 3306,
                      "end": 3307
                    },
                    "start": 3304,
                    "end": 3307
                  },
                  "start": 3299,
                  "end": 3307
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3298,
              "end": 3309
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3287,
            "end": 3309
          }
        ],
        "start": 3267,
        "end": 3311
      },
      "abstract": false,
      "declare": true,
      "start": 3245,
      "end": 3311
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CompClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 3318,
        "end": 3327
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
              "start": 3328,
              "end": 3329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3328,
            "end": 3329
          }
        ],
        "start": 3327,
        "end": 3330
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
                  "start": 3345,
                  "end": 3346
                },
                "typeArguments": null,
                "start": 3345,
                "end": 3346
              },
              "start": 3343,
              "end": 3346
            },
            "start": 3338,
            "end": 3346
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Comp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3351,
              "end": 3355
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
                    "start": 3356,
                    "end": 3357
                  },
                  "typeArguments": null,
                  "start": 3356,
                  "end": 3357
                }
              ],
              "start": 3355,
              "end": 3358
            },
            "start": 3351,
            "end": 3358
          },
          "start": 3348,
          "end": 3358
        },
        "start": 3333,
        "end": 3358
      },
      "declare": false,
      "start": 3313,
      "end": 3359
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myHoc",
        "optional": false,
        "typeAnnotation": null,
        "start": 3378,
        "end": 3383
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
              "start": 3384,
              "end": 3385
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3384,
            "end": 3385
          }
        ],
        "start": 3383,
        "end": 3386
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CompClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 3390,
                "end": 3399
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
                      "start": 3400,
                      "end": 3401
                    },
                    "typeArguments": null,
                    "start": 3400,
                    "end": 3401
                  }
                ],
                "start": 3399,
                "end": 3402
              },
              "start": 3390,
              "end": 3402
            },
            "start": 3388,
            "end": 3402
          },
          "start": 3387,
          "end": 3402
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CompClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 3405,
            "end": 3414
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
                  "start": 3415,
                  "end": 3416
                },
                "typeArguments": null,
                "start": 3415,
                "end": 3416
              }
            ],
            "start": 3414,
            "end": 3417
          },
          "start": 3405,
          "end": 3417
        },
        "start": 3403,
        "end": 3417
      },
      "body": null,
      "expression": false,
      "start": 3361,
      "end": 3418
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3425,
        "end": 3437
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
              "start": 3438,
              "end": 3439
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3438,
            "end": 3439
          }
        ],
        "start": 3437,
        "end": 3440
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3445,
              "end": 3448
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3450,
                "end": 3456
              },
              "start": 3448,
              "end": 3456
            },
            "accessibility": null,
            "static": false,
            "start": 3445,
            "end": 3457
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 3458,
              "end": 3463
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
                  "start": 3465,
                  "end": 3466
                },
                "typeArguments": null,
                "start": 3465,
                "end": 3466
              },
              "start": 3463,
              "end": 3466
            },
            "accessibility": null,
            "static": false,
            "start": 3458,
            "end": 3466
          }
        ],
        "start": 3443,
        "end": 3468
      },
      "declare": false,
      "start": 3420,
      "end": 3469
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComp",
        "optional": false,
        "typeAnnotation": null,
        "start": 3485,
        "end": 3496
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
              "start": 3497,
              "end": 3498
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3497,
            "end": 3498
          }
        ],
        "start": 3496,
        "end": 3499
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 3508,
        "end": 3512
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3513,
              "end": 3525
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
                    "start": 3526,
                    "end": 3527
                  },
                  "typeArguments": null,
                  "start": 3526,
                  "end": 3527
                }
              ],
              "start": 3525,
              "end": 3528
            },
            "start": 3513,
            "end": 3528
          }
        ],
        "start": 3512,
        "end": 3529
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 3530,
        "end": 3532
      },
      "abstract": false,
      "declare": true,
      "start": 3471,
      "end": 3532
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
            "name": "GenericComp2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3540,
            "end": 3552
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "myHoc",
              "optional": false,
              "typeAnnotation": null,
              "start": 3555,
              "end": 3560
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericComp",
                "optional": false,
                "typeAnnotation": null,
                "start": 3561,
                "end": 3572
              }
            ],
            "optional": false,
            "start": 3555,
            "end": 3573
          },
          "definite": false,
          "start": 3540,
          "end": 3573
        }
      ],
      "declare": false,
      "start": 3534,
      "end": 3574
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mirror",
        "optional": false,
        "typeAnnotation": null,
        "start": 3594,
        "end": 3600
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3601,
              "end": 3602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3601,
            "end": 3602
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3604,
              "end": 3605
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3604,
            "end": 3605
          }
        ],
        "start": 3600,
        "end": 3606
      },
      "params": [
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
                  "name": "a",
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
                        "start": 3614,
                        "end": 3615
                      },
                      "typeArguments": null,
                      "start": 3614,
                      "end": 3615
                    },
                    "start": 3612,
                    "end": 3615
                  },
                  "start": 3611,
                  "end": 3615
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
                    "start": 3620,
                    "end": 3621
                  },
                  "typeArguments": null,
                  "start": 3620,
                  "end": 3621
                },
                "start": 3617,
                "end": 3621
              },
              "start": 3610,
              "end": 3621
            },
            "start": 3608,
            "end": 3621
          },
          "start": 3607,
          "end": 3621
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
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
                    "start": 3628,
                    "end": 3629
                  },
                  "typeArguments": null,
                  "start": 3628,
                  "end": 3629
                },
                "start": 3626,
                "end": 3629
              },
              "start": 3625,
              "end": 3629
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
                "start": 3634,
                "end": 3635
              },
              "typeArguments": null,
              "start": 3634,
              "end": 3635
            },
            "start": 3631,
            "end": 3635
          },
          "start": 3624,
          "end": 3635
        },
        "start": 3622,
        "end": 3635
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3645,
              "end": 3646
            },
            "start": 3638,
            "end": 3647
          }
        ],
        "start": 3636,
        "end": 3649
      },
      "expression": false,
      "start": 3585,
      "end": 3649
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
            "name": "identityM",
            "optional": false,
            "typeAnnotation": null,
            "start": 3654,
            "end": 3663
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mirror",
              "optional": false,
              "typeAnnotation": null,
              "start": 3666,
              "end": 3672
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 3673,
                "end": 3681
              }
            ],
            "optional": false,
            "start": 3666,
            "end": 3682
          },
          "definite": false,
          "start": 3654,
          "end": 3682
        }
      ],
      "declare": false,
      "start": 3650,
      "end": 3683
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
            "typeAnnotation": null,
            "start": 3689,
            "end": 3690
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3693,
            "end": 3694
          },
          "definite": false,
          "start": 3689,
          "end": 3694
        }
      ],
      "declare": false,
      "start": 3685,
      "end": 3695
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
            "typeAnnotation": null,
            "start": 3700,
            "end": 3701
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 3704,
              "end": 3712
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3713,
                "end": 3714
              }
            ],
            "optional": false,
            "start": 3704,
            "end": 3715
          },
          "definite": false,
          "start": 3700,
          "end": 3715
        }
      ],
      "declare": false,
      "start": 3696,
      "end": 3716
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 3721,
            "end": 3722
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "identityM",
              "optional": false,
              "typeAnnotation": null,
              "start": 3725,
              "end": 3734
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3735,
                "end": 3736
              }
            ],
            "optional": false,
            "start": 3725,
            "end": 3737
          },
          "definite": false,
          "start": 3721,
          "end": 3737
        }
      ],
      "declare": false,
      "start": 3717,
      "end": 3738
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "keyOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 3766,
          "end": 3771
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3772,
                "end": 3773
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3772,
              "end": 3773
            }
          ],
          "start": 3771,
          "end": 3774
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3784,
                      "end": 3787
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3789,
                          "end": 3790
                        },
                        "typeArguments": null,
                        "start": 3789,
                        "end": 3790
                      },
                      "start": 3787,
                      "end": 3790
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3784,
                    "end": 3791
                  }
                ],
                "start": 3782,
                "end": 3793
              },
              "start": 3780,
              "end": 3793
            },
            "start": 3775,
            "end": 3793
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3796,
              "end": 3797
            },
            "typeArguments": null,
            "start": 3796,
            "end": 3797
          },
          "start": 3794,
          "end": 3797
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3811,
                  "end": 3816
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3817,
                  "end": 3820
                },
                "optional": false,
                "computed": false,
                "start": 3811,
                "end": 3820
              },
              "start": 3804,
              "end": 3821
            }
          ],
          "start": 3798,
          "end": 3823
        },
        "expression": false,
        "start": 3757,
        "end": 3823
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3750,
      "end": 3823
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Data",
          "optional": false,
          "typeAnnotation": null,
          "start": 3841,
          "end": 3845
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
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 3852,
                "end": 3855
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3857,
                  "end": 3863
                },
                "start": 3855,
                "end": 3863
              },
              "accessibility": null,
              "static": false,
              "start": 3852,
              "end": 3864
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3869,
                "end": 3874
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3876,
                    "end": 3880
                  },
                  "typeArguments": null,
                  "start": 3876,
                  "end": 3880
                },
                "start": 3874,
                "end": 3880
              },
              "accessibility": null,
              "static": false,
              "start": 3869,
              "end": 3881
            }
          ],
          "start": 3846,
          "end": 3883
        },
        "declare": false,
        "start": 3831,
        "end": 3883
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3824,
      "end": 3883
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
            "name": "data",
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
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3895,
                    "end": 3899
                  },
                  "typeArguments": null,
                  "start": 3895,
                  "end": 3899
                },
                "start": 3895,
                "end": 3901
              },
              "start": 3893,
              "end": 3901
            },
            "start": 3889,
            "end": 3901
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 3904,
            "end": 3906
          },
          "definite": false,
          "start": 3889,
          "end": 3906
        }
      ],
      "declare": false,
      "start": 3885,
      "end": 3907
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 3926,
        "end": 3932
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3933,
              "end": 3934
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3933,
            "end": 3934
          }
        ],
        "start": 3932,
        "end": 3935
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3944,
                  "end": 3945
                },
                "typeArguments": null,
                "start": 3944,
                "end": 3945
              },
              "start": 3944,
              "end": 3947
            },
            "start": 3942,
            "end": 3947
          },
          "start": 3936,
          "end": 3947
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "toKey",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3964,
                        "end": 3965
                      },
                      "typeArguments": null,
                      "start": 3964,
                      "end": 3965
                    },
                    "start": 3962,
                    "end": 3965
                  },
                  "start": 3957,
                  "end": 3965
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3970,
                  "end": 3976
                },
                "start": 3967,
                "end": 3976
              },
              "start": 3956,
              "end": 3976
            },
            "start": 3954,
            "end": 3976
          },
          "start": 3949,
          "end": 3976
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 3979,
            "end": 3985
          },
          "start": 3979,
          "end": 3987
        },
        "start": 3977,
        "end": 3987
      },
      "body": null,
      "expression": false,
      "start": 3909,
      "end": 3988
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "toKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3990,
          "end": 3996
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 3997,
            "end": 4001
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "keyOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 4003,
            "end": 4008
          }
        ],
        "optional": false,
        "start": 3990,
        "end": 4009
      },
      "directive": null,
      "start": 3990,
      "end": 4010
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flip",
        "optional": false,
        "typeAnnotation": null,
        "start": 4041,
        "end": 4045
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 4046,
              "end": 4047
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4046,
            "end": 4047
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 4049,
              "end": 4050
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4049,
            "end": 4050
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 4052,
              "end": 4053
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4052,
            "end": 4053
          }
        ],
        "start": 4045,
        "end": 4054
      },
      "params": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4062,
                        "end": 4063
                      },
                      "typeArguments": null,
                      "start": 4062,
                      "end": 4063
                    },
                    "start": 4060,
                    "end": 4063
                  },
                  "start": 4059,
                  "end": 4063
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4068,
                        "end": 4069
                      },
                      "typeArguments": null,
                      "start": 4068,
                      "end": 4069
                    },
                    "start": 4066,
                    "end": 4069
                  },
                  "start": 4065,
                  "end": 4069
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4074,
                    "end": 4075
                  },
                  "typeArguments": null,
                  "start": 4074,
                  "end": 4075
                },
                "start": 4071,
                "end": 4075
              },
              "start": 4058,
              "end": 4075
            },
            "start": 4056,
            "end": 4075
          },
          "start": 4055,
          "end": 4075
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4082,
                    "end": 4083
                  },
                  "typeArguments": null,
                  "start": 4082,
                  "end": 4083
                },
                "start": 4080,
                "end": 4083
              },
              "start": 4079,
              "end": 4083
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4088,
                    "end": 4089
                  },
                  "typeArguments": null,
                  "start": 4088,
                  "end": 4089
                },
                "start": 4086,
                "end": 4089
              },
              "start": 4085,
              "end": 4089
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 4094,
                "end": 4095
              },
              "typeArguments": null,
              "start": 4094,
              "end": 4095
            },
            "start": 4091,
            "end": 4095
          },
          "start": 4078,
          "end": 4095
        },
        "start": 4076,
        "end": 4095
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4111,
                        "end": 4112
                      },
                      "typeArguments": null,
                      "start": 4111,
                      "end": 4112
                    },
                    "start": 4109,
                    "end": 4112
                  },
                  "start": 4108,
                  "end": 4112
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4117,
                        "end": 4118
                      },
                      "typeArguments": null,
                      "start": 4117,
                      "end": 4118
                    },
                    "start": 4115,
                    "end": 4118
                  },
                  "start": 4114,
                  "end": 4118
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4123,
                  "end": 4124
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4125,
                    "end": 4126
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4128,
                    "end": 4129
                  }
                ],
                "optional": false,
                "start": 4123,
                "end": 4130
              },
              "id": null,
              "generator": false,
              "start": 4107,
              "end": 4130
            },
            "start": 4100,
            "end": 4131
          }
        ],
        "start": 4096,
        "end": 4133
      },
      "expression": false,
      "start": 4032,
      "end": 4133
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "zip",
        "optional": false,
        "typeAnnotation": null,
        "start": 4143,
        "end": 4146
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
              "start": 4147,
              "end": 4148
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4147,
            "end": 4148
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4150,
              "end": 4151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4150,
            "end": 4151
          }
        ],
        "start": 4146,
        "end": 4152
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
                "start": 4156,
                "end": 4157
              },
              "typeArguments": null,
              "start": 4156,
              "end": 4157
            },
            "start": 4154,
            "end": 4157
          },
          "start": 4153,
          "end": 4157
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
                "start": 4162,
                "end": 4163
              },
              "typeArguments": null,
              "start": 4162,
              "end": 4163
            },
            "start": 4160,
            "end": 4163
          },
          "start": 4159,
          "end": 4163
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
                "start": 4167,
                "end": 4168
              },
              "typeArguments": null,
              "start": 4167,
              "end": 4168
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4170,
                "end": 4171
              },
              "typeArguments": null,
              "start": 4170,
              "end": 4171
            }
          ],
          "start": 4166,
          "end": 4172
        },
        "start": 4164,
        "end": 4172
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4185,
                  "end": 4186
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4188,
                  "end": 4189
                }
              ],
              "start": 4184,
              "end": 4190
            },
            "start": 4177,
            "end": 4191
          }
        ],
        "start": 4173,
        "end": 4193
      },
      "expression": false,
      "start": 4134,
      "end": 4193
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
            "name": "expected",
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
                        "start": 4210,
                        "end": 4211
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4210,
                      "end": 4211
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4213,
                        "end": 4214
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4213,
                      "end": 4214
                    }
                  ],
                  "start": 4209,
                  "end": 4215
                },
                "params": [
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
                          "start": 4219,
                          "end": 4220
                        },
                        "typeArguments": null,
                        "start": 4219,
                        "end": 4220
                      },
                      "start": 4217,
                      "end": 4220
                    },
                    "start": 4216,
                    "end": 4220
                  },
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
                          "start": 4225,
                          "end": 4226
                        },
                        "typeArguments": null,
                        "start": 4225,
                        "end": 4226
                      },
                      "start": 4223,
                      "end": 4226
                    },
                    "start": 4222,
                    "end": 4226
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
                          "start": 4232,
                          "end": 4233
                        },
                        "typeArguments": null,
                        "start": 4232,
                        "end": 4233
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4235,
                          "end": 4236
                        },
                        "typeArguments": null,
                        "start": 4235,
                        "end": 4236
                      }
                    ],
                    "start": 4231,
                    "end": 4237
                  },
                  "start": 4228,
                  "end": 4237
                },
                "start": 4209,
                "end": 4237
              },
              "start": 4207,
              "end": 4237
            },
            "start": 4199,
            "end": 4237
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "flip",
              "optional": false,
              "typeAnnotation": null,
              "start": 4240,
              "end": 4244
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "zip",
                "optional": false,
                "typeAnnotation": null,
                "start": 4245,
                "end": 4248
              }
            ],
            "optional": false,
            "start": 4240,
            "end": 4249
          },
          "definite": false,
          "start": 4199,
          "end": 4249
        }
      ],
      "declare": false,
      "start": 4195,
      "end": 4250
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
            "name": "actual",
            "optional": false,
            "typeAnnotation": null,
            "start": 4255,
            "end": 4261
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "flip",
              "optional": false,
              "typeAnnotation": null,
              "start": 4264,
              "end": 4268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "zip",
                "optional": false,
                "typeAnnotation": null,
                "start": 4269,
                "end": 4272
              }
            ],
            "optional": false,
            "start": 4264,
            "end": 4273
          },
          "definite": false,
          "start": 4255,
          "end": 4273
        }
      ],
      "declare": false,
      "start": 4251,
      "end": 4274
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
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 4292,
            "end": 4295
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 4299,
                    "end": 4300
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4299,
                  "end": 4300
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4302,
                    "end": 4303
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4302,
                  "end": 4303
                }
              ],
              "start": 4298,
              "end": 4304
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "transform",
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
                        "name": "t",
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
                              "start": 4320,
                              "end": 4321
                            },
                            "typeArguments": null,
                            "start": 4320,
                            "end": 4321
                          },
                          "start": 4318,
                          "end": 4321
                        },
                        "start": 4317,
                        "end": 4321
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
                          "start": 4326,
                          "end": 4327
                        },
                        "typeArguments": null,
                        "start": 4326,
                        "end": 4327
                      },
                      "start": 4323,
                      "end": 4327
                    },
                    "start": 4316,
                    "end": 4327
                  },
                  "start": 4314,
                  "end": 4327
                },
                "start": 4305,
                "end": 4327
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4342,
                          "end": 4343
                        },
                        "typeArguments": null,
                        "start": 4342,
                        "end": 4343
                      },
                      "start": 4342,
                      "end": 4345
                    },
                    "start": 4340,
                    "end": 4345
                  },
                  "start": 4337,
                  "end": 4345
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4350,
                    "end": 4353
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4354,
                    "end": 4357
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4350,
                  "end": 4357
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "transform",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4358,
                    "end": 4367
                  }
                ],
                "optional": false,
                "start": 4350,
                "end": 4368
              },
              "id": null,
              "generator": false,
              "start": 4336,
              "end": 4368
            },
            "id": null,
            "generator": false,
            "start": 4298,
            "end": 4368
          },
          "definite": false,
          "start": 4292,
          "end": 4368
        }
      ],
      "declare": false,
      "start": 4286,
      "end": 4368
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
            "name": "identityStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4376,
            "end": 4387
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4394,
                    "end": 4400
                  },
                  "start": 4392,
                  "end": 4400
                },
                "start": 4391,
                "end": 4400
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 4405,
              "end": 4406
            },
            "id": null,
            "generator": false,
            "start": 4390,
            "end": 4406
          },
          "definite": false,
          "start": 4376,
          "end": 4406
        }
      ],
      "declare": false,
      "start": 4370,
      "end": 4407
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 4420,
                  "end": 4426
                },
                "start": 4420,
                "end": 4428
              },
              "start": 4418,
              "end": 4428
            },
            "start": 4415,
            "end": 4428
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4431,
                "end": 4434
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identityStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4435,
                  "end": 4446
                }
              ],
              "optional": false,
              "start": 4431,
              "end": 4447
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 4449,
                    "end": 4452
                  }
                ],
                "start": 4448,
                "end": 4453
              }
            ],
            "optional": false,
            "start": 4431,
            "end": 4454
          },
          "definite": false,
          "start": 4415,
          "end": 4454
        }
      ],
      "declare": false,
      "start": 4409,
      "end": 4455
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
            "name": "arr1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 4468,
                  "end": 4474
                },
                "start": 4468,
                "end": 4476
              },
              "start": 4466,
              "end": 4476
            },
            "start": 4462,
            "end": 4476
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4479,
                "end": 4482
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4483,
                  "end": 4491
                }
              ],
              "optional": false,
              "start": 4479,
              "end": 4492
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 4494,
                    "end": 4497
                  }
                ],
                "start": 4493,
                "end": 4498
              }
            ],
            "optional": false,
            "start": 4479,
            "end": 4499
          },
          "definite": false,
          "start": 4462,
          "end": 4499
        }
      ],
      "declare": false,
      "start": 4456,
      "end": 4500
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4521,
        "end": 4524
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 4525,
              "end": 4526
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4525,
            "end": 4526
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 4528,
              "end": 4529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4528,
            "end": 4529
          }
        ],
        "start": 4524,
        "end": 4530
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "one",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 4536,
                "end": 4537
              },
              "typeArguments": null,
              "start": 4536,
              "end": 4537
            },
            "start": 4534,
            "end": 4537
          },
          "start": 4531,
          "end": 4537
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "two",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 4544,
                "end": 4545
              },
              "typeArguments": null,
              "start": 4544,
              "end": 4545
            },
            "start": 4542,
            "end": 4545
          },
          "start": 4539,
          "end": 4545
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 4549,
                "end": 4550
              },
              "typeArguments": null,
              "start": 4549,
              "end": 4550
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 4552,
                "end": 4553
              },
              "typeArguments": null,
              "start": 4552,
              "end": 4553
            }
          ],
          "start": 4548,
          "end": 4554
        },
        "start": 4546,
        "end": 4554
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4569,
                  "end": 4572
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "two",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4574,
                  "end": 4577
                }
              ],
              "start": 4568,
              "end": 4578
            },
            "start": 4561,
            "end": 4579
          }
        ],
        "start": 4555,
        "end": 4581
      },
      "expression": false,
      "start": 4512,
      "end": 4581
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
            "name": "flipped",
            "optional": false,
            "typeAnnotation": null,
            "start": 4589,
            "end": 4596
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "flip",
              "optional": false,
              "typeAnnotation": null,
              "start": 4599,
              "end": 4603
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "of2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4604,
                "end": 4607
              }
            ],
            "optional": false,
            "start": 4599,
            "end": 4608
          },
          "definite": false,
          "start": 4589,
          "end": 4608
        }
      ],
      "declare": false,
      "start": 4583,
      "end": 4609
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 4629,
        "end": 4638
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
              "start": 4639,
              "end": 4640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4639,
            "end": 4640
          }
        ],
        "start": 4638,
        "end": 4641
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
                  "start": 4652,
                  "end": 4653
                },
                "typeArguments": null,
                "start": 4652,
                "end": 4653
              },
              "start": 4650,
              "end": 4653
            },
            "start": 4645,
            "end": 4653
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 4658,
            "end": 4660
          },
          "start": 4655,
          "end": 4660
        },
        "start": 4644,
        "end": 4660
      },
      "declare": false,
      "start": 4624,
      "end": 4661
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
            "name": "myHoc1",
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
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4686,
                        "end": 4687
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4686,
                      "end": 4687
                    }
                  ],
                  "start": 4685,
                  "end": 4688
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4692,
                          "end": 4701
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
                                "start": 4702,
                                "end": 4703
                              },
                              "typeArguments": null,
                              "start": 4702,
                              "end": 4703
                            }
                          ],
                          "start": 4701,
                          "end": 4704
                        },
                        "start": 4692,
                        "end": 4704
                      },
                      "start": 4690,
                      "end": 4704
                    },
                    "start": 4689,
                    "end": 4704
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
                      "start": 4709,
                      "end": 4718
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
                            "start": 4719,
                            "end": 4720
                          },
                          "typeArguments": null,
                          "start": 4719,
                          "end": 4720
                        }
                      ],
                      "start": 4718,
                      "end": 4721
                    },
                    "start": 4709,
                    "end": 4721
                  },
                  "start": 4706,
                  "end": 4721
                },
                "start": 4685,
                "end": 4721
              },
              "start": 4683,
              "end": 4721
            },
            "start": 4677,
            "end": 4721
          },
          "init": null,
          "definite": false,
          "start": 4677,
          "end": 4721
        }
      ],
      "declare": true,
      "start": 4663,
      "end": 4722
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
            "name": "myHoc2",
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
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4746,
                        "end": 4747
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4746,
                      "end": 4747
                    }
                  ],
                  "start": 4745,
                  "end": 4748
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4752,
                          "end": 4761
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
                                "start": 4762,
                                "end": 4763
                              },
                              "typeArguments": null,
                              "start": 4762,
                              "end": 4763
                            }
                          ],
                          "start": 4761,
                          "end": 4764
                        },
                        "start": 4752,
                        "end": 4764
                      },
                      "start": 4750,
                      "end": 4764
                    },
                    "start": 4749,
                    "end": 4764
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
                      "start": 4769,
                      "end": 4778
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
                            "start": 4779,
                            "end": 4780
                          },
                          "typeArguments": null,
                          "start": 4779,
                          "end": 4780
                        }
                      ],
                      "start": 4778,
                      "end": 4781
                    },
                    "start": 4769,
                    "end": 4781
                  },
                  "start": 4766,
                  "end": 4781
                },
                "start": 4745,
                "end": 4781
              },
              "start": 4743,
              "end": 4781
            },
            "start": 4737,
            "end": 4781
          },
          "init": null,
          "definite": false,
          "start": 4737,
          "end": 4781
        }
      ],
      "declare": true,
      "start": 4723,
      "end": 4782
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
            "name": "MyComponent1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4812,
                  "end": 4821
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4824,
                            "end": 4827
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 4829,
                                "end": 4830
                              },
                              "start": 4829,
                              "end": 4830
                            },
                            "start": 4827,
                            "end": 4830
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 4824,
                          "end": 4830
                        }
                      ],
                      "start": 4822,
                      "end": 4832
                    }
                  ],
                  "start": 4821,
                  "end": 4833
                },
                "start": 4812,
                "end": 4833
              },
              "start": 4810,
              "end": 4833
            },
            "start": 4798,
            "end": 4833
          },
          "init": null,
          "definite": false,
          "start": 4798,
          "end": 4833
        }
      ],
      "declare": true,
      "start": 4784,
      "end": 4834
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
            "name": "enhance",
            "optional": false,
            "typeAnnotation": null,
            "start": 4842,
            "end": 4849
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 4852,
              "end": 4856
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myHoc1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4862,
                "end": 4868
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myHoc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4874,
                "end": 4880
              }
            ],
            "optional": false,
            "start": 4852,
            "end": 4883
          },
          "definite": false,
          "start": 4842,
          "end": 4883
        }
      ],
      "declare": false,
      "start": 4836,
      "end": 4884
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
            "name": "MyComponent2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4892,
            "end": 4904
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "enhance",
              "optional": false,
              "typeAnnotation": null,
              "start": 4907,
              "end": 4914
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "MyComponent1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4915,
                "end": 4927
              }
            ],
            "optional": false,
            "start": 4907,
            "end": 4928
          },
          "definite": false,
          "start": 4892,
          "end": 4928
        }
      ],
      "declare": false,
      "start": 4886,
      "end": 4929
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
            "name": "fn20",
            "optional": false,
            "typeAnnotation": null,
            "start": 4950,
            "end": 4954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 4957,
              "end": 4961
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_a",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 4968,
                        "end": 4970
                      },
                      "start": 4966,
                      "end": 4970
                    },
                    "start": 4963,
                    "end": 4970
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4975,
                  "end": 4976
                },
                "id": null,
                "generator": false,
                "start": 4962,
                "end": 4976
              }
            ],
            "optional": false,
            "start": 4957,
            "end": 4977
          },
          "definite": false,
          "start": 4950,
          "end": 4977
        }
      ],
      "declare": false,
      "start": 4944,
      "end": 4978
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 4998,
        "end": 5000
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5007,
                "end": 5013
              },
              "start": 5005,
              "end": 5013
            },
            "start": 5004,
            "end": 5013
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 5018,
            "end": 5024
          },
          "start": 5015,
          "end": 5024
        },
        "start": 5003,
        "end": 5024
      },
      "declare": false,
      "start": 4993,
      "end": 5025
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
            "name": "fn30",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5038,
                  "end": 5040
                },
                "typeArguments": null,
                "start": 5038,
                "end": 5040
              },
              "start": 5036,
              "end": 5040
            },
            "start": 5032,
            "end": 5040
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 5043,
              "end": 5047
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5053,
                    "end": 5054
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5058,
                    "end": 5059
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5062,
                    "end": 5063
                  },
                  "start": 5058,
                  "end": 5063
                },
                "id": null,
                "generator": false,
                "start": 5053,
                "end": 5063
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5069,
                    "end": 5070
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5074,
                    "end": 5075
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5078,
                    "end": 5079
                  },
                  "start": 5074,
                  "end": 5079
                },
                "id": null,
                "generator": false,
                "start": 5069,
                "end": 5079
              }
            ],
            "optional": false,
            "start": 5043,
            "end": 5082
          },
          "definite": false,
          "start": 5032,
          "end": 5082
        }
      ],
      "declare": false,
      "start": 5026,
      "end": 5083
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
            "name": "promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 5091,
            "end": 5098
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5101,
                "end": 5108
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 5109,
                "end": 5116
              },
              "optional": false,
              "computed": false,
              "start": 5101,
              "end": 5116
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5117,
                "end": 5118
              }
            ],
            "optional": false,
            "start": 5101,
            "end": 5119
          },
          "definite": false,
          "start": 5091,
          "end": 5119
        }
      ],
      "declare": false,
      "start": 5085,
      "end": 5120
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
            "name": "promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 5121,
            "end": 5128
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 5129,
            "end": 5133
          },
          "optional": false,
          "computed": false,
          "start": 5121,
          "end": 5133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 5139,
              "end": 5143
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5153,
                    "end": 5154
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5158,
                    "end": 5159
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5162,
                    "end": 5163
                  },
                  "start": 5158,
                  "end": 5163
                },
                "id": null,
                "generator": false,
                "start": 5153,
                "end": 5163
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5173,
                    "end": 5174
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5178,
                    "end": 5179
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5182,
                    "end": 5183
                  },
                  "start": 5178,
                  "end": 5183
                },
                "id": null,
                "generator": false,
                "start": 5173,
                "end": 5183
              }
            ],
            "optional": false,
            "start": 5139,
            "end": 5190
          }
        ],
        "optional": false,
        "start": 5121,
        "end": 5193
      },
      "directive": null,
      "start": 5121,
      "end": 5194
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
            "name": "getString",
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
                    "type": "TSStringKeyword",
                    "start": 5240,
                    "end": 5246
                  },
                  "start": 5237,
                  "end": 5246
                },
                "start": 5234,
                "end": 5246
              },
              "start": 5232,
              "end": 5246
            },
            "start": 5223,
            "end": 5246
          },
          "init": null,
          "definite": false,
          "start": 5223,
          "end": 5246
        }
      ],
      "declare": true,
      "start": 5209,
      "end": 5247
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
            "name": "orUndefined",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5282,
                        "end": 5288
                      },
                      "start": 5280,
                      "end": 5288
                    },
                    "start": 5276,
                    "end": 5288
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 5293,
                        "end": 5299
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 5302,
                        "end": 5311
                      }
                    ],
                    "start": 5293,
                    "end": 5311
                  },
                  "start": 5290,
                  "end": 5311
                },
                "start": 5275,
                "end": 5311
              },
              "start": 5273,
              "end": 5311
            },
            "start": 5262,
            "end": 5311
          },
          "init": null,
          "definite": false,
          "start": 5262,
          "end": 5311
        }
      ],
      "declare": true,
      "start": 5248,
      "end": 5312
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
            "name": "identity",
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
                        "start": 5338,
                        "end": 5339
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5338,
                      "end": 5339
                    }
                  ],
                  "start": 5337,
                  "end": 5340
                },
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
                          "start": 5348,
                          "end": 5349
                        },
                        "typeArguments": null,
                        "start": 5348,
                        "end": 5349
                      },
                      "start": 5346,
                      "end": 5349
                    },
                    "start": 5341,
                    "end": 5349
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
                      "start": 5354,
                      "end": 5355
                    },
                    "typeArguments": null,
                    "start": 5354,
                    "end": 5355
                  },
                  "start": 5351,
                  "end": 5355
                },
                "start": 5337,
                "end": 5355
              },
              "start": 5335,
              "end": 5355
            },
            "start": 5327,
            "end": 5355
          },
          "init": null,
          "definite": false,
          "start": 5327,
          "end": 5355
        }
      ],
      "declare": true,
      "start": 5313,
      "end": 5356
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
            "name": "fn40",
            "optional": false,
            "typeAnnotation": null,
            "start": 5364,
            "end": 5368
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 5371,
              "end": 5375
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getString",
                "optional": false,
                "typeAnnotation": null,
                "start": 5381,
                "end": 5390
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5396,
                    "end": 5402
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "orUndefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5406,
                    "end": 5417
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5418,
                      "end": 5424
                    }
                  ],
                  "optional": false,
                  "start": 5406,
                  "end": 5425
                },
                "id": null,
                "generator": false,
                "start": 5396,
                "end": 5425
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 5431,
                "end": 5439
              }
            ],
            "optional": false,
            "start": 5371,
            "end": 5442
          },
          "definite": false,
          "start": 5364,
          "end": 5442
        }
      ],
      "declare": false,
      "start": 5358,
      "end": 5443
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
            "name": "getArray",
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 5488,
                      "end": 5494
                    },
                    "start": 5488,
                    "end": 5496
                  },
                  "start": 5485,
                  "end": 5496
                },
                "start": 5482,
                "end": 5496
              },
              "start": 5480,
              "end": 5496
            },
            "start": 5472,
            "end": 5496
          },
          "init": null,
          "definite": false,
          "start": 5472,
          "end": 5496
        }
      ],
      "declare": true,
      "start": 5458,
      "end": 5497
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
            "name": "first",
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
                        "start": 5520,
                        "end": 5521
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5520,
                      "end": 5521
                    }
                  ],
                  "start": 5519,
                  "end": 5522
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5527,
                            "end": 5528
                          },
                          "typeArguments": null,
                          "start": 5527,
                          "end": 5528
                        },
                        "start": 5527,
                        "end": 5530
                      },
                      "start": 5525,
                      "end": 5530
                    },
                    "start": 5523,
                    "end": 5530
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
                      "start": 5535,
                      "end": 5536
                    },
                    "typeArguments": null,
                    "start": 5535,
                    "end": 5536
                  },
                  "start": 5532,
                  "end": 5536
                },
                "start": 5519,
                "end": 5536
              },
              "start": 5517,
              "end": 5536
            },
            "start": 5512,
            "end": 5536
          },
          "init": null,
          "definite": false,
          "start": 5512,
          "end": 5536
        }
      ],
      "declare": true,
      "start": 5498,
      "end": 5537
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
            "name": "fn60",
            "optional": false,
            "typeAnnotation": null,
            "start": 5545,
            "end": 5549
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 5552,
              "end": 5556
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 5562,
                "end": 5570
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5576,
                    "end": 5577
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5581,
                  "end": 5582
                },
                "id": null,
                "generator": false,
                "start": 5576,
                "end": 5582
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 5588,
                "end": 5593
              }
            ],
            "optional": false,
            "start": 5552,
            "end": 5596
          },
          "definite": false,
          "start": 5545,
          "end": 5596
        }
      ],
      "declare": false,
      "start": 5539,
      "end": 5597
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
            "name": "fn61",
            "optional": false,
            "typeAnnotation": null,
            "start": 5605,
            "end": 5609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 5612,
              "end": 5616
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 5622,
                "end": 5630
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 5636,
                "end": 5644
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 5650,
                "end": 5655
              }
            ],
            "optional": false,
            "start": 5612,
            "end": 5658
          },
          "definite": false,
          "start": 5605,
          "end": 5658
        }
      ],
      "declare": false,
      "start": 5599,
      "end": 5659
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
            "name": "fn62",
            "optional": false,
            "typeAnnotation": null,
            "start": 5667,
            "end": 5671
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 5674,
              "end": 5678
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 5684,
                "end": 5692
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5698,
                    "end": 5699
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5703,
                  "end": 5704
                },
                "id": null,
                "generator": false,
                "start": 5698,
                "end": 5704
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5710,
                    "end": 5711
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5715,
                    "end": 5720
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5721,
                      "end": 5722
                    }
                  ],
                  "optional": false,
                  "start": 5715,
                  "end": 5723
                },
                "id": null,
                "generator": false,
                "start": 5710,
                "end": 5723
              }
            ],
            "optional": false,
            "start": 5674,
            "end": 5726
          },
          "definite": false,
          "start": 5667,
          "end": 5726
        }
      ],
      "declare": false,
      "start": 5661,
      "end": 5727
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5768,
        "end": 5772
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
              "start": 5773,
              "end": 5774
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5773,
            "end": 5774
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5776,
              "end": 5777
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5780,
                "end": 5781
              },
              "typeArguments": null,
              "start": 5780,
              "end": 5781
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5776,
            "end": 5781
          }
        ],
        "start": 5772,
        "end": 5782
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                "start": 5787,
                "end": 5788
              },
              "typeArguments": null,
              "start": 5787,
              "end": 5788
            },
            "start": 5785,
            "end": 5788
          },
          "start": 5783,
          "end": 5788
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
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
                "start": 5794,
                "end": 5795
              },
              "typeArguments": null,
              "start": 5794,
              "end": 5795
            },
            "start": 5792,
            "end": 5795
          },
          "start": 5790,
          "end": 5795
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
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
                "start": 5801,
                "end": 5802
              },
              "typeArguments": null,
              "start": 5801,
              "end": 5802
            },
            "start": 5799,
            "end": 5802
          },
          "start": 5797,
          "end": 5802
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
                "start": 5806,
                "end": 5807
              },
              "typeArguments": null,
              "start": 5806,
              "end": 5807
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 5809,
                "end": 5810
              },
              "typeArguments": null,
              "start": 5809,
              "end": 5810
            }
          ],
          "start": 5805,
          "end": 5811
        },
        "start": 5803,
        "end": 5811
      },
      "body": null,
      "expression": false,
      "start": 5751,
      "end": 5812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5814,
          "end": 5818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 5825,
              "end": 5827
            },
            "id": null,
            "generator": false,
            "start": 5819,
            "end": 5827
          }
        ],
        "optional": false,
        "start": 5814,
        "end": 5828
      },
      "directive": null,
      "start": 5814,
      "end": 5829
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5830,
          "end": 5834
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 5835,
            "end": 5843
          }
        ],
        "optional": false,
        "start": 5830,
        "end": 5844
      },
      "directive": null,
      "start": 5830,
      "end": 5845
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5846,
          "end": 5850
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 5851,
            "end": 5859
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 5861,
            "end": 5862
          }
        ],
        "optional": false,
        "start": 5846,
        "end": 5863
      },
      "directive": null,
      "start": 5846,
      "end": 5864
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "times",
        "optional": false,
        "typeAnnotation": null,
        "start": 5905,
        "end": 5910
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
              "start": 5911,
              "end": 5912
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5911,
            "end": 5912
          }
        ],
        "start": 5910,
        "end": 5913
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5922,
                      "end": 5928
                    },
                    "start": 5920,
                    "end": 5928
                  },
                  "start": 5919,
                  "end": 5928
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
                    "start": 5933,
                    "end": 5934
                  },
                  "typeArguments": null,
                  "start": 5933,
                  "end": 5934
                },
                "start": 5930,
                "end": 5934
              },
              "start": 5918,
              "end": 5934
            },
            "start": 5916,
            "end": 5934
          },
          "start": 5914,
          "end": 5934
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5941,
                  "end": 5947
                },
                "start": 5939,
                "end": 5947
              },
              "start": 5938,
              "end": 5947
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
                  "start": 5952,
                  "end": 5953
                },
                "typeArguments": null,
                "start": 5952,
                "end": 5953
              },
              "start": 5952,
              "end": 5955
            },
            "start": 5949,
            "end": 5955
          },
          "start": 5937,
          "end": 5955
        },
        "start": 5935,
        "end": 5955
      },
      "body": null,
      "expression": false,
      "start": 5888,
      "end": 5956
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5963,
            "end": 5965
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "times",
                "optional": false,
                "typeAnnotation": null,
                "start": 5968,
                "end": 5973
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5974,
                  "end": 5982
                }
              ],
              "optional": false,
              "start": 5968,
              "end": 5983
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 5984,
                "end": 5985
              }
            ],
            "optional": false,
            "start": 5968,
            "end": 5986
          },
          "definite": false,
          "start": 5963,
          "end": 5986
        }
      ],
      "declare": false,
      "start": 5957,
      "end": 5987
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 6009
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 24,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 59,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 85,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 147,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "bc",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "B",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 164,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 175,
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
    "value": "A",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 184,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 190,
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
    "value": "pipe",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 214,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 246,
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
    "value": "A",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 255,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "bc",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 272,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "cd",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "=>",
    "start": 289,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 300,
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
    "value": "A",
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
    "value": "=>",
    "start": 309,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 316,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 324,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 333,
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
    "value": "T",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
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
    "value": "[",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 353,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 361,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "value",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 398,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 406,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 431,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": ">",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 454,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "f00",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 478,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 484,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 490,
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
    "value": "list",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 507,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "f02",
    "start": 513,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 519,
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
    "value": "box",
    "start": 524,
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
    "value": "list",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 536,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 555,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 573,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "f04",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 598,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 610,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "f05",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 629,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 643,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 654,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "f06",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 666,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 671,
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
    "value": "pipe",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 689,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "f07",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 732,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "f08",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 751,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 773,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 783,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "f09",
    "start": 789,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 800,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 808,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 822,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 845,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 851,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 862,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 867,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 874,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "g00",
    "start": 880,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 895,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 904,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 909,
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
    "value": "const",
    "start": 916,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "g01",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 942,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 957,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 974,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "g02",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 992,
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
    "value": "=>",
    "start": 995,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1000,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1032,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "g03",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1053,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "pipe",
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
    "value": "=>",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "g04",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1124,
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
    "value": "T",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1139,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1144,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1155,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1164,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "g05",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1190,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "list",
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
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1226,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1237,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "g06",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1258,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1263,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1278,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1283,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1301,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "g07",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1322,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1327,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "list",
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
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1361,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1373,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "g08",
    "start": 1379,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1399,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1414,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1421,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1424,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1429,
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
    "value": ",",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1433,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1440,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1443,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1453,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "g09",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1474,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1486,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1491,
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
    "value": "x",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1513,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "g10",
    "start": 1519,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1527,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1537,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1547,
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
    "value": "T",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1555,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1562,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1573,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "g12",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1587,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1597,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1615,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1622,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1632,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1639,
    "end": 1646
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1647,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1656,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "C",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 1674,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1685,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "cd",
    "start": 1691,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1721,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "const",
    "start": 1733,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1739,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1745,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1751,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1757,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1763,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1769,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1775,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1781,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1786,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1793,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 1799,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1805,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1811,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1817,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1824,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1836,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1847,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1853,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "f24",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1865,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1871,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1876,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1882,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "f25",
    "start": 1888,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1894,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1900,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1905,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1911,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "f26",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "pipe2",
    "start": 1923,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "f25",
    "start": 1929,
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
    "value": "f25",
    "start": 1934,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1941,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1949,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "pipe3",
    "start": 1958,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1971,
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
    "value": "ab",
    "start": 1973,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1984,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "ac",
    "start": 1990,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "=>",
    "start": 2001,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2015,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 2033,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "pipe3",
    "start": 2039,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2045,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2051,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2057,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "f31",
    "start": 2063,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "pipe3",
    "start": 2069,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2075,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2080,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2087,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "f32",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "pipe3",
    "start": 2099,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2105,
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
    "value": "list",
    "start": 2111,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2119,
    "end": 2126
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2127,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "pipe4",
    "start": 2136,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 2151,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2166,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2179,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2201,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "f40",
    "start": 2207,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "pipe4",
    "start": 2213,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2220,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2226,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2233,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 2239,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "pipe4",
    "start": 2245,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2257,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2266,
    "end": 2273
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2274,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "pipe5",
    "start": 2283,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2305,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2324,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2333,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "f50",
    "start": 2339,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "pipe5",
    "start": 2345,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2351,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2389,
    "end": 2396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2397,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "wrap3",
    "start": 2406,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2431,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2438,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2445,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2459,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2463,
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
    "value": "b2",
    "start": 2466,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2479,
    "end": 2486
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2487,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2496,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2505,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2516,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2523,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2546,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "f60",
    "start": 2550,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "wrap3",
    "start": 2556,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2562,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2569,
    "end": 2576
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2577,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 2583,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2616,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2621,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2633,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2640,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2651,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "f70",
    "start": 2655,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 2661,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 2666,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2673,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2679,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "f71",
    "start": 2683,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 2689,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2694,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 2699,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2708,
    "end": 2715
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2716,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 2722,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2734,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2749,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2760,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2773,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2785,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2797,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2809,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2820,
    "end": 2827
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2828,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "Bag",
    "start": 2834,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2847,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2859,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2862,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "contains",
    "start": 2878,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2887,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2898,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2911,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2918,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2923,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2934,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "asFunction",
    "start": 2943,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2956,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2964,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "cf",
    "start": 2974,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2978,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2983,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2986,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2995,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3007,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3015,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3018,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3027,
    "end": 3029
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3030,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "cf",
    "start": 3034,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3037,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3040,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3050,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "newPoint",
    "start": 3056,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "asFunction",
    "start": 3067,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 3078,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3086,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "newBag",
    "start": 3092,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "asFunction",
    "start": 3101,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "Bag",
    "start": 3112,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3118,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 3124,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3129,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 3133,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3139,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 3143,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3148,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 3154,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "newPoint",
    "start": 3159,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3168,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 3172,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3177,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "bag1",
    "start": 3183,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3190,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "Bag",
    "start": 3194,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3208,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "bag2",
    "start": 3214,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "newBag",
    "start": 3221,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3228,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3233,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 3238,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3245,
    "end": 3252
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3253,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 3259,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 3273,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3287,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 3299,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3313,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "CompClass",
    "start": 3318,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3333,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 3338,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3348,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 3351,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3361,
    "end": 3368
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3369,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "myHoc",
    "start": 3378,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "CompClass",
    "start": 3390,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "CompClass",
    "start": 3405,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3420,
    "end": 3424
  },
  {
    "type": "Identifier",
    "value": "GenericProps",
    "start": 3425,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3445,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3450,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 3458,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3471,
    "end": 3478
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3479,
    "end": 3484
  },
  {
    "type": "Identifier",
    "value": "GenericComp",
    "start": 3485,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3500,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 3508,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "GenericProps",
    "start": 3513,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3534,
    "end": 3539
  },
  {
    "type": "Identifier",
    "value": "GenericComp2",
    "start": 3540,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "myHoc",
    "start": 3555,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "GenericComp",
    "start": 3561,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3585,
    "end": 3593
  },
  {
    "type": "Identifier",
    "value": "mirror",
    "start": 3594,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3617,
    "end": 3619
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3631,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3638,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3650,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "identityM",
    "start": 3654,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "mirror",
    "start": 3666,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 3673,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3685,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3696,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 3704,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3717,
    "end": 3720
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Identifier",
    "value": "identityM",
    "start": 3725,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3750,
    "end": 3756
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3757,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "keyOf",
    "start": 3766,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3775,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3784,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3804,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3811,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3817,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3824,
    "end": 3830
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3831,
    "end": 3840
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 3841,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3852,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3857,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3869,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3876,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3885,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3889,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 3895,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3902,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3909,
    "end": 3916
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3917,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "toKeys",
    "start": 3926,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3936,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Identifier",
    "value": "toKey",
    "start": 3949,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3957,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3967,
    "end": 3969
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3970,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3979,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "toKeys",
    "start": 3990,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3997,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Identifier",
    "value": "keyOf",
    "start": 4003,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4032,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "flip",
    "start": 4041,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4071,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4083,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4091,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4100,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4120,
    "end": 4122
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4134,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 4143,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4147,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4166,
    "end": 4167
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4177,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4195,
    "end": 4198
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 4199,
    "end": 4207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4225,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4228,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Identifier",
    "value": "flip",
    "start": 4240,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 4245,
    "end": 4248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4251,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "actual",
    "start": 4255,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Identifier",
    "value": "flip",
    "start": 4264,
    "end": 4268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 4269,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4286,
    "end": 4291
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 4292,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4300,
    "end": 4301
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 4305,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4323,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4329,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 4337,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4347,
    "end": 4349
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 4350,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 4354,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 4358,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4370,
    "end": 4375
  },
  {
    "type": "Identifier",
    "value": "identityStr",
    "start": 4376,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4394,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4402,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4406,
    "end": 4407
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4409,
    "end": 4414
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 4415,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4420,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 4431,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Identifier",
    "value": "identityStr",
    "start": 4435,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4449,
    "end": 4452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4456,
    "end": 4461
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 4462,
    "end": 4466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4468,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 4479,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 4483,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4491,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4494,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4512,
    "end": 4520
  },
  {
    "type": "Identifier",
    "value": "of2",
    "start": 4521,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 4531,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 4539,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4549,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4561,
    "end": 4567
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 4569,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 4574,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4578,
    "end": 4579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4580,
    "end": 4581
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4583,
    "end": 4588
  },
  {
    "type": "Identifier",
    "value": "flipped",
    "start": 4589,
    "end": 4596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Identifier",
    "value": "flip",
    "start": 4599,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Identifier",
    "value": "of2",
    "start": 4604,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4624,
    "end": 4628
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4629,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 4645,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4655,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4663,
    "end": 4670
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4671,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "myHoc1",
    "start": 4677,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4688,
    "end": 4689
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4690,
    "end": 4691
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4692,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4706,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4709,
    "end": 4718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4719,
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
    "value": ";",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4723,
    "end": 4730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4731,
    "end": 4736
  },
  {
    "type": "Identifier",
    "value": "myHoc2",
    "start": 4737,
    "end": 4743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4743,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4747,
    "end": 4748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4748,
    "end": 4749
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4750,
    "end": 4751
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4752,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4766,
    "end": 4768
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4769,
    "end": 4778
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4784,
    "end": 4791
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4792,
    "end": 4797
  },
  {
    "type": "Identifier",
    "value": "MyComponent1",
    "start": 4798,
    "end": 4810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4810,
    "end": 4811
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 4812,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4822,
    "end": 4823
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4824,
    "end": 4827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4836,
    "end": 4841
  },
  {
    "type": "Identifier",
    "value": "enhance",
    "start": 4842,
    "end": 4849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4850,
    "end": 4851
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 4852,
    "end": 4856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Identifier",
    "value": "myHoc1",
    "start": 4862,
    "end": 4868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4868,
    "end": 4869
  },
  {
    "type": "Identifier",
    "value": "myHoc2",
    "start": 4874,
    "end": 4880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4880,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4886,
    "end": 4891
  },
  {
    "type": "Identifier",
    "value": "MyComponent2",
    "start": 4892,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "enhance",
    "start": 4907,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Identifier",
    "value": "MyComponent1",
    "start": 4915,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4944,
    "end": 4949
  },
  {
    "type": "Identifier",
    "value": "fn20",
    "start": 4950,
    "end": 4954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 4957,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 4963,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4968,
    "end": 4969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4972,
    "end": 4974
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4976,
    "end": 4977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4977,
    "end": 4978
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4993,
    "end": 4997
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 4998,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5003,
    "end": 5004
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 5004,
    "end": 5005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5007,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5015,
    "end": 5017
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5018,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5026,
    "end": 5031
  },
  {
    "type": "Identifier",
    "value": "fn30",
    "start": 5032,
    "end": 5036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5036,
    "end": 5037
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 5038,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5041,
    "end": 5042
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 5043,
    "end": 5047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5047,
    "end": 5048
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5055,
    "end": 5057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5062,
    "end": 5063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5063,
    "end": 5064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5071,
    "end": 5073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5074,
    "end": 5075
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 5076,
    "end": 5077
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5078,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5085,
    "end": 5090
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 5091,
    "end": 5098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5101,
    "end": 5108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5108,
    "end": 5109
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5109,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5116,
    "end": 5117
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 5121,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5129,
    "end": 5133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5133,
    "end": 5134
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 5139,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5155,
    "end": 5157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5160,
    "end": 5161
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5173,
    "end": 5174
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5175,
    "end": 5177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 5180,
    "end": 5181
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5182,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5193,
    "end": 5194
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5209,
    "end": 5216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5217,
    "end": 5222
  },
  {
    "type": "Identifier",
    "value": "getString",
    "start": 5223,
    "end": 5232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5232,
    "end": 5233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5234,
    "end": 5235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5235,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5237,
    "end": 5239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5240,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5246,
    "end": 5247
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5248,
    "end": 5255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5256,
    "end": 5261
  },
  {
    "type": "Identifier",
    "value": "orUndefined",
    "start": 5262,
    "end": 5273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5273,
    "end": 5274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5276,
    "end": 5280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5282,
    "end": 5288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5288,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5290,
    "end": 5292
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5293,
    "end": 5299
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5300,
    "end": 5301
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5302,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5313,
    "end": 5320
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5321,
    "end": 5326
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 5327,
    "end": 5335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5335,
    "end": 5336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5337,
    "end": 5338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5338,
    "end": 5339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5339,
    "end": 5340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5340,
    "end": 5341
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5341,
    "end": 5346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5351,
    "end": 5353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5354,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5355,
    "end": 5356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5358,
    "end": 5363
  },
  {
    "type": "Identifier",
    "value": "fn40",
    "start": 5364,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 5371,
    "end": 5375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5375,
    "end": 5376
  },
  {
    "type": "Identifier",
    "value": "getString",
    "start": 5381,
    "end": 5390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5396,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5403,
    "end": 5405
  },
  {
    "type": "Identifier",
    "value": "orUndefined",
    "start": 5406,
    "end": 5417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5417,
    "end": 5418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5418,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5424,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 5431,
    "end": 5439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5439,
    "end": 5440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5442,
    "end": 5443
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5458,
    "end": 5465
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5466,
    "end": 5471
  },
  {
    "type": "Identifier",
    "value": "getArray",
    "start": 5472,
    "end": 5480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5480,
    "end": 5481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5482,
    "end": 5483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5483,
    "end": 5484
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5485,
    "end": 5487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5488,
    "end": 5494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5494,
    "end": 5495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5495,
    "end": 5496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5496,
    "end": 5497
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5498,
    "end": 5505
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5506,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 5512,
    "end": 5517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5517,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5519,
    "end": 5520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5520,
    "end": 5521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5521,
    "end": 5522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5522,
    "end": 5523
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 5523,
    "end": 5525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5525,
    "end": 5526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5527,
    "end": 5528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5528,
    "end": 5529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5529,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5530,
    "end": 5531
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5532,
    "end": 5534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5536,
    "end": 5537
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5539,
    "end": 5544
  },
  {
    "type": "Identifier",
    "value": "fn60",
    "start": 5545,
    "end": 5549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 5552,
    "end": 5556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5556,
    "end": 5557
  },
  {
    "type": "Identifier",
    "value": "getArray",
    "start": 5562,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5576,
    "end": 5577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5578,
    "end": 5580
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5581,
    "end": 5582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5582,
    "end": 5583
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 5588,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5595,
    "end": 5596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5596,
    "end": 5597
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5599,
    "end": 5604
  },
  {
    "type": "Identifier",
    "value": "fn61",
    "start": 5605,
    "end": 5609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5610,
    "end": 5611
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 5612,
    "end": 5616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5616,
    "end": 5617
  },
  {
    "type": "Identifier",
    "value": "getArray",
    "start": 5622,
    "end": 5630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 5636,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 5650,
    "end": 5655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5655,
    "end": 5656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5657,
    "end": 5658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5658,
    "end": 5659
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5661,
    "end": 5666
  },
  {
    "type": "Identifier",
    "value": "fn62",
    "start": 5667,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 5674,
    "end": 5678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5678,
    "end": 5679
  },
  {
    "type": "Identifier",
    "value": "getArray",
    "start": 5684,
    "end": 5692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5692,
    "end": 5693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5700,
    "end": 5702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5704,
    "end": 5705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5710,
    "end": 5711
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5712,
    "end": 5714
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 5715,
    "end": 5720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5720,
    "end": 5721
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5722,
    "end": 5723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5723,
    "end": 5724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5725,
    "end": 5726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5726,
    "end": 5727
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5751,
    "end": 5758
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5759,
    "end": 5767
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 5768,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5773,
    "end": 5774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5774,
    "end": 5775
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5776,
    "end": 5777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5778,
    "end": 5779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5780,
    "end": 5781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5781,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5782,
    "end": 5783
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 5783,
    "end": 5785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5788,
    "end": 5789
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5791,
    "end": 5792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5792,
    "end": 5793
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5794,
    "end": 5795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5795,
    "end": 5796
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5797,
    "end": 5798
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5798,
    "end": 5799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5799,
    "end": 5800
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5801,
    "end": 5802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5802,
    "end": 5803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5803,
    "end": 5804
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5805,
    "end": 5806
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5806,
    "end": 5807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5807,
    "end": 5808
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5810,
    "end": 5811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5811,
    "end": 5812
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 5814,
    "end": 5818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5820,
    "end": 5821
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5822,
    "end": 5824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5825,
    "end": 5826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5826,
    "end": 5827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5827,
    "end": 5828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5828,
    "end": 5829
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 5830,
    "end": 5834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5834,
    "end": 5835
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 5835,
    "end": 5843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5843,
    "end": 5844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5844,
    "end": 5845
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 5846,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5850,
    "end": 5851
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 5851,
    "end": 5859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5859,
    "end": 5860
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5861,
    "end": 5862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5862,
    "end": 5863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5863,
    "end": 5864
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5888,
    "end": 5895
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5896,
    "end": 5904
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 5905,
    "end": 5910
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5910,
    "end": 5911
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5911,
    "end": 5912
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5912,
    "end": 5913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5913,
    "end": 5914
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 5914,
    "end": 5916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5916,
    "end": 5917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5918,
    "end": 5919
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5920,
    "end": 5921
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5922,
    "end": 5928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5928,
    "end": 5929
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5930,
    "end": 5932
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5933,
    "end": 5934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5934,
    "end": 5935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5935,
    "end": 5936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5937,
    "end": 5938
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 5938,
    "end": 5939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5939,
    "end": 5940
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5941,
    "end": 5947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5947,
    "end": 5948
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5949,
    "end": 5951
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5952,
    "end": 5953
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5953,
    "end": 5954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5954,
    "end": 5955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5955,
    "end": 5956
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5957,
    "end": 5962
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 5963,
    "end": 5965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5966,
    "end": 5967
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 5968,
    "end": 5973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 5974,
    "end": 5982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5982,
    "end": 5983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5983,
    "end": 5984
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 5984,
    "end": 5985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5985,
    "end": 5986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5986,
    "end": 5987
  }
]
```

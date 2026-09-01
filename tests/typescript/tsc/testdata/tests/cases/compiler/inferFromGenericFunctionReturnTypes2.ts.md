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
        "name": "Mapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 11,
        "end": 17
      },
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
                  "start": 24,
                  "end": 25
                },
                "typeArguments": null,
                "start": 24,
                "end": 25
              },
              "start": 22,
              "end": 25
            },
            "start": 21,
            "end": 25
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
              "start": 30,
              "end": 31
            },
            "typeArguments": null,
            "start": 30,
            "end": 31
          },
          "start": 27,
          "end": 31
        },
        "start": 20,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 55
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
              "start": 56,
              "end": 57
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 56,
            "end": 57
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 60
          }
        ],
        "start": 55,
        "end": 61
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 72
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
                      "start": 73,
                      "end": 74
                    },
                    "typeArguments": null,
                    "start": 73,
                    "end": 74
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "typeArguments": null,
                    "start": 76,
                    "end": 77
                  }
                ],
                "start": 72,
                "end": 78
              },
              "start": 66,
              "end": 78
            },
            "start": 64,
            "end": 78
          },
          "start": 62,
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
            "name": "Mapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 87
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
                  "start": 88,
                  "end": 89
                },
                "typeArguments": null,
                "start": 88,
                "end": 89
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              }
            ],
            "start": 87,
            "end": 93
          },
          "start": 81,
          "end": 93
        },
        "start": 79,
        "end": 93
      },
      "body": null,
      "expression": false,
      "start": 34,
      "end": 94
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayize",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 121
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
              "start": 122,
              "end": 123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 126
          }
        ],
        "start": 121,
        "end": 127
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 138
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
                      "start": 139,
                      "end": 140
                    },
                    "typeArguments": null,
                    "start": 139,
                    "end": 140
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "typeArguments": null,
                    "start": 142,
                    "end": 143
                  }
                ],
                "start": 138,
                "end": 144
              },
              "start": 132,
              "end": 144
            },
            "start": 130,
            "end": 144
          },
          "start": 128,
          "end": 144
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 153
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
                  "start": 154,
                  "end": 155
                },
                "typeArguments": null,
                "start": 154,
                "end": 155
              },
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 158
                },
                "start": 157,
                "end": 160
              }
            ],
            "start": 153,
            "end": 161
          },
          "start": 147,
          "end": 161
        },
        "start": 145,
        "end": 161
      },
      "body": null,
      "expression": false,
      "start": 96,
      "end": 162
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "combine",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 188
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
              "start": 189,
              "end": 190
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 189,
            "end": 190
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 193
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 195,
            "end": 196
          }
        ],
        "start": 188,
        "end": 197
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
                        "start": 205,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 206
                    },
                    "start": 203,
                    "end": 206
                  },
                  "start": 202,
                  "end": 206
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
                    "start": 211,
                    "end": 212
                  },
                  "typeArguments": null,
                  "start": 211,
                  "end": 212
                },
                "start": 208,
                "end": 212
              },
              "start": 201,
              "end": 212
            },
            "start": 199,
            "end": 212
          },
          "start": 198,
          "end": 212
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
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
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 222
                      },
                      "typeArguments": null,
                      "start": 221,
                      "end": 222
                    },
                    "start": 219,
                    "end": 222
                  },
                  "start": 218,
                  "end": 222
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
                    "start": 227,
                    "end": 228
                  },
                  "typeArguments": null,
                  "start": 227,
                  "end": 228
                },
                "start": 224,
                "end": 228
              },
              "start": 217,
              "end": 228
            },
            "start": 215,
            "end": 228
          },
          "start": 214,
          "end": 228
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
                    "start": 235,
                    "end": 236
                  },
                  "typeArguments": null,
                  "start": 235,
                  "end": 236
                },
                "start": 233,
                "end": 236
              },
              "start": 232,
              "end": 236
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
                "start": 241,
                "end": 242
              },
              "typeArguments": null,
              "start": 241,
              "end": 242
            },
            "start": 238,
            "end": 242
          },
          "start": 231,
          "end": 242
        },
        "start": 229,
        "end": 242
      },
      "body": null,
      "expression": false,
      "start": 164,
      "end": 243
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 275
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 276,
                    "end": 282
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 284,
                    "end": 290
                  }
                ],
                "start": 275,
                "end": 291
              },
              "start": 269,
              "end": 291
            },
            "start": 267,
            "end": 291
          },
          "start": 266,
          "end": 291
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        },
        "start": 292,
        "end": 298
      },
      "body": null,
      "expression": false,
      "start": 245,
      "end": 299
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 315
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 316,
                      "end": 322
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    }
                  ],
                  "start": 315,
                  "end": 331
                },
                "start": 309,
                "end": 331
              },
              "start": 307,
              "end": 331
            },
            "start": 305,
            "end": 331
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 335
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 340
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 347
              },
              "optional": false,
              "computed": false,
              "start": 339,
              "end": 347
            },
            "id": null,
            "generator": false,
            "start": 334,
            "end": 347
          },
          "definite": false,
          "start": 305,
          "end": 347
        }
      ],
      "declare": false,
      "start": 301,
      "end": 348
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 363
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 364,
                      "end": 370
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    }
                  ],
                  "start": 363,
                  "end": 379
                },
                "start": 357,
                "end": 379
              },
              "start": 355,
              "end": 379
            },
            "start": 353,
            "end": 379
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 386
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 387,
                    "end": 388
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 393
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 400
                  },
                  "optional": false,
                  "computed": false,
                  "start": 392,
                  "end": 400
                },
                "id": null,
                "generator": false,
                "start": 387,
                "end": 400
              }
            ],
            "optional": false,
            "start": 382,
            "end": 401
          },
          "definite": false,
          "start": 353,
          "end": 401
        }
      ],
      "declare": false,
      "start": 349,
      "end": 402
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 418,
                      "end": 424
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 426,
                        "end": 432
                      },
                      "start": 426,
                      "end": 434
                    }
                  ],
                  "start": 417,
                  "end": 435
                },
                "start": 411,
                "end": 435
              },
              "start": 409,
              "end": 435
            },
            "start": 407,
            "end": 435
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayize",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 446
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 451
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 453
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 458
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 465
                      },
                      "optional": false,
                      "computed": false,
                      "start": 457,
                      "end": 465
                    },
                    "id": null,
                    "generator": false,
                    "start": 452,
                    "end": 465
                  }
                ],
                "optional": false,
                "start": 447,
                "end": 466
              }
            ],
            "optional": false,
            "start": 438,
            "end": 467
          },
          "definite": false,
          "start": 407,
          "end": 467
        }
      ],
      "declare": false,
      "start": 403,
      "end": 468
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 477,
                  "end": 483
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 484,
                      "end": 490
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 492,
                      "end": 499
                    }
                  ],
                  "start": 483,
                  "end": 500
                },
                "start": 477,
                "end": 500
              },
              "start": 475,
              "end": 500
            },
            "start": 473,
            "end": 500
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combine",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 510
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 515
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 517
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 522
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 523,
                        "end": 529
                      },
                      "optional": false,
                      "computed": false,
                      "start": 521,
                      "end": 529
                    },
                    "id": null,
                    "generator": false,
                    "start": 516,
                    "end": 529
                  }
                ],
                "optional": false,
                "start": 511,
                "end": 530
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 536
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 537,
                        "end": 538
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 543
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 547,
                        "end": 549
                      },
                      "start": 542,
                      "end": 549
                    },
                    "id": null,
                    "generator": false,
                    "start": 537,
                    "end": 549
                  }
                ],
                "optional": false,
                "start": 532,
                "end": 550
              }
            ],
            "optional": false,
            "start": 503,
            "end": 551
          },
          "definite": false,
          "start": 473,
          "end": 551
        }
      ],
      "declare": false,
      "start": 469,
      "end": 552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 557
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 562
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 564
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 569
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 576
                  },
                  "optional": false,
                  "computed": false,
                  "start": 568,
                  "end": 576
                },
                "id": null,
                "generator": false,
                "start": 563,
                "end": 576
              }
            ],
            "optional": false,
            "start": 558,
            "end": 577
          }
        ],
        "optional": false,
        "start": 554,
        "end": 578
      },
      "directive": null,
      "start": 554,
      "end": 579
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 587
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 591,
                    "end": 594
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 596,
                    "end": 599
                  }
                ],
                "start": 590,
                "end": 600
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 604
              },
              "optional": false,
              "computed": false,
              "start": 590,
              "end": 604
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 606
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 611
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 612,
                    "end": 618
                  },
                  "optional": false,
                  "computed": false,
                  "start": 610,
                  "end": 618
                },
                "id": null,
                "generator": false,
                "start": 605,
                "end": 618
              }
            ],
            "optional": false,
            "start": 590,
            "end": 619
          },
          "definite": false,
          "start": 585,
          "end": 619
        }
      ],
      "declare": false,
      "start": 581,
      "end": 620
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 627
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 631,
                    "end": 634
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 636,
                    "end": 639
                  }
                ],
                "start": 630,
                "end": 640
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 644
              },
              "optional": false,
              "computed": false,
              "start": 630,
              "end": 644
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 649
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 650,
                        "end": 651
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 655,
                        "end": 656
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 663
                      },
                      "optional": false,
                      "computed": false,
                      "start": 655,
                      "end": 663
                    },
                    "id": null,
                    "generator": false,
                    "start": 650,
                    "end": 663
                  }
                ],
                "optional": false,
                "start": 645,
                "end": 664
              }
            ],
            "optional": false,
            "start": 630,
            "end": 665
          },
          "definite": false,
          "start": 625,
          "end": 665
        }
      ],
      "declare": false,
      "start": 621,
      "end": 666
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 673
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 677,
                    "end": 680
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 682,
                    "end": 685
                  }
                ],
                "start": 676,
                "end": 686
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 690
              },
              "optional": false,
              "computed": false,
              "start": 676,
              "end": 690
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 695
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arrayize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 696,
                      "end": 704
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 706
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 710,
                            "end": 711
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 712,
                            "end": 718
                          },
                          "optional": false,
                          "computed": false,
                          "start": 710,
                          "end": 718
                        },
                        "id": null,
                        "generator": false,
                        "start": 705,
                        "end": 718
                      }
                    ],
                    "optional": false,
                    "start": 696,
                    "end": 719
                  }
                ],
                "optional": false,
                "start": 691,
                "end": 720
              }
            ],
            "optional": false,
            "start": 676,
            "end": 721
          },
          "definite": false,
          "start": 671,
          "end": 721
        }
      ],
      "declare": false,
      "start": 667,
      "end": 722
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 727,
            "end": 729
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 733,
                    "end": 736
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 738,
                    "end": 741
                  }
                ],
                "start": 732,
                "end": 742
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 746
              },
              "optional": false,
              "computed": false,
              "start": 732,
              "end": 746
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 754
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 755,
                      "end": 759
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 760,
                            "end": 761
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 765,
                            "end": 766
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 767,
                            "end": 773
                          },
                          "optional": false,
                          "computed": false,
                          "start": 765,
                          "end": 773
                        },
                        "id": null,
                        "generator": false,
                        "start": 760,
                        "end": 773
                      }
                    ],
                    "optional": false,
                    "start": 755,
                    "end": 774
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 776,
                      "end": 780
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 781,
                            "end": 782
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 786,
                            "end": 787
                          },
                          "operator": ">",
                          "right": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 790,
                            "end": 792
                          },
                          "start": 786,
                          "end": 792
                        },
                        "id": null,
                        "generator": false,
                        "start": 781,
                        "end": 792
                      }
                    ],
                    "optional": false,
                    "start": 776,
                    "end": 793
                  }
                ],
                "optional": false,
                "start": 747,
                "end": 794
              }
            ],
            "optional": false,
            "start": 732,
            "end": 795
          },
          "definite": false,
          "start": 727,
          "end": 795
        }
      ],
      "declare": false,
      "start": 723,
      "end": 796
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 801,
            "end": 803
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 807,
                    "end": 810
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 812,
                    "end": 815
                  }
                ],
                "start": 806,
                "end": 816
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 817,
                "end": 820
              },
              "optional": false,
              "computed": false,
              "start": 806,
              "end": 820
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 828
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 837
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 839,
                      "end": 843
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 844,
                            "end": 845
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 849,
                            "end": 850
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 851,
                            "end": 857
                          },
                          "optional": false,
                          "computed": false,
                          "start": 849,
                          "end": 857
                        },
                        "id": null,
                        "generator": false,
                        "start": 844,
                        "end": 857
                      }
                    ],
                    "optional": false,
                    "start": 839,
                    "end": 858
                  }
                ],
                "optional": false,
                "start": 821,
                "end": 859
              }
            ],
            "optional": false,
            "start": 806,
            "end": 860
          },
          "definite": false,
          "start": 801,
          "end": 860
        }
      ],
      "declare": false,
      "start": 797,
      "end": 861
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 868
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 872,
                    "end": 875
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 877,
                    "end": 880
                  }
                ],
                "start": 871,
                "end": 881
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 885
              },
              "optional": false,
              "computed": false,
              "start": 871,
              "end": 885
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 893
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 894,
                      "end": 898
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 899,
                            "end": 900
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 904,
                            "end": 905
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 906,
                            "end": 912
                          },
                          "optional": false,
                          "computed": false,
                          "start": 904,
                          "end": 912
                        },
                        "id": null,
                        "generator": false,
                        "start": 899,
                        "end": 912
                      }
                    ],
                    "optional": false,
                    "start": 894,
                    "end": 913
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 915,
                    "end": 923
                  }
                ],
                "optional": false,
                "start": 886,
                "end": 924
              }
            ],
            "optional": false,
            "start": 871,
            "end": 925
          },
          "definite": false,
          "start": 866,
          "end": 925
        }
      ],
      "declare": false,
      "start": 862,
      "end": 926
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1019
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
              "start": 1020,
              "end": 1021
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1020,
            "end": 1021
          }
        ],
        "start": 1019,
        "end": 1022
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
              "name": "_store",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1033
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1035,
                    "end": 1036
                  },
                  "typeArguments": null,
                  "start": 1035,
                  "end": 1036
                },
                "start": 1035,
                "end": 1038
              },
              "start": 1033,
              "end": 1038
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
            "start": 1027,
            "end": 1039
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 1043,
              "end": 1046
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1059,
                            "end": 1063
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1064,
                            "end": 1070
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1059,
                          "end": 1070
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1071,
                          "end": 1075
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1059,
                        "end": 1075
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1076,
                          "end": 1077
                        }
                      ],
                      "optional": false,
                      "start": 1059,
                      "end": 1078
                    },
                    "directive": null,
                    "start": 1059,
                    "end": 1079
                  }
                ],
                "start": 1053,
                "end": 1083
              },
              "expression": false,
              "start": 1046,
              "end": 1083
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1043,
            "end": 1083
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null,
              "start": 1087,
              "end": 1096
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1097,
                      "end": 1098
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1097,
                    "end": 1098
                  }
                ],
                "start": 1096,
                "end": 1099
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "transformer",
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
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1117,
                                "end": 1122
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
                                      "start": 1123,
                                      "end": 1124
                                    },
                                    "typeArguments": null,
                                    "start": 1123,
                                    "end": 1124
                                  }
                                ],
                                "start": 1122,
                                "end": 1125
                              },
                              "start": 1117,
                              "end": 1125
                            },
                            "start": 1115,
                            "end": 1125
                          },
                          "start": 1114,
                          "end": 1125
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1130,
                            "end": 1135
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
                                  "start": 1136,
                                  "end": 1137
                                },
                                "typeArguments": null,
                                "start": 1136,
                                "end": 1137
                              }
                            ],
                            "start": 1135,
                            "end": 1138
                          },
                          "start": 1130,
                          "end": 1138
                        },
                        "start": 1127,
                        "end": 1138
                      },
                      "start": 1113,
                      "end": 1138
                    },
                    "start": 1111,
                    "end": 1138
                  },
                  "start": 1100,
                  "end": 1138
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1141,
                    "end": 1146
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
                          "start": 1147,
                          "end": 1148
                        },
                        "typeArguments": null,
                        "start": 1147,
                        "end": 1148
                      }
                    ],
                    "start": 1146,
                    "end": 1149
                  },
                  "start": 1141,
                  "end": 1149
                },
                "start": 1139,
                "end": 1149
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "transformer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1163,
                        "end": 1174
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1175,
                          "end": 1179
                        }
                      ],
                      "optional": false,
                      "start": 1163,
                      "end": 1180
                    },
                    "start": 1156,
                    "end": 1181
                  }
                ],
                "start": 1150,
                "end": 1185
              },
              "expression": false,
              "start": 1096,
              "end": 1185
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1087,
            "end": 1185
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1196
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
                                "start": 1205,
                                "end": 1206
                              },
                              "typeArguments": null,
                              "start": 1205,
                              "end": 1206
                            },
                            "start": 1203,
                            "end": 1206
                          },
                          "start": 1202,
                          "end": 1206
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1215,
                              "end": 1221
                            },
                            "start": 1213,
                            "end": 1221
                          },
                          "start": 1208,
                          "end": 1221
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1226,
                          "end": 1230
                        },
                        "start": 1223,
                        "end": 1230
                      },
                      "start": 1201,
                      "end": 1230
                    },
                    "start": 1199,
                    "end": 1230
                  },
                  "start": 1197,
                  "end": 1230
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1240,
                            "end": 1244
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1245,
                            "end": 1251
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1240,
                          "end": 1251
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1252,
                          "end": 1259
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1240,
                        "end": 1259
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1261,
                              "end": 1262
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1264,
                              "end": 1265
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1270,
                              "end": 1272
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1273,
                                "end": 1274
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1276,
                                "end": 1277
                              }
                            ],
                            "optional": false,
                            "start": 1270,
                            "end": 1278
                          },
                          "id": null,
                          "generator": false,
                          "start": 1260,
                          "end": 1278
                        }
                      ],
                      "optional": false,
                      "start": 1240,
                      "end": 1279
                    },
                    "directive": null,
                    "start": 1240,
                    "end": 1280
                  }
                ],
                "start": 1232,
                "end": 1284
              },
              "expression": false,
              "start": 1196,
              "end": 1284
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1189,
            "end": 1284
          }
        ],
        "start": 1023,
        "end": 1286
      },
      "abstract": false,
      "declare": false,
      "start": 1008,
      "end": 1286
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 1297,
        "end": 1304
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
              "start": 1305,
              "end": 1306
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1305,
            "end": 1306
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1308,
              "end": 1309
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1308,
            "end": 1309
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1312
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1311,
            "end": 1312
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1314,
              "end": 1315
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1314,
            "end": 1315
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1318
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1317,
            "end": 1318
          }
        ],
        "start": 1304,
        "end": 1319
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnA",
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1332,
                        "end": 1337
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
                              "start": 1338,
                              "end": 1339
                            },
                            "typeArguments": null,
                            "start": 1338,
                            "end": 1339
                          }
                        ],
                        "start": 1337,
                        "end": 1340
                      },
                      "start": 1332,
                      "end": 1340
                    },
                    "start": 1330,
                    "end": 1340
                  },
                  "start": 1329,
                  "end": 1340
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1345,
                    "end": 1350
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
                          "start": 1351,
                          "end": 1352
                        },
                        "typeArguments": null,
                        "start": 1351,
                        "end": 1352
                      }
                    ],
                    "start": 1350,
                    "end": 1353
                  },
                  "start": 1345,
                  "end": 1353
                },
                "start": 1342,
                "end": 1353
              },
              "start": 1328,
              "end": 1353
            },
            "start": 1326,
            "end": 1353
          },
          "start": 1323,
          "end": 1353
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnB",
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1367,
                        "end": 1372
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
                              "start": 1373,
                              "end": 1374
                            },
                            "typeArguments": null,
                            "start": 1373,
                            "end": 1374
                          }
                        ],
                        "start": 1372,
                        "end": 1375
                      },
                      "start": 1367,
                      "end": 1375
                    },
                    "start": 1365,
                    "end": 1375
                  },
                  "start": 1364,
                  "end": 1375
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1380,
                    "end": 1385
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1386,
                          "end": 1387
                        },
                        "typeArguments": null,
                        "start": 1386,
                        "end": 1387
                      }
                    ],
                    "start": 1385,
                    "end": 1388
                  },
                  "start": 1380,
                  "end": 1388
                },
                "start": 1377,
                "end": 1388
              },
              "start": 1363,
              "end": 1388
            },
            "start": 1361,
            "end": 1388
          },
          "start": 1358,
          "end": 1388
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnC",
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1402,
                        "end": 1407
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1408,
                              "end": 1409
                            },
                            "typeArguments": null,
                            "start": 1408,
                            "end": 1409
                          }
                        ],
                        "start": 1407,
                        "end": 1410
                      },
                      "start": 1402,
                      "end": 1410
                    },
                    "start": 1400,
                    "end": 1410
                  },
                  "start": 1399,
                  "end": 1410
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1420
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1421,
                          "end": 1422
                        },
                        "typeArguments": null,
                        "start": 1421,
                        "end": 1422
                      }
                    ],
                    "start": 1420,
                    "end": 1423
                  },
                  "start": 1415,
                  "end": 1423
                },
                "start": 1412,
                "end": 1423
              },
              "start": 1398,
              "end": 1423
            },
            "start": 1396,
            "end": 1423
          },
          "start": 1393,
          "end": 1423
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnD",
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1436,
                        "end": 1441
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1442,
                              "end": 1443
                            },
                            "typeArguments": null,
                            "start": 1442,
                            "end": 1443
                          }
                        ],
                        "start": 1441,
                        "end": 1444
                      },
                      "start": 1436,
                      "end": 1444
                    },
                    "start": 1434,
                    "end": 1444
                  },
                  "start": 1433,
                  "end": 1444
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1449,
                    "end": 1454
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1455,
                          "end": 1456
                        },
                        "typeArguments": null,
                        "start": 1455,
                        "end": 1456
                      }
                    ],
                    "start": 1454,
                    "end": 1457
                  },
                  "start": 1449,
                  "end": 1457
                },
                "start": 1446,
                "end": 1457
              },
              "start": 1432,
              "end": 1457
            },
            "start": 1430,
            "end": 1457
          },
          "start": 1427,
          "end": 1457
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
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1465,
                    "end": 1470
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
                          "start": 1471,
                          "end": 1472
                        },
                        "typeArguments": null,
                        "start": 1471,
                        "end": 1472
                      }
                    ],
                    "start": 1470,
                    "end": 1473
                  },
                  "start": 1465,
                  "end": 1473
                },
                "start": 1463,
                "end": 1473
              },
              "start": 1462,
              "end": 1473
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1483
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1484,
                      "end": 1485
                    },
                    "typeArguments": null,
                    "start": 1484,
                    "end": 1485
                  }
                ],
                "start": 1483,
                "end": 1486
              },
              "start": 1478,
              "end": 1486
            },
            "start": 1475,
            "end": 1486
          },
          "start": 1461,
          "end": 1486
        },
        "start": 1460,
        "end": 1486
      },
      "body": null,
      "expression": false,
      "start": 1288,
      "end": 1487
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 1515,
        "end": 1522
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
              "start": 1523,
              "end": 1524
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1523,
            "end": 1524
          }
        ],
        "start": 1522,
        "end": 1525
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "fns",
            "optional": false,
            "typeAnnotation": null,
            "start": 1529,
            "end": 1532
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                          "start": 1539,
                          "end": 1540
                        },
                        "typeArguments": null,
                        "start": 1539,
                        "end": 1540
                      },
                      "start": 1537,
                      "end": 1540
                    },
                    "start": 1536,
                    "end": 1540
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
                      "start": 1545,
                      "end": 1546
                    },
                    "typeArguments": null,
                    "start": 1545,
                    "end": 1546
                  },
                  "start": 1542,
                  "end": 1546
                },
                "start": 1535,
                "end": 1546
              },
              "start": 1534,
              "end": 1549
            },
            "start": 1532,
            "end": 1549
          },
          "value": null,
          "start": 1526,
          "end": 1549
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
                    "start": 1556,
                    "end": 1557
                  },
                  "typeArguments": null,
                  "start": 1556,
                  "end": 1557
                },
                "start": 1554,
                "end": 1557
              },
              "start": 1553,
              "end": 1557
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
                "start": 1562,
                "end": 1563
              },
              "typeArguments": null,
              "start": 1562,
              "end": 1563
            },
            "start": 1559,
            "end": 1563
          },
          "start": 1552,
          "end": 1563
        },
        "start": 1550,
        "end": 1563
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
                        "start": 1579,
                        "end": 1580
                      },
                      "typeArguments": null,
                      "start": 1579,
                      "end": 1580
                    },
                    "start": 1577,
                    "end": 1580
                  },
                  "start": 1576,
                  "end": 1580
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
                    "name": "fns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1585,
                    "end": 1588
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reduce",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1589,
                    "end": 1595
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1585,
                  "end": 1595
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
                        "name": "prev",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1597,
                        "end": 1601
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1603,
                        "end": 1605
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1610,
                        "end": 1612
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1613,
                          "end": 1617
                        }
                      ],
                      "optional": false,
                      "start": 1610,
                      "end": 1618
                    },
                    "id": null,
                    "generator": false,
                    "start": 1596,
                    "end": 1618
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1620,
                    "end": 1621
                  }
                ],
                "optional": false,
                "start": 1585,
                "end": 1622
              },
              "id": null,
              "generator": false,
              "start": 1575,
              "end": 1622
            },
            "start": 1568,
            "end": 1623
          }
        ],
        "start": 1564,
        "end": 1625
      },
      "expression": false,
      "start": 1506,
      "end": 1625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 1636,
        "end": 1639
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
              "start": 1640,
              "end": 1641
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1640,
            "end": 1641
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1643,
              "end": 1644
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1643,
            "end": 1644
          }
        ],
        "start": 1639,
        "end": 1645
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
                        "start": 1654,
                        "end": 1655
                      },
                      "typeArguments": null,
                      "start": 1654,
                      "end": 1655
                    },
                    "start": 1652,
                    "end": 1655
                  },
                  "start": 1651,
                  "end": 1655
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
                    "start": 1660,
                    "end": 1661
                  },
                  "typeArguments": null,
                  "start": 1660,
                  "end": 1661
                },
                "start": 1657,
                "end": 1661
              },
              "start": 1650,
              "end": 1661
            },
            "start": 1648,
            "end": 1661
          },
          "start": 1646,
          "end": 1661
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
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1668,
                    "end": 1673
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
                          "start": 1674,
                          "end": 1675
                        },
                        "typeArguments": null,
                        "start": 1674,
                        "end": 1675
                      }
                    ],
                    "start": 1673,
                    "end": 1676
                  },
                  "start": 1668,
                  "end": 1676
                },
                "start": 1666,
                "end": 1676
              },
              "start": 1665,
              "end": 1676
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1681,
                "end": 1686
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
                      "start": 1687,
                      "end": 1688
                    },
                    "typeArguments": null,
                    "start": 1687,
                    "end": 1688
                  }
                ],
                "start": 1686,
                "end": 1689
              },
              "start": 1681,
              "end": 1689
            },
            "start": 1678,
            "end": 1689
          },
          "start": 1664,
          "end": 1689
        },
        "start": 1662,
        "end": 1689
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1705,
                        "end": 1710
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
                              "start": 1711,
                              "end": 1712
                            },
                            "typeArguments": null,
                            "start": 1711,
                            "end": 1712
                          }
                        ],
                        "start": 1710,
                        "end": 1713
                      },
                      "start": 1705,
                      "end": 1713
                    },
                    "start": 1703,
                    "end": 1713
                  },
                  "start": 1702,
                  "end": 1713
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1733,
                                "end": 1738
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
                                      "start": 1739,
                                      "end": 1740
                                    },
                                    "typeArguments": null,
                                    "start": 1739,
                                    "end": 1740
                                  }
                                ],
                                "start": 1738,
                                "end": 1741
                              },
                              "start": 1733,
                              "end": 1741
                            },
                            "start": 1731,
                            "end": 1741
                          },
                          "start": 1730,
                          "end": 1741
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1748,
                            "end": 1753
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 1744,
                          "end": 1755
                        },
                        "definite": false,
                        "start": 1730,
                        "end": 1755
                      }
                    ],
                    "declare": false,
                    "start": 1724,
                    "end": 1756
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1761,
                          "end": 1762
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1763,
                          "end": 1770
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1761,
                        "end": 1770
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
                              "start": 1771,
                              "end": 1772
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1776,
                                "end": 1777
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "add",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1778,
                                "end": 1781
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1776,
                              "end": 1781
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fn",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1782,
                                  "end": 1784
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1785,
                                    "end": 1786
                                  }
                                ],
                                "optional": false,
                                "start": 1782,
                                "end": 1787
                              }
                            ],
                            "optional": false,
                            "start": 1776,
                            "end": 1788
                          },
                          "id": null,
                          "generator": false,
                          "start": 1771,
                          "end": 1788
                        }
                      ],
                      "optional": false,
                      "start": 1761,
                      "end": 1789
                    },
                    "directive": null,
                    "start": 1761,
                    "end": 1790
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1802,
                      "end": 1803
                    },
                    "start": 1795,
                    "end": 1804
                  }
                ],
                "start": 1718,
                "end": 1808
              },
              "id": null,
              "generator": false,
              "start": 1701,
              "end": 1808
            },
            "start": 1694,
            "end": 1808
          }
        ],
        "start": 1690,
        "end": 1810
      },
      "expression": false,
      "start": 1627,
      "end": 1810
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 1821,
        "end": 1827
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
              "start": 1828,
              "end": 1829
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1828,
            "end": 1829
          }
        ],
        "start": 1827,
        "end": 1830
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "predicate",
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
                        "start": 1846,
                        "end": 1847
                      },
                      "typeArguments": null,
                      "start": 1846,
                      "end": 1847
                    },
                    "start": 1844,
                    "end": 1847
                  },
                  "start": 1843,
                  "end": 1847
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1852,
                  "end": 1859
                },
                "start": 1849,
                "end": 1859
              },
              "start": 1842,
              "end": 1859
            },
            "start": 1840,
            "end": 1859
          },
          "start": 1831,
          "end": 1859
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
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1866,
                    "end": 1871
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
                          "start": 1872,
                          "end": 1873
                        },
                        "typeArguments": null,
                        "start": 1872,
                        "end": 1873
                      }
                    ],
                    "start": 1871,
                    "end": 1874
                  },
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1879,
                "end": 1884
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
                      "start": 1885,
                      "end": 1886
                    },
                    "typeArguments": null,
                    "start": 1885,
                    "end": 1886
                  }
                ],
                "start": 1884,
                "end": 1887
              },
              "start": 1879,
              "end": 1887
            },
            "start": 1876,
            "end": 1887
          },
          "start": 1862,
          "end": 1887
        },
        "start": 1860,
        "end": 1887
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1903,
                        "end": 1908
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
                              "start": 1909,
                              "end": 1910
                            },
                            "typeArguments": null,
                            "start": 1909,
                            "end": 1910
                          }
                        ],
                        "start": 1908,
                        "end": 1911
                      },
                      "start": 1903,
                      "end": 1911
                    },
                    "start": 1901,
                    "end": 1911
                  },
                  "start": 1900,
                  "end": 1911
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1928,
                          "end": 1934
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1941,
                            "end": 1946
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
                                  "start": 1947,
                                  "end": 1948
                                },
                                "typeArguments": null,
                                "start": 1947,
                                "end": 1948
                              }
                            ],
                            "start": 1946,
                            "end": 1949
                          },
                          "arguments": [],
                          "start": 1937,
                          "end": 1951
                        },
                        "definite": false,
                        "start": 1928,
                        "end": 1951
                      }
                    ],
                    "declare": false,
                    "start": 1922,
                    "end": 1952
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1957,
                          "end": 1958
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1959,
                          "end": 1966
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1957,
                        "end": 1966
                      },
                      "typeArguments": null,
                      "arguments": [
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
                              "start": 1967,
                              "end": 1968
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "predicate",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1984,
                                    "end": 1993
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1994,
                                      "end": 1995
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1984,
                                  "end": 1996
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1998,
                                        "end": 2004
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "add",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2005,
                                        "end": 2008
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1998,
                                      "end": 2008
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2009,
                                        "end": 2010
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1998,
                                    "end": 2011
                                  },
                                  "directive": null,
                                  "start": 1998,
                                  "end": 2012
                                },
                                "alternate": null,
                                "start": 1980,
                                "end": 2012
                              }
                            ],
                            "start": 1972,
                            "end": 2018
                          },
                          "id": null,
                          "generator": false,
                          "start": 1967,
                          "end": 2018
                        }
                      ],
                      "optional": false,
                      "start": 1957,
                      "end": 2019
                    },
                    "directive": null,
                    "start": 1957,
                    "end": 2020
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2031,
                      "end": 2037
                    },
                    "start": 2024,
                    "end": 2038
                  }
                ],
                "start": 1916,
                "end": 2042
              },
              "id": null,
              "generator": false,
              "start": 1899,
              "end": 2042
            },
            "start": 1892,
            "end": 2042
          }
        ],
        "start": 1888,
        "end": 2044
      },
      "expression": false,
      "start": 1812,
      "end": 2044
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 2052,
            "end": 2059
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SetOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2066,
              "end": 2071
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2072,
                  "end": 2078
                }
              ],
              "start": 2071,
              "end": 2079
            },
            "arguments": [],
            "start": 2062,
            "end": 2081
          },
          "definite": false,
          "start": 2052,
          "end": 2081
        }
      ],
      "declare": false,
      "start": 2046,
      "end": 2082
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 2083,
            "end": 2090
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 2091,
            "end": 2094
          },
          "optional": false,
          "computed": false,
          "start": 2083,
          "end": 2094
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2095,
            "end": 2096
          }
        ],
        "optional": false,
        "start": 2083,
        "end": 2097
      },
      "directive": null,
      "start": 2083,
      "end": 2098
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 2099,
            "end": 2106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 2107,
            "end": 2110
          },
          "optional": false,
          "computed": false,
          "start": 2099,
          "end": 2110
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2111,
            "end": 2112
          }
        ],
        "optional": false,
        "start": 2099,
        "end": 2113
      },
      "directive": null,
      "start": 2099,
      "end": 2114
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 2115,
            "end": 2122
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 2123,
            "end": 2126
          },
          "optional": false,
          "computed": false,
          "start": 2115,
          "end": 2126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2127,
            "end": 2128
          }
        ],
        "optional": false,
        "start": 2115,
        "end": 2129
      },
      "directive": null,
      "start": 2115,
      "end": 2130
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2138,
            "end": 2140
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "testSet",
                "optional": false,
                "typeAnnotation": null,
                "start": 2143,
                "end": 2150
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transform",
                "optional": false,
                "typeAnnotation": null,
                "start": 2151,
                "end": 2160
              },
              "optional": false,
              "computed": false,
              "start": 2143,
              "end": 2160
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compose",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2164,
                  "end": 2171
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "filter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2177,
                      "end": 2183
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
                            "start": 2184,
                            "end": 2185
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2189,
                              "end": 2190
                            },
                            "operator": "%",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2193,
                              "end": 2194
                            },
                            "start": 2189,
                            "end": 2194
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2199,
                            "end": 2200
                          },
                          "start": 2189,
                          "end": 2200
                        },
                        "id": null,
                        "generator": false,
                        "start": 2184,
                        "end": 2200
                      }
                    ],
                    "optional": false,
                    "start": 2177,
                    "end": 2201
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2207,
                      "end": 2210
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
                            "start": 2211,
                            "end": 2212
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
                            "start": 2216,
                            "end": 2217
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2220,
                            "end": 2221
                          },
                          "start": 2216,
                          "end": 2221
                        },
                        "id": null,
                        "generator": false,
                        "start": 2211,
                        "end": 2221
                      }
                    ],
                    "optional": false,
                    "start": 2207,
                    "end": 2222
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2228,
                      "end": 2231
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
                            "start": 2232,
                            "end": 2233
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
                            "start": 2237,
                            "end": 2238
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "!!!",
                            "raw": "'!!!'",
                            "start": 2241,
                            "end": 2246
                          },
                          "start": 2237,
                          "end": 2246
                        },
                        "id": null,
                        "generator": false,
                        "start": 2232,
                        "end": 2246
                      }
                    ],
                    "optional": false,
                    "start": 2228,
                    "end": 2247
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2253,
                      "end": 2256
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
                            "start": 2257,
                            "end": 2258
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2262,
                              "end": 2263
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2264,
                              "end": 2275
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2262,
                            "end": 2275
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2262,
                          "end": 2277
                        },
                        "id": null,
                        "generator": false,
                        "start": 2257,
                        "end": 2277
                      }
                    ],
                    "optional": false,
                    "start": 2253,
                    "end": 2278
                  }
                ],
                "optional": false,
                "start": 2164,
                "end": 2282
              }
            ],
            "optional": false,
            "start": 2143,
            "end": 2284
          },
          "definite": false,
          "start": 2138,
          "end": 2284
        }
      ],
      "declare": false,
      "start": 2132,
      "end": 2284
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 2303,
        "end": 2311
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
              "start": 2312,
              "end": 2313
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2312,
            "end": 2313
          }
        ],
        "start": 2311,
        "end": 2314
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
                "start": 2318,
                "end": 2319
              },
              "typeArguments": null,
              "start": 2318,
              "end": 2319
            },
            "start": 2316,
            "end": 2319
          },
          "start": 2315,
          "end": 2319
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
            "start": 2322,
            "end": 2323
          },
          "typeArguments": null,
          "start": 2322,
          "end": 2323
        },
        "start": 2320,
        "end": 2323
      },
      "body": null,
      "expression": false,
      "start": 2286,
      "end": 2324
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2332,
            "end": 2334
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "testSet",
                "optional": false,
                "typeAnnotation": null,
                "start": 2337,
                "end": 2344
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transform",
                "optional": false,
                "typeAnnotation": null,
                "start": 2345,
                "end": 2354
              },
              "optional": false,
              "computed": false,
              "start": 2337,
              "end": 2354
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compose",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2358,
                  "end": 2365
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "filter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2371,
                      "end": 2377
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
                            "start": 2378,
                            "end": 2379
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2383,
                              "end": 2384
                            },
                            "operator": "%",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2387,
                              "end": 2388
                            },
                            "start": 2383,
                            "end": 2388
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2393,
                            "end": 2394
                          },
                          "start": 2383,
                          "end": 2394
                        },
                        "id": null,
                        "generator": false,
                        "start": 2378,
                        "end": 2394
                      }
                    ],
                    "optional": false,
                    "start": 2371,
                    "end": 2395
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2401,
                    "end": 2409
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2415,
                      "end": 2418
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
                            "start": 2419,
                            "end": 2420
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
                            "start": 2424,
                            "end": 2425
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "!!!",
                            "raw": "'!!!'",
                            "start": 2428,
                            "end": 2433
                          },
                          "start": 2424,
                          "end": 2433
                        },
                        "id": null,
                        "generator": false,
                        "start": 2419,
                        "end": 2433
                      }
                    ],
                    "optional": false,
                    "start": 2415,
                    "end": 2434
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2440,
                      "end": 2443
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
                            "start": 2444,
                            "end": 2445
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2449,
                              "end": 2450
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2451,
                              "end": 2462
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2449,
                            "end": 2462
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2449,
                          "end": 2464
                        },
                        "id": null,
                        "generator": false,
                        "start": 2444,
                        "end": 2464
                      }
                    ],
                    "optional": false,
                    "start": 2440,
                    "end": 2465
                  }
                ],
                "optional": false,
                "start": 2358,
                "end": 2469
              }
            ],
            "optional": false,
            "start": 2337,
            "end": 2471
          },
          "definite": false,
          "start": 2332,
          "end": 2471
        }
      ],
      "declare": false,
      "start": 2326,
      "end": 2471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2471
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
    "value": "Mapper",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 27,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 34,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 42,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 62,
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
    "value": "Mapper",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "Mapper",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 96,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "arrayize",
    "start": 113,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Mapper",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Mapper",
    "start": 147,
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
    "value": "T",
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
    "value": "U",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 164,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 172,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "B",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 208,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 224,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 245,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 253,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "Mapper",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 276,
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
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "void",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Mapper",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 336,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 353,
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
    "value": "Mapper",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 364,
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
    "value": "number",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 389,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "Mapper",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "arrayize",
    "start": 438,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 454,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "length",
    "start": 459,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Mapper",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 503,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 518,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 539,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 544,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "wrap",
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
    "value": "s",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 565,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
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
    "type": "Keyword",
    "value": "let",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 590,
    "end": 591
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "map",
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
    "value": "s",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 607,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 612,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 630,
    "end": 631
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 631,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 645,
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
    "value": "s",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 652,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 676,
    "end": 677
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "arrayize",
    "start": 696,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 707,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "length",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 732,
    "end": 733
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 743,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 747,
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
    "value": "wrap",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 762,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 783,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 788,
    "end": 789
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 790,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 797,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 806,
    "end": 807
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 807,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 817,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 821,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 829,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 846,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 862,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 871,
    "end": 872
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 875,
    "end": 876
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 886,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 894,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 901,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 906,
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
    "value": ",",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 915,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1008,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "_store",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1043,
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
    "value": "a",
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
    "value": "A",
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
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1059,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "_store",
    "start": 1064,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 1087,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "transformer",
    "start": 1100,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1117,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1130,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1156,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "transformer",
    "start": 1163,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1175,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1189,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1208,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1215,
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
    "value": "=>",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1226,
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
    "type": "Keyword",
    "value": "this",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "_store",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1252,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1288,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 1297,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "fnA",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1332,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1342,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1345,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "fnB",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "b",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1367,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1377,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1380,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "fnC",
    "start": 1393,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1402,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1412,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1415,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "fnD",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1436,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1449,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1465,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1472,
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
    "value": "=>",
    "start": 1475,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1478,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1506,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 1515,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "fns",
    "start": 1529,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1542,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1568,
    "end": 1574
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
    "value": "T",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1582,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "fns",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 1597,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1607,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1610,
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
    "value": "prev",
    "start": 1613,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
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
    "value": "x",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1627,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1636,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1646,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1657,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1668,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1678,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1681,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1694,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1705,
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
    "value": "A",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1715,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1724,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1733,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1744,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1748,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1763,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1773,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1778,
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
    "value": "fn",
    "start": 1782,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1785,
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
    "value": ")",
    "start": 1787,
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
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1795,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1812,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1821,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 1831,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1849,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1852,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Identifier",
    "value": "SetOf",
    "start": 1866,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 1876,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1879,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1892,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1903,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1913,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1922,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1937,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1941,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1959,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1969,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1980,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 1984,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1998,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2005,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2031,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2046,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 2052,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2062,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 2066,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2072,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 2083,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2091,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 2099,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2107,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 2115,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2123,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2132,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2138,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 2143,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 2151,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 2164,
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
    "value": "filter",
    "start": 2177,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2186,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2195,
    "end": 2198
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2207,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2213,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2228,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2234,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "String",
    "value": "'!!!'",
    "start": 2241,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2253,
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
    "value": "=>",
    "start": 2259,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 2264,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2286,
    "end": 2293
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2294,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 2303,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2326,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2332,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 2337,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 2345,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 2358,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 2371,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2380,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2389,
    "end": 2392
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 2401,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2415,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2421,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "String",
    "value": "'!!!'",
    "start": 2428,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2440,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2446,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 2451,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2470,
    "end": 2471
  }
]
```

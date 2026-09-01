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
              "start": 7,
              "end": 8
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7,
            "end": 8
          }
        ],
        "start": 6,
        "end": 9
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 15
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
                    "start": 17,
                    "end": 18
                  },
                  "typeArguments": null,
                  "start": 17,
                  "end": 18
                },
                "start": 15,
                "end": 18
              },
              "accessibility": null,
              "static": false,
              "start": 14,
              "end": 18
            }
          ],
          "start": 12,
          "end": 20
        },
        "extendsType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 34,
                    "end": 35
                  },
                  "start": 34,
                  "end": 35
                },
                "start": 32,
                "end": 35
              },
              "accessibility": null,
              "static": false,
              "start": 31,
              "end": 35
            }
          ],
          "start": 29,
          "end": 37
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 40,
            "end": 41
          },
          "start": 40,
          "end": 41
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 44,
            "end": 45
          },
          "start": 44,
          "end": 45
        },
        "start": 12,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
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
          }
        ],
        "start": 55,
        "end": 58
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
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
                  "start": 63,
                  "end": 64
                },
                "typeArguments": null,
                "start": 63,
                "end": 64
              }
            ],
            "start": 62,
            "end": 65
          },
          "start": 61,
          "end": 65
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 74,
            "end": 75
          },
          "start": 74,
          "end": 75
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 78,
            "end": 79
          },
          "start": 78,
          "end": 79
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 82,
            "end": 83
          },
          "start": 82,
          "end": 83
        },
        "start": 61,
        "end": 83
      },
      "declare": false,
      "start": 48,
      "end": 84
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 105
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
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          }
        ],
        "start": 105,
        "end": 108
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 112,
                "end": 113
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
                      "start": 114,
                      "end": 115
                    },
                    "typeArguments": null,
                    "start": 114,
                    "end": 115
                  }
                ],
                "start": 113,
                "end": 116
              },
              "start": 112,
              "end": 116
            }
          ],
          "start": 111,
          "end": 117
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 127,
                "end": 128
              },
              "start": 127,
              "end": 128
            }
          ],
          "start": 126,
          "end": 129
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 132,
            "end": 133
          },
          "start": 132,
          "end": 133
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 136,
            "end": 137
          },
          "start": 136,
          "end": 137
        },
        "start": 111,
        "end": 137
      },
      "declare": false,
      "start": 98,
      "end": 138
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 159
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
        "start": 159,
        "end": 162
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 166,
                "end": 167
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
                      "start": 168,
                      "end": 169
                    },
                    "typeArguments": null,
                    "start": 168,
                    "end": 169
                  }
                ],
                "start": 167,
                "end": 170
              },
              "start": 166,
              "end": 170
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
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
                      "start": 174,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 174,
                    "end": 175
                  }
                ],
                "start": 173,
                "end": 176
              },
              "start": 172,
              "end": 176
            }
          ],
          "start": 165,
          "end": 177
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 187,
                "end": 188
              },
              "start": 187,
              "end": 188
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 190,
                "end": 191
              },
              "start": 190,
              "end": 191
            }
          ],
          "start": 186,
          "end": 192
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 195,
            "end": 196
          },
          "start": 195,
          "end": 196
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 199,
            "end": 200
          },
          "start": 199,
          "end": 200
        },
        "start": 165,
        "end": 200
      },
      "declare": false,
      "start": 152,
      "end": 201
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 222
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
              "start": 223,
              "end": 224
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 224
          }
        ],
        "start": 222,
        "end": 225
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 229,
                "end": 230
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
                      "start": 231,
                      "end": 232
                    },
                    "typeArguments": null,
                    "start": 231,
                    "end": 232
                  }
                ],
                "start": 230,
                "end": 233
              },
              "start": 229,
              "end": 233
            },
            {
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
                      "start": 237,
                      "end": 238
                    },
                    "typeArguments": null,
                    "start": 237,
                    "end": 238
                  }
                ],
                "start": 236,
                "end": 239
              },
              "start": 235,
              "end": 239
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
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
                      "start": 243,
                      "end": 244
                    },
                    "typeArguments": null,
                    "start": 243,
                    "end": 244
                  }
                ],
                "start": 242,
                "end": 245
              },
              "start": 241,
              "end": 245
            }
          ],
          "start": 228,
          "end": 246
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 256,
                "end": 257
              },
              "start": 256,
              "end": 257
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 259,
                "end": 260
              },
              "start": 259,
              "end": 260
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 262,
                "end": 263
              },
              "start": 262,
              "end": 263
            }
          ],
          "start": 255,
          "end": 264
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 267,
            "end": 268
          },
          "start": 267,
          "end": 268
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 271,
            "end": 272
          },
          "start": 271,
          "end": 272
        },
        "start": 228,
        "end": 272
      },
      "declare": false,
      "start": 215,
      "end": 273
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 295
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
              "start": 296,
              "end": 297
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 296,
            "end": 297
          }
        ],
        "start": 295,
        "end": 298
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 302,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 305
                    },
                    "typeArguments": null,
                    "start": 304,
                    "end": 305
                  }
                ],
                "start": 303,
                "end": 306
              },
              "start": 302,
              "end": 306
            }
          ],
          "start": 301,
          "end": 307
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 317,
                "end": 318
              },
              "start": 317,
              "end": 318
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 320,
                "end": 321
              },
              "start": 320,
              "end": 321
            }
          ],
          "start": 316,
          "end": 322
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 325,
            "end": 326
          },
          "start": 325,
          "end": 326
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 329,
            "end": 330
          },
          "start": 329,
          "end": 330
        },
        "start": 301,
        "end": 330
      },
      "declare": false,
      "start": 288,
      "end": 331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 345
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
              "start": 346,
              "end": 347
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 346,
            "end": 347
          }
        ],
        "start": 345,
        "end": 348
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 352,
                "end": 353
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
                      "start": 354,
                      "end": 355
                    },
                    "typeArguments": null,
                    "start": 354,
                    "end": 355
                  }
                ],
                "start": 353,
                "end": 356
              },
              "start": 352,
              "end": 356
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 359
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
                      "start": 360,
                      "end": 361
                    },
                    "typeArguments": null,
                    "start": 360,
                    "end": 361
                  }
                ],
                "start": 359,
                "end": 362
              },
              "start": 358,
              "end": 362
            }
          ],
          "start": 351,
          "end": 363
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 373,
                "end": 374
              },
              "start": 373,
              "end": 374
            }
          ],
          "start": 372,
          "end": 375
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 378,
            "end": 379
          },
          "start": 378,
          "end": 379
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 382,
            "end": 383
          },
          "start": 382,
          "end": 383
        },
        "start": 351,
        "end": 383
      },
      "declare": false,
      "start": 338,
      "end": 384
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 399
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
              "start": 400,
              "end": 401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 401
          }
        ],
        "start": 399,
        "end": 402
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
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
                "start": 408,
                "end": 414
              },
              "accessibility": null,
              "static": false,
              "start": 407,
              "end": 414
            }
          ],
          "start": 405,
          "end": 416
        },
        "extendsType": {
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 428
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 430,
                    "end": 431
                  },
                  "start": 430,
                  "end": 431
                },
                "start": 428,
                "end": 431
              },
              "accessibility": null,
              "static": false,
              "start": 427,
              "end": 431
            }
          ],
          "start": 425,
          "end": 433
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 436,
            "end": 437
          },
          "start": 436,
          "end": 437
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 440,
            "end": 441
          },
          "start": 440,
          "end": 441
        },
        "start": 405,
        "end": 441
      },
      "declare": false,
      "start": 392,
      "end": 442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Or",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 503
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
              "start": 504,
              "end": 505
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 514,
              "end": 521
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 504,
            "end": 521
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 524
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 533,
              "end": 540
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 523,
            "end": 540
          }
        ],
        "start": 503,
        "end": 541
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 545,
                "end": 546
              },
              "typeArguments": null,
              "start": 545,
              "end": 546
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 549
              },
              "typeArguments": null,
              "start": 548,
              "end": 549
            }
          ],
          "start": 544,
          "end": 550
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 560,
                "end": 565
              },
              "start": 560,
              "end": 565
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 567,
                "end": 572
              },
              "start": 567,
              "end": 572
            }
          ],
          "start": 559,
          "end": 573
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 576,
            "end": 581
          },
          "start": 576,
          "end": 581
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 584,
            "end": 588
          },
          "start": 584,
          "end": 588
        },
        "start": 544,
        "end": 588
      },
      "declare": false,
      "start": 496,
      "end": 589
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "And",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 598
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
              "start": 599,
              "end": 600
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 609,
              "end": 616
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 599,
            "end": 616
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 619
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 628,
              "end": 635
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 618,
            "end": 635
          }
        ],
        "start": 598,
        "end": 636
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 640,
                "end": 641
              },
              "typeArguments": null,
              "start": 640,
              "end": 641
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 644
              },
              "typeArguments": null,
              "start": 643,
              "end": 644
            }
          ],
          "start": 639,
          "end": 645
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 655,
                "end": 659
              },
              "start": 655,
              "end": 659
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 661,
                "end": 665
              },
              "start": 661,
              "end": 665
            }
          ],
          "start": 654,
          "end": 666
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 669,
            "end": 673
          },
          "start": 669,
          "end": 673
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 676,
            "end": 681
          },
          "start": 676,
          "end": 681
        },
        "start": 639,
        "end": 681
      },
      "declare": false,
      "start": 590,
      "end": 682
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Not",
        "optional": false,
        "typeAnnotation": null,
        "start": 688,
        "end": 691
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
              "start": 692,
              "end": 693
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 702,
              "end": 709
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 692,
            "end": 709
          }
        ],
        "start": 691,
        "end": 710
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 714
          },
          "typeArguments": null,
          "start": 713,
          "end": 714
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 723,
            "end": 727
          },
          "start": 723,
          "end": 727
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 730,
            "end": 735
          },
          "start": 730,
          "end": 735
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 738,
            "end": 742
          },
          "start": 738,
          "end": 742
        },
        "start": 713,
        "end": 742
      },
      "declare": false,
      "start": 683,
      "end": 743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extends",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 756
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
              "start": 757,
              "end": 758
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 757,
            "end": 758
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 761
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 760,
            "end": 761
          }
        ],
        "start": 756,
        "end": 762
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 766
          },
          "typeArguments": null,
          "start": 765,
          "end": 766
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 776
          },
          "typeArguments": null,
          "start": 775,
          "end": 776
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 779,
            "end": 783
          },
          "start": 779,
          "end": 783
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 786,
            "end": 791
          },
          "start": 786,
          "end": 791
        },
        "start": 765,
        "end": 791
      },
      "declare": false,
      "start": 744,
      "end": 792
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsNumberLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 799,
        "end": 814
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
              "start": 815,
              "end": 816
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 815,
            "end": 816
          }
        ],
        "start": 814,
        "end": 817
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "And",
          "optional": false,
          "typeAnnotation": null,
          "start": 820,
          "end": 823
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extends",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 831
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
                      "start": 832,
                      "end": 833
                    },
                    "typeArguments": null,
                    "start": 832,
                    "end": 833
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 835,
                    "end": 841
                  }
                ],
                "start": 831,
                "end": 842
              },
              "start": 824,
              "end": 842
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Not",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 847
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extends",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 855
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 856,
                          "end": 862
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 864,
                            "end": 865
                          },
                          "typeArguments": null,
                          "start": 864,
                          "end": 865
                        }
                      ],
                      "start": 855,
                      "end": 866
                    },
                    "start": 848,
                    "end": 866
                  }
                ],
                "start": 847,
                "end": 867
              },
              "start": 844,
              "end": 867
            }
          ],
          "start": 823,
          "end": 868
        },
        "start": 820,
        "end": 868
      },
      "declare": false,
      "start": 794,
      "end": 869
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 885
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Or",
          "optional": false,
          "typeAnnotation": null,
          "start": 891,
          "end": 893
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 894,
                "end": 899
              },
              "start": 894,
              "end": 899
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNumberLiteral",
                "optional": false,
                "typeAnnotation": null,
                "start": 901,
                "end": 916
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
                      "start": 917,
                      "end": 918
                    },
                    "typeArguments": null,
                    "start": 917,
                    "end": 918
                  }
                ],
                "start": 916,
                "end": 919
              },
              "start": 901,
              "end": 919
            }
          ],
          "start": 893,
          "end": 920
        },
        "start": 891,
        "end": 920
      },
      "declare": false,
      "start": 871,
      "end": 921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 980
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 982
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 991,
              "end": 997
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 981,
            "end": 997
          }
        ],
        "start": 980,
        "end": 998
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1004
          },
          "typeArguments": null,
          "start": 1003,
          "end": 1004
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 1013,
            "end": 1016
          },
          "start": 1013,
          "end": 1018
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1027
            },
            "typeArguments": null,
            "start": 1026,
            "end": 1027
          },
          "indexType": {
            "type": "TSNumberKeyword",
            "start": 1028,
            "end": 1034
          },
          "start": 1026,
          "end": 1035
        },
        "falseType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1043
            },
            "typeArguments": null,
            "start": 1042,
            "end": 1043
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1051
              },
              "typeArguments": null,
              "start": 1050,
              "end": 1051
            },
            "start": 1044,
            "end": 1051
          },
          "start": 1042,
          "end": 1052
        },
        "start": 1003,
        "end": 1052
      },
      "declare": false,
      "start": 969,
      "end": 1052
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Equals",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1065
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
              "start": 1066,
              "end": 1067
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1066,
            "end": 1067
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1070
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1069,
            "end": 1070
          }
        ],
        "start": 1065,
        "end": 1071
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 1075,
                "end": 1076
              },
              "typeArguments": null,
              "start": 1075,
              "end": 1076
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1078,
                "end": 1079
              },
              "typeArguments": null,
              "start": 1078,
              "end": 1079
            }
          ],
          "start": 1074,
          "end": 1080
        },
        "extendsType": {
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
                "start": 1090,
                "end": 1091
              },
              "typeArguments": null,
              "start": 1090,
              "end": 1091
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1094
              },
              "typeArguments": null,
              "start": 1093,
              "end": 1094
            }
          ],
          "start": 1089,
          "end": 1095
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1098,
            "end": 1102
          },
          "start": 1098,
          "end": 1102
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1105,
            "end": 1110
          },
          "start": 1105,
          "end": 1110
        },
        "start": 1074,
        "end": 1110
      },
      "declare": false,
      "start": 1054,
      "end": 1111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterByStringValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1118,
        "end": 1137
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1139
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1148,
              "end": 1154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1138,
            "end": 1154
          }
        ],
        "start": 1137,
        "end": 1155
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1163,
          "end": 1164
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1174,
              "end": 1175
            },
            "typeArguments": null,
            "start": 1174,
            "end": 1175
          },
          "start": 1168,
          "end": 1175
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Equals",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1185
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1186,
                      "end": 1187
                    },
                    "typeArguments": null,
                    "start": 1186,
                    "end": 1187
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1188,
                      "end": 1189
                    },
                    "typeArguments": null,
                    "start": 1188,
                    "end": 1189
                  },
                  "start": 1186,
                  "end": 1190
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1192,
                  "end": 1198
                }
              ],
              "start": 1185,
              "end": 1199
            },
            "start": 1179,
            "end": 1199
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1208,
              "end": 1212
            },
            "start": 1208,
            "end": 1212
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1216
            },
            "typeArguments": null,
            "start": 1215,
            "end": 1216
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1219,
            "end": 1224
          },
          "start": 1179,
          "end": 1224
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1227,
          "end": 1230
        },
        "optional": false,
        "readonly": null,
        "start": 1158,
        "end": 1232
      },
      "declare": false,
      "start": 1113,
      "end": 1232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilteredValuesMatchNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 1239,
        "end": 1263
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1265
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1274,
              "end": 1280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1264,
            "end": 1280
          }
        ],
        "start": 1263,
        "end": 1281
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Equals",
          "optional": false,
          "typeAnnotation": null,
          "start": 1286,
          "end": 1292
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Values",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1299
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FilterByStringValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1300,
                      "end": 1319
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "O",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1321,
                                "end": 1322
                              },
                              "typeArguments": null,
                              "start": 1321,
                              "end": 1322
                            }
                          ],
                          "start": 1320,
                          "end": 1323
                        }
                      ],
                      "start": 1319,
                      "end": 1324
                    },
                    "start": 1300,
                    "end": 1324
                  }
                ],
                "start": 1299,
                "end": 1325
              },
              "start": 1293,
              "end": 1325
            },
            {
              "type": "TSNeverKeyword",
              "start": 1327,
              "end": 1332
            }
          ],
          "start": 1292,
          "end": 1333
        },
        "start": 1286,
        "end": 1333
      },
      "declare": false,
      "start": 1234,
      "end": 1333
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilteredRes1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1340,
        "end": 1352
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilteredValuesMatchNever",
          "optional": false,
          "typeAnnotation": null,
          "start": 1355,
          "end": 1379
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 1380,
              "end": 1382
            }
          ],
          "start": 1379,
          "end": 1383
        },
        "start": 1355,
        "end": 1383
      },
      "declare": false,
      "start": 1335,
      "end": 1383
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bit",
        "optional": false,
        "typeAnnotation": null,
        "start": 1412,
        "end": 1415
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1418,
              "end": 1419
            },
            "start": 1418,
            "end": 1419
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1422,
              "end": 1423
            },
            "start": 1422,
            "end": 1423
          }
        ],
        "start": 1418,
        "end": 1423
      },
      "declare": false,
      "start": 1407,
      "end": 1424
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AndBit",
        "optional": false,
        "typeAnnotation": null,
        "start": 1431,
        "end": 1437
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
              "start": 1438,
              "end": 1439
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null,
                "start": 1448,
                "end": 1451
              },
              "typeArguments": null,
              "start": 1448,
              "end": 1451
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1438,
            "end": 1451
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1453,
              "end": 1454
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null,
                "start": 1463,
                "end": 1466
              },
              "typeArguments": null,
              "start": 1463,
              "end": 1466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1453,
            "end": 1466
          }
        ],
        "start": 1437,
        "end": 1467
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 1471,
                "end": 1472
              },
              "typeArguments": null,
              "start": 1471,
              "end": 1472
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1474,
                "end": 1475
              },
              "typeArguments": null,
              "start": 1474,
              "end": 1475
            }
          ],
          "start": 1470,
          "end": 1476
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1486,
                "end": 1487
              },
              "start": 1486,
              "end": 1487
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1489,
                "end": 1490
              },
              "start": 1489,
              "end": 1490
            }
          ],
          "start": 1485,
          "end": 1491
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1494,
            "end": 1495
          },
          "start": 1494,
          "end": 1495
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1498,
            "end": 1499
          },
          "start": 1498,
          "end": 1499
        },
        "start": 1470,
        "end": 1499
      },
      "declare": false,
      "start": 1426,
      "end": 1500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestBit",
        "optional": false,
        "typeAnnotation": null,
        "start": 1507,
        "end": 1514
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
              "start": 1515,
              "end": 1516
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null,
                "start": 1525,
                "end": 1528
              },
              "typeArguments": null,
              "start": 1525,
              "end": 1528
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1515,
            "end": 1528
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1531
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null,
                "start": 1540,
                "end": 1543
              },
              "typeArguments": null,
              "start": 1540,
              "end": 1543
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1530,
            "end": 1543
          }
        ],
        "start": 1514,
        "end": 1544
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AndBit",
          "optional": false,
          "typeAnnotation": null,
          "start": 1547,
          "end": 1553
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1557,
                  "end": 1558
                },
                "typeArguments": null,
                "start": 1557,
                "end": 1558
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1567,
                  "end": 1568
                },
                "start": 1567,
                "end": 1568
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1571,
                  "end": 1572
                },
                "start": 1571,
                "end": 1572
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1575,
                  "end": 1576
                },
                "start": 1575,
                "end": 1576
              },
              "start": 1557,
              "end": 1576
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1580,
                  "end": 1581
                },
                "typeArguments": null,
                "start": 1580,
                "end": 1581
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1590,
                  "end": 1591
                },
                "start": 1590,
                "end": 1591
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1594,
                  "end": 1595
                },
                "start": 1594,
                "end": 1595
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1598,
                  "end": 1599
                },
                "start": 1598,
                "end": 1599
              },
              "start": 1580,
              "end": 1599
            }
          ],
          "start": 1553,
          "end": 1601
        },
        "start": 1547,
        "end": 1601
      },
      "declare": false,
      "start": 1502,
      "end": 1602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestBitRes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1609,
        "end": 1619
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestBit",
          "optional": false,
          "typeAnnotation": null,
          "start": 1622,
          "end": 1629
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1630,
                "end": 1631
              },
              "start": 1630,
              "end": 1631
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1633,
                "end": 1634
              },
              "start": 1633,
              "end": 1634
            }
          ],
          "start": 1629,
          "end": 1635
        },
        "start": 1622,
        "end": 1635
      },
      "declare": false,
      "start": 1604,
      "end": 1636
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1637
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
    "value": "<",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 53,
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
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 106,
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
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 118,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 152,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "A",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 215,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "A",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 255,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 265,
    "end": 266
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 288,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "T",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Numeric",
    "value": "0",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 323,
    "end": 324
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "type",
    "start": 338,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 364,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 392,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "T6",
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
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 434,
    "end": 435
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 496,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "Or",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 506,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 514,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 525,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 533,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 551,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 567,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 574,
    "end": 575
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 590,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 601,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 609,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 620,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 646,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 654,
    "end": 655
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 667,
    "end": 668
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 683,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "Not",
    "start": 688,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 694,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 702,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 715,
    "end": 722
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 728,
    "end": 729
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 730,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 744,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Extends",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 767,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 777,
    "end": 778
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 779,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 786,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 794,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "IsNumberLiteral",
    "start": 799,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "Extends",
    "start": 824,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 835,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "Not",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "Extends",
    "start": 848,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 856,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 871,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "IsLiteral",
    "start": 876,
    "end": 885
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
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "Or",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 893,
    "end": 894
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 894,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "IsNumberLiteral",
    "start": 901,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 969,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 983,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 991,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1005,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1013,
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
    "value": "?",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1044,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1054,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 1059,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1081,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1098,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1105,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1113,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "FilterByStringValue",
    "start": 1118,
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
    "value": "O",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1140,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1148,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1165,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1168,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1189,
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
    "value": "string",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1200,
    "end": 1207
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1208,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1219,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "}",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1234,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "FilteredValuesMatchNever",
    "start": 1239,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1266,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1274,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "FilterByStringValue",
    "start": 1300,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1327,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "FilteredRes1",
    "start": 1340,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "FilteredValuesMatchNever",
    "start": 1355,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "Bit",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1426,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "AndBit",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1440,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "Bit",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1455,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "Bit",
    "start": 1463,
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
    "value": "=",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ",",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1477,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1502,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "TestBit",
    "start": 1507,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1517,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "Bit",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1532,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "Bit",
    "start": 1540,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "AndBit",
    "start": 1547,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1559,
    "end": 1566
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1582,
    "end": 1589
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1604,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "TestBitRes",
    "start": 1609,
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
    "value": "TestBit",
    "start": 1622,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  }
]
```

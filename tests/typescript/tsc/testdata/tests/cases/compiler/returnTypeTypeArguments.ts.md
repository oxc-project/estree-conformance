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
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 23
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
                  "start": 25,
                  "end": 26
                },
                "typeArguments": null,
                "start": 25,
                "end": 26
              },
              "start": 23,
              "end": 26
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
            "start": 18,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 39
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
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 41
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 43,
            "end": 44
          }
        ],
        "start": 39,
        "end": 45
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 56
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
                  "start": 58,
                  "end": 59
                },
                "typeArguments": null,
                "start": 58,
                "end": 59
              },
              "start": 56,
              "end": 59
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
            "start": 51,
            "end": 60
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 67
            },
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
                  "start": 69,
                  "end": 70
                },
                "typeArguments": null,
                "start": 69,
                "end": 70
              },
              "start": 67,
              "end": 70
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
            "start": 65,
            "end": 71
          }
        ],
        "start": 45,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 73
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 85
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
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 89,
            "end": 90
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 85,
        "end": 94
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
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
                  "start": 107,
                  "end": 108
                },
                "typeArguments": null,
                "start": 107,
                "end": 108
              },
              "start": 105,
              "end": 108
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
            "start": 100,
            "end": 109
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 116
            },
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
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              "start": 116,
              "end": 119
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
            "start": 114,
            "end": 120
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 129
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
                  "start": 131,
                  "end": 132
                },
                "typeArguments": null,
                "start": 131,
                "end": 132
              },
              "start": 129,
              "end": 132
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
            "start": 125,
            "end": 133
          }
        ],
        "start": 94,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 74,
      "end": 135
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "One",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 155
          },
          "typeArguments": null,
          "start": 152,
          "end": 155
        },
        "start": 150,
        "end": 155
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
              "start": 165,
              "end": 169
            },
            "start": 158,
            "end": 170
          }
        ],
        "start": 156,
        "end": 172
      },
      "expression": false,
      "start": 137,
      "end": 172
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Two",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "typeArguments": null,
          "start": 188,
          "end": 191
        },
        "start": 186,
        "end": 191
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
              "start": 201,
              "end": 205
            },
            "start": 194,
            "end": 206
          }
        ],
        "start": 192,
        "end": 208
      },
      "expression": false,
      "start": 173,
      "end": 208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 220
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Three",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 229
          },
          "typeArguments": null,
          "start": 224,
          "end": 229
        },
        "start": 222,
        "end": 229
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
              "start": 239,
              "end": 243
            },
            "start": 232,
            "end": 244
          }
        ],
        "start": 230,
        "end": 246
      },
      "expression": false,
      "start": 209,
      "end": 246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 259
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Two",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 266
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 267,
                "end": 273
              }
            ],
            "start": 266,
            "end": 274
          },
          "start": 263,
          "end": 274
        },
        "start": 261,
        "end": 274
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
              "start": 284,
              "end": 288
            },
            "start": 277,
            "end": 289
          }
        ],
        "start": 275,
        "end": 291
      },
      "expression": false,
      "start": 248,
      "end": 291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 303
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Three",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 312
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 313,
                "end": 319
              }
            ],
            "start": 312,
            "end": 320
          },
          "start": 307,
          "end": 320
        },
        "start": 305,
        "end": 320
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
              "start": 330,
              "end": 334
            },
            "start": 323,
            "end": 335
          }
        ],
        "start": 321,
        "end": 337
      },
      "expression": false,
      "start": 292,
      "end": 337
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 349
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Three",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 358
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 359,
                "end": 365
              },
              {
                "type": "TSNumberKeyword",
                "start": 367,
                "end": 373
              }
            ],
            "start": 358,
            "end": 374
          },
          "start": 353,
          "end": 374
        },
        "start": 351,
        "end": 374
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
              "start": 384,
              "end": 388
            },
            "start": 377,
            "end": 389
          }
        ],
        "start": 375,
        "end": 391
      },
      "expression": false,
      "start": 338,
      "end": 391
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
        "start": 399,
        "end": 400
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
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 409
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "One",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 413,
                  "end": 416
                },
                "start": 411,
                "end": 416
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
                      "start": 426,
                      "end": 430
                    },
                    "start": 419,
                    "end": 431
                  }
                ],
                "start": 417,
                "end": 433
              },
              "expression": false,
              "start": 409,
              "end": 433
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 407,
            "end": 433
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 440
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 447
                  },
                  "typeArguments": null,
                  "start": 444,
                  "end": 447
                },
                "start": 442,
                "end": 447
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
                      "start": 457,
                      "end": 461
                    },
                    "start": 450,
                    "end": 462
                  }
                ],
                "start": 448,
                "end": 464
              },
              "expression": false,
              "start": 440,
              "end": 464
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 438,
            "end": 464
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 471
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Three",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 480
                  },
                  "typeArguments": null,
                  "start": 475,
                  "end": 480
                },
                "start": 473,
                "end": 480
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
                      "start": 490,
                      "end": 494
                    },
                    "start": 483,
                    "end": 495
                  }
                ],
                "start": 481,
                "end": 497
              },
              "expression": false,
              "start": 471,
              "end": 497
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 469,
            "end": 497
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B1",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 505
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 512
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 513,
                        "end": 519
                      }
                    ],
                    "start": 512,
                    "end": 520
                  },
                  "start": 509,
                  "end": 520
                },
                "start": 507,
                "end": 520
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
                      "start": 530,
                      "end": 534
                    },
                    "start": 523,
                    "end": 535
                  }
                ],
                "start": 521,
                "end": 537
              },
              "expression": false,
              "start": 505,
              "end": 537
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 503,
            "end": 537
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 544
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Three",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 553
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 554,
                        "end": 560
                      }
                    ],
                    "start": 553,
                    "end": 561
                  },
                  "start": 548,
                  "end": 561
                },
                "start": 546,
                "end": 561
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
                      "start": 571,
                      "end": 575
                    },
                    "start": 564,
                    "end": 576
                  }
                ],
                "start": 562,
                "end": 578
              },
              "expression": false,
              "start": 544,
              "end": 578
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 542,
            "end": 578
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 585
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Three",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 589,
                    "end": 594
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 595,
                        "end": 601
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 603,
                        "end": 609
                      }
                    ],
                    "start": 594,
                    "end": 610
                  },
                  "start": 589,
                  "end": 610
                },
                "start": 587,
                "end": 610
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
                      "start": 620,
                      "end": 624
                    },
                    "start": 613,
                    "end": 625
                  }
                ],
                "start": 611,
                "end": 627
              },
              "expression": false,
              "start": 585,
              "end": 627
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 583,
            "end": 627
          }
        ],
        "start": 401,
        "end": 629
      },
      "abstract": false,
      "declare": false,
      "start": 393,
      "end": 629
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 638
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
              "start": 639,
              "end": 640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 639,
            "end": 640
          }
        ],
        "start": 638,
        "end": 641
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
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 650
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 657
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
                          "start": 658,
                          "end": 659
                        },
                        "typeArguments": null,
                        "start": 658,
                        "end": 659
                      }
                    ],
                    "start": 657,
                    "end": 660
                  },
                  "start": 654,
                  "end": 660
                },
                "start": 652,
                "end": 660
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
                      "start": 670,
                      "end": 674
                    },
                    "start": 663,
                    "end": 675
                  }
                ],
                "start": 661,
                "end": 677
              },
              "expression": false,
              "start": 650,
              "end": 677
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 648,
            "end": 677
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 684
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Three",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 693
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
                          "start": 694,
                          "end": 695
                        },
                        "typeArguments": null,
                        "start": 694,
                        "end": 695
                      }
                    ],
                    "start": 693,
                    "end": 696
                  },
                  "start": 688,
                  "end": 696
                },
                "start": 686,
                "end": 696
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
                      "start": 706,
                      "end": 710
                    },
                    "start": 699,
                    "end": 711
                  }
                ],
                "start": 697,
                "end": 713
              },
              "expression": false,
              "start": 684,
              "end": 713
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 682,
            "end": 713
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B1",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 721
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 728
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
                          "start": 729,
                          "end": 730
                        },
                        "typeArguments": null,
                        "start": 729,
                        "end": 730
                      }
                    ],
                    "start": 728,
                    "end": 731
                  },
                  "start": 725,
                  "end": 731
                },
                "start": 723,
                "end": 731
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
                      "start": 741,
                      "end": 745
                    },
                    "start": 734,
                    "end": 746
                  }
                ],
                "start": 732,
                "end": 748
              },
              "expression": false,
              "start": 721,
              "end": 748
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 719,
            "end": 748
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 753,
              "end": 755
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Three",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 764
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
                          "start": 765,
                          "end": 766
                        },
                        "typeArguments": null,
                        "start": 765,
                        "end": 766
                      }
                    ],
                    "start": 764,
                    "end": 767
                  },
                  "start": 759,
                  "end": 767
                },
                "start": 757,
                "end": 767
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
                      "start": 777,
                      "end": 781
                    },
                    "start": 770,
                    "end": 782
                  }
                ],
                "start": 768,
                "end": 784
              },
              "expression": false,
              "start": 755,
              "end": 784
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 753,
            "end": 784
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 791
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Three",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 800
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 801,
                        "end": 807
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 809,
                          "end": 810
                        },
                        "typeArguments": null,
                        "start": 809,
                        "end": 810
                      }
                    ],
                    "start": 800,
                    "end": 811
                  },
                  "start": 795,
                  "end": 811
                },
                "start": 793,
                "end": 811
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
                      "start": 821,
                      "end": 825
                    },
                    "start": 814,
                    "end": 826
                  }
                ],
                "start": 812,
                "end": 828
              },
              "expression": false,
              "start": 791,
              "end": 828
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 789,
            "end": 828
          }
        ],
        "start": 642,
        "end": 830
      },
      "abstract": false,
      "declare": false,
      "start": 631,
      "end": 830
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 843
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
              "start": 844,
              "end": 845
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 844,
            "end": 845
          }
        ],
        "start": 843,
        "end": 846
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 858
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
                  "start": 860,
                  "end": 861
                },
                "typeArguments": null,
                "start": 860,
                "end": 861
              },
              "start": 858,
              "end": 861
            },
            "accessibility": null,
            "static": false,
            "start": 853,
            "end": 862
          }
        ],
        "start": 847,
        "end": 864
      },
      "declare": false,
      "start": 832,
      "end": 864
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 873
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
              "start": 874,
              "end": 875
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 874,
            "end": 875
          }
        ],
        "start": 873,
        "end": 876
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 888
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
                  "start": 890,
                  "end": 891
                },
                "typeArguments": null,
                "start": 890,
                "end": 891
              },
              "start": 888,
              "end": 891
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
            "start": 883,
            "end": 892
          }
        ],
        "start": 877,
        "end": 894
      },
      "abstract": false,
      "declare": false,
      "start": 866,
      "end": 894
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 903
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
              "start": 904,
              "end": 905
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 904,
            "end": 905
          }
        ],
        "start": 903,
        "end": 906
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 915
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
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
                      "start": 923,
                      "end": 924
                    },
                    "typeArguments": null,
                    "start": 923,
                    "end": 924
                  },
                  "start": 920,
                  "end": 924
                },
                "start": 917,
                "end": 924
              },
              "start": 915,
              "end": 924
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
            "start": 913,
            "end": 925
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 942,
                            "end": 948
                          },
                          "start": 940,
                          "end": 948
                        },
                        "start": 937,
                        "end": 948
                      }
                    ],
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
                          "start": 951,
                          "end": 952
                        },
                        "typeArguments": null,
                        "start": 951,
                        "end": 952
                      },
                      "start": 949,
                      "end": 952
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 936,
                    "end": 952
                  }
                ],
                "start": 934,
                "end": 954
              },
              "start": 932,
              "end": 954
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
            "start": 930,
            "end": 954
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 961
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 963,
                    "end": 964
                  },
                  "typeArguments": null,
                  "start": 963,
                  "end": 964
                },
                "start": 963,
                "end": 966
              },
              "start": 961,
              "end": 966
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
            "start": 959,
            "end": 966
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p4",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 973
            },
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
                  "start": 975,
                  "end": 976
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
                        "start": 977,
                        "end": 978
                      },
                      "typeArguments": null,
                      "start": 977,
                      "end": 978
                    }
                  ],
                  "start": 976,
                  "end": 979
                },
                "start": 975,
                "end": 979
              },
              "start": 973,
              "end": 979
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
            "start": 971,
            "end": 979
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p5",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 986
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
                  "start": 988,
                  "end": 989
                },
                "typeArguments": null,
                "start": 988,
                "end": 989
              },
              "start": 986,
              "end": 989
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
            "start": 984,
            "end": 989
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p6",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 996
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
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
                      "start": 1004,
                      "end": 1005
                    },
                    "typeArguments": null,
                    "start": 1004,
                    "end": 1005
                  },
                  "start": 1001,
                  "end": 1005
                },
                "start": 998,
                "end": 1005
              },
              "start": 996,
              "end": 1005
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
            "start": 994,
            "end": 1006
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1013
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1023,
                            "end": 1029
                          },
                          "start": 1021,
                          "end": 1029
                        },
                        "start": 1018,
                        "end": 1029
                      }
                    ],
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
                          "start": 1032,
                          "end": 1033
                        },
                        "typeArguments": null,
                        "start": 1032,
                        "end": 1033
                      },
                      "start": 1030,
                      "end": 1033
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1017,
                    "end": 1033
                  }
                ],
                "start": 1015,
                "end": 1035
              },
              "start": 1013,
              "end": 1035
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
            "start": 1011,
            "end": 1035
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1040,
              "end": 1042
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
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1045
                  },
                  "typeArguments": null,
                  "start": 1044,
                  "end": 1045
                },
                "start": 1044,
                "end": 1047
              },
              "start": 1042,
              "end": 1047
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
            "start": 1040,
            "end": 1047
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1054
            },
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
                  "start": 1056,
                  "end": 1057
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
                        "start": 1058,
                        "end": 1059
                      },
                      "typeArguments": null,
                      "start": 1058,
                      "end": 1059
                    }
                  ],
                  "start": 1057,
                  "end": 1060
                },
                "start": 1056,
                "end": 1060
              },
              "start": 1054,
              "end": 1060
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
            "start": 1052,
            "end": 1060
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pa",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1067
            },
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
                  "start": 1069,
                  "end": 1070
                },
                "typeArguments": null,
                "start": 1069,
                "end": 1070
              },
              "start": 1067,
              "end": 1070
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
            "start": 1065,
            "end": 1070
          }
        ],
        "start": 907,
        "end": 1072
      },
      "abstract": false,
      "declare": false,
      "start": 896,
      "end": 1072
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
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1095,
                      "end": 1097
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
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
                              "start": 1105,
                              "end": 1106
                            },
                            "typeArguments": null,
                            "start": 1105,
                            "end": 1106
                          },
                          "start": 1102,
                          "end": 1106
                        },
                        "start": 1099,
                        "end": 1106
                      },
                      "start": 1097,
                      "end": 1106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1095,
                    "end": 1107
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1112,
                      "end": 1114
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1124,
                                    "end": 1130
                                  },
                                  "start": 1122,
                                  "end": 1130
                                },
                                "start": 1119,
                                "end": 1130
                              }
                            ],
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
                                  "start": 1133,
                                  "end": 1134
                                },
                                "typeArguments": null,
                                "start": 1133,
                                "end": 1134
                              },
                              "start": 1131,
                              "end": 1134
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 1118,
                            "end": 1134
                          }
                        ],
                        "start": 1116,
                        "end": 1136
                      },
                      "start": 1114,
                      "end": 1136
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1112,
                    "end": 1136
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1143
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
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1145,
                            "end": 1146
                          },
                          "typeArguments": null,
                          "start": 1145,
                          "end": 1146
                        },
                        "start": 1145,
                        "end": 1148
                      },
                      "start": 1143,
                      "end": 1148
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1141,
                    "end": 1148
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1155
                    },
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
                          "start": 1157,
                          "end": 1158
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
                                "start": 1159,
                                "end": 1160
                              },
                              "typeArguments": null,
                              "start": 1159,
                              "end": 1160
                            }
                          ],
                          "start": 1158,
                          "end": 1161
                        },
                        "start": 1157,
                        "end": 1161
                      },
                      "start": 1155,
                      "end": 1161
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1153,
                    "end": 1161
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1166,
                      "end": 1168
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
                          "start": 1170,
                          "end": 1171
                        },
                        "typeArguments": null,
                        "start": 1170,
                        "end": 1171
                      },
                      "start": 1168,
                      "end": 1171
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1166,
                    "end": 1171
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1176,
                      "end": 1178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
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
                              "start": 1186,
                              "end": 1187
                            },
                            "typeArguments": null,
                            "start": 1186,
                            "end": 1187
                          },
                          "start": 1183,
                          "end": 1187
                        },
                        "start": 1180,
                        "end": 1187
                      },
                      "start": 1178,
                      "end": 1187
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1176,
                    "end": 1188
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1193,
                      "end": 1195
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1205,
                                    "end": 1211
                                  },
                                  "start": 1203,
                                  "end": 1211
                                },
                                "start": 1200,
                                "end": 1211
                              }
                            ],
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
                                  "start": 1214,
                                  "end": 1215
                                },
                                "typeArguments": null,
                                "start": 1214,
                                "end": 1215
                              },
                              "start": 1212,
                              "end": 1215
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 1199,
                            "end": 1215
                          }
                        ],
                        "start": 1197,
                        "end": 1217
                      },
                      "start": 1195,
                      "end": 1217
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1193,
                    "end": 1217
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1222,
                      "end": 1224
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
                            "name": "Y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1226,
                            "end": 1227
                          },
                          "typeArguments": null,
                          "start": 1226,
                          "end": 1227
                        },
                        "start": 1226,
                        "end": 1229
                      },
                      "start": 1224,
                      "end": 1229
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1222,
                    "end": 1229
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p9",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1234,
                      "end": 1236
                    },
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
                          "start": 1238,
                          "end": 1239
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
                                "start": 1240,
                                "end": 1241
                              },
                              "typeArguments": null,
                              "start": 1240,
                              "end": 1241
                            }
                          ],
                          "start": 1239,
                          "end": 1242
                        },
                        "start": 1238,
                        "end": 1242
                      },
                      "start": 1236,
                      "end": 1242
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1234,
                    "end": 1242
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pa",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1247,
                      "end": 1249
                    },
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
                          "start": 1251,
                          "end": 1252
                        },
                        "typeArguments": null,
                        "start": 1251,
                        "end": 1252
                      },
                      "start": 1249,
                      "end": 1252
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1247,
                    "end": 1252
                  }
                ],
                "start": 1089,
                "end": 1254
              },
              "start": 1087,
              "end": 1254
            },
            "start": 1086,
            "end": 1254
          },
          "init": null,
          "definite": false,
          "start": 1086,
          "end": 1254
        }
      ],
      "declare": true,
      "start": 1074,
      "end": 1255
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1255
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 137,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 158,
    "end": 164
  },
  {
    "type": "Null",
    "value": "null",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 173,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 194,
    "end": 200
  },
  {
    "type": "Null",
    "value": "null",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 209,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 232,
    "end": 238
  },
  {
    "type": "Null",
    "value": "null",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 248,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "Two",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 277,
    "end": 283
  },
  {
    "type": "Null",
    "value": "null",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 292,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 313,
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
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 323,
    "end": 329
  },
  {
    "type": "Null",
    "value": "null",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 338,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 353,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 367,
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
    "type": "Null",
    "value": "null",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 393,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "One",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 419,
    "end": 425
  },
  {
    "type": "Null",
    "value": "null",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "A2",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 450,
    "end": 456
  },
  {
    "type": "Null",
    "value": "null",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 483,
    "end": 489
  },
  {
    "type": "Null",
    "value": "null",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 509,
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
    "value": "number",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 523,
    "end": 529
  },
  {
    "type": "Null",
    "value": "null",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 548,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 564,
    "end": 570
  },
  {
    "type": "Null",
    "value": "null",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
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
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 613,
    "end": 619
  },
  {
    "type": "Null",
    "value": "null",
    "start": 620,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 631,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 663,
    "end": 669
  },
  {
    "type": "Null",
    "value": "null",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 682,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
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
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 688,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 699,
    "end": 705
  },
  {
    "type": "Null",
    "value": "null",
    "start": 706,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "B1",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 734,
    "end": 740
  },
  {
    "type": "Null",
    "value": "null",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 759,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 770,
    "end": 776
  },
  {
    "type": "Null",
    "value": "null",
    "start": 777,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
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
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 814,
    "end": 820
  },
  {
    "type": "Null",
    "value": "null",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 832,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 866,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 883,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 896,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 920,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 930,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 937,
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
    "value": "number",
    "start": 942,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "type": "Identifier",
    "value": "p3",
    "start": 959,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 971,
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
    "value": "I",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 984,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "Y",
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
    "type": "Identifier",
    "value": "p7",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 1052,
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
    "value": "I",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "pa",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1074,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1095,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1102,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1119,
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
    "value": "number",
    "start": 1124,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "type": "Identifier",
    "value": "p3",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 1166,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1200,
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
    "value": "number",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 1234,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "pa",
    "start": 1247,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  }
]
```

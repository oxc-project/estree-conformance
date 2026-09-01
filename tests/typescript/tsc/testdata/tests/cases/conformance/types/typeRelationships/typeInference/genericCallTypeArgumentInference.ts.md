__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
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
                "start": 83,
                "end": 84
              },
              "typeArguments": null,
              "start": 83,
              "end": 84
            },
            "start": 81,
            "end": 84
          },
          "start": 80,
          "end": 84
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "start": 92,
            "end": 101
          }
        ],
        "start": 86,
        "end": 103
      },
      "expression": false,
      "start": 64,
      "end": 103
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 117,
                "end": 119
              }
            ],
            "optional": false,
            "start": 113,
            "end": 120
          },
          "definite": false,
          "start": 109,
          "end": 120
        }
      ],
      "declare": false,
      "start": 105,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
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
              "start": 147,
              "end": 148
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 148
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          }
        ],
        "start": 146,
        "end": 152
      },
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
                "start": 156,
                "end": 157
              },
              "typeArguments": null,
              "start": 156,
              "end": 157
            },
            "start": 154,
            "end": 157
          },
          "start": 153,
          "end": 157
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
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "start": 159,
          "end": 163
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
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "start": 171,
            "end": 180
          }
        ],
        "start": 165,
        "end": 182
      },
      "expression": false,
      "start": 133,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 198
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
              "start": 199,
              "end": 200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 199,
            "end": 200
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 202,
            "end": 203
          }
        ],
        "start": 198,
        "end": 204
      },
      "params": [
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
                "start": 208,
                "end": 209
              },
              "typeArguments": null,
              "start": 208,
              "end": 209
            },
            "start": 206,
            "end": 209
          },
          "start": 205,
          "end": 209
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "start": 224,
                        "end": 225
                      },
                      "typeArguments": null,
                      "start": 224,
                      "end": 225
                    },
                    "start": 222,
                    "end": 225
                  },
                  "start": 221,
                  "end": 225
                },
                "init": null,
                "definite": false,
                "start": 221,
                "end": 225
              }
            ],
            "declare": false,
            "start": 217,
            "end": 226
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "start": 231,
            "end": 240
          }
        ],
        "start": 211,
        "end": 242
      },
      "expression": false,
      "start": 184,
      "end": 242
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 250
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 257
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 258,
                "end": 260
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 262,
                "end": 263
              }
            ],
            "optional": false,
            "start": 253,
            "end": 264
          },
          "definite": false,
          "start": 248,
          "end": 264
        }
      ],
      "declare": false,
      "start": 244,
      "end": 265
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2b",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 291,
                "end": 292
              }
            ],
            "optional": false,
            "start": 285,
            "end": 293
          },
          "definite": false,
          "start": 280,
          "end": 293
        }
      ],
      "declare": false,
      "start": 276,
      "end": 294
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
        "start": 308,
        "end": 309
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
              "start": 310,
              "end": 311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 311
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 314
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 314
          }
        ],
        "start": 309,
        "end": 315
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
              "start": 322,
              "end": 333
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                  },
                  "readonly": false,
                  "static": false,
                  "start": 334,
                  "end": 345
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "start": 357,
                          "end": 358
                        },
                        "typeArguments": null,
                        "start": 357,
                        "end": 358
                      },
                      "start": 355,
                      "end": 358
                    },
                    "start": 354,
                    "end": 358
                  },
                  "readonly": false,
                  "static": false,
                  "start": 347,
                  "end": 358
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 360,
                "end": 367
              },
              "expression": false,
              "start": 333,
              "end": 367
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 322,
            "end": 367
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 376
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
                        "start": 386,
                        "end": 387
                      },
                      "typeArguments": null,
                      "start": 386,
                      "end": 387
                    },
                    "start": 384,
                    "end": 387
                  },
                  "start": 383,
                  "end": 387
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
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 407
                    },
                    "start": 399,
                    "end": 408
                  }
                ],
                "start": 389,
                "end": 414
              },
              "expression": false,
              "start": 376,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 373,
            "end": 414
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 424
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
                        "start": 428,
                        "end": 429
                      },
                      "typeArguments": null,
                      "start": 428,
                      "end": 429
                    },
                    "start": 426,
                    "end": 429
                  },
                  "start": 425,
                  "end": 429
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
                        "start": 434,
                        "end": 435
                      },
                      "typeArguments": null,
                      "start": 434,
                      "end": 435
                    },
                    "start": 432,
                    "end": 435
                  },
                  "start": 431,
                  "end": 435
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
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 455
                    },
                    "start": 447,
                    "end": 456
                  }
                ],
                "start": 437,
                "end": 462
              },
              "expression": false,
              "start": 424,
              "end": 462
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 420,
            "end": 462
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 472
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
                      "start": 473,
                      "end": 474
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 473,
                    "end": 474
                  }
                ],
                "start": 472,
                "end": 475
              },
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
                        "start": 479,
                        "end": 480
                      },
                      "typeArguments": null,
                      "start": 479,
                      "end": 480
                    },
                    "start": 477,
                    "end": 480
                  },
                  "start": 476,
                  "end": 480
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
                        "start": 485,
                        "end": 486
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 486
                    },
                    "start": 483,
                    "end": 486
                  },
                  "start": 482,
                  "end": 486
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
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 505,
                      "end": 506
                    },
                    "start": 498,
                    "end": 507
                  }
                ],
                "start": 488,
                "end": 513
              },
              "expression": false,
              "start": 472,
              "end": 513
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 468,
            "end": 513
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 523
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 524,
                    "end": 525
                  }
                ],
                "start": 523,
                "end": 526
              },
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
                        "start": 530,
                        "end": 531
                      },
                      "typeArguments": null,
                      "start": 530,
                      "end": 531
                    },
                    "start": 528,
                    "end": 531
                  },
                  "start": 527,
                  "end": 531
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
                        "start": 536,
                        "end": 537
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 537
                    },
                    "start": 534,
                    "end": 537
                  },
                  "start": 533,
                  "end": 537
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
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 556,
                      "end": 557
                    },
                    "start": 549,
                    "end": 558
                  }
                ],
                "start": 539,
                "end": 564
              },
              "expression": false,
              "start": 523,
              "end": 564
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 519,
            "end": 564
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 574
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
                      "start": 575,
                      "end": 576
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 575,
                    "end": 576
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 578
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 577,
                    "end": 578
                  }
                ],
                "start": 574,
                "end": 579
              },
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
                        "start": 583,
                        "end": 584
                      },
                      "typeArguments": null,
                      "start": 583,
                      "end": 584
                    },
                    "start": 581,
                    "end": 584
                  },
                  "start": 580,
                  "end": 584
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
                        "start": 589,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 590
                    },
                    "start": 587,
                    "end": 590
                  },
                  "start": 586,
                  "end": 590
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
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 609,
                      "end": 610
                    },
                    "start": 602,
                    "end": 611
                  }
                ],
                "start": 592,
                "end": 617
              },
              "expression": false,
              "start": 574,
              "end": 617
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 570,
            "end": 617
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 627
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
                      "start": 628,
                      "end": 629
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 628,
                    "end": 629
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 632
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 631,
                    "end": 632
                  }
                ],
                "start": 627,
                "end": 633
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                                "start": 653,
                                "end": 654
                              },
                              "typeArguments": null,
                              "start": 653,
                              "end": 654
                            },
                            "start": 651,
                            "end": 654
                          },
                          "start": 650,
                          "end": 654
                        },
                        "init": null,
                        "definite": false,
                        "start": 650,
                        "end": 654
                      }
                    ],
                    "declare": false,
                    "start": 646,
                    "end": 655
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "start": 664,
                    "end": 673
                  }
                ],
                "start": 636,
                "end": 679
              },
              "expression": false,
              "start": 627,
              "end": 679
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 623,
            "end": 679
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 689
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
                      "start": 690,
                      "end": 691
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 690,
                    "end": 691
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 694
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 693,
                    "end": 694
                  }
                ],
                "start": 689,
                "end": 695
              },
              "params": [
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
                        "start": 699,
                        "end": 700
                      },
                      "typeArguments": null,
                      "start": 699,
                      "end": 700
                    },
                    "start": 697,
                    "end": 700
                  },
                  "start": 696,
                  "end": 700
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                                "start": 719,
                                "end": 720
                              },
                              "typeArguments": null,
                              "start": 719,
                              "end": 720
                            },
                            "start": 717,
                            "end": 720
                          },
                          "start": 716,
                          "end": 720
                        },
                        "init": null,
                        "definite": false,
                        "start": 716,
                        "end": 720
                      }
                    ],
                    "declare": false,
                    "start": 712,
                    "end": 721
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 738
                    },
                    "start": 730,
                    "end": 739
                  }
                ],
                "start": 702,
                "end": 745
              },
              "expression": false,
              "start": 689,
              "end": 745
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 685,
            "end": 745
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 755
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
                      "start": 756,
                      "end": 757
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 756,
                    "end": 757
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 760
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 759,
                    "end": 760
                  }
                ],
                "start": 755,
                "end": 761
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                                "start": 781,
                                "end": 782
                              },
                              "typeArguments": null,
                              "start": 781,
                              "end": 782
                            },
                            "start": 779,
                            "end": 782
                          },
                          "start": 778,
                          "end": 782
                        },
                        "init": null,
                        "definite": false,
                        "start": 778,
                        "end": 782
                      }
                    ],
                    "declare": false,
                    "start": 774,
                    "end": 783
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 799,
                      "end": 800
                    },
                    "start": 792,
                    "end": 801
                  }
                ],
                "start": 764,
                "end": 807
              },
              "expression": false,
              "start": 755,
              "end": 807
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 751,
            "end": 807
          }
        ],
        "start": 316,
        "end": 809
      },
      "abstract": false,
      "declare": false,
      "start": 302,
      "end": 809
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 816
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 824
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 825,
                "end": 827
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 829,
                "end": 830
              }
            ],
            "start": 819,
            "end": 831
          },
          "definite": false,
          "start": 815,
          "end": 831
        }
      ],
      "declare": false,
      "start": 811,
      "end": 832
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 843
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 847
              },
              "optional": false,
              "computed": false,
              "start": 842,
              "end": 847
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 848,
                "end": 850
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 852,
                "end": 853
              }
            ],
            "optional": false,
            "start": 842,
            "end": 854
          },
          "definite": false,
          "start": 837,
          "end": 854
        }
      ],
      "declare": false,
      "start": 833,
      "end": 855
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 872
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 876
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 881
              },
              "optional": false,
              "computed": false,
              "start": 875,
              "end": 881
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 882,
                "end": 884
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 886,
                "end": 887
              }
            ],
            "optional": false,
            "start": 875,
            "end": 888
          },
          "definite": false,
          "start": 870,
          "end": 888
        }
      ],
      "declare": false,
      "start": 866,
      "end": 889
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 906
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 909,
                "end": 910
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 915
              },
              "optional": false,
              "computed": false,
              "start": 909,
              "end": 915
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 916,
                "end": 920
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 922,
                "end": 923
              }
            ],
            "optional": false,
            "start": 909,
            "end": 924
          },
          "definite": false,
          "start": 904,
          "end": 924
        }
      ],
      "declare": false,
      "start": 900,
      "end": 925
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 943
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 952
              },
              "optional": false,
              "computed": false,
              "start": 946,
              "end": 952
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 953,
                "end": 955
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 957,
                "end": 961
              }
            ],
            "optional": false,
            "start": 946,
            "end": 962
          },
          "definite": false,
          "start": 941,
          "end": 962
        }
      ],
      "declare": false,
      "start": 937,
      "end": 963
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 978,
            "end": 980
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 984
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 989
              },
              "optional": false,
              "computed": false,
              "start": 983,
              "end": 989
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 990,
                "end": 994
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 996,
                "end": 997
              }
            ],
            "optional": false,
            "start": 983,
            "end": 998
          },
          "definite": false,
          "start": 978,
          "end": 998
        }
      ],
      "declare": false,
      "start": 974,
      "end": 999
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1015,
            "end": 1017
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1020,
                "end": 1021
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1026
              },
              "optional": false,
              "computed": false,
              "start": 1020,
              "end": 1026
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1020,
            "end": 1028
          },
          "definite": false,
          "start": 1015,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1029
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1040,
            "end": 1043
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1052
              },
              "optional": false,
              "computed": false,
              "start": 1046,
              "end": 1052
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1053,
                "end": 1055
              }
            ],
            "optional": false,
            "start": 1046,
            "end": 1056
          },
          "definite": false,
          "start": 1040,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 1036,
      "end": 1057
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1068,
            "end": 1071
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1074,
                "end": 1075
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1080
              },
              "optional": false,
              "computed": false,
              "start": 1074,
              "end": 1080
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1074,
            "end": 1082
          },
          "definite": false,
          "start": 1068,
          "end": 1082
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1083
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1101,
        "end": 1102
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
              "start": 1103,
              "end": 1104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1103,
            "end": 1104
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1106,
            "end": 1107
          }
        ],
        "start": 1102,
        "end": 1108
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
                      "start": 1123,
                      "end": 1124
                    },
                    "typeArguments": null,
                    "start": 1123,
                    "end": 1124
                  },
                  "start": 1121,
                  "end": 1124
                },
                "start": 1120,
                "end": 1124
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
                      "start": 1129,
                      "end": 1130
                    },
                    "typeArguments": null,
                    "start": 1129,
                    "end": 1130
                  },
                  "start": 1127,
                  "end": 1130
                },
                "start": 1126,
                "end": 1130
              }
            ],
            "returnType": null,
            "start": 1115,
            "end": 1132
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1140
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 1144,
                      "end": 1145
                    },
                    "typeArguments": null,
                    "start": 1144,
                    "end": 1145
                  },
                  "start": 1142,
                  "end": 1145
                },
                "start": 1141,
                "end": 1145
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
                      "start": 1150,
                      "end": 1151
                    },
                    "typeArguments": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "start": 1148,
                  "end": 1151
                },
                "start": 1147,
                "end": 1151
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
                  "start": 1154,
                  "end": 1155
                },
                "typeArguments": null,
                "start": 1154,
                "end": 1155
              },
              "start": 1152,
              "end": 1155
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1137,
            "end": 1156
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1165
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 1169,
                      "end": 1170
                    },
                    "typeArguments": null,
                    "start": 1169,
                    "end": 1170
                  },
                  "start": 1167,
                  "end": 1170
                },
                "start": 1166,
                "end": 1170
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
                      "start": 1175,
                      "end": 1176
                    },
                    "typeArguments": null,
                    "start": 1175,
                    "end": 1176
                  },
                  "start": 1173,
                  "end": 1176
                },
                "start": 1172,
                "end": 1176
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
                  "start": 1179,
                  "end": 1180
                },
                "typeArguments": null,
                "start": 1179,
                "end": 1180
              },
              "start": 1177,
              "end": 1180
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1161,
            "end": 1181
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1190
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
                    "start": 1191,
                    "end": 1192
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1191,
                  "end": 1192
                }
              ],
              "start": 1190,
              "end": 1193
            },
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
                      "start": 1197,
                      "end": 1198
                    },
                    "typeArguments": null,
                    "start": 1197,
                    "end": 1198
                  },
                  "start": 1195,
                  "end": 1198
                },
                "start": 1194,
                "end": 1198
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
                      "start": 1203,
                      "end": 1204
                    },
                    "typeArguments": null,
                    "start": 1203,
                    "end": 1204
                  },
                  "start": 1201,
                  "end": 1204
                },
                "start": 1200,
                "end": 1204
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
                  "start": 1207,
                  "end": 1208
                },
                "typeArguments": null,
                "start": 1207,
                "end": 1208
              },
              "start": 1205,
              "end": 1208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1186,
            "end": 1209
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1218
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1219,
                    "end": 1220
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1219,
                  "end": 1220
                }
              ],
              "start": 1218,
              "end": 1221
            },
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
                      "start": 1225,
                      "end": 1226
                    },
                    "typeArguments": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "start": 1223,
                  "end": 1226
                },
                "start": 1222,
                "end": 1226
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
                      "start": 1231,
                      "end": 1232
                    },
                    "typeArguments": null,
                    "start": 1231,
                    "end": 1232
                  },
                  "start": 1229,
                  "end": 1232
                },
                "start": 1228,
                "end": 1232
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
                  "start": 1235,
                  "end": 1236
                },
                "typeArguments": null,
                "start": 1235,
                "end": 1236
              },
              "start": 1233,
              "end": 1236
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1214,
            "end": 1237
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1242,
              "end": 1246
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
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1251
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1250,
                  "end": 1251
                }
              ],
              "start": 1246,
              "end": 1252
            },
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
                      "start": 1256,
                      "end": 1257
                    },
                    "typeArguments": null,
                    "start": 1256,
                    "end": 1257
                  },
                  "start": 1254,
                  "end": 1257
                },
                "start": 1253,
                "end": 1257
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
                      "start": 1262,
                      "end": 1263
                    },
                    "typeArguments": null,
                    "start": 1262,
                    "end": 1263
                  },
                  "start": 1260,
                  "end": 1263
                },
                "start": 1259,
                "end": 1263
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
                  "start": 1266,
                  "end": 1267
                },
                "typeArguments": null,
                "start": 1266,
                "end": 1267
              },
              "start": 1264,
              "end": 1267
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1242,
            "end": 1268
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1277
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
                    "start": 1278,
                    "end": 1279
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1278,
                  "end": 1279
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1281,
                    "end": 1282
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1281,
                  "end": 1282
                }
              ],
              "start": 1277,
              "end": 1283
            },
            "params": [],
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
                  "start": 1287,
                  "end": 1288
                },
                "typeArguments": null,
                "start": 1287,
                "end": 1288
              },
              "start": 1285,
              "end": 1288
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1273,
            "end": 1289
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1298
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
                    "start": 1299,
                    "end": 1300
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1299,
                  "end": 1300
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1302,
                    "end": 1303
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1302,
                  "end": 1303
                }
              ],
              "start": 1298,
              "end": 1304
            },
            "params": [
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
                "start": 1305,
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1313
                },
                "typeArguments": null,
                "start": 1312,
                "end": 1313
              },
              "start": 1310,
              "end": 1313
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1294,
            "end": 1314
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1323
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
                    "start": 1324,
                    "end": 1325
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1324,
                  "end": 1325
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1328
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1327,
                  "end": 1328
                }
              ],
              "start": 1323,
              "end": 1329
            },
            "params": [],
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
                  "start": 1333,
                  "end": 1334
                },
                "typeArguments": null,
                "start": 1333,
                "end": 1334
              },
              "start": 1331,
              "end": 1334
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1319,
            "end": 1335
          }
        ],
        "start": 1109,
        "end": 1341
      },
      "declare": false,
      "start": 1091,
      "end": 1341
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
                  "start": 1350,
                  "end": 1351
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1352,
                      "end": 1358
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1360,
                      "end": 1366
                    }
                  ],
                  "start": 1351,
                  "end": 1367
                },
                "start": 1350,
                "end": 1367
              },
              "start": 1348,
              "end": 1367
            },
            "start": 1347,
            "end": 1367
          },
          "init": null,
          "definite": false,
          "start": 1347,
          "end": 1367
        }
      ],
      "declare": false,
      "start": 1343,
      "end": 1368
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1373,
            "end": 1375
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1378,
                "end": 1379
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1383
              },
              "optional": false,
              "computed": false,
              "start": 1378,
              "end": 1383
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1384,
                "end": 1386
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1388,
                "end": 1389
              }
            ],
            "optional": false,
            "start": 1378,
            "end": 1390
          },
          "definite": false,
          "start": 1373,
          "end": 1390
        }
      ],
      "declare": false,
      "start": 1369,
      "end": 1391
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1406,
            "end": 1408
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1413,
                "end": 1417
              },
              "optional": false,
              "computed": false,
              "start": 1411,
              "end": 1417
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1418,
                "end": 1420
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1422,
                "end": 1423
              }
            ],
            "optional": false,
            "start": 1411,
            "end": 1424
          },
          "definite": false,
          "start": 1406,
          "end": 1424
        }
      ],
      "declare": false,
      "start": 1402,
      "end": 1425
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1440,
            "end": 1442
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1451
              },
              "optional": false,
              "computed": false,
              "start": 1445,
              "end": 1451
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1452,
                "end": 1456
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1458,
                "end": 1459
              }
            ],
            "optional": false,
            "start": 1445,
            "end": 1460
          },
          "definite": false,
          "start": 1440,
          "end": 1460
        }
      ],
      "declare": false,
      "start": 1436,
      "end": 1461
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1479
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1482,
                "end": 1483
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1484,
                "end": 1488
              },
              "optional": false,
              "computed": false,
              "start": 1482,
              "end": 1488
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1489,
                "end": 1491
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1493,
                "end": 1497
              }
            ],
            "optional": false,
            "start": 1482,
            "end": 1498
          },
          "definite": false,
          "start": 1477,
          "end": 1498
        }
      ],
      "declare": false,
      "start": 1473,
      "end": 1499
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1514,
            "end": 1516
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1520
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1521,
                "end": 1525
              },
              "optional": false,
              "computed": false,
              "start": 1519,
              "end": 1525
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1526,
                "end": 1530
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1532,
                "end": 1533
              }
            ],
            "optional": false,
            "start": 1519,
            "end": 1534
          },
          "definite": false,
          "start": 1514,
          "end": 1534
        }
      ],
      "declare": false,
      "start": 1510,
      "end": 1535
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1551,
            "end": 1553
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1556,
                "end": 1557
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1562
              },
              "optional": false,
              "computed": false,
              "start": 1556,
              "end": 1562
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1556,
            "end": 1564
          },
          "definite": false,
          "start": 1551,
          "end": 1564
        }
      ],
      "declare": false,
      "start": 1547,
      "end": 1565
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1576,
            "end": 1579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1582,
                "end": 1583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1584,
                "end": 1588
              },
              "optional": false,
              "computed": false,
              "start": 1582,
              "end": 1588
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1589,
                "end": 1591
              }
            ],
            "optional": false,
            "start": 1582,
            "end": 1592
          },
          "definite": false,
          "start": 1576,
          "end": 1592
        }
      ],
      "declare": false,
      "start": 1572,
      "end": 1593
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1604,
            "end": 1607
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1610,
                "end": 1611
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1612,
                "end": 1616
              },
              "optional": false,
              "computed": false,
              "start": 1610,
              "end": 1616
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1610,
            "end": 1618
          },
          "definite": false,
          "start": 1604,
          "end": 1618
        }
      ],
      "declare": false,
      "start": 1600,
      "end": 1619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 1625
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "''",
    "start": 117,
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
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 133,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "U",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 171,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 184,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "foo2b",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 231,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "''",
    "start": 258,
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
    "value": "1",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "foo2b",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "class",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 322,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 334,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 347,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 354,
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
    "value": "U",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 373,
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
    "value": "t",
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
    "value": "T",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 399,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 447,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 485,
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
    "type": "Keyword",
    "value": "return",
    "start": 498,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "U",
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
    "value": "{",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 549,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
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
    "value": "t",
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
    "value": "T",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "U",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 602,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 664,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 694,
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
    "value": "u",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 712,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 730,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 756,
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
    "value": "U",
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
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 774,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 792,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 819,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "String",
    "value": "''",
    "start": 825,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 827,
    "end": 828
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "String",
    "value": "''",
    "start": 848,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 850,
    "end": 851
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 852,
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
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 866,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 870,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 877,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "String",
    "value": "''",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 900,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 904,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 916,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 920,
    "end": 921
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 922,
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
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 941,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "String",
    "value": "''",
    "start": 953,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 957,
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
    "value": "var",
    "start": 974,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 990,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 994,
    "end": 995
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "String",
    "value": "''",
    "start": 1053,
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
    "value": "var",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "foo8",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1091,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1115,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1137,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1161,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "U",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Identifier",
    "value": "foo3",
    "start": 1186,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1194,
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
    "value": ",",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1203,
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
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1214,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1242,
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
    "value": "T",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1273,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1294,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1299,
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
    "value": "U",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1305,
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
    "value": "U",
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
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1319,
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
    "value": "T",
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
    "value": "U",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1373,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "String",
    "value": "''",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "var",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1413,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "String",
    "value": "''",
    "start": 1418,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 1440,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1447,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1452,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1484,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "String",
    "value": "''",
    "start": 1489,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1493,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 1514,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1521,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1526,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 1551,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1558,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "String",
    "value": "''",
    "start": 1589,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1600,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1612,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
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
    "value": ";",
    "start": 1618,
    "end": 1619
  }
]
```

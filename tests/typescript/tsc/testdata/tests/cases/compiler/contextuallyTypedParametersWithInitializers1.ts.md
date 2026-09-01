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
        "name": "id1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
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
          }
        ],
        "start": 20,
        "end": 23
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 31,
                "end": 32
              },
              "typeArguments": null,
              "start": 31,
              "end": 32
            },
            "start": 29,
            "end": 32
          },
          "start": 24,
          "end": 32
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
            "start": 35,
            "end": 36
          },
          "typeArguments": null,
          "start": 35,
          "end": 36
        },
        "start": 33,
        "end": 36
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id2",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 58
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
              "start": 59,
              "end": 60
            },
            "constraint": {
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
                      "type": "TSAnyKeyword",
                      "start": 73,
                      "end": 76
                    },
                    "start": 71,
                    "end": 76
                  },
                  "start": 70,
                  "end": 76
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 81,
                  "end": 84
                },
                "start": 78,
                "end": 84
              },
              "start": 69,
              "end": 84
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 84
          }
        ],
        "start": 58,
        "end": 85
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 93,
                "end": 94
              },
              "typeArguments": null,
              "start": 93,
              "end": 94
            },
            "start": 91,
            "end": 94
          },
          "start": 86,
          "end": 94
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
            "start": 97,
            "end": 98
          },
          "typeArguments": null,
          "start": 97,
          "end": 98
        },
        "start": 95,
        "end": 98
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 99
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id3",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
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
              "start": 121,
              "end": 122
            },
            "constraint": {
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
                            "start": 137,
                            "end": 140
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 142,
                              "end": 145
                            },
                            "start": 140,
                            "end": 145
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 137,
                          "end": 145
                        }
                      ],
                      "start": 135,
                      "end": 147
                    },
                    "start": 133,
                    "end": 147
                  },
                  "start": 132,
                  "end": 147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 152,
                  "end": 155
                },
                "start": 149,
                "end": 155
              },
              "start": 131,
              "end": 155
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 155
          }
        ],
        "start": 120,
        "end": 156
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 164,
                "end": 165
              },
              "typeArguments": null,
              "start": 164,
              "end": 165
            },
            "start": 162,
            "end": 165
          },
          "start": 157,
          "end": 165
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
            "start": 168,
            "end": 169
          },
          "typeArguments": null,
          "start": 168,
          "end": 169
        },
        "start": 166,
        "end": 169
      },
      "body": null,
      "expression": false,
      "start": 100,
      "end": 170
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id4",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 191
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
              "start": 192,
              "end": 193
            },
            "constraint": {
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 211
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 214,
                              "end": 220
                            },
                            "start": 212,
                            "end": 220
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 208,
                          "end": 220
                        }
                      ],
                      "start": 206,
                      "end": 222
                    },
                    "start": 204,
                    "end": 222
                  },
                  "start": 203,
                  "end": 222
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 227,
                  "end": 230
                },
                "start": 224,
                "end": 230
              },
              "start": 202,
              "end": 230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 230
          }
        ],
        "start": 191,
        "end": 231
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 239,
                "end": 240
              },
              "typeArguments": null,
              "start": 239,
              "end": 240
            },
            "start": 237,
            "end": 240
          },
          "start": 232,
          "end": 240
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
            "start": 243,
            "end": 244
          },
          "typeArguments": null,
          "start": 243,
          "end": 244
        },
        "start": 241,
        "end": 244
      },
      "body": null,
      "expression": false,
      "start": 171,
      "end": 245
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id5",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 266
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
              "start": 267,
              "end": 268
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 282,
                      "end": 288
                    },
                    "start": 280,
                    "end": 288
                  },
                  "start": 278,
                  "end": 288
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 293,
                  "end": 296
                },
                "start": 290,
                "end": 296
              },
              "start": 277,
              "end": 296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 267,
            "end": 296
          }
        ],
        "start": 266,
        "end": 297
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 305,
                "end": 306
              },
              "typeArguments": null,
              "start": 305,
              "end": 306
            },
            "start": 303,
            "end": 306
          },
          "start": 298,
          "end": 306
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
            "start": 309,
            "end": 310
          },
          "typeArguments": null,
          "start": 309,
          "end": 310
        },
        "start": 307,
        "end": 310
      },
      "body": null,
      "expression": false,
      "start": 246,
      "end": 311
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
            "start": 319,
            "end": 322
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 337,
                      "end": 340
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 340
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 343,
                        "end": 345
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 345
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 337,
                    "end": 345
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 347
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 361
                  },
                  "start": 351,
                  "end": 361
                }
              ],
              "start": 349,
              "end": 363
            },
            "expression": false,
            "start": 325,
            "end": 363
          },
          "definite": false,
          "start": 319,
          "end": 363
        }
      ],
      "declare": false,
      "start": 313,
      "end": 364
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
            "start": 371,
            "end": 374
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id1",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 380
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 393,
                          "end": 396
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 393,
                            "end": 396
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 399,
                            "end": 401
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 401
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 393,
                        "end": 401
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 403
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 417
                      },
                      "start": 407,
                      "end": 417
                    }
                  ],
                  "start": 405,
                  "end": 419
                },
                "expression": false,
                "start": 381,
                "end": 419
              }
            ],
            "optional": false,
            "start": 377,
            "end": 420
          },
          "definite": false,
          "start": 371,
          "end": 420
        }
      ],
      "declare": false,
      "start": 365,
      "end": 421
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 431
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 437
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 450,
                          "end": 453
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 453
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 456,
                            "end": 458
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 458
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 450,
                        "end": 458
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 460
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 471,
                        "end": 474
                      },
                      "start": 464,
                      "end": 474
                    }
                  ],
                  "start": 462,
                  "end": 476
                },
                "expression": false,
                "start": 438,
                "end": 476
              }
            ],
            "optional": false,
            "start": 434,
            "end": 477
          },
          "definite": false,
          "start": 428,
          "end": 477
        }
      ],
      "declare": false,
      "start": 422,
      "end": 478
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 488
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id3",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 494
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 507,
                          "end": 510
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 507,
                            "end": 510
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 513,
                            "end": 515
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 515
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 507,
                        "end": 515
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 517
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 528,
                        "end": 531
                      },
                      "start": 521,
                      "end": 531
                    }
                  ],
                  "start": 519,
                  "end": 533
                },
                "expression": false,
                "start": 495,
                "end": 533
              }
            ],
            "optional": false,
            "start": 491,
            "end": 534
          },
          "definite": false,
          "start": 485,
          "end": 534
        }
      ],
      "declare": false,
      "start": 479,
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
            "name": "f14",
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
              "name": "id4",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 551
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 564,
                          "end": 567
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 564,
                            "end": 567
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 570,
                            "end": 572
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 564,
                          "end": 572
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 564,
                        "end": 572
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 562,
                    "end": 574
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 588
                      },
                      "start": 578,
                      "end": 588
                    }
                  ],
                  "start": 576,
                  "end": 590
                },
                "expression": false,
                "start": 552,
                "end": 590
              }
            ],
            "optional": false,
            "start": 548,
            "end": 591
          },
          "definite": false,
          "start": 542,
          "end": 591
        }
      ],
      "declare": false,
      "start": 536,
      "end": 592
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
            "start": 600,
            "end": 603
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 619
                },
                "right": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 622,
                  "end": 624
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 624
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 638
                  },
                  "start": 628,
                  "end": 638
                }
              ],
              "start": 626,
              "end": 640
            },
            "expression": false,
            "start": 606,
            "end": 640
          },
          "definite": false,
          "start": 600,
          "end": 640
        }
      ],
      "declare": false,
      "start": 594,
      "end": 641
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
            "start": 648,
            "end": 651
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id1",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 657
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 671
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 674,
                      "end": 676
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 676
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 687,
                        "end": 690
                      },
                      "start": 680,
                      "end": 690
                    }
                  ],
                  "start": 678,
                  "end": 692
                },
                "expression": false,
                "start": 658,
                "end": 692
              }
            ],
            "optional": false,
            "start": 654,
            "end": 693
          },
          "definite": false,
          "start": 648,
          "end": 693
        }
      ],
      "declare": false,
      "start": 642,
      "end": 694
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
            "start": 701,
            "end": 704
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 710
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 724
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 727,
                      "end": 729
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 729
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 740,
                        "end": 743
                      },
                      "start": 733,
                      "end": 743
                    }
                  ],
                  "start": 731,
                  "end": 745
                },
                "expression": false,
                "start": 711,
                "end": 745
              }
            ],
            "optional": false,
            "start": 707,
            "end": 746
          },
          "definite": false,
          "start": 701,
          "end": 746
        }
      ],
      "declare": false,
      "start": 695,
      "end": 747
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
            "start": 754,
            "end": 757
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id5",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 763
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 774,
                      "end": 777
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 780,
                      "end": 782
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 774,
                    "end": 782
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 793,
                        "end": 796
                      },
                      "start": 786,
                      "end": 796
                    }
                  ],
                  "start": 784,
                  "end": 798
                },
                "expression": false,
                "start": 764,
                "end": 798
              }
            ],
            "optional": false,
            "start": 760,
            "end": 799
          },
          "definite": false,
          "start": 754,
          "end": 799
        }
      ],
      "declare": false,
      "start": 748,
      "end": 800
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 810
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 818,
                  "end": 819
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 819
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 824,
              "end": 825
            },
            "id": null,
            "generator": false,
            "start": 813,
            "end": 825
          },
          "definite": false,
          "start": 808,
          "end": 825
        }
      ],
      "declare": false,
      "start": 802,
      "end": 826
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 848,
                "end": 851
              },
              "start": 846,
              "end": 851
            },
            "start": 844,
            "end": 851
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 856
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 859,
                  "end": 860
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 860
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 865,
              "end": 866
            },
            "id": null,
            "generator": false,
            "start": 854,
            "end": 866
          },
          "definite": false,
          "start": 844,
          "end": 866
        }
      ],
      "declare": false,
      "start": 838,
      "end": 867
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 889,
                "end": 896
              },
              "start": 887,
              "end": 896
            },
            "start": 885,
            "end": 896
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 901
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 904,
                  "end": 905
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 905
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 910,
              "end": 911
            },
            "id": null,
            "generator": false,
            "start": 899,
            "end": 911
          },
          "definite": false,
          "start": 885,
          "end": 911
        }
      ],
      "declare": false,
      "start": 879,
      "end": 912
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 934,
                  "end": 942
                },
                "typeArguments": null,
                "start": 934,
                "end": 942
              },
              "start": 932,
              "end": 942
            },
            "start": 930,
            "end": 942
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 946,
                  "end": 947
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 950,
                  "end": 951
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 951
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 956,
              "end": 957
            },
            "id": null,
            "generator": false,
            "start": 945,
            "end": 957
          },
          "definite": false,
          "start": 930,
          "end": 957
        }
      ],
      "declare": false,
      "start": 924,
      "end": 958
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
            "name": "f5",
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
                      "start": 984,
                      "end": 988
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 990,
                          "end": 993
                        },
                        "start": 990,
                        "end": 995
                      },
                      "start": 988,
                      "end": 995
                    },
                    "value": null,
                    "start": 981,
                    "end": 995
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1000,
                    "end": 1003
                  },
                  "start": 997,
                  "end": 1003
                },
                "start": 980,
                "end": 1003
              },
              "start": 978,
              "end": 1003
            },
            "start": 976,
            "end": 1003
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1007,
                  "end": 1008
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1011,
                  "end": 1012
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1012
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1017,
              "end": 1018
            },
            "id": null,
            "generator": false,
            "start": 1006,
            "end": 1018
          },
          "definite": false,
          "start": 976,
          "end": 1018
        }
      ],
      "declare": false,
      "start": 970,
      "end": 1019
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
            "name": "f6",
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
                    "type": "TSAnyKeyword",
                    "start": 1044,
                    "end": 1047
                  },
                  "start": 1041,
                  "end": 1047
                },
                "start": 1038,
                "end": 1047
              },
              "start": 1036,
              "end": 1047
            },
            "start": 1034,
            "end": 1047
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1051,
                  "end": 1052
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1055,
                  "end": 1056
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1056
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1061,
              "end": 1062
            },
            "id": null,
            "generator": false,
            "start": 1050,
            "end": 1062
          },
          "definite": false,
          "start": 1034,
          "end": 1062
        }
      ],
      "declare": false,
      "start": 1028,
      "end": 1063
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
            "name": "f7",
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
                    "type": "TSAnyKeyword",
                    "start": 1091,
                    "end": 1094
                  },
                  "start": 1088,
                  "end": 1094
                },
                "start": 1085,
                "end": 1094
              },
              "start": 1083,
              "end": 1094
            },
            "start": 1081,
            "end": 1094
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
                "name": "x",
                "optional": true,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1100
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1105,
              "end": 1106
            },
            "id": null,
            "generator": false,
            "start": 1097,
            "end": 1106
          },
          "definite": false,
          "start": 1081,
          "end": 1106
        }
      ],
      "declare": false,
      "start": 1075,
      "end": 1107
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
            "name": "f8",
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
                    "type": "TSAnyKeyword",
                    "start": 1147,
                    "end": 1150
                  },
                  "start": 1144,
                  "end": 1150
                },
                "start": 1141,
                "end": 1150
              },
              "start": 1139,
              "end": 1150
            },
            "start": 1137,
            "end": 1150
          },
          "init": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1158
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1154,
                "end": 1158
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1163,
              "end": 1164
            },
            "id": null,
            "generator": false,
            "start": 1153,
            "end": 1164
          },
          "definite": false,
          "start": 1137,
          "end": 1164
        }
      ],
      "declare": false,
      "start": 1131,
      "end": 1165
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1193
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
              "start": 1194,
              "end": 1195
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1194,
            "end": 1195
          }
        ],
        "start": 1193,
        "end": 1196
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
                "start": 1200,
                "end": 1201
              },
              "typeArguments": null,
              "start": 1200,
              "end": 1201
            },
            "start": 1198,
            "end": 1201
          },
          "start": 1197,
          "end": 1201
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
            "start": 1204,
            "end": 1205
          },
          "typeArguments": null,
          "start": 1204,
          "end": 1205
        },
        "start": 1202,
        "end": 1205
      },
      "body": null,
      "expression": false,
      "start": 1174,
      "end": 1206
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1226
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
              "start": 1227,
              "end": 1228
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 1237,
              "end": 1240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1227,
            "end": 1240
          }
        ],
        "start": 1226,
        "end": 1241
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
                "start": 1245,
                "end": 1246
              },
              "typeArguments": null,
              "start": 1245,
              "end": 1246
            },
            "start": 1243,
            "end": 1246
          },
          "start": 1242,
          "end": 1246
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
            "start": 1249,
            "end": 1250
          },
          "typeArguments": null,
          "start": 1249,
          "end": 1250
        },
        "start": 1247,
        "end": 1250
      },
      "body": null,
      "expression": false,
      "start": 1207,
      "end": 1251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1269,
        "end": 1271
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
              "start": 1272,
              "end": 1273
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 1282,
              "end": 1289
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1272,
            "end": 1289
          }
        ],
        "start": 1271,
        "end": 1290
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
                "start": 1294,
                "end": 1295
              },
              "typeArguments": null,
              "start": 1294,
              "end": 1295
            },
            "start": 1292,
            "end": 1295
          },
          "start": 1291,
          "end": 1295
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
            "start": 1298,
            "end": 1299
          },
          "typeArguments": null,
          "start": 1298,
          "end": 1299
        },
        "start": 1296,
        "end": 1299
      },
      "body": null,
      "expression": false,
      "start": 1252,
      "end": 1300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1318,
        "end": 1320
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
              "start": 1321,
              "end": 1322
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1339
              },
              "typeArguments": null,
              "start": 1331,
              "end": 1339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1321,
            "end": 1339
          }
        ],
        "start": 1320,
        "end": 1340
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
                "start": 1344,
                "end": 1345
              },
              "typeArguments": null,
              "start": 1344,
              "end": 1345
            },
            "start": 1342,
            "end": 1345
          },
          "start": 1341,
          "end": 1345
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
            "start": 1348,
            "end": 1349
          },
          "typeArguments": null,
          "start": 1348,
          "end": 1349
        },
        "start": 1346,
        "end": 1349
      },
      "body": null,
      "expression": false,
      "start": 1301,
      "end": 1350
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1370
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
              "start": 1371,
              "end": 1372
            },
            "constraint": {
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
                    "start": 1385,
                    "end": 1389
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1391,
                        "end": 1394
                      },
                      "start": 1391,
                      "end": 1396
                    },
                    "start": 1389,
                    "end": 1396
                  },
                  "value": null,
                  "start": 1382,
                  "end": 1396
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1401,
                  "end": 1404
                },
                "start": 1398,
                "end": 1404
              },
              "start": 1381,
              "end": 1404
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1371,
            "end": 1404
          }
        ],
        "start": 1370,
        "end": 1405
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
                "start": 1409,
                "end": 1410
              },
              "typeArguments": null,
              "start": 1409,
              "end": 1410
            },
            "start": 1407,
            "end": 1410
          },
          "start": 1406,
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
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1413,
            "end": 1414
          },
          "typeArguments": null,
          "start": 1413,
          "end": 1414
        },
        "start": 1411,
        "end": 1414
      },
      "body": null,
      "expression": false,
      "start": 1351,
      "end": 1415
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1433,
        "end": 1435
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
              "start": 1436,
              "end": 1437
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1452,
                  "end": 1455
                },
                "start": 1449,
                "end": 1455
              },
              "start": 1446,
              "end": 1455
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1436,
            "end": 1455
          }
        ],
        "start": 1435,
        "end": 1456
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
                "start": 1460,
                "end": 1461
              },
              "typeArguments": null,
              "start": 1460,
              "end": 1461
            },
            "start": 1458,
            "end": 1461
          },
          "start": 1457,
          "end": 1461
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
            "start": 1464,
            "end": 1465
          },
          "typeArguments": null,
          "start": 1464,
          "end": 1465
        },
        "start": 1462,
        "end": 1465
      },
      "body": null,
      "expression": false,
      "start": 1416,
      "end": 1466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1468,
          "end": 1470
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1472,
                  "end": 1473
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1476,
                  "end": 1477
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1477
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1482,
              "end": 1483
            },
            "id": null,
            "generator": false,
            "start": 1471,
            "end": 1483
          }
        ],
        "optional": false,
        "start": 1468,
        "end": 1484
      },
      "directive": null,
      "start": 1468,
      "end": 1485
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1497,
          "end": 1499
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1501,
                  "end": 1502
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1505,
                  "end": 1506
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1501,
                "end": 1506
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1511,
              "end": 1512
            },
            "id": null,
            "generator": false,
            "start": 1500,
            "end": 1512
          }
        ],
        "optional": false,
        "start": 1497,
        "end": 1513
      },
      "directive": null,
      "start": 1497,
      "end": 1514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1526,
          "end": 1528
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1530,
                  "end": 1531
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1534,
                  "end": 1535
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1530,
                "end": 1535
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1540,
              "end": 1541
            },
            "id": null,
            "generator": false,
            "start": 1529,
            "end": 1541
          }
        ],
        "optional": false,
        "start": 1526,
        "end": 1542
      },
      "directive": null,
      "start": 1526,
      "end": 1543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1555,
          "end": 1557
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1559,
                  "end": 1560
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1563,
                  "end": 1564
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1559,
                "end": 1564
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1569,
              "end": 1570
            },
            "id": null,
            "generator": false,
            "start": 1558,
            "end": 1570
          }
        ],
        "optional": false,
        "start": 1555,
        "end": 1571
      },
      "directive": null,
      "start": 1555,
      "end": 1572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1584,
          "end": 1586
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1588,
                  "end": 1589
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1592,
                  "end": 1593
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1593
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1598,
              "end": 1599
            },
            "id": null,
            "generator": false,
            "start": 1587,
            "end": 1599
          }
        ],
        "optional": false,
        "start": 1584,
        "end": 1600
      },
      "directive": null,
      "start": 1584,
      "end": 1601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1610,
          "end": 1612
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1614,
                  "end": 1615
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1618,
                  "end": 1619
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1614,
                "end": 1619
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1624,
              "end": 1625
            },
            "id": null,
            "generator": false,
            "start": 1613,
            "end": 1625
          }
        ],
        "optional": false,
        "start": 1610,
        "end": 1626
      },
      "directive": null,
      "start": 1610,
      "end": 1627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1639,
          "end": 1641
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
                "optional": true,
                "typeAnnotation": null,
                "start": 1643,
                "end": 1645
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1650,
              "end": 1651
            },
            "id": null,
            "generator": false,
            "start": 1642,
            "end": 1651
          }
        ],
        "optional": false,
        "start": 1639,
        "end": 1652
      },
      "directive": null,
      "start": 1639,
      "end": 1653
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1680,
          "end": 1682
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
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1687,
                  "end": 1688
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1684,
                "end": 1688
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1693,
              "end": 1694
            },
            "id": null,
            "generator": false,
            "start": 1683,
            "end": 1694
          }
        ],
        "optional": false,
        "start": 1680,
        "end": 1695
      },
      "directive": null,
      "start": 1680,
      "end": 1696
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1739
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
              "start": 1740,
              "end": 1741
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1740,
            "end": 1741
          }
        ],
        "start": 1739,
        "end": 1742
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 1750,
                "end": 1751
              },
              "typeArguments": null,
              "start": 1750,
              "end": 1751
            },
            "start": 1748,
            "end": 1751
          },
          "start": 1743,
          "end": 1751
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
            "start": 1754,
            "end": 1755
          },
          "typeArguments": null,
          "start": 1754,
          "end": 1755
        },
        "start": 1752,
        "end": 1755
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "input",
              "optional": false,
              "typeAnnotation": null,
              "start": 1765,
              "end": 1770
            },
            "start": 1758,
            "end": 1770
          }
        ],
        "start": 1756,
        "end": 1772
      },
      "expression": false,
      "start": 1728,
      "end": 1772
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1783,
        "end": 1789
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 1793,
                "end": 1796
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1793,
                  "end": 1796
                },
                "right": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1799,
                  "end": 1801
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1793,
                "end": 1801
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1793,
              "end": 1801
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1791,
          "end": 1803
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1819
            },
            "start": 1809,
            "end": 1820
          }
        ],
        "start": 1805,
        "end": 1822
      },
      "expression": false,
      "start": 1774,
      "end": 1822
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
            "name": "newGetFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1830,
            "end": 1839
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1844
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1845,
                "end": 1851
              }
            ],
            "optional": false,
            "start": 1842,
            "end": 1852
          },
          "definite": false,
          "start": 1830,
          "end": 1852
        }
      ],
      "declare": false,
      "start": 1824,
      "end": 1853
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
            "name": "newGetFoo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1860,
            "end": 1870
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1873,
              "end": 1875
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1885,
                  "end": 1891
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 1895,
                          "end": 1898
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1895,
                            "end": 1898
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1901,
                            "end": 1903
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1895,
                          "end": 1903
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1895,
                        "end": 1903
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1893,
                    "end": 1905
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1918,
                        "end": 1921
                      },
                      "start": 1911,
                      "end": 1922
                    }
                  ],
                  "start": 1907,
                  "end": 1924
                },
                "expression": false,
                "start": 1876,
                "end": 1924
              }
            ],
            "optional": false,
            "start": 1873,
            "end": 1925
          },
          "definite": false,
          "start": 1860,
          "end": 1925
        }
      ],
      "declare": false,
      "start": 1854,
      "end": 1926
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "memoize",
        "optional": false,
        "typeAnnotation": null,
        "start": 1978,
        "end": 1985
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
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1986,
              "end": 1987
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1996,
                "end": 2004
              },
              "typeArguments": null,
              "start": 1996,
              "end": 2004
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1986,
            "end": 2004
          }
        ],
        "start": 1985,
        "end": 2005
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
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
          "start": 2006,
          "end": 2013
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 2016,
            "end": 2017
          },
          "typeArguments": null,
          "start": 2016,
          "end": 2017
        },
        "start": 2014,
        "end": 2017
      },
      "body": null,
      "expression": false,
      "start": 1961,
      "end": 2018
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "add",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2032
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
              "type": "TSNumberKeyword",
              "start": 2036,
              "end": 2042
            },
            "start": 2034,
            "end": 2042
          },
          "start": 2033,
          "end": 2042
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 2044,
            "end": 2045
          },
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 2048,
            "end": 2049
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2044,
          "end": 2049
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2052,
          "end": 2058
        },
        "start": 2050,
        "end": 2058
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2072,
                "end": 2073
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2076,
                "end": 2077
              },
              "start": 2072,
              "end": 2077
            },
            "start": 2065,
            "end": 2078
          }
        ],
        "start": 2059,
        "end": 2080
      },
      "expression": false,
      "start": 2020,
      "end": 2080
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
            "name": "memoizedAdd",
            "optional": false,
            "typeAnnotation": null,
            "start": 2087,
            "end": 2098
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "memoize",
              "optional": false,
              "typeAnnotation": null,
              "start": 2101,
              "end": 2108
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 2109,
                "end": 2112
              }
            ],
            "optional": false,
            "start": 2101,
            "end": 2113
          },
          "definite": false,
          "start": 2087,
          "end": 2113
        }
      ],
      "declare": false,
      "start": 2081,
      "end": 2114
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
            "name": "add2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2122,
            "end": 2126
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2133,
                    "end": 2139
                  },
                  "start": 2131,
                  "end": 2139
                },
                "start": 2130,
                "end": 2139
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2141,
                  "end": 2142
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2145,
                  "end": 2146
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2141,
                "end": 2146
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2149,
                "end": 2155
              },
              "start": 2147,
              "end": 2155
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2159,
                "end": 2160
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2163,
                "end": 2164
              },
              "start": 2159,
              "end": 2164
            },
            "id": null,
            "generator": false,
            "start": 2129,
            "end": 2164
          },
          "definite": false,
          "start": 2122,
          "end": 2164
        }
      ],
      "declare": false,
      "start": 2116,
      "end": 2165
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
            "name": "memoizedAdd2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2172,
            "end": 2184
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "memoize",
              "optional": false,
              "typeAnnotation": null,
              "start": 2187,
              "end": 2194
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "add2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2195,
                "end": 2199
              }
            ],
            "optional": false,
            "start": 2187,
            "end": 2200
          },
          "definite": false,
          "start": 2172,
          "end": 2200
        }
      ],
      "declare": false,
      "start": 2166,
      "end": 2201
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
            "name": "memoizedAdd3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2209,
            "end": 2221
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "memoize",
              "optional": false,
              "typeAnnotation": null,
              "start": 2224,
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2236,
                        "end": 2242
                      },
                      "start": 2234,
                      "end": 2242
                    },
                    "start": 2233,
                    "end": 2242
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2244,
                      "end": 2245
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2248,
                      "end": 2249
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2244,
                    "end": 2249
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2252,
                    "end": 2258
                  },
                  "start": 2250,
                  "end": 2258
                },
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2262,
                    "end": 2263
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2266,
                    "end": 2267
                  },
                  "start": 2262,
                  "end": 2267
                },
                "id": null,
                "generator": false,
                "start": 2232,
                "end": 2267
              }
            ],
            "optional": false,
            "start": 2224,
            "end": 2268
          },
          "definite": false,
          "start": 2209,
          "end": 2268
        }
      ],
      "declare": false,
      "start": 2203,
      "end": 2269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "execute",
        "optional": false,
        "typeAnnotation": null,
        "start": 2310,
        "end": 2317
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "script",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2326,
                  "end": 2332
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2335,
                    "end": 2343
                  },
                  "typeArguments": null,
                  "start": 2335,
                  "end": 2343
                }
              ],
              "start": 2326,
              "end": 2343
            },
            "start": 2324,
            "end": 2343
          },
          "start": 2318,
          "end": 2343
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2346,
            "end": 2353
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2354,
                "end": 2360
              }
            ],
            "start": 2353,
            "end": 2361
          },
          "start": 2346,
          "end": 2361
        },
        "start": 2344,
        "end": 2361
      },
      "body": null,
      "expression": false,
      "start": 2293,
      "end": 2362
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "executeSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2382,
          "end": 2398
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                  "name": "execute",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2421
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
                        "name": "root",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "HTMLElement",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2429,
                              "end": 2440
                            },
                            "typeArguments": null,
                            "start": 2429,
                            "end": 2440
                          },
                          "start": 2427,
                          "end": 2440
                        },
                        "start": 2423,
                        "end": 2440
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "debug",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2442,
                          "end": 2447
                        },
                        "right": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 2450,
                          "end": 2454
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2442,
                        "end": 2454
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "debug",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2473,
                            "end": 2478
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "root",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2494,
                                      "end": 2498
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "innerHTML",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2499,
                                      "end": 2508
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2494,
                                    "end": 2508
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''",
                                    "start": 2511,
                                    "end": 2513
                                  },
                                  "start": 2494,
                                  "end": 2513
                                },
                                "directive": null,
                                "start": 2494,
                                "end": 2514
                              }
                            ],
                            "start": 2480,
                            "end": 2524
                          },
                          "alternate": null,
                          "start": 2469,
                          "end": 2524
                        }
                      ],
                      "start": 2459,
                      "end": 2530
                    },
                    "id": null,
                    "generator": false,
                    "start": 2422,
                    "end": 2530
                  }
                ],
                "optional": false,
                "start": 2414,
                "end": 2531
              },
              "start": 2407,
              "end": 2532
            }
          ],
          "start": 2401,
          "end": 2534
        },
        "expression": false,
        "start": 2373,
        "end": 2534
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2366,
      "end": 2534
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
            "name": "fz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2542,
            "end": 2545
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2549,
                  "end": 2554
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2557,
                  "end": 2561
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2549,
                "end": 2561
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 2566,
              "end": 2571
            },
            "id": null,
            "generator": false,
            "start": 2548,
            "end": 2571
          },
          "definite": false,
          "start": 2542,
          "end": 2571
        }
      ],
      "declare": false,
      "start": 2536,
      "end": 2572
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
            "name": "fz2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2584,
                  "end": 2592
                },
                "typeArguments": null,
                "start": 2584,
                "end": 2592
              },
              "start": 2582,
              "end": 2592
            },
            "start": 2579,
            "end": 2592
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2596,
                  "end": 2601
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2604,
                  "end": 2608
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2596,
                "end": 2608
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 2613,
              "end": 2618
            },
            "id": null,
            "generator": false,
            "start": 2595,
            "end": 2618
          },
          "definite": false,
          "start": 2579,
          "end": 2618
        }
      ],
      "declare": false,
      "start": 2573,
      "end": 2619
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2619
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
    "value": "id1",
    "start": 17,
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
    "value": ">",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 38,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 100,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "id3",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 142,
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
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 171,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 179,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "id4",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "any",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 232,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 246,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "id5",
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
    "value": "T",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 290,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
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
    "value": "T",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 313,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 351,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 365,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 381,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 407,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 422,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 438,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 464,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "id3",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 495,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 521,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 528,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
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
    "value": "f14",
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
    "value": "id4",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 552,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 578,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 594,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 606,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "type": "Numeric",
    "value": "42",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 628,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 642,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 648,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 658,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 680,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 695,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 701,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 707,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 711,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 727,
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
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 733,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 748,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "f25",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "id5",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 764,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 786,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 802,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 808,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 818,
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
    "value": "=>",
    "start": 821,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 838,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 844,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 848,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 862,
    "end": 864
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 879,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 889,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 907,
    "end": 909
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 924,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "f4",
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
    "type": "Identifier",
    "value": "Function",
    "start": 934,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 948,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 953,
    "end": 955
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 970,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 984,
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
    "value": "[",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 997,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1034,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1041,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "const",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "const",
    "start": 1131,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1144,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1147,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1160,
    "end": 1162
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1174,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1182,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1191,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1195,
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
    "value": "x",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1207,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1215,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1229,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1252,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1260,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1274,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1282,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1301,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1309,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 1318,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1323,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1331,
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
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1351,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1359,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1373,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1382,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1385,
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
    "value": "any",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1416,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1424,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 1433,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1438,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1449,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1468,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1479,
    "end": 1481
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1497,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1508,
    "end": 1510
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 1526,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1537,
    "end": 1539
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 1555,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1569,
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
    "type": "Identifier",
    "value": "g5",
    "start": 1584,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1595,
    "end": 1597
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "g6",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "g6",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1641,
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
    "value": "?",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1647,
    "end": 1649
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 1680,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1690,
    "end": 1692
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1728,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1743,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1758,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1765,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1774,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "getFoo",
    "start": 1783,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1793,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1799,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1809,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1824,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "newGetFoo",
    "start": 1830,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1842,
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
    "value": "getFoo",
    "start": 1845,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1854,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "newGetFoo2",
    "start": 1860,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1873,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1876,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "getFoo",
    "start": 1885,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1895,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1911,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1961,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1969,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "memoize",
    "start": 1978,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1988,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1996,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 2006,
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
    "value": "F",
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
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2020,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2029,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2036,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2052,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2065,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2081,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "memoizedAdd",
    "start": 2087,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "memoize",
    "start": 2101,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 2109,
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
    "type": "Keyword",
    "value": "const",
    "start": 2116,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "add2",
    "start": 2122,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2133,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2149,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2156,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2166,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "memoizedAdd2",
    "start": 2172,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "memoize",
    "start": 2187,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "add2",
    "start": 2195,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2203,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "memoizedAdd3",
    "start": 2209,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "memoize",
    "start": 2224,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2236,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2252,
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
    "value": "+",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2293,
    "end": 2300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2301,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "execute",
    "start": 2310,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "script",
    "start": 2318,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2326,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2335,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2346,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2354,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2366,
    "end": 2372
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2373,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "executeSomething",
    "start": 2382,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2407,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "execute",
    "start": 2414,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 2423,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 2429,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 2442,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2450,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2456,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2469,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 2473,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 2494,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "innerHTML",
    "start": 2499,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "String",
    "value": "''",
    "start": 2511,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2536,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "fz1",
    "start": 2542,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 2549,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2557,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2563,
    "end": 2565
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2566,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2573,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "fz2",
    "start": 2579,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2584,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 2596,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2604,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2610,
    "end": 2612
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2613,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619
  }
]
```

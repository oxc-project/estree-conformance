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
        "name": "SetOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 113
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
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
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
              "start": 121,
              "end": 127
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
                    "start": 129,
                    "end": 130
                  },
                  "typeArguments": null,
                  "start": 129,
                  "end": 130
                },
                "start": 129,
                "end": 132
              },
              "start": 127,
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
            "start": 121,
            "end": 133
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
              "start": 137,
              "end": 140
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
                  "start": 141,
                  "end": 145
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
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 158,
                            "end": 164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 153,
                          "end": 164
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 169
                        },
                        "optional": false,
                        "computed": false,
                        "start": 153,
                        "end": 169
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 171
                        }
                      ],
                      "optional": false,
                      "start": 153,
                      "end": 172
                    },
                    "directive": null,
                    "start": 153,
                    "end": 173
                  }
                ],
                "start": 147,
                "end": 177
              },
              "expression": false,
              "start": 140,
              "end": 177
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 137,
            "end": 177
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
              "start": 181,
              "end": 190
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
                                "start": 211,
                                "end": 216
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
                                      "start": 217,
                                      "end": 218
                                    },
                                    "typeArguments": null,
                                    "start": 217,
                                    "end": 218
                                  }
                                ],
                                "start": 216,
                                "end": 219
                              },
                              "start": 211,
                              "end": 219
                            },
                            "start": 209,
                            "end": 219
                          },
                          "start": 208,
                          "end": 219
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
                            "start": 224,
                            "end": 229
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
                                  "start": 230,
                                  "end": 231
                                },
                                "typeArguments": null,
                                "start": 230,
                                "end": 231
                              }
                            ],
                            "start": 229,
                            "end": 232
                          },
                          "start": 224,
                          "end": 232
                        },
                        "start": 221,
                        "end": 232
                      },
                      "start": 207,
                      "end": 232
                    },
                    "start": 205,
                    "end": 232
                  },
                  "start": 194,
                  "end": 232
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
                    "start": 235,
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
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 242
                        },
                        "typeArguments": null,
                        "start": 241,
                        "end": 242
                      }
                    ],
                    "start": 240,
                    "end": 243
                  },
                  "start": 235,
                  "end": 243
                },
                "start": 233,
                "end": 243
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
                        "start": 257,
                        "end": 268
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        }
                      ],
                      "optional": false,
                      "start": 257,
                      "end": 274
                    },
                    "start": 250,
                    "end": 275
                  }
                ],
                "start": 244,
                "end": 279
              },
              "expression": false,
              "start": 190,
              "end": 279
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 279
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
              "start": 283,
              "end": 290
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
                                "start": 299,
                                "end": 300
                              },
                              "typeArguments": null,
                              "start": 299,
                              "end": 300
                            },
                            "start": 297,
                            "end": 300
                          },
                          "start": 296,
                          "end": 300
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
                              "start": 309,
                              "end": 315
                            },
                            "start": 307,
                            "end": 315
                          },
                          "start": 302,
                          "end": 315
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 320,
                          "end": 324
                        },
                        "start": 317,
                        "end": 324
                      },
                      "start": 295,
                      "end": 324
                    },
                    "start": 293,
                    "end": 324
                  },
                  "start": 291,
                  "end": 324
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
                            "start": 334,
                            "end": 338
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 345
                          },
                          "optional": false,
                          "computed": false,
                          "start": 334,
                          "end": 345
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 353
                        },
                        "optional": false,
                        "computed": false,
                        "start": 334,
                        "end": 353
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
                              "start": 355,
                              "end": 356
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 358,
                              "end": 359
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
                              "start": 364,
                              "end": 366
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 367,
                                "end": 368
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 371
                              }
                            ],
                            "optional": false,
                            "start": 364,
                            "end": 372
                          },
                          "id": null,
                          "generator": false,
                          "start": 354,
                          "end": 372
                        }
                      ],
                      "optional": false,
                      "start": 334,
                      "end": 373
                    },
                    "directive": null,
                    "start": 334,
                    "end": 374
                  }
                ],
                "start": 326,
                "end": 378
              },
              "expression": false,
              "start": 290,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 283,
            "end": 378
          }
        ],
        "start": 117,
        "end": 380
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 380
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 398
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
              "start": 399,
              "end": 400
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 399,
            "end": 400
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 402,
            "end": 403
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 405,
            "end": 406
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 409
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 408,
            "end": 409
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 412
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 412
          }
        ],
        "start": 398,
        "end": 413
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
                        "start": 426,
                        "end": 431
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
                              "start": 432,
                              "end": 433
                            },
                            "typeArguments": null,
                            "start": 432,
                            "end": 433
                          }
                        ],
                        "start": 431,
                        "end": 434
                      },
                      "start": 426,
                      "end": 434
                    },
                    "start": 424,
                    "end": 434
                  },
                  "start": 423,
                  "end": 434
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
                    "start": 439,
                    "end": 444
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
                          "start": 445,
                          "end": 446
                        },
                        "typeArguments": null,
                        "start": 445,
                        "end": 446
                      }
                    ],
                    "start": 444,
                    "end": 447
                  },
                  "start": 439,
                  "end": 447
                },
                "start": 436,
                "end": 447
              },
              "start": 422,
              "end": 447
            },
            "start": 420,
            "end": 447
          },
          "start": 417,
          "end": 447
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
                        "start": 461,
                        "end": 466
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
                              "start": 467,
                              "end": 468
                            },
                            "typeArguments": null,
                            "start": 467,
                            "end": 468
                          }
                        ],
                        "start": 466,
                        "end": 469
                      },
                      "start": 461,
                      "end": 469
                    },
                    "start": 459,
                    "end": 469
                  },
                  "start": 458,
                  "end": 469
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
                    "start": 474,
                    "end": 479
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
                          "start": 480,
                          "end": 481
                        },
                        "typeArguments": null,
                        "start": 480,
                        "end": 481
                      }
                    ],
                    "start": 479,
                    "end": 482
                  },
                  "start": 474,
                  "end": 482
                },
                "start": 471,
                "end": 482
              },
              "start": 457,
              "end": 482
            },
            "start": 455,
            "end": 482
          },
          "start": 452,
          "end": 482
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
                        "start": 496,
                        "end": 501
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
                              "start": 502,
                              "end": 503
                            },
                            "typeArguments": null,
                            "start": 502,
                            "end": 503
                          }
                        ],
                        "start": 501,
                        "end": 504
                      },
                      "start": 496,
                      "end": 504
                    },
                    "start": 494,
                    "end": 504
                  },
                  "start": 493,
                  "end": 504
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
                    "start": 509,
                    "end": 514
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
                          "start": 515,
                          "end": 516
                        },
                        "typeArguments": null,
                        "start": 515,
                        "end": 516
                      }
                    ],
                    "start": 514,
                    "end": 517
                  },
                  "start": 509,
                  "end": 517
                },
                "start": 506,
                "end": 517
              },
              "start": 492,
              "end": 517
            },
            "start": 490,
            "end": 517
          },
          "start": 487,
          "end": 517
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
                        "start": 530,
                        "end": 535
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
                              "start": 536,
                              "end": 537
                            },
                            "typeArguments": null,
                            "start": 536,
                            "end": 537
                          }
                        ],
                        "start": 535,
                        "end": 538
                      },
                      "start": 530,
                      "end": 538
                    },
                    "start": 528,
                    "end": 538
                  },
                  "start": 527,
                  "end": 538
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
                    "start": 543,
                    "end": 548
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
                          "start": 549,
                          "end": 550
                        },
                        "typeArguments": null,
                        "start": 549,
                        "end": 550
                      }
                    ],
                    "start": 548,
                    "end": 551
                  },
                  "start": 543,
                  "end": 551
                },
                "start": 540,
                "end": 551
              },
              "start": 526,
              "end": 551
            },
            "start": 524,
            "end": 551
          },
          "start": 521,
          "end": 551
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
                    "start": 559,
                    "end": 564
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
                          "start": 565,
                          "end": 566
                        },
                        "typeArguments": null,
                        "start": 565,
                        "end": 566
                      }
                    ],
                    "start": 564,
                    "end": 567
                  },
                  "start": 559,
                  "end": 567
                },
                "start": 557,
                "end": 567
              },
              "start": 556,
              "end": 567
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
                "start": 572,
                "end": 577
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
                      "start": 578,
                      "end": 579
                    },
                    "typeArguments": null,
                    "start": 578,
                    "end": 579
                  }
                ],
                "start": 577,
                "end": 580
              },
              "start": 572,
              "end": 580
            },
            "start": 569,
            "end": 580
          },
          "start": 555,
          "end": 580
        },
        "start": 554,
        "end": 580
      },
      "body": null,
      "expression": false,
      "start": 382,
      "end": 581
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 616
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
              "start": 617,
              "end": 618
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 617,
            "end": 618
          }
        ],
        "start": 616,
        "end": 619
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
            "start": 623,
            "end": 626
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
                          "start": 633,
                          "end": 634
                        },
                        "typeArguments": null,
                        "start": 633,
                        "end": 634
                      },
                      "start": 631,
                      "end": 634
                    },
                    "start": 630,
                    "end": 634
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
                      "start": 639,
                      "end": 640
                    },
                    "typeArguments": null,
                    "start": 639,
                    "end": 640
                  },
                  "start": 636,
                  "end": 640
                },
                "start": 629,
                "end": 640
              },
              "start": 628,
              "end": 643
            },
            "start": 626,
            "end": 643
          },
          "value": null,
          "start": 620,
          "end": 643
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
                    "start": 650,
                    "end": 651
                  },
                  "typeArguments": null,
                  "start": 650,
                  "end": 651
                },
                "start": 648,
                "end": 651
              },
              "start": 647,
              "end": 651
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
                "start": 656,
                "end": 657
              },
              "typeArguments": null,
              "start": 656,
              "end": 657
            },
            "start": 653,
            "end": 657
          },
          "start": 646,
          "end": 657
        },
        "start": 644,
        "end": 657
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
                        "start": 673,
                        "end": 674
                      },
                      "typeArguments": null,
                      "start": 673,
                      "end": 674
                    },
                    "start": 671,
                    "end": 674
                  },
                  "start": 670,
                  "end": 674
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
                    "start": 679,
                    "end": 682
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reduce",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 689
                  },
                  "optional": false,
                  "computed": false,
                  "start": 679,
                  "end": 689
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
                        "start": 691,
                        "end": 695
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 697,
                        "end": 699
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
                        "start": 704,
                        "end": 706
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 707,
                          "end": 711
                        }
                      ],
                      "optional": false,
                      "start": 704,
                      "end": 712
                    },
                    "id": null,
                    "generator": false,
                    "start": 690,
                    "end": 712
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 714,
                    "end": 715
                  }
                ],
                "optional": false,
                "start": 679,
                "end": 716
              },
              "id": null,
              "generator": false,
              "start": 669,
              "end": 716
            },
            "start": 662,
            "end": 717
          }
        ],
        "start": 658,
        "end": 719
      },
      "expression": false,
      "start": 600,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 733
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
              "start": 734,
              "end": 735
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 734,
            "end": 735
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 738
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 737,
            "end": 738
          }
        ],
        "start": 733,
        "end": 739
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
                        "start": 748,
                        "end": 749
                      },
                      "typeArguments": null,
                      "start": 748,
                      "end": 749
                    },
                    "start": 746,
                    "end": 749
                  },
                  "start": 745,
                  "end": 749
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
                    "start": 754,
                    "end": 755
                  },
                  "typeArguments": null,
                  "start": 754,
                  "end": 755
                },
                "start": 751,
                "end": 755
              },
              "start": 744,
              "end": 755
            },
            "start": 742,
            "end": 755
          },
          "start": 740,
          "end": 755
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
                    "start": 762,
                    "end": 767
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
                          "start": 768,
                          "end": 769
                        },
                        "typeArguments": null,
                        "start": 768,
                        "end": 769
                      }
                    ],
                    "start": 767,
                    "end": 770
                  },
                  "start": 762,
                  "end": 770
                },
                "start": 760,
                "end": 770
              },
              "start": 759,
              "end": 770
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
                "start": 775,
                "end": 780
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
                      "start": 781,
                      "end": 782
                    },
                    "typeArguments": null,
                    "start": 781,
                    "end": 782
                  }
                ],
                "start": 780,
                "end": 783
              },
              "start": 775,
              "end": 783
            },
            "start": 772,
            "end": 783
          },
          "start": 758,
          "end": 783
        },
        "start": 756,
        "end": 783
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
                        "start": 799,
                        "end": 804
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
                              "start": 805,
                              "end": 806
                            },
                            "typeArguments": null,
                            "start": 805,
                            "end": 806
                          }
                        ],
                        "start": 804,
                        "end": 807
                      },
                      "start": 799,
                      "end": 807
                    },
                    "start": 797,
                    "end": 807
                  },
                  "start": 796,
                  "end": 807
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
                                "start": 827,
                                "end": 832
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
                                      "start": 833,
                                      "end": 834
                                    },
                                    "typeArguments": null,
                                    "start": 833,
                                    "end": 834
                                  }
                                ],
                                "start": 832,
                                "end": 835
                              },
                              "start": 827,
                              "end": 835
                            },
                            "start": 825,
                            "end": 835
                          },
                          "start": 824,
                          "end": 835
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 842,
                            "end": 847
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 838,
                          "end": 849
                        },
                        "definite": false,
                        "start": 824,
                        "end": 849
                      }
                    ],
                    "declare": false,
                    "start": 818,
                    "end": 850
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
                          "start": 855,
                          "end": 856
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 864
                        },
                        "optional": false,
                        "computed": false,
                        "start": 855,
                        "end": 864
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
                              "start": 865,
                              "end": 866
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
                                "start": 870,
                                "end": 871
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "add",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 872,
                                "end": 875
                              },
                              "optional": false,
                              "computed": false,
                              "start": 870,
                              "end": 875
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
                                  "start": 876,
                                  "end": 878
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 879,
                                    "end": 880
                                  }
                                ],
                                "optional": false,
                                "start": 876,
                                "end": 881
                              }
                            ],
                            "optional": false,
                            "start": 870,
                            "end": 882
                          },
                          "id": null,
                          "generator": false,
                          "start": 865,
                          "end": 882
                        }
                      ],
                      "optional": false,
                      "start": 855,
                      "end": 883
                    },
                    "directive": null,
                    "start": 855,
                    "end": 884
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 896,
                      "end": 897
                    },
                    "start": 889,
                    "end": 898
                  }
                ],
                "start": 812,
                "end": 902
              },
              "id": null,
              "generator": false,
              "start": 795,
              "end": 902
            },
            "start": 788,
            "end": 902
          }
        ],
        "start": 784,
        "end": 904
      },
      "expression": false,
      "start": 721,
      "end": 904
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 915,
        "end": 921
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
              "start": 922,
              "end": 923
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 922,
            "end": 923
          }
        ],
        "start": 921,
        "end": 924
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
                        "start": 940,
                        "end": 941
                      },
                      "typeArguments": null,
                      "start": 940,
                      "end": 941
                    },
                    "start": 938,
                    "end": 941
                  },
                  "start": 937,
                  "end": 941
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 946,
                  "end": 953
                },
                "start": 943,
                "end": 953
              },
              "start": 936,
              "end": 953
            },
            "start": 934,
            "end": 953
          },
          "start": 925,
          "end": 953
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
                    "start": 960,
                    "end": 965
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
                          "start": 966,
                          "end": 967
                        },
                        "typeArguments": null,
                        "start": 966,
                        "end": 967
                      }
                    ],
                    "start": 965,
                    "end": 968
                  },
                  "start": 960,
                  "end": 968
                },
                "start": 958,
                "end": 968
              },
              "start": 957,
              "end": 968
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
                "start": 973,
                "end": 978
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
                      "start": 979,
                      "end": 980
                    },
                    "typeArguments": null,
                    "start": 979,
                    "end": 980
                  }
                ],
                "start": 978,
                "end": 981
              },
              "start": 973,
              "end": 981
            },
            "start": 970,
            "end": 981
          },
          "start": 956,
          "end": 981
        },
        "start": 954,
        "end": 981
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
                        "start": 997,
                        "end": 1002
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
                              "start": 1003,
                              "end": 1004
                            },
                            "typeArguments": null,
                            "start": 1003,
                            "end": 1004
                          }
                        ],
                        "start": 1002,
                        "end": 1005
                      },
                      "start": 997,
                      "end": 1005
                    },
                    "start": 995,
                    "end": 1005
                  },
                  "start": 994,
                  "end": 1005
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
                          "start": 1022,
                          "end": 1028
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1040
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
                                  "start": 1041,
                                  "end": 1042
                                },
                                "typeArguments": null,
                                "start": 1041,
                                "end": 1042
                              }
                            ],
                            "start": 1040,
                            "end": 1043
                          },
                          "arguments": [],
                          "start": 1031,
                          "end": 1045
                        },
                        "definite": false,
                        "start": 1022,
                        "end": 1045
                      }
                    ],
                    "declare": false,
                    "start": 1016,
                    "end": 1046
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
                          "start": 1051,
                          "end": 1052
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1053,
                          "end": 1060
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1051,
                        "end": 1060
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
                              "start": 1061,
                              "end": 1062
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
                                    "start": 1078,
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
                                  "start": 1078,
                                  "end": 1090
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
                                        "start": 1092,
                                        "end": 1098
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "add",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1099,
                                        "end": 1102
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1092,
                                      "end": 1102
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1103,
                                        "end": 1104
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1092,
                                    "end": 1105
                                  },
                                  "directive": null,
                                  "start": 1092,
                                  "end": 1106
                                },
                                "alternate": null,
                                "start": 1074,
                                "end": 1106
                              }
                            ],
                            "start": 1066,
                            "end": 1112
                          },
                          "id": null,
                          "generator": false,
                          "start": 1061,
                          "end": 1112
                        }
                      ],
                      "optional": false,
                      "start": 1051,
                      "end": 1113
                    },
                    "directive": null,
                    "start": 1051,
                    "end": 1114
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
                      "end": 1131
                    },
                    "start": 1118,
                    "end": 1132
                  }
                ],
                "start": 1010,
                "end": 1136
              },
              "id": null,
              "generator": false,
              "start": 993,
              "end": 1136
            },
            "start": 986,
            "end": 1136
          }
        ],
        "start": 982,
        "end": 1138
      },
      "expression": false,
      "start": 906,
      "end": 1138
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
            "start": 1146,
            "end": 1153
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SetOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1160,
              "end": 1165
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1166,
                  "end": 1172
                }
              ],
              "start": 1165,
              "end": 1173
            },
            "arguments": [],
            "start": 1156,
            "end": 1175
          },
          "definite": false,
          "start": 1146,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1140,
      "end": 1176
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
            "start": 1177,
            "end": 1184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1188
          },
          "optional": false,
          "computed": false,
          "start": 1177,
          "end": 1188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1189,
            "end": 1190
          }
        ],
        "optional": false,
        "start": 1177,
        "end": 1191
      },
      "directive": null,
      "start": 1177,
      "end": 1192
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
            "start": 1193,
            "end": 1200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1204
          },
          "optional": false,
          "computed": false,
          "start": 1193,
          "end": 1204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1205,
            "end": 1206
          }
        ],
        "optional": false,
        "start": 1193,
        "end": 1207
      },
      "directive": null,
      "start": 1193,
      "end": 1208
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
            "start": 1209,
            "end": 1216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1220
          },
          "optional": false,
          "computed": false,
          "start": 1209,
          "end": 1220
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1221,
            "end": 1222
          }
        ],
        "optional": false,
        "start": 1209,
        "end": 1223
      },
      "directive": null,
      "start": 1209,
      "end": 1224
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
            "start": 1226,
            "end": 1233
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "transform",
            "optional": false,
            "typeAnnotation": null,
            "start": 1234,
            "end": 1243
          },
          "optional": false,
          "computed": false,
          "start": 1226,
          "end": 1243
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
              "start": 1247,
              "end": 1254
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
                  "start": 1260,
                  "end": 1266
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
                        "start": 1267,
                        "end": 1268
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
                          "start": 1272,
                          "end": 1273
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1276,
                          "end": 1277
                        },
                        "start": 1272,
                        "end": 1277
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1282,
                        "end": 1283
                      },
                      "start": 1272,
                      "end": 1283
                    },
                    "id": null,
                    "generator": false,
                    "start": 1267,
                    "end": 1283
                  }
                ],
                "optional": false,
                "start": 1260,
                "end": 1284
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1290,
                  "end": 1293
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
                        "start": 1294,
                        "end": 1295
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
                        "start": 1299,
                        "end": 1300
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1303,
                        "end": 1304
                      },
                      "start": 1299,
                      "end": 1304
                    },
                    "id": null,
                    "generator": false,
                    "start": 1294,
                    "end": 1304
                  }
                ],
                "optional": false,
                "start": 1290,
                "end": 1305
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1314
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
                        "start": 1315,
                        "end": 1316
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
                        "start": 1320,
                        "end": 1321
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "!!!",
                        "raw": "'!!!'",
                        "start": 1324,
                        "end": 1329
                      },
                      "start": 1320,
                      "end": 1329
                    },
                    "id": null,
                    "generator": false,
                    "start": 1315,
                    "end": 1329
                  }
                ],
                "optional": false,
                "start": 1311,
                "end": 1330
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1339
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
                        "start": 1340,
                        "end": 1341
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
                          "start": 1345,
                          "end": 1346
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1347,
                          "end": 1358
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1345,
                        "end": 1358
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1345,
                      "end": 1360
                    },
                    "id": null,
                    "generator": false,
                    "start": 1340,
                    "end": 1360
                  }
                ],
                "optional": false,
                "start": 1336,
                "end": 1361
              }
            ],
            "optional": false,
            "start": 1247,
            "end": 1365
          }
        ],
        "optional": false,
        "start": 1226,
        "end": 1367
      },
      "directive": null,
      "start": 1226,
      "end": 1367
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
            "start": 1369,
            "end": 1376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "transform",
            "optional": false,
            "typeAnnotation": null,
            "start": 1377,
            "end": 1386
          },
          "optional": false,
          "computed": false,
          "start": 1369,
          "end": 1386
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
              "start": 1390,
              "end": 1397
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
                  "start": 1403,
                  "end": 1409
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
                        "start": 1410,
                        "end": 1411
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
                          "start": 1415,
                          "end": 1416
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1419,
                          "end": 1420
                        },
                        "start": 1415,
                        "end": 1420
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1425,
                        "end": 1426
                      },
                      "start": 1415,
                      "end": 1426
                    },
                    "id": null,
                    "generator": false,
                    "start": 1410,
                    "end": 1426
                  }
                ],
                "optional": false,
                "start": 1403,
                "end": 1427
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1436
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
                        "start": 1437,
                        "end": 1438
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
                        "start": 1442,
                        "end": 1443
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1446,
                        "end": 1447
                      },
                      "start": 1442,
                      "end": 1447
                    },
                    "id": null,
                    "generator": false,
                    "start": 1437,
                    "end": 1447
                  }
                ],
                "optional": false,
                "start": 1433,
                "end": 1448
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1454,
                  "end": 1457
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
                        "start": 1458,
                        "end": 1459
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 1463,
                      "end": 1466
                    },
                    "id": null,
                    "generator": false,
                    "start": 1458,
                    "end": 1466
                  }
                ],
                "optional": false,
                "start": 1454,
                "end": 1467
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1490,
                  "end": 1493
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
                        "start": 1494,
                        "end": 1495
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
                          "start": 1499,
                          "end": 1500
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1501,
                          "end": 1512
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1499,
                        "end": 1512
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1499,
                      "end": 1514
                    },
                    "id": null,
                    "generator": false,
                    "start": 1494,
                    "end": 1514
                  }
                ],
                "optional": false,
                "start": 1490,
                "end": 1515
              }
            ],
            "optional": false,
            "start": 1390,
            "end": 1539
          }
        ],
        "optional": false,
        "start": 1369,
        "end": 1541
      },
      "directive": null,
      "start": 1369,
      "end": 1541
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 1541
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 108,
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
    "value": "A",
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
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "_store",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "add",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 141,
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
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "_store",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 181,
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
    "value": "B",
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
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "transformer",
    "start": 194,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "SetOf",
    "start": 235,
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
    "value": "B",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 250,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "transformer",
    "start": 257,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 302,
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
    "value": "number",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 317,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "_store",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "i",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 382,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 391,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 405,
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
    "value": "D",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "fnA",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 426,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "fnB",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "SetOf",
    "start": 461,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 471,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "fnC",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 503,
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
    "value": "=>",
    "start": 506,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 509,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "fnD",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "SetOf",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 540,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 559,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 569,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 600,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 609,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "fns",
    "start": 623,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 636,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 653,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 676,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "fns",
    "start": 679,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 683,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
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
    "value": "prev",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 701,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
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
    "value": "x",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 721,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 730,
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
    "value": "A",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "B",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 762,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 772,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 775,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 799,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 809,
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
    "value": "const",
    "start": 818,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 827,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 838,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 842,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 857,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 867,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 889,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 906,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 925,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 943,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 946,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 970,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 973,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 986,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1016,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1022,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1074,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 1078,
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
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1140,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 1146,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "SetOf",
    "start": 1160,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1166,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 1177,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1185,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 1193,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 1209,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 1226,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 1234,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 1247,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1260,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1278,
    "end": 1281
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1290,
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
    "value": "x",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "String",
    "value": "'!!!'",
    "start": 1324,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "x",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1347,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "testSet",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 1377,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 1390,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "x",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1433,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1439,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1460,
    "end": 1462
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1496,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1501,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1540,
    "end": 1541
  }
]
```

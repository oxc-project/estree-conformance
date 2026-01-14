__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassTypeParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 138
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
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
                    "start": 156,
                    "end": 157
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 156,
                  "end": 157
                }
              ],
              "start": 155,
              "end": 158
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 179
                          },
                          "typeArguments": null,
                          "start": 178,
                          "end": 179
                        },
                        "start": 175,
                        "end": 179
                      },
                      "start": 172,
                      "end": 179
                    },
                    "start": 170,
                    "end": 179
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
                  "start": 169,
                  "end": 180
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 191
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
                          "name": "x",
                          "optional": true,
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
                                "start": 198,
                                "end": 199
                              },
                              "typeArguments": null,
                              "start": 198,
                              "end": 199
                            },
                            "start": 196,
                            "end": 199
                          },
                          "start": 194,
                          "end": 199
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
                            "start": 204,
                            "end": 205
                          },
                          "typeArguments": null,
                          "start": 204,
                          "end": 205
                        },
                        "start": 201,
                        "end": 205
                      },
                      "start": 193,
                      "end": 205
                    },
                    "start": 191,
                    "end": 205
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
                  "start": 189,
                  "end": 206
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 217
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
                                "start": 223,
                                "end": 224
                              },
                              "typeArguments": null,
                              "start": 223,
                              "end": 224
                            },
                            "start": 221,
                            "end": 224
                          },
                          "start": 220,
                          "end": 224
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
                            "start": 229,
                            "end": 230
                          },
                          "typeArguments": null,
                          "start": 229,
                          "end": 230
                        },
                        "start": 226,
                        "end": 230
                      },
                      "start": 219,
                      "end": 230
                    },
                    "start": 217,
                    "end": 230
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
                  "start": 215,
                  "end": 231
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 242
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
                                "start": 248,
                                "end": 249
                              },
                              "typeArguments": null,
                              "start": 248,
                              "end": 249
                            },
                            "start": 246,
                            "end": 249
                          },
                          "start": 245,
                          "end": 249
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 255,
                                "end": 256
                              },
                              "typeArguments": null,
                              "start": 255,
                              "end": 256
                            },
                            "start": 253,
                            "end": 256
                          },
                          "start": 251,
                          "end": 256
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
                            "start": 261,
                            "end": 262
                          },
                          "typeArguments": null,
                          "start": 261,
                          "end": 262
                        },
                        "start": 258,
                        "end": 262
                      },
                      "start": 244,
                      "end": 262
                    },
                    "start": 242,
                    "end": 262
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
                  "start": 240,
                  "end": 263
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 274
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
                          "name": "x",
                          "optional": true,
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
                                "start": 281,
                                "end": 282
                              },
                              "typeArguments": null,
                              "start": 281,
                              "end": 282
                            },
                            "start": 279,
                            "end": 282
                          },
                          "start": 277,
                          "end": 282
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                          "start": 284,
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 294,
                            "end": 295
                          },
                          "typeArguments": null,
                          "start": 294,
                          "end": 295
                        },
                        "start": 291,
                        "end": 295
                      },
                      "start": 276,
                      "end": 295
                    },
                    "start": 274,
                    "end": 295
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
                  "start": 272,
                  "end": 296
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 310
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
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
                                "type": "ThisExpression",
                                "start": 333,
                                "end": 337
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 338,
                                "end": 339
                              },
                              "optional": false,
                              "computed": false,
                              "start": 333,
                              "end": 339
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 348,
                                "end": 352
                              },
                              "id": null,
                              "generator": false,
                              "start": 342,
                              "end": 352
                            },
                            "start": 333,
                            "end": 352
                          },
                          "directive": null,
                          "start": 333,
                          "end": 353
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 399,
                                "end": 403
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 404,
                                "end": 405
                              },
                              "optional": false,
                              "computed": false,
                              "start": 399,
                              "end": 405
                            },
                            "right": {
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
                                        "start": 413,
                                        "end": 414
                                      },
                                      "typeArguments": null,
                                      "start": 413,
                                      "end": 414
                                    },
                                    "start": 411,
                                    "end": 414
                                  },
                                  "start": 409,
                                  "end": 414
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 419,
                                "end": 423
                              },
                              "id": null,
                              "generator": false,
                              "start": 408,
                              "end": 423
                            },
                            "start": 399,
                            "end": 423
                          },
                          "directive": null,
                          "start": 399,
                          "end": 424
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 470,
                                "end": 474
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 475,
                                "end": 476
                              },
                              "optional": false,
                              "computed": false,
                              "start": 470,
                              "end": 476
                            },
                            "right": {
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
                                        "start": 483,
                                        "end": 484
                                      },
                                      "typeArguments": null,
                                      "start": 483,
                                      "end": 484
                                    },
                                    "start": 481,
                                    "end": 484
                                  },
                                  "start": 480,
                                  "end": 484
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 489,
                                "end": 493
                              },
                              "id": null,
                              "generator": false,
                              "start": 479,
                              "end": 493
                            },
                            "start": 470,
                            "end": 493
                          },
                          "directive": null,
                          "start": 470,
                          "end": 494
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 543,
                                "end": 547
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 548,
                                "end": 550
                              },
                              "optional": false,
                              "computed": false,
                              "start": 543,
                              "end": 550
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 559,
                                "end": 563
                              },
                              "id": null,
                              "generator": false,
                              "start": 553,
                              "end": 563
                            },
                            "start": 543,
                            "end": 563
                          },
                          "directive": null,
                          "start": 543,
                          "end": 564
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 610,
                                "end": 614
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 615,
                                "end": 617
                              },
                              "optional": false,
                              "computed": false,
                              "start": 610,
                              "end": 617
                            },
                            "right": {
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
                                        "start": 625,
                                        "end": 626
                                      },
                                      "typeArguments": null,
                                      "start": 625,
                                      "end": 626
                                    },
                                    "start": 623,
                                    "end": 626
                                  },
                                  "start": 621,
                                  "end": 626
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 631,
                                "end": 635
                              },
                              "id": null,
                              "generator": false,
                              "start": 620,
                              "end": 635
                            },
                            "start": 610,
                            "end": 635
                          },
                          "directive": null,
                          "start": 610,
                          "end": 636
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 682,
                                "end": 686
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 687,
                                "end": 689
                              },
                              "optional": false,
                              "computed": false,
                              "start": 682,
                              "end": 689
                            },
                            "right": {
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
                                        "start": 696,
                                        "end": 697
                                      },
                                      "typeArguments": null,
                                      "start": 696,
                                      "end": 697
                                    },
                                    "start": 694,
                                    "end": 697
                                  },
                                  "start": 693,
                                  "end": 697
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 702,
                                "end": 706
                              },
                              "id": null,
                              "generator": false,
                              "start": 692,
                              "end": 706
                            },
                            "start": 682,
                            "end": 706
                          },
                          "directive": null,
                          "start": 682,
                          "end": 707
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 750,
                                "end": 754
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 755,
                                "end": 757
                              },
                              "optional": false,
                              "computed": false,
                              "start": 750,
                              "end": 757
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 766,
                                "end": 770
                              },
                              "id": null,
                              "generator": false,
                              "start": 760,
                              "end": 770
                            },
                            "start": 750,
                            "end": 770
                          },
                          "directive": null,
                          "start": 750,
                          "end": 771
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 813,
                                "end": 817
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 818,
                                "end": 820
                              },
                              "optional": false,
                              "computed": false,
                              "start": 813,
                              "end": 820
                            },
                            "right": {
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
                                        "start": 828,
                                        "end": 829
                                      },
                                      "typeArguments": null,
                                      "start": 828,
                                      "end": 829
                                    },
                                    "start": 826,
                                    "end": 829
                                  },
                                  "start": 824,
                                  "end": 829
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 834,
                                "end": 838
                              },
                              "id": null,
                              "generator": false,
                              "start": 823,
                              "end": 838
                            },
                            "start": 813,
                            "end": 838
                          },
                          "directive": null,
                          "start": 813,
                          "end": 839
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 881,
                                "end": 885
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 886,
                                "end": 888
                              },
                              "optional": false,
                              "computed": false,
                              "start": 881,
                              "end": 888
                            },
                            "right": {
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
                                        "start": 895,
                                        "end": 896
                                      },
                                      "typeArguments": null,
                                      "start": 895,
                                      "end": 896
                                    },
                                    "start": 893,
                                    "end": 896
                                  },
                                  "start": 892,
                                  "end": 896
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 901,
                                "end": 905
                              },
                              "id": null,
                              "generator": false,
                              "start": 891,
                              "end": 905
                            },
                            "start": 881,
                            "end": 905
                          },
                          "directive": null,
                          "start": 881,
                          "end": 906
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 952,
                                "end": 956
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 957,
                                "end": 959
                              },
                              "optional": false,
                              "computed": false,
                              "start": 952,
                              "end": 959
                            },
                            "right": {
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
                                        "start": 966,
                                        "end": 967
                                      },
                                      "typeArguments": null,
                                      "start": 966,
                                      "end": 967
                                    },
                                    "start": 964,
                                    "end": 967
                                  },
                                  "start": 963,
                                  "end": 967
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 972,
                                        "end": 973
                                      },
                                      "typeArguments": null,
                                      "start": 972,
                                      "end": 973
                                    },
                                    "start": 970,
                                    "end": 973
                                  },
                                  "start": 969,
                                  "end": 973
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 978,
                                "end": 982
                              },
                              "id": null,
                              "generator": false,
                              "start": 962,
                              "end": 982
                            },
                            "start": 952,
                            "end": 982
                          },
                          "directive": null,
                          "start": 952,
                          "end": 983
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1033,
                                "end": 1037
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1038,
                                "end": 1040
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1033,
                              "end": 1040
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1049,
                                "end": 1053
                              },
                              "id": null,
                              "generator": false,
                              "start": 1043,
                              "end": 1053
                            },
                            "start": 1033,
                            "end": 1053
                          },
                          "directive": null,
                          "start": 1033,
                          "end": 1054
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1096,
                                "end": 1100
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1101,
                                "end": 1103
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1096,
                              "end": 1103
                            },
                            "right": {
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
                                        "start": 1111,
                                        "end": 1112
                                      },
                                      "typeArguments": null,
                                      "start": 1111,
                                      "end": 1112
                                    },
                                    "start": 1109,
                                    "end": 1112
                                  },
                                  "start": 1107,
                                  "end": 1112
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 1118,
                                        "end": 1119
                                      },
                                      "typeArguments": null,
                                      "start": 1118,
                                      "end": 1119
                                    },
                                    "start": 1116,
                                    "end": 1119
                                  },
                                  "start": 1114,
                                  "end": 1119
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1124,
                                "end": 1128
                              },
                              "id": null,
                              "generator": false,
                              "start": 1106,
                              "end": 1128
                            },
                            "start": 1096,
                            "end": 1128
                          },
                          "directive": null,
                          "start": 1096,
                          "end": 1129
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1171,
                                "end": 1175
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1176,
                                "end": 1178
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1171,
                              "end": 1178
                            },
                            "right": {
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
                                        "start": 1185,
                                        "end": 1186
                                      },
                                      "typeArguments": null,
                                      "start": 1185,
                                      "end": 1186
                                    },
                                    "start": 1183,
                                    "end": 1186
                                  },
                                  "start": 1182,
                                  "end": 1186
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1191,
                                "end": 1195
                              },
                              "id": null,
                              "generator": false,
                              "start": 1181,
                              "end": 1195
                            },
                            "start": 1171,
                            "end": 1195
                          },
                          "directive": null,
                          "start": 1171,
                          "end": 1196
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1242,
                                "end": 1246
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1247,
                                "end": 1249
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1242,
                              "end": 1249
                            },
                            "right": {
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
                                  "name": "y",
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
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1268,
                                "end": 1272
                              },
                              "id": null,
                              "generator": false,
                              "start": 1252,
                              "end": 1272
                            },
                            "start": 1242,
                            "end": 1272
                          },
                          "directive": null,
                          "start": 1242,
                          "end": 1273
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1318,
                                "end": 1322
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1323,
                                "end": 1325
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1318,
                              "end": 1325
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1334,
                                "end": 1338
                              },
                              "id": null,
                              "generator": false,
                              "start": 1328,
                              "end": 1338
                            },
                            "start": 1318,
                            "end": 1338
                          },
                          "directive": null,
                          "start": 1318,
                          "end": 1339
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1381,
                                "end": 1385
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1386,
                                "end": 1388
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1381,
                              "end": 1388
                            },
                            "right": {
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
                                        "start": 1396,
                                        "end": 1397
                                      },
                                      "typeArguments": null,
                                      "start": 1396,
                                      "end": 1397
                                    },
                                    "start": 1394,
                                    "end": 1397
                                  },
                                  "start": 1392,
                                  "end": 1397
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 1403,
                                        "end": 1404
                                      },
                                      "typeArguments": null,
                                      "start": 1403,
                                      "end": 1404
                                    },
                                    "start": 1401,
                                    "end": 1404
                                  },
                                  "start": 1399,
                                  "end": 1404
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1409,
                                "end": 1413
                              },
                              "id": null,
                              "generator": false,
                              "start": 1391,
                              "end": 1413
                            },
                            "start": 1381,
                            "end": 1413
                          },
                          "directive": null,
                          "start": 1381,
                          "end": 1414
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1456,
                                "end": 1460
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1461,
                                "end": 1463
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1456,
                              "end": 1463
                            },
                            "right": {
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
                                        "start": 1470,
                                        "end": 1471
                                      },
                                      "typeArguments": null,
                                      "start": 1470,
                                      "end": 1471
                                    },
                                    "start": 1468,
                                    "end": 1471
                                  },
                                  "start": 1467,
                                  "end": 1471
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1476,
                                "end": 1480
                              },
                              "id": null,
                              "generator": false,
                              "start": 1466,
                              "end": 1480
                            },
                            "start": 1456,
                            "end": 1480
                          },
                          "directive": null,
                          "start": 1456,
                          "end": 1481
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1526,
                                "end": 1530
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1531,
                                "end": 1533
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1526,
                              "end": 1533
                            },
                            "right": {
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
                                        "start": 1540,
                                        "end": 1541
                                      },
                                      "typeArguments": null,
                                      "start": 1540,
                                      "end": 1541
                                    },
                                    "start": 1538,
                                    "end": 1541
                                  },
                                  "start": 1537,
                                  "end": 1541
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1546,
                                        "end": 1547
                                      },
                                      "typeArguments": null,
                                      "start": 1546,
                                      "end": 1547
                                    },
                                    "start": 1544,
                                    "end": 1547
                                  },
                                  "start": 1543,
                                  "end": 1547
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1552,
                                "end": 1556
                              },
                              "id": null,
                              "generator": false,
                              "start": 1536,
                              "end": 1556
                            },
                            "start": 1526,
                            "end": 1556
                          },
                          "directive": null,
                          "start": 1526,
                          "end": 1557
                        }
                      ],
                      "start": 319,
                      "end": 1597
                    },
                    "id": null,
                    "generator": false,
                    "start": 313,
                    "end": 1597
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 306,
                  "end": 1597
                }
              ],
              "start": 159,
              "end": 1603
            },
            "abstract": false,
            "declare": false,
            "start": 145,
            "end": 1603
          }
        ],
        "start": 139,
        "end": 1605
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 114,
      "end": 1605
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesInvalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1641
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1655,
              "end": 1660
            },
            "typeParameters": null,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1671,
                    "end": 1672
                  },
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
                              "start": 1675,
                              "end": 1676
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1675,
                            "end": 1676
                          }
                        ],
                        "start": 1674,
                        "end": 1677
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
                            "start": 1683,
                            "end": 1684
                          },
                          "typeArguments": null,
                          "start": 1683,
                          "end": 1684
                        },
                        "start": 1680,
                        "end": 1684
                      },
                      "start": 1674,
                      "end": 1684
                    },
                    "start": 1672,
                    "end": 1684
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
                  "start": 1671,
                  "end": 1685
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1694,
                    "end": 1696
                  },
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
                              "start": 1699,
                              "end": 1700
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1699,
                            "end": 1700
                          }
                        ],
                        "start": 1698,
                        "end": 1701
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1706,
                                "end": 1707
                              },
                              "typeArguments": null,
                              "start": 1706,
                              "end": 1707
                            },
                            "start": 1704,
                            "end": 1707
                          },
                          "start": 1702,
                          "end": 1707
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
                            "start": 1712,
                            "end": 1713
                          },
                          "typeArguments": null,
                          "start": 1712,
                          "end": 1713
                        },
                        "start": 1709,
                        "end": 1713
                      },
                      "start": 1698,
                      "end": 1713
                    },
                    "start": 1696,
                    "end": 1713
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
                  "start": 1694,
                  "end": 1714
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1723,
                    "end": 1725
                  },
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
                              "start": 1728,
                              "end": 1729
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1728,
                            "end": 1729
                          }
                        ],
                        "start": 1727,
                        "end": 1730
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
                                "start": 1734,
                                "end": 1735
                              },
                              "typeArguments": null,
                              "start": 1734,
                              "end": 1735
                            },
                            "start": 1732,
                            "end": 1735
                          },
                          "start": 1731,
                          "end": 1735
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
                            "start": 1740,
                            "end": 1741
                          },
                          "typeArguments": null,
                          "start": 1740,
                          "end": 1741
                        },
                        "start": 1737,
                        "end": 1741
                      },
                      "start": 1727,
                      "end": 1741
                    },
                    "start": 1725,
                    "end": 1741
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
                  "start": 1723,
                  "end": 1742
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1751,
                    "end": 1753
                  },
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
                              "start": 1756,
                              "end": 1757
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1756,
                            "end": 1757
                          }
                        ],
                        "start": 1755,
                        "end": 1758
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
                                "start": 1762,
                                "end": 1763
                              },
                              "typeArguments": null,
                              "start": 1762,
                              "end": 1763
                            },
                            "start": 1760,
                            "end": 1763
                          },
                          "start": 1759,
                          "end": 1763
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1769,
                                "end": 1770
                              },
                              "typeArguments": null,
                              "start": 1769,
                              "end": 1770
                            },
                            "start": 1767,
                            "end": 1770
                          },
                          "start": 1765,
                          "end": 1770
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
                            "start": 1775,
                            "end": 1776
                          },
                          "typeArguments": null,
                          "start": 1775,
                          "end": 1776
                        },
                        "start": 1772,
                        "end": 1776
                      },
                      "start": 1755,
                      "end": 1776
                    },
                    "start": 1753,
                    "end": 1776
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
                  "start": 1751,
                  "end": 1777
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1786,
                    "end": 1788
                  },
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
                              "start": 1791,
                              "end": 1792
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1791,
                            "end": 1792
                          }
                        ],
                        "start": 1790,
                        "end": 1793
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1798,
                                "end": 1799
                              },
                              "typeArguments": null,
                              "start": 1798,
                              "end": 1799
                            },
                            "start": 1796,
                            "end": 1799
                          },
                          "start": 1794,
                          "end": 1799
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1805,
                                "end": 1806
                              },
                              "typeArguments": null,
                              "start": 1805,
                              "end": 1806
                            },
                            "start": 1803,
                            "end": 1806
                          },
                          "start": 1801,
                          "end": 1806
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
                            "start": 1811,
                            "end": 1812
                          },
                          "typeArguments": null,
                          "start": 1811,
                          "end": 1812
                        },
                        "start": 1808,
                        "end": 1812
                      },
                      "start": 1790,
                      "end": 1812
                    },
                    "start": 1788,
                    "end": 1812
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
                  "start": 1786,
                  "end": 1813
                }
              ],
              "start": 1661,
              "end": 1819
            },
            "abstract": false,
            "declare": false,
            "start": 1649,
            "end": 1819
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Target",
              "optional": false,
              "typeAnnotation": null,
              "start": 1831,
              "end": 1837
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
                    "start": 1838,
                    "end": 1839
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1838,
                  "end": 1839
                }
              ],
              "start": 1837,
              "end": 1840
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1851,
                    "end": 1852
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1860,
                            "end": 1861
                          },
                          "typeArguments": null,
                          "start": 1860,
                          "end": 1861
                        },
                        "start": 1857,
                        "end": 1861
                      },
                      "start": 1854,
                      "end": 1861
                    },
                    "start": 1852,
                    "end": 1861
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
                  "start": 1851,
                  "end": 1862
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1871,
                    "end": 1873
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
                          "name": "x",
                          "optional": true,
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
                                "start": 1880,
                                "end": 1881
                              },
                              "typeArguments": null,
                              "start": 1880,
                              "end": 1881
                            },
                            "start": 1878,
                            "end": 1881
                          },
                          "start": 1876,
                          "end": 1881
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
                            "start": 1886,
                            "end": 1887
                          },
                          "typeArguments": null,
                          "start": 1886,
                          "end": 1887
                        },
                        "start": 1883,
                        "end": 1887
                      },
                      "start": 1875,
                      "end": 1887
                    },
                    "start": 1873,
                    "end": 1887
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
                  "start": 1871,
                  "end": 1888
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1897,
                    "end": 1899
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
                                "start": 1905,
                                "end": 1906
                              },
                              "typeArguments": null,
                              "start": 1905,
                              "end": 1906
                            },
                            "start": 1903,
                            "end": 1906
                          },
                          "start": 1902,
                          "end": 1906
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
                            "start": 1911,
                            "end": 1912
                          },
                          "typeArguments": null,
                          "start": 1911,
                          "end": 1912
                        },
                        "start": 1908,
                        "end": 1912
                      },
                      "start": 1901,
                      "end": 1912
                    },
                    "start": 1899,
                    "end": 1912
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
                  "start": 1897,
                  "end": 1913
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1922,
                    "end": 1924
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
                                "start": 1930,
                                "end": 1931
                              },
                              "typeArguments": null,
                              "start": 1930,
                              "end": 1931
                            },
                            "start": 1928,
                            "end": 1931
                          },
                          "start": 1927,
                          "end": 1931
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1937,
                                "end": 1938
                              },
                              "typeArguments": null,
                              "start": 1937,
                              "end": 1938
                            },
                            "start": 1935,
                            "end": 1938
                          },
                          "start": 1933,
                          "end": 1938
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
                            "start": 1943,
                            "end": 1944
                          },
                          "typeArguments": null,
                          "start": 1943,
                          "end": 1944
                        },
                        "start": 1940,
                        "end": 1944
                      },
                      "start": 1926,
                      "end": 1944
                    },
                    "start": 1924,
                    "end": 1944
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
                  "start": 1922,
                  "end": 1945
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1954,
                    "end": 1956
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
                          "name": "x",
                          "optional": true,
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
                                "start": 1963,
                                "end": 1964
                              },
                              "typeArguments": null,
                              "start": 1963,
                              "end": 1964
                            },
                            "start": 1961,
                            "end": 1964
                          },
                          "start": 1959,
                          "end": 1964
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1970,
                                "end": 1971
                              },
                              "typeArguments": null,
                              "start": 1970,
                              "end": 1971
                            },
                            "start": 1968,
                            "end": 1971
                          },
                          "start": 1966,
                          "end": 1971
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
                            "start": 1976,
                            "end": 1977
                          },
                          "typeArguments": null,
                          "start": 1976,
                          "end": 1977
                        },
                        "start": 1973,
                        "end": 1977
                      },
                      "start": 1958,
                      "end": 1977
                    },
                    "start": 1956,
                    "end": 1977
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
                  "start": 1954,
                  "end": 1978
                }
              ],
              "start": 1841,
              "end": 1984
            },
            "abstract": false,
            "declare": false,
            "start": 1825,
            "end": 1984
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2000,
              "end": 2003
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
                    "start": 2004,
                    "end": 2005
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2004,
                  "end": 2005
                }
              ],
              "start": 2003,
              "end": 2006
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2027,
                              "end": 2032
                            },
                            "typeArguments": null,
                            "start": 2027,
                            "end": 2032
                          },
                          "start": 2025,
                          "end": 2032
                        },
                        "start": 2023,
                        "end": 2032
                      },
                      "init": null,
                      "definite": true,
                      "start": 2023,
                      "end": 2032
                    }
                  ],
                  "declare": false,
                  "start": 2019,
                  "end": 2033
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Target",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2050,
                              "end": 2056
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
                                    "start": 2057,
                                    "end": 2058
                                  },
                                  "typeArguments": null,
                                  "start": 2057,
                                  "end": 2058
                                }
                              ],
                              "start": 2056,
                              "end": 2059
                            },
                            "start": 2050,
                            "end": 2059
                          },
                          "start": 2048,
                          "end": 2059
                        },
                        "start": 2046,
                        "end": 2059
                      },
                      "init": null,
                      "definite": true,
                      "start": 2046,
                      "end": 2059
                    }
                  ],
                  "declare": false,
                  "start": 2042,
                  "end": 2060
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2092,
                        "end": 2093
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2094,
                        "end": 2095
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2092,
                      "end": 2095
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2098,
                        "end": 2099
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2100,
                        "end": 2101
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2098,
                      "end": 2101
                    },
                    "start": 2092,
                    "end": 2101
                  },
                  "directive": null,
                  "start": 2092,
                  "end": 2102
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2111,
                        "end": 2112
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2113,
                        "end": 2114
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2111,
                      "end": 2114
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2117,
                        "end": 2118
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2119,
                        "end": 2121
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2117,
                      "end": 2121
                    },
                    "start": 2111,
                    "end": 2121
                  },
                  "directive": null,
                  "start": 2111,
                  "end": 2122
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2131,
                        "end": 2132
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2133,
                        "end": 2134
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2131,
                      "end": 2134
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2137,
                        "end": 2138
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2139,
                        "end": 2141
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2137,
                      "end": 2141
                    },
                    "start": 2131,
                    "end": 2141
                  },
                  "directive": null,
                  "start": 2131,
                  "end": 2142
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2151,
                        "end": 2152
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2153,
                        "end": 2154
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2151,
                      "end": 2154
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2157,
                        "end": 2158
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2159,
                        "end": 2161
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2157,
                      "end": 2161
                    },
                    "start": 2151,
                    "end": 2161
                  },
                  "directive": null,
                  "start": 2151,
                  "end": 2162
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2171,
                        "end": 2172
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2173,
                        "end": 2174
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2171,
                      "end": 2174
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2177,
                        "end": 2178
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2179,
                        "end": 2181
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2177,
                      "end": 2181
                    },
                    "start": 2171,
                    "end": 2181
                  },
                  "directive": null,
                  "start": 2171,
                  "end": 2182
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2192,
                        "end": 2193
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2194,
                        "end": 2196
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2192,
                      "end": 2196
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2199,
                        "end": 2200
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2201,
                        "end": 2202
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2199,
                      "end": 2202
                    },
                    "start": 2192,
                    "end": 2202
                  },
                  "directive": null,
                  "start": 2192,
                  "end": 2203
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2212,
                        "end": 2213
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2214,
                        "end": 2216
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2212,
                      "end": 2216
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2219,
                        "end": 2220
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2221,
                        "end": 2223
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2219,
                      "end": 2223
                    },
                    "start": 2212,
                    "end": 2223
                  },
                  "directive": null,
                  "start": 2212,
                  "end": 2224
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2233,
                        "end": 2234
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2235,
                        "end": 2237
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2233,
                      "end": 2237
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2240,
                        "end": 2241
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2242,
                        "end": 2244
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2240,
                      "end": 2244
                    },
                    "start": 2233,
                    "end": 2244
                  },
                  "directive": null,
                  "start": 2233,
                  "end": 2245
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2254,
                        "end": 2255
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2256,
                        "end": 2258
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2254,
                      "end": 2258
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2261,
                        "end": 2262
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2263,
                        "end": 2265
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2261,
                      "end": 2265
                    },
                    "start": 2254,
                    "end": 2265
                  },
                  "directive": null,
                  "start": 2254,
                  "end": 2266
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2275,
                        "end": 2276
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2277,
                        "end": 2279
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2275,
                      "end": 2279
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2282,
                        "end": 2283
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2284,
                        "end": 2286
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2282,
                      "end": 2286
                    },
                    "start": 2275,
                    "end": 2286
                  },
                  "directive": null,
                  "start": 2275,
                  "end": 2287
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2297,
                        "end": 2298
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2299,
                        "end": 2301
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2297,
                      "end": 2301
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2304,
                        "end": 2305
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2306,
                        "end": 2307
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2304,
                      "end": 2307
                    },
                    "start": 2297,
                    "end": 2307
                  },
                  "directive": null,
                  "start": 2297,
                  "end": 2308
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2317,
                        "end": 2318
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2319,
                        "end": 2321
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2317,
                      "end": 2321
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2324,
                        "end": 2325
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2326,
                        "end": 2328
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2324,
                      "end": 2328
                    },
                    "start": 2317,
                    "end": 2328
                  },
                  "directive": null,
                  "start": 2317,
                  "end": 2329
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2338,
                        "end": 2339
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2340,
                        "end": 2342
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2338,
                      "end": 2342
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2345,
                        "end": 2346
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2347,
                        "end": 2349
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2345,
                      "end": 2349
                    },
                    "start": 2338,
                    "end": 2349
                  },
                  "directive": null,
                  "start": 2338,
                  "end": 2350
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2359,
                        "end": 2360
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2361,
                        "end": 2363
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2359,
                      "end": 2363
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2366,
                        "end": 2367
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2368,
                        "end": 2370
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2366,
                      "end": 2370
                    },
                    "start": 2359,
                    "end": 2370
                  },
                  "directive": null,
                  "start": 2359,
                  "end": 2371
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2380,
                        "end": 2381
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2382,
                        "end": 2384
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2380,
                      "end": 2384
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2387,
                        "end": 2388
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2389,
                        "end": 2391
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2387,
                      "end": 2391
                    },
                    "start": 2380,
                    "end": 2391
                  },
                  "directive": null,
                  "start": 2380,
                  "end": 2392
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2402,
                        "end": 2403
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2404,
                        "end": 2406
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2402,
                      "end": 2406
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2409,
                        "end": 2410
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2411,
                        "end": 2412
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2409,
                      "end": 2412
                    },
                    "start": 2402,
                    "end": 2412
                  },
                  "directive": null,
                  "start": 2402,
                  "end": 2413
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2422,
                        "end": 2423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2424,
                        "end": 2426
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2422,
                      "end": 2426
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2429,
                        "end": 2430
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2431,
                        "end": 2433
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2429,
                      "end": 2433
                    },
                    "start": 2422,
                    "end": 2433
                  },
                  "directive": null,
                  "start": 2422,
                  "end": 2434
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2443,
                        "end": 2444
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2445,
                        "end": 2447
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2443,
                      "end": 2447
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2450,
                        "end": 2451
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2452,
                        "end": 2454
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2450,
                      "end": 2454
                    },
                    "start": 2443,
                    "end": 2454
                  },
                  "directive": null,
                  "start": 2443,
                  "end": 2455
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2464,
                        "end": 2465
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2466,
                        "end": 2468
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2464,
                      "end": 2468
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2471,
                        "end": 2472
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2475
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2471,
                      "end": 2475
                    },
                    "start": 2464,
                    "end": 2475
                  },
                  "directive": null,
                  "start": 2464,
                  "end": 2476
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2485,
                        "end": 2486
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2487,
                        "end": 2489
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2485,
                      "end": 2489
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2492,
                        "end": 2493
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2494,
                        "end": 2496
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2492,
                      "end": 2496
                    },
                    "start": 2485,
                    "end": 2496
                  },
                  "directive": null,
                  "start": 2485,
                  "end": 2497
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2507,
                        "end": 2508
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2509,
                        "end": 2511
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2507,
                      "end": 2511
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2514,
                        "end": 2515
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2516,
                        "end": 2517
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2514,
                      "end": 2517
                    },
                    "start": 2507,
                    "end": 2517
                  },
                  "directive": null,
                  "start": 2507,
                  "end": 2518
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2527,
                        "end": 2528
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2529,
                        "end": 2531
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2527,
                      "end": 2531
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2534,
                        "end": 2535
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2536,
                        "end": 2538
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2534,
                      "end": 2538
                    },
                    "start": 2527,
                    "end": 2538
                  },
                  "directive": null,
                  "start": 2527,
                  "end": 2539
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2548,
                        "end": 2549
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2550,
                        "end": 2552
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2548,
                      "end": 2552
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2555,
                        "end": 2556
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2557,
                        "end": 2559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2555,
                      "end": 2559
                    },
                    "start": 2548,
                    "end": 2559
                  },
                  "directive": null,
                  "start": 2548,
                  "end": 2560
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2569,
                        "end": 2570
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2571,
                        "end": 2573
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2569,
                      "end": 2573
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2576,
                        "end": 2577
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2578,
                        "end": 2580
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2576,
                      "end": 2580
                    },
                    "start": 2569,
                    "end": 2580
                  },
                  "directive": null,
                  "start": 2569,
                  "end": 2581
                },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2590,
                        "end": 2591
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2592,
                        "end": 2594
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2590,
                      "end": 2594
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2597,
                        "end": 2598
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2599,
                        "end": 2601
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2597,
                      "end": 2601
                    },
                    "start": 2590,
                    "end": 2601
                  },
                  "directive": null,
                  "start": 2590,
                  "end": 2602
                }
              ],
              "start": 2009,
              "end": 2608
            },
            "expression": false,
            "start": 1991,
            "end": 2608
          }
        ],
        "start": 1642,
        "end": 2610
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1607,
      "end": 2610
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesValid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2622,
        "end": 2644
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2658,
              "end": 2663
            },
            "typeParameters": null,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2674,
                    "end": 2675
                  },
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
                              "start": 2678,
                              "end": 2679
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2678,
                            "end": 2679
                          }
                        ],
                        "start": 2677,
                        "end": 2680
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
                            "start": 2686,
                            "end": 2687
                          },
                          "typeArguments": null,
                          "start": 2686,
                          "end": 2687
                        },
                        "start": 2683,
                        "end": 2687
                      },
                      "start": 2677,
                      "end": 2687
                    },
                    "start": 2675,
                    "end": 2687
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
                  "start": 2674,
                  "end": 2688
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2697,
                    "end": 2699
                  },
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
                              "start": 2702,
                              "end": 2703
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2702,
                            "end": 2703
                          }
                        ],
                        "start": 2701,
                        "end": 2704
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2709,
                                "end": 2710
                              },
                              "typeArguments": null,
                              "start": 2709,
                              "end": 2710
                            },
                            "start": 2707,
                            "end": 2710
                          },
                          "start": 2705,
                          "end": 2710
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
                            "start": 2715,
                            "end": 2716
                          },
                          "typeArguments": null,
                          "start": 2715,
                          "end": 2716
                        },
                        "start": 2712,
                        "end": 2716
                      },
                      "start": 2701,
                      "end": 2716
                    },
                    "start": 2699,
                    "end": 2716
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
                  "start": 2697,
                  "end": 2717
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2726,
                    "end": 2728
                  },
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
                              "start": 2731,
                              "end": 2732
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2731,
                            "end": 2732
                          }
                        ],
                        "start": 2730,
                        "end": 2733
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
                                "start": 2737,
                                "end": 2738
                              },
                              "typeArguments": null,
                              "start": 2737,
                              "end": 2738
                            },
                            "start": 2735,
                            "end": 2738
                          },
                          "start": 2734,
                          "end": 2738
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
                            "start": 2743,
                            "end": 2744
                          },
                          "typeArguments": null,
                          "start": 2743,
                          "end": 2744
                        },
                        "start": 2740,
                        "end": 2744
                      },
                      "start": 2730,
                      "end": 2744
                    },
                    "start": 2728,
                    "end": 2744
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
                  "start": 2726,
                  "end": 2745
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2754,
                    "end": 2756
                  },
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
                              "start": 2759,
                              "end": 2760
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2759,
                            "end": 2760
                          }
                        ],
                        "start": 2758,
                        "end": 2761
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
                                "start": 2765,
                                "end": 2766
                              },
                              "typeArguments": null,
                              "start": 2765,
                              "end": 2766
                            },
                            "start": 2763,
                            "end": 2766
                          },
                          "start": 2762,
                          "end": 2766
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2772,
                                "end": 2773
                              },
                              "typeArguments": null,
                              "start": 2772,
                              "end": 2773
                            },
                            "start": 2770,
                            "end": 2773
                          },
                          "start": 2768,
                          "end": 2773
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
                            "start": 2778,
                            "end": 2779
                          },
                          "typeArguments": null,
                          "start": 2778,
                          "end": 2779
                        },
                        "start": 2775,
                        "end": 2779
                      },
                      "start": 2758,
                      "end": 2779
                    },
                    "start": 2756,
                    "end": 2779
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
                  "start": 2754,
                  "end": 2780
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2789,
                    "end": 2791
                  },
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
                              "start": 2794,
                              "end": 2795
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2794,
                            "end": 2795
                          }
                        ],
                        "start": 2793,
                        "end": 2796
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2801,
                                "end": 2802
                              },
                              "typeArguments": null,
                              "start": 2801,
                              "end": 2802
                            },
                            "start": 2799,
                            "end": 2802
                          },
                          "start": 2797,
                          "end": 2802
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2808,
                                "end": 2809
                              },
                              "typeArguments": null,
                              "start": 2808,
                              "end": 2809
                            },
                            "start": 2806,
                            "end": 2809
                          },
                          "start": 2804,
                          "end": 2809
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
                            "start": 2814,
                            "end": 2815
                          },
                          "typeArguments": null,
                          "start": 2814,
                          "end": 2815
                        },
                        "start": 2811,
                        "end": 2815
                      },
                      "start": 2793,
                      "end": 2815
                    },
                    "start": 2791,
                    "end": 2815
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
                  "start": 2789,
                  "end": 2816
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2826,
                    "end": 2830
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
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
                                "type": "ThisExpression",
                                "start": 2853,
                                "end": 2857
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2858,
                                "end": 2859
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2853,
                              "end": 2859
                            },
                            "right": {
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
                                      "start": 2863,
                                      "end": 2864
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 2863,
                                    "end": 2864
                                  }
                                ],
                                "start": 2862,
                                "end": 2865
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 2871,
                                "end": 2875
                              },
                              "id": null,
                              "generator": false,
                              "start": 2862,
                              "end": 2875
                            },
                            "start": 2853,
                            "end": 2875
                          },
                          "directive": null,
                          "start": 2853,
                          "end": 2876
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2922,
                                "end": 2926
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2927,
                                "end": 2928
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2922,
                              "end": 2928
                            },
                            "right": {
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
                                      "start": 2932,
                                      "end": 2933
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 2932,
                                    "end": 2933
                                  }
                                ],
                                "start": 2931,
                                "end": 2934
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 2939,
                                        "end": 2940
                                      },
                                      "typeArguments": null,
                                      "start": 2939,
                                      "end": 2940
                                    },
                                    "start": 2937,
                                    "end": 2940
                                  },
                                  "start": 2935,
                                  "end": 2940
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 2945,
                                "end": 2949
                              },
                              "id": null,
                              "generator": false,
                              "start": 2931,
                              "end": 2949
                            },
                            "start": 2922,
                            "end": 2949
                          },
                          "directive": null,
                          "start": 2922,
                          "end": 2950
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2996,
                                "end": 3000
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3001,
                                "end": 3002
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2996,
                              "end": 3002
                            },
                            "right": {
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
                                      "start": 3006,
                                      "end": 3007
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3006,
                                    "end": 3007
                                  }
                                ],
                                "start": 3005,
                                "end": 3008
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
                                        "start": 3012,
                                        "end": 3013
                                      },
                                      "typeArguments": null,
                                      "start": 3012,
                                      "end": 3013
                                    },
                                    "start": 3010,
                                    "end": 3013
                                  },
                                  "start": 3009,
                                  "end": 3013
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3018,
                                "end": 3022
                              },
                              "id": null,
                              "generator": false,
                              "start": 3005,
                              "end": 3022
                            },
                            "start": 2996,
                            "end": 3022
                          },
                          "directive": null,
                          "start": 2996,
                          "end": 3023
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3072,
                                "end": 3076
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3077,
                                "end": 3079
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3072,
                              "end": 3079
                            },
                            "right": {
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
                                      "start": 3083,
                                      "end": 3084
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3083,
                                    "end": 3084
                                  }
                                ],
                                "start": 3082,
                                "end": 3085
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3091,
                                "end": 3095
                              },
                              "id": null,
                              "generator": false,
                              "start": 3082,
                              "end": 3095
                            },
                            "start": 3072,
                            "end": 3095
                          },
                          "directive": null,
                          "start": 3072,
                          "end": 3096
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3142,
                                "end": 3146
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3147,
                                "end": 3149
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3142,
                              "end": 3149
                            },
                            "right": {
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
                                      "start": 3153,
                                      "end": 3154
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3153,
                                    "end": 3154
                                  }
                                ],
                                "start": 3152,
                                "end": 3155
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 3160,
                                        "end": 3161
                                      },
                                      "typeArguments": null,
                                      "start": 3160,
                                      "end": 3161
                                    },
                                    "start": 3158,
                                    "end": 3161
                                  },
                                  "start": 3156,
                                  "end": 3161
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3166,
                                "end": 3170
                              },
                              "id": null,
                              "generator": false,
                              "start": 3152,
                              "end": 3170
                            },
                            "start": 3142,
                            "end": 3170
                          },
                          "directive": null,
                          "start": 3142,
                          "end": 3171
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3217,
                                "end": 3221
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3222,
                                "end": 3224
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3217,
                              "end": 3224
                            },
                            "right": {
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
                                      "start": 3228,
                                      "end": 3229
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3228,
                                    "end": 3229
                                  }
                                ],
                                "start": 3227,
                                "end": 3230
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
                                        "start": 3234,
                                        "end": 3235
                                      },
                                      "typeArguments": null,
                                      "start": 3234,
                                      "end": 3235
                                    },
                                    "start": 3232,
                                    "end": 3235
                                  },
                                  "start": 3231,
                                  "end": 3235
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3240,
                                "end": 3244
                              },
                              "id": null,
                              "generator": false,
                              "start": 3227,
                              "end": 3244
                            },
                            "start": 3217,
                            "end": 3244
                          },
                          "directive": null,
                          "start": 3217,
                          "end": 3245
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3288,
                                "end": 3292
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3293,
                                "end": 3295
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3288,
                              "end": 3295
                            },
                            "right": {
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
                                      "start": 3299,
                                      "end": 3300
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3299,
                                    "end": 3300
                                  }
                                ],
                                "start": 3298,
                                "end": 3301
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3307,
                                "end": 3311
                              },
                              "id": null,
                              "generator": false,
                              "start": 3298,
                              "end": 3311
                            },
                            "start": 3288,
                            "end": 3311
                          },
                          "directive": null,
                          "start": 3288,
                          "end": 3312
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3354,
                                "end": 3358
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3359,
                                "end": 3361
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3354,
                              "end": 3361
                            },
                            "right": {
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
                                      "start": 3365,
                                      "end": 3366
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3365,
                                    "end": 3366
                                  }
                                ],
                                "start": 3364,
                                "end": 3367
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 3372,
                                        "end": 3373
                                      },
                                      "typeArguments": null,
                                      "start": 3372,
                                      "end": 3373
                                    },
                                    "start": 3370,
                                    "end": 3373
                                  },
                                  "start": 3368,
                                  "end": 3373
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3378,
                                "end": 3382
                              },
                              "id": null,
                              "generator": false,
                              "start": 3364,
                              "end": 3382
                            },
                            "start": 3354,
                            "end": 3382
                          },
                          "directive": null,
                          "start": 3354,
                          "end": 3383
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3425,
                                "end": 3429
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3430,
                                "end": 3432
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3425,
                              "end": 3432
                            },
                            "right": {
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
                                      "start": 3436,
                                      "end": 3437
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3436,
                                    "end": 3437
                                  }
                                ],
                                "start": 3435,
                                "end": 3438
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
                                        "start": 3442,
                                        "end": 3443
                                      },
                                      "typeArguments": null,
                                      "start": 3442,
                                      "end": 3443
                                    },
                                    "start": 3440,
                                    "end": 3443
                                  },
                                  "start": 3439,
                                  "end": 3443
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3448,
                                "end": 3452
                              },
                              "id": null,
                              "generator": false,
                              "start": 3435,
                              "end": 3452
                            },
                            "start": 3425,
                            "end": 3452
                          },
                          "directive": null,
                          "start": 3425,
                          "end": 3453
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3499,
                                "end": 3503
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3504,
                                "end": 3506
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3499,
                              "end": 3506
                            },
                            "right": {
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
                                      "start": 3510,
                                      "end": 3511
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3510,
                                    "end": 3511
                                  }
                                ],
                                "start": 3509,
                                "end": 3512
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
                                        "start": 3516,
                                        "end": 3517
                                      },
                                      "typeArguments": null,
                                      "start": 3516,
                                      "end": 3517
                                    },
                                    "start": 3514,
                                    "end": 3517
                                  },
                                  "start": 3513,
                                  "end": 3517
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3522,
                                        "end": 3523
                                      },
                                      "typeArguments": null,
                                      "start": 3522,
                                      "end": 3523
                                    },
                                    "start": 3520,
                                    "end": 3523
                                  },
                                  "start": 3519,
                                  "end": 3523
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3528,
                                "end": 3532
                              },
                              "id": null,
                              "generator": false,
                              "start": 3509,
                              "end": 3532
                            },
                            "start": 3499,
                            "end": 3532
                          },
                          "directive": null,
                          "start": 3499,
                          "end": 3533
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3583,
                                "end": 3587
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3588,
                                "end": 3590
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3583,
                              "end": 3590
                            },
                            "right": {
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
                                      "start": 3594,
                                      "end": 3595
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3594,
                                    "end": 3595
                                  }
                                ],
                                "start": 3593,
                                "end": 3596
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3602,
                                "end": 3606
                              },
                              "id": null,
                              "generator": false,
                              "start": 3593,
                              "end": 3606
                            },
                            "start": 3583,
                            "end": 3606
                          },
                          "directive": null,
                          "start": 3583,
                          "end": 3607
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3649,
                                "end": 3653
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3654,
                                "end": 3656
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3649,
                              "end": 3656
                            },
                            "right": {
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
                                      "start": 3660,
                                      "end": 3661
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3660,
                                    "end": 3661
                                  }
                                ],
                                "start": 3659,
                                "end": 3662
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 3667,
                                        "end": 3668
                                      },
                                      "typeArguments": null,
                                      "start": 3667,
                                      "end": 3668
                                    },
                                    "start": 3665,
                                    "end": 3668
                                  },
                                  "start": 3663,
                                  "end": 3668
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 3674,
                                        "end": 3675
                                      },
                                      "typeArguments": null,
                                      "start": 3674,
                                      "end": 3675
                                    },
                                    "start": 3672,
                                    "end": 3675
                                  },
                                  "start": 3670,
                                  "end": 3675
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3680,
                                "end": 3684
                              },
                              "id": null,
                              "generator": false,
                              "start": 3659,
                              "end": 3684
                            },
                            "start": 3649,
                            "end": 3684
                          },
                          "directive": null,
                          "start": 3649,
                          "end": 3685
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3727,
                                "end": 3731
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3732,
                                "end": 3734
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3727,
                              "end": 3734
                            },
                            "right": {
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
                                      "start": 3738,
                                      "end": 3739
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3738,
                                    "end": 3739
                                  }
                                ],
                                "start": 3737,
                                "end": 3740
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
                                        "start": 3744,
                                        "end": 3745
                                      },
                                      "typeArguments": null,
                                      "start": 3744,
                                      "end": 3745
                                    },
                                    "start": 3742,
                                    "end": 3745
                                  },
                                  "start": 3741,
                                  "end": 3745
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3750,
                                "end": 3754
                              },
                              "id": null,
                              "generator": false,
                              "start": 3737,
                              "end": 3754
                            },
                            "start": 3727,
                            "end": 3754
                          },
                          "directive": null,
                          "start": 3727,
                          "end": 3755
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3801,
                                "end": 3805
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3806,
                                "end": 3808
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3801,
                              "end": 3808
                            },
                            "right": {
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
                                      "start": 3812,
                                      "end": 3813
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3812,
                                    "end": 3813
                                  }
                                ],
                                "start": 3811,
                                "end": 3814
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
                                        "start": 3818,
                                        "end": 3819
                                      },
                                      "typeArguments": null,
                                      "start": 3818,
                                      "end": 3819
                                    },
                                    "start": 3816,
                                    "end": 3819
                                  },
                                  "start": 3815,
                                  "end": 3819
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3824,
                                        "end": 3825
                                      },
                                      "typeArguments": null,
                                      "start": 3824,
                                      "end": 3825
                                    },
                                    "start": 3822,
                                    "end": 3825
                                  },
                                  "start": 3821,
                                  "end": 3825
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3830,
                                "end": 3834
                              },
                              "id": null,
                              "generator": false,
                              "start": 3811,
                              "end": 3834
                            },
                            "start": 3801,
                            "end": 3834
                          },
                          "directive": null,
                          "start": 3801,
                          "end": 3835
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3880,
                                "end": 3884
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3885,
                                "end": 3887
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3880,
                              "end": 3887
                            },
                            "right": {
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
                                      "start": 3891,
                                      "end": 3892
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3891,
                                    "end": 3892
                                  }
                                ],
                                "start": 3890,
                                "end": 3893
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3899,
                                "end": 3903
                              },
                              "id": null,
                              "generator": false,
                              "start": 3890,
                              "end": 3903
                            },
                            "start": 3880,
                            "end": 3903
                          },
                          "directive": null,
                          "start": 3880,
                          "end": 3904
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3946,
                                "end": 3950
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3951,
                                "end": 3953
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3946,
                              "end": 3953
                            },
                            "right": {
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
                                      "start": 3957,
                                      "end": 3958
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3957,
                                    "end": 3958
                                  }
                                ],
                                "start": 3956,
                                "end": 3959
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                  "start": 3960,
                                  "end": 3965
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 3971,
                                        "end": 3972
                                      },
                                      "typeArguments": null,
                                      "start": 3971,
                                      "end": 3972
                                    },
                                    "start": 3969,
                                    "end": 3972
                                  },
                                  "start": 3967,
                                  "end": 3972
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3977,
                                "end": 3981
                              },
                              "id": null,
                              "generator": false,
                              "start": 3956,
                              "end": 3981
                            },
                            "start": 3946,
                            "end": 3981
                          },
                          "directive": null,
                          "start": 3946,
                          "end": 3982
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 4024,
                                "end": 4028
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4029,
                                "end": 4031
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4024,
                              "end": 4031
                            },
                            "right": {
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
                                      "start": 4035,
                                      "end": 4036
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 4035,
                                    "end": 4036
                                  }
                                ],
                                "start": 4034,
                                "end": 4037
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
                                        "start": 4041,
                                        "end": 4042
                                      },
                                      "typeArguments": null,
                                      "start": 4041,
                                      "end": 4042
                                    },
                                    "start": 4039,
                                    "end": 4042
                                  },
                                  "start": 4038,
                                  "end": 4042
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4047,
                                "end": 4051
                              },
                              "id": null,
                              "generator": false,
                              "start": 4034,
                              "end": 4051
                            },
                            "start": 4024,
                            "end": 4051
                          },
                          "directive": null,
                          "start": 4024,
                          "end": 4052
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 4097,
                                "end": 4101
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4102,
                                "end": 4104
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4097,
                              "end": 4104
                            },
                            "right": {
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
                                      "start": 4108,
                                      "end": 4109
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 4108,
                                    "end": 4109
                                  }
                                ],
                                "start": 4107,
                                "end": 4110
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
                                        "start": 4114,
                                        "end": 4115
                                      },
                                      "typeArguments": null,
                                      "start": 4114,
                                      "end": 4115
                                    },
                                    "start": 4112,
                                    "end": 4115
                                  },
                                  "start": 4111,
                                  "end": 4115
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4120,
                                        "end": 4121
                                      },
                                      "typeArguments": null,
                                      "start": 4120,
                                      "end": 4121
                                    },
                                    "start": 4118,
                                    "end": 4121
                                  },
                                  "start": 4117,
                                  "end": 4121
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4126,
                                "end": 4130
                              },
                              "id": null,
                              "generator": false,
                              "start": 4107,
                              "end": 4130
                            },
                            "start": 4097,
                            "end": 4130
                          },
                          "directive": null,
                          "start": 4097,
                          "end": 4131
                        }
                      ],
                      "start": 2839,
                      "end": 4171
                    },
                    "id": null,
                    "generator": false,
                    "start": 2833,
                    "end": 4171
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2826,
                  "end": 4171
                }
              ],
              "start": 2664,
              "end": 4177
            },
            "abstract": false,
            "declare": false,
            "start": 2652,
            "end": 4177
          }
        ],
        "start": 2645,
        "end": 4179
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2612,
      "end": 4179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 114,
  "end": 4179
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 114,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "ClassTypeParam",
    "start": 124,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 175,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "a2",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 226,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "T",
    "start": 281,
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
    "value": "y",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "T",
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
    "value": "=>",
    "start": 291,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347
  },
  {
    "type": "Null",
    "value": "null",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "T",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 416,
    "end": 418
  },
  {
    "type": "Null",
    "value": "null",
    "start": 419,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 486,
    "end": 488
  },
  {
    "type": "Null",
    "value": "null",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 556,
    "end": 558
  },
  {
    "type": "Null",
    "value": "null",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 610,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 628,
    "end": 630
  },
  {
    "type": "Null",
    "value": "null",
    "start": 631,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 682,
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
    "value": "a2",
    "start": 687,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 699,
    "end": 701
  },
  {
    "type": "Null",
    "value": "null",
    "start": 702,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 763,
    "end": 765
  },
  {
    "type": "Null",
    "value": "null",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 813,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 818,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 831,
    "end": 833
  },
  {
    "type": "Null",
    "value": "null",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 881,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 898,
    "end": 900
  },
  {
    "type": "Null",
    "value": "null",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 952,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 957,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 975,
    "end": 977
  },
  {
    "type": "Null",
    "value": "null",
    "start": 978,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1038,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042
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
    "value": "=>",
    "start": 1046,
    "end": 1048
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1049,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1096,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1101,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1121,
    "end": 1123
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1124,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1191,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1242,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1247,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "y",
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
    "value": "T",
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
    "value": "=>",
    "start": 1265,
    "end": 1267
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1268,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1381,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1456,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 1473,
    "end": 1475
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1476,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1526,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1531,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1552,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1607,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "GenericSignaturesInvalid",
    "start": 1617,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1649,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1655,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1680,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1694,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1709,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1723,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1772,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1786,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1808,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1825,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1831,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1857,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1871,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1883,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1897,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1908,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1922,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1940,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1954,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1973,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1991,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2000,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2019,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2042,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 2050,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2119,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2139,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2159,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2179,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2214,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2221,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2235,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2242,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2256,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2263,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2277,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2284,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2299,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2319,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2326,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2340,
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
    "value": "t",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2347,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2361,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2368,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2382,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2389,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2404,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2424,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2431,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2445,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2452,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2466,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2487,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2494,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2509,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2529,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2536,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2550,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2557,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2571,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2578,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2592,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2599,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2612,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "GenericSignaturesValid",
    "start": 2622,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2652,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2658,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2683,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2697,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2712,
    "end": 2714
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2726,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2740,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2754,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2775,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2789,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2811,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 2826,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2836,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2853,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2868,
    "end": 2870
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2871,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2922,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2942,
    "end": 2944
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2945,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2996,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3015,
    "end": 3017
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3018,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3072,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3077,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3088,
    "end": 3090
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3091,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3142,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3147,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3163,
    "end": 3165
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3166,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3217,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3222,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3237,
    "end": 3239
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3240,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3288,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3293,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3304,
    "end": 3306
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3307,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3354,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3359,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3375,
    "end": 3377
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3378,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3425,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3430,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3445,
    "end": 3447
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3448,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3499,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3504,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3525,
    "end": 3527
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3528,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3583,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3588,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3599,
    "end": 3601
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3602,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3649,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3654,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3677,
    "end": 3679
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3680,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3727,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3732,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3747,
    "end": 3749
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3750,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3801,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3806,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3827,
    "end": 3829
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3830,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3880,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3885,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3896,
    "end": 3898
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3899,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3946,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3951,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3961,
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
    "value": "T",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3974,
    "end": 3976
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3977,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4024,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 4029,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4044,
    "end": 4046
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4047,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4097,
    "end": 4101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 4102,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4123,
    "end": 4125
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4126,
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
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4178,
    "end": 4179
  }
]
```

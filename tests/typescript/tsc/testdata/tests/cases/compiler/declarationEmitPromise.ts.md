__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bluebird",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 21
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
                "start": 22,
                "end": 23
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 22,
              "end": 23
            }
          ],
          "start": 21,
          "end": 24
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
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 41
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 48
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bluebird",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 57
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 58,
                              "end": 61
                            }
                          ],
                          "start": 57,
                          "end": 62
                        },
                        "start": 49,
                        "end": 62
                      }
                    ],
                    "start": 48,
                    "end": 63
                  },
                  "start": 43,
                  "end": 63
                },
                "start": 41,
                "end": 63
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
              "start": 31,
              "end": 64
            }
          ],
          "start": 25,
          "end": 66
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "runSampleWorks",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 104
        },
        "generator": false,
        "async": true,
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
                "start": 105,
                "end": 106
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 105,
              "end": 106
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 108,
              "end": 109
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 111,
              "end": 112
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
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
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 117,
              "end": 118
            }
          ],
          "start": 104,
          "end": 119
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
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 136
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
                        "start": 137,
                        "end": 138
                      },
                      "typeArguments": null,
                      "start": 137,
                      "end": 138
                    }
                  ],
                  "start": 136,
                  "end": 139
                },
                "start": 128,
                "end": 139
              },
              "start": 126,
              "end": 139
            },
            "start": 125,
            "end": 139
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
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
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
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 155
                      },
                      "typeArguments": null,
                      "start": 154,
                      "end": 155
                    }
                  ],
                  "start": 153,
                  "end": 156
                },
                "start": 145,
                "end": 156
              },
              "start": 143,
              "end": 156
            },
            "start": 141,
            "end": 156
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 170
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
                        "start": 171,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "start": 170,
                  "end": 173
                },
                "start": 162,
                "end": 173
              },
              "start": 160,
              "end": 173
            },
            "start": 158,
            "end": 173
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 187
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
                        "start": 188,
                        "end": 189
                      },
                      "typeArguments": null,
                      "start": 188,
                      "end": 189
                    }
                  ],
                  "start": 187,
                  "end": 190
                },
                "start": 179,
                "end": 190
              },
              "start": 177,
              "end": 190
            },
            "start": 175,
            "end": 190
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 204
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
                        "start": 205,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 206
                    }
                  ],
                  "start": 204,
                  "end": 207
                },
                "start": 196,
                "end": 207
              },
              "start": 194,
              "end": 207
            },
            "start": 192,
            "end": 207
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 225
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bluebird",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 235,
                            "end": 243
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "all",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 247
                          },
                          "optional": false,
                          "computed": false,
                          "start": 235,
                          "end": 247
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 251,
                          "end": 254
                        },
                        "start": 235,
                        "end": 254
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 257,
                                  "end": 258
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 260,
                                  "end": 261
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 263,
                                  "end": 264
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 266,
                                  "end": 267
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 269,
                                  "end": 270
                                }
                              ],
                              "start": 256,
                              "end": 271
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 272,
                              "end": 278
                            },
                            "optional": false,
                            "computed": false,
                            "start": 256,
                            "end": 278
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
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 279,
                                  "end": 281
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 287,
                                    "end": 289
                                  },
                                  "prefix": true,
                                  "start": 286,
                                  "end": 289
                                },
                                "prefix": true,
                                "start": 285,
                                "end": 289
                              },
                              "id": null,
                              "generator": false,
                              "start": 279,
                              "end": 289
                            }
                          ],
                          "optional": false,
                          "start": 256,
                          "end": 290
                        }
                      ],
                      "optional": false,
                      "start": 234,
                      "end": 291
                    },
                    "start": 228,
                    "end": 291
                  },
                  "definite": false,
                  "start": 219,
                  "end": 291
                }
              ],
              "declare": false,
              "start": 215,
              "end": 292
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 305
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
                            "start": 309,
                            "end": 310
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 309,
                          "end": 310
                        }
                      ],
                      "start": 308,
                      "end": 311
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
                                      "start": 319,
                                      "end": 320
                                    },
                                    "typeArguments": null,
                                    "start": 319,
                                    "end": 320
                                  },
                                  "start": 317,
                                  "end": 320
                                },
                                "start": 316,
                                "end": 320
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
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 326,
                                      "end": 327
                                    },
                                    "typeArguments": null,
                                    "start": 326,
                                    "end": 327
                                  },
                                  "start": 324,
                                  "end": 327
                                },
                                "start": 322,
                                "end": 327
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": true,
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
                                      "start": 333,
                                      "end": 334
                                    },
                                    "typeArguments": null,
                                    "start": 333,
                                    "end": 334
                                  },
                                  "start": 331,
                                  "end": 334
                                },
                                "start": 329,
                                "end": 334
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "D",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 340,
                                      "end": 341
                                    },
                                    "typeArguments": null,
                                    "start": 340,
                                    "end": 341
                                  },
                                  "start": 338,
                                  "end": 341
                                },
                                "start": 336,
                                "end": 341
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 347,
                                      "end": 348
                                    },
                                    "typeArguments": null,
                                    "start": 347,
                                    "end": 348
                                  },
                                  "start": 345,
                                  "end": 348
                                },
                                "start": 343,
                                "end": 348
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
                                  "start": 353,
                                  "end": 354
                                },
                                "typeArguments": null,
                                "start": 353,
                                "end": 354
                              },
                              "start": 350,
                              "end": 354
                            },
                            "start": 315,
                            "end": 354
                          },
                          "start": 313,
                          "end": 354
                        },
                        "start": 312,
                        "end": 354
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
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 371
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 377
                        },
                        "optional": false,
                        "computed": false,
                        "start": 370,
                        "end": 377
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 390
                        }
                      ],
                      "optional": false,
                      "start": 370,
                      "end": 391
                    },
                    "id": null,
                    "generator": false,
                    "start": 308,
                    "end": 391
                  },
                  "definite": false,
                  "start": 301,
                  "end": 391
                }
              ],
              "declare": false,
              "start": 297,
              "end": 392
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
                    "name": "rfunc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 415,
                              "end": 419
                            },
                            "typeArguments": null,
                            "start": 408,
                            "end": 419
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 422,
                            "end": 424
                          }
                        ],
                        "start": 408,
                        "end": 424
                      },
                      "start": 406,
                      "end": 424
                    },
                    "start": 401,
                    "end": 424
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 431
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 435,
                      "end": 438
                    },
                    "start": 427,
                    "end": 438
                  },
                  "definite": false,
                  "start": 401,
                  "end": 438
                }
              ],
              "declare": false,
              "start": 397,
              "end": 439
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rfunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 490
              },
              "start": 478,
              "end": 490
            }
          ],
          "start": 209,
          "end": 492
        },
        "expression": false,
        "start": 75,
        "end": 492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 492
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "runSampleBreaks",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 531
        },
        "generator": false,
        "async": true,
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
                "start": 532,
                "end": 533
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 532,
              "end": 533
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 535,
              "end": 536
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 539
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 538,
              "end": 539
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 541,
              "end": 542
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 545
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 544,
              "end": 545
            }
          ],
          "start": 531,
          "end": 546
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
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 563
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
                        "start": 564,
                        "end": 565
                      },
                      "typeArguments": null,
                      "start": 564,
                      "end": 565
                    }
                  ],
                  "start": 563,
                  "end": 566
                },
                "start": 555,
                "end": 566
              },
              "start": 553,
              "end": 566
            },
            "start": 552,
            "end": 566
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
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 580
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
                        "start": 581,
                        "end": 582
                      },
                      "typeArguments": null,
                      "start": 581,
                      "end": 582
                    }
                  ],
                  "start": 580,
                  "end": 583
                },
                "start": 572,
                "end": 583
              },
              "start": 570,
              "end": 583
            },
            "start": 568,
            "end": 583
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 597
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
                        "start": 598,
                        "end": 599
                      },
                      "typeArguments": null,
                      "start": 598,
                      "end": 599
                    }
                  ],
                  "start": 597,
                  "end": 600
                },
                "start": 589,
                "end": 600
              },
              "start": 587,
              "end": 600
            },
            "start": 585,
            "end": 600
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 614
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
                        "start": 615,
                        "end": 616
                      },
                      "typeArguments": null,
                      "start": 615,
                      "end": 616
                    }
                  ],
                  "start": 614,
                  "end": 617
                },
                "start": 606,
                "end": 617
              },
              "start": 604,
              "end": 617
            },
            "start": 602,
            "end": 617
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 631
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
                        "start": 632,
                        "end": 633
                      },
                      "typeArguments": null,
                      "start": 632,
                      "end": 633
                    }
                  ],
                  "start": 631,
                  "end": 634
                },
                "start": 623,
                "end": 634
              },
              "start": 621,
              "end": 634
            },
            "start": 619,
            "end": 634
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 652
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bluebird",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 662,
                            "end": 670
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "all",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 674
                          },
                          "optional": false,
                          "computed": false,
                          "start": 662,
                          "end": 674
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 678,
                          "end": 681
                        },
                        "start": 662,
                        "end": 681
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 684,
                                  "end": 685
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 687,
                                  "end": 688
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 690,
                                  "end": 691
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 693,
                                  "end": 694
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 696,
                                  "end": 697
                                }
                              ],
                              "start": 683,
                              "end": 698
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 699,
                              "end": 705
                            },
                            "optional": false,
                            "computed": false,
                            "start": 683,
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
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 706,
                                  "end": 708
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 714,
                                    "end": 716
                                  },
                                  "prefix": true,
                                  "start": 713,
                                  "end": 716
                                },
                                "prefix": true,
                                "start": 712,
                                "end": 716
                              },
                              "id": null,
                              "generator": false,
                              "start": 706,
                              "end": 716
                            }
                          ],
                          "optional": false,
                          "start": 683,
                          "end": 717
                        }
                      ],
                      "optional": false,
                      "start": 661,
                      "end": 718
                    },
                    "start": 655,
                    "end": 718
                  },
                  "definite": false,
                  "start": 646,
                  "end": 718
                }
              ],
              "declare": false,
              "start": 642,
              "end": 719
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 732
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
                            "start": 736,
                            "end": 737
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 736,
                          "end": 737
                        }
                      ],
                      "start": 735,
                      "end": 738
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
                                      "start": 746,
                                      "end": 747
                                    },
                                    "typeArguments": null,
                                    "start": 746,
                                    "end": 747
                                  },
                                  "start": 744,
                                  "end": 747
                                },
                                "start": 743,
                                "end": 747
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
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 753,
                                      "end": 754
                                    },
                                    "typeArguments": null,
                                    "start": 753,
                                    "end": 754
                                  },
                                  "start": 751,
                                  "end": 754
                                },
                                "start": 749,
                                "end": 754
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": true,
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
                                      "start": 760,
                                      "end": 761
                                    },
                                    "typeArguments": null,
                                    "start": 760,
                                    "end": 761
                                  },
                                  "start": 758,
                                  "end": 761
                                },
                                "start": 756,
                                "end": 761
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "D",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 767,
                                      "end": 768
                                    },
                                    "typeArguments": null,
                                    "start": 767,
                                    "end": 768
                                  },
                                  "start": 765,
                                  "end": 768
                                },
                                "start": 763,
                                "end": 768
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 774,
                                      "end": 775
                                    },
                                    "typeArguments": null,
                                    "start": 774,
                                    "end": 775
                                  },
                                  "start": 772,
                                  "end": 775
                                },
                                "start": 770,
                                "end": 775
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
                                  "start": 780,
                                  "end": 781
                                },
                                "typeArguments": null,
                                "start": 780,
                                "end": 781
                              },
                              "start": 777,
                              "end": 781
                            },
                            "start": 742,
                            "end": 781
                          },
                          "start": 740,
                          "end": 781
                        },
                        "start": 739,
                        "end": 781
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
                          "start": 784,
                          "end": 785
                        },
                        "typeArguments": null,
                        "start": 784,
                        "end": 785
                      },
                      "start": 782,
                      "end": 785
                    },
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 797,
                          "end": 798
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 804
                        },
                        "optional": false,
                        "computed": false,
                        "start": 797,
                        "end": 804
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 805,
                          "end": 809
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 811,
                          "end": 817
                        }
                      ],
                      "optional": false,
                      "start": 797,
                      "end": 818
                    },
                    "id": null,
                    "generator": false,
                    "start": 735,
                    "end": 818
                  },
                  "definite": false,
                  "start": 728,
                  "end": 818
                }
              ],
              "declare": false,
              "start": 724,
              "end": 819
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
                    "name": "rfunc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 842,
                          "end": 846
                        },
                        "typeArguments": null,
                        "start": 835,
                        "end": 846
                      },
                      "start": 833,
                      "end": 846
                    },
                    "start": 828,
                    "end": 846
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 853
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 857,
                      "end": 860
                    },
                    "start": 849,
                    "end": 860
                  },
                  "definite": false,
                  "start": 828,
                  "end": 860
                }
              ],
              "declare": false,
              "start": 824,
              "end": 861
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rfunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 907,
                "end": 912
              },
              "start": 900,
              "end": 912
            }
          ],
          "start": 636,
          "end": 914
        },
        "expression": false,
        "start": 501,
        "end": 914
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 494,
      "end": 914
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 914
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 13,
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
    "value": "T",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 31,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 75,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 81,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "runSampleWorks",
    "start": 90,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 145,
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
    "value": "B",
    "start": 154,
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
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "bluebird",
    "start": 162,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "bluebird",
    "start": 179,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "e",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 235,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 287,
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
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 350,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 359,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "rfunc",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 408,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 415,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 427,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 432,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 478,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "rfunc",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 494,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 501,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "runSampleBreaks",
    "start": 516,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 555,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 572,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "bluebird",
    "start": 589,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 606,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 623,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "let",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 646,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 655,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "bluebird",
    "start": 662,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 675,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "d",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 699,
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
    "value": "el",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 724,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "d",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 777,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 786,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 799,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 811,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 824,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "rfunc",
    "start": 828,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 835,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 842,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 849,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 854,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 857,
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
    "value": "return",
    "start": 900,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "rfunc",
    "start": 907,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  }
]
```

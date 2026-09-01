__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "start": 25,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 25,
          "end": 38
        }
      ],
      "declare": false,
      "start": 21,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Optional",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 61
        },
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
                "start": 62,
                "end": 63
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 62,
              "end": 63
            }
          ],
          "start": 61,
          "end": 64
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Some",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 71
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "typeArguments": null,
                    "start": 72,
                    "end": 73
                  }
                ],
                "start": 71,
                "end": 74
              },
              "start": 67,
              "end": 74
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "None",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 81
              },
              "typeArguments": null,
              "start": 77,
              "end": 81
            }
          ],
          "start": 67,
          "end": 81
        },
        "declare": false,
        "start": 48,
        "end": 82
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 41,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "None",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 105
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
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "none",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 121
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 123,
                  "end": 129
                },
                "start": 121,
                "end": 129
              },
              "accessibility": null,
              "static": false,
              "start": 108,
              "end": 130
            }
          ],
          "start": 106,
          "end": 132
        },
        "declare": false,
        "start": 91,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 84,
      "end": 132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Some",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 154
        },
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
                "start": 155,
                "end": 156
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 155,
              "end": 156
            }
          ],
          "start": 154,
          "end": 157
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 173
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
                    "start": 175,
                    "end": 176
                  },
                  "typeArguments": null,
                  "start": 175,
                  "end": 176
                },
                "start": 173,
                "end": 176
              },
              "accessibility": null,
              "static": false,
              "start": 160,
              "end": 177
            }
          ],
          "start": 158,
          "end": 179
        },
        "declare": false,
        "start": 140,
        "end": 179
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 133,
      "end": 179
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "none",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "None",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 205
                  },
                  "typeArguments": null,
                  "start": 201,
                  "end": 205
                },
                "start": 199,
                "end": 205
              },
              "start": 194,
              "end": 205
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "none",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 214
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 216,
                    "end": 218
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 210,
                  "end": 218
                }
              ],
              "start": 208,
              "end": 220
            },
            "definite": false,
            "start": 194,
            "end": 220
          }
        ],
        "declare": false,
        "start": 188,
        "end": 221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "isSome",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 245
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
                "start": 246,
                "end": 247
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 246,
              "end": 247
            }
          ],
          "start": 245,
          "end": 248
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
                  "name": "Optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 264
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 266
                    }
                  ],
                  "start": 264,
                  "end": 267
                },
                "start": 256,
                "end": 267
              },
              "start": 254,
              "end": 267
            },
            "start": 249,
            "end": 267
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 275
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Some",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 283
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 285
                      },
                      "typeArguments": null,
                      "start": 284,
                      "end": 285
                    }
                  ],
                  "start": 283,
                  "end": 286
                },
                "start": 279,
                "end": 286
              },
              "start": 279,
              "end": 286
            },
            "start": 270,
            "end": 286
          },
          "start": 268,
          "end": 286
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "some",
                  "raw": "'some'",
                  "start": 300,
                  "end": 306
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 315
                },
                "start": 300,
                "end": 315
              },
              "start": 293,
              "end": 316
            }
          ],
          "start": 287,
          "end": 318
        },
        "expression": false,
        "start": 230,
        "end": 318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someFrom",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 337
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
          "name": "some",
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
          "start": 341,
          "end": 348
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 369
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 369
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 365,
                  "end": 369
                }
              ],
              "start": 363,
              "end": 371
            },
            "start": 356,
            "end": 372
          }
        ],
        "start": 350,
        "end": 374
      },
      "expression": false,
      "start": 320,
      "end": 374
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 394
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
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 396
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 395,
              "end": 396
            }
          ],
          "start": 394,
          "end": 397
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "makeSome",
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 415
                    },
                    "typeArguments": null,
                    "start": 414,
                    "end": 415
                  },
                  "start": 411,
                  "end": 415
                },
                "start": 408,
                "end": 415
              },
              "start": 406,
              "end": 415
            },
            "start": 398,
            "end": 415
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 418,
            "end": 422
          },
          "start": 416,
          "end": 422
        },
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 449
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "r",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 450,
                                "end": 451
                              },
                              "typeArguments": null,
                              "start": 450,
                              "end": 451
                            }
                          ],
                          "start": 449,
                          "end": 452
                        },
                        "start": 441,
                        "end": 452
                      },
                      "start": 439,
                      "end": 452
                    },
                    "start": 433,
                    "end": 452
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "none",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 459
                  },
                  "definite": false,
                  "start": 433,
                  "end": 459
                }
              ],
              "declare": false,
              "start": 429,
              "end": 460
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 471
              },
              "directive": null,
              "start": 465,
              "end": 472
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 497
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 515
                    },
                    "directive": null,
                    "start": 509,
                    "end": 516
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 550
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFrom",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 561
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isSome",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 562,
                                "end": 568
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 569,
                                  "end": 575
                                }
                              ],
                              "optional": false,
                              "start": 562,
                              "end": 576
                            },
                            "consequent": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 579,
                                "end": 585
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "some",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 586,
                                "end": 590
                              },
                              "optional": false,
                              "computed": false,
                              "start": 579,
                              "end": 590
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "makeSome",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 593,
                                "end": 601
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 593,
                              "end": 603
                            },
                            "start": 562,
                            "end": 603
                          }
                        ],
                        "optional": false,
                        "start": 553,
                        "end": 604
                      },
                      "start": 544,
                      "end": 604
                    },
                    "directive": null,
                    "start": 544,
                    "end": 605
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 620
                    },
                    "directive": null,
                    "start": 614,
                    "end": 621
                  }
                ],
                "start": 499,
                "end": 639
              },
              "start": 486,
              "end": 639
            }
          ],
          "start": 423,
          "end": 641
        },
        "expression": false,
        "start": 383,
        "end": 641
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 376,
      "end": 641
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 656
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 672,
                          "end": 678
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 681,
                          "end": 687
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 690,
                          "end": 697
                        }
                      ],
                      "start": 672,
                      "end": 697
                    },
                    "start": 670,
                    "end": 697
                  },
                  "start": 669,
                  "end": 697
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 700,
                  "end": 701
                },
                "definite": false,
                "start": 669,
                "end": 701
              }
            ],
            "declare": false,
            "start": 665,
            "end": 702
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 708
            },
            "directive": null,
            "start": 707,
            "end": 709
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 736
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 748,
                    "end": 749
                  },
                  "directive": null,
                  "start": 748,
                  "end": 750
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 792,
                      "end": 793
                    },
                    "right": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 803,
                            "end": 804
                          },
                          "prefix": true,
                          "start": 796,
                          "end": 804
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 809,
                          "end": 817
                        },
                        "start": 796,
                        "end": 817
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 820,
                            "end": 821
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 822,
                            "end": 827
                          },
                          "optional": false,
                          "computed": false,
                          "start": 820,
                          "end": 827
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 820,
                        "end": 829
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "\"abc\"",
                        "start": 832,
                        "end": 837
                      },
                      "start": 796,
                      "end": 837
                    },
                    "start": 792,
                    "end": 837
                  },
                  "directive": null,
                  "start": 792,
                  "end": 838
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 848
                  },
                  "directive": null,
                  "start": 847,
                  "end": 849
                }
              ],
              "start": 738,
              "end": 866
            },
            "start": 725,
            "end": 866
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 871,
              "end": 872
            },
            "directive": null,
            "start": 871,
            "end": 873
          }
        ],
        "start": 659,
        "end": 875
      },
      "expression": false,
      "start": 643,
      "end": 875
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 886,
        "end": 890
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 906,
                          "end": 912
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 915,
                          "end": 921
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 924,
                          "end": 931
                        }
                      ],
                      "start": 906,
                      "end": 931
                    },
                    "start": 904,
                    "end": 931
                  },
                  "start": 903,
                  "end": 931
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 934,
                  "end": 935
                },
                "definite": false,
                "start": 903,
                "end": 935
              }
            ],
            "declare": false,
            "start": 899,
            "end": 936
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 942
            },
            "directive": null,
            "start": 941,
            "end": 943
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 970
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 983
                  },
                  "directive": null,
                  "start": 982,
                  "end": 984
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1037,
                        "end": 1038
                      },
                      "prefix": true,
                      "start": 1030,
                      "end": 1038
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1043,
                      "end": 1051
                    },
                    "start": 1030,
                    "end": 1051
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1067,
                            "end": 1068
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1071,
                                "end": 1072
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1073,
                                "end": 1078
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1071,
                              "end": 1078
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1071,
                            "end": 1080
                          },
                          "start": 1067,
                          "end": 1080
                        },
                        "directive": null,
                        "start": 1067,
                        "end": 1081
                      }
                    ],
                    "start": 1053,
                    "end": 1091
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1120
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 1123,
                            "end": 1128
                          },
                          "start": 1119,
                          "end": 1128
                        },
                        "directive": null,
                        "start": 1119,
                        "end": 1129
                      }
                    ],
                    "start": 1105,
                    "end": 1139
                  },
                  "start": 1026,
                  "end": 1139
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1148,
                    "end": 1149
                  },
                  "directive": null,
                  "start": 1148,
                  "end": 1150
                }
              ],
              "start": 972,
              "end": 1167
            },
            "start": 959,
            "end": 1167
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1173
            },
            "directive": null,
            "start": 1172,
            "end": 1174
          }
        ],
        "start": 893,
        "end": 1176
      },
      "expression": false,
      "start": 877,
      "end": 1176
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1217,
        "end": 1219
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1235,
                          "end": 1241
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1244,
                          "end": 1250
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1253,
                          "end": 1262
                        }
                      ],
                      "start": 1235,
                      "end": 1262
                    },
                    "start": 1233,
                    "end": 1262
                  },
                  "start": 1232,
                  "end": 1262
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1265,
                  "end": 1274
                },
                "definite": false,
                "start": 1232,
                "end": 1274
              }
            ],
            "declare": false,
            "start": 1228,
            "end": 1275
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1280,
              "end": 1281
            },
            "directive": null,
            "start": 1280,
            "end": 1282
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1305,
              "end": 1306
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1318,
                    "end": 1319
                  },
                  "directive": null,
                  "start": 1318,
                  "end": 1320
                }
              ],
              "start": 1308,
              "end": 1367
            },
            "alternate": null,
            "start": 1301,
            "end": 1367
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1372,
              "end": 1373
            },
            "directive": null,
            "start": 1372,
            "end": 1374
          }
        ],
        "start": 1222,
        "end": 1408
      },
      "expression": false,
      "start": 1208,
      "end": 1408
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1419,
        "end": 1421
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1437,
                          "end": 1443
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1446,
                          "end": 1452
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1455,
                          "end": 1464
                        }
                      ],
                      "start": 1437,
                      "end": 1464
                    },
                    "start": 1435,
                    "end": 1464
                  },
                  "start": 1434,
                  "end": 1464
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1467,
                  "end": 1476
                },
                "definite": false,
                "start": 1434,
                "end": 1476
              }
            ],
            "declare": false,
            "start": 1430,
            "end": 1477
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1482,
              "end": 1483
            },
            "directive": null,
            "start": 1482,
            "end": 1484
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1514,
                  "end": 1515
                },
                "prefix": true,
                "start": 1507,
                "end": 1515
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1520,
                "end": 1528
              },
              "start": 1507,
              "end": 1528
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1540,
                    "end": 1541
                  },
                  "directive": null,
                  "start": 1540,
                  "end": 1542
                }
              ],
              "start": 1530,
              "end": 1580
            },
            "alternate": null,
            "start": 1503,
            "end": 1580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1585,
              "end": 1586
            },
            "directive": null,
            "start": 1585,
            "end": 1587
          }
        ],
        "start": 1424,
        "end": 1612
      },
      "expression": false,
      "start": 1410,
      "end": 1612
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1623,
        "end": 1625
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1641,
                          "end": 1647
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1650,
                          "end": 1656
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1659,
                          "end": 1668
                        }
                      ],
                      "start": 1641,
                      "end": 1668
                    },
                    "start": 1639,
                    "end": 1668
                  },
                  "start": 1638,
                  "end": 1668
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1671,
                  "end": 1680
                },
                "definite": false,
                "start": 1638,
                "end": 1680
              }
            ],
            "declare": false,
            "start": 1634,
            "end": 1681
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1687
            },
            "directive": null,
            "start": 1686,
            "end": 1688
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1712,
                "end": 1713
              },
              "prefix": true,
              "start": 1711,
              "end": 1713
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1725,
                  "end": 1732
                }
              ],
              "start": 1715,
              "end": 1738
            },
            "alternate": null,
            "start": 1707,
            "end": 1738
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1743,
              "end": 1744
            },
            "directive": null,
            "start": 1743,
            "end": 1745
          }
        ],
        "start": 1628,
        "end": 1788
      },
      "expression": false,
      "start": 1614,
      "end": 1788
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1799,
        "end": 1801
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1817,
                          "end": 1823
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1826,
                          "end": 1832
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1835,
                          "end": 1844
                        }
                      ],
                      "start": 1817,
                      "end": 1844
                    },
                    "start": 1815,
                    "end": 1844
                  },
                  "start": 1814,
                  "end": 1844
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1847,
                  "end": 1856
                },
                "definite": false,
                "start": 1814,
                "end": 1856
              }
            ],
            "declare": false,
            "start": 1810,
            "end": 1857
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1863
            },
            "directive": null,
            "start": 1862,
            "end": 1864
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1894,
                  "end": 1895
                },
                "prefix": true,
                "start": 1887,
                "end": 1895
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 1900,
                "end": 1909
              },
              "start": 1887,
              "end": 1909
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1921,
                    "end": 1922
                  },
                  "directive": null,
                  "start": 1921,
                  "end": 1923
                }
              ],
              "start": 1911,
              "end": 1972
            },
            "alternate": null,
            "start": 1883,
            "end": 1972
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1977,
              "end": 1978
            },
            "directive": null,
            "start": 1977,
            "end": 1979
          }
        ],
        "start": 1804,
        "end": 1995
      },
      "expression": false,
      "start": 1790,
      "end": 1995
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2006,
        "end": 2008
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2012,
                  "end": 2018
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2021,
                  "end": 2027
                }
              ],
              "start": 2012,
              "end": 2027
            },
            "start": 2010,
            "end": 2027
          },
          "start": 2009,
          "end": 2027
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2046,
                    "end": 2047
                  },
                  "prefix": true,
                  "start": 2039,
                  "end": 2047
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 2052,
                  "end": 2060
                },
                "start": 2039,
                "end": 2060
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2071,
                    "end": 2072
                  },
                  "prefix": true,
                  "start": 2064,
                  "end": 2072
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 2077,
                  "end": 2085
                },
                "start": 2064,
                "end": 2085
              },
              "start": 2039,
              "end": 2085
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2097,
                    "end": 2098
                  },
                  "directive": null,
                  "start": 2097,
                  "end": 2099
                }
              ],
              "start": 2087,
              "end": 2137
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2157,
                    "end": 2158
                  },
                  "directive": null,
                  "start": 2157,
                  "end": 2159
                }
              ],
              "start": 2147,
              "end": 2185
            },
            "start": 2035,
            "end": 2185
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2190,
              "end": 2191
            },
            "directive": null,
            "start": 2190,
            "end": 2192
          }
        ],
        "start": 2029,
        "end": 2214
      },
      "expression": false,
      "start": 1997,
      "end": 2214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2225,
        "end": 2227
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2243,
                          "end": 2249
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2252,
                          "end": 2261
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 2264,
                          "end": 2268
                        }
                      ],
                      "start": 2243,
                      "end": 2268
                    },
                    "start": 2241,
                    "end": 2268
                  },
                  "start": 2240,
                  "end": 2268
                },
                "init": null,
                "definite": false,
                "start": 2240,
                "end": 2268
              }
            ],
            "declare": false,
            "start": 2236,
            "end": 2269
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2274,
                    "end": 2275
                  },
                  "start": 2274,
                  "end": 2276
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2277,
                  "end": 2282
                },
                "optional": false,
                "computed": false,
                "start": 2274,
                "end": 2282
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2274,
              "end": 2284
            },
            "directive": null,
            "start": 2274,
            "end": 2285
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2290,
                "end": 2291
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 2294,
                "end": 2296
              },
              "start": 2290,
              "end": 2296
            },
            "directive": null,
            "start": 2290,
            "end": 2297
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2302,
                    "end": 2303
                  },
                  "start": 2302,
                  "end": 2304
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2305,
                  "end": 2310
                },
                "optional": false,
                "computed": false,
                "start": 2302,
                "end": 2310
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2302,
              "end": 2312
            },
            "directive": null,
            "start": 2302,
            "end": 2313
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2318,
                "end": 2319
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2322,
                "end": 2331
              },
              "start": 2318,
              "end": 2331
            },
            "directive": null,
            "start": 2318,
            "end": 2332
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2337,
                    "end": 2338
                  },
                  "start": 2337,
                  "end": 2339
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2340,
                  "end": 2345
                },
                "optional": false,
                "computed": false,
                "start": 2337,
                "end": 2345
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2337,
              "end": 2347
            },
            "directive": null,
            "start": 2337,
            "end": 2348
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2353,
                "end": 2354
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2357,
                "end": 2361
              },
              "start": 2353,
              "end": 2361
            },
            "directive": null,
            "start": 2353,
            "end": 2362
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2367,
                    "end": 2368
                  },
                  "start": 2367,
                  "end": 2369
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2370,
                  "end": 2375
                },
                "optional": false,
                "computed": false,
                "start": 2367,
                "end": 2375
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2367,
              "end": 2377
            },
            "directive": null,
            "start": 2367,
            "end": 2378
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2383,
                "end": 2384
              },
              "right": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2388,
                      "end": 2397
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 2400,
                      "end": 2404
                    }
                  ],
                  "start": 2388,
                  "end": 2404
                },
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2405,
                  "end": 2414
                },
                "start": 2387,
                "end": 2414
              },
              "start": 2383,
              "end": 2414
            },
            "directive": null,
            "start": 2383,
            "end": 2415
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2420,
                    "end": 2421
                  },
                  "start": 2420,
                  "end": 2422
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2423,
                  "end": 2428
                },
                "optional": false,
                "computed": false,
                "start": 2420,
                "end": 2428
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2420,
              "end": 2430
            },
            "directive": null,
            "start": 2420,
            "end": 2431
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2436,
                "end": 2437
              },
              "right": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2441,
                      "end": 2447
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2450,
                      "end": 2459
                    }
                  ],
                  "start": 2441,
                  "end": 2459
                },
                "expression": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 2460,
                  "end": 2462
                },
                "start": 2440,
                "end": 2462
              },
              "start": 2436,
              "end": 2462
            },
            "directive": null,
            "start": 2436,
            "end": 2463
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2468,
                    "end": 2469
                  },
                  "start": 2468,
                  "end": 2470
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2471,
                  "end": 2476
                },
                "optional": false,
                "computed": false,
                "start": 2468,
                "end": 2476
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2468,
              "end": 2478
            },
            "directive": null,
            "start": 2468,
            "end": 2479
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2484,
                "end": 2485
              },
              "right": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2489,
                      "end": 2495
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 2498,
                      "end": 2502
                    }
                  ],
                  "start": 2489,
                  "end": 2502
                },
                "expression": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 2503,
                  "end": 2505
                },
                "start": 2488,
                "end": 2505
              },
              "start": 2484,
              "end": 2505
            },
            "directive": null,
            "start": 2484,
            "end": 2506
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2511,
                    "end": 2512
                  },
                  "start": 2511,
                  "end": 2513
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2514,
                  "end": 2519
                },
                "optional": false,
                "computed": false,
                "start": 2511,
                "end": 2519
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2511,
              "end": 2521
            },
            "directive": null,
            "start": 2511,
            "end": 2522
          }
        ],
        "start": 2230,
        "end": 2524
      },
      "expression": false,
      "start": 2216,
      "end": 2524
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2535,
        "end": 2537
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSStringKeyword",
                      "start": 2553,
                      "end": 2559
                    },
                    "start": 2551,
                    "end": 2559
                  },
                  "start": 2550,
                  "end": 2559
                },
                "init": null,
                "definite": false,
                "start": 2550,
                "end": 2559
              }
            ],
            "declare": false,
            "start": 2546,
            "end": 2560
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2565,
                    "end": 2566
                  },
                  "start": 2565,
                  "end": 2567
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2568,
                  "end": 2573
                },
                "optional": false,
                "computed": false,
                "start": 2565,
                "end": 2573
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2565,
              "end": 2575
            },
            "directive": null,
            "start": 2565,
            "end": 2576
          }
        ],
        "start": 2540,
        "end": 2578
      },
      "expression": false,
      "start": 2526,
      "end": 2578
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 2578
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 25,
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
    "value": "boolean",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
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
    "value": "Optional",
    "start": 53,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Some",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 84,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 91,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "none",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 133,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Some",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 181,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "none",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "none",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "''",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "isSome",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 249,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 256,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 270,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 276,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Some",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 293,
    "end": 299
  },
  {
    "type": "String",
    "value": "'some'",
    "start": 300,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 307,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 320,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "someFrom",
    "start": 329,
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
    "value": "a",
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
    "value": "some",
    "start": 341,
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
    "value": "a",
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
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 376,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 383,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "makeSome",
    "start": 398,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 411,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 441,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "none",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 486,
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
    "value": "cond",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "someFrom",
    "start": 553,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "isSome",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 579,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "makeSome",
    "start": 593,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 643,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 725,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 732,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 796,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 805,
    "end": 808
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 809,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 832,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 877,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 886,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 899,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 924,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 966,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1043,
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
    "type": "Identifier",
    "value": "x",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1100,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1208,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1217,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1228,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 1235,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1253,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1265,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1301,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1410,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1419,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1437,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1446,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1455,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1467,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1503,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1507,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1520,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1614,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1623,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1641,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1650,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1659,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1671,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1707,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1725,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1790,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1799,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1810,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1817,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1826,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1835,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1847,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1883,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1887,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1896,
    "end": 1899
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1900,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1997,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 2006,
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
    "value": ":",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2012,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2021,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2035,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2039,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2052,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2061,
    "end": 2063
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2064,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2073,
    "end": 2076
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 2077,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2142,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2216,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2225,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2236,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2252,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2264,
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
    "value": "x",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "slice",
    "start": 2277,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2294,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2305,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2322,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "slice",
    "start": 2340,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2357,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2370,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2388,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2400,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2405,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2423,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2441,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2450,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2460,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2471,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2489,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2498,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2503,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2514,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2526,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 2535,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2546,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2553,
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
    "value": "x",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2568,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2577,
    "end": 2578
  }
]
```

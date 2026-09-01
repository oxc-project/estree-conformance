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
        "name": "Attributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 37
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 51,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 60
          }
        ],
        "start": 37,
        "end": 61
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 74
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 82
          },
          "typeArguments": null,
          "start": 78,
          "end": 82
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 85,
          "end": 91
        },
        "optional": false,
        "readonly": null,
        "start": 64,
        "end": 94
      },
      "declare": false,
      "start": 22,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 107
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
              "start": 108,
              "end": 109
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 128
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    },
                    "start": 129,
                    "end": 136
                  }
                ],
                "start": 128,
                "end": 137
              },
              "start": 118,
              "end": 137
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 108,
            "end": 137
          }
        ],
        "start": 107,
        "end": 138
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
              "name": "multiply",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 153
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 154,
                      "end": 155
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 174
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 181,
                                "end": 182
                              },
                              "typeArguments": null,
                              "start": 181,
                              "end": 182
                            },
                            "start": 175,
                            "end": 182
                          }
                        ],
                        "start": 174,
                        "end": 183
                      },
                      "start": 164,
                      "end": 183
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 154,
                    "end": 183
                  }
                ],
                "start": 153,
                "end": 184
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
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 189
                      },
                      "typeArguments": null,
                      "start": 188,
                      "end": 189
                    },
                    "start": 186,
                    "end": 189
                  },
                  "start": 185,
                  "end": 189
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Query",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 197
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 198,
                              "end": 199
                            },
                            "typeArguments": null,
                            "start": 198,
                            "end": 199
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 202,
                              "end": 203
                            },
                            "typeArguments": null,
                            "start": 202,
                            "end": 203
                          }
                        ],
                        "start": 198,
                        "end": 203
                      }
                    ],
                    "start": 197,
                    "end": 204
                  },
                  "start": 192,
                  "end": 204
                },
                "start": 190,
                "end": 204
              },
              "body": null,
              "expression": false,
              "start": 153,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 205
          }
        ],
        "start": 139,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassName",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 245
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
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
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "typeArguments": null,
          "start": 257,
          "end": 258
        },
        "start": 251,
        "end": 258
      },
      "declare": false,
      "start": 231,
      "end": 259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassNameMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 277
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 278,
            "end": 279
          }
        ],
        "start": 277,
        "end": 280
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 287
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "typeArguments": null,
            "start": 297,
            "end": 298
          },
          "start": 291,
          "end": 298
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 302,
          "end": 309
        },
        "optional": true,
        "readonly": null,
        "start": 283,
        "end": 311
      },
      "declare": false,
      "start": 260,
      "end": 311
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassNameObjectMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 335
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 337
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 336,
            "end": 337
          }
        ],
        "start": 335,
        "end": 338
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSObjectKeyword",
            "start": 341,
            "end": 347
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassNameMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 362
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 364
                  },
                  "typeArguments": null,
                  "start": 363,
                  "end": 364
                }
              ],
              "start": 362,
              "end": 365
            },
            "start": 350,
            "end": 365
          }
        ],
        "start": 341,
        "end": 365
      },
      "declare": false,
      "start": 312,
      "end": 366
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassNameArg",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 384
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 386
          }
        ],
        "start": 384,
        "end": 387
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassName",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 399
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "typeArguments": null,
                  "start": 400,
                  "end": 401
                }
              ],
              "start": 399,
              "end": 402
            },
            "start": 390,
            "end": 402
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassNameObjectMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 423
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 425
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 425
                }
              ],
              "start": 423,
              "end": 426
            },
            "start": 405,
            "end": 426
          }
        ],
        "start": 390,
        "end": 426
      },
      "declare": false,
      "start": 367,
      "end": 427
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "css",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 448
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
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "constraint": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 463
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 467,
                  "end": 474
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 477,
                  "end": 483
                },
                "optional": false,
                "readonly": null,
                "start": 459,
                "end": 485
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 449,
              "end": 485
            }
          ],
          "start": 448,
          "end": 486
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 495,
                  "end": 496
                },
                "typeArguments": null,
                "start": 495,
                "end": 496
              },
              "start": 493,
              "end": 496
            },
            "start": 487,
            "end": 496
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "classNames",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 511
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
                    "name": "ClassNameArg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 525
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 526,
                          "end": 527
                        },
                        "typeArguments": null,
                        "start": 526,
                        "end": 527
                      }
                    ],
                    "start": 525,
                    "end": 528
                  },
                  "start": 513,
                  "end": 528
                },
                "start": 513,
                "end": 530
              },
              "start": 511,
              "end": 530
            },
            "value": null,
            "start": 498,
            "end": 530
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 533,
            "end": 539
          },
          "start": 531,
          "end": 539
        },
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
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 554
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "classNames",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 567
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 568,
                        "end": 571
                      },
                      "optional": false,
                      "computed": false,
                      "start": 557,
                      "end": 571
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
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 572,
                            "end": 575
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 589,
                                  "end": 592
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 596,
                                  "end": 600
                                },
                                "start": 589,
                                "end": 600
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 617,
                                      "end": 621
                                    },
                                    "start": 610,
                                    "end": 622
                                  }
                                ],
                                "start": 602,
                                "end": 628
                              },
                              "alternate": null,
                              "start": 585,
                              "end": 628
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
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 644,
                                    "end": 647
                                  },
                                  "prefix": true,
                                  "start": 637,
                                  "end": 647
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 651,
                                  "end": 659
                                },
                                "start": 637,
                                "end": 659
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "styles",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 676,
                                        "end": 682
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 683,
                                        "end": 686
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 676,
                                      "end": 687
                                    },
                                    "start": 669,
                                    "end": 688
                                  }
                                ],
                                "start": 661,
                                "end": 694
                              },
                              "alternate": null,
                              "start": 633,
                              "end": 694
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
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 710,
                                    "end": 713
                                  },
                                  "prefix": true,
                                  "start": 703,
                                  "end": 713
                                },
                                "operator": "==",
                                "right": {
                                  "type": "Literal",
                                  "value": "object",
                                  "raw": "\"object\"",
                                  "start": 717,
                                  "end": 725
                                },
                                "start": 703,
                                "end": 725
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 742,
                                              "end": 748
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "keys",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 749,
                                              "end": 753
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 742,
                                            "end": 753
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "arg",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 754,
                                              "end": 757
                                            }
                                          ],
                                          "optional": false,
                                          "start": 742,
                                          "end": 758
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 759,
                                          "end": 765
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 742,
                                        "end": 765
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ClassNameObject",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 766,
                                              "end": 781
                                            },
                                            "typeArguments": null,
                                            "start": 766,
                                            "end": 781
                                          }
                                        ],
                                        "start": 765,
                                        "end": 782
                                      },
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
                                              "name": "obj",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "ClassNameObject",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 789,
                                                    "end": 804
                                                  },
                                                  "typeArguments": null,
                                                  "start": 789,
                                                  "end": 804
                                                },
                                                "start": 787,
                                                "end": 804
                                              },
                                              "start": 784,
                                              "end": 804
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "key",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "S",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 817,
                                                      "end": 818
                                                    },
                                                    "typeArguments": null,
                                                    "start": 817,
                                                    "end": 818
                                                  },
                                                  "start": 811,
                                                  "end": 818
                                                },
                                                "start": 809,
                                                "end": 818
                                              },
                                              "start": 806,
                                              "end": 818
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
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 839,
                                                      "end": 856
                                                    },
                                                    "init": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "styles",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 859,
                                                        "end": 865
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "key",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 866,
                                                        "end": 869
                                                      },
                                                      "optional": false,
                                                      "computed": true,
                                                      "start": 859,
                                                      "end": 870
                                                    },
                                                    "definite": false,
                                                    "start": 839,
                                                    "end": 870
                                                  }
                                                ],
                                                "declare": false,
                                                "start": 833,
                                                "end": 871
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
                                                      "name": "obj",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 880,
                                                      "end": 883
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 884,
                                                      "end": 901
                                                    },
                                                    "optional": false,
                                                    "computed": true,
                                                    "start": 880,
                                                    "end": 902
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "TSAsExpression",
                                                      "expression": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "arg",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 906,
                                                        "end": 909
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ClassNameMap",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 913,
                                                          "end": 925
                                                        },
                                                        "typeArguments": {
                                                          "type": "TSTypeParameterInstantiation",
                                                          "params": [
                                                            {
                                                              "type": "TSTypeReference",
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "S",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 926,
                                                                "end": 927
                                                              },
                                                              "typeArguments": null,
                                                              "start": 926,
                                                              "end": 927
                                                            }
                                                          ],
                                                          "start": 925,
                                                          "end": 928
                                                        },
                                                        "start": 913,
                                                        "end": 928
                                                      },
                                                      "start": 906,
                                                      "end": 928
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "key",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 930,
                                                      "end": 933
                                                    },
                                                    "optional": false,
                                                    "computed": true,
                                                    "start": 905,
                                                    "end": 934
                                                  },
                                                  "start": 880,
                                                  "end": 934
                                                },
                                                "directive": null,
                                                "start": 880,
                                                "end": 935
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "obj",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 952,
                                                  "end": 955
                                                },
                                                "start": 945,
                                                "end": 956
                                              }
                                            ],
                                            "start": 823,
                                            "end": 964
                                          },
                                          "id": null,
                                          "generator": false,
                                          "start": 783,
                                          "end": 964
                                        },
                                        {
                                          "type": "ObjectExpression",
                                          "properties": [],
                                          "start": 966,
                                          "end": 968
                                        }
                                      ],
                                      "optional": false,
                                      "start": 742,
                                      "end": 969
                                    },
                                    "start": 735,
                                    "end": 970
                                  }
                                ],
                                "start": 727,
                                "end": 976
                              },
                              "alternate": null,
                              "start": 699,
                              "end": 976
                            }
                          ],
                          "start": 579,
                          "end": 980
                        },
                        "id": null,
                        "generator": false,
                        "start": 572,
                        "end": 980
                      }
                    ],
                    "optional": false,
                    "start": 557,
                    "end": 981
                  },
                  "definite": false,
                  "start": 550,
                  "end": 981
                }
              ],
              "declare": false,
              "start": 544,
              "end": 982
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 992,
                "end": 994
              },
              "start": 985,
              "end": 995
            }
          ],
          "start": 540,
          "end": 997
        },
        "expression": false,
        "start": 436,
        "end": 997
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 429,
      "end": 997
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 997
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 27,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 38,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 43,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
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
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 71,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 75,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 110,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "multiply",
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
    "type": "Keyword",
    "value": "extends",
    "start": 156,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 164,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 231,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "ClassName",
    "start": 236,
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
    "value": "S",
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
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 260,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "ClassNameMap",
    "start": 265,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 288,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 291,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 312,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "ClassNameObjectMap",
    "start": 317,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "ClassNameMap",
    "start": 350,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 367,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "ClassNameArg",
    "start": 372,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "ClassName",
    "start": 390,
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
    "value": "S",
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
    "value": "|",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "ClassNameObjectMap",
    "start": 405,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 429,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 436,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "css",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 451,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 464,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 467,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 474,
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
    "value": "string",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "classNames",
    "start": 501,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "ClassNameArg",
    "start": 513,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 544,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "classNames",
    "start": 557,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 593,
    "end": 595
  },
  {
    "type": "Null",
    "value": "null",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 610,
    "end": 616
  },
  {
    "type": "Null",
    "value": "null",
    "start": 617,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 637,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 648,
    "end": 650
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 651,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 669,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 683,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 699,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 703,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 714,
    "end": 716
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 717,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 735,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 742,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 749,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "ClassNameObject",
    "start": 766,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "ClassNameObject",
    "start": 789,
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
    "value": "key",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 811,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 833,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "exportedClassName",
    "start": 839,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 859,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 880,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "exportedClassName",
    "start": 884,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 906,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 910,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "ClassNameMap",
    "start": 913,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 945,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 985,
    "end": 991
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 992,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997
  }
]
```

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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberName",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 50
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
                      "start": 52,
                      "end": 53
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 52,
                    "end": 53
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 54,
                    "end": 55
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
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
                "start": 51,
                "end": 58
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
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 81
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 82,
                              "end": 83
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 82,
                            "end": 83
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 85
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 84,
                            "end": 85
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
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
                          }
                        ],
                        "start": 81,
                        "end": 88
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 95,
                              "end": 98
                            },
                            "start": 93,
                            "end": 98
                          },
                          "start": 89,
                          "end": 98
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 107,
                              "end": 110
                            },
                            "start": 105,
                            "end": 110
                          },
                          "start": 100,
                          "end": 110
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg3",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 119,
                              "end": 122
                            },
                            "start": 117,
                            "end": 122
                          },
                          "start": 112,
                          "end": 122
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MemberName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 135
                          },
                          "typeArguments": null,
                          "start": 125,
                          "end": 135
                        },
                        "start": 123,
                        "end": 135
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 136,
                        "end": 147
                      },
                      "expression": false,
                      "start": 81,
                      "end": 147
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 68,
                    "end": 147
                  }
                ],
                "start": 58,
                "end": 153
              },
              "abstract": false,
              "declare": false,
              "start": 34,
              "end": 153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 153
          }
        ],
        "start": 21,
        "end": 155
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 155
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 178
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 208
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
                      "start": 210,
                      "end": 211
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 210,
                    "end": 211
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 212,
                    "end": 213
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 215
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 214,
                    "end": 215
                  }
                ],
                "start": 209,
                "end": 216
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 237
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PullTypeSymbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 253
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 253
                      },
                      "start": 237,
                      "end": 253
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 256,
                      "end": 260
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 226,
                    "end": 261
                  }
                ],
                "start": 216,
                "end": 267
              },
              "abstract": false,
              "declare": false,
              "start": 192,
              "end": 267
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 185,
            "end": 267
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 299
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
                      "start": 301,
                      "end": 302
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 301,
                    "end": 302
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 304
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 303,
                    "end": 304
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 305,
                    "end": 306
                  }
                ],
                "start": 300,
                "end": 307
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 325
              },
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
                      "name": "_elementType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 344,
                      "end": 356
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PullTypeSymbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 372
                        },
                        "typeArguments": null,
                        "start": 358,
                        "end": 372
                      },
                      "start": 356,
                      "end": 372
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 375,
                      "end": 379
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 336,
                    "end": 380
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 404
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
                              "name": "A",
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
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 407,
                              "end": 408
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 407,
                            "end": 408
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 409,
                              "end": 410
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 409,
                            "end": 410
                          }
                        ],
                        "start": 404,
                        "end": 411
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeSymbol",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 426,
                                "end": 436
                              },
                              "typeArguments": null,
                              "start": 426,
                              "end": 436
                            },
                            "start": 424,
                            "end": 436
                          },
                          "start": 412,
                          "end": 436
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "useConstraintInName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 460,
                              "end": 467
                            },
                            "start": 458,
                            "end": 467
                          },
                          "start": 438,
                          "end": 467
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
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 487,
                                  "end": 488
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 491,
                                          "end": 495
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "getScopedNameEx",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 496,
                                          "end": 511
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 491,
                                        "end": 511
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "scopeSymbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 512,
                                          "end": 523
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "useConstraintInName",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 525,
                                          "end": 544
                                        }
                                      ],
                                      "optional": false,
                                      "start": 491,
                                      "end": 545
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "toString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 546,
                                      "end": 554
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 491,
                                    "end": 554
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 491,
                                  "end": 556
                                },
                                "definite": false,
                                "start": 487,
                                "end": 556
                              }
                            ],
                            "declare": false,
                            "start": 483,
                            "end": 557
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 577,
                              "end": 578
                            },
                            "start": 570,
                            "end": 579
                          }
                        ],
                        "start": 469,
                        "end": 589
                      },
                      "expression": false,
                      "start": 404,
                      "end": 589
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 389,
                    "end": 589
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getScopedNameEx",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 620
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 621,
                              "end": 622
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 621,
                            "end": 622
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 623,
                              "end": 624
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 623,
                            "end": 624
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 625,
                              "end": 626
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 625,
                            "end": 626
                          }
                        ],
                        "start": 620,
                        "end": 627
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeSymbol",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 642,
                                "end": 652
                              },
                              "typeArguments": null,
                              "start": 642,
                              "end": 652
                            },
                            "start": 640,
                            "end": 652
                          },
                          "start": 628,
                          "end": 652
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "useConstraintInName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 676,
                              "end": 683
                            },
                            "start": 674,
                            "end": 683
                          },
                          "start": 654,
                          "end": 683
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getPrettyTypeName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 705,
                              "end": 712
                            },
                            "start": 703,
                            "end": 712
                          },
                          "start": 685,
                          "end": 712
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getTypeParamMarkerInfo",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 739,
                              "end": 746
                            },
                            "start": 737,
                            "end": 746
                          },
                          "start": 714,
                          "end": 746
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 766,
                                  "end": 770
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 771,
                                  "end": 778
                                },
                                "optional": false,
                                "computed": false,
                                "start": 766,
                                "end": 778
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 766,
                              "end": 780
                            },
                            "consequent": {
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
                                        "name": "elementMemberName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 804,
                                        "end": 821
                                      },
                                      "init": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 824,
                                            "end": 828
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_elementType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 829,
                                            "end": 841
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 824,
                                          "end": 841
                                        },
                                        "consequent": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 861,
                                                    "end": 865
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 866,
                                                    "end": 878
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 861,
                                                  "end": 878
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isArray",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 879,
                                                  "end": 886
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 861,
                                                "end": 886
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 861,
                                              "end": 888
                                            },
                                            "operator": "||",
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 892,
                                                    "end": 896
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 897,
                                                    "end": 909
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 892,
                                                  "end": 909
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isNamedTypeSymbol",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 910,
                                                  "end": 927
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 892,
                                                "end": 927
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 892,
                                              "end": 929
                                            },
                                            "start": 861,
                                            "end": 929
                                          },
                                          "consequent": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 948,
                                                  "end": 952
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 953,
                                                  "end": 965
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 948,
                                                "end": 965
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getScopedNameEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 966,
                                                "end": 981
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 948,
                                              "end": 981
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 982,
                                                "end": 993
                                              },
                                              {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false",
                                                "start": 995,
                                                "end": 1000
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1002,
                                                "end": 1019
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getTypeParamMarkerInfo",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1021,
                                                "end": 1043
                                              }
                                            ],
                                            "optional": false,
                                            "start": 948,
                                            "end": 1044
                                          },
                                          "alternate": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 1063,
                                                  "end": 1067
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1068,
                                                  "end": 1080
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1063,
                                                "end": 1080
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getMemberTypeNameEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1081,
                                                "end": 1100
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1063,
                                              "end": 1100
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false",
                                                "start": 1101,
                                                "end": 1106
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1108,
                                                "end": 1119
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1121,
                                                "end": 1138
                                              }
                                            ],
                                            "optional": false,
                                            "start": 1063,
                                            "end": 1139
                                          },
                                          "start": 861,
                                          "end": 1139
                                        },
                                        "alternate": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 1143,
                                          "end": 1144
                                        },
                                        "start": 824,
                                        "end": 1144
                                      },
                                      "definite": false,
                                      "start": 804,
                                      "end": 1144
                                    }
                                  ],
                                  "declare": false,
                                  "start": 800,
                                  "end": 1144
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MemberName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1168,
                                        "end": 1178
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "create",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1179,
                                        "end": 1185
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1168,
                                      "end": 1185
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "elementMemberName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1186,
                                        "end": 1203
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "\"\"",
                                        "start": 1205,
                                        "end": 1207
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "[]",
                                        "raw": "\"[]\"",
                                        "start": 1209,
                                        "end": 1213
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1168,
                                    "end": 1214
                                  },
                                  "start": 1161,
                                  "end": 1215
                                }
                              ],
                              "start": 782,
                              "end": 1229
                            },
                            "alternate": null,
                            "start": 762,
                            "end": 1229
                          }
                        ],
                        "start": 748,
                        "end": 1239
                      },
                      "expression": false,
                      "start": 620,
                      "end": 1239
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 598,
                    "end": 1239
                  }
                ],
                "start": 326,
                "end": 1245
              },
              "abstract": false,
              "declare": false,
              "start": 279,
              "end": 1245
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 272,
            "end": 1245
          }
        ],
        "start": 179,
        "end": 1247
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 158,
      "end": 1247
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1249
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "MemberName",
    "start": 40,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 68,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 104,
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
    "value": "any",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "MemberName",
    "start": 125,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 158,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 168,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 185,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "PullSymbol",
    "start": 198,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 226,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 233,
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
    "value": "PullTypeSymbol",
    "start": 239,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Null",
    "value": "null",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 272,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "PullTypeSymbol",
    "start": 285,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 307,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "PullSymbol",
    "start": 315,
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
    "value": "private",
    "start": 336,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "_elementType",
    "start": 344,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "PullTypeSymbol",
    "start": 358,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Null",
    "value": "null",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 389,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 396,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "B",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "scopeSymbol",
    "start": 412,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "PullSymbol",
    "start": 426,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "useConstraintInName",
    "start": 438,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 460,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 483,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "getScopedNameEx",
    "start": 496,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "scopeSymbol",
    "start": 512,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "useConstraintInName",
    "start": 525,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 546,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 570,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 598,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "getScopedNameEx",
    "start": 605,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "scopeSymbol",
    "start": 628,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "PullSymbol",
    "start": 642,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "useConstraintInName",
    "start": 654,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 676,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "getPrettyTypeName",
    "start": 685,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 705,
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
    "value": "getTypeParamMarkerInfo",
    "start": 714,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 739,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 771,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 800,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "elementMemberName",
    "start": 804,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 824,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "_elementType",
    "start": 829,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "_elementType",
    "start": 866,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 879,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "||",
    "start": 889,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 892,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "_elementType",
    "start": 897,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "isNamedTypeSymbol",
    "start": 910,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "?",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "_elementType",
    "start": 953,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "getScopedNameEx",
    "start": 966,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "scopeSymbol",
    "start": 982,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 993,
    "end": 994
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "getPrettyTypeName",
    "start": 1002,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "getTypeParamMarkerInfo",
    "start": 1021,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "_elementType",
    "start": 1068,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "getMemberTypeNameEx",
    "start": 1081,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1101,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "scopeSymbol",
    "start": 1108,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "getPrettyTypeName",
    "start": 1121,
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
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1161,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "MemberName",
    "start": 1168,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "elementMemberName",
    "start": 1186,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "String",
    "value": "\"[]\"",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1246,
    "end": 1247
  }
]
```

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
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
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
              "start": 29,
              "end": 33
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                },
                "start": 35,
                "end": 40
              },
              "start": 33,
              "end": 40
            },
            "value": null,
            "start": 26,
            "end": 40
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
              "start": 45,
              "end": 46
            },
            "typeArguments": null,
            "start": 45,
            "end": 46
          },
          "start": 42,
          "end": 46
        },
        "start": 22,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 59
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 77
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      },
                      "start": 86,
                      "end": 94
                    },
                    "start": 85,
                    "end": 94
                  },
                  "readonly": false,
                  "static": false,
                  "start": 78,
                  "end": 94
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 106,
                        "end": 112
                      },
                      "start": 104,
                      "end": 112
                    },
                    "start": 103,
                    "end": 112
                  },
                  "readonly": false,
                  "static": false,
                  "start": 96,
                  "end": 112
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 114,
                "end": 116
              },
              "expression": false,
              "start": 77,
              "end": 116
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 116
          }
        ],
        "start": 60,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 133
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
      },
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
              "start": 153,
              "end": 164
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
                  },
                  "start": 165,
                  "end": 174
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    },
                    "start": 177,
                    "end": 185
                  },
                  "start": 176,
                  "end": 185
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 197,
                        "end": 203
                      },
                      "start": 195,
                      "end": 203
                    },
                    "start": 194,
                    "end": 203
                  },
                  "readonly": false,
                  "static": false,
                  "start": 187,
                  "end": 203
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
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 221,
                          "end": 222
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 225
                        }
                      ],
                      "optional": false,
                      "start": 215,
                      "end": 226
                    },
                    "directive": null,
                    "start": 215,
                    "end": 227
                  }
                ],
                "start": 205,
                "end": 233
              },
              "expression": false,
              "start": 164,
              "end": 233
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 153,
            "end": 233
          }
        ],
        "start": 147,
        "end": 235
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 235
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Printable",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 256
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "print",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 268
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 272,
                "end": 276
              },
              "start": 270,
              "end": 276
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 263,
            "end": 277
          }
        ],
        "start": 257,
        "end": 279
      },
      "declare": false,
      "start": 237,
      "end": 279
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
            "name": "Printable",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 296
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
                    "start": 300,
                    "end": 301
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 321
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 326
                          },
                          "typeArguments": null,
                          "start": 322,
                          "end": 326
                        }
                      ],
                      "start": 321,
                      "end": 327
                    },
                    "start": 310,
                    "end": 327
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 300,
                  "end": 327
                }
              ],
              "start": 299,
              "end": 328
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "superClass",
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
                      "start": 341,
                      "end": 342
                    },
                    "typeArguments": null,
                    "start": 341,
                    "end": 342
                  },
                  "start": 339,
                  "end": 342
                },
                "start": 329,
                "end": 342
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 356
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Printable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 357,
                            "end": 366
                          },
                          "typeArguments": null,
                          "start": 357,
                          "end": 366
                        }
                      ],
                      "start": 356,
                      "end": 367
                    },
                    "start": 345,
                    "end": 367
                  },
                  {
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
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 379
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 381,
                            "end": 387
                          },
                          "start": 379,
                          "end": 387
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 372,
                        "end": 387
                      }
                    ],
                    "start": 370,
                    "end": 389
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 393
                    },
                    "typeArguments": null,
                    "start": 392,
                    "end": 393
                  }
                ],
                "start": 345,
                "end": 393
              },
              "start": 343,
              "end": 393
            },
            "body": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "superClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 425
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
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 450
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 453,
                      "end": 460
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 436,
                    "end": 461
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "print",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 475
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 498,
                                  "end": 504
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 507,
                                        "end": 511
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 512,
                                        "end": 513
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 507,
                                      "end": 513
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\"",
                                      "start": 516,
                                      "end": 519
                                    },
                                    "start": 507,
                                    "end": 519
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 522,
                                      "end": 526
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 527,
                                      "end": 528
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 522,
                                    "end": 528
                                  },
                                  "start": 507,
                                  "end": 528
                                },
                                "definite": false,
                                "start": 498,
                                "end": 528
                              }
                            ],
                            "declare": false,
                            "start": 492,
                            "end": 529
                          }
                        ],
                        "start": 478,
                        "end": 539
                      },
                      "expression": false,
                      "start": 475,
                      "end": 539
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 470,
                    "end": 539
                  }
                ],
                "start": 426,
                "end": 545
              },
              "abstract": false,
              "declare": false,
              "start": 401,
              "end": 545
            },
            "id": null,
            "generator": false,
            "start": 299,
            "end": 545
          },
          "definite": false,
          "start": 287,
          "end": 545
        }
      ],
      "declare": false,
      "start": 281,
      "end": 545
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 563
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 574
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 576,
                "end": 582
              },
              "start": 574,
              "end": 582
            },
            "accessibility": null,
            "static": false,
            "start": 570,
            "end": 583
          }
        ],
        "start": 564,
        "end": 585
      },
      "declare": false,
      "start": 547,
      "end": 585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null,
        "start": 596,
        "end": 602
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
              "start": 603,
              "end": 604
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 624
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 625,
                    "end": 627
                  }
                ],
                "start": 624,
                "end": 628
              },
              "start": 613,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 603,
            "end": 628
          }
        ],
        "start": 602,
        "end": 629
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superClass",
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
                "start": 642,
                "end": 643
              },
              "typeArguments": null,
              "start": 642,
              "end": 643
            },
            "start": 640,
            "end": 643
          },
          "start": 630,
          "end": 643
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
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
                      "name": "Tagged",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 664
                    },
                    "typeArguments": null,
                    "start": 658,
                    "end": 664
                  }
                ],
                "start": 657,
                "end": 665
              },
              "start": 646,
              "end": 665
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 669
              },
              "typeArguments": null,
              "start": 668,
              "end": 669
            }
          ],
          "start": 646,
          "end": 669
        },
        "start": 644,
        "end": 669
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "superClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 702
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
                    "name": "_tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 717
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 719,
                      "end": 725
                    },
                    "start": 717,
                    "end": 725
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
                  "start": 713,
                  "end": 726
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 735,
                    "end": 746
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
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 750,
                          "end": 754
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 756,
                              "end": 759
                            },
                            "start": 756,
                            "end": 761
                          },
                          "start": 754,
                          "end": 761
                        },
                        "value": null,
                        "start": 747,
                        "end": 761
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
                              "type": "Super",
                              "start": 777,
                              "end": 782
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 786,
                                  "end": 790
                                },
                                "start": 783,
                                "end": 790
                              }
                            ],
                            "optional": false,
                            "start": 777,
                            "end": 791
                          },
                          "directive": null,
                          "start": 777,
                          "end": 792
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
                                "start": 805,
                                "end": 809
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_tag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 810,
                                "end": 814
                              },
                              "optional": false,
                              "computed": false,
                              "start": 805,
                              "end": 814
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "\"hello\"",
                              "start": 817,
                              "end": 824
                            },
                            "start": 805,
                            "end": 824
                          },
                          "directive": null,
                          "start": 805,
                          "end": 825
                        }
                      ],
                      "start": 763,
                      "end": 835
                    },
                    "expression": false,
                    "start": 746,
                    "end": 835
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 735,
                  "end": 835
                }
              ],
              "start": 703,
              "end": 841
            },
            "abstract": false,
            "declare": false,
            "start": 676,
            "end": 841
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 854
            },
            "start": 846,
            "end": 855
          }
        ],
        "start": 670,
        "end": 857
      },
      "expression": false,
      "start": 587,
      "end": 857
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
            "name": "Thing1",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 871
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "typeAnnotation": null,
              "start": 874,
              "end": 880
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 888
              }
            ],
            "optional": false,
            "start": 874,
            "end": 889
          },
          "definite": false,
          "start": 865,
          "end": 889
        }
      ],
      "declare": false,
      "start": 859,
      "end": 890
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
            "name": "Thing2",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 903
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 912
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Printable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 922
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 930
                  }
                ],
                "optional": false,
                "start": 913,
                "end": 931
              }
            ],
            "optional": false,
            "start": 906,
            "end": 932
          },
          "definite": false,
          "start": 897,
          "end": 932
        }
      ],
      "declare": false,
      "start": 891,
      "end": 933
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing2",
          "optional": false,
          "typeAnnotation": null,
          "start": 934,
          "end": 940
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": null,
          "start": 941,
          "end": 948
        },
        "optional": false,
        "computed": false,
        "start": 934,
        "end": 948
      },
      "directive": null,
      "start": 934,
      "end": 949
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 962
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 982
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 989,
                    "end": 995
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 996,
                      "end": 997
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 999,
                      "end": 1000
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1002,
                      "end": 1003
                    }
                  ],
                  "start": 985,
                  "end": 1004
                },
                "definite": false,
                "start": 977,
                "end": 1004
              }
            ],
            "declare": false,
            "start": 971,
            "end": 1005
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1010,
                "end": 1015
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1017
              },
              "optional": false,
              "computed": false,
              "start": 1010,
              "end": 1017
            },
            "directive": null,
            "start": 1010,
            "end": 1018
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1028
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1033
              },
              "optional": false,
              "computed": false,
              "start": 1023,
              "end": 1033
            },
            "directive": null,
            "start": 1023,
            "end": 1034
          }
        ],
        "start": 965,
        "end": 1036
      },
      "expression": false,
      "start": 951,
      "end": 1036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
        "end": 1049
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1069
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1082
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1083,
                      "end": 1084
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1086,
                      "end": 1087
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1089,
                      "end": 1090
                    }
                  ],
                  "start": 1072,
                  "end": 1091
                },
                "definite": false,
                "start": 1064,
                "end": 1091
              }
            ],
            "declare": false,
            "start": 1058,
            "end": 1092
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1097,
                "end": 1102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1104
              },
              "optional": false,
              "computed": false,
              "start": 1097,
              "end": 1104
            },
            "directive": null,
            "start": 1097,
            "end": 1105
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1120
              },
              "optional": false,
              "computed": false,
              "start": 1110,
              "end": 1120
            },
            "directive": null,
            "start": 1110,
            "end": 1121
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1126,
                  "end": 1131
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "print",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1137
                },
                "optional": false,
                "computed": false,
                "start": 1126,
                "end": 1137
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1126,
              "end": 1139
            },
            "directive": null,
            "start": 1126,
            "end": 1140
          }
        ],
        "start": 1052,
        "end": 1142
      },
      "expression": false,
      "start": 1038,
      "end": 1142
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1150,
        "end": 1156
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1165,
        "end": 1171
      },
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
              "start": 1178,
              "end": 1189
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1195,
                      "end": 1201
                    },
                    "start": 1193,
                    "end": 1201
                  },
                  "start": 1190,
                  "end": 1201
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
                        "type": "Super",
                        "start": 1213,
                        "end": 1218
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1219,
                          "end": 1221
                        },
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 1223,
                          "end": 1225
                        },
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 1227,
                          "end": 1229
                        }
                      ],
                      "optional": false,
                      "start": 1213,
                      "end": 1230
                    },
                    "directive": null,
                    "start": 1213,
                    "end": 1231
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
                          "start": 1240,
                          "end": 1244
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_tag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1245,
                          "end": 1249
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1240,
                        "end": 1249
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1252,
                        "end": 1255
                      },
                      "start": 1240,
                      "end": 1255
                    },
                    "directive": null,
                    "start": 1240,
                    "end": 1256
                  }
                ],
                "start": 1203,
                "end": 1262
              },
              "expression": false,
              "start": 1189,
              "end": 1262
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1178,
            "end": 1262
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1271
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1284,
                          "end": 1288
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "print",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1289,
                          "end": 1294
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1284,
                        "end": 1294
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1284,
                      "end": 1296
                    },
                    "directive": null,
                    "start": 1284,
                    "end": 1297
                  }
                ],
                "start": 1274,
                "end": 1303
              },
              "expression": false,
              "start": 1271,
              "end": 1303
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1267,
            "end": 1303
          }
        ],
        "start": 1172,
        "end": 1305
      },
      "abstract": false,
      "declare": false,
      "start": 1144,
      "end": 1305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1305
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
    "value": "Constructor",
    "start": 5,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 29,
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
    "value": "any",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 66,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 78,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 96,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 126,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 134,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 153,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 187,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 237,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Printable",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Printable",
    "start": 287,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 302,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 310,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "superClass",
    "start": 329,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 345,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "Printable",
    "start": 357,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 372,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 401,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 407,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "superClass",
    "start": 415,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 436,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 443,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 453,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 492,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 514,
    "end": 515
  },
  {
    "type": "String",
    "value": "\",\"",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 522,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 547,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Tagged",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 587,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "Tagged",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 605,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 613,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "superClass",
    "start": 630,
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
    "value": "T",
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
    "type": "Identifier",
    "value": "Constructor",
    "start": 646,
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
    "value": "Tagged",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 676,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 684,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "superClass",
    "start": 692,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 713,
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
    "value": "string",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 735,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 747,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 777,
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
    "value": "...",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 786,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 815,
    "end": 816
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 817,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 846,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 859,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "Thing1",
    "start": 865,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "Tagged",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 891,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "Thing2",
    "start": 897,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "Tagged",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "Printable",
    "start": 913,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 923,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "Thing2",
    "start": 934,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 941,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 951,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 960,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 971,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 977,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 985,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "Thing1",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 997,
    "end": 998
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1010,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1023,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 1029,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1038,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1047,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1064,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "Thing2",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1097,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ".",
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
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1126,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 1132,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
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
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1144,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "Thing3",
    "start": 1150,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1157,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "Thing2",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1178,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1195,
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
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1213,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1219,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1227,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1267,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1284,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 1289,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1304,
    "end": 1305
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Event",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 44
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
                "start": 45,
                "end": 46
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 45,
              "end": 46
            }
          ],
          "start": 44,
          "end": 47
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
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 62
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
                      "name": "response",
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
                            "start": 75,
                            "end": 76
                          },
                          "typeArguments": null,
                          "start": 75,
                          "end": 76
                        },
                        "start": 73,
                        "end": 76
                      },
                      "start": 65,
                      "end": 76
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 81,
                      "end": 85
                    },
                    "start": 78,
                    "end": 85
                  },
                  "start": 64,
                  "end": 85
                },
                "start": 62,
                "end": 85
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 86
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 97
              },
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
                        "name": "nestedCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 123
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
                              "name": "response",
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
                                    "start": 136,
                                    "end": 137
                                  },
                                  "typeArguments": null,
                                  "start": 136,
                                  "end": 137
                                },
                                "start": 134,
                                "end": 137
                              },
                              "start": 126,
                              "end": 137
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 142,
                              "end": 146
                            },
                            "start": 139,
                            "end": 146
                          },
                          "start": 125,
                          "end": 146
                        },
                        "start": 123,
                        "end": 146
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 109,
                      "end": 147
                    }
                  ],
                  "start": 99,
                  "end": 153
                },
                "start": 97,
                "end": 153
              },
              "accessibility": null,
              "static": false,
              "start": 91,
              "end": 153
            }
          ],
          "start": 48,
          "end": 155
        },
        "declare": false,
        "start": 29,
        "end": 155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CustomEvents",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 181
        },
        "typeParameters": null,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 198
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 199,
                        "end": 205
                      }
                    ],
                    "start": 198,
                    "end": 206
                  },
                  "start": 193,
                  "end": 206
                },
                "start": 191,
                "end": 206
              },
              "accessibility": null,
              "static": false,
              "start": 190,
              "end": 206
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 219
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
                      }
                    ],
                    "start": 219,
                    "end": 227
                  },
                  "start": 214,
                  "end": 227
                },
                "start": 212,
                "end": 227
              },
              "accessibility": null,
              "static": false,
              "start": 211,
              "end": 227
            }
          ],
          "start": 184,
          "end": 229
        },
        "declare": false,
        "start": 164,
        "end": 230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 157,
      "end": 230
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "emit",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
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
              "start": 254,
              "end": 255
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 282
                },
                "typeArguments": null,
                "start": 270,
                "end": 282
              },
              "start": 264,
              "end": 282
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 254,
            "end": 282
          }
        ],
        "start": 253,
        "end": 283
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
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
                "start": 290,
                "end": 291
              },
              "typeArguments": null,
              "start": 290,
              "end": 291
            },
            "start": 288,
            "end": 291
          },
          "start": 284,
          "end": 291
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 311
                },
                "typeArguments": null,
                "start": 299,
                "end": 311
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "typeArguments": null,
                "start": 312,
                "end": 313
              },
              "start": 299,
              "end": 314
            },
            "start": 297,
            "end": 314
          },
          "start": 293,
          "end": 314
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 317,
          "end": 321
        },
        "start": 315,
        "end": 321
      },
      "body": null,
      "expression": false,
      "start": 232,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "emit",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 327
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 328,
            "end": 331
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 356,
                    "end": 358
                  },
                  "id": null,
                  "generator": false,
                  "start": 349,
                  "end": 358
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 339,
                "end": 358
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 370
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nestedCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 396
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 399,
                            "end": 400
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 405,
                          "end": 407
                        },
                        "id": null,
                        "generator": false,
                        "start": 398,
                        "end": 407
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 382,
                      "end": 407
                    }
                  ],
                  "start": 372,
                  "end": 414
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 364,
                "end": 414
              }
            ],
            "start": 333,
            "end": 417
          }
        ],
        "optional": false,
        "start": 323,
        "end": 418
      },
      "directive": null,
      "start": 323,
      "end": 419
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyCompiler",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 500
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
              "name": "compile",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 512
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 516,
                  "end": 520
                },
                "start": 514,
                "end": 520
              },
              "body": null,
              "expression": false,
              "start": 512,
              "end": 521
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 505,
            "end": 521
          }
        ],
        "start": 501,
        "end": 523
      },
      "abstract": false,
      "declare": true,
      "start": 476,
      "end": 523
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebpackPluginInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 555
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
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 565
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
                    "name": "compiler",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyCompiler",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 588
                        },
                        "typeArguments": null,
                        "start": 578,
                        "end": 588
                      },
                      "start": 576,
                      "end": 588
                    },
                    "start": 568,
                    "end": 588
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 593,
                    "end": 597
                  },
                  "start": 590,
                  "end": 597
                },
                "start": 567,
                "end": 597
              },
              "start": 565,
              "end": 597
            },
            "accessibility": null,
            "static": false,
            "start": 560,
            "end": 598
          }
        ],
        "start": 556,
        "end": 600
      },
      "declare": false,
      "start": 524,
      "end": 600
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebpackPluginFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 627
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 647
                },
                "typeArguments": null,
                "start": 637,
                "end": 647
              },
              "start": 635,
              "end": 647
            },
            "start": 631,
            "end": 647
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "compiler",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 669
                },
                "typeArguments": null,
                "start": 659,
                "end": 669
              },
              "start": 657,
              "end": 669
            },
            "start": 649,
            "end": 669
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 674,
            "end": 678
          },
          "start": 671,
          "end": 678
        },
        "start": 630,
        "end": 678
      },
      "declare": false,
      "start": 601,
      "end": 679
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Optimization",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 702
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "minimizer",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 716
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WebpackPluginInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 741
                      },
                      "typeArguments": null,
                      "start": 720,
                      "end": 741
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WebpackPluginFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 744,
                        "end": 765
                      },
                      "typeArguments": null,
                      "start": 744,
                      "end": 765
                    }
                  ],
                  "start": 720,
                  "end": 765
                },
                "start": 719,
                "end": 768
              },
              "start": 717,
              "end": 768
            },
            "accessibility": null,
            "static": false,
            "start": 707,
            "end": 769
          }
        ],
        "start": 703,
        "end": 771
      },
      "declare": false,
      "start": 680,
      "end": 771
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
            "name": "A",
            "optional": false,
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
                        "start": 790,
                        "end": 791
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 790,
                      "end": 791
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 793,
                        "end": 794
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
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
                        },
                        "start": 803,
                        "end": 810
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 793,
                      "end": 810
                    }
                  ],
                  "start": 789,
                  "end": 811
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 820,
                          "end": 821
                        },
                        "typeArguments": null,
                        "start": 820,
                        "end": 821
                      },
                      "start": 818,
                      "end": 821
                    },
                    "start": 815,
                    "end": 821
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 831,
                          "end": 832
                        },
                        "typeArguments": null,
                        "start": 831,
                        "end": 832
                      },
                      "start": 829,
                      "end": 832
                    },
                    "start": 825,
                    "end": 832
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "factory",
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
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 851,
                                "end": 852
                              },
                              "typeArguments": null,
                              "start": 851,
                              "end": 852
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 853,
                                "end": 854
                              },
                              "typeArguments": null,
                              "start": 853,
                              "end": 854
                            },
                            "start": 851,
                            "end": 855
                          },
                          "start": 848,
                          "end": 855
                        },
                        "start": 845,
                        "end": 855
                      },
                      "start": 843,
                      "end": 855
                    },
                    "start": 836,
                    "end": 855
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 861,
                    "end": 865
                  },
                  "start": 858,
                  "end": 865
                },
                "start": 789,
                "end": 865
              },
              "start": 787,
              "end": 865
            },
            "start": 786,
            "end": 865
          },
          "init": null,
          "definite": false,
          "start": 786,
          "end": 865
        }
      ],
      "declare": true,
      "start": 772,
      "end": 866
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
              "name": "applyOptimizationDefaults",
              "optional": false,
              "typeAnnotation": null,
              "start": 880,
              "end": 905
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optimization",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Optimization",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 923,
                        "end": 935
                      },
                      "typeArguments": null,
                      "start": 923,
                      "end": 935
                    },
                    "start": 921,
                    "end": 935
                  },
                  "start": 909,
                  "end": 935
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 944,
                        "end": 945
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optimization",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 958
                        },
                        {
                          "type": "Literal",
                          "value": "minimizer",
                          "raw": "\"minimizer\"",
                          "start": 960,
                          "end": 971
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "apply",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 993,
                                      "end": 998
                                    },
                                    "value": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": false,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "compiler",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1001,
                                          "end": 1009
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 1014,
                                        "end": 1016
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 1000,
                                      "end": 1016
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 993,
                                    "end": 1016
                                  }
                                ],
                                "start": 985,
                                "end": 1023
                              }
                            ],
                            "start": 979,
                            "end": 1028
                          },
                          "id": null,
                          "generator": false,
                          "start": 973,
                          "end": 1028
                        }
                      ],
                      "optional": false,
                      "start": 944,
                      "end": 1029
                    },
                    "directive": null,
                    "start": 944,
                    "end": 1030
                  }
                ],
                "start": 940,
                "end": 1032
              },
              "id": null,
              "generator": false,
              "start": 908,
              "end": 1032
            },
            "definite": false,
            "start": 880,
            "end": 1032
          }
        ],
        "declare": false,
        "start": 874,
        "end": 1033
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 867,
      "end": 1033
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 1033
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 29,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 54,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 65,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 75,
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
    "type": "Keyword",
    "value": "void",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "nestedCallback",
    "start": 109,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 126,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 139,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "export",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 164,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "CustomEvents",
    "start": 169,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Event",
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
    "value": "string",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "Event",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 232,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 240,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 256,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 264,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "CustomEvents",
    "start": 270,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 293,
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
    "value": "CustomEvents",
    "start": 299,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 317,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "emit",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "nestedCallback",
    "start": 382,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 476,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 484,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "MyCompiler",
    "start": 490,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "compile",
    "start": 505,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 524,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "WebpackPluginInstance",
    "start": 534,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "compiler",
    "start": 568,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "MyCompiler",
    "start": 578,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 590,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 601,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "WebpackPluginFunction",
    "start": 606,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 631,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "MyCompiler",
    "start": 637,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "compiler",
    "start": 649,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "MyCompiler",
    "start": 659,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 671,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 680,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "Optimization",
    "start": 690,
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
    "value": "minimizer",
    "start": 707,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "WebpackPluginInstance",
    "start": 720,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "WebpackPluginFunction",
    "start": 744,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 772,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 795,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 803,
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
    "value": "(",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "factory",
    "start": 836,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 848,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 858,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 867,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 874,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "applyOptimizationDefaults",
    "start": 880,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "optimization",
    "start": 909,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "Optimization",
    "start": 923,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "optimization",
    "start": 946,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "String",
    "value": "\"minimizer\"",
    "start": 960,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 993,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "compiler",
    "start": 1001,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033
  }
]
```

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
        "name": "Editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 20
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
              "name": "_editor",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 40
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 25,
            "end": 41
          }
        ],
        "start": 21,
        "end": 43
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugin",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 65
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
              "name": "_plugin",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 85
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 70,
            "end": 86
          }
        ],
        "start": 66,
        "end": 88
      },
      "abstract": false,
      "declare": true,
      "start": 45,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParentConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
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
              "name": "T",
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
          }
        ],
        "start": 107,
        "end": 110
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 120
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
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
                    "start": 137,
                    "end": 138
                  },
                  "typeArguments": null,
                  "start": 137,
                  "end": 138
                },
                "start": 131,
                "end": 138
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 149
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
                            "start": 150,
                            "end": 151
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 151
                        }
                      ],
                      "start": 149,
                      "end": 152
                    },
                    "start": 141,
                    "end": 152
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 153,
                    "end": 154
                  },
                  "start": 141,
                  "end": 155
                },
                "extendsType": {
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
                        "start": 168,
                        "end": 172
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 174,
                          "end": 177
                        },
                        "start": 172,
                        "end": 177
                      },
                      "value": null,
                      "start": 165,
                      "end": 177
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 182,
                      "end": 185
                    },
                    "start": 179,
                    "end": 185
                  },
                  "start": 164,
                  "end": 185
                },
                "trueType": {
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
                        "start": 196,
                        "end": 200
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Parameters",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 212
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Required",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 213,
                                    "end": 221
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
                                          "start": 222,
                                          "end": 223
                                        },
                                        "typeArguments": null,
                                        "start": 222,
                                        "end": 223
                                      }
                                    ],
                                    "start": 221,
                                    "end": 224
                                  },
                                  "start": 213,
                                  "end": 224
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 225,
                                    "end": 226
                                  },
                                  "typeArguments": null,
                                  "start": 225,
                                  "end": 226
                                },
                                "start": 213,
                                "end": 227
                              }
                            ],
                            "start": 212,
                            "end": 228
                          },
                          "start": 202,
                          "end": 228
                        },
                        "start": 200,
                        "end": 228
                      },
                      "value": null,
                      "start": 193,
                      "end": 228
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReturnType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 243
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Required",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 244,
                                "end": 252
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
                                      "start": 253,
                                      "end": 254
                                    },
                                    "typeArguments": null,
                                    "start": 253,
                                    "end": 254
                                  }
                                ],
                                "start": 252,
                                "end": 255
                              },
                              "start": 244,
                              "end": 255
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 256,
                                "end": 257
                              },
                              "typeArguments": null,
                              "start": 256,
                              "end": 257
                            },
                            "start": 244,
                            "end": 258
                          }
                        ],
                        "start": 243,
                        "end": 259
                      },
                      "start": 233,
                      "end": 259
                    },
                    "start": 230,
                    "end": 259
                  },
                  "start": 192,
                  "end": 259
                },
                "falseType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeArguments": null,
                    "start": 266,
                    "end": 267
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 269
                    },
                    "typeArguments": null,
                    "start": 268,
                    "end": 269
                  },
                  "start": 266,
                  "end": 270
                },
                "start": 141,
                "end": 270
              },
              "optional": false,
              "readonly": null,
              "start": 121,
              "end": 273
            }
          ],
          "start": 120,
          "end": 274
        },
        "start": 113,
        "end": 274
      },
      "declare": false,
      "start": 90,
      "end": 275
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendableConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 303
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 314
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 317,
              "end": 320
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 307,
            "end": 320
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Config",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 330
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExtensionConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 360
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 368
                        },
                        "typeArguments": null,
                        "start": 361,
                        "end": 368
                      }
                    ],
                    "start": 360,
                    "end": 369
                  },
                  "start": 345,
                  "end": 369
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExtendableConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 392
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 400
                        },
                        "typeArguments": null,
                        "start": 393,
                        "end": 400
                      }
                    ],
                    "start": 392,
                    "end": 401
                  },
                  "start": 376,
                  "end": 401
                }
              ],
              "start": 343,
              "end": 401
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtendableConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 420
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 428
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 428
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 430,
                    "end": 433
                  }
                ],
                "start": 420,
                "end": 434
              },
              "start": 404,
              "end": 434
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 324,
            "end": 434
          }
        ],
        "start": 303,
        "end": 437
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 446
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 448,
                "end": 454
              },
              "start": 446,
              "end": 454
            },
            "accessibility": null,
            "static": false,
            "start": 442,
            "end": 455
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 468
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
                    "name": "this",
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 484,
                              "end": 488
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 490,
                                "end": 496
                              },
                              "start": 488,
                              "end": 496
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 484,
                            "end": 497
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parent",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 508
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ParentConfig",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 510,
                                    "end": 522
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Config",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 523,
                                          "end": 529
                                        },
                                        "typeArguments": null,
                                        "start": 523,
                                        "end": 529
                                      }
                                    ],
                                    "start": 522,
                                    "end": 530
                                  },
                                  "start": 510,
                                  "end": 530
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "addOptions",
                                    "raw": "\"addOptions\"",
                                    "start": 531,
                                    "end": 543
                                  },
                                  "start": 531,
                                  "end": 543
                                },
                                "start": 510,
                                "end": 544
                              },
                              "start": 508,
                              "end": 544
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 502,
                            "end": 545
                          }
                        ],
                        "start": 478,
                        "end": 549
                      },
                      "start": 476,
                      "end": 549
                    },
                    "start": 472,
                    "end": 549
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 561
                    },
                    "typeArguments": null,
                    "start": 554,
                    "end": 561
                  },
                  "start": 551,
                  "end": 561
                },
                "start": 471,
                "end": 561
              },
              "start": 469,
              "end": 561
            },
            "accessibility": null,
            "static": false,
            "start": 458,
            "end": 562
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addProseMirrorPlugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 586
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
                    "name": "this",
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
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 609
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 611,
                                  "end": 618
                                },
                                "typeArguments": null,
                                "start": 611,
                                "end": 618
                              },
                              "start": 609,
                              "end": 618
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 602,
                            "end": 619
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "editor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 624,
                              "end": 630
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Editor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 632,
                                  "end": 638
                                },
                                "typeArguments": null,
                                "start": 632,
                                "end": 638
                              },
                              "start": 630,
                              "end": 638
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 624,
                            "end": 639
                          }
                        ],
                        "start": 596,
                        "end": 643
                      },
                      "start": 594,
                      "end": 643
                    },
                    "start": 590,
                    "end": 643
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Plugin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 648,
                        "end": 654
                      },
                      "typeArguments": null,
                      "start": 648,
                      "end": 654
                    },
                    "start": 648,
                    "end": 656
                  },
                  "start": 645,
                  "end": 656
                },
                "start": 589,
                "end": 656
              },
              "start": 587,
              "end": 656
            },
            "accessibility": null,
            "static": false,
            "start": 565,
            "end": 657
          }
        ],
        "start": 438,
        "end": 659
      },
      "declare": false,
      "start": 277,
      "end": 659
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtensionConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 686
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 694
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 687,
            "end": 700
          }
        ],
        "start": 686,
        "end": 701
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExtendableConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 728
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 736
                },
                "typeArguments": null,
                "start": 729,
                "end": 736
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtensionConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 738,
                  "end": 753
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 761
                      },
                      "typeArguments": null,
                      "start": 754,
                      "end": 761
                    }
                  ],
                  "start": 753,
                  "end": 762
                },
                "start": 738,
                "end": 762
              }
            ],
            "start": 728,
            "end": 763
          },
          "start": 712,
          "end": 763
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 764,
        "end": 766
      },
      "declare": false,
      "start": 661,
      "end": 766
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extension",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 791
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 799
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 802,
              "end": 805
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 792,
            "end": 805
          }
        ],
        "start": 791,
        "end": 806
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
              "name": "_options",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 819
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 828
                },
                "typeArguments": null,
                "start": 821,
                "end": 828
              },
              "start": 819,
              "end": 828
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
            "start": 811,
            "end": 829
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 846
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
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 848
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSAnyKeyword",
                      "start": 851,
                      "end": 854
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 847,
                    "end": 854
                  }
                ],
                "start": 846,
                "end": 855
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "config",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 871
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ExtensionConfig",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 872,
                              "end": 887
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 888,
                                    "end": 889
                                  },
                                  "typeArguments": null,
                                  "start": 888,
                                  "end": 889
                                }
                              ],
                              "start": 887,
                              "end": 890
                            },
                            "start": 872,
                            "end": 890
                          }
                        ],
                        "start": 871,
                        "end": 891
                      },
                      "start": 864,
                      "end": 891
                    },
                    "start": 862,
                    "end": 891
                  },
                  "start": 856,
                  "end": 891
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extension",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 903
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 904,
                          "end": 905
                        },
                        "typeArguments": null,
                        "start": 904,
                        "end": 905
                      }
                    ],
                    "start": 903,
                    "end": 906
                  },
                  "start": 894,
                  "end": 906
                },
                "start": 892,
                "end": 906
              },
              "body": null,
              "expression": false,
              "start": 846,
              "end": 907
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 833,
            "end": 907
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "configure",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 920
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 931,
                        "end": 938
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 939,
                              "end": 946
                            },
                            "typeArguments": null,
                            "start": 939,
                            "end": 946
                          }
                        ],
                        "start": 938,
                        "end": 947
                      },
                      "start": 931,
                      "end": 947
                    },
                    "start": 929,
                    "end": 947
                  },
                  "start": 921,
                  "end": 947
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extension",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 950,
                    "end": 959
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 960,
                          "end": 967
                        },
                        "typeArguments": null,
                        "start": 960,
                        "end": 967
                      }
                    ],
                    "start": 959,
                    "end": 968
                  },
                  "start": 950,
                  "end": 968
                },
                "start": 948,
                "end": 968
              },
              "body": null,
              "expression": false,
              "start": 920,
              "end": 969
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 911,
            "end": 969
          }
        ],
        "start": 807,
        "end": 971
      },
      "abstract": false,
      "declare": true,
      "start": 768,
      "end": 971
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuggestionOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 983,
        "end": 1000
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
              "name": "editor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1005,
              "end": 1011
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Editor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1019
                },
                "typeArguments": null,
                "start": 1013,
                "end": 1019
              },
              "start": 1011,
              "end": 1019
            },
            "accessibility": null,
            "static": false,
            "start": 1005,
            "end": 1020
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "char",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1030,
                "end": 1036
              },
              "start": 1028,
              "end": 1036
            },
            "accessibility": null,
            "static": false,
            "start": 1023,
            "end": 1037
          }
        ],
        "start": 1001,
        "end": 1039
      },
      "declare": false,
      "start": 973,
      "end": 1039
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Suggestion",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1068
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SuggestionOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1078,
                "end": 1095
              },
              "typeArguments": null,
              "start": 1078,
              "end": 1095
            },
            "start": 1076,
            "end": 1095
          },
          "start": 1069,
          "end": 1095
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Plugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 1098,
            "end": 1104
          },
          "typeArguments": null,
          "start": 1098,
          "end": 1104
        },
        "start": 1096,
        "end": 1104
      },
      "body": null,
      "expression": false,
      "start": 1041,
      "end": 1105
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
            "name": "Extension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1107,
            "end": 1116
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 1117,
            "end": 1123
          },
          "optional": false,
          "computed": false,
          "start": 1107,
          "end": 1123
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1132
                },
                "value": {
                  "type": "Literal",
                  "value": "slash-command",
                  "raw": "\"slash-command\"",
                  "start": 1134,
                  "end": 1149
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1128,
                "end": 1149
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1153,
                  "end": 1163
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
                                "name": "suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1187,
                                "end": 1197
                              },
                              "value": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "char",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1209,
                                        "end": 1213
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "/",
                                        "raw": "\"/\"",
                                        "start": 1215,
                                        "end": 1218
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1209,
                                      "end": 1218
                                    }
                                  ],
                                  "start": 1199,
                                  "end": 1227
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SuggestionOptions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1231,
                                    "end": 1248
                                  },
                                  "typeArguments": null,
                                  "start": 1231,
                                  "end": 1248
                                },
                                "start": 1199,
                                "end": 1248
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1187,
                              "end": 1248
                            }
                          ],
                          "start": 1179,
                          "end": 1255
                        },
                        "start": 1172,
                        "end": 1256
                      }
                    ],
                    "start": 1166,
                    "end": 1260
                  },
                  "expression": false,
                  "start": 1163,
                  "end": 1260
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1153,
                "end": 1260
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addProseMirrorPlugins",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1264,
                  "end": 1285
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1309,
                                "end": 1319
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "editor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1330,
                                        "end": 1336
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1338,
                                          "end": 1342
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "editor",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1343,
                                          "end": 1349
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1338,
                                        "end": 1349
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1330,
                                      "end": 1349
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1371,
                                            "end": 1375
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "options",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1376,
                                            "end": 1383
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1371,
                                          "end": 1383
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "suggestion",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1384,
                                          "end": 1394
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1371,
                                        "end": 1394
                                      },
                                      "start": 1368,
                                      "end": 1394
                                    }
                                  ],
                                  "start": 1320,
                                  "end": 1403
                                }
                              ],
                              "optional": false,
                              "start": 1309,
                              "end": 1404
                            }
                          ],
                          "start": 1301,
                          "end": 1411
                        },
                        "start": 1294,
                        "end": 1412
                      }
                    ],
                    "start": 1288,
                    "end": 1416
                  },
                  "expression": false,
                  "start": 1285,
                  "end": 1416
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1264,
                "end": 1416
              }
            ],
            "start": 1124,
            "end": 1419
          }
        ],
        "optional": false,
        "start": 1107,
        "end": 1420
      },
      "directive": null,
      "start": 1107,
      "end": 1421
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
            "name": "Extension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1423,
            "end": 1432
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 1433,
            "end": 1439
          },
          "optional": false,
          "computed": false,
          "start": 1423,
          "end": 1439
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1448
                },
                "value": {
                  "type": "Literal",
                  "value": "slash-command",
                  "raw": "\"slash-command\"",
                  "start": 1450,
                  "end": 1465
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1444,
                "end": 1465
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1479
                },
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
                                "name": "suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1508,
                                "end": 1518
                              },
                              "value": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "char",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1530,
                                        "end": 1534
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "/",
                                        "raw": "\"/\"",
                                        "start": 1536,
                                        "end": 1539
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1530,
                                      "end": 1539
                                    }
                                  ],
                                  "start": 1520,
                                  "end": 1548
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SuggestionOptions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1552,
                                    "end": 1569
                                  },
                                  "typeArguments": null,
                                  "start": 1552,
                                  "end": 1569
                                },
                                "start": 1520,
                                "end": 1569
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1508,
                              "end": 1569
                            }
                          ],
                          "start": 1500,
                          "end": 1576
                        },
                        "start": 1493,
                        "end": 1577
                      }
                    ],
                    "start": 1487,
                    "end": 1581
                  },
                  "id": null,
                  "generator": false,
                  "start": 1481,
                  "end": 1581
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1469,
                "end": 1581
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addProseMirrorPlugins",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1585,
                  "end": 1606
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1630,
                                "end": 1640
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "editor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1651,
                                        "end": 1657
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1659,
                                          "end": 1663
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "editor",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1664,
                                          "end": 1670
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1659,
                                        "end": 1670
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1651,
                                      "end": 1670
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1692,
                                            "end": 1696
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "options",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1697,
                                            "end": 1704
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1692,
                                          "end": 1704
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "suggestion",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1705,
                                          "end": 1715
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1692,
                                        "end": 1715
                                      },
                                      "start": 1689,
                                      "end": 1715
                                    }
                                  ],
                                  "start": 1641,
                                  "end": 1724
                                }
                              ],
                              "optional": false,
                              "start": 1630,
                              "end": 1725
                            }
                          ],
                          "start": 1622,
                          "end": 1732
                        },
                        "start": 1615,
                        "end": 1733
                      }
                    ],
                    "start": 1609,
                    "end": 1737
                  },
                  "expression": false,
                  "start": 1606,
                  "end": 1737
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1585,
                "end": 1737
              }
            ],
            "start": 1440,
            "end": 1740
          }
        ],
        "optional": false,
        "start": 1423,
        "end": 1741
      },
      "directive": null,
      "start": 1423,
      "end": 1742
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
            "name": "parentExtension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1750,
            "end": 1765
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1777
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 1778,
                "end": 1784
              },
              "optional": false,
              "computed": false,
              "start": 1768,
              "end": 1784
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1789,
                      "end": 1793
                    },
                    "value": {
                      "type": "Literal",
                      "value": "parentExtension",
                      "raw": "\"parentExtension\"",
                      "start": 1795,
                      "end": 1812
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1789,
                    "end": 1812
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1816,
                      "end": 1826
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
                                    "name": "parent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1844,
                                    "end": 1850
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "exists",
                                    "raw": "\"exists\"",
                                    "start": 1852,
                                    "end": 1860
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1844,
                                  "end": 1860
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "overwrite",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1862,
                                    "end": 1871
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "parent",
                                    "raw": "\"parent\"",
                                    "start": 1873,
                                    "end": 1881
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1862,
                                  "end": 1881
                                }
                              ],
                              "start": 1842,
                              "end": 1883
                            },
                            "start": 1835,
                            "end": 1884
                          }
                        ],
                        "start": 1829,
                        "end": 1888
                      },
                      "expression": false,
                      "start": 1826,
                      "end": 1888
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1816,
                    "end": 1888
                  }
                ],
                "start": 1785,
                "end": 1891
              }
            ],
            "optional": false,
            "start": 1768,
            "end": 1892
          },
          "definite": false,
          "start": 1750,
          "end": 1892
        }
      ],
      "declare": false,
      "start": 1744,
      "end": 1893
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
            "name": "childExtension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1901,
            "end": 1915
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "parentExtension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1918,
                "end": 1933
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "configure",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1943
              },
              "optional": false,
              "computed": false,
              "start": 1918,
              "end": 1943
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1948,
                      "end": 1953
                    },
                    "value": {
                      "type": "Literal",
                      "value": "exists-too",
                      "raw": "\"exists-too\"",
                      "start": 1955,
                      "end": 1967
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1948,
                    "end": 1967
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1980,
                      "end": 1989
                    },
                    "value": {
                      "type": "Literal",
                      "value": "child",
                      "raw": "\"child\"",
                      "start": 1991,
                      "end": 1998
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1980,
                    "end": 1998
                  }
                ],
                "start": 1944,
                "end": 2001
              }
            ],
            "optional": false,
            "start": 1918,
            "end": 2002
          },
          "definite": false,
          "start": 1901,
          "end": 2002
        }
      ],
      "declare": false,
      "start": 1895,
      "end": 2003
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
            "name": "parentExtension2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2011,
            "end": 2027
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extension",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2039
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2046
              },
              "optional": false,
              "computed": false,
              "start": 2030,
              "end": 2046
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2051,
                      "end": 2055
                    },
                    "value": {
                      "type": "Literal",
                      "value": "parentExtension2",
                      "raw": "\"parentExtension2\"",
                      "start": 2057,
                      "end": 2075
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2051,
                    "end": 2075
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2079,
                      "end": 2089
                    },
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
                                    "name": "parent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2112,
                                    "end": 2118
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "exists",
                                    "raw": "\"exists\"",
                                    "start": 2120,
                                    "end": 2128
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2112,
                                  "end": 2128
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "overwrite",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2130,
                                    "end": 2139
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "parent",
                                    "raw": "\"parent\"",
                                    "start": 2141,
                                    "end": 2149
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2130,
                                  "end": 2149
                                }
                              ],
                              "start": 2110,
                              "end": 2151
                            },
                            "start": 2103,
                            "end": 2152
                          }
                        ],
                        "start": 2097,
                        "end": 2156
                      },
                      "id": null,
                      "generator": false,
                      "start": 2091,
                      "end": 2156
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2079,
                    "end": 2156
                  }
                ],
                "start": 2047,
                "end": 2159
              }
            ],
            "optional": false,
            "start": 2030,
            "end": 2160
          },
          "definite": false,
          "start": 2011,
          "end": 2160
        }
      ],
      "declare": false,
      "start": 2005,
      "end": 2161
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
            "name": "childExtension2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2169,
            "end": 2184
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "parentExtension2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2187,
                "end": 2203
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "configure",
                "optional": false,
                "typeAnnotation": null,
                "start": 2204,
                "end": 2213
              },
              "optional": false,
              "computed": false,
              "start": 2187,
              "end": 2213
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2218,
                      "end": 2223
                    },
                    "value": {
                      "type": "Literal",
                      "value": "exists-too",
                      "raw": "\"exists-too\"",
                      "start": 2225,
                      "end": 2237
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2218,
                    "end": 2237
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2259
                    },
                    "value": {
                      "type": "Literal",
                      "value": "child",
                      "raw": "\"child\"",
                      "start": 2261,
                      "end": 2268
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2250,
                    "end": 2268
                  }
                ],
                "start": 2214,
                "end": 2271
              }
            ],
            "optional": false,
            "start": 2187,
            "end": 2272
          },
          "definite": false,
          "start": 2169,
          "end": 2272
        }
      ],
      "declare": false,
      "start": 2163,
      "end": 2273
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2275,
      "end": 2285
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2285
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Editor",
    "start": 14,
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
    "value": "private",
    "start": 25,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "_editor",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 45,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Plugin",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 70,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "_plugin",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 90,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "ParentConfig",
    "start": 95,
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
    "value": "T",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "Partial",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 179,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 202,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 213,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 233,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 244,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "interface",
    "start": 277,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "ExtendableConfig",
    "start": 287,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 317,
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
    "value": "Config",
    "start": 324,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "ExtensionConfig",
    "start": 345,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 361,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "ExtendableConfig",
    "start": 376,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 393,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "ExtendableConfig",
    "start": 404,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 430,
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
    "value": ",",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 442,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "addOptions",
    "start": 458,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 472,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "name",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "ParentConfig",
    "start": 510,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "String",
    "value": "\"addOptions\"",
    "start": 531,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 551,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 554,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "addProseMirrorPlugins",
    "start": 565,
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
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 602,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 611,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 624,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "Editor",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Plugin",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 661,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "ExtensionConfig",
    "start": 671,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 687,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 704,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "ExtendableConfig",
    "start": 712,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 729,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "ExtensionConfig",
    "start": 738,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 768,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 776,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 782,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 792,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 802,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "_options",
    "start": 811,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 821,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 833,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 851,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 856,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 864,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "ExtensionConfig",
    "start": 872,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 894,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "configure",
    "start": 911,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 921,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 931,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 939,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 950,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 960,
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
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 973,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "SuggestionOptions",
    "start": 983,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "Editor",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "char",
    "start": 1023,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1041,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1049,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "Suggestion",
    "start": 1058,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1069,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "SuggestionOptions",
    "start": 1078,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "Plugin",
    "start": 1098,
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
    "value": "Extension",
    "start": 1107,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1128,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "String",
    "value": "\"slash-command\"",
    "start": 1134,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "addOptions",
    "start": 1153,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "suggestion",
    "start": 1187,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "char",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "String",
    "value": "\"/\"",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "SuggestionOptions",
    "start": 1231,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
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
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "addProseMirrorPlugins",
    "start": 1264,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1294,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "Suggestion",
    "start": 1309,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 1343,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1376,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "suggestion",
    "start": 1384,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 1423,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1433,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1444,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "String",
    "value": "\"slash-command\"",
    "start": 1450,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "addOptions",
    "start": 1469,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1484,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1493,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "suggestion",
    "start": 1508,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "char",
    "start": 1530,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "String",
    "value": "\"/\"",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "SuggestionOptions",
    "start": 1552,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "addProseMirrorPlugins",
    "start": 1585,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "Suggestion",
    "start": 1630,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 1651,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1659,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 1664,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1692,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1697,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "suggestion",
    "start": 1705,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 1744,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "parentExtension",
    "start": 1750,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 1768,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1778,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1789,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "String",
    "value": "\"parentExtension\"",
    "start": 1795,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "addOptions",
    "start": 1816,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1844,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "String",
    "value": "\"exists\"",
    "start": 1852,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 1862,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "String",
    "value": "\"parent\"",
    "start": 1873,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1895,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "childExtension",
    "start": 1901,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "parentExtension",
    "start": 1918,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "configure",
    "start": 1934,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 1948,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "String",
    "value": "\"exists-too\"",
    "start": 1955,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 1980,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "String",
    "value": "\"child\"",
    "start": 1991,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2005,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "parentExtension2",
    "start": 2011,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 2030,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 2040,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2051,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "String",
    "value": "\"parentExtension2\"",
    "start": 2057,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "addOptions",
    "start": 2079,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2094,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2103,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 2112,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "String",
    "value": "\"exists\"",
    "start": 2120,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 2130,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "String",
    "value": "\"parent\"",
    "start": 2141,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2163,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "childExtension2",
    "start": 2169,
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
    "value": "parentExtension2",
    "start": 2187,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "configure",
    "start": 2204,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 2218,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "String",
    "value": "\"exists-too\"",
    "start": 2225,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 2250,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "String",
    "value": "\"child\"",
    "start": 2261,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2275,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2284,
    "end": 2285
  }
]
```

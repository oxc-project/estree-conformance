__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 33
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
                "start": 34,
                "end": 35
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 34,
              "end": 35
            }
          ],
          "start": 33,
          "end": 36
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 44
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 45,
                      "end": 46
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 60
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 61,
                              "end": 67
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 68,
                                  "end": 71
                                }
                              ],
                              "start": 67,
                              "end": 72
                            },
                            "start": 61,
                            "end": 72
                          }
                        ],
                        "start": 60,
                        "end": 73
                      },
                      "start": 55,
                      "end": 73
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 45,
                    "end": 73
                  }
                ],
                "start": 44,
                "end": 74
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 84
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 86,
                      "end": 87
                    },
                    "start": 84,
                    "end": 87
                  },
                  "value": null,
                  "start": 75,
                  "end": 87
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 96
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 98,
                              "end": 99
                            },
                            "typeArguments": null,
                            "start": 98,
                            "end": 99
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 121
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
                                      "start": 122,
                                      "end": 123
                                    },
                                    "typeArguments": null,
                                    "start": 122,
                                    "end": 123
                                  }
                                ],
                                "start": 121,
                                "end": 124
                              },
                              "start": 104,
                              "end": 124
                            },
                            "start": 101,
                            "end": 124
                          }
                        ],
                        "start": 97,
                        "end": 125
                      }
                    ],
                    "start": 96,
                    "end": 126
                  },
                  "start": 90,
                  "end": 126
                },
                "start": 88,
                "end": 126
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 40,
              "end": 127
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 134
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 135,
                      "end": 136
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 150
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 151,
                              "end": 157
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 158,
                                  "end": 161
                                }
                              ],
                              "start": 157,
                              "end": 162
                            },
                            "start": 151,
                            "end": 162
                          }
                        ],
                        "start": 150,
                        "end": 163
                      },
                      "start": 145,
                      "end": 163
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 135,
                    "end": 163
                  }
                ],
                "start": 134,
                "end": 164
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 174
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "typeArguments": null,
                      "start": 176,
                      "end": 177
                    },
                    "start": 174,
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 186
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 188,
                              "end": 189
                            },
                            "typeArguments": null,
                            "start": 188,
                            "end": 189
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 194,
                                "end": 211
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
                                      "start": 212,
                                      "end": 213
                                    },
                                    "typeArguments": null,
                                    "start": 212,
                                    "end": 213
                                  }
                                ],
                                "start": 211,
                                "end": 214
                              },
                              "start": 194,
                              "end": 214
                            },
                            "start": 191,
                            "end": 214
                          }
                        ],
                        "start": 187,
                        "end": 215
                      }
                    ],
                    "start": 186,
                    "end": 216
                  },
                  "start": 180,
                  "end": 216
                },
                "start": 178,
                "end": 216
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 130,
              "end": 217
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 224
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 225,
                      "end": 226
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
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
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 241,
                              "end": 247
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 248,
                                  "end": 251
                                }
                              ],
                              "start": 247,
                              "end": 252
                            },
                            "start": 241,
                            "end": 252
                          }
                        ],
                        "start": 240,
                        "end": 253
                      },
                      "start": 235,
                      "end": 253
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 225,
                    "end": 253
                  }
                ],
                "start": 224,
                "end": 254
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 264
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 267
                      },
                      "typeArguments": null,
                      "start": 266,
                      "end": 267
                    },
                    "start": 264,
                    "end": 267
                  },
                  "value": null,
                  "start": 255,
                  "end": 267
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 276
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 279
                            },
                            "typeArguments": null,
                            "start": 278,
                            "end": 279
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 284,
                                "end": 301
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
                                      "start": 302,
                                      "end": 303
                                    },
                                    "typeArguments": null,
                                    "start": 302,
                                    "end": 303
                                  }
                                ],
                                "start": 301,
                                "end": 304
                              },
                              "start": 284,
                              "end": 304
                            },
                            "start": 281,
                            "end": 304
                          }
                        ],
                        "start": 277,
                        "end": 305
                      }
                    ],
                    "start": 276,
                    "end": 306
                  },
                  "start": 270,
                  "end": 306
                },
                "start": 268,
                "end": 306
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 220,
              "end": 307
            }
          ],
          "start": 37,
          "end": 309
        },
        "declare": false,
        "start": 17,
        "end": 309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 10,
      "end": 309
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOption",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 327
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
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 329
          }
        ],
        "start": 327,
        "end": 330
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 334
          },
          "typeArguments": null,
          "start": 333,
          "end": 334
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 349
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 357
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 356,
                  "end": 357
                },
                "start": 350,
                "end": 357
              }
            ],
            "start": 349,
            "end": 358
          },
          "start": 343,
          "end": 358
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 362
          },
          "typeArguments": null,
          "start": 361,
          "end": 362
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 365,
          "end": 370
        },
        "start": 333,
        "end": 370
      },
      "declare": false,
      "start": 311,
      "end": 371
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray1",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 417
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
              "start": 418,
              "end": 419
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 418,
            "end": 419
          }
        ],
        "start": 417,
        "end": 420
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 427
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
              "start": 437,
              "end": 438
            },
            "typeArguments": null,
            "start": 437,
            "end": 438
          },
          "start": 431,
          "end": 438
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 442
              },
              "typeArguments": null,
              "start": 441,
              "end": 442
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "typeArguments": null,
              "start": 443,
              "end": 444
            },
            "start": 441,
            "end": 445
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Option",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 460
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 461,
                  "end": 464
                }
              ],
              "start": 460,
              "end": 465
            },
            "start": 454,
            "end": 465
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnzipOption",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 479
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 480,
                    "end": 481
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 482,
                      "end": 483
                    },
                    "typeArguments": null,
                    "start": 482,
                    "end": 483
                  },
                  "start": 480,
                  "end": 484
                }
              ],
              "start": 479,
              "end": 485
            },
            "start": 468,
            "end": 485
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 488,
            "end": 493
          },
          "start": 441,
          "end": 493
        },
        "optional": false,
        "readonly": null,
        "start": 423,
        "end": 495
      },
      "declare": false,
      "start": 395,
      "end": 496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 539
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
              "start": 540,
              "end": 541
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 540,
            "end": 541
          }
        ],
        "start": 539,
        "end": 542
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
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
              "start": 559,
              "end": 560
            },
            "typeArguments": null,
            "start": 559,
            "end": 560
          },
          "start": 553,
          "end": 560
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnzipOption",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 574
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 576
                  },
                  "typeArguments": null,
                  "start": 575,
                  "end": 576
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 578
                  },
                  "typeArguments": null,
                  "start": 577,
                  "end": 578
                },
                "start": 575,
                "end": 579
              }
            ],
            "start": 574,
            "end": 580
          },
          "start": 563,
          "end": 580
        },
        "optional": false,
        "readonly": null,
        "start": 545,
        "end": 582
      },
      "declare": false,
      "start": 517,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray3",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 606
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
              "start": 607,
              "end": 608
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 607,
            "end": 608
          }
        ],
        "start": 606,
        "end": 609
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 616
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
              "start": 626,
              "end": 627
            },
            "typeArguments": null,
            "start": 626,
            "end": 627
          },
          "start": 620,
          "end": 627
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "typeArguments": null,
              "start": 630,
              "end": 631
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 633
              },
              "typeArguments": null,
              "start": 632,
              "end": 633
            },
            "start": 630,
            "end": 634
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Option",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 649
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 656,
                      "end": 657
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 656,
                    "end": 657
                  },
                  "start": 650,
                  "end": 657
                }
              ],
              "start": 649,
              "end": 658
            },
            "start": 643,
            "end": 658
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 662
            },
            "typeArguments": null,
            "start": 661,
            "end": 662
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 665,
            "end": 670
          },
          "start": 630,
          "end": 670
        },
        "optional": false,
        "readonly": null,
        "start": 612,
        "end": 672
      },
      "declare": false,
      "start": 584,
      "end": 673
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
            "name": "opt1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 701
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    }
                  ],
                  "start": 701,
                  "end": 709
                },
                "start": 695,
                "end": 709
              },
              "start": 693,
              "end": 709
            },
            "start": 689,
            "end": 709
          },
          "init": null,
          "definite": false,
          "start": 689,
          "end": 709
        }
      ],
      "declare": true,
      "start": 675,
      "end": 710
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
            "name": "opt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 737
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 738,
                      "end": 744
                    }
                  ],
                  "start": 737,
                  "end": 745
                },
                "start": 731,
                "end": 745
              },
              "start": 729,
              "end": 745
            },
            "start": 725,
            "end": 745
          },
          "init": null,
          "definite": false,
          "start": 725,
          "end": 745
        }
      ],
      "declare": true,
      "start": 711,
      "end": 746
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
            "name": "opt3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 773
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 774,
                      "end": 781
                    }
                  ],
                  "start": 773,
                  "end": 782
                },
                "start": 767,
                "end": 782
              },
              "start": 765,
              "end": 782
            },
            "start": 761,
            "end": 782
          },
          "init": null,
          "definite": false,
          "start": 761,
          "end": 782
        }
      ],
      "declare": true,
      "start": 747,
      "end": 783
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
            "name": "zipped1",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 798
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 805
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 810
              },
              "optional": false,
              "computed": false,
              "start": 801,
              "end": 810
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 815
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null,
                "start": 817,
                "end": 821
              }
            ],
            "optional": false,
            "start": 801,
            "end": 822
          },
          "definite": false,
          "start": 791,
          "end": 822
        }
      ],
      "declare": false,
      "start": 785,
      "end": 823
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
            "name": "zipped2",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 837
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 844
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 849
              },
              "optional": false,
              "computed": false,
              "start": 840,
              "end": 849
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 854
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 860
              }
            ],
            "optional": false,
            "start": 840,
            "end": 861
          },
          "definite": false,
          "start": 830,
          "end": 861
        }
      ],
      "declare": false,
      "start": 824,
      "end": 862
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
            "name": "zipped3",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 876
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 883
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 888
              },
              "optional": false,
              "computed": false,
              "start": 879,
              "end": 888
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 893
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null,
                "start": 895,
                "end": 899
              }
            ],
            "optional": false,
            "start": 879,
            "end": 900
          },
          "definite": false,
          "start": 869,
          "end": 900
        }
      ],
      "declare": false,
      "start": 863,
      "end": 901
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 901
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "zip1",
    "start": 40,
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
    "value": "O",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 47,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "others",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "UnzipOptionArray1",
    "start": 104,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "zip2",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
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
    "value": "others",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 176,
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
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "UnzipOptionArray2",
    "start": 194,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "zip3",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 227,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Array",
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
    "value": "Option",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "others",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "O",
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
    "value": "Option",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "UnzipOptionArray3",
    "start": 284,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 311,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "UnzipOption",
    "start": 316,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 335,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 350,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 395,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "UnzipOptionArray1",
    "start": 400,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 428,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 431,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 438,
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
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 446,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "UnzipOption",
    "start": 468,
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
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 517,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "UnzipOptionArray2",
    "start": 522,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 550,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 553,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "UnzipOption",
    "start": 563,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 584,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "UnzipOptionArray3",
    "start": 589,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 617,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 620,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 635,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 650,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 675,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 683,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "opt1",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 711,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 719,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "opt2",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 747,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 755,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "opt3",
    "start": 761,
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
    "value": "Option",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 774,
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
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 785,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "zipped1",
    "start": 791,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "opt1",
    "start": 801,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "zip1",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "opt2",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "opt3",
    "start": 817,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 824,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "zipped2",
    "start": 830,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "opt1",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "zip2",
    "start": 845,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "opt2",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "opt3",
    "start": 856,
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
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 863,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "zipped3",
    "start": 869,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "opt1",
    "start": 879,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "zip3",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "opt2",
    "start": 889,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "opt3",
    "start": 895,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FlattenKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 83
        },
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
            }
          ],
          "start": 83,
          "end": 86
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 105
                    },
                    "typeArguments": null,
                    "start": 104,
                    "end": 105
                  },
                  "start": 98,
                  "end": 105
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 118,
                      "end": 124
                    }
                  ],
                  "start": 109,
                  "end": 124
                }
              ],
              "start": 98,
              "end": 125
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
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "typeArguments": null,
                  "start": 128,
                  "end": 129
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 131
                  },
                  "typeArguments": null,
                  "start": 130,
                  "end": 131
                },
                "start": 128,
                "end": 132
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 147
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 148,
                      "end": 151
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 153,
                      "end": 156
                    }
                  ],
                  "start": 147,
                  "end": 157
                },
                "start": 141,
                "end": 157
              },
              "trueType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 163
                    },
                    "typeArguments": null,
                    "start": 162,
                    "end": 163
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 166,
                        "end": 169
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": ".",
                          "cooked": "."
                        },
                        "tail": false,
                        "start": 170,
                        "end": 174
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 191,
                        "end": 193
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 170
                        },
                        "typeArguments": null,
                        "start": 169,
                        "end": 170
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FlattenKeys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 185
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
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 186,
                                  "end": 187
                                },
                                "typeArguments": null,
                                "start": 186,
                                "end": 187
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
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
                              "end": 190
                            }
                          ],
                          "start": 185,
                          "end": 191
                        },
                        "start": 174,
                        "end": 191
                      }
                    ],
                    "start": 166,
                    "end": 193
                  }
                ],
                "start": 162,
                "end": 193
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 199
                },
                "typeArguments": null,
                "start": 198,
                "end": 199
              },
              "start": 128,
              "end": 199
            },
            "optional": false,
            "readonly": null,
            "start": 89,
            "end": 202
          },
          "indexType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "typeArguments": null,
              "start": 203,
              "end": 204
            },
            "extendsType": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 222,
                  "end": 225
                },
                "start": 222,
                "end": 227
              },
              "start": 213,
              "end": 227
            },
            "trueType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 238
                    },
                    "typeArguments": null,
                    "start": 237,
                    "end": 238
                  },
                  "start": 231,
                  "end": 238
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 241,
                      "end": 244
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 250,
                      "end": 252
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 244,
                      "end": 250
                    }
                  ],
                  "start": 241,
                  "end": 252
                }
              ],
              "start": 231,
              "end": 252
            },
            "falseType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    },
                    "typeArguments": null,
                    "start": 262,
                    "end": 263
                  },
                  "start": 256,
                  "end": 263
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 267,
                      "end": 273
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 276,
                      "end": 282
                    }
                  ],
                  "start": 267,
                  "end": 282
                }
              ],
              "start": 256,
              "end": 283
            },
            "start": 203,
            "end": 283
          },
          "start": 89,
          "end": 284
        },
        "declare": false,
        "start": 67,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 60,
      "end": 285
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeySeparator",
          "optional": false,
          "typeAnnotation": null,
          "start": 299,
          "end": 311
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 314,
                "end": 317
              },
              "start": 314,
              "end": 317
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[",
                "raw": "'['",
                "start": 320,
                "end": 323
              },
              "start": 320,
              "end": 323
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "]",
                "raw": "']'",
                "start": 326,
                "end": 329
              },
              "start": 326,
              "end": 329
            }
          ],
          "start": 314,
          "end": 329
        },
        "declare": false,
        "start": 294,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 287,
      "end": 330
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetByString",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 355
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 362
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 358,
              "end": 362
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 369
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 378,
                    "end": 384
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 387,
                    "end": 393
                  }
                ],
                "start": 378,
                "end": 393
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FlattenKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 407
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 408,
                        "end": 412
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 412
                    }
                  ],
                  "start": 407,
                  "end": 413
                },
                "start": 396,
                "end": 413
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 365,
              "end": 413
            }
          ],
          "start": 355,
          "end": 416
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 423
            },
            "typeArguments": null,
            "start": 419,
            "end": 423
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "__proto__",
                  "cooked": "__proto__"
                },
                "tail": false,
                "start": 432,
                "end": 444
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 484,
                "end": 486
              }
            ],
            "types": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 444,
                        "end": 447
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 459,
                        "end": 462
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 477,
                        "end": 479
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KeySeparator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 447,
                          "end": 459
                        },
                        "typeArguments": null,
                        "start": 447,
                        "end": 459
                      },
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 462,
                            "end": 468
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 471,
                            "end": 477
                          }
                        ],
                        "start": 462,
                        "end": 477
                      }
                    ],
                    "start": 444,
                    "end": 479
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 482,
                      "end": 484
                    },
                    "start": 482,
                    "end": 484
                  }
                ],
                "start": 444,
                "end": 484
              }
            ],
            "start": 432,
            "end": 486
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 490,
            "end": 495
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 503
              },
              "typeArguments": null,
              "start": 499,
              "end": 503
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 512,
                  "end": 515
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 527,
                  "end": 530
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 540,
                  "end": 542
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "KeySeparator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 515,
                    "end": 527
                  },
                  "typeArguments": null,
                  "start": 515,
                  "end": 527
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 540
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 536,
                    "end": 540
                  },
                  "start": 530,
                  "end": 540
                }
              ],
              "start": 512,
              "end": 542
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GetByString",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 558
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 559,
                      "end": 563
                    },
                    "typeArguments": null,
                    "start": 559,
                    "end": 563
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 569
                    },
                    "typeArguments": null,
                    "start": 565,
                    "end": 569
                  }
                ],
                "start": 558,
                "end": 570
              },
              "start": 547,
              "end": 570
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 579
                },
                "typeArguments": null,
                "start": 575,
                "end": 579
              },
              "extendsType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 588,
                    "end": 591
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 601,
                    "end": 604
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 616,
                    "end": 618
                  }
                ],
                "types": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 597,
                        "end": 601
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 597,
                      "end": 601
                    },
                    "start": 591,
                    "end": 601
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "KeySeparator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 616
                    },
                    "typeArguments": null,
                    "start": 604,
                    "end": 616
                  }
                ],
                "start": 588,
                "end": 618
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GetByString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 635
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 636,
                        "end": 640
                      },
                      "typeArguments": null,
                      "start": 636,
                      "end": 640
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 642,
                        "end": 646
                      },
                      "typeArguments": null,
                      "start": 642,
                      "end": 646
                    }
                  ],
                  "start": 635,
                  "end": 647
                },
                "start": 624,
                "end": 647
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 653,
                    "end": 657
                  },
                  "typeArguments": null,
                  "start": 653,
                  "end": 657
                },
                "extendsType": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 666,
                      "end": 669
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 717,
                      "end": 720
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 732,
                      "end": 735
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 745,
                      "end": 747
                    }
                  ],
                  "types": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 675,
                          "end": 678
                        },
                        "constraint": {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 693,
                                  "end": 697
                                },
                                "typeArguments": null,
                                "start": 693,
                                "end": 697
                              },
                              "start": 687,
                              "end": 697
                            },
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 701,
                                  "end": 707
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 710,
                                  "end": 716
                                }
                              ],
                              "start": 701,
                              "end": 716
                            }
                          ],
                          "start": 687,
                          "end": 717
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 675,
                        "end": 717
                      },
                      "start": 669,
                      "end": 717
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "KeySeparator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 732
                      },
                      "typeArguments": null,
                      "start": 720,
                      "end": 732
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Rest",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 741,
                          "end": 745
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 741,
                        "end": 745
                      },
                      "start": 735,
                      "end": 745
                    }
                  ],
                  "start": 666,
                  "end": 747
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GetByString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 765
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
                            "name": "Data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 766,
                            "end": 770
                          },
                          "typeArguments": null,
                          "start": 766,
                          "end": 770
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 771,
                            "end": 774
                          },
                          "typeArguments": null,
                          "start": 771,
                          "end": 774
                        },
                        "start": 766,
                        "end": 775
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Rest",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 777,
                          "end": 781
                        },
                        "typeArguments": null,
                        "start": 777,
                        "end": 781
                      }
                    ],
                    "start": 765,
                    "end": 782
                  },
                  "start": 754,
                  "end": 782
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Path",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 789,
                      "end": 793
                    },
                    "typeArguments": null,
                    "start": 789,
                    "end": 793
                  },
                  "extendsType": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 808,
                            "end": 812
                          },
                          "typeArguments": null,
                          "start": 808,
                          "end": 812
                        },
                        "start": 802,
                        "end": 812
                      },
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 816,
                            "end": 822
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 825,
                            "end": 831
                          }
                        ],
                        "start": 816,
                        "end": 831
                      }
                    ],
                    "start": 802,
                    "end": 832
                  },
                  "trueType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 840,
                        "end": 844
                      },
                      "typeArguments": null,
                      "start": 840,
                      "end": 844
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 849
                      },
                      "typeArguments": null,
                      "start": 845,
                      "end": 849
                    },
                    "start": 840,
                    "end": 850
                  },
                  "falseType": {
                    "type": "TSUndefinedKeyword",
                    "start": 858,
                    "end": 867
                  },
                  "start": 789,
                  "end": 867
                },
                "start": 653,
                "end": 867
              },
              "start": 575,
              "end": 867
            },
            "start": 499,
            "end": 867
          },
          "start": 419,
          "end": 867
        },
        "declare": false,
        "start": 339,
        "end": 868
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 332,
      "end": 868
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Duck",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 884
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
              "name": "taxonomy",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 896
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
                      "name": "genus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 902,
                      "end": 907
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "anas",
                          "raw": "'anas'",
                          "start": 909,
                          "end": 915
                        },
                        "start": 909,
                        "end": 915
                      },
                      "start": 907,
                      "end": 915
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 902,
                    "end": 916
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "species",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 926
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "platyrhynchos",
                          "raw": "'platyrhynchos'",
                          "start": 928,
                          "end": 943
                        },
                        "start": 928,
                        "end": 943
                      },
                      "start": 926,
                      "end": 943
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 919,
                    "end": 944
                  }
                ],
                "start": 898,
                "end": 947
              },
              "start": 896,
              "end": 947
            },
            "accessibility": null,
            "static": false,
            "start": 888,
            "end": 948
          }
        ],
        "start": 885,
        "end": 950
      },
      "declare": false,
      "start": 870,
      "end": 950
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DuckSpecies",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 968
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetByString",
          "optional": false,
          "typeAnnotation": null,
          "start": 971,
          "end": 982
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Duck",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 987
              },
              "typeArguments": null,
              "start": 983,
              "end": 987
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "taxonomy.species",
                "raw": "'taxonomy.species'",
                "start": 989,
                "end": 1007
              },
              "start": 989,
              "end": 1007
            }
          ],
          "start": 982,
          "end": 1008
        },
        "start": 971,
        "end": 1008
      },
      "declare": false,
      "start": 952,
      "end": 1009
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 1028
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "FlattenKeys",
    "start": 72,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "O",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "type": "Keyword",
    "value": "extends",
    "start": 133,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 153,
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
    "value": "?",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 164,
    "end": 165
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 169,
    "end": 170
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 170,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "FlattenKeys",
    "start": 174,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "O",
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
    "value": "K",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 205,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 213,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "?",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 239,
    "end": 240
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 244,
    "end": 250
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 287,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 294,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "KeySeparator",
    "start": 299,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "'['",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "']'",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 332,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 339,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "GetByString",
    "start": 344,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 365,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 370,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "FlattenKeys",
    "start": 396,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 408,
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
    "value": ",",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 419,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 424,
    "end": 431
  },
  {
    "type": "Template",
    "value": "`__proto__${",
    "start": 432,
    "end": 444
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "KeySeparator",
    "start": 447,
    "end": 459
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 471,
    "end": 477
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 480,
    "end": 481
  },
  {
    "type": "String",
    "value": "''",
    "start": 482,
    "end": 484
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 490,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 499,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 504,
    "end": 511
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "KeySeparator",
    "start": 515,
    "end": 527
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 527,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 530,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 536,
    "end": 540
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "GetByString",
    "start": 547,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 575,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 580,
    "end": 587
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 591,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 597,
    "end": 601
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 601,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "KeySeparator",
    "start": 604,
    "end": 616
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "GetByString",
    "start": 624,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 642,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 653,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 658,
    "end": 665
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 669,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 675,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 679,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 687,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 717,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "KeySeparator",
    "start": 720,
    "end": 732
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 732,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 735,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 741,
    "end": 745
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 745,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "GetByString",
    "start": 754,
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
    "value": "Data",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 777,
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
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 789,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 794,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 802,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 816,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 825,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 845,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 858,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 870,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "Duck",
    "start": 880,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "taxonomy",
    "start": 888,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "genus",
    "start": 902,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "String",
    "value": "'anas'",
    "start": 909,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "species",
    "start": 919,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "String",
    "value": "'platyrhynchos'",
    "start": 928,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 952,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "DuckSpecies",
    "start": 957,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "GetByString",
    "start": 971,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "Duck",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 987,
    "end": 988
  },
  {
    "type": "String",
    "value": "'taxonomy.species'",
    "start": 989,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  }
]
```

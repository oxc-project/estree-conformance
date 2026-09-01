__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutSubscription2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 31
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
              "start": 32,
              "end": 33
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 33
          }
        ],
        "start": 31,
        "end": 34
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
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 72
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
                        "start": 73,
                        "end": 74
                      },
                      "typeArguments": null,
                      "start": 73,
                      "end": 74
                    }
                  ],
                  "start": 72,
                  "end": 75
                },
                "start": 49,
                "end": 75
              },
              "start": 47,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 76
          }
        ],
        "start": 35,
        "end": 78
      },
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableBase2",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
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
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 131
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                        "name": "newValue",
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
                              "start": 153,
                              "end": 154
                            },
                            "typeArguments": null,
                            "start": 153,
                            "end": 154
                          },
                          "start": 151,
                          "end": 154
                        },
                        "start": 143,
                        "end": 154
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 159,
                        "end": 163
                      },
                      "start": 156,
                      "end": 163
                    },
                    "start": 142,
                    "end": 163
                  },
                  "start": 140,
                  "end": 163
                },
                "start": 132,
                "end": 163
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": true,
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
                "start": 165,
                "end": 177
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "topic",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 187,
                    "end": 193
                  },
                  "start": 185,
                  "end": 193
                },
                "start": 179,
                "end": 193
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 217
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
                        "start": 218,
                        "end": 219
                      },
                      "typeArguments": null,
                      "start": 218,
                      "end": 219
                    }
                  ],
                  "start": 217,
                  "end": 220
                },
                "start": 196,
                "end": 220
              },
              "start": 194,
              "end": 220
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 122,
            "end": 221
          }
        ],
        "start": 116,
        "end": 223
      },
      "declare": false,
      "start": 79,
      "end": 223
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValidationPlacement2",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 254
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 261
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 261
          }
        ],
        "start": 254,
        "end": 262
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
              "name": "initialize",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 279
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "validatable",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Validatable2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 305
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 312
                          },
                          "typeArguments": null,
                          "start": 306,
                          "end": 312
                        }
                      ],
                      "start": 305,
                      "end": 313
                    },
                    "start": 293,
                    "end": 313
                  },
                  "start": 291,
                  "end": 313
                },
                "start": 280,
                "end": 313
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 316,
                "end": 320
              },
              "start": 314,
              "end": 320
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 269,
            "end": 321
          }
        ],
        "start": 263,
        "end": 323
      },
      "declare": false,
      "start": 224,
      "end": 323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validatable2",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 346
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 353
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 353
          }
        ],
        "start": 346,
        "end": 354
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
              "name": "validators",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 371
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 396
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Validator2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
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
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 408,
                              "end": 414
                            },
                            "typeArguments": null,
                            "start": 408,
                            "end": 414
                          }
                        ],
                        "start": 407,
                        "end": 415
                      },
                      "start": 397,
                      "end": 415
                    }
                  ],
                  "start": 396,
                  "end": 416
                },
                "start": 373,
                "end": 416
              },
              "start": 371,
              "end": 416
            },
            "accessibility": null,
            "static": false,
            "start": 361,
            "end": 417
          }
        ],
        "start": 355,
        "end": 419
      },
      "declare": false,
      "start": 324,
      "end": 419
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 436
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 443
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 437,
            "end": 443
          }
        ],
        "start": 436,
        "end": 444
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
              "name": "_subscription",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 472
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 495
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 502
                      },
                      "typeArguments": null,
                      "start": 496,
                      "end": 502
                    }
                  ],
                  "start": 495,
                  "end": 503
                },
                "start": 474,
                "end": 503
              },
              "start": 472,
              "end": 503
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 451,
            "end": 504
          }
        ],
        "start": 445,
        "end": 506
      },
      "abstract": false,
      "declare": false,
      "start": 420,
      "end": 506
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 522
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 523,
            "end": 529
          }
        ],
        "start": 522,
        "end": 530
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
              "name": "validationPlacements",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 564
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
                  "start": 566,
                  "end": 571
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ValidationPlacement2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 592
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 593,
                              "end": 599
                            },
                            "typeArguments": null,
                            "start": 593,
                            "end": 599
                          }
                        ],
                        "start": 592,
                        "end": 600
                      },
                      "start": 572,
                      "end": 600
                    }
                  ],
                  "start": 571,
                  "end": 601
                },
                "start": 566,
                "end": 601
              },
              "start": 564,
              "end": 601
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 613
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ValidationPlacement2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 634
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 635,
                            "end": 641
                          },
                          "typeArguments": null,
                          "start": 635,
                          "end": 641
                        }
                      ],
                      "start": 634,
                      "end": 642
                    },
                    "start": 614,
                    "end": 642
                  }
                ],
                "start": 613,
                "end": 643
              },
              "arguments": [],
              "start": 604,
              "end": 645
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 537,
            "end": 646
          }
        ],
        "start": 531,
        "end": 648
      },
      "abstract": false,
      "declare": false,
      "start": 507,
      "end": 648
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Widget",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 661
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 668
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 662,
            "end": 668
          }
        ],
        "start": 661,
        "end": 669
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 676,
              "end": 687
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
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 713,
                            "end": 722
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 723,
                                  "end": 729
                                },
                                "typeArguments": null,
                                "start": 723,
                                "end": 729
                              }
                            ],
                            "start": 722,
                            "end": 730
                          },
                          "start": 713,
                          "end": 730
                        },
                        "start": 710,
                        "end": 730
                      },
                      "start": 703,
                      "end": 730
                    },
                    "start": 701,
                    "end": 730
                  },
                  "start": 688,
                  "end": 730
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 687,
              "end": 732
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 676,
            "end": 732
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
              "start": 772,
              "end": 783
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
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 809,
                            "end": 818
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 819,
                                  "end": 825
                                },
                                "typeArguments": null,
                                "start": 819,
                                "end": 825
                              }
                            ],
                            "start": 818,
                            "end": 826
                          },
                          "start": 809,
                          "end": 826
                        },
                        "start": 806,
                        "end": 826
                      },
                      "start": 799,
                      "end": 826
                    },
                    "start": 797,
                    "end": 826
                  },
                  "start": 784,
                  "end": 826
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 828,
                "end": 835
              },
              "expression": false,
              "start": 783,
              "end": 835
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 772,
            "end": 835
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 858
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ViewModel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
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
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 878
                        },
                        "typeArguments": null,
                        "start": 872,
                        "end": 878
                      }
                    ],
                    "start": 871,
                    "end": 879
                  },
                  "start": 862,
                  "end": 879
                },
                "start": 860,
                "end": 879
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 897,
                      "end": 901
                    },
                    "start": 890,
                    "end": 902
                  }
                ],
                "start": 880,
                "end": 908
              },
              "expression": false,
              "start": 858,
              "end": 908
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 840,
            "end": 908
          }
        ],
        "start": 670,
        "end": 910
      },
      "abstract": false,
      "declare": false,
      "start": 649,
      "end": 910
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 910
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "KnockoutSubscription2",
    "start": 10,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableBase2",
    "start": 49,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 79,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableBase2",
    "start": 89,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "subscribe",
    "start": 122,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 132,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 143,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 156,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 171,
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
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "topic",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "KnockoutSubscription2",
    "start": 196,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 224,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "ValidationPlacement2",
    "start": 234,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "initialize",
    "start": 269,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "validatable",
    "start": 280,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Validatable2",
    "start": 293,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 324,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Validatable2",
    "start": 334,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "validators",
    "start": 361,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "KnockoutObservableBase2",
    "start": 373,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "Validator2",
    "start": 397,
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
    "value": "TValue",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 420,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "Validator2",
    "start": 426,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 451,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "_subscription",
    "start": 459,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "KnockoutSubscription2",
    "start": 474,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 507,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "ViewModel",
    "start": 513,
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
    "value": "TValue",
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
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 537,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "validationPlacements",
    "start": 544,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "ValidationPlacement2",
    "start": 572,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 593,
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
    "value": ">",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 604,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "ValidationPlacement2",
    "start": 614,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 649,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "Widget",
    "start": 655,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 676,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "viewModelType",
    "start": 688,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 710,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "ViewModel",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 772,
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
    "value": "viewModelType",
    "start": 784,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 806,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "ViewModel",
    "start": 809,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 819,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 840,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 851,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "ViewModel",
    "start": 862,
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
    "value": "TValue",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 890,
    "end": 896
  },
  {
    "type": "Null",
    "value": "null",
    "start": 897,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  }
]
```

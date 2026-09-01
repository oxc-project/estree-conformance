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
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
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
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 17,
        "end": 20
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
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
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
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 53,
                              "end": 54
                            },
                            "typeArguments": null,
                            "start": 53,
                            "end": 54
                          },
                          "start": 51,
                          "end": 54
                        },
                        "start": 46,
                        "end": 54
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 59,
                          "end": 66
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 67,
                                "end": 68
                              },
                              "typeArguments": null,
                              "start": 67,
                              "end": 68
                            }
                          ],
                          "start": 66,
                          "end": 69
                        },
                        "start": 59,
                        "end": 69
                      },
                      "start": 56,
                      "end": 69
                    },
                    "start": 45,
                    "end": 69
                  },
                  "start": 43,
                  "end": 69
                },
                "start": 35,
                "end": 69
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          },
                          "start": 85,
                          "end": 90
                        },
                        "start": 80,
                        "end": 90
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 102
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 104
                              },
                              "typeArguments": null,
                              "start": 103,
                              "end": 104
                            }
                          ],
                          "start": 102,
                          "end": 105
                        },
                        "start": 95,
                        "end": 105
                      },
                      "start": 92,
                      "end": 105
                    },
                    "start": 79,
                    "end": 105
                  },
                  "start": 77,
                  "end": 105
                },
                "start": 71,
                "end": 105
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 129,
                            "end": 132
                          },
                          "start": 127,
                          "end": 132
                        },
                        "start": 119,
                        "end": 132
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 137,
                        "end": 141
                      },
                      "start": 134,
                      "end": 141
                    },
                    "start": 118,
                    "end": 141
                  },
                  "start": 116,
                  "end": 141
                },
                "start": 107,
                "end": 141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 151
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 153
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 153
                    }
                  ],
                  "start": 151,
                  "end": 154
                },
                "start": 144,
                "end": 154
              },
              "start": 142,
              "end": 154
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 27,
            "end": 155
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 164
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 165,
                  "end": 166
                }
              ],
              "start": 164,
              "end": 167
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "typeArguments": null,
                            "start": 186,
                            "end": 187
                          },
                          "start": 184,
                          "end": 187
                        },
                        "start": 179,
                        "end": 187
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 192,
                          "end": 199
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 200,
                                "end": 201
                              },
                              "typeArguments": null,
                              "start": 200,
                              "end": 201
                            }
                          ],
                          "start": 199,
                          "end": 202
                        },
                        "start": 192,
                        "end": 202
                      },
                      "start": 189,
                      "end": 202
                    },
                    "start": 178,
                    "end": 202
                  },
                  "start": 176,
                  "end": 202
                },
                "start": 168,
                "end": 202
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 220,
                            "end": 223
                          },
                          "start": 218,
                          "end": 223
                        },
                        "start": 213,
                        "end": 223
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 229
                        },
                        "typeArguments": null,
                        "start": 228,
                        "end": 229
                      },
                      "start": 225,
                      "end": 229
                    },
                    "start": 212,
                    "end": 229
                  },
                  "start": 210,
                  "end": 229
                },
                "start": 204,
                "end": 229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 253,
                            "end": 256
                          },
                          "start": 251,
                          "end": 256
                        },
                        "start": 243,
                        "end": 256
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 261,
                        "end": 265
                      },
                      "start": 258,
                      "end": 265
                    },
                    "start": 242,
                    "end": 265
                  },
                  "start": 240,
                  "end": 265
                },
                "start": 231,
                "end": 265
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 275
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 277
                      },
                      "typeArguments": null,
                      "start": 276,
                      "end": 277
                    }
                  ],
                  "start": 275,
                  "end": 278
                },
                "start": 268,
                "end": 278
              },
              "start": 266,
              "end": 278
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 160,
            "end": 279
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 288
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 290
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 289,
                  "end": 290
                }
              ],
              "start": 288,
              "end": 291
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 310,
                              "end": 311
                            },
                            "typeArguments": null,
                            "start": 310,
                            "end": 311
                          },
                          "start": 308,
                          "end": 311
                        },
                        "start": 303,
                        "end": 311
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 317
                        },
                        "typeArguments": null,
                        "start": 316,
                        "end": 317
                      },
                      "start": 313,
                      "end": 317
                    },
                    "start": 302,
                    "end": 317
                  },
                  "start": 300,
                  "end": 317
                },
                "start": 292,
                "end": 317
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 335,
                            "end": 338
                          },
                          "start": 333,
                          "end": 338
                        },
                        "start": 328,
                        "end": 338
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 343,
                          "end": 350
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 351,
                                "end": 352
                              },
                              "typeArguments": null,
                              "start": 351,
                              "end": 352
                            }
                          ],
                          "start": 350,
                          "end": 353
                        },
                        "start": 343,
                        "end": 353
                      },
                      "start": 340,
                      "end": 353
                    },
                    "start": 327,
                    "end": 353
                  },
                  "start": 325,
                  "end": 353
                },
                "start": 319,
                "end": 353
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 377,
                            "end": 380
                          },
                          "start": 375,
                          "end": 380
                        },
                        "start": 367,
                        "end": 380
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 385,
                        "end": 389
                      },
                      "start": 382,
                      "end": 389
                    },
                    "start": 366,
                    "end": 389
                  },
                  "start": 364,
                  "end": 389
                },
                "start": 355,
                "end": 389
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
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
                        "name": "U",
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
                "start": 392,
                "end": 402
              },
              "start": 390,
              "end": 402
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 284,
            "end": 403
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 412
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 414
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 413,
                  "end": 414
                }
              ],
              "start": 412,
              "end": 415
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 434,
                              "end": 435
                            },
                            "typeArguments": null,
                            "start": 434,
                            "end": 435
                          },
                          "start": 432,
                          "end": 435
                        },
                        "start": 427,
                        "end": 435
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 441
                        },
                        "typeArguments": null,
                        "start": 440,
                        "end": 441
                      },
                      "start": 437,
                      "end": 441
                    },
                    "start": 426,
                    "end": 441
                  },
                  "start": 424,
                  "end": 441
                },
                "start": 416,
                "end": 441
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 459,
                            "end": 462
                          },
                          "start": 457,
                          "end": 462
                        },
                        "start": 452,
                        "end": 462
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 468
                        },
                        "typeArguments": null,
                        "start": 467,
                        "end": 468
                      },
                      "start": 464,
                      "end": 468
                    },
                    "start": 451,
                    "end": 468
                  },
                  "start": 449,
                  "end": 468
                },
                "start": 443,
                "end": 468
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 492,
                            "end": 495
                          },
                          "start": 490,
                          "end": 495
                        },
                        "start": 482,
                        "end": 495
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 500,
                        "end": 504
                      },
                      "start": 497,
                      "end": 504
                    },
                    "start": 481,
                    "end": 504
                  },
                  "start": 479,
                  "end": 504
                },
                "start": 470,
                "end": 504
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 514
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 516
                      },
                      "typeArguments": null,
                      "start": 515,
                      "end": 516
                    }
                  ],
                  "start": 514,
                  "end": 517
                },
                "start": 507,
                "end": 517
              },
              "start": 505,
              "end": 517
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 408,
            "end": 518
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 527
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 529
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 528,
                  "end": 529
                }
              ],
              "start": 527,
              "end": 530
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 549,
                              "end": 550
                            },
                            "typeArguments": null,
                            "start": 549,
                            "end": 550
                          },
                          "start": 547,
                          "end": 550
                        },
                        "start": 542,
                        "end": 550
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 555,
                        "end": 558
                      },
                      "start": 552,
                      "end": 558
                    },
                    "start": 541,
                    "end": 558
                  },
                  "start": 539,
                  "end": 558
                },
                "start": 531,
                "end": 558
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 576,
                            "end": 579
                          },
                          "start": 574,
                          "end": 579
                        },
                        "start": 569,
                        "end": 579
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 584,
                        "end": 587
                      },
                      "start": 581,
                      "end": 587
                    },
                    "start": 568,
                    "end": 587
                  },
                  "start": 566,
                  "end": 587
                },
                "start": 560,
                "end": 587
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 611,
                            "end": 614
                          },
                          "start": 609,
                          "end": 614
                        },
                        "start": 601,
                        "end": 614
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 619,
                        "end": 623
                      },
                      "start": 616,
                      "end": 623
                    },
                    "start": 600,
                    "end": 623
                  },
                  "start": 598,
                  "end": 623
                },
                "start": 589,
                "end": 623
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 626,
                "end": 630
              },
              "start": 624,
              "end": 630
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 523,
            "end": 631
          }
        ],
        "start": 21,
        "end": 633
      },
      "declare": false,
      "start": 0,
      "end": 633
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 653
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
              "start": 654,
              "end": 655
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 654,
            "end": 655
          }
        ],
        "start": 653,
        "end": 656
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
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 667
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 669
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 668,
                  "end": 669
                }
              ],
              "start": 667,
              "end": 670
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 689,
                              "end": 690
                            },
                            "typeArguments": null,
                            "start": 689,
                            "end": 690
                          },
                          "start": 687,
                          "end": 690
                        },
                        "start": 682,
                        "end": 690
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 703
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 704,
                                "end": 705
                              },
                              "typeArguments": null,
                              "start": 704,
                              "end": 705
                            }
                          ],
                          "start": 703,
                          "end": 706
                        },
                        "start": 695,
                        "end": 706
                      },
                      "start": 692,
                      "end": 706
                    },
                    "start": 681,
                    "end": 706
                  },
                  "start": 679,
                  "end": 706
                },
                "start": 671,
                "end": 706
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 724,
                            "end": 727
                          },
                          "start": 722,
                          "end": 727
                        },
                        "start": 717,
                        "end": 727
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 732,
                          "end": 740
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 741,
                                "end": 742
                              },
                              "typeArguments": null,
                              "start": 741,
                              "end": 742
                            }
                          ],
                          "start": 740,
                          "end": 743
                        },
                        "start": 732,
                        "end": 743
                      },
                      "start": 729,
                      "end": 743
                    },
                    "start": 716,
                    "end": 743
                  },
                  "start": 714,
                  "end": 743
                },
                "start": 708,
                "end": 743
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 767,
                            "end": 770
                          },
                          "start": 765,
                          "end": 770
                        },
                        "start": 757,
                        "end": 770
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 775,
                        "end": 779
                      },
                      "start": 772,
                      "end": 779
                    },
                    "start": 756,
                    "end": 779
                  },
                  "start": 754,
                  "end": 779
                },
                "start": 745,
                "end": 779
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 790
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 792
                      },
                      "typeArguments": null,
                      "start": 791,
                      "end": 792
                    }
                  ],
                  "start": 790,
                  "end": 793
                },
                "start": 782,
                "end": 793
              },
              "start": 780,
              "end": 793
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 663,
            "end": 794
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 803
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 804,
                  "end": 805
                }
              ],
              "start": 803,
              "end": 806
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 825,
                              "end": 826
                            },
                            "typeArguments": null,
                            "start": 825,
                            "end": 826
                          },
                          "start": 823,
                          "end": 826
                        },
                        "start": 818,
                        "end": 826
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 831,
                          "end": 839
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 840,
                                "end": 841
                              },
                              "typeArguments": null,
                              "start": 840,
                              "end": 841
                            }
                          ],
                          "start": 839,
                          "end": 842
                        },
                        "start": 831,
                        "end": 842
                      },
                      "start": 828,
                      "end": 842
                    },
                    "start": 817,
                    "end": 842
                  },
                  "start": 815,
                  "end": 842
                },
                "start": 807,
                "end": 842
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 860,
                            "end": 863
                          },
                          "start": 858,
                          "end": 863
                        },
                        "start": 853,
                        "end": 863
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 868,
                          "end": 869
                        },
                        "typeArguments": null,
                        "start": 868,
                        "end": 869
                      },
                      "start": 865,
                      "end": 869
                    },
                    "start": 852,
                    "end": 869
                  },
                  "start": 850,
                  "end": 869
                },
                "start": 844,
                "end": 869
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 893,
                            "end": 896
                          },
                          "start": 891,
                          "end": 896
                        },
                        "start": 883,
                        "end": 896
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 901,
                        "end": 905
                      },
                      "start": 898,
                      "end": 905
                    },
                    "start": 882,
                    "end": 905
                  },
                  "start": 880,
                  "end": 905
                },
                "start": 871,
                "end": 905
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 916
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 917,
                        "end": 918
                      },
                      "typeArguments": null,
                      "start": 917,
                      "end": 918
                    }
                  ],
                  "start": 916,
                  "end": 919
                },
                "start": 908,
                "end": 919
              },
              "start": 906,
              "end": 919
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 799,
            "end": 920
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 929
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 930,
                    "end": 931
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 930,
                  "end": 931
                }
              ],
              "start": 929,
              "end": 932
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 951,
                              "end": 952
                            },
                            "typeArguments": null,
                            "start": 951,
                            "end": 952
                          },
                          "start": 949,
                          "end": 952
                        },
                        "start": 944,
                        "end": 952
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 957,
                          "end": 958
                        },
                        "typeArguments": null,
                        "start": 957,
                        "end": 958
                      },
                      "start": 954,
                      "end": 958
                    },
                    "start": 943,
                    "end": 958
                  },
                  "start": 941,
                  "end": 958
                },
                "start": 933,
                "end": 958
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 976,
                            "end": 979
                          },
                          "start": 974,
                          "end": 979
                        },
                        "start": 969,
                        "end": 979
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 992
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 993,
                                "end": 994
                              },
                              "typeArguments": null,
                              "start": 993,
                              "end": 994
                            }
                          ],
                          "start": 992,
                          "end": 995
                        },
                        "start": 984,
                        "end": 995
                      },
                      "start": 981,
                      "end": 995
                    },
                    "start": 968,
                    "end": 995
                  },
                  "start": 966,
                  "end": 995
                },
                "start": 960,
                "end": 995
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1019,
                            "end": 1022
                          },
                          "start": 1017,
                          "end": 1022
                        },
                        "start": 1009,
                        "end": 1022
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1027,
                        "end": 1031
                      },
                      "start": 1024,
                      "end": 1031
                    },
                    "start": 1008,
                    "end": 1031
                  },
                  "start": 1006,
                  "end": 1031
                },
                "start": 997,
                "end": 1031
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1042
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1043,
                        "end": 1044
                      },
                      "typeArguments": null,
                      "start": 1043,
                      "end": 1044
                    }
                  ],
                  "start": 1042,
                  "end": 1045
                },
                "start": 1034,
                "end": 1045
              },
              "start": 1032,
              "end": 1045
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 925,
            "end": 1046
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1051,
              "end": 1055
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1056,
                    "end": 1057
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1056,
                  "end": 1057
                }
              ],
              "start": 1055,
              "end": 1058
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1077,
                              "end": 1078
                            },
                            "typeArguments": null,
                            "start": 1077,
                            "end": 1078
                          },
                          "start": 1075,
                          "end": 1078
                        },
                        "start": 1070,
                        "end": 1078
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1083,
                          "end": 1084
                        },
                        "typeArguments": null,
                        "start": 1083,
                        "end": 1084
                      },
                      "start": 1080,
                      "end": 1084
                    },
                    "start": 1069,
                    "end": 1084
                  },
                  "start": 1067,
                  "end": 1084
                },
                "start": 1059,
                "end": 1084
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1102,
                            "end": 1105
                          },
                          "start": 1100,
                          "end": 1105
                        },
                        "start": 1095,
                        "end": 1105
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1111
                        },
                        "typeArguments": null,
                        "start": 1110,
                        "end": 1111
                      },
                      "start": 1107,
                      "end": 1111
                    },
                    "start": 1094,
                    "end": 1111
                  },
                  "start": 1092,
                  "end": 1111
                },
                "start": 1086,
                "end": 1111
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1135,
                            "end": 1138
                          },
                          "start": 1133,
                          "end": 1138
                        },
                        "start": 1125,
                        "end": 1138
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1143,
                        "end": 1147
                      },
                      "start": 1140,
                      "end": 1147
                    },
                    "start": 1124,
                    "end": 1147
                  },
                  "start": 1122,
                  "end": 1147
                },
                "start": 1113,
                "end": 1147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1158
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1159,
                        "end": 1160
                      },
                      "typeArguments": null,
                      "start": 1159,
                      "end": 1160
                    }
                  ],
                  "start": 1158,
                  "end": 1161
                },
                "start": 1150,
                "end": 1161
              },
              "start": 1148,
              "end": 1161
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1051,
            "end": 1162
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1171
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1174,
                    "end": 1175
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1174,
                  "end": 1175
                }
              ],
              "start": 1173,
              "end": 1176
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1195,
                              "end": 1196
                            },
                            "typeArguments": null,
                            "start": 1195,
                            "end": 1196
                          },
                          "start": 1193,
                          "end": 1196
                        },
                        "start": 1188,
                        "end": 1196
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1201,
                        "end": 1204
                      },
                      "start": 1198,
                      "end": 1204
                    },
                    "start": 1187,
                    "end": 1204
                  },
                  "start": 1185,
                  "end": 1204
                },
                "start": 1177,
                "end": 1204
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1222,
                            "end": 1225
                          },
                          "start": 1220,
                          "end": 1225
                        },
                        "start": 1215,
                        "end": 1225
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1230,
                        "end": 1233
                      },
                      "start": 1227,
                      "end": 1233
                    },
                    "start": 1214,
                    "end": 1233
                  },
                  "start": 1212,
                  "end": 1233
                },
                "start": 1206,
                "end": 1233
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1257,
                            "end": 1260
                          },
                          "start": 1255,
                          "end": 1260
                        },
                        "start": 1247,
                        "end": 1260
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1265,
                        "end": 1269
                      },
                      "start": 1262,
                      "end": 1269
                    },
                    "start": 1246,
                    "end": 1269
                  },
                  "start": 1244,
                  "end": 1269
                },
                "start": 1235,
                "end": 1269
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1272,
                "end": 1276
              },
              "start": 1270,
              "end": 1276
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1167,
            "end": 1277
          }
        ],
        "start": 657,
        "end": 1279
      },
      "declare": false,
      "start": 635,
      "end": 1279
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1298,
        "end": 1310
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1314,
            "end": 1322
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1323,
                "end": 1329
              }
            ],
            "start": 1322,
            "end": 1330
          },
          "start": 1314,
          "end": 1330
        },
        "start": 1312,
        "end": 1330
      },
      "body": null,
      "expression": false,
      "start": 1281,
      "end": 1331
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionP",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1362
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1366,
            "end": 1373
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1374,
                "end": 1380
              }
            ],
            "start": 1373,
            "end": 1381
          },
          "start": 1366,
          "end": 1381
        },
        "start": 1364,
        "end": 1381
      },
      "body": null,
      "expression": false,
      "start": 1332,
      "end": 1382
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1400,
        "end": 1413
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1417,
            "end": 1425
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1428,
                      "end": 1429
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1431,
                        "end": 1437
                      },
                      "start": 1429,
                      "end": 1437
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1428,
                    "end": 1437
                  }
                ],
                "start": 1426,
                "end": 1439
              }
            ],
            "start": 1425,
            "end": 1440
          },
          "start": 1417,
          "end": 1440
        },
        "start": 1415,
        "end": 1440
      },
      "body": null,
      "expression": false,
      "start": 1383,
      "end": 1441
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1473
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1484
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1487,
                      "end": 1488
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1490,
                        "end": 1496
                      },
                      "start": 1488,
                      "end": 1496
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1487,
                    "end": 1496
                  }
                ],
                "start": 1485,
                "end": 1498
              }
            ],
            "start": 1484,
            "end": 1499
          },
          "start": 1477,
          "end": 1499
        },
        "start": 1475,
        "end": 1499
      },
      "body": null,
      "expression": false,
      "start": 1442,
      "end": 1500
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1518,
        "end": 1531
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1535,
              "end": 1541
            },
            "start": 1533,
            "end": 1541
          },
          "start": 1532,
          "end": 1541
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1544,
            "end": 1552
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1553,
                "end": 1559
              }
            ],
            "start": 1552,
            "end": 1560
          },
          "start": 1544,
          "end": 1560
        },
        "start": 1542,
        "end": 1560
      },
      "body": null,
      "expression": false,
      "start": 1501,
      "end": 1561
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1579,
        "end": 1593
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1597,
              "end": 1603
            },
            "start": 1595,
            "end": 1603
          },
          "start": 1594,
          "end": 1603
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1606,
            "end": 1613
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1614,
                "end": 1620
              }
            ],
            "start": 1613,
            "end": 1621
          },
          "start": 1606,
          "end": 1621
        },
        "start": 1604,
        "end": 1621
      },
      "body": null,
      "expression": false,
      "start": 1562,
      "end": 1622
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1640,
        "end": 1653
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1657,
              "end": 1663
            },
            "start": 1655,
            "end": 1663
          },
          "start": 1654,
          "end": 1663
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1669,
              "end": 1675
            },
            "start": 1667,
            "end": 1675
          },
          "start": 1665,
          "end": 1675
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1678,
            "end": 1686
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1687,
                "end": 1693
              }
            ],
            "start": 1686,
            "end": 1694
          },
          "start": 1678,
          "end": 1694
        },
        "start": 1676,
        "end": 1694
      },
      "body": null,
      "expression": false,
      "start": 1623,
      "end": 1695
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1713,
        "end": 1727
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1731,
              "end": 1737
            },
            "start": 1729,
            "end": 1737
          },
          "start": 1728,
          "end": 1737
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1743,
              "end": 1749
            },
            "start": 1741,
            "end": 1749
          },
          "start": 1739,
          "end": 1749
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1752,
            "end": 1759
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1760,
                "end": 1766
              }
            ],
            "start": 1759,
            "end": 1767
          },
          "start": 1752,
          "end": 1767
        },
        "start": 1750,
        "end": 1767
      },
      "body": null,
      "expression": false,
      "start": 1696,
      "end": 1768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1786,
        "end": 1799
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1803,
              "end": 1809
            },
            "start": 1801,
            "end": 1809
          },
          "start": 1800,
          "end": 1809
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "type": "TSStringKeyword",
                      "start": 1819,
                      "end": 1825
                    },
                    "start": 1817,
                    "end": 1825
                  },
                  "start": 1816,
                  "end": 1825
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1830,
                  "end": 1836
                },
                "start": 1827,
                "end": 1836
              },
              "start": 1815,
              "end": 1836
            },
            "start": 1813,
            "end": 1836
          },
          "start": 1811,
          "end": 1836
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1839,
            "end": 1847
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1848,
                "end": 1854
              }
            ],
            "start": 1847,
            "end": 1855
          },
          "start": 1839,
          "end": 1855
        },
        "start": 1837,
        "end": 1855
      },
      "body": null,
      "expression": false,
      "start": 1769,
      "end": 1856
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1874,
        "end": 1888
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1892,
              "end": 1898
            },
            "start": 1890,
            "end": 1898
          },
          "start": 1889,
          "end": 1898
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "type": "TSStringKeyword",
                      "start": 1908,
                      "end": 1914
                    },
                    "start": 1906,
                    "end": 1914
                  },
                  "start": 1905,
                  "end": 1914
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1919,
                  "end": 1925
                },
                "start": 1916,
                "end": 1925
              },
              "start": 1904,
              "end": 1925
            },
            "start": 1902,
            "end": 1925
          },
          "start": 1900,
          "end": 1925
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1928,
            "end": 1935
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1936,
                "end": 1942
              }
            ],
            "start": 1935,
            "end": 1943
          },
          "start": 1928,
          "end": 1943
        },
        "start": 1926,
        "end": 1943
      },
      "body": null,
      "expression": false,
      "start": 1857,
      "end": 1944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1962,
        "end": 1975
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1979,
              "end": 1985
            },
            "start": 1977,
            "end": 1985
          },
          "start": 1976,
          "end": 1985
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "start": 1992,
                      "end": 1993
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1992,
                    "end": 1993
                  }
                ],
                "start": 1991,
                "end": 1994
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1998,
                        "end": 1999
                      },
                      "typeArguments": null,
                      "start": 1998,
                      "end": 1999
                    },
                    "start": 1996,
                    "end": 1999
                  },
                  "start": 1995,
                  "end": 1999
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
                    "start": 2004,
                    "end": 2005
                  },
                  "typeArguments": null,
                  "start": 2004,
                  "end": 2005
                },
                "start": 2001,
                "end": 2005
              },
              "start": 1991,
              "end": 2005
            },
            "start": 1989,
            "end": 2005
          },
          "start": 1987,
          "end": 2005
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2008,
            "end": 2016
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2017,
                "end": 2023
              }
            ],
            "start": 2016,
            "end": 2024
          },
          "start": 2008,
          "end": 2024
        },
        "start": 2006,
        "end": 2024
      },
      "body": null,
      "expression": false,
      "start": 1945,
      "end": 2025
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2057
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2061,
              "end": 2067
            },
            "start": 2059,
            "end": 2067
          },
          "start": 2058,
          "end": 2067
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "start": 2074,
                      "end": 2075
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2074,
                    "end": 2075
                  }
                ],
                "start": 2073,
                "end": 2076
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2080,
                        "end": 2081
                      },
                      "typeArguments": null,
                      "start": 2080,
                      "end": 2081
                    },
                    "start": 2078,
                    "end": 2081
                  },
                  "start": 2077,
                  "end": 2081
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
                    "start": 2086,
                    "end": 2087
                  },
                  "typeArguments": null,
                  "start": 2086,
                  "end": 2087
                },
                "start": 2083,
                "end": 2087
              },
              "start": 2073,
              "end": 2087
            },
            "start": 2071,
            "end": 2087
          },
          "start": 2069,
          "end": 2087
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2090,
            "end": 2097
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2098,
                "end": 2104
              }
            ],
            "start": 2097,
            "end": 2105
          },
          "start": 2090,
          "end": 2105
        },
        "start": 2088,
        "end": 2105
      },
      "body": null,
      "expression": false,
      "start": 2026,
      "end": 2106
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2124,
        "end": 2137
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "start": 2143,
                      "end": 2144
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2143,
                    "end": 2144
                  }
                ],
                "start": 2142,
                "end": 2145
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2149,
                        "end": 2150
                      },
                      "typeArguments": null,
                      "start": 2149,
                      "end": 2150
                    },
                    "start": 2147,
                    "end": 2150
                  },
                  "start": 2146,
                  "end": 2150
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
                    "start": 2155,
                    "end": 2156
                  },
                  "typeArguments": null,
                  "start": 2155,
                  "end": 2156
                },
                "start": 2152,
                "end": 2156
              },
              "start": 2142,
              "end": 2156
            },
            "start": 2140,
            "end": 2156
          },
          "start": 2138,
          "end": 2156
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2159,
            "end": 2167
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2168,
                "end": 2174
              }
            ],
            "start": 2167,
            "end": 2175
          },
          "start": 2159,
          "end": 2175
        },
        "start": 2157,
        "end": 2175
      },
      "body": null,
      "expression": false,
      "start": 2107,
      "end": 2176
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2194,
        "end": 2208
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "start": 2214,
                      "end": 2215
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2214,
                    "end": 2215
                  }
                ],
                "start": 2213,
                "end": 2216
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2220,
                        "end": 2221
                      },
                      "typeArguments": null,
                      "start": 2220,
                      "end": 2221
                    },
                    "start": 2218,
                    "end": 2221
                  },
                  "start": 2217,
                  "end": 2221
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
                    "start": 2226,
                    "end": 2227
                  },
                  "typeArguments": null,
                  "start": 2226,
                  "end": 2227
                },
                "start": 2223,
                "end": 2227
              },
              "start": 2213,
              "end": 2227
            },
            "start": 2211,
            "end": 2227
          },
          "start": 2209,
          "end": 2227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2230,
            "end": 2237
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2238,
                "end": 2244
              }
            ],
            "start": 2237,
            "end": 2245
          },
          "start": 2230,
          "end": 2245
        },
        "start": 2228,
        "end": 2245
      },
      "body": null,
      "expression": false,
      "start": 2177,
      "end": 2246
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2264,
        "end": 2277
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
              "start": 2278,
              "end": 2279
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2278,
            "end": 2279
          }
        ],
        "start": 2277,
        "end": 2280
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2284,
                "end": 2285
              },
              "typeArguments": null,
              "start": 2284,
              "end": 2285
            },
            "start": 2282,
            "end": 2285
          },
          "start": 2281,
          "end": 2285
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2295,
                        "end": 2296
                      },
                      "typeArguments": null,
                      "start": 2295,
                      "end": 2296
                    },
                    "start": 2293,
                    "end": 2296
                  },
                  "start": 2292,
                  "end": 2296
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
                    "start": 2301,
                    "end": 2302
                  },
                  "typeArguments": null,
                  "start": 2301,
                  "end": 2302
                },
                "start": 2298,
                "end": 2302
              },
              "start": 2291,
              "end": 2302
            },
            "start": 2289,
            "end": 2302
          },
          "start": 2287,
          "end": 2302
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2305,
            "end": 2313
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
                  "start": 2314,
                  "end": 2315
                },
                "typeArguments": null,
                "start": 2314,
                "end": 2315
              }
            ],
            "start": 2313,
            "end": 2316
          },
          "start": 2305,
          "end": 2316
        },
        "start": 2303,
        "end": 2316
      },
      "body": null,
      "expression": false,
      "start": 2247,
      "end": 2317
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2335,
        "end": 2349
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
              "start": 2350,
              "end": 2351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2350,
            "end": 2351
          }
        ],
        "start": 2349,
        "end": 2352
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2356,
                "end": 2357
              },
              "typeArguments": null,
              "start": 2356,
              "end": 2357
            },
            "start": 2354,
            "end": 2357
          },
          "start": 2353,
          "end": 2357
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2367,
                        "end": 2368
                      },
                      "typeArguments": null,
                      "start": 2367,
                      "end": 2368
                    },
                    "start": 2365,
                    "end": 2368
                  },
                  "start": 2364,
                  "end": 2368
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
                    "start": 2373,
                    "end": 2374
                  },
                  "typeArguments": null,
                  "start": 2373,
                  "end": 2374
                },
                "start": 2370,
                "end": 2374
              },
              "start": 2363,
              "end": 2374
            },
            "start": 2361,
            "end": 2374
          },
          "start": 2359,
          "end": 2374
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2377,
            "end": 2384
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
                  "start": 2385,
                  "end": 2386
                },
                "typeArguments": null,
                "start": 2385,
                "end": 2386
              }
            ],
            "start": 2384,
            "end": 2387
          },
          "start": 2377,
          "end": 2387
        },
        "start": 2375,
        "end": 2387
      },
      "body": null,
      "expression": false,
      "start": 2318,
      "end": 2388
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2406,
        "end": 2419
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
              "start": 2420,
              "end": 2421
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2420,
            "end": 2421
          }
        ],
        "start": 2419,
        "end": 2422
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2426,
                "end": 2427
              },
              "typeArguments": null,
              "start": 2426,
              "end": 2427
            },
            "start": 2424,
            "end": 2427
          },
          "start": 2423,
          "end": 2427
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2434,
                      "end": 2435
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2434,
                    "end": 2435
                  }
                ],
                "start": 2433,
                "end": 2436
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2440,
                        "end": 2441
                      },
                      "typeArguments": null,
                      "start": 2440,
                      "end": 2441
                    },
                    "start": 2438,
                    "end": 2441
                  },
                  "start": 2437,
                  "end": 2441
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2446,
                    "end": 2447
                  },
                  "typeArguments": null,
                  "start": 2446,
                  "end": 2447
                },
                "start": 2443,
                "end": 2447
              },
              "start": 2433,
              "end": 2447
            },
            "start": 2431,
            "end": 2447
          },
          "start": 2429,
          "end": 2447
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2450,
            "end": 2458
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
                  "start": 2459,
                  "end": 2460
                },
                "typeArguments": null,
                "start": 2459,
                "end": 2460
              }
            ],
            "start": 2458,
            "end": 2461
          },
          "start": 2450,
          "end": 2461
        },
        "start": 2448,
        "end": 2461
      },
      "body": null,
      "expression": false,
      "start": 2389,
      "end": 2462
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2480,
        "end": 2494
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
              "start": 2495,
              "end": 2496
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2495,
            "end": 2496
          }
        ],
        "start": 2494,
        "end": 2497
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2501,
                "end": 2502
              },
              "typeArguments": null,
              "start": 2501,
              "end": 2502
            },
            "start": 2499,
            "end": 2502
          },
          "start": 2498,
          "end": 2502
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2509,
                      "end": 2510
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2509,
                    "end": 2510
                  }
                ],
                "start": 2508,
                "end": 2511
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2515,
                        "end": 2516
                      },
                      "typeArguments": null,
                      "start": 2515,
                      "end": 2516
                    },
                    "start": 2513,
                    "end": 2516
                  },
                  "start": 2512,
                  "end": 2516
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2521,
                    "end": 2522
                  },
                  "typeArguments": null,
                  "start": 2521,
                  "end": 2522
                },
                "start": 2518,
                "end": 2522
              },
              "start": 2508,
              "end": 2522
            },
            "start": 2506,
            "end": 2522
          },
          "start": 2504,
          "end": 2522
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2525,
            "end": 2532
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
                  "start": 2533,
                  "end": 2534
                },
                "typeArguments": null,
                "start": 2533,
                "end": 2534
              }
            ],
            "start": 2532,
            "end": 2535
          },
          "start": 2525,
          "end": 2535
        },
        "start": 2523,
        "end": 2535
      },
      "body": null,
      "expression": false,
      "start": 2463,
      "end": 2536
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2554,
        "end": 2568
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
              "start": 2569,
              "end": 2570
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2569,
            "end": 2570
          }
        ],
        "start": 2568,
        "end": 2571
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2577,
                      "end": 2578
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2577,
                    "end": 2578
                  }
                ],
                "start": 2576,
                "end": 2579
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2583,
                        "end": 2584
                      },
                      "typeArguments": null,
                      "start": 2583,
                      "end": 2584
                    },
                    "start": 2581,
                    "end": 2584
                  },
                  "start": 2580,
                  "end": 2584
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2589,
                    "end": 2590
                  },
                  "typeArguments": null,
                  "start": 2589,
                  "end": 2590
                },
                "start": 2586,
                "end": 2590
              },
              "start": 2576,
              "end": 2590
            },
            "start": 2574,
            "end": 2590
          },
          "start": 2572,
          "end": 2590
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2593,
            "end": 2601
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
                  "start": 2602,
                  "end": 2603
                },
                "typeArguments": null,
                "start": 2602,
                "end": 2603
              }
            ],
            "start": 2601,
            "end": 2604
          },
          "start": 2593,
          "end": 2604
        },
        "start": 2591,
        "end": 2604
      },
      "body": null,
      "expression": false,
      "start": 2537,
      "end": 2605
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2623,
        "end": 2638
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
              "start": 2639,
              "end": 2640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2639,
            "end": 2640
          }
        ],
        "start": 2638,
        "end": 2641
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2647,
                      "end": 2648
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2647,
                    "end": 2648
                  }
                ],
                "start": 2646,
                "end": 2649
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2653,
                        "end": 2654
                      },
                      "typeArguments": null,
                      "start": 2653,
                      "end": 2654
                    },
                    "start": 2651,
                    "end": 2654
                  },
                  "start": 2650,
                  "end": 2654
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2659,
                    "end": 2660
                  },
                  "typeArguments": null,
                  "start": 2659,
                  "end": 2660
                },
                "start": 2656,
                "end": 2660
              },
              "start": 2646,
              "end": 2660
            },
            "start": 2644,
            "end": 2660
          },
          "start": 2642,
          "end": 2660
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2663,
            "end": 2670
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
                  "start": 2671,
                  "end": 2672
                },
                "typeArguments": null,
                "start": 2671,
                "end": 2672
              }
            ],
            "start": 2670,
            "end": 2673
          },
          "start": 2663,
          "end": 2673
        },
        "start": 2661,
        "end": 2673
      },
      "body": null,
      "expression": false,
      "start": 2606,
      "end": 2674
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2707
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2711,
              "end": 2717
            },
            "start": 2709,
            "end": 2717
          },
          "start": 2708,
          "end": 2717
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2720,
            "end": 2728
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2729,
                "end": 2735
              }
            ],
            "start": 2728,
            "end": 2736
          },
          "start": 2720,
          "end": 2736
        },
        "start": 2718,
        "end": 2736
      },
      "body": null,
      "expression": false,
      "start": 2676,
      "end": 2737
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2755,
        "end": 2769
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 2773,
              "end": 2779
            },
            "start": 2771,
            "end": 2779
          },
          "start": 2770,
          "end": 2779
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2782,
            "end": 2790
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2791,
                "end": 2797
              }
            ],
            "start": 2790,
            "end": 2798
          },
          "start": 2782,
          "end": 2798
        },
        "start": 2780,
        "end": 2798
      },
      "body": null,
      "expression": false,
      "start": 2738,
      "end": 2799
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2817,
        "end": 2832
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2836,
              "end": 2842
            },
            "start": 2834,
            "end": 2842
          },
          "start": 2833,
          "end": 2842
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2845,
            "end": 2852
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2853,
                "end": 2859
              }
            ],
            "start": 2852,
            "end": 2860
          },
          "start": 2845,
          "end": 2860
        },
        "start": 2843,
        "end": 2860
      },
      "body": null,
      "expression": false,
      "start": 2800,
      "end": 2861
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2879,
        "end": 2894
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 2898,
              "end": 2904
            },
            "start": 2896,
            "end": 2904
          },
          "start": 2895,
          "end": 2904
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2907,
            "end": 2914
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2915,
                "end": 2921
              }
            ],
            "start": 2914,
            "end": 2922
          },
          "start": 2907,
          "end": 2922
        },
        "start": 2905,
        "end": 2922
      },
      "body": null,
      "expression": false,
      "start": 2862,
      "end": 2923
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2956
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
              "start": 2957,
              "end": 2958
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2957,
            "end": 2958
          }
        ],
        "start": 2956,
        "end": 2959
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2963,
                "end": 2964
              },
              "typeArguments": null,
              "start": 2963,
              "end": 2964
            },
            "start": 2961,
            "end": 2964
          },
          "start": 2960,
          "end": 2964
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2967,
            "end": 2975
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
                  "start": 2976,
                  "end": 2977
                },
                "typeArguments": null,
                "start": 2976,
                "end": 2977
              }
            ],
            "start": 2975,
            "end": 2978
          },
          "start": 2967,
          "end": 2978
        },
        "start": 2965,
        "end": 2978
      },
      "body": null,
      "expression": false,
      "start": 2925,
      "end": 2979
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2997,
        "end": 3011
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
              "start": 3012,
              "end": 3013
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3012,
            "end": 3013
          }
        ],
        "start": 3011,
        "end": 3014
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3018,
                "end": 3019
              },
              "typeArguments": null,
              "start": 3018,
              "end": 3019
            },
            "start": 3016,
            "end": 3019
          },
          "start": 3015,
          "end": 3019
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 3024,
                "end": 3025
              },
              "typeArguments": null,
              "start": 3024,
              "end": 3025
            },
            "start": 3022,
            "end": 3025
          },
          "start": 3021,
          "end": 3025
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 3028,
            "end": 3036
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
                  "start": 3037,
                  "end": 3038
                },
                "typeArguments": null,
                "start": 3037,
                "end": 3038
              }
            ],
            "start": 3036,
            "end": 3039
          },
          "start": 3028,
          "end": 3039
        },
        "start": 3026,
        "end": 3039
      },
      "body": null,
      "expression": false,
      "start": 2980,
      "end": 3040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 3058,
        "end": 3073
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
              "start": 3074,
              "end": 3075
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3074,
            "end": 3075
          }
        ],
        "start": 3073,
        "end": 3076
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3080,
                "end": 3081
              },
              "typeArguments": null,
              "start": 3080,
              "end": 3081
            },
            "start": 3078,
            "end": 3081
          },
          "start": 3077,
          "end": 3081
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 3084,
            "end": 3092
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
                  "start": 3093,
                  "end": 3094
                },
                "typeArguments": null,
                "start": 3093,
                "end": 3094
              }
            ],
            "start": 3092,
            "end": 3095
          },
          "start": 3084,
          "end": 3095
        },
        "start": 3082,
        "end": 3095
      },
      "body": null,
      "expression": false,
      "start": 3041,
      "end": 3096
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 3114,
        "end": 3129
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
              "start": 3130,
              "end": 3131
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3130,
            "end": 3131
          }
        ],
        "start": 3129,
        "end": 3132
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3136,
                "end": 3137
              },
              "typeArguments": null,
              "start": 3136,
              "end": 3137
            },
            "start": 3134,
            "end": 3137
          },
          "start": 3133,
          "end": 3137
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 3142,
                "end": 3143
              },
              "typeArguments": null,
              "start": 3142,
              "end": 3143
            },
            "start": 3140,
            "end": 3143
          },
          "start": 3139,
          "end": 3143
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 3146,
            "end": 3153
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
                  "start": 3154,
                  "end": 3155
                },
                "typeArguments": null,
                "start": 3154,
                "end": 3155
              }
            ],
            "start": 3153,
            "end": 3156
          },
          "start": 3146,
          "end": 3156
        },
        "start": 3144,
        "end": 3156
      },
      "body": null,
      "expression": false,
      "start": 3097,
      "end": 3157
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3175,
                  "end": 3183
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3184,
                      "end": 3190
                    }
                  ],
                  "start": 3183,
                  "end": 3191
                },
                "start": 3175,
                "end": 3191
              },
              "start": 3173,
              "end": 3191
            },
            "start": 3171,
            "end": 3191
          },
          "init": null,
          "definite": false,
          "start": 3171,
          "end": 3191
        }
      ],
      "declare": true,
      "start": 3159,
      "end": 3192
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3197,
            "end": 3200
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3203,
                "end": 3205
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3206,
                "end": 3210
              },
              "optional": false,
              "computed": false,
              "start": 3203,
              "end": 3210
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3211,
                "end": 3223
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3225,
                "end": 3237
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3239,
                "end": 3251
              }
            ],
            "optional": false,
            "start": 3203,
            "end": 3252
          },
          "definite": false,
          "start": 3197,
          "end": 3252
        }
      ],
      "declare": false,
      "start": 3193,
      "end": 3253
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3258,
            "end": 3261
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3264,
                    "end": 3266
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3267,
                    "end": 3271
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3264,
                  "end": 3271
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3272,
                    "end": 3284
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3286,
                    "end": 3298
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3300,
                    "end": 3312
                  }
                ],
                "optional": false,
                "start": 3264,
                "end": 3313
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3314,
                "end": 3318
              },
              "optional": false,
              "computed": false,
              "start": 3264,
              "end": 3318
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3319,
                "end": 3331
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3333,
                "end": 3345
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3347,
                "end": 3359
              }
            ],
            "optional": false,
            "start": 3264,
            "end": 3360
          },
          "definite": false,
          "start": 3258,
          "end": 3360
        }
      ],
      "declare": false,
      "start": 3254,
      "end": 3361
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3366,
            "end": 3369
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3372,
                "end": 3374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3375,
                "end": 3379
              },
              "optional": false,
              "computed": false,
              "start": 3372,
              "end": 3379
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3380,
                "end": 3393
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3395,
                "end": 3408
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3410,
                "end": 3423
              }
            ],
            "optional": false,
            "start": 3372,
            "end": 3424
          },
          "definite": false,
          "start": 3366,
          "end": 3424
        }
      ],
      "declare": false,
      "start": 3362,
      "end": 3425
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3442,
                  "end": 3449
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3450,
                      "end": 3456
                    }
                  ],
                  "start": 3449,
                  "end": 3457
                },
                "start": 3442,
                "end": 3457
              },
              "start": 3440,
              "end": 3457
            },
            "start": 3438,
            "end": 3457
          },
          "init": null,
          "definite": false,
          "start": 3438,
          "end": 3457
        }
      ],
      "declare": true,
      "start": 3426,
      "end": 3458
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3463,
            "end": 3466
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3469,
                "end": 3471
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3472,
                "end": 3476
              },
              "optional": false,
              "computed": false,
              "start": 3469,
              "end": 3476
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3477,
                "end": 3489
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3491,
                "end": 3503
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3505,
                "end": 3517
              }
            ],
            "optional": false,
            "start": 3469,
            "end": 3518
          },
          "definite": false,
          "start": 3463,
          "end": 3518
        }
      ],
      "declare": false,
      "start": 3459,
      "end": 3519
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3524,
            "end": 3527
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3530,
                "end": 3532
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3533,
                "end": 3537
              },
              "optional": false,
              "computed": false,
              "start": 3530,
              "end": 3537
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3538,
                "end": 3551
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3553,
                "end": 3566
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3568,
                "end": 3581
              }
            ],
            "optional": false,
            "start": 3530,
            "end": 3582
          },
          "definite": false,
          "start": 3524,
          "end": 3582
        }
      ],
      "declare": false,
      "start": 3520,
      "end": 3583
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3588,
            "end": 3591
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3594,
                "end": 3596
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3597,
                "end": 3601
              },
              "optional": false,
              "computed": false,
              "start": 3594,
              "end": 3601
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3602,
                "end": 3615
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3617,
                "end": 3629
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3631,
                "end": 3643
              }
            ],
            "optional": false,
            "start": 3594,
            "end": 3644
          },
          "definite": false,
          "start": 3588,
          "end": 3644
        }
      ],
      "declare": false,
      "start": 3584,
      "end": 3645
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1d",
            "optional": false,
            "typeAnnotation": null,
            "start": 3650,
            "end": 3653
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3656,
                    "end": 3658
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3659,
                    "end": 3663
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3656,
                  "end": 3663
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3664,
                    "end": 3677
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3679,
                    "end": 3691
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3693,
                    "end": 3705
                  }
                ],
                "optional": false,
                "start": 3656,
                "end": 3706
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3707,
                "end": 3711
              },
              "optional": false,
              "computed": false,
              "start": 3656,
              "end": 3711
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3724
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3726,
                "end": 3738
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3740,
                "end": 3752
              }
            ],
            "optional": false,
            "start": 3656,
            "end": 3753
          },
          "definite": false,
          "start": 3650,
          "end": 3753
        }
      ],
      "declare": false,
      "start": 3646,
      "end": 3754
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3772,
                  "end": 3780
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3783,
                            "end": 3784
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3786,
                              "end": 3792
                            },
                            "start": 3784,
                            "end": 3792
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3783,
                          "end": 3793
                        }
                      ],
                      "start": 3781,
                      "end": 3795
                    }
                  ],
                  "start": 3780,
                  "end": 3796
                },
                "start": 3772,
                "end": 3796
              },
              "start": 3770,
              "end": 3796
            },
            "start": 3768,
            "end": 3796
          },
          "init": null,
          "definite": false,
          "start": 3768,
          "end": 3796
        }
      ],
      "declare": true,
      "start": 3756,
      "end": 3797
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3802,
            "end": 3805
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3808,
                "end": 3810
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3811,
                "end": 3815
              },
              "optional": false,
              "computed": false,
              "start": 3808,
              "end": 3815
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3816,
                "end": 3829
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3831,
                "end": 3844
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3846,
                "end": 3859
              }
            ],
            "optional": false,
            "start": 3808,
            "end": 3860
          },
          "definite": false,
          "start": 3802,
          "end": 3860
        }
      ],
      "declare": false,
      "start": 3798,
      "end": 3861
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3866,
            "end": 3869
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3872,
                    "end": 3874
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3875,
                    "end": 3879
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3872,
                  "end": 3879
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3880,
                    "end": 3893
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3895,
                    "end": 3908
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3910,
                    "end": 3923
                  }
                ],
                "optional": false,
                "start": 3872,
                "end": 3924
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3925,
                "end": 3929
              },
              "optional": false,
              "computed": false,
              "start": 3872,
              "end": 3929
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3930,
                "end": 3943
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3945,
                "end": 3958
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3960,
                "end": 3973
              }
            ],
            "optional": false,
            "start": 3872,
            "end": 3974
          },
          "definite": false,
          "start": 3866,
          "end": 3974
        }
      ],
      "declare": false,
      "start": 3862,
      "end": 3975
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3992,
                  "end": 3999
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4002,
                            "end": 4003
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 4005,
                              "end": 4011
                            },
                            "start": 4003,
                            "end": 4011
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 4002,
                          "end": 4012
                        }
                      ],
                      "start": 4000,
                      "end": 4014
                    }
                  ],
                  "start": 3999,
                  "end": 4015
                },
                "start": 3992,
                "end": 4015
              },
              "start": 3990,
              "end": 4015
            },
            "start": 3988,
            "end": 4015
          },
          "init": null,
          "definite": false,
          "start": 3988,
          "end": 4015
        }
      ],
      "declare": true,
      "start": 3976,
      "end": 4016
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4021,
            "end": 4024
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4027,
                "end": 4029
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4030,
                "end": 4034
              },
              "optional": false,
              "computed": false,
              "start": 4027,
              "end": 4034
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4035,
                "end": 4048
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4050,
                "end": 4063
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4065,
                "end": 4078
              }
            ],
            "optional": false,
            "start": 4027,
            "end": 4079
          },
          "definite": false,
          "start": 4021,
          "end": 4079
        }
      ],
      "declare": false,
      "start": 4017,
      "end": 4080
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4085,
            "end": 4088
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4091,
                "end": 4093
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4094,
                "end": 4098
              },
              "optional": false,
              "computed": false,
              "start": 4091,
              "end": 4098
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4099,
                "end": 4113
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4115,
                "end": 4129
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4131,
                "end": 4145
              }
            ],
            "optional": false,
            "start": 4091,
            "end": 4146
          },
          "definite": false,
          "start": 4085,
          "end": 4146
        }
      ],
      "declare": false,
      "start": 4081,
      "end": 4147
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4152,
            "end": 4155
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4158,
                "end": 4160
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4161,
                "end": 4165
              },
              "optional": false,
              "computed": false,
              "start": 4158,
              "end": 4165
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4166,
                "end": 4180
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4182,
                "end": 4195
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4197,
                "end": 4210
              }
            ],
            "optional": false,
            "start": 4158,
            "end": 4211
          },
          "definite": false,
          "start": 4152,
          "end": 4211
        }
      ],
      "declare": false,
      "start": 4148,
      "end": 4212
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4217,
            "end": 4220
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4223,
                    "end": 4225
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4226,
                    "end": 4230
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4223,
                  "end": 4230
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4231,
                    "end": 4245
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4247,
                    "end": 4260
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4262,
                    "end": 4275
                  }
                ],
                "optional": false,
                "start": 4223,
                "end": 4276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4277,
                "end": 4281
              },
              "optional": false,
              "computed": false,
              "start": 4223,
              "end": 4281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4282,
                "end": 4295
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4297,
                "end": 4310
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4312,
                "end": 4325
              }
            ],
            "optional": false,
            "start": 4223,
            "end": 4326
          },
          "definite": false,
          "start": 4217,
          "end": 4326
        }
      ],
      "declare": false,
      "start": 4213,
      "end": 4327
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4345,
                  "end": 4353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4354,
                      "end": 4360
                    }
                  ],
                  "start": 4353,
                  "end": 4361
                },
                "start": 4345,
                "end": 4361
              },
              "start": 4343,
              "end": 4361
            },
            "start": 4341,
            "end": 4361
          },
          "init": null,
          "definite": false,
          "start": 4341,
          "end": 4361
        }
      ],
      "declare": true,
      "start": 4329,
      "end": 4362
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4367,
            "end": 4370
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4373,
                "end": 4375
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4376,
                "end": 4380
              },
              "optional": false,
              "computed": false,
              "start": 4373,
              "end": 4380
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4381,
                "end": 4394
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4396,
                "end": 4409
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4411,
                "end": 4424
              }
            ],
            "optional": false,
            "start": 4373,
            "end": 4425
          },
          "definite": false,
          "start": 4367,
          "end": 4425
        }
      ],
      "declare": false,
      "start": 4363,
      "end": 4426
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4431,
            "end": 4434
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4437,
                    "end": 4439
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4440,
                    "end": 4444
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4437,
                  "end": 4444
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4445,
                    "end": 4458
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4460,
                    "end": 4473
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4475,
                    "end": 4488
                  }
                ],
                "optional": false,
                "start": 4437,
                "end": 4489
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4490,
                "end": 4494
              },
              "optional": false,
              "computed": false,
              "start": 4437,
              "end": 4494
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4495,
                "end": 4508
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4510,
                "end": 4523
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4525,
                "end": 4538
              }
            ],
            "optional": false,
            "start": 4437,
            "end": 4539
          },
          "definite": false,
          "start": 4431,
          "end": 4539
        }
      ],
      "declare": false,
      "start": 4427,
      "end": 4540
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4557,
                  "end": 4564
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4565,
                      "end": 4571
                    }
                  ],
                  "start": 4564,
                  "end": 4572
                },
                "start": 4557,
                "end": 4572
              },
              "start": 4555,
              "end": 4572
            },
            "start": 4553,
            "end": 4572
          },
          "init": null,
          "definite": false,
          "start": 4553,
          "end": 4572
        }
      ],
      "declare": true,
      "start": 4541,
      "end": 4573
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4578,
            "end": 4581
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4584,
                "end": 4586
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4587,
                "end": 4591
              },
              "optional": false,
              "computed": false,
              "start": 4584,
              "end": 4591
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4592,
                "end": 4605
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4607,
                "end": 4620
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4622,
                "end": 4635
              }
            ],
            "optional": false,
            "start": 4584,
            "end": 4636
          },
          "definite": false,
          "start": 4578,
          "end": 4636
        }
      ],
      "declare": false,
      "start": 4574,
      "end": 4637
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4642,
            "end": 4645
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4648,
                "end": 4650
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4651,
                "end": 4655
              },
              "optional": false,
              "computed": false,
              "start": 4648,
              "end": 4655
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4656,
                "end": 4670
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4672,
                "end": 4686
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4688,
                "end": 4702
              }
            ],
            "optional": false,
            "start": 4648,
            "end": 4703
          },
          "definite": false,
          "start": 4642,
          "end": 4703
        }
      ],
      "declare": false,
      "start": 4638,
      "end": 4704
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4709,
            "end": 4712
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4715,
                "end": 4717
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4718,
                "end": 4722
              },
              "optional": false,
              "computed": false,
              "start": 4715,
              "end": 4722
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4723,
                "end": 4737
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4739,
                "end": 4752
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4754,
                "end": 4767
              }
            ],
            "optional": false,
            "start": 4715,
            "end": 4768
          },
          "definite": false,
          "start": 4709,
          "end": 4768
        }
      ],
      "declare": false,
      "start": 4705,
      "end": 4769
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4774,
            "end": 4777
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4780,
                    "end": 4782
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4783,
                    "end": 4787
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4780,
                  "end": 4787
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4788,
                    "end": 4802
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4804,
                    "end": 4817
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4819,
                    "end": 4832
                  }
                ],
                "optional": false,
                "start": 4780,
                "end": 4833
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4834,
                "end": 4838
              },
              "optional": false,
              "computed": false,
              "start": 4780,
              "end": 4838
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4839,
                "end": 4852
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4854,
                "end": 4867
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4869,
                "end": 4882
              }
            ],
            "optional": false,
            "start": 4780,
            "end": 4883
          },
          "definite": false,
          "start": 4774,
          "end": 4883
        }
      ],
      "declare": false,
      "start": 4770,
      "end": 4884
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4911,
                  "end": 4919
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4920,
                      "end": 4926
                    }
                  ],
                  "start": 4919,
                  "end": 4927
                },
                "start": 4911,
                "end": 4927
              },
              "start": 4909,
              "end": 4927
            },
            "start": 4907,
            "end": 4927
          },
          "init": null,
          "definite": false,
          "start": 4907,
          "end": 4927
        }
      ],
      "declare": true,
      "start": 4895,
      "end": 4928
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sIPromise",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4956,
                        "end": 4959
                      },
                      "start": 4954,
                      "end": 4959
                    },
                    "start": 4953,
                    "end": 4959
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4964,
                      "end": 4972
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4973,
                          "end": 4979
                        }
                      ],
                      "start": 4972,
                      "end": 4980
                    },
                    "start": 4964,
                    "end": 4980
                  },
                  "start": 4961,
                  "end": 4980
                },
                "start": 4952,
                "end": 4980
              },
              "start": 4950,
              "end": 4980
            },
            "start": 4941,
            "end": 4980
          },
          "init": null,
          "definite": false,
          "start": 4941,
          "end": 4980
        }
      ],
      "declare": true,
      "start": 4929,
      "end": 4981
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sPromise",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 5008,
                        "end": 5011
                      },
                      "start": 5006,
                      "end": 5011
                    },
                    "start": 5005,
                    "end": 5011
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5016,
                      "end": 5023
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5024,
                          "end": 5030
                        }
                      ],
                      "start": 5023,
                      "end": 5031
                    },
                    "start": 5016,
                    "end": 5031
                  },
                  "start": 5013,
                  "end": 5031
                },
                "start": 5004,
                "end": 5031
              },
              "start": 5002,
              "end": 5031
            },
            "start": 4994,
            "end": 5031
          },
          "init": null,
          "definite": false,
          "start": 4994,
          "end": 5031
        }
      ],
      "declare": true,
      "start": 4982,
      "end": 5032
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5037,
            "end": 5040
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5043,
                "end": 5045
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5046,
                "end": 5050
              },
              "optional": false,
              "computed": false,
              "start": 5043,
              "end": 5050
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5051,
                "end": 5064
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5066,
                "end": 5079
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5081,
                "end": 5094
              }
            ],
            "optional": false,
            "start": 5043,
            "end": 5095
          },
          "definite": false,
          "start": 5037,
          "end": 5095
        }
      ],
      "declare": false,
      "start": 5033,
      "end": 5096
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5110,
            "end": 5113
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5116,
                    "end": 5118
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5119,
                    "end": 5123
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5116,
                  "end": 5123
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5124,
                    "end": 5133
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5135,
                    "end": 5148
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5150,
                    "end": 5163
                  }
                ],
                "optional": false,
                "start": 5116,
                "end": 5164
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5165,
                "end": 5169
              },
              "optional": false,
              "computed": false,
              "start": 5116,
              "end": 5169
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5170,
                "end": 5179
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5181,
                "end": 5194
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5196,
                "end": 5209
              }
            ],
            "optional": false,
            "start": 5116,
            "end": 5210
          },
          "definite": false,
          "start": 5110,
          "end": 5210
        }
      ],
      "declare": false,
      "start": 5106,
      "end": 5211
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5234,
                  "end": 5241
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5242,
                      "end": 5248
                    }
                  ],
                  "start": 5241,
                  "end": 5249
                },
                "start": 5234,
                "end": 5249
              },
              "start": 5232,
              "end": 5249
            },
            "start": 5230,
            "end": 5249
          },
          "init": null,
          "definite": false,
          "start": 5230,
          "end": 5249
        }
      ],
      "declare": true,
      "start": 5218,
      "end": 5250
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5255,
            "end": 5258
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5261,
                "end": 5263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5264,
                "end": 5268
              },
              "optional": false,
              "computed": false,
              "start": 5261,
              "end": 5268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5269,
                "end": 5282
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5284,
                "end": 5297
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5299,
                "end": 5312
              }
            ],
            "optional": false,
            "start": 5261,
            "end": 5313
          },
          "definite": false,
          "start": 5255,
          "end": 5313
        }
      ],
      "declare": false,
      "start": 5251,
      "end": 5314
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5328,
            "end": 5331
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5334,
                "end": 5336
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5337,
                "end": 5341
              },
              "optional": false,
              "computed": false,
              "start": 5334,
              "end": 5341
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5342,
                "end": 5356
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5358,
                "end": 5372
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5374,
                "end": 5388
              }
            ],
            "optional": false,
            "start": 5334,
            "end": 5389
          },
          "definite": false,
          "start": 5328,
          "end": 5389
        }
      ],
      "declare": false,
      "start": 5324,
      "end": 5390
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5405,
            "end": 5408
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5411,
                "end": 5413
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5414,
                "end": 5418
              },
              "optional": false,
              "computed": false,
              "start": 5411,
              "end": 5418
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5419,
                "end": 5433
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5435,
                "end": 5448
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5450,
                "end": 5463
              }
            ],
            "optional": false,
            "start": 5411,
            "end": 5464
          },
          "definite": false,
          "start": 5405,
          "end": 5464
        }
      ],
      "declare": false,
      "start": 5401,
      "end": 5465
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4d",
            "optional": false,
            "typeAnnotation": null,
            "start": 5479,
            "end": 5482
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5485,
                    "end": 5487
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5488,
                    "end": 5492
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5485,
                  "end": 5492
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5493,
                    "end": 5502
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5504,
                    "end": 5518
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5520,
                    "end": 5533
                  }
                ],
                "optional": false,
                "start": 5485,
                "end": 5534
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5535,
                "end": 5539
              },
              "optional": false,
              "computed": false,
              "start": 5485,
              "end": 5539
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5540,
                "end": 5549
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5551,
                "end": 5565
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5567,
                "end": 5580
              }
            ],
            "optional": false,
            "start": 5485,
            "end": 5581
          },
          "definite": false,
          "start": 5479,
          "end": 5581
        }
      ],
      "declare": false,
      "start": 5475,
      "end": 5582
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5600,
                  "end": 5608
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5609,
                      "end": 5615
                    }
                  ],
                  "start": 5608,
                  "end": 5616
                },
                "start": 5600,
                "end": 5616
              },
              "start": 5598,
              "end": 5616
            },
            "start": 5596,
            "end": 5616
          },
          "init": null,
          "definite": false,
          "start": 5596,
          "end": 5616
        }
      ],
      "declare": true,
      "start": 5584,
      "end": 5617
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5622,
            "end": 5625
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5628,
                "end": 5630
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5631,
                "end": 5635
              },
              "optional": false,
              "computed": false,
              "start": 5628,
              "end": 5635
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5636,
                "end": 5649
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5651,
                "end": 5664
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5666,
                "end": 5679
              }
            ],
            "optional": false,
            "start": 5628,
            "end": 5680
          },
          "definite": false,
          "start": 5622,
          "end": 5680
        }
      ],
      "declare": false,
      "start": 5618,
      "end": 5681
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5695,
            "end": 5698
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5701,
                    "end": 5703
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5704,
                    "end": 5708
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5701,
                  "end": 5708
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5709,
                    "end": 5718
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5720,
                    "end": 5729
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5731,
                    "end": 5740
                  }
                ],
                "optional": false,
                "start": 5701,
                "end": 5741
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5742,
                "end": 5746
              },
              "optional": false,
              "computed": false,
              "start": 5701,
              "end": 5746
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5747,
                "end": 5756
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5758,
                "end": 5767
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5769,
                "end": 5778
              }
            ],
            "optional": false,
            "start": 5701,
            "end": 5779
          },
          "definite": false,
          "start": 5695,
          "end": 5779
        }
      ],
      "declare": false,
      "start": 5691,
      "end": 5780
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5803,
                  "end": 5810
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5811,
                      "end": 5817
                    }
                  ],
                  "start": 5810,
                  "end": 5818
                },
                "start": 5803,
                "end": 5818
              },
              "start": 5801,
              "end": 5818
            },
            "start": 5799,
            "end": 5818
          },
          "init": null,
          "definite": false,
          "start": 5799,
          "end": 5818
        }
      ],
      "declare": true,
      "start": 5787,
      "end": 5819
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5824,
            "end": 5827
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5830,
                "end": 5832
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5833,
                "end": 5837
              },
              "optional": false,
              "computed": false,
              "start": 5830,
              "end": 5837
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5838,
                "end": 5851
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5853,
                "end": 5866
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5868,
                "end": 5881
              }
            ],
            "optional": false,
            "start": 5830,
            "end": 5882
          },
          "definite": false,
          "start": 5824,
          "end": 5882
        }
      ],
      "declare": false,
      "start": 5820,
      "end": 5883
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5897,
            "end": 5900
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5903,
                "end": 5905
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5906,
                "end": 5910
              },
              "optional": false,
              "computed": false,
              "start": 5903,
              "end": 5910
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5911,
                "end": 5925
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5927,
                "end": 5941
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5943,
                "end": 5957
              }
            ],
            "optional": false,
            "start": 5903,
            "end": 5958
          },
          "definite": false,
          "start": 5897,
          "end": 5958
        }
      ],
      "declare": false,
      "start": 5893,
      "end": 5959
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5973,
            "end": 5976
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5979,
                "end": 5981
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5982,
                "end": 5986
              },
              "optional": false,
              "computed": false,
              "start": 5979,
              "end": 5986
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5987,
                "end": 6001
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 6003,
                "end": 6016
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 6018,
                "end": 6031
              }
            ],
            "optional": false,
            "start": 5979,
            "end": 6032
          },
          "definite": false,
          "start": 5973,
          "end": 6032
        }
      ],
      "declare": false,
      "start": 5969,
      "end": 6033
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5d",
            "optional": false,
            "typeAnnotation": null,
            "start": 6047,
            "end": 6050
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6053,
                    "end": 6055
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6056,
                    "end": 6060
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6053,
                  "end": 6060
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6061,
                    "end": 6069
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6071,
                    "end": 6079
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6081,
                    "end": 6089
                  }
                ],
                "optional": false,
                "start": 6053,
                "end": 6090
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6091,
                "end": 6095
              },
              "optional": false,
              "computed": false,
              "start": 6053,
              "end": 6095
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6096,
                "end": 6105
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6107,
                "end": 6116
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6118,
                "end": 6127
              }
            ],
            "optional": false,
            "start": 6053,
            "end": 6128
          },
          "definite": false,
          "start": 6047,
          "end": 6128
        }
      ],
      "declare": false,
      "start": 6043,
      "end": 6129
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6153,
                  "end": 6161
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6162,
                      "end": 6168
                    }
                  ],
                  "start": 6161,
                  "end": 6169
                },
                "start": 6153,
                "end": 6169
              },
              "start": 6151,
              "end": 6169
            },
            "start": 6149,
            "end": 6169
          },
          "init": null,
          "definite": false,
          "start": 6149,
          "end": 6169
        }
      ],
      "declare": true,
      "start": 6137,
      "end": 6170
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6175,
            "end": 6178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6181,
                "end": 6183
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6184,
                "end": 6188
              },
              "optional": false,
              "computed": false,
              "start": 6181,
              "end": 6188
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6189,
                "end": 6202
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6204,
                "end": 6217
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6219,
                "end": 6232
              }
            ],
            "optional": false,
            "start": 6181,
            "end": 6233
          },
          "definite": false,
          "start": 6175,
          "end": 6233
        }
      ],
      "declare": false,
      "start": 6171,
      "end": 6234
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6248,
            "end": 6251
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6254,
                    "end": 6256
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6257,
                    "end": 6261
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6254,
                  "end": 6261
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6262,
                    "end": 6271
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6273,
                    "end": 6282
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6284,
                    "end": 6293
                  }
                ],
                "optional": false,
                "start": 6254,
                "end": 6294
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6295,
                "end": 6299
              },
              "optional": false,
              "computed": false,
              "start": 6254,
              "end": 6299
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6300,
                "end": 6309
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6311,
                "end": 6320
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6322,
                "end": 6331
              }
            ],
            "optional": false,
            "start": 6254,
            "end": 6332
          },
          "definite": false,
          "start": 6248,
          "end": 6332
        }
      ],
      "declare": false,
      "start": 6244,
      "end": 6333
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6356,
                  "end": 6363
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6364,
                      "end": 6370
                    }
                  ],
                  "start": 6363,
                  "end": 6371
                },
                "start": 6356,
                "end": 6371
              },
              "start": 6354,
              "end": 6371
            },
            "start": 6352,
            "end": 6371
          },
          "init": null,
          "definite": false,
          "start": 6352,
          "end": 6371
        }
      ],
      "declare": true,
      "start": 6340,
      "end": 6372
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6377,
            "end": 6380
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6383,
                "end": 6385
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6386,
                "end": 6390
              },
              "optional": false,
              "computed": false,
              "start": 6383,
              "end": 6390
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6391,
                "end": 6404
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6406,
                "end": 6419
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6421,
                "end": 6434
              }
            ],
            "optional": false,
            "start": 6383,
            "end": 6435
          },
          "definite": false,
          "start": 6377,
          "end": 6435
        }
      ],
      "declare": false,
      "start": 6373,
      "end": 6436
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6450,
            "end": 6453
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6456,
                "end": 6458
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6459,
                "end": 6463
              },
              "optional": false,
              "computed": false,
              "start": 6456,
              "end": 6463
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6464,
                "end": 6478
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6480,
                "end": 6494
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6496,
                "end": 6510
              }
            ],
            "optional": false,
            "start": 6456,
            "end": 6511
          },
          "definite": false,
          "start": 6450,
          "end": 6511
        }
      ],
      "declare": false,
      "start": 6446,
      "end": 6512
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6c",
            "optional": false,
            "typeAnnotation": null,
            "start": 6526,
            "end": 6529
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6532,
                "end": 6534
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6535,
                "end": 6539
              },
              "optional": false,
              "computed": false,
              "start": 6532,
              "end": 6539
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6540,
                "end": 6554
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6556,
                "end": 6569
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6571,
                "end": 6584
              }
            ],
            "optional": false,
            "start": 6532,
            "end": 6585
          },
          "definite": false,
          "start": 6526,
          "end": 6585
        }
      ],
      "declare": false,
      "start": 6522,
      "end": 6586
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6d",
            "optional": false,
            "typeAnnotation": null,
            "start": 6600,
            "end": 6603
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6606,
                    "end": 6608
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6609,
                    "end": 6613
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6606,
                  "end": 6613
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6614,
                    "end": 6622
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6624,
                    "end": 6632
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6634,
                    "end": 6642
                  }
                ],
                "optional": false,
                "start": 6606,
                "end": 6643
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6644,
                "end": 6648
              },
              "optional": false,
              "computed": false,
              "start": 6606,
              "end": 6648
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6649,
                "end": 6658
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6660,
                "end": 6669
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6671,
                "end": 6680
              }
            ],
            "optional": false,
            "start": 6606,
            "end": 6681
          },
          "definite": false,
          "start": 6600,
          "end": 6681
        }
      ],
      "declare": false,
      "start": 6596,
      "end": 6682
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6706,
                  "end": 6714
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6715,
                      "end": 6721
                    }
                  ],
                  "start": 6714,
                  "end": 6722
                },
                "start": 6706,
                "end": 6722
              },
              "start": 6704,
              "end": 6722
            },
            "start": 6702,
            "end": 6722
          },
          "init": null,
          "definite": false,
          "start": 6702,
          "end": 6722
        }
      ],
      "declare": true,
      "start": 6690,
      "end": 6723
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6728,
            "end": 6731
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6734,
                "end": 6736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6737,
                "end": 6741
              },
              "optional": false,
              "computed": false,
              "start": 6734,
              "end": 6741
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6742,
                "end": 6755
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6757,
                "end": 6770
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6772,
                "end": 6785
              }
            ],
            "optional": false,
            "start": 6734,
            "end": 6786
          },
          "definite": false,
          "start": 6728,
          "end": 6786
        }
      ],
      "declare": false,
      "start": 6724,
      "end": 6787
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6801,
            "end": 6804
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6807,
                    "end": 6809
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6810,
                    "end": 6814
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6807,
                  "end": 6814
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6815,
                    "end": 6824
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6826,
                    "end": 6835
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6837,
                    "end": 6846
                  }
                ],
                "optional": false,
                "start": 6807,
                "end": 6847
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6848,
                "end": 6852
              },
              "optional": false,
              "computed": false,
              "start": 6807,
              "end": 6852
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6853,
                "end": 6862
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6864,
                "end": 6873
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6875,
                "end": 6884
              }
            ],
            "optional": false,
            "start": 6807,
            "end": 6885
          },
          "definite": false,
          "start": 6801,
          "end": 6885
        }
      ],
      "declare": false,
      "start": 6797,
      "end": 6886
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6909,
                  "end": 6916
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6917,
                      "end": 6923
                    }
                  ],
                  "start": 6916,
                  "end": 6924
                },
                "start": 6909,
                "end": 6924
              },
              "start": 6907,
              "end": 6924
            },
            "start": 6905,
            "end": 6924
          },
          "init": null,
          "definite": false,
          "start": 6905,
          "end": 6924
        }
      ],
      "declare": true,
      "start": 6893,
      "end": 6925
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6930,
            "end": 6933
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6936,
                "end": 6938
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6939,
                "end": 6943
              },
              "optional": false,
              "computed": false,
              "start": 6936,
              "end": 6943
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6944,
                "end": 6957
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6959,
                "end": 6972
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6974,
                "end": 6987
              }
            ],
            "optional": false,
            "start": 6936,
            "end": 6988
          },
          "definite": false,
          "start": 6930,
          "end": 6988
        }
      ],
      "declare": false,
      "start": 6926,
      "end": 6989
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7003,
            "end": 7006
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 7009,
                "end": 7011
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7012,
                "end": 7016
              },
              "optional": false,
              "computed": false,
              "start": 7009,
              "end": 7016
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7017,
                "end": 7031
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7033,
                "end": 7047
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7049,
                "end": 7063
              }
            ],
            "optional": false,
            "start": 7009,
            "end": 7064
          },
          "definite": false,
          "start": 7003,
          "end": 7064
        }
      ],
      "declare": false,
      "start": 6999,
      "end": 7065
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7079,
            "end": 7082
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 7085,
                "end": 7087
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7088,
                "end": 7092
              },
              "optional": false,
              "computed": false,
              "start": 7085,
              "end": 7092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7093,
                "end": 7107
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 7109,
                "end": 7122
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 7124,
                "end": 7137
              }
            ],
            "optional": false,
            "start": 7085,
            "end": 7138
          },
          "definite": false,
          "start": 7079,
          "end": 7138
        }
      ],
      "declare": false,
      "start": 7075,
      "end": 7139
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7153,
            "end": 7156
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7159,
                    "end": 7161
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7162,
                    "end": 7166
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7159,
                  "end": 7166
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7167,
                    "end": 7175
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7177,
                    "end": 7185
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7187,
                    "end": 7195
                  }
                ],
                "optional": false,
                "start": 7159,
                "end": 7196
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7197,
                "end": 7201
              },
              "optional": false,
              "computed": false,
              "start": 7159,
              "end": 7201
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7202,
                "end": 7210
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7212,
                "end": 7220
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7222,
                "end": 7230
              }
            ],
            "optional": false,
            "start": 7159,
            "end": 7231
          },
          "definite": false,
          "start": 7153,
          "end": 7231
        }
      ],
      "declare": false,
      "start": 7149,
      "end": 7232
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7257,
                  "end": 7265
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7266,
                      "end": 7272
                    }
                  ],
                  "start": 7265,
                  "end": 7273
                },
                "start": 7257,
                "end": 7273
              },
              "start": 7255,
              "end": 7273
            },
            "start": 7253,
            "end": 7273
          },
          "init": null,
          "definite": false,
          "start": 7253,
          "end": 7273
        }
      ],
      "declare": true,
      "start": 7241,
      "end": 7274
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nIPromise",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 7302,
                        "end": 7305
                      },
                      "start": 7300,
                      "end": 7305
                    },
                    "start": 7299,
                    "end": 7305
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7310,
                      "end": 7318
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7319,
                          "end": 7325
                        }
                      ],
                      "start": 7318,
                      "end": 7326
                    },
                    "start": 7310,
                    "end": 7326
                  },
                  "start": 7307,
                  "end": 7326
                },
                "start": 7298,
                "end": 7326
              },
              "start": 7296,
              "end": 7326
            },
            "start": 7287,
            "end": 7326
          },
          "init": null,
          "definite": false,
          "start": 7287,
          "end": 7326
        }
      ],
      "declare": true,
      "start": 7275,
      "end": 7327
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nPromise",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 7354,
                        "end": 7357
                      },
                      "start": 7352,
                      "end": 7357
                    },
                    "start": 7351,
                    "end": 7357
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7362,
                      "end": 7369
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7370,
                          "end": 7376
                        }
                      ],
                      "start": 7369,
                      "end": 7377
                    },
                    "start": 7362,
                    "end": 7377
                  },
                  "start": 7359,
                  "end": 7377
                },
                "start": 7350,
                "end": 7377
              },
              "start": 7348,
              "end": 7377
            },
            "start": 7340,
            "end": 7377
          },
          "init": null,
          "definite": false,
          "start": 7340,
          "end": 7377
        }
      ],
      "declare": true,
      "start": 7328,
      "end": 7378
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7383,
            "end": 7386
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7389,
                "end": 7391
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7392,
                "end": 7396
              },
              "optional": false,
              "computed": false,
              "start": 7389,
              "end": 7396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7397,
                "end": 7410
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7412,
                "end": 7425
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7427,
                "end": 7440
              }
            ],
            "optional": false,
            "start": 7389,
            "end": 7441
          },
          "definite": false,
          "start": 7383,
          "end": 7441
        }
      ],
      "declare": false,
      "start": 7379,
      "end": 7442
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7456,
            "end": 7459
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7462,
                    "end": 7464
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7465,
                    "end": 7469
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7462,
                  "end": 7469
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7470,
                    "end": 7479
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7481,
                    "end": 7490
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7492,
                    "end": 7501
                  }
                ],
                "optional": false,
                "start": 7462,
                "end": 7502
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7503,
                "end": 7507
              },
              "optional": false,
              "computed": false,
              "start": 7462,
              "end": 7507
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7508,
                "end": 7517
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7519,
                "end": 7528
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7530,
                "end": 7539
              }
            ],
            "optional": false,
            "start": 7462,
            "end": 7540
          },
          "definite": false,
          "start": 7456,
          "end": 7540
        }
      ],
      "declare": false,
      "start": 7452,
      "end": 7541
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7556,
                  "end": 7563
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7564,
                      "end": 7570
                    }
                  ],
                  "start": 7563,
                  "end": 7571
                },
                "start": 7556,
                "end": 7571
              },
              "start": 7554,
              "end": 7571
            },
            "start": 7552,
            "end": 7571
          },
          "init": null,
          "definite": false,
          "start": 7552,
          "end": 7571
        }
      ],
      "declare": false,
      "start": 7548,
      "end": 7572
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7577,
            "end": 7580
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7583,
                "end": 7585
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7586,
                "end": 7590
              },
              "optional": false,
              "computed": false,
              "start": 7583,
              "end": 7590
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7591,
                "end": 7604
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7606,
                "end": 7619
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7621,
                "end": 7634
              }
            ],
            "optional": false,
            "start": 7583,
            "end": 7635
          },
          "definite": false,
          "start": 7577,
          "end": 7635
        }
      ],
      "declare": false,
      "start": 7573,
      "end": 7636
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7650,
            "end": 7653
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7656,
                "end": 7658
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7659,
                "end": 7663
              },
              "optional": false,
              "computed": false,
              "start": 7656,
              "end": 7663
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7664,
                "end": 7678
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7680,
                "end": 7694
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7696,
                "end": 7710
              }
            ],
            "optional": false,
            "start": 7656,
            "end": 7711
          },
          "definite": false,
          "start": 7650,
          "end": 7711
        }
      ],
      "declare": false,
      "start": 7646,
      "end": 7712
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7726,
            "end": 7729
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7732,
                "end": 7734
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7735,
                "end": 7739
              },
              "optional": false,
              "computed": false,
              "start": 7732,
              "end": 7739
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7740,
                "end": 7754
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7756,
                "end": 7769
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7771,
                "end": 7784
              }
            ],
            "optional": false,
            "start": 7732,
            "end": 7785
          },
          "definite": false,
          "start": 7726,
          "end": 7785
        }
      ],
      "declare": false,
      "start": 7722,
      "end": 7786
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7800,
            "end": 7803
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7806,
                    "end": 7808
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7809,
                    "end": 7813
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7806,
                  "end": 7813
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7814,
                    "end": 7823
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7825,
                    "end": 7834
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7836,
                    "end": 7845
                  }
                ],
                "optional": false,
                "start": 7806,
                "end": 7846
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7847,
                "end": 7851
              },
              "optional": false,
              "computed": false,
              "start": 7806,
              "end": 7851
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7852,
                "end": 7861
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7863,
                "end": 7872
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7874,
                "end": 7883
              }
            ],
            "optional": false,
            "start": 7806,
            "end": 7884
          },
          "definite": false,
          "start": 7800,
          "end": 7884
        }
      ],
      "declare": false,
      "start": 7796,
      "end": 7885
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7909,
                  "end": 7917
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7918,
                      "end": 7924
                    }
                  ],
                  "start": 7917,
                  "end": 7925
                },
                "start": 7909,
                "end": 7925
              },
              "start": 7907,
              "end": 7925
            },
            "start": 7905,
            "end": 7925
          },
          "init": null,
          "definite": false,
          "start": 7905,
          "end": 7925
        }
      ],
      "declare": true,
      "start": 7893,
      "end": 7926
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7931,
            "end": 7934
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7937,
                "end": 7939
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7940,
                "end": 7944
              },
              "optional": false,
              "computed": false,
              "start": 7937,
              "end": 7944
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7945,
                "end": 7958
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7960,
                "end": 7973
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7975,
                "end": 7988
              }
            ],
            "optional": false,
            "start": 7937,
            "end": 7989
          },
          "definite": false,
          "start": 7931,
          "end": 7989
        }
      ],
      "declare": false,
      "start": 7927,
      "end": 7990
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8004,
            "end": 8007
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8010,
                "end": 8012
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8013,
                "end": 8017
              },
              "optional": false,
              "computed": false,
              "start": 8010,
              "end": 8017
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8018,
                "end": 8027
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8029,
                "end": 8038
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8040,
                "end": 8049
              }
            ],
            "optional": false,
            "start": 8010,
            "end": 8050
          },
          "definite": false,
          "start": 8004,
          "end": 8050
        }
      ],
      "declare": false,
      "start": 8000,
      "end": 8051
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8062,
            "end": 8065
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8068,
                "end": 8070
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8071,
                "end": 8075
              },
              "optional": false,
              "computed": false,
              "start": 8068,
              "end": 8075
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8076,
                "end": 8085
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8087,
                "end": 8096
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8098,
                "end": 8107
              }
            ],
            "optional": false,
            "start": 8068,
            "end": 8108
          },
          "definite": false,
          "start": 8062,
          "end": 8108
        }
      ],
      "declare": false,
      "start": 8058,
      "end": 8109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8120,
            "end": 8123
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8126,
                "end": 8128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8129,
                "end": 8133
              },
              "optional": false,
              "computed": false,
              "start": 8126,
              "end": 8133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8134,
                "end": 8146
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8148,
                "end": 8157
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8159,
                "end": 8168
              }
            ],
            "optional": false,
            "start": 8126,
            "end": 8169
          },
          "definite": false,
          "start": 8120,
          "end": 8169
        }
      ],
      "declare": false,
      "start": 8116,
      "end": 8170
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8181,
            "end": 8184
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8187,
                    "end": 8189
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8190,
                    "end": 8194
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8187,
                  "end": 8194
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8195,
                    "end": 8207
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8209,
                    "end": 8218
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8220,
                    "end": 8229
                  }
                ],
                "optional": false,
                "start": 8187,
                "end": 8230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8231,
                "end": 8235
              },
              "optional": false,
              "computed": false,
              "start": 8187,
              "end": 8235
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8236,
                "end": 8245
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8247,
                "end": 8256
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8258,
                "end": 8267
              }
            ],
            "optional": false,
            "start": 8187,
            "end": 8268
          },
          "definite": false,
          "start": 8181,
          "end": 8268
        }
      ],
      "declare": false,
      "start": 8177,
      "end": 8269
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8292,
                  "end": 8299
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 8300,
                      "end": 8306
                    }
                  ],
                  "start": 8299,
                  "end": 8307
                },
                "start": 8292,
                "end": 8307
              },
              "start": 8290,
              "end": 8307
            },
            "start": 8288,
            "end": 8307
          },
          "init": null,
          "definite": false,
          "start": 8288,
          "end": 8307
        }
      ],
      "declare": true,
      "start": 8276,
      "end": 8308
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8313,
            "end": 8316
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8319,
                "end": 8321
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8322,
                "end": 8326
              },
              "optional": false,
              "computed": false,
              "start": 8319,
              "end": 8326
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8327,
                "end": 8340
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8342,
                "end": 8355
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8357,
                "end": 8370
              }
            ],
            "optional": false,
            "start": 8319,
            "end": 8371
          },
          "definite": false,
          "start": 8313,
          "end": 8371
        }
      ],
      "declare": false,
      "start": 8309,
      "end": 8372
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8386,
            "end": 8389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8392,
                "end": 8394
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8395,
                "end": 8399
              },
              "optional": false,
              "computed": false,
              "start": 8392,
              "end": 8399
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8400,
                "end": 8414
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8416,
                "end": 8430
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8432,
                "end": 8446
              }
            ],
            "optional": false,
            "start": 8392,
            "end": 8447
          },
          "definite": false,
          "start": 8386,
          "end": 8447
        }
      ],
      "declare": false,
      "start": 8382,
      "end": 8448
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8462,
            "end": 8465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8468,
                "end": 8470
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8471,
                "end": 8475
              },
              "optional": false,
              "computed": false,
              "start": 8468,
              "end": 8475
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8476,
                "end": 8490
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8492,
                "end": 8505
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8507,
                "end": 8520
              }
            ],
            "optional": false,
            "start": 8468,
            "end": 8521
          },
          "definite": false,
          "start": 8462,
          "end": 8521
        }
      ],
      "declare": false,
      "start": 8458,
      "end": 8522
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8536,
            "end": 8539
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8542,
                "end": 8544
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8545,
                "end": 8549
              },
              "optional": false,
              "computed": false,
              "start": 8542,
              "end": 8549
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8550,
                "end": 8558
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8560,
                "end": 8568
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8570,
                "end": 8578
              }
            ],
            "optional": false,
            "start": 8542,
            "end": 8579
          },
          "definite": false,
          "start": 8536,
          "end": 8579
        }
      ],
      "declare": false,
      "start": 8532,
      "end": 8580
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8591,
            "end": 8594
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8597,
                "end": 8599
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8600,
                "end": 8604
              },
              "optional": false,
              "computed": false,
              "start": 8597,
              "end": 8604
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8605,
                "end": 8613
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8615,
                "end": 8623
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8625,
                "end": 8633
              }
            ],
            "optional": false,
            "start": 8597,
            "end": 8634
          },
          "definite": false,
          "start": 8591,
          "end": 8634
        }
      ],
      "declare": false,
      "start": 8587,
      "end": 8635
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9f",
            "optional": false,
            "typeAnnotation": null,
            "start": 8646,
            "end": 8649
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8652,
                "end": 8654
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8655,
                "end": 8659
              },
              "optional": false,
              "computed": false,
              "start": 8652,
              "end": 8659
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8660,
                "end": 8672
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8674,
                "end": 8683
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8685,
                "end": 8694
              }
            ],
            "optional": false,
            "start": 8652,
            "end": 8695
          },
          "definite": false,
          "start": 8646,
          "end": 8695
        }
      ],
      "declare": false,
      "start": 8642,
      "end": 8696
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9g",
            "optional": false,
            "typeAnnotation": null,
            "start": 8710,
            "end": 8713
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8716,
                    "end": 8718
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8719,
                    "end": 8723
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8716,
                  "end": 8723
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8724,
                    "end": 8736
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8738,
                    "end": 8747
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8749,
                    "end": 8758
                  }
                ],
                "optional": false,
                "start": 8716,
                "end": 8759
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8760,
                "end": 8764
              },
              "optional": false,
              "computed": false,
              "start": 8716,
              "end": 8764
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8765,
                "end": 8774
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8776,
                "end": 8785
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8787,
                "end": 8796
              }
            ],
            "optional": false,
            "start": 8716,
            "end": 8797
          },
          "definite": false,
          "start": 8710,
          "end": 8797
        }
      ],
      "declare": false,
      "start": 8706,
      "end": 8798
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 8810,
            "end": 8813
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10",
              "optional": false,
              "typeAnnotation": null,
              "start": 8816,
              "end": 8830
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8831,
                    "end": 8832
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8836,
                  "end": 8837
                },
                "id": null,
                "generator": false,
                "start": 8831,
                "end": 8837
              }
            ],
            "optional": false,
            "start": 8816,
            "end": 8838
          },
          "definite": false,
          "start": 8810,
          "end": 8838
        }
      ],
      "declare": false,
      "start": 8806,
      "end": 8839
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8844,
            "end": 8848
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8851,
                "end": 8854
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8855,
                "end": 8859
              },
              "optional": false,
              "computed": false,
              "start": 8851,
              "end": 8859
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8860,
                "end": 8874
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8876,
                "end": 8890
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8892,
                "end": 8906
              }
            ],
            "optional": false,
            "start": 8851,
            "end": 8907
          },
          "definite": false,
          "start": 8844,
          "end": 8907
        }
      ],
      "declare": false,
      "start": 8840,
      "end": 8908
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8919,
            "end": 8923
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8926,
                "end": 8929
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8930,
                "end": 8934
              },
              "optional": false,
              "computed": false,
              "start": 8926,
              "end": 8934
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8935,
                "end": 8944
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8946,
                "end": 8955
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8957,
                "end": 8966
              }
            ],
            "optional": false,
            "start": 8926,
            "end": 8967
          },
          "definite": false,
          "start": 8919,
          "end": 8967
        }
      ],
      "declare": false,
      "start": 8915,
      "end": 8968
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8979,
            "end": 8983
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8986,
                "end": 8989
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8990,
                "end": 8994
              },
              "optional": false,
              "computed": false,
              "start": 8986,
              "end": 8994
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8995,
                "end": 9004
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9006,
                "end": 9015
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9017,
                "end": 9026
              }
            ],
            "optional": false,
            "start": 8986,
            "end": 9027
          },
          "definite": false,
          "start": 8979,
          "end": 9027
        }
      ],
      "declare": false,
      "start": 8975,
      "end": 9028
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 9039,
            "end": 9043
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9046,
                "end": 9049
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9050,
                "end": 9054
              },
              "optional": false,
              "computed": false,
              "start": 9046,
              "end": 9054
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 9055,
                "end": 9067
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9069,
                "end": 9078
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9080,
                "end": 9089
              }
            ],
            "optional": false,
            "start": 9046,
            "end": 9090
          },
          "definite": false,
          "start": 9039,
          "end": 9090
        }
      ],
      "declare": false,
      "start": 9035,
      "end": 9091
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 9102,
            "end": 9106
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9109,
                    "end": 9112
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9113,
                    "end": 9117
                  },
                  "optional": false,
                  "computed": false,
                  "start": 9109,
                  "end": 9117
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9118,
                    "end": 9130
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9132,
                    "end": 9141
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9143,
                    "end": 9152
                  }
                ],
                "optional": false,
                "start": 9109,
                "end": 9153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9154,
                "end": 9158
              },
              "optional": false,
              "computed": false,
              "start": 9109,
              "end": 9158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9159,
                "end": 9168
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9170,
                "end": 9179
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9181,
                "end": 9190
              }
            ],
            "optional": false,
            "start": 9109,
            "end": 9191
          },
          "definite": false,
          "start": 9102,
          "end": 9191
        }
      ],
      "declare": false,
      "start": 9098,
      "end": 9192
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10",
            "optional": false,
            "typeAnnotation": null,
            "start": 9203,
            "end": 9206
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10P",
              "optional": false,
              "typeAnnotation": null,
              "start": 9209,
              "end": 9224
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9225,
                    "end": 9226
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9230,
                  "end": 9231
                },
                "id": null,
                "generator": false,
                "start": 9225,
                "end": 9231
              }
            ],
            "optional": false,
            "start": 9209,
            "end": 9232
          },
          "definite": false,
          "start": 9203,
          "end": 9232
        }
      ],
      "declare": false,
      "start": 9199,
      "end": 9233
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9238,
            "end": 9242
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9245,
                "end": 9248
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9249,
                "end": 9253
              },
              "optional": false,
              "computed": false,
              "start": 9245,
              "end": 9253
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9254,
                "end": 9268
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9270,
                "end": 9284
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9286,
                "end": 9300
              }
            ],
            "optional": false,
            "start": 9245,
            "end": 9301
          },
          "definite": false,
          "start": 9238,
          "end": 9301
        }
      ],
      "declare": false,
      "start": 9234,
      "end": 9302
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9313,
            "end": 9317
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9320,
                "end": 9323
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9324,
                "end": 9328
              },
              "optional": false,
              "computed": false,
              "start": 9320,
              "end": 9328
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9329,
                "end": 9344
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9346,
                "end": 9361
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9363,
                "end": 9378
              }
            ],
            "optional": false,
            "start": 9320,
            "end": 9379
          },
          "definite": false,
          "start": 9313,
          "end": 9379
        }
      ],
      "declare": false,
      "start": 9309,
      "end": 9380
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9391,
            "end": 9395
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9398,
                "end": 9401
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9402,
                "end": 9406
              },
              "optional": false,
              "computed": false,
              "start": 9398,
              "end": 9406
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9407,
                "end": 9422
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9424,
                "end": 9438
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9440,
                "end": 9454
              }
            ],
            "optional": false,
            "start": 9398,
            "end": 9455
          },
          "definite": false,
          "start": 9391,
          "end": 9455
        }
      ],
      "declare": false,
      "start": 9387,
      "end": 9456
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 9467,
            "end": 9471
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9474,
                "end": 9477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9478,
                "end": 9482
              },
              "optional": false,
              "computed": false,
              "start": 9474,
              "end": 9482
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9483,
                "end": 9491
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9493,
                "end": 9501
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9503,
                "end": 9511
              }
            ],
            "optional": false,
            "start": 9474,
            "end": 9512
          },
          "definite": false,
          "start": 9467,
          "end": 9512
        }
      ],
      "declare": false,
      "start": 9463,
      "end": 9513
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 9524,
            "end": 9528
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9531,
                "end": 9534
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9535,
                "end": 9539
              },
              "optional": false,
              "computed": false,
              "start": 9531,
              "end": 9539
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9540,
                "end": 9549
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9551,
                "end": 9559
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9561,
                "end": 9570
              }
            ],
            "optional": false,
            "start": 9531,
            "end": 9571
          },
          "definite": false,
          "start": 9524,
          "end": 9571
        }
      ],
      "declare": false,
      "start": 9520,
      "end": 9572
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10f",
            "optional": false,
            "typeAnnotation": null,
            "start": 9583,
            "end": 9587
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9590,
                "end": 9593
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9594,
                "end": 9598
              },
              "optional": false,
              "computed": false,
              "start": 9590,
              "end": 9598
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 9599,
                "end": 9612
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9614,
                "end": 9623
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9625,
                "end": 9634
              }
            ],
            "optional": false,
            "start": 9590,
            "end": 9635
          },
          "definite": false,
          "start": 9583,
          "end": 9635
        }
      ],
      "declare": false,
      "start": 9579,
      "end": 9636
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10g",
            "optional": false,
            "typeAnnotation": null,
            "start": 9650,
            "end": 9654
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9657,
                    "end": 9660
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9661,
                    "end": 9665
                  },
                  "optional": false,
                  "computed": false,
                  "start": 9657,
                  "end": 9665
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9666,
                    "end": 9679
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9681,
                    "end": 9690
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9692,
                    "end": 9701
                  }
                ],
                "optional": false,
                "start": 9657,
                "end": 9702
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9703,
                "end": 9707
              },
              "optional": false,
              "computed": false,
              "start": 9657,
              "end": 9707
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9708,
                "end": 9716
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9718,
                "end": 9727
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9729,
                "end": 9738
              }
            ],
            "optional": false,
            "start": 9657,
            "end": 9739
          },
          "definite": false,
          "start": 9650,
          "end": 9739
        }
      ],
      "declare": false,
      "start": 9646,
      "end": 9740
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9765,
                  "end": 9773
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9774,
                      "end": 9780
                    }
                  ],
                  "start": 9773,
                  "end": 9781
                },
                "start": 9765,
                "end": 9781
              },
              "start": 9763,
              "end": 9781
            },
            "start": 9760,
            "end": 9781
          },
          "init": null,
          "definite": false,
          "start": 9760,
          "end": 9781
        }
      ],
      "declare": true,
      "start": 9748,
      "end": 9782
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9787,
            "end": 9791
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9794,
                "end": 9797
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9798,
                "end": 9802
              },
              "optional": false,
              "computed": false,
              "start": 9794,
              "end": 9802
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9803,
                "end": 9817
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9819,
                "end": 9833
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9835,
                "end": 9849
              }
            ],
            "optional": false,
            "start": 9794,
            "end": 9850
          },
          "definite": false,
          "start": 9787,
          "end": 9850
        }
      ],
      "declare": false,
      "start": 9783,
      "end": 9851
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9878,
                  "end": 9885
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9886,
                      "end": 9892
                    }
                  ],
                  "start": 9885,
                  "end": 9893
                },
                "start": 9878,
                "end": 9893
              },
              "start": 9876,
              "end": 9893
            },
            "start": 9873,
            "end": 9893
          },
          "init": null,
          "definite": false,
          "start": 9873,
          "end": 9893
        }
      ],
      "declare": true,
      "start": 9861,
      "end": 9894
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9899,
            "end": 9903
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9906,
                "end": 9909
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9910,
                "end": 9914
              },
              "optional": false,
              "computed": false,
              "start": 9906,
              "end": 9914
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9915,
                "end": 9929
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9931,
                "end": 9945
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9947,
                "end": 9961
              }
            ],
            "optional": false,
            "start": 9906,
            "end": 9962
          },
          "definite": false,
          "start": 9899,
          "end": 9962
        }
      ],
      "declare": false,
      "start": 9895,
      "end": 9963
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9974,
            "end": 9978
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9981,
                "end": 9984
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9985,
                "end": 9989
              },
              "optional": false,
              "computed": false,
              "start": 9981,
              "end": 9989
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9990,
                "end": 10005
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10007,
                "end": 10022
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10024,
                "end": 10039
              }
            ],
            "optional": false,
            "start": 9981,
            "end": 10040
          },
          "definite": false,
          "start": 9974,
          "end": 10040
        }
      ],
      "declare": false,
      "start": 9970,
      "end": 10041
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11c",
            "optional": false,
            "typeAnnotation": null,
            "start": 10055,
            "end": 10059
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 10062,
                "end": 10065
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10066,
                "end": 10070
              },
              "optional": false,
              "computed": false,
              "start": 10062,
              "end": 10070
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10071,
                "end": 10086
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 10088,
                "end": 10102
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 10104,
                "end": 10118
              }
            ],
            "optional": false,
            "start": 10062,
            "end": 10119
          },
          "definite": false,
          "start": 10055,
          "end": 10119
        }
      ],
      "declare": false,
      "start": 10051,
      "end": 10120
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 10135,
            "end": 10138
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 10141,
              "end": 10155
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10156,
                    "end": 10157
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10161,
                  "end": 10162
                },
                "id": null,
                "generator": false,
                "start": 10156,
                "end": 10162
              }
            ],
            "optional": false,
            "start": 10141,
            "end": 10163
          },
          "definite": false,
          "start": 10135,
          "end": 10163
        }
      ],
      "declare": false,
      "start": 10131,
      "end": 10164
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 10169,
            "end": 10173
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10176,
                "end": 10179
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10180,
                "end": 10184
              },
              "optional": false,
              "computed": false,
              "start": 10176,
              "end": 10184
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10185,
                "end": 10199
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10201,
                "end": 10215
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10217,
                "end": 10231
              }
            ],
            "optional": false,
            "start": 10176,
            "end": 10232
          },
          "definite": false,
          "start": 10169,
          "end": 10232
        }
      ],
      "declare": false,
      "start": 10165,
      "end": 10233
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12",
            "optional": false,
            "typeAnnotation": null,
            "start": 10244,
            "end": 10247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 10250,
              "end": 10264
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10265,
                    "end": 10266
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10270,
                  "end": 10271
                },
                "id": null,
                "generator": false,
                "start": 10265,
                "end": 10271
              }
            ],
            "optional": false,
            "start": 10250,
            "end": 10272
          },
          "definite": false,
          "start": 10244,
          "end": 10272
        }
      ],
      "declare": false,
      "start": 10240,
      "end": 10273
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 10278,
            "end": 10282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10285,
                "end": 10288
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10289,
                "end": 10293
              },
              "optional": false,
              "computed": false,
              "start": 10285,
              "end": 10293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10294,
                "end": 10308
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10310,
                "end": 10324
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10326,
                "end": 10340
              }
            ],
            "optional": false,
            "start": 10285,
            "end": 10341
          },
          "definite": false,
          "start": 10278,
          "end": 10341
        }
      ],
      "declare": false,
      "start": 10274,
      "end": 10342
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12b",
            "optional": false,
            "typeAnnotation": null,
            "start": 10353,
            "end": 10357
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10360,
                "end": 10363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10364,
                "end": 10368
              },
              "optional": false,
              "computed": false,
              "start": 10360,
              "end": 10368
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10369,
                "end": 10384
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10386,
                "end": 10401
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10403,
                "end": 10418
              }
            ],
            "optional": false,
            "start": 10360,
            "end": 10419
          },
          "definite": false,
          "start": 10353,
          "end": 10419
        }
      ],
      "declare": false,
      "start": 10349,
      "end": 10420
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12c",
            "optional": false,
            "typeAnnotation": null,
            "start": 10431,
            "end": 10435
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10438,
                "end": 10441
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10442,
                "end": 10446
              },
              "optional": false,
              "computed": false,
              "start": 10438,
              "end": 10446
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10447,
                "end": 10462
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10464,
                "end": 10478
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10480,
                "end": 10494
              }
            ],
            "optional": false,
            "start": 10438,
            "end": 10495
          },
          "definite": false,
          "start": 10431,
          "end": 10495
        }
      ],
      "declare": false,
      "start": 10427,
      "end": 10496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 10502
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
    "value": "Promise",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 27,
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
    "value": "U",
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
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 119,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 134,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 144,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 189,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 225,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 231,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 292,
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
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 340,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 343,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 355,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 382,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 392,
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
    "value": "U",
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
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 413,
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
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 416,
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
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 437,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 464,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 470,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 482,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 497,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 528,
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
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 531,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 569,
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
    "value": "any",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 581,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 589,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 601,
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
    "value": "any",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 616,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 635,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 671,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 682,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 692,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 708,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 717,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 729,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 732,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 745,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 757,
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
    "value": "any",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 772,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 775,
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
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 782,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 799,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 804,
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
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 807,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 828,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 831,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 844,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 865,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 871,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 883,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 898,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 908,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 933,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 944,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 954,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 969,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 981,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 984,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1009,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1027,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1034,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1070,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Identifier",
    "value": "error",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1095,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1107,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1125,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1135,
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
    "value": "=>",
    "start": 1140,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1143,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1150,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1177,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1188,
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
    "value": "T",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1215,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1227,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1235,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1247,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1262,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1272,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1281,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1289,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1298,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1314,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1323,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1332,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 1349,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1366,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1374,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1383,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1391,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 1400,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1417,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1450,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 1459,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1477,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1490,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1501,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1509,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 1518,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1544,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1553,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1562,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1570,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 1579,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1597,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1606,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1614,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1623,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1631,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 1640,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1657,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1669,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1678,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1687,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1696,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1704,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 1713,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1731,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1743,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1752,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1760,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1769,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1777,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 1786,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1803,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1811,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1819,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1827,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1830,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1839,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1857,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1865,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 1874,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1892,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1900,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1916,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1919,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1928,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1936,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1945,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1953,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 1962,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1979,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1987,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2001,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2008,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2017,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2026,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2034,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 2043,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2061,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2069,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2083,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2090,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2107,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2115,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 2124,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2138,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2152,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2159,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2168,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2177,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2185,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 2194,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2209,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2223,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2230,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2238,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2247,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2255,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 2264,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2287,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2298,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2305,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2318,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2326,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 2335,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2359,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2370,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2377,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2389,
    "end": 2396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2397,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 2406,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2429,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2443,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2450,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2463,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2471,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 2480,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2504,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2518,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2525,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2537,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2545,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 2554,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2572,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2586,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2593,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2606,
    "end": 2613
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2614,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 2623,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2642,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2656,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2663,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2676,
    "end": 2683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2684,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2693,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2711,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2720,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2729,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2738,
    "end": 2745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2746,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2755,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2773,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2782,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2791,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2800,
    "end": 2807
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2808,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2817,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2836,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2845,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2853,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2862,
    "end": 2869
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2870,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2879,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2898,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2907,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2915,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2925,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2933,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2942,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2967,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2980,
    "end": 2987
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2988,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2997,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3028,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3041,
    "end": 3048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3049,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 3058,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3084,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3097,
    "end": 3104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3105,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 3114,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3146,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3159,
    "end": 3166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3167,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3171,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3175,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3184,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3193,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 3197,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3203,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3206,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3211,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3225,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3239,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3254,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 3258,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3264,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3267,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3272,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3286,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3300,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3314,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3319,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3333,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3347,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3362,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "r1c",
    "start": 3366,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3372,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3375,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3380,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3395,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3410,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3426,
    "end": 3433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3434,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3438,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3442,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3450,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3459,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "s1a",
    "start": 3463,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3469,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3472,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3477,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3491,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3505,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3520,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "s1b",
    "start": 3524,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3530,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3533,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3538,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3553,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3568,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3584,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "s1c",
    "start": 3588,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3594,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3597,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3602,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3617,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3631,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3646,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "s1d",
    "start": 3650,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3656,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3659,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3664,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3679,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3693,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3707,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3712,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3726,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3740,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3756,
    "end": 3763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3764,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3768,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3772,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3786,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3798,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3802,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3808,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3811,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3816,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3831,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3846,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3862,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3866,
    "end": 3869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3872,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3875,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3880,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3895,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3910,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3925,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3930,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3945,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3960,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3976,
    "end": 3983
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3984,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3988,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3992,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4005,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4017,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "s2a",
    "start": 4021,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4027,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4030,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4035,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4050,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4065,
    "end": 4078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4081,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "s2b",
    "start": 4085,
    "end": 4088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4091,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4094,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4099,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4115,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4131,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4148,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "s2c",
    "start": 4152,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4158,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4161,
    "end": 4165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4166,
    "end": 4180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4182,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4197,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4213,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "s2d",
    "start": 4217,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4223,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4225,
    "end": 4226
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4226,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4231,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4247,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4262,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4277,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4282,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4297,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4312,
    "end": 4325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4329,
    "end": 4336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4337,
    "end": 4340
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4341,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4345,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4354,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4363,
    "end": 4366
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 4367,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4373,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4376,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4381,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4396,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4411,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4427,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 4431,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4437,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4440,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4445,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4460,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4475,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4490,
    "end": 4494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4495,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4508,
    "end": 4509
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4510,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4525,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4541,
    "end": 4548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4549,
    "end": 4552
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4553,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4557,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4565,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4574,
    "end": 4577
  },
  {
    "type": "Identifier",
    "value": "s3a",
    "start": 4578,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4582,
    "end": 4583
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4584,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4587,
    "end": 4591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4592,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4607,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4622,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4638,
    "end": 4641
  },
  {
    "type": "Identifier",
    "value": "s3b",
    "start": 4642,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4648,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4651,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4656,
    "end": 4670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4670,
    "end": 4671
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4672,
    "end": 4686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4688,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4705,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "s3c",
    "start": 4709,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4715,
    "end": 4717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4718,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4723,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4739,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4754,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4770,
    "end": 4773
  },
  {
    "type": "Identifier",
    "value": "s3d",
    "start": 4774,
    "end": 4777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4780,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4782,
    "end": 4783
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4783,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4788,
    "end": 4802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4802,
    "end": 4803
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4804,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4819,
    "end": 4832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4834,
    "end": 4838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4838,
    "end": 4839
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4839,
    "end": 4852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4852,
    "end": 4853
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4854,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4869,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4895,
    "end": 4902
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4903,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4907,
    "end": 4909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4909,
    "end": 4910
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4911,
    "end": 4919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4919,
    "end": 4920
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4920,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4929,
    "end": 4936
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4937,
    "end": 4940
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4941,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4952,
    "end": 4953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4953,
    "end": 4954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4954,
    "end": 4955
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4956,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4959,
    "end": 4960
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4961,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4964,
    "end": 4972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4972,
    "end": 4973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4973,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4980,
    "end": 4981
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4982,
    "end": 4989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4990,
    "end": 4993
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 4994,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5002,
    "end": 5003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5004,
    "end": 5005
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5006,
    "end": 5007
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5008,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5013,
    "end": 5015
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5016,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5024,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5033,
    "end": 5036
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 5037,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5041,
    "end": 5042
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 5043,
    "end": 5045
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5045,
    "end": 5046
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5046,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5051,
    "end": 5064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5064,
    "end": 5065
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5066,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5081,
    "end": 5094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5094,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5106,
    "end": 5109
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 5110,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 5116,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5119,
    "end": 5123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5123,
    "end": 5124
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5124,
    "end": 5133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5133,
    "end": 5134
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5135,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5148,
    "end": 5149
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5150,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5165,
    "end": 5169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5169,
    "end": 5170
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5170,
    "end": 5179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5181,
    "end": 5194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5194,
    "end": 5195
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5196,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5209,
    "end": 5210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5210,
    "end": 5211
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5218,
    "end": 5225
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5226,
    "end": 5229
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5230,
    "end": 5232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5232,
    "end": 5233
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5234,
    "end": 5241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5241,
    "end": 5242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5242,
    "end": 5248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5249,
    "end": 5250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5251,
    "end": 5254
  },
  {
    "type": "Identifier",
    "value": "s4a",
    "start": 5255,
    "end": 5258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5259,
    "end": 5260
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5261,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5264,
    "end": 5268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5268,
    "end": 5269
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5269,
    "end": 5282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5284,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5297,
    "end": 5298
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5299,
    "end": 5312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5313,
    "end": 5314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5324,
    "end": 5327
  },
  {
    "type": "Identifier",
    "value": "s4b",
    "start": 5328,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5332,
    "end": 5333
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5334,
    "end": 5336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5336,
    "end": 5337
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5337,
    "end": 5341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5341,
    "end": 5342
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5342,
    "end": 5356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5358,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5374,
    "end": 5388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5389,
    "end": 5390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5401,
    "end": 5404
  },
  {
    "type": "Identifier",
    "value": "s4c",
    "start": 5405,
    "end": 5408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5411,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5413,
    "end": 5414
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5414,
    "end": 5418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5418,
    "end": 5419
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5419,
    "end": 5433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5435,
    "end": 5448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5450,
    "end": 5463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5463,
    "end": 5464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5464,
    "end": 5465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5475,
    "end": 5478
  },
  {
    "type": "Identifier",
    "value": "s4d",
    "start": 5479,
    "end": 5482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5483,
    "end": 5484
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5485,
    "end": 5487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5487,
    "end": 5488
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5488,
    "end": 5492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5492,
    "end": 5493
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5493,
    "end": 5502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5502,
    "end": 5503
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5504,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5518,
    "end": 5519
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5520,
    "end": 5533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5533,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5534,
    "end": 5535
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5535,
    "end": 5539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5539,
    "end": 5540
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5540,
    "end": 5549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5549,
    "end": 5550
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5551,
    "end": 5565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5565,
    "end": 5566
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5567,
    "end": 5580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5580,
    "end": 5581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5581,
    "end": 5582
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5584,
    "end": 5591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5592,
    "end": 5595
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5596,
    "end": 5598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5598,
    "end": 5599
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5600,
    "end": 5608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5608,
    "end": 5609
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5609,
    "end": 5615
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5615,
    "end": 5616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5616,
    "end": 5617
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5618,
    "end": 5621
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 5622,
    "end": 5625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5626,
    "end": 5627
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5628,
    "end": 5630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5631,
    "end": 5635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5635,
    "end": 5636
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5636,
    "end": 5649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5649,
    "end": 5650
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5651,
    "end": 5664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5666,
    "end": 5679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5679,
    "end": 5680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5691,
    "end": 5694
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 5695,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5701,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5704,
    "end": 5708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5708,
    "end": 5709
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5709,
    "end": 5718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5718,
    "end": 5719
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5720,
    "end": 5729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5729,
    "end": 5730
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5731,
    "end": 5740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5740,
    "end": 5741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5741,
    "end": 5742
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5742,
    "end": 5746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5746,
    "end": 5747
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5747,
    "end": 5756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5756,
    "end": 5757
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5758,
    "end": 5767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5767,
    "end": 5768
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5769,
    "end": 5778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5778,
    "end": 5779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5787,
    "end": 5794
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5795,
    "end": 5798
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5799,
    "end": 5801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5801,
    "end": 5802
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5803,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5810,
    "end": 5811
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5811,
    "end": 5817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5817,
    "end": 5818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5820,
    "end": 5823
  },
  {
    "type": "Identifier",
    "value": "s5a",
    "start": 5824,
    "end": 5827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5828,
    "end": 5829
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5830,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5833,
    "end": 5837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5837,
    "end": 5838
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5838,
    "end": 5851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5851,
    "end": 5852
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5853,
    "end": 5866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5866,
    "end": 5867
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5868,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5893,
    "end": 5896
  },
  {
    "type": "Identifier",
    "value": "s5b",
    "start": 5897,
    "end": 5900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5901,
    "end": 5902
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5903,
    "end": 5905
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5905,
    "end": 5906
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5906,
    "end": 5910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5910,
    "end": 5911
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5911,
    "end": 5925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5927,
    "end": 5941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5941,
    "end": 5942
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5943,
    "end": 5957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5957,
    "end": 5958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5958,
    "end": 5959
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5969,
    "end": 5972
  },
  {
    "type": "Identifier",
    "value": "s5c",
    "start": 5973,
    "end": 5976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5977,
    "end": 5978
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5979,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5981,
    "end": 5982
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5982,
    "end": 5986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5986,
    "end": 5987
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5987,
    "end": 6001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6001,
    "end": 6002
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 6003,
    "end": 6016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6016,
    "end": 6017
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 6018,
    "end": 6031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6031,
    "end": 6032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6032,
    "end": 6033
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6043,
    "end": 6046
  },
  {
    "type": "Identifier",
    "value": "s5d",
    "start": 6047,
    "end": 6050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6051,
    "end": 6052
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 6053,
    "end": 6055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6055,
    "end": 6056
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6056,
    "end": 6060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6060,
    "end": 6061
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6061,
    "end": 6069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6071,
    "end": 6079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6081,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6091,
    "end": 6095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6095,
    "end": 6096
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6096,
    "end": 6105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6105,
    "end": 6106
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6107,
    "end": 6116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6116,
    "end": 6117
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6118,
    "end": 6127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6127,
    "end": 6128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6137,
    "end": 6144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6145,
    "end": 6148
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 6149,
    "end": 6151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6151,
    "end": 6152
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6153,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6162,
    "end": 6168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6168,
    "end": 6169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6169,
    "end": 6170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6171,
    "end": 6174
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 6175,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6179,
    "end": 6180
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 6181,
    "end": 6183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6183,
    "end": 6184
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6184,
    "end": 6188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6188,
    "end": 6189
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6189,
    "end": 6202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6202,
    "end": 6203
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6204,
    "end": 6217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6217,
    "end": 6218
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6219,
    "end": 6232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6232,
    "end": 6233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6233,
    "end": 6234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6244,
    "end": 6247
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 6248,
    "end": 6251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6252,
    "end": 6253
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 6254,
    "end": 6256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6256,
    "end": 6257
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6257,
    "end": 6261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6261,
    "end": 6262
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6262,
    "end": 6271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6271,
    "end": 6272
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6273,
    "end": 6282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6282,
    "end": 6283
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6284,
    "end": 6293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6293,
    "end": 6294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6294,
    "end": 6295
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6295,
    "end": 6299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6299,
    "end": 6300
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6300,
    "end": 6309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6309,
    "end": 6310
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6311,
    "end": 6320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6320,
    "end": 6321
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6322,
    "end": 6331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6331,
    "end": 6332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6332,
    "end": 6333
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6340,
    "end": 6347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6348,
    "end": 6351
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6352,
    "end": 6354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6354,
    "end": 6355
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6356,
    "end": 6363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6363,
    "end": 6364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6364,
    "end": 6370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6370,
    "end": 6371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6371,
    "end": 6372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6373,
    "end": 6376
  },
  {
    "type": "Identifier",
    "value": "s6a",
    "start": 6377,
    "end": 6380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6381,
    "end": 6382
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6383,
    "end": 6385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6385,
    "end": 6386
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6386,
    "end": 6390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6390,
    "end": 6391
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6391,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6404,
    "end": 6405
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6406,
    "end": 6419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6419,
    "end": 6420
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6421,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6435,
    "end": 6436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6446,
    "end": 6449
  },
  {
    "type": "Identifier",
    "value": "s6b",
    "start": 6450,
    "end": 6453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6454,
    "end": 6455
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6456,
    "end": 6458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6458,
    "end": 6459
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6459,
    "end": 6463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6463,
    "end": 6464
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6464,
    "end": 6478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6478,
    "end": 6479
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6480,
    "end": 6494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6494,
    "end": 6495
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6496,
    "end": 6510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6510,
    "end": 6511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6511,
    "end": 6512
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6522,
    "end": 6525
  },
  {
    "type": "Identifier",
    "value": "s6c",
    "start": 6526,
    "end": 6529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6530,
    "end": 6531
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6532,
    "end": 6534
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6534,
    "end": 6535
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6535,
    "end": 6539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6539,
    "end": 6540
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6540,
    "end": 6554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6554,
    "end": 6555
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6556,
    "end": 6569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6569,
    "end": 6570
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6571,
    "end": 6584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6584,
    "end": 6585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6585,
    "end": 6586
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6596,
    "end": 6599
  },
  {
    "type": "Identifier",
    "value": "s6d",
    "start": 6600,
    "end": 6603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6604,
    "end": 6605
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6606,
    "end": 6608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6608,
    "end": 6609
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6609,
    "end": 6613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6613,
    "end": 6614
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6614,
    "end": 6622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6622,
    "end": 6623
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6624,
    "end": 6632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6632,
    "end": 6633
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6634,
    "end": 6642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6642,
    "end": 6643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6643,
    "end": 6644
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6644,
    "end": 6648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6648,
    "end": 6649
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6649,
    "end": 6658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6658,
    "end": 6659
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6660,
    "end": 6669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6669,
    "end": 6670
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6671,
    "end": 6680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6680,
    "end": 6681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6681,
    "end": 6682
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6690,
    "end": 6697
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6698,
    "end": 6701
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6702,
    "end": 6704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6706,
    "end": 6714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6714,
    "end": 6715
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6715,
    "end": 6721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6721,
    "end": 6722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6722,
    "end": 6723
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6724,
    "end": 6727
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 6728,
    "end": 6731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6732,
    "end": 6733
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6734,
    "end": 6736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6736,
    "end": 6737
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6737,
    "end": 6741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6741,
    "end": 6742
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6742,
    "end": 6755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6755,
    "end": 6756
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6757,
    "end": 6770
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6770,
    "end": 6771
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6772,
    "end": 6785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6785,
    "end": 6786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6786,
    "end": 6787
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6797,
    "end": 6800
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 6801,
    "end": 6804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6805,
    "end": 6806
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6807,
    "end": 6809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6809,
    "end": 6810
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6810,
    "end": 6814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6814,
    "end": 6815
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6815,
    "end": 6824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6824,
    "end": 6825
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6826,
    "end": 6835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6835,
    "end": 6836
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6837,
    "end": 6846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6846,
    "end": 6847
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6847,
    "end": 6848
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6848,
    "end": 6852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6852,
    "end": 6853
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6853,
    "end": 6862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6862,
    "end": 6863
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6864,
    "end": 6873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6873,
    "end": 6874
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6875,
    "end": 6884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6884,
    "end": 6885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6885,
    "end": 6886
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6893,
    "end": 6900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6901,
    "end": 6904
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 6905,
    "end": 6907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6907,
    "end": 6908
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6909,
    "end": 6916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6916,
    "end": 6917
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6917,
    "end": 6923
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6923,
    "end": 6924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6924,
    "end": 6925
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6926,
    "end": 6929
  },
  {
    "type": "Identifier",
    "value": "s7a",
    "start": 6930,
    "end": 6933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6934,
    "end": 6935
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6936,
    "end": 6938
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6938,
    "end": 6939
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6939,
    "end": 6943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6943,
    "end": 6944
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6944,
    "end": 6957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6957,
    "end": 6958
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6959,
    "end": 6972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6972,
    "end": 6973
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6974,
    "end": 6987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6987,
    "end": 6988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6988,
    "end": 6989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6999,
    "end": 7002
  },
  {
    "type": "Identifier",
    "value": "s7b",
    "start": 7003,
    "end": 7006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7007,
    "end": 7008
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 7009,
    "end": 7011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7011,
    "end": 7012
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7012,
    "end": 7016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7016,
    "end": 7017
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 7017,
    "end": 7031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7031,
    "end": 7032
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 7033,
    "end": 7047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7047,
    "end": 7048
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 7049,
    "end": 7063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7063,
    "end": 7064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7064,
    "end": 7065
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7075,
    "end": 7078
  },
  {
    "type": "Identifier",
    "value": "s7c",
    "start": 7079,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7083,
    "end": 7084
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 7085,
    "end": 7087
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7087,
    "end": 7088
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7088,
    "end": 7092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7092,
    "end": 7093
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 7093,
    "end": 7107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7107,
    "end": 7108
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 7109,
    "end": 7122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 7124,
    "end": 7137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7137,
    "end": 7138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7138,
    "end": 7139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7149,
    "end": 7152
  },
  {
    "type": "Identifier",
    "value": "s7d",
    "start": 7153,
    "end": 7156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7157,
    "end": 7158
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 7159,
    "end": 7161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7161,
    "end": 7162
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7162,
    "end": 7166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7166,
    "end": 7167
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7167,
    "end": 7175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7175,
    "end": 7176
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7177,
    "end": 7185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7185,
    "end": 7186
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7187,
    "end": 7195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7195,
    "end": 7196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7196,
    "end": 7197
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7197,
    "end": 7201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7201,
    "end": 7202
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7202,
    "end": 7210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7210,
    "end": 7211
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7212,
    "end": 7220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7220,
    "end": 7221
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7222,
    "end": 7230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7230,
    "end": 7231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7231,
    "end": 7232
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7241,
    "end": 7248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7249,
    "end": 7252
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7253,
    "end": 7255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7255,
    "end": 7256
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7257,
    "end": 7265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7265,
    "end": 7266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7266,
    "end": 7272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7272,
    "end": 7273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7273,
    "end": 7274
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7275,
    "end": 7282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7283,
    "end": 7286
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7287,
    "end": 7296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7296,
    "end": 7297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7298,
    "end": 7299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7299,
    "end": 7300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7300,
    "end": 7301
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7302,
    "end": 7305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7305,
    "end": 7306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7307,
    "end": 7309
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7310,
    "end": 7318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7318,
    "end": 7319
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7319,
    "end": 7325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7325,
    "end": 7326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7326,
    "end": 7327
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7328,
    "end": 7335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7336,
    "end": 7339
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 7340,
    "end": 7348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7348,
    "end": 7349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7350,
    "end": 7351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7351,
    "end": 7352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7352,
    "end": 7353
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7354,
    "end": 7357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7357,
    "end": 7358
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7359,
    "end": 7361
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7362,
    "end": 7369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7369,
    "end": 7370
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7370,
    "end": 7376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7376,
    "end": 7377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7377,
    "end": 7378
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7379,
    "end": 7382
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 7383,
    "end": 7386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7387,
    "end": 7388
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7389,
    "end": 7391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7391,
    "end": 7392
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7392,
    "end": 7396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7396,
    "end": 7397
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7397,
    "end": 7410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7410,
    "end": 7411
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7412,
    "end": 7425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7425,
    "end": 7426
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7427,
    "end": 7440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7440,
    "end": 7441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7441,
    "end": 7442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7452,
    "end": 7455
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 7456,
    "end": 7459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7460,
    "end": 7461
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7462,
    "end": 7464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7464,
    "end": 7465
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7465,
    "end": 7469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7469,
    "end": 7470
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7470,
    "end": 7479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7479,
    "end": 7480
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7481,
    "end": 7490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7490,
    "end": 7491
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7492,
    "end": 7501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7501,
    "end": 7502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7502,
    "end": 7503
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7503,
    "end": 7507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7507,
    "end": 7508
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7508,
    "end": 7517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7517,
    "end": 7518
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7519,
    "end": 7528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7528,
    "end": 7529
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7530,
    "end": 7539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7539,
    "end": 7540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7540,
    "end": 7541
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7548,
    "end": 7551
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7552,
    "end": 7554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7554,
    "end": 7555
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7556,
    "end": 7563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7563,
    "end": 7564
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7564,
    "end": 7570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7570,
    "end": 7571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7571,
    "end": 7572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7573,
    "end": 7576
  },
  {
    "type": "Identifier",
    "value": "s8a",
    "start": 7577,
    "end": 7580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7581,
    "end": 7582
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7583,
    "end": 7585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7585,
    "end": 7586
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7586,
    "end": 7590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7590,
    "end": 7591
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7591,
    "end": 7604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7604,
    "end": 7605
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7606,
    "end": 7619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7619,
    "end": 7620
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7621,
    "end": 7634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7634,
    "end": 7635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7635,
    "end": 7636
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7646,
    "end": 7649
  },
  {
    "type": "Identifier",
    "value": "s8b",
    "start": 7650,
    "end": 7653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7654,
    "end": 7655
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7656,
    "end": 7658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7658,
    "end": 7659
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7659,
    "end": 7663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7663,
    "end": 7664
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7664,
    "end": 7678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7678,
    "end": 7679
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7680,
    "end": 7694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7694,
    "end": 7695
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7696,
    "end": 7710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7710,
    "end": 7711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7711,
    "end": 7712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7722,
    "end": 7725
  },
  {
    "type": "Identifier",
    "value": "s8c",
    "start": 7726,
    "end": 7729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7730,
    "end": 7731
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7732,
    "end": 7734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7734,
    "end": 7735
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7735,
    "end": 7739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7739,
    "end": 7740
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7740,
    "end": 7754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7756,
    "end": 7769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7769,
    "end": 7770
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7771,
    "end": 7784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7784,
    "end": 7785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7785,
    "end": 7786
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7796,
    "end": 7799
  },
  {
    "type": "Identifier",
    "value": "s8d",
    "start": 7800,
    "end": 7803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7804,
    "end": 7805
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7806,
    "end": 7808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7808,
    "end": 7809
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7809,
    "end": 7813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7813,
    "end": 7814
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7814,
    "end": 7823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7823,
    "end": 7824
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7825,
    "end": 7834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7834,
    "end": 7835
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7836,
    "end": 7845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7845,
    "end": 7846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7846,
    "end": 7847
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7847,
    "end": 7851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7851,
    "end": 7852
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7852,
    "end": 7861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7861,
    "end": 7862
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7863,
    "end": 7872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7872,
    "end": 7873
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7874,
    "end": 7883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7883,
    "end": 7884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7884,
    "end": 7885
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7893,
    "end": 7900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7901,
    "end": 7904
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7905,
    "end": 7907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7907,
    "end": 7908
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7909,
    "end": 7917
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7917,
    "end": 7918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7918,
    "end": 7924
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7924,
    "end": 7925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7925,
    "end": 7926
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7927,
    "end": 7930
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 7931,
    "end": 7934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7935,
    "end": 7936
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7937,
    "end": 7939
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7939,
    "end": 7940
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7940,
    "end": 7944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7944,
    "end": 7945
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7945,
    "end": 7958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7958,
    "end": 7959
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7960,
    "end": 7973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7973,
    "end": 7974
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7975,
    "end": 7988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7988,
    "end": 7989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7989,
    "end": 7990
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8000,
    "end": 8003
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 8004,
    "end": 8007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8008,
    "end": 8009
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 8010,
    "end": 8012
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8012,
    "end": 8013
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8013,
    "end": 8017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8017,
    "end": 8018
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8018,
    "end": 8027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8027,
    "end": 8028
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8029,
    "end": 8038
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8038,
    "end": 8039
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8040,
    "end": 8049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8049,
    "end": 8050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8050,
    "end": 8051
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8058,
    "end": 8061
  },
  {
    "type": "Identifier",
    "value": "r9c",
    "start": 8062,
    "end": 8065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8066,
    "end": 8067
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 8068,
    "end": 8070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8070,
    "end": 8071
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8071,
    "end": 8075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8075,
    "end": 8076
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8076,
    "end": 8085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8085,
    "end": 8086
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8087,
    "end": 8096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8096,
    "end": 8097
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8098,
    "end": 8107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8107,
    "end": 8108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8108,
    "end": 8109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8116,
    "end": 8119
  },
  {
    "type": "Identifier",
    "value": "r9d",
    "start": 8120,
    "end": 8123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8124,
    "end": 8125
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 8126,
    "end": 8128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8128,
    "end": 8129
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8129,
    "end": 8133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8133,
    "end": 8134
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8134,
    "end": 8146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8146,
    "end": 8147
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8148,
    "end": 8157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8157,
    "end": 8158
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8159,
    "end": 8168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8168,
    "end": 8169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8169,
    "end": 8170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8177,
    "end": 8180
  },
  {
    "type": "Identifier",
    "value": "r9e",
    "start": 8181,
    "end": 8184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8185,
    "end": 8186
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 8187,
    "end": 8189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8189,
    "end": 8190
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8190,
    "end": 8194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8194,
    "end": 8195
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8195,
    "end": 8207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8207,
    "end": 8208
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8209,
    "end": 8218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8218,
    "end": 8219
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8220,
    "end": 8229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8229,
    "end": 8230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8230,
    "end": 8231
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8231,
    "end": 8235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8235,
    "end": 8236
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8236,
    "end": 8245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8245,
    "end": 8246
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8247,
    "end": 8256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8256,
    "end": 8257
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8258,
    "end": 8267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8267,
    "end": 8268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8268,
    "end": 8269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 8276,
    "end": 8283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8284,
    "end": 8287
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8288,
    "end": 8290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8290,
    "end": 8291
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8292,
    "end": 8299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8299,
    "end": 8300
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8300,
    "end": 8306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8306,
    "end": 8307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8307,
    "end": 8308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8309,
    "end": 8312
  },
  {
    "type": "Identifier",
    "value": "s9a",
    "start": 8313,
    "end": 8316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8317,
    "end": 8318
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8319,
    "end": 8321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8321,
    "end": 8322
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8322,
    "end": 8326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8326,
    "end": 8327
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8327,
    "end": 8340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8340,
    "end": 8341
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8342,
    "end": 8355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8355,
    "end": 8356
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8357,
    "end": 8370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8370,
    "end": 8371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8371,
    "end": 8372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8382,
    "end": 8385
  },
  {
    "type": "Identifier",
    "value": "s9b",
    "start": 8386,
    "end": 8389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8390,
    "end": 8391
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8392,
    "end": 8394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8394,
    "end": 8395
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8395,
    "end": 8399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8399,
    "end": 8400
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8400,
    "end": 8414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8414,
    "end": 8415
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8416,
    "end": 8430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8430,
    "end": 8431
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8432,
    "end": 8446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8446,
    "end": 8447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8447,
    "end": 8448
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8458,
    "end": 8461
  },
  {
    "type": "Identifier",
    "value": "s9c",
    "start": 8462,
    "end": 8465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8466,
    "end": 8467
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8468,
    "end": 8470
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8470,
    "end": 8471
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8471,
    "end": 8475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8475,
    "end": 8476
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8476,
    "end": 8490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8490,
    "end": 8491
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8492,
    "end": 8505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8505,
    "end": 8506
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8507,
    "end": 8520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8520,
    "end": 8521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8521,
    "end": 8522
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8532,
    "end": 8535
  },
  {
    "type": "Identifier",
    "value": "s9d",
    "start": 8536,
    "end": 8539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8540,
    "end": 8541
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8542,
    "end": 8544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8544,
    "end": 8545
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8545,
    "end": 8549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8549,
    "end": 8550
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8550,
    "end": 8558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8558,
    "end": 8559
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8560,
    "end": 8568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8568,
    "end": 8569
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8570,
    "end": 8578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8578,
    "end": 8579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8579,
    "end": 8580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8587,
    "end": 8590
  },
  {
    "type": "Identifier",
    "value": "s9e",
    "start": 8591,
    "end": 8594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8595,
    "end": 8596
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8597,
    "end": 8599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8599,
    "end": 8600
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8600,
    "end": 8604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8604,
    "end": 8605
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8605,
    "end": 8613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8613,
    "end": 8614
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8615,
    "end": 8623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8623,
    "end": 8624
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8625,
    "end": 8633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8633,
    "end": 8634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8634,
    "end": 8635
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8642,
    "end": 8645
  },
  {
    "type": "Identifier",
    "value": "s9f",
    "start": 8646,
    "end": 8649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8650,
    "end": 8651
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8652,
    "end": 8654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8654,
    "end": 8655
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8655,
    "end": 8659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8659,
    "end": 8660
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8660,
    "end": 8672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8672,
    "end": 8673
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8674,
    "end": 8683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8683,
    "end": 8684
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8685,
    "end": 8694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8694,
    "end": 8695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8695,
    "end": 8696
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8706,
    "end": 8709
  },
  {
    "type": "Identifier",
    "value": "s9g",
    "start": 8710,
    "end": 8713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8714,
    "end": 8715
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8716,
    "end": 8718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8718,
    "end": 8719
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8719,
    "end": 8723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8723,
    "end": 8724
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8724,
    "end": 8736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8736,
    "end": 8737
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8738,
    "end": 8747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8747,
    "end": 8748
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8749,
    "end": 8758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8758,
    "end": 8759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8759,
    "end": 8760
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8760,
    "end": 8764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8764,
    "end": 8765
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8765,
    "end": 8774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8774,
    "end": 8775
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8776,
    "end": 8785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8785,
    "end": 8786
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8787,
    "end": 8796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8796,
    "end": 8797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8797,
    "end": 8798
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8806,
    "end": 8809
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8810,
    "end": 8813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8814,
    "end": 8815
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8816,
    "end": 8830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8830,
    "end": 8831
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8831,
    "end": 8832
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8833,
    "end": 8835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8836,
    "end": 8837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8837,
    "end": 8838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8838,
    "end": 8839
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8840,
    "end": 8843
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 8844,
    "end": 8848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8849,
    "end": 8850
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8851,
    "end": 8854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8854,
    "end": 8855
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8855,
    "end": 8859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8859,
    "end": 8860
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8860,
    "end": 8874
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8874,
    "end": 8875
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8876,
    "end": 8890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8890,
    "end": 8891
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8892,
    "end": 8906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8906,
    "end": 8907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8907,
    "end": 8908
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8915,
    "end": 8918
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 8919,
    "end": 8923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8924,
    "end": 8925
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8926,
    "end": 8929
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8929,
    "end": 8930
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8930,
    "end": 8934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8934,
    "end": 8935
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8935,
    "end": 8944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8944,
    "end": 8945
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8946,
    "end": 8955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8955,
    "end": 8956
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8957,
    "end": 8966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8966,
    "end": 8967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8967,
    "end": 8968
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8975,
    "end": 8978
  },
  {
    "type": "Identifier",
    "value": "r10c",
    "start": 8979,
    "end": 8983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8984,
    "end": 8985
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8986,
    "end": 8989
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8989,
    "end": 8990
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8990,
    "end": 8994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8994,
    "end": 8995
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8995,
    "end": 9004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9004,
    "end": 9005
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9006,
    "end": 9015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9015,
    "end": 9016
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9017,
    "end": 9026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9026,
    "end": 9027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9027,
    "end": 9028
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9035,
    "end": 9038
  },
  {
    "type": "Identifier",
    "value": "r10d",
    "start": 9039,
    "end": 9043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9044,
    "end": 9045
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 9046,
    "end": 9049
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9049,
    "end": 9050
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9050,
    "end": 9054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9054,
    "end": 9055
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 9055,
    "end": 9067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9067,
    "end": 9068
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9069,
    "end": 9078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9078,
    "end": 9079
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9080,
    "end": 9089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9089,
    "end": 9090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9090,
    "end": 9091
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9098,
    "end": 9101
  },
  {
    "type": "Identifier",
    "value": "r10e",
    "start": 9102,
    "end": 9106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9107,
    "end": 9108
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 9109,
    "end": 9112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9112,
    "end": 9113
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9113,
    "end": 9117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9117,
    "end": 9118
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 9118,
    "end": 9130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9130,
    "end": 9131
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9132,
    "end": 9141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9141,
    "end": 9142
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9143,
    "end": 9152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9152,
    "end": 9153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9153,
    "end": 9154
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9154,
    "end": 9158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9158,
    "end": 9159
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9159,
    "end": 9168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9168,
    "end": 9169
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9170,
    "end": 9179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9179,
    "end": 9180
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9181,
    "end": 9190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9190,
    "end": 9191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9191,
    "end": 9192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9199,
    "end": 9202
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9203,
    "end": 9206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9207,
    "end": 9208
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9209,
    "end": 9224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9224,
    "end": 9225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9225,
    "end": 9226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9227,
    "end": 9229
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9230,
    "end": 9231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9231,
    "end": 9232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9232,
    "end": 9233
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9234,
    "end": 9237
  },
  {
    "type": "Identifier",
    "value": "s10a",
    "start": 9238,
    "end": 9242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9243,
    "end": 9244
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9245,
    "end": 9248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9248,
    "end": 9249
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9249,
    "end": 9253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9253,
    "end": 9254
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9254,
    "end": 9268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9268,
    "end": 9269
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9270,
    "end": 9284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9284,
    "end": 9285
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9286,
    "end": 9300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9300,
    "end": 9301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9301,
    "end": 9302
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9309,
    "end": 9312
  },
  {
    "type": "Identifier",
    "value": "s10b",
    "start": 9313,
    "end": 9317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9318,
    "end": 9319
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9320,
    "end": 9323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9323,
    "end": 9324
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9324,
    "end": 9328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9328,
    "end": 9329
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9329,
    "end": 9344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9344,
    "end": 9345
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9346,
    "end": 9361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9361,
    "end": 9362
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9363,
    "end": 9378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9378,
    "end": 9379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9379,
    "end": 9380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9387,
    "end": 9390
  },
  {
    "type": "Identifier",
    "value": "s10c",
    "start": 9391,
    "end": 9395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9396,
    "end": 9397
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9398,
    "end": 9401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9401,
    "end": 9402
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9402,
    "end": 9406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9406,
    "end": 9407
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9407,
    "end": 9422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9422,
    "end": 9423
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9424,
    "end": 9438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9438,
    "end": 9439
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9440,
    "end": 9454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9454,
    "end": 9455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9455,
    "end": 9456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9463,
    "end": 9466
  },
  {
    "type": "Identifier",
    "value": "s10d",
    "start": 9467,
    "end": 9471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9472,
    "end": 9473
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9474,
    "end": 9477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9477,
    "end": 9478
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9478,
    "end": 9482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9482,
    "end": 9483
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9483,
    "end": 9491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9491,
    "end": 9492
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9493,
    "end": 9501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9501,
    "end": 9502
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9503,
    "end": 9511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9511,
    "end": 9512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9512,
    "end": 9513
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9520,
    "end": 9523
  },
  {
    "type": "Identifier",
    "value": "s10e",
    "start": 9524,
    "end": 9528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9529,
    "end": 9530
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9531,
    "end": 9534
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9534,
    "end": 9535
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9535,
    "end": 9539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9539,
    "end": 9540
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9540,
    "end": 9549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9549,
    "end": 9550
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 9551,
    "end": 9559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9559,
    "end": 9560
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9561,
    "end": 9570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9570,
    "end": 9571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9571,
    "end": 9572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9579,
    "end": 9582
  },
  {
    "type": "Identifier",
    "value": "s10f",
    "start": 9583,
    "end": 9587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9588,
    "end": 9589
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9590,
    "end": 9593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9593,
    "end": 9594
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9594,
    "end": 9598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9598,
    "end": 9599
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9599,
    "end": 9612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9612,
    "end": 9613
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9614,
    "end": 9623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9623,
    "end": 9624
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9625,
    "end": 9634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9634,
    "end": 9635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9635,
    "end": 9636
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9646,
    "end": 9649
  },
  {
    "type": "Identifier",
    "value": "s10g",
    "start": 9650,
    "end": 9654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9655,
    "end": 9656
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9657,
    "end": 9660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9660,
    "end": 9661
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9661,
    "end": 9665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9665,
    "end": 9666
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9666,
    "end": 9679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9679,
    "end": 9680
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9681,
    "end": 9690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9690,
    "end": 9691
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9692,
    "end": 9701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9701,
    "end": 9702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9702,
    "end": 9703
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9703,
    "end": 9707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9707,
    "end": 9708
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9708,
    "end": 9716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9716,
    "end": 9717
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9718,
    "end": 9727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9727,
    "end": 9728
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9729,
    "end": 9738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9738,
    "end": 9739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9739,
    "end": 9740
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9748,
    "end": 9755
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9756,
    "end": 9759
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9760,
    "end": 9763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9763,
    "end": 9764
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 9765,
    "end": 9773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9773,
    "end": 9774
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9774,
    "end": 9780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9780,
    "end": 9781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9781,
    "end": 9782
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9783,
    "end": 9786
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 9787,
    "end": 9791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9792,
    "end": 9793
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9794,
    "end": 9797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9797,
    "end": 9798
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9798,
    "end": 9802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9802,
    "end": 9803
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9803,
    "end": 9817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9817,
    "end": 9818
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9819,
    "end": 9833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9833,
    "end": 9834
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9835,
    "end": 9849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9849,
    "end": 9850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9850,
    "end": 9851
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9861,
    "end": 9868
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9869,
    "end": 9872
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9873,
    "end": 9876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9876,
    "end": 9877
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9878,
    "end": 9885
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9885,
    "end": 9886
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9886,
    "end": 9892
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9892,
    "end": 9893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9893,
    "end": 9894
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9895,
    "end": 9898
  },
  {
    "type": "Identifier",
    "value": "s11a",
    "start": 9899,
    "end": 9903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9904,
    "end": 9905
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9906,
    "end": 9909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9909,
    "end": 9910
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9910,
    "end": 9914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9914,
    "end": 9915
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9915,
    "end": 9929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9929,
    "end": 9930
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9931,
    "end": 9945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9945,
    "end": 9946
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9947,
    "end": 9961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9961,
    "end": 9962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9962,
    "end": 9963
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9970,
    "end": 9973
  },
  {
    "type": "Identifier",
    "value": "s11b",
    "start": 9974,
    "end": 9978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9979,
    "end": 9980
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9981,
    "end": 9984
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9984,
    "end": 9985
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9985,
    "end": 9989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9989,
    "end": 9990
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9990,
    "end": 10005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10005,
    "end": 10006
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 10007,
    "end": 10022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10022,
    "end": 10023
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 10024,
    "end": 10039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10039,
    "end": 10040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10040,
    "end": 10041
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10051,
    "end": 10054
  },
  {
    "type": "Identifier",
    "value": "s11c",
    "start": 10055,
    "end": 10059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10060,
    "end": 10061
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 10062,
    "end": 10065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10065,
    "end": 10066
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10066,
    "end": 10070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10070,
    "end": 10071
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 10071,
    "end": 10086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10086,
    "end": 10087
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 10088,
    "end": 10102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10102,
    "end": 10103
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 10104,
    "end": 10118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10118,
    "end": 10119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10119,
    "end": 10120
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10131,
    "end": 10134
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 10135,
    "end": 10138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10139,
    "end": 10140
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10141,
    "end": 10155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10155,
    "end": 10156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10156,
    "end": 10157
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10158,
    "end": 10160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10161,
    "end": 10162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10162,
    "end": 10163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10163,
    "end": 10164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10165,
    "end": 10168
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 10169,
    "end": 10173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10174,
    "end": 10175
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 10176,
    "end": 10179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10179,
    "end": 10180
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10180,
    "end": 10184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10184,
    "end": 10185
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10185,
    "end": 10199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10199,
    "end": 10200
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10201,
    "end": 10215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10215,
    "end": 10216
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10217,
    "end": 10231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10231,
    "end": 10232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10232,
    "end": 10233
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10240,
    "end": 10243
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10244,
    "end": 10247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10248,
    "end": 10249
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10250,
    "end": 10264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10264,
    "end": 10265
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10265,
    "end": 10266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10267,
    "end": 10269
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10270,
    "end": 10271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10271,
    "end": 10272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10272,
    "end": 10273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10274,
    "end": 10277
  },
  {
    "type": "Identifier",
    "value": "s12a",
    "start": 10278,
    "end": 10282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10283,
    "end": 10284
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10285,
    "end": 10288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10288,
    "end": 10289
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10289,
    "end": 10293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10293,
    "end": 10294
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10294,
    "end": 10308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10308,
    "end": 10309
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10310,
    "end": 10324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10324,
    "end": 10325
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10326,
    "end": 10340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10340,
    "end": 10341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10341,
    "end": 10342
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10349,
    "end": 10352
  },
  {
    "type": "Identifier",
    "value": "s12b",
    "start": 10353,
    "end": 10357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10358,
    "end": 10359
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10360,
    "end": 10363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10363,
    "end": 10364
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10364,
    "end": 10368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10368,
    "end": 10369
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10369,
    "end": 10384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10384,
    "end": 10385
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10386,
    "end": 10401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10401,
    "end": 10402
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10403,
    "end": 10418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10418,
    "end": 10419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10419,
    "end": 10420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10427,
    "end": 10430
  },
  {
    "type": "Identifier",
    "value": "s12c",
    "start": 10431,
    "end": 10435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10436,
    "end": 10437
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10438,
    "end": 10441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10441,
    "end": 10442
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10442,
    "end": 10446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10446,
    "end": 10447
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10447,
    "end": 10462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10462,
    "end": 10463
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10464,
    "end": 10478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10478,
    "end": 10479
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10480,
    "end": 10494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10494,
    "end": 10495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10495,
    "end": 10496
  }
]
```

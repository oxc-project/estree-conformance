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
        "name": "Mapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 29
          }
        ],
        "start": 12,
        "end": 30
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 37
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "typeArguments": null,
          "start": 41,
          "end": 42
        },
        "nameType": null,
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
                "start": 47,
                "end": 48
              },
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
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 48,
                "end": 51
              },
              "accessibility": null,
              "static": false,
              "start": 47,
              "end": 51
            }
          ],
          "start": 45,
          "end": 53
        },
        "optional": false,
        "readonly": null,
        "start": 33,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 69
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 86
          }
        ],
        "start": 69,
        "end": 87
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
                "name": "Mapped1",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 100
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 102
                    },
                    "typeArguments": null,
                    "start": 101,
                    "end": 102
                  }
                ],
                "start": 100,
                "end": 103
              },
              "start": 93,
              "end": 103
            },
            "start": 91,
            "end": 103
          },
          "start": 88,
          "end": 103
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 111
              },
              "typeArguments": null,
              "start": 110,
              "end": 111
            },
            "start": 108,
            "end": 111
          },
          "start": 105,
          "end": 111
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
                  "name": "x",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 133,
                                "end": 134
                              },
                              "typeArguments": null,
                              "start": 133,
                              "end": 134
                            },
                            "start": 131,
                            "end": 134
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 130,
                          "end": 134
                        }
                      ],
                      "start": 128,
                      "end": 136
                    },
                    "start": 126,
                    "end": 136
                  },
                  "start": 125,
                  "end": 136
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 146
                  },
                  "optional": false,
                  "computed": true,
                  "start": 139,
                  "end": 147
                },
                "definite": false,
                "start": 125,
                "end": 147
              }
            ],
            "declare": false,
            "start": 119,
            "end": 148
          }
        ],
        "start": 113,
        "end": 150
      },
      "expression": false,
      "start": 58,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 164
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 181
          }
        ],
        "start": 164,
        "end": 182
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 189
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "typeArguments": null,
          "start": 193,
          "end": 194
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false,
              "start": 198,
              "end": 204
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 205,
              "end": 207
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              "typeArguments": null,
              "start": 204,
              "end": 205
            }
          ],
          "start": 198,
          "end": 207
        },
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
                "start": 212,
                "end": 213
              },
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
                    "start": 215,
                    "end": 216
                  },
                  "typeArguments": null,
                  "start": 215,
                  "end": 216
                },
                "start": 213,
                "end": 216
              },
              "accessibility": null,
              "static": false,
              "start": 212,
              "end": 216
            }
          ],
          "start": 210,
          "end": 218
        },
        "optional": false,
        "readonly": null,
        "start": 185,
        "end": 220
      },
      "declare": false,
      "start": 152,
      "end": 221
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 245,
              "end": 251
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 251
          }
        ],
        "start": 234,
        "end": 252
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
                "name": "Mapped2",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 265
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeArguments": null,
                    "start": 266,
                    "end": 267
                  }
                ],
                "start": 265,
                "end": 268
              },
              "start": 258,
              "end": 268
            },
            "start": 256,
            "end": 268
          },
          "start": 253,
          "end": 268
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "get",
                    "cooked": "get"
                  },
                  "tail": false,
                  "start": 275,
                  "end": 281
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 282,
                  "end": 284
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
                    "start": 281,
                    "end": 282
                  },
                  "typeArguments": null,
                  "start": 281,
                  "end": 282
                }
              ],
              "start": 275,
              "end": 284
            },
            "start": 273,
            "end": 284
          },
          "start": 270,
          "end": 284
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
                  "name": "x",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 304
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 306,
                                "end": 307
                              },
                              "typeArguments": null,
                              "start": 306,
                              "end": 307
                            },
                            "start": 304,
                            "end": 307
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 303,
                          "end": 307
                        }
                      ],
                      "start": 301,
                      "end": 309
                    },
                    "start": 299,
                    "end": 309
                  },
                  "start": 298,
                  "end": 309
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 315
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 319
                  },
                  "optional": false,
                  "computed": true,
                  "start": 312,
                  "end": 320
                },
                "definite": false,
                "start": 298,
                "end": 320
              }
            ],
            "declare": false,
            "start": 292,
            "end": 321
          }
        ],
        "start": 286,
        "end": 333
      },
      "expression": false,
      "start": 223,
      "end": 333
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped3",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 347
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 349
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 358,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 348,
            "end": 364
          }
        ],
        "start": 347,
        "end": 365
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 372
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "typeArguments": null,
          "start": 376,
          "end": 377
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Uppercase",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 390
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "typeArguments": null,
                "start": 391,
                "end": 392
              }
            ],
            "start": 390,
            "end": 393
          },
          "start": 381,
          "end": 393
        },
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
                "start": 398,
                "end": 399
              },
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
                    "start": 401,
                    "end": 402
                  },
                  "typeArguments": null,
                  "start": 401,
                  "end": 402
                },
                "start": 399,
                "end": 402
              },
              "accessibility": null,
              "static": false,
              "start": 398,
              "end": 402
            }
          ],
          "start": 396,
          "end": 404
        },
        "optional": false,
        "readonly": null,
        "start": 368,
        "end": 406
      },
      "declare": false,
      "start": 335,
      "end": 407
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 420
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 422
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 431,
              "end": 437
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 437
          }
        ],
        "start": 420,
        "end": 438
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
                "name": "Mapped3",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 451
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 453
                    },
                    "typeArguments": null,
                    "start": 452,
                    "end": 453
                  }
                ],
                "start": 451,
                "end": 454
              },
              "start": 444,
              "end": 454
            },
            "start": 442,
            "end": 454
          },
          "start": 439,
          "end": 454
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 470
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 471,
                    "end": 472
                  }
                ],
                "start": 470,
                "end": 473
              },
              "start": 461,
              "end": 473
            },
            "start": 459,
            "end": 473
          },
          "start": 456,
          "end": 473
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
                  "name": "x",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 493
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
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
                          "accessibility": null,
                          "static": false,
                          "start": 492,
                          "end": 496
                        }
                      ],
                      "start": 490,
                      "end": 498
                    },
                    "start": 488,
                    "end": 498
                  },
                  "start": 487,
                  "end": 498
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 504
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 508
                  },
                  "optional": false,
                  "computed": true,
                  "start": 501,
                  "end": 509
                },
                "definite": false,
                "start": 487,
                "end": 509
              }
            ],
            "declare": false,
            "start": 481,
            "end": 510
          }
        ],
        "start": 475,
        "end": 522
      },
      "expression": false,
      "start": 409,
      "end": 522
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped4",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 536
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "constraint": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "_",
                    "cooked": "_"
                  },
                  "tail": false,
                  "start": 547,
                  "end": 551
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 557,
                  "end": 559
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 551,
                  "end": 557
                }
              ],
              "start": 547,
              "end": 559
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 537,
            "end": 559
          }
        ],
        "start": 536,
        "end": 560
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 568,
          "end": 569
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 574
          },
          "typeArguments": null,
          "start": 573,
          "end": 574
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 578
          },
          "typeArguments": null,
          "start": 577,
          "end": 578
        },
        "optional": false,
        "readonly": null,
        "start": 563,
        "end": 581
      },
      "declare": false,
      "start": 524,
      "end": 582
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 595
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 597
            },
            "constraint": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "_",
                    "cooked": "_"
                  },
                  "tail": false,
                  "start": 606,
                  "end": 610
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
                  "type": "TSStringKeyword",
                  "start": 610,
                  "end": 616
                }
              ],
              "start": 606,
              "end": 618
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 596,
            "end": 618
          }
        ],
        "start": 595,
        "end": 619
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
                "name": "Mapped4",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 632
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 634
                    },
                    "typeArguments": null,
                    "start": 633,
                    "end": 634
                  }
                ],
                "start": 632,
                "end": 635
              },
              "start": 625,
              "end": 635
            },
            "start": 623,
            "end": 635
          },
          "start": 620,
          "end": 635
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
                  "name": "Mapped4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 655
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 657
                      },
                      "typeArguments": null,
                      "start": 656,
                      "end": 657
                    }
                  ],
                  "start": 655,
                  "end": 658
                },
                "start": 648,
                "end": 658
              },
              "start": 642,
              "end": 658
            },
            "start": 640,
            "end": 658
          },
          "start": 637,
          "end": 658
        }
      ],
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false,
                          "start": 671,
                          "end": 675
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 681,
                          "end": 683
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 675,
                          "end": 681
                        }
                      ],
                      "start": 671,
                      "end": 683
                    },
                    "start": 669,
                    "end": 683
                  },
                  "start": 668,
                  "end": 683
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 686,
                    "end": 689
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 693
                  },
                  "optional": false,
                  "computed": true,
                  "start": 686,
                  "end": 694
                },
                "definite": false,
                "start": 668,
                "end": 694
              }
            ],
            "declare": false,
            "start": 664,
            "end": 695
          }
        ],
        "start": 660,
        "end": 697
      },
      "expression": false,
      "start": 584,
      "end": 697
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped5",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 711
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 722,
              "end": 728
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 712,
            "end": 728
          }
        ],
        "start": 711,
        "end": 729
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 737,
          "end": 738
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 743
          },
          "typeArguments": null,
          "start": 742,
          "end": 743
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "typeArguments": null,
            "start": 747,
            "end": 748
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false,
                "start": 757,
                "end": 761
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 767,
                "end": 769
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 761,
                "end": 767
              }
            ],
            "start": 757,
            "end": 769
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "typeArguments": null,
            "start": 772,
            "end": 773
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 776,
            "end": 781
          },
          "start": 747,
          "end": 781
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 785
          },
          "typeArguments": null,
          "start": 784,
          "end": 785
        },
        "optional": false,
        "readonly": null,
        "start": 732,
        "end": 788
      },
      "declare": false,
      "start": 699,
      "end": 789
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 800,
        "end": 802
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 804
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 813,
              "end": 819
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 803,
            "end": 819
          }
        ],
        "start": 802,
        "end": 820
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
                "name": "Mapped5",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 835
                    },
                    "typeArguments": null,
                    "start": 834,
                    "end": 835
                  }
                ],
                "start": 833,
                "end": 836
              },
              "start": 826,
              "end": 836
            },
            "start": 824,
            "end": 836
          },
          "start": 821,
          "end": 836
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
                  "name": "Mapped5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 856
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 857,
                        "end": 858
                      },
                      "typeArguments": null,
                      "start": 857,
                      "end": 858
                    }
                  ],
                  "start": 856,
                  "end": 859
                },
                "start": 849,
                "end": 859
              },
              "start": 843,
              "end": 859
            },
            "start": 841,
            "end": 859
          },
          "start": 838,
          "end": 859
        }
      ],
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false,
                          "start": 872,
                          "end": 876
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 882,
                          "end": 884
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 876,
                          "end": 882
                        }
                      ],
                      "start": 872,
                      "end": 884
                    },
                    "start": 870,
                    "end": 884
                  },
                  "start": 869,
                  "end": 884
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 890
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 894
                  },
                  "optional": false,
                  "computed": true,
                  "start": 887,
                  "end": 895
                },
                "definite": false,
                "start": 869,
                "end": 895
              }
            ],
            "declare": false,
            "start": 865,
            "end": 896
          }
        ],
        "start": 861,
        "end": 898
      },
      "expression": false,
      "start": 791,
      "end": 898
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped6",
        "optional": false,
        "typeAnnotation": null,
        "start": 951,
        "end": 958
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 960
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 969,
              "end": 975
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 959,
            "end": 975
          }
        ],
        "start": 958,
        "end": 976
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 984,
          "end": 985
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 989,
            "end": 990
          },
          "typeArguments": null,
          "start": 989,
          "end": 990
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 994,
              "end": 998
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 999,
              "end": 1001
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 999
              },
              "typeArguments": null,
              "start": 998,
              "end": 999
            }
          ],
          "start": 994,
          "end": 1001
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1005
          },
          "typeArguments": null,
          "start": 1004,
          "end": 1005
        },
        "optional": false,
        "readonly": null,
        "start": 979,
        "end": 1008
      },
      "declare": false,
      "start": 946,
      "end": 1009
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1022
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1024
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1033,
              "end": 1039
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1023,
            "end": 1039
          }
        ],
        "start": 1022,
        "end": 1040
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
                "name": "Mapped6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1053
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1054,
                      "end": 1055
                    },
                    "typeArguments": null,
                    "start": 1054,
                    "end": 1055
                  }
                ],
                "start": 1053,
                "end": 1056
              },
              "start": 1046,
              "end": 1056
            },
            "start": 1044,
            "end": 1056
          },
          "start": 1041,
          "end": 1056
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
                  "name": "Mapped6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1076
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1077,
                        "end": 1078
                      },
                      "typeArguments": null,
                      "start": 1077,
                      "end": 1078
                    }
                  ],
                  "start": 1076,
                  "end": 1079
                },
                "start": 1069,
                "end": 1079
              },
              "start": 1063,
              "end": 1079
            },
            "start": 1061,
            "end": 1079
          },
          "start": 1058,
          "end": 1079
        }
      ],
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false,
                          "start": 1092,
                          "end": 1096
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1102,
                          "end": 1104
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1096,
                          "end": 1102
                        }
                      ],
                      "start": 1092,
                      "end": 1104
                    },
                    "start": 1090,
                    "end": 1104
                  },
                  "start": 1089,
                  "end": 1104
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1107,
                    "end": 1110
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1114
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1107,
                  "end": 1115
                },
                "definite": false,
                "start": 1089,
                "end": 1115
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1116
          }
        ],
        "start": 1081,
        "end": 1127
      },
      "expression": false,
      "start": 1011,
      "end": 1127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1134,
        "end": 1141
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1142,
              "end": 1143
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1152,
              "end": 1158
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1142,
            "end": 1158
          }
        ],
        "start": 1141,
        "end": 1159
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1167,
          "end": 1168
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1172,
            "end": 1173
          },
          "typeArguments": null,
          "start": 1172,
          "end": 1173
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1179
                },
                "typeArguments": null,
                "start": 1178,
                "end": 1179
              }
            ],
            "start": 1177,
            "end": 1180
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "_",
                      "cooked": "_"
                    },
                    "tail": false,
                    "start": 1190,
                    "end": 1194
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1200,
                    "end": 1202
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1194,
                    "end": 1200
                  }
                ],
                "start": 1190,
                "end": 1202
              }
            ],
            "start": 1189,
            "end": 1203
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1207
            },
            "typeArguments": null,
            "start": 1206,
            "end": 1207
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1210,
            "end": 1215
          },
          "start": 1177,
          "end": 1215
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1219
          },
          "typeArguments": null,
          "start": 1218,
          "end": 1219
        },
        "optional": false,
        "readonly": null,
        "start": 1162,
        "end": 1222
      },
      "declare": false,
      "start": 1129,
      "end": 1223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1236
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1238
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1247,
              "end": 1253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1237,
            "end": 1253
          }
        ],
        "start": 1236,
        "end": 1254
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
                "name": "Mapped7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1260,
                "end": 1267
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1268,
                      "end": 1269
                    },
                    "typeArguments": null,
                    "start": 1268,
                    "end": 1269
                  }
                ],
                "start": 1267,
                "end": 1270
              },
              "start": 1260,
              "end": 1270
            },
            "start": 1258,
            "end": 1270
          },
          "start": 1255,
          "end": 1270
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
                  "name": "Mapped7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1283,
                  "end": 1290
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1291,
                        "end": 1292
                      },
                      "typeArguments": null,
                      "start": 1291,
                      "end": 1292
                    }
                  ],
                  "start": 1290,
                  "end": 1293
                },
                "start": 1283,
                "end": 1293
              },
              "start": 1277,
              "end": 1293
            },
            "start": 1275,
            "end": 1293
          },
          "start": 1272,
          "end": 1293
        }
      ],
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false,
                          "start": 1306,
                          "end": 1310
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1316,
                          "end": 1318
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1310,
                          "end": 1316
                        }
                      ],
                      "start": 1306,
                      "end": 1318
                    },
                    "start": 1304,
                    "end": 1318
                  },
                  "start": 1303,
                  "end": 1318
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1321,
                    "end": 1324
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1325,
                    "end": 1328
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1321,
                  "end": 1329
                },
                "definite": false,
                "start": 1303,
                "end": 1329
              }
            ],
            "declare": false,
            "start": 1299,
            "end": 1330
          }
        ],
        "start": 1295,
        "end": 1332
      },
      "expression": false,
      "start": 1225,
      "end": 1332
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1361,
        "end": 1364
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
              "start": 1365,
              "end": 1366
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1375,
              "end": 1381
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1365,
            "end": 1381
          }
        ],
        "start": 1364,
        "end": 1382
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "RemappedT",
          "optional": false,
          "typeAnnotation": null,
          "start": 1392,
          "end": 1401
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1405,
            "end": 1406
          },
          "typeArguments": null,
          "start": 1405,
          "end": 1406
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false,
              "start": 1410,
              "end": 1416
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1425,
              "end": 1427
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RemappedT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1416,
                "end": 1425
              },
              "typeArguments": null,
              "start": 1416,
              "end": 1425
            }
          ],
          "start": 1410,
          "end": 1427
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemappedT",
            "optional": false,
            "typeAnnotation": null,
            "start": 1430,
            "end": 1439
          },
          "typeArguments": null,
          "start": 1430,
          "end": 1439
        },
        "optional": false,
        "readonly": null,
        "start": 1385,
        "end": 1442
      },
      "declare": false,
      "start": 1356,
      "end": 1443
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
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 1451,
            "end": 1454
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
                    "start": 1458,
                    "end": 1459
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 1468,
                    "end": 1474
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1458,
                  "end": 1474
                }
              ],
              "start": 1457,
              "end": 1475
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1479,
                      "end": 1480
                    },
                    "typeArguments": null,
                    "start": 1479,
                    "end": 1480
                  },
                  "start": 1477,
                  "end": 1480
                },
                "start": 1476,
                "end": 1480
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1487,
                      "end": 1490
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
                            "start": 1491,
                            "end": 1492
                          },
                          "typeArguments": null,
                          "start": 1491,
                          "end": 1492
                        }
                      ],
                      "start": 1490,
                      "end": 1493
                    },
                    "start": 1487,
                    "end": 1493
                  },
                  "start": 1485,
                  "end": 1493
                },
                "start": 1482,
                "end": 1493
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
                  "start": 1496,
                  "end": 1497
                },
                "typeArguments": null,
                "start": 1496,
                "end": 1497
              },
              "start": 1494,
              "end": 1497
            },
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1501,
                "end": 1504
              },
              "property": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "get",
                      "cooked": "get"
                    },
                    "tail": false,
                    "start": 1505,
                    "end": 1511
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1512,
                    "end": 1514
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1511,
                    "end": 1512
                  }
                ],
                "start": 1505,
                "end": 1514
              },
              "optional": false,
              "computed": true,
              "start": 1501,
              "end": 1515
            },
            "id": null,
            "generator": false,
            "start": 1457,
            "end": 1515
          },
          "definite": false,
          "start": 1451,
          "end": 1515
        }
      ],
      "declare": false,
      "start": 1445,
      "end": 1516
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bounds",
        "optional": false,
        "typeAnnotation": null,
        "start": 1609,
        "end": 1615
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
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 1622,
              "end": 1625
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1627,
                "end": 1633
              },
              "start": 1625,
              "end": 1633
            },
            "accessibility": null,
            "static": false,
            "start": 1622,
            "end": 1634
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "max",
              "optional": false,
              "typeAnnotation": null,
              "start": 1639,
              "end": 1642
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1644,
                "end": 1650
              },
              "start": 1642,
              "end": 1650
            },
            "accessibility": null,
            "static": false,
            "start": 1639,
            "end": 1651
          }
        ],
        "start": 1616,
        "end": 1653
      },
      "declare": false,
      "start": 1599,
      "end": 1653
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericBoundsOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1675
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
              "start": 1676,
              "end": 1677
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1676,
            "end": 1677
          }
        ],
        "start": 1675,
        "end": 1678
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1688,
          "end": 1689
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
              "start": 1699,
              "end": 1700
            },
            "typeArguments": null,
            "start": 1699,
            "end": 1700
          },
          "start": 1693,
          "end": 1700
        },
        "nameType": {
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
                "start": 1704,
                "end": 1705
              },
              "typeArguments": null,
              "start": 1704,
              "end": 1705
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1706,
                "end": 1707
              },
              "typeArguments": null,
              "start": 1706,
              "end": 1707
            },
            "start": 1704,
            "end": 1708
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 1717,
                "end": 1723
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 1726,
                "end": 1735
              }
            ],
            "start": 1717,
            "end": 1735
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1738,
              "end": 1739
            },
            "typeArguments": null,
            "start": 1738,
            "end": 1739
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1742,
            "end": 1747
          },
          "start": 1704,
          "end": 1747
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bounds",
            "optional": false,
            "typeAnnotation": null,
            "start": 1750,
            "end": 1756
          },
          "typeArguments": null,
          "start": 1750,
          "end": 1756
        },
        "optional": false,
        "readonly": null,
        "start": 1681,
        "end": 1759
      },
      "declare": false,
      "start": 1655,
      "end": 1759
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1770,
        "end": 1778
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
              "start": 1779,
              "end": 1780
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1789,
              "end": 1795
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1779,
            "end": 1795
          }
        ],
        "start": 1778,
        "end": 1796
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
                "start": 1802,
                "end": 1803
              },
              "typeArguments": null,
              "start": 1802,
              "end": 1803
            },
            "start": 1800,
            "end": 1803
          },
          "start": 1797,
          "end": 1803
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bounds",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericBoundsOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1813,
                "end": 1828
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
                      "start": 1829,
                      "end": 1830
                    },
                    "typeArguments": null,
                    "start": 1829,
                    "end": 1830
                  }
                ],
                "start": 1828,
                "end": 1831
              },
              "start": 1813,
              "end": 1831
            },
            "start": 1811,
            "end": 1831
          },
          "start": 1805,
          "end": 1831
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1851,
                        "end": 1854
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1856,
                        "end": 1859
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1850,
                    "end": 1860
                  },
                  "init": null,
                  "definite": false,
                  "start": 1850,
                  "end": 1860
                }
              ],
              "declare": false,
              "start": 1844,
              "end": 1860
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1864,
                  "end": 1870
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entries",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1871,
                  "end": 1878
                },
                "optional": false,
                "computed": false,
                "start": 1864,
                "end": 1878
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1882
                }
              ],
              "optional": false,
              "start": 1864,
              "end": 1883
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
                        "name": "boundsForKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1901,
                        "end": 1913
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bounds",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1916,
                          "end": 1922
                        },
                        "property": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1923,
                            "end": 1926
                          },
                          "typeAnnotation": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NumericBoundsOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1936,
                                "end": 1951
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
                                      "start": 1952,
                                      "end": 1953
                                    },
                                    "typeArguments": null,
                                    "start": 1952,
                                    "end": 1953
                                  }
                                ],
                                "start": 1951,
                                "end": 1954
                              },
                              "start": 1936,
                              "end": 1954
                            },
                            "start": 1930,
                            "end": 1954
                          },
                          "start": 1923,
                          "end": 1954
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1916,
                        "end": 1955
                      },
                      "definite": false,
                      "start": 1901,
                      "end": 1955
                    }
                  ],
                  "declare": false,
                  "start": 1895,
                  "end": 1956
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boundsForKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1969,
                    "end": 1981
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "min",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2005,
                                    "end": 2008
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "min",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2005,
                                    "end": 2008
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2005,
                                  "end": 2008
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "max",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2010,
                                    "end": 2013
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "max",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2010,
                                    "end": 2013
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2010,
                                  "end": 2013
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2003,
                              "end": 2015
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "boundsForKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2018,
                              "end": 2030
                            },
                            "definite": false,
                            "start": 2003,
                            "end": 2030
                          }
                        ],
                        "declare": false,
                        "start": 1997,
                        "end": 2031
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "min",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2048,
                              "end": 2051
                            },
                            "operator": ">",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2054,
                              "end": 2057
                            },
                            "start": 2048,
                            "end": 2057
                          },
                          "operator": "||",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "max",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2061,
                              "end": 2064
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2067,
                              "end": 2070
                            },
                            "start": 2061,
                            "end": 2070
                          },
                          "start": 2048,
                          "end": 2070
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 2079,
                            "end": 2084
                          },
                          "start": 2072,
                          "end": 2085
                        },
                        "alternate": null,
                        "start": 2044,
                        "end": 2085
                      }
                    ],
                    "start": 1983,
                    "end": 2095
                  },
                  "alternate": null,
                  "start": 1965,
                  "end": 2095
                }
              ],
              "start": 1885,
              "end": 2101
            },
            "start": 1839,
            "end": 2101
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2113,
              "end": 2117
            },
            "start": 2106,
            "end": 2118
          }
        ],
        "start": 1833,
        "end": 2120
      },
      "expression": false,
      "start": 1761,
      "end": 2120
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectWithUnderscoredKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 2149,
        "end": 2174
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2175,
              "end": 2176
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2185,
              "end": 2191
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2175,
            "end": 2191
          }
        ],
        "start": 2174,
        "end": 2192
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 2202,
          "end": 2203
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2207,
            "end": 2208
          },
          "typeArguments": null,
          "start": 2207,
          "end": 2208
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 2212,
              "end": 2216
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2217,
              "end": 2219
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2217
              },
              "typeArguments": null,
              "start": 2216,
              "end": 2217
            }
          ],
          "start": 2212,
          "end": 2219
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2222,
            "end": 2226
          },
          "start": 2222,
          "end": 2226
        },
        "optional": false,
        "readonly": null,
        "start": 2195,
        "end": 2229
      },
      "declare": false,
      "start": 2144,
      "end": 2230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 2241,
        "end": 2252
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2253,
              "end": 2254
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2263,
              "end": 2269
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2253,
            "end": 2269
          }
        ],
        "start": 2252,
        "end": 2270
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objectWithUnderscoredKeys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectWithUnderscoredKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 2298,
                "end": 2323
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2324,
                      "end": 2325
                    },
                    "typeArguments": null,
                    "start": 2324,
                    "end": 2325
                  }
                ],
                "start": 2323,
                "end": 2326
              },
              "start": 2298,
              "end": 2326
            },
            "start": 2296,
            "end": 2326
          },
          "start": 2271,
          "end": 2326
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2333,
                "end": 2334
              },
              "typeArguments": null,
              "start": 2333,
              "end": 2334
            },
            "start": 2331,
            "end": 2334
          },
          "start": 2328,
          "end": 2334
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
                  "name": "shouldBeTrue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2360,
                        "end": 2364
                      },
                      "start": 2360,
                      "end": 2364
                    },
                    "start": 2358,
                    "end": 2364
                  },
                  "start": 2346,
                  "end": 2364
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objectWithUnderscoredKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2367,
                    "end": 2392
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_",
                          "cooked": "_"
                        },
                        "tail": false,
                        "start": 2393,
                        "end": 2397
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2400,
                        "end": 2402
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2397,
                        "end": 2400
                      }
                    ],
                    "start": 2393,
                    "end": 2402
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2367,
                  "end": 2403
                },
                "definite": false,
                "start": 2346,
                "end": 2403
              }
            ],
            "declare": false,
            "start": 2340,
            "end": 2404
          }
        ],
        "start": 2336,
        "end": 2458
      },
      "expression": false,
      "start": 2232,
      "end": 2458
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2458
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
    "value": "Mapped1",
    "start": 5,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 38,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 58,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Mapped1",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 152,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Mapped2",
    "start": 157,
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
    "value": "K",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 195,
    "end": 197
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 198,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 204,
    "end": 205
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
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
    "value": "function",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 237,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
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
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Mapped2",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 275,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 281,
    "end": 282
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 292,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
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
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 335,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "Mapped3",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 350,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
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
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 373,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 378,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 381,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 409,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 418,
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
    "value": "K",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 423,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Mapped3",
    "start": 444,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 461,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 481,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 492,
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
    "value": "K",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 524,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Mapped4",
    "start": 529,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 539,
    "end": 546
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 547,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 551,
    "end": 557
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 570,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 593,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 598,
    "end": 605
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 606,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
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
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "Mapped4",
    "start": 625,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 637,
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
    "value": "keyof",
    "start": 642,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Mapped4",
    "start": 648,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 671,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 675,
    "end": 681
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 699,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Mapped5",
    "start": 704,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 714,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 739,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 744,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 749,
    "end": 756
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 757,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 761,
    "end": 767
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 776,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 791,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 800,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 805,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "Mapped5",
    "start": 826,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 843,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "Mapped5",
    "start": 849,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 865,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 872,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 876,
    "end": 882
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 946,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "Mapped6",
    "start": 951,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 961,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 986,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 991,
    "end": 993
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 994,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 998,
    "end": 999
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1011,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "Mapped6",
    "start": 1046,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "Mapped6",
    "start": 1069,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 1092,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1102,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1107,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1129,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "Mapped7",
    "start": 1134,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1152,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1169,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1181,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1194,
    "end": 1200
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1210,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1225,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1234,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1239,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1247,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "Mapped7",
    "start": 1260,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1277,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "Mapped7",
    "start": 1283,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 1306,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1356,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1361,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1367,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1375,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "RemappedT",
    "start": 1392,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1402,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1407,
    "end": 1409
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "RemappedT",
    "start": 1416,
    "end": 1425
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1425,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "RemappedT",
    "start": 1430,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1445,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1451,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1460,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1468,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1487,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1498,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 1505,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1599,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "Bounds",
    "start": 1609,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1627,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 1639,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1644,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1655,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "NumericBoundsOf",
    "start": 1660,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1690,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1693,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1701,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1709,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1717,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1726,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1742,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "Bounds",
    "start": 1750,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1761,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 1770,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1781,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1789,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1797,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "bounds",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "NumericBoundsOf",
    "start": 1813,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1844,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1851,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1856,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1861,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 1871,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1879,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1895,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "boundsForKey",
    "start": 1901,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "bounds",
    "start": 1916,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1923,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1927,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1930,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "NumericBoundsOf",
    "start": 1936,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1965,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "boundsForKey",
    "start": 1969,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1997,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 2005,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 2010,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "boundsForKey",
    "start": 2018,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2044,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2054,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2058,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 2061,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2067,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2072,
    "end": 2078
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2079,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2106,
    "end": 2112
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2113,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2144,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "ObjectWithUnderscoredKeys",
    "start": 2149,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2177,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2185,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2204,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2209,
    "end": 2211
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 2212,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2217,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2222,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2232,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "genericTest",
    "start": 2241,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2255,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2263,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "objectWithUnderscoredKeys",
    "start": 2271,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "ObjectWithUnderscoredKeys",
    "start": 2298,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2328,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2340,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "shouldBeTrue",
    "start": 2346,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2360,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "objectWithUnderscoredKeys",
    "start": 2367,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 2393,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2397,
    "end": 2400
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2400,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2457,
    "end": 2458
  }
]
```

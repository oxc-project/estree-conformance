__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 11
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 15
          }
        ],
        "start": 7,
        "end": 17
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "EmptyStatement",
      "start": 17,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
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
              "start": 31,
              "end": 32
            },
            "constraint": {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 46,
                      "end": 52
                    },
                    "start": 44,
                    "end": 52
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 43,
                  "end": 52
                }
              ],
              "start": 41,
              "end": 54
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 31,
            "end": 54
          }
        ],
        "start": 30,
        "end": 55
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                "start": 60,
                "end": 61
              },
              "typeArguments": null,
              "start": 60,
              "end": 61
            },
            "start": 58,
            "end": 61
          },
          "start": 56,
          "end": 61
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "typeArguments": null,
                "start": 67,
                "end": 68
              },
              "start": 67,
              "end": 70
            },
            "start": 65,
            "end": 70
          },
          "start": 63,
          "end": 70
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
                  "start": 82,
                  "end": 87
                },
                "init": null,
                "definite": true,
                "start": 82,
                "end": 87
              }
            ],
            "declare": false,
            "start": 78,
            "end": 88
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
                  "name": "i",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 103
                        },
                        "typeArguments": null,
                        "start": 102,
                        "end": 103
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 104,
                          "end": 107
                        },
                        "start": 104,
                        "end": 107
                      },
                      "start": 102,
                      "end": 108
                    },
                    "start": 100,
                    "end": 108
                  },
                  "start": 98,
                  "end": 108
                },
                "init": null,
                "definite": true,
                "start": 98,
                "end": 108
              }
            ],
            "declare": false,
            "start": 94,
            "end": 109
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
                  "name": "k",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 129
                        },
                        "typeArguments": null,
                        "start": 128,
                        "end": 129
                      },
                      "start": 122,
                      "end": 129
                    },
                    "start": 120,
                    "end": 129
                  },
                  "start": 118,
                  "end": 129
                },
                "init": null,
                "definite": true,
                "start": 118,
                "end": 129
              }
            ],
            "declare": false,
            "start": 114,
            "end": 130
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
                  "name": "mapped_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
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
                            "start": 170,
                            "end": 171
                          },
                          "typeArguments": null,
                          "start": 170,
                          "end": 171
                        },
                        "start": 164,
                        "end": 171
                      },
                      "nameType": null,
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
                            "start": 174,
                            "end": 175
                          },
                          "typeArguments": null,
                          "start": 174,
                          "end": 175
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
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
                        "end": 178
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 157,
                      "end": 179
                    },
                    "start": 155,
                    "end": 179
                  },
                  "start": 140,
                  "end": 179
                },
                "init": null,
                "definite": true,
                "start": 140,
                "end": 179
              }
            ],
            "declare": false,
            "start": 136,
            "end": 180
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
                  "name": "mapped",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 201
                      },
                      "constraint": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 205,
                          "end": 208
                        },
                        "start": 205,
                        "end": 208
                      },
                      "nameType": null,
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
                            "start": 211,
                            "end": 212
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 212
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 214
                          },
                          "typeArguments": null,
                          "start": 213,
                          "end": 214
                        },
                        "start": 211,
                        "end": 215
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 198,
                      "end": 216
                    },
                    "start": 196,
                    "end": 216
                  },
                  "start": 189,
                  "end": 216
                },
                "init": null,
                "definite": true,
                "start": 189,
                "end": 216
              }
            ],
            "declare": false,
            "start": 185,
            "end": 217
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
                  "name": "union_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 243,
                            "end": 244
                          },
                          "typeArguments": null,
                          "start": 243,
                          "end": 244
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 249,
                                "end": 250
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 252,
                                  "end": 258
                                },
                                "start": 250,
                                "end": 258
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 249,
                              "end": 258
                            }
                          ],
                          "start": 247,
                          "end": 260
                        }
                      ],
                      "start": 243,
                      "end": 260
                    },
                    "start": 241,
                    "end": 260
                  },
                  "start": 227,
                  "end": 260
                },
                "init": null,
                "definite": true,
                "start": 227,
                "end": 260
              }
            ],
            "declare": false,
            "start": 223,
            "end": 261
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
                  "name": "union_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 290,
                                "end": 291
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 293,
                                  "end": 299
                                },
                                "start": 291,
                                "end": 299
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 290,
                              "end": 299
                            }
                          ],
                          "start": 288,
                          "end": 301
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 304,
                          "end": 310
                        }
                      ],
                      "start": 288,
                      "end": 310
                    },
                    "start": 286,
                    "end": 310
                  },
                  "start": 270,
                  "end": 310
                },
                "init": null,
                "definite": true,
                "start": 270,
                "end": 310
              }
            ],
            "declare": false,
            "start": 266,
            "end": 311
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
                  "name": "intersection_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 343,
                            "end": 344
                          },
                          "typeArguments": null,
                          "start": 343,
                          "end": 344
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 349,
                                "end": 350
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 352,
                                  "end": 358
                                },
                                "start": 350,
                                "end": 358
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 349,
                              "end": 358
                            }
                          ],
                          "start": 347,
                          "end": 360
                        }
                      ],
                      "start": 343,
                      "end": 360
                    },
                    "start": 341,
                    "end": 360
                  },
                  "start": 320,
                  "end": 360
                },
                "init": null,
                "definite": true,
                "start": 320,
                "end": 360
              }
            ],
            "declare": false,
            "start": 316,
            "end": 361
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
                  "name": "intersection_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 397,
                                "end": 398
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 400,
                                  "end": 406
                                },
                                "start": 398,
                                "end": 406
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 397,
                              "end": 406
                            }
                          ],
                          "start": 395,
                          "end": 408
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 411,
                          "end": 417
                        }
                      ],
                      "start": 395,
                      "end": 417
                    },
                    "start": 393,
                    "end": 417
                  },
                  "start": 370,
                  "end": 417
                },
                "init": null,
                "definite": true,
                "start": 370,
                "end": 417
              }
            ],
            "declare": false,
            "start": 366,
            "end": 418
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
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    },
                    "start": 432,
                    "end": 440
                  },
                  "start": 428,
                  "end": 440
                },
                "init": null,
                "definite": true,
                "start": 428,
                "end": 440
              }
            ],
            "declare": false,
            "start": 424,
            "end": 441
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 456,
                      "end": 462
                    },
                    "start": 454,
                    "end": 462
                  },
                  "start": 450,
                  "end": 462
                },
                "init": null,
                "definite": true,
                "start": 450,
                "end": 462
              }
            ],
            "declare": false,
            "start": 446,
            "end": 463
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
                  "name": "literal_string",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 488,
                        "end": 496
                      },
                      "start": 488,
                      "end": 496
                    },
                    "start": 486,
                    "end": 496
                  },
                  "start": 472,
                  "end": 496
                },
                "init": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 499,
                  "end": 507
                },
                "definite": false,
                "start": 472,
                "end": 507
              }
            ],
            "declare": false,
            "start": 468,
            "end": 508
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
                  "name": "literal_number",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 533,
                        "end": 535
                      },
                      "start": 533,
                      "end": 535
                    },
                    "start": 531,
                    "end": 535
                  },
                  "start": 517,
                  "end": 535
                },
                "init": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 538,
                  "end": 540
                },
                "definite": false,
                "start": 517,
                "end": 540
              }
            ],
            "declare": false,
            "start": 513,
            "end": 541
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
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 554,
                      "end": 563
                    },
                    "start": 552,
                    "end": 563
                  },
                  "start": 551,
                  "end": 563
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 575
                },
                "definite": false,
                "start": 551,
                "end": 575
              }
            ],
            "declare": false,
            "start": 547,
            "end": 576
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 588,
                      "end": 592
                    },
                    "start": 586,
                    "end": 592
                  },
                  "start": 585,
                  "end": 592
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 595,
                  "end": 599
                },
                "definite": false,
                "start": 585,
                "end": 599
              }
            ],
            "declare": false,
            "start": 581,
            "end": 600
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 612,
                      "end": 615
                    },
                    "start": 610,
                    "end": 615
                  },
                  "start": 609,
                  "end": 615
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 618,
                  "end": 619
                },
                "definite": false,
                "start": 609,
                "end": 619
              }
            ],
            "declare": false,
            "start": 605,
            "end": 620
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 635,
                        "end": 636
                      },
                      "typeArguments": null,
                      "start": 635,
                      "end": 636
                    },
                    "start": 633,
                    "end": 636
                  },
                  "start": 631,
                  "end": 636
                },
                "init": null,
                "definite": true,
                "start": 631,
                "end": 636
              }
            ],
            "declare": false,
            "start": 627,
            "end": 637
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
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 649
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 659
                      },
                      "start": 654,
                      "end": 659
                    }
                  ],
                  "start": 652,
                  "end": 661
                },
                "definite": false,
                "start": 647,
                "end": 661
              }
            ],
            "declare": false,
            "start": 643,
            "end": 662
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 705
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 713,
                        "end": 715
                      },
                      "start": 710,
                      "end": 715
                    }
                  ],
                  "start": 708,
                  "end": 717
                },
                "definite": false,
                "start": 703,
                "end": 717
              }
            ],
            "declare": false,
            "start": 699,
            "end": 718
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
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 734,
                  "end": 736
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 744,
                        "end": 745
                      },
                      "start": 741,
                      "end": 745
                    }
                  ],
                  "start": 739,
                  "end": 747
                },
                "definite": false,
                "start": 734,
                "end": 747
              }
            ],
            "declare": false,
            "start": 730,
            "end": 748
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
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 790
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 799
                      },
                      "start": 795,
                      "end": 799
                    }
                  ],
                  "start": 793,
                  "end": 801
                },
                "definite": false,
                "start": 788,
                "end": 801
              }
            ],
            "declare": false,
            "start": 784,
            "end": 802
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
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 838
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 847
                      },
                      "start": 843,
                      "end": 847
                    }
                  ],
                  "start": 841,
                  "end": 849
                },
                "definite": false,
                "start": 836,
                "end": 849
              }
            ],
            "declare": false,
            "start": 832,
            "end": 850
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
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 879
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapped_generic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 887,
                        "end": 901
                      },
                      "start": 884,
                      "end": 901
                    }
                  ],
                  "start": 882,
                  "end": 903
                },
                "definite": false,
                "start": 877,
                "end": 903
              }
            ],
            "declare": false,
            "start": 873,
            "end": 904
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
                  "name": "o7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 947,
                  "end": 949
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 957,
                        "end": 963
                      },
                      "start": 954,
                      "end": 963
                    }
                  ],
                  "start": 952,
                  "end": 965
                },
                "definite": false,
                "start": 947,
                "end": 965
              }
            ],
            "declare": false,
            "start": 943,
            "end": 966
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
                  "name": "o8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1008,
                  "end": 1010
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "union_generic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1018,
                        "end": 1031
                      },
                      "start": 1015,
                      "end": 1031
                    }
                  ],
                  "start": 1013,
                  "end": 1033
                },
                "definite": false,
                "start": 1008,
                "end": 1033
              }
            ],
            "declare": false,
            "start": 1004,
            "end": 1034
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
                  "name": "o9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1085,
                  "end": 1087
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "union_primitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1095,
                        "end": 1110
                      },
                      "start": 1092,
                      "end": 1110
                    }
                  ],
                  "start": 1090,
                  "end": 1112
                },
                "definite": false,
                "start": 1085,
                "end": 1112
              }
            ],
            "declare": false,
            "start": 1081,
            "end": 1113
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
                  "name": "o10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1168,
                  "end": 1171
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "intersection_generic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1179,
                        "end": 1199
                      },
                      "start": 1176,
                      "end": 1199
                    }
                  ],
                  "start": 1174,
                  "end": 1201
                },
                "definite": false,
                "start": 1168,
                "end": 1201
              }
            ],
            "declare": false,
            "start": 1164,
            "end": 1202
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
                  "name": "o11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1260,
                  "end": 1263
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "intersection_primitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1271,
                        "end": 1293
                      },
                      "start": 1268,
                      "end": 1293
                    }
                  ],
                  "start": 1266,
                  "end": 1295
                },
                "definite": false,
                "start": 1260,
                "end": 1295
              }
            ],
            "declare": false,
            "start": 1256,
            "end": 1296
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
                  "name": "o12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1358,
                  "end": 1361
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1369,
                        "end": 1372
                      },
                      "start": 1366,
                      "end": 1372
                    }
                  ],
                  "start": 1364,
                  "end": 1374
                },
                "definite": false,
                "start": 1358,
                "end": 1374
              }
            ],
            "declare": false,
            "start": 1354,
            "end": 1375
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
                  "name": "o13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1394,
                  "end": 1397
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1405,
                        "end": 1408
                      },
                      "start": 1402,
                      "end": 1408
                    }
                  ],
                  "start": 1400,
                  "end": 1410
                },
                "definite": false,
                "start": 1394,
                "end": 1410
              }
            ],
            "declare": false,
            "start": 1390,
            "end": 1411
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
                  "name": "o14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1434
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1442,
                        "end": 1443
                      },
                      "start": 1439,
                      "end": 1443
                    }
                  ],
                  "start": 1437,
                  "end": 1445
                },
                "definite": false,
                "start": 1431,
                "end": 1445
              }
            ],
            "declare": false,
            "start": 1427,
            "end": 1446
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
                  "name": "o15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1496
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1504,
                        "end": 1505
                      },
                      "start": 1501,
                      "end": 1505
                    }
                  ],
                  "start": 1499,
                  "end": 1507
                },
                "definite": false,
                "start": 1493,
                "end": 1507
              }
            ],
            "declare": false,
            "start": 1489,
            "end": 1508
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
                  "name": "o16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1551,
                  "end": 1554
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1562,
                        "end": 1563
                      },
                      "start": 1559,
                      "end": 1563
                    }
                  ],
                  "start": 1557,
                  "end": 1565
                },
                "definite": false,
                "start": 1551,
                "end": 1565
              }
            ],
            "declare": false,
            "start": 1547,
            "end": 1566
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
                  "name": "o17",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1586
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "literal_string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1594,
                        "end": 1608
                      },
                      "start": 1591,
                      "end": 1608
                    }
                  ],
                  "start": 1589,
                  "end": 1610
                },
                "definite": false,
                "start": 1583,
                "end": 1610
              }
            ],
            "declare": false,
            "start": 1579,
            "end": 1611
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
                  "name": "o18",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1630,
                  "end": 1633
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "literal_number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1641,
                        "end": 1655
                      },
                      "start": 1638,
                      "end": 1655
                    }
                  ],
                  "start": 1636,
                  "end": 1657
                },
                "definite": false,
                "start": 1630,
                "end": 1657
              }
            ],
            "declare": false,
            "start": 1626,
            "end": 1658
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
                  "name": "o19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1681
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1689,
                        "end": 1690
                      },
                      "start": 1686,
                      "end": 1690
                    }
                  ],
                  "start": 1684,
                  "end": 1692
                },
                "definite": false,
                "start": 1678,
                "end": 1692
              }
            ],
            "declare": false,
            "start": 1674,
            "end": 1693
          }
        ],
        "start": 72,
        "end": 1711
      },
      "expression": false,
      "start": 20,
      "end": 1711
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1711
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 20,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 83,
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
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 103,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "mapped_generic",
    "start": 140,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 202,
    "end": 204
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "union_generic",
    "start": 227,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "union_primitive",
    "start": 270,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
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
    "value": "number",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "intersection_generic",
    "start": 320,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "intersection_primitive",
    "start": 370,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 424,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 431,
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
    "value": "number",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 446,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "literal_string",
    "start": 472,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 488,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 499,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "literal_number",
    "start": 517,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 554,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 566,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Null",
    "value": "null",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Null",
    "value": "null",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 605,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 627,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 643,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 710,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 741,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 788,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 843,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 873,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "mapped_generic",
    "start": 887,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 943,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "o7",
    "start": 947,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 954,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "o8",
    "start": 1008,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "union_generic",
    "start": 1018,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "o9",
    "start": 1085,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "union_primitive",
    "start": 1095,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "o10",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "intersection_generic",
    "start": 1179,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "o11",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "intersection_primitive",
    "start": 1271,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1354,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "o12",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "o13",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "o14",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1439,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1489,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "o15",
    "start": 1493,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "o16",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1559,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "o17",
    "start": 1583,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "literal_string",
    "start": 1594,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1626,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "o18",
    "start": 1630,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "literal_number",
    "start": 1641,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1674,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "o19",
    "start": 1678,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1686,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  }
]
```

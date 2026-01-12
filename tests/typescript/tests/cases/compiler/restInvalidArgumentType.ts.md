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
                      "type": "TSIntersectionType",
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
                      "start": 433,
                      "end": 439
                    },
                    "start": 431,
                    "end": 439
                  },
                  "start": 427,
                  "end": 439
                },
                "init": null,
                "definite": true,
                "start": 427,
                "end": 439
              }
            ],
            "declare": false,
            "start": 423,
            "end": 440
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
                      "type": "TSStringKeyword",
                      "start": 455,
                      "end": 461
                    },
                    "start": 453,
                    "end": 461
                  },
                  "start": 449,
                  "end": 461
                },
                "init": null,
                "definite": true,
                "start": 449,
                "end": 461
              }
            ],
            "declare": false,
            "start": 445,
            "end": 462
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
                        "start": 487,
                        "end": 495
                      },
                      "start": 487,
                      "end": 495
                    },
                    "start": 485,
                    "end": 495
                  },
                  "start": 471,
                  "end": 495
                },
                "init": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 498,
                  "end": 506
                },
                "definite": false,
                "start": 471,
                "end": 506
              }
            ],
            "declare": false,
            "start": 467,
            "end": 507
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
                        "start": 532,
                        "end": 534
                      },
                      "start": 532,
                      "end": 534
                    },
                    "start": 530,
                    "end": 534
                  },
                  "start": 516,
                  "end": 534
                },
                "init": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 537,
                  "end": 539
                },
                "definite": false,
                "start": 516,
                "end": 539
              }
            ],
            "declare": false,
            "start": 512,
            "end": 540
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
                        "start": 552,
                        "end": 553
                      },
                      "typeArguments": null,
                      "start": 552,
                      "end": 553
                    },
                    "start": 550,
                    "end": 553
                  },
                  "start": 549,
                  "end": 553
                },
                "init": null,
                "definite": false,
                "start": 549,
                "end": 553
              }
            ],
            "declare": false,
            "start": 545,
            "end": 554
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
                      "start": 567,
                      "end": 576
                    },
                    "start": 565,
                    "end": 576
                  },
                  "start": 564,
                  "end": 576
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 588
                },
                "definite": false,
                "start": 564,
                "end": 588
              }
            ],
            "declare": false,
            "start": 560,
            "end": 589
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
                      "start": 601,
                      "end": 605
                    },
                    "start": 599,
                    "end": 605
                  },
                  "start": 598,
                  "end": 605
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 608,
                  "end": 612
                },
                "definite": false,
                "start": 598,
                "end": 612
              }
            ],
            "declare": false,
            "start": 594,
            "end": 613
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
                      "start": 626,
                      "end": 629
                    },
                    "start": 624,
                    "end": 629
                  },
                  "start": 623,
                  "end": 629
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 632,
                  "end": 633
                },
                "definite": false,
                "start": 623,
                "end": 633
              }
            ],
            "declare": false,
            "start": 619,
            "end": 634
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 648,
                        "end": 650
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 645,
                      "end": 650
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 651
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 656
                },
                "definite": false,
                "start": 644,
                "end": 656
              }
            ],
            "declare": false,
            "start": 640,
            "end": 657
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 706,
                        "end": 708
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 703,
                      "end": 708
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 709
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 712,
                  "end": 714
                },
                "definite": false,
                "start": 702,
                "end": 714
              }
            ],
            "declare": false,
            "start": 698,
            "end": 715
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 736,
                        "end": 738
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 733,
                      "end": 738
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 739
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 743
                },
                "definite": false,
                "start": 732,
                "end": 743
              }
            ],
            "declare": false,
            "start": 728,
            "end": 744
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 793
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 788,
                      "end": 793
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 794
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 797,
                  "end": 798
                },
                "definite": false,
                "start": 787,
                "end": 798
              }
            ],
            "declare": false,
            "start": 783,
            "end": 799
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 837,
                        "end": 839
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 834,
                      "end": 839
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 833,
                  "end": 840
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 843,
                  "end": 844
                },
                "definite": false,
                "start": 833,
                "end": 844
              }
            ],
            "declare": false,
            "start": 829,
            "end": 845
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 877,
                        "end": 879
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 874,
                      "end": 879
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 880
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapped_generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 897
                },
                "definite": false,
                "start": 873,
                "end": 897
              }
            ],
            "declare": false,
            "start": 869,
            "end": 898
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 948,
                        "end": 950
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 945,
                      "end": 950
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 951
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 960
                },
                "definite": false,
                "start": 944,
                "end": 960
              }
            ],
            "declare": false,
            "start": 940,
            "end": 961
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r8",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1007,
                        "end": 1009
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1004,
                      "end": 1009
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1003,
                  "end": 1010
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "union_generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1026
                },
                "definite": false,
                "start": 1003,
                "end": 1026
              }
            ],
            "declare": false,
            "start": 999,
            "end": 1027
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1085,
                        "end": 1087
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1082,
                      "end": 1087
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1088
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "union_primitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1091,
                  "end": 1106
                },
                "definite": false,
                "start": 1081,
                "end": 1106
              }
            ],
            "declare": false,
            "start": 1077,
            "end": 1107
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1166,
                        "end": 1169
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1163,
                      "end": 1169
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1162,
                  "end": 1170
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "intersection_generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1193
                },
                "definite": false,
                "start": 1162,
                "end": 1193
              }
            ],
            "declare": false,
            "start": 1158,
            "end": 1194
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1259,
                        "end": 1262
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1256,
                      "end": 1262
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1263
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "intersection_primitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1288
                },
                "definite": false,
                "start": 1255,
                "end": 1288
              }
            ],
            "declare": false,
            "start": 1251,
            "end": 1289
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r12",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1355,
                        "end": 1358
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1352,
                      "end": 1358
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1351,
                  "end": 1359
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1365
                },
                "definite": false,
                "start": 1351,
                "end": 1365
              }
            ],
            "declare": false,
            "start": 1347,
            "end": 1366
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r13",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1389,
                        "end": 1392
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1386,
                      "end": 1392
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1385,
                  "end": 1393
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1396,
                  "end": 1399
                },
                "definite": false,
                "start": 1385,
                "end": 1399
              }
            ],
            "declare": false,
            "start": 1381,
            "end": 1400
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r14",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1424,
                        "end": 1427
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1421,
                      "end": 1427
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1420,
                  "end": 1428
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1432
                },
                "definite": false,
                "start": 1420,
                "end": 1432
              }
            ],
            "declare": false,
            "start": 1416,
            "end": 1433
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r15",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1484,
                        "end": 1487
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1481,
                      "end": 1487
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1480,
                  "end": 1488
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1491,
                  "end": 1492
                },
                "definite": false,
                "start": 1480,
                "end": 1492
              }
            ],
            "declare": false,
            "start": 1476,
            "end": 1493
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r16",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1540,
                        "end": 1543
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1537,
                      "end": 1543
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1536,
                  "end": 1544
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "definite": false,
                "start": 1536,
                "end": 1548
              }
            ],
            "declare": false,
            "start": 1532,
            "end": 1549
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1570,
                        "end": 1573
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1567,
                      "end": 1573
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1566,
                  "end": 1574
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal_string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1577,
                  "end": 1591
                },
                "definite": false,
                "start": 1566,
                "end": 1591
              }
            ],
            "declare": false,
            "start": 1562,
            "end": 1592
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1615,
                        "end": 1618
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1612,
                      "end": 1618
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1611,
                  "end": 1619
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal_number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1622,
                  "end": 1636
                },
                "definite": false,
                "start": 1611,
                "end": 1636
              }
            ],
            "declare": false,
            "start": 1607,
            "end": 1637
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r19",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1661,
                        "end": 1664
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1658,
                      "end": 1664
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1657,
                  "end": 1665
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1668,
                  "end": 1669
                },
                "definite": false,
                "start": 1657,
                "end": 1669
              }
            ],
            "declare": false,
            "start": 1653,
            "end": 1670
          }
        ],
        "start": 72,
        "end": 1688
      },
      "expression": false,
      "start": 20,
      "end": 1688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1688
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
    "value": "&",
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
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "literal_string",
    "start": 471,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 487,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 498,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "literal_number",
    "start": 516,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 545,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 567,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 579,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Null",
    "value": "null",
    "start": 601,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Null",
    "value": "null",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 619,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "any",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 728,
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
    "value": "...",
    "start": 733,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 736,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 834,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 869,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 874,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "mapped_generic",
    "start": 883,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 940,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 945,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 954,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "union_generic",
    "start": 1013,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1077,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 1085,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "union_primitive",
    "start": 1091,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1158,
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
    "value": "...",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 1166,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "intersection_generic",
    "start": 1173,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 1259,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "intersection_primitive",
    "start": 1266,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 1355,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1381,
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
    "value": "...",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1396,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1416,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1481,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 1484,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1532,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1537,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 1540,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 1570,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "literal_string",
    "start": 1577,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "literal_number",
    "start": 1622,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1653,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "r19",
    "start": 1661,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1687,
    "end": 1688
  }
]
```

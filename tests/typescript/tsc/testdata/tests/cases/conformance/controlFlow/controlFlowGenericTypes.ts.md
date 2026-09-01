__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 31,
                  "end": 40
                }
              ],
              "start": 22,
              "end": 40
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 40
          }
        ],
        "start": 11,
        "end": 41
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
                "start": 45,
                "end": 46
              },
              "typeArguments": null,
              "start": 45,
              "end": 46
            },
            "start": 43,
            "end": 46
          },
          "start": 42,
          "end": 46
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "start": 53,
                    "end": 54
                  },
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
                        "start": 56,
                        "end": 57
                      },
                      "typeArguments": null,
                      "start": 56,
                      "end": 57
                    },
                    "start": 54,
                    "end": 57
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 53,
                  "end": 57
                }
              ],
              "start": 51,
              "end": 59
            },
            "start": 49,
            "end": 59
          },
          "start": 48,
          "end": 59
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "start": 65,
                    "end": 66
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 66
                }
              ],
              "start": 64,
              "end": 67
            },
            "start": 62,
            "end": 67
          },
          "start": 61,
          "end": 67
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        },
        "start": 68,
        "end": 76
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "directive": null,
                  "start": 100,
                  "end": 102
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 112
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 119
                    },
                    "optional": false,
                    "computed": false,
                    "start": 111,
                    "end": 119
                  },
                  "directive": null,
                  "start": 111,
                  "end": 120
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 137
                  },
                  "start": 129,
                  "end": 138
                }
              ],
              "start": 90,
              "end": 144
            },
            "alternate": null,
            "start": 83,
            "end": 144
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "optional": false,
              "computed": false,
              "start": 153,
              "end": 156
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 168,
                      "end": 171
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 178
                    },
                    "optional": false,
                    "computed": false,
                    "start": 168,
                    "end": 178
                  },
                  "directive": null,
                  "start": 168,
                  "end": 179
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 196
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "optional": false,
                    "computed": false,
                    "start": 195,
                    "end": 198
                  },
                  "start": 188,
                  "end": 199
                }
              ],
              "start": 158,
              "end": 205
            },
            "alternate": null,
            "start": 149,
            "end": 205
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 216,
                "end": 217
              },
              "optional": false,
              "computed": true,
              "start": 214,
              "end": 218
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 231
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 232,
                        "end": 233
                      },
                      "optional": false,
                      "computed": true,
                      "start": 230,
                      "end": 234
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 241
                    },
                    "optional": false,
                    "computed": false,
                    "start": 230,
                    "end": 241
                  },
                  "directive": null,
                  "start": 230,
                  "end": 242
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 260,
                      "end": 261
                    },
                    "optional": false,
                    "computed": true,
                    "start": 258,
                    "end": 262
                  },
                  "start": 251,
                  "end": 263
                }
              ],
              "start": 220,
              "end": 269
            },
            "alternate": null,
            "start": 210,
            "end": 269
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 281,
              "end": 288
            },
            "start": 274,
            "end": 289
          }
        ],
        "start": 77,
        "end": 291
      },
      "expression": false,
      "start": 0,
      "end": 291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 304
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
              "start": 305,
              "end": 306
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 305,
            "end": 306
          }
        ],
        "start": 304,
        "end": 307
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 318
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
                          "start": 319,
                          "end": 320
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 320
                      },
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 322,
                            "end": 328
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 331,
                            "end": 340
                          }
                        ],
                        "start": 322,
                        "end": 340
                      }
                    ],
                    "start": 318,
                    "end": 341
                  },
                  "start": 311,
                  "end": 341
                },
                {
                  "type": "TSNullKeyword",
                  "start": 344,
                  "end": 348
                }
              ],
              "start": 311,
              "end": 348
            },
            "start": 309,
            "end": 348
          },
          "start": 308,
          "end": 348
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 351,
          "end": 357
        },
        "start": 349,
        "end": 357
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 382
                  },
                  "directive": null,
                  "start": 381,
                  "end": 383
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 393
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 400
                    },
                    "optional": false,
                    "computed": false,
                    "start": 392,
                    "end": 400
                  },
                  "directive": null,
                  "start": 392,
                  "end": 401
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "start": 410,
                  "end": 419
                }
              ],
              "start": 371,
              "end": 425
            },
            "alternate": null,
            "start": 364,
            "end": 425
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 437,
              "end": 444
            },
            "start": 430,
            "end": 445
          }
        ],
        "start": 358,
        "end": 447
      },
      "expression": false,
      "start": 293,
      "end": 447
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          }
        ],
        "start": 462,
        "end": 465
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 476
            },
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
                  "start": 478,
                  "end": 479
                },
                "typeArguments": null,
                "start": 478,
                "end": 479
              },
              "start": 476,
              "end": 479
            },
            "accessibility": null,
            "static": false,
            "start": 472,
            "end": 480
          }
        ],
        "start": 466,
        "end": 482
      },
      "declare": false,
      "start": 449,
      "end": 482
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 506
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
              "type": "TSAnyKeyword",
              "start": 510,
              "end": 513
            },
            "start": 508,
            "end": 513
          },
          "start": 507,
          "end": 513
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 517
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 524
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 525,
                    "end": 532
                  }
                ],
                "start": 524,
                "end": 533
              },
              "start": 521,
              "end": 533
            },
            "start": 521,
            "end": 533
          },
          "start": 516,
          "end": 533
        },
        "start": 514,
        "end": 533
      },
      "body": null,
      "expression": false,
      "start": 484,
      "end": 534
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 563
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
              "type": "TSUnknownKeyword",
              "start": 567,
              "end": 574
            },
            "start": 565,
            "end": 574
          },
          "start": 564,
          "end": 574
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 578
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 582,
              "end": 591
            },
            "start": 582,
            "end": 591
          },
          "start": 577,
          "end": 591
        },
        "start": 575,
        "end": 591
      },
      "body": null,
      "expression": false,
      "start": 535,
      "end": 592
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 615
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
              "start": 616,
              "end": 617
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 616,
            "end": 617
          }
        ],
        "start": 615,
        "end": 618
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
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 625
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
                      "start": 626,
                      "end": 627
                    },
                    "typeArguments": null,
                    "start": 626,
                    "end": 627
                  }
                ],
                "start": 625,
                "end": 628
              },
              "start": 622,
              "end": 628
            },
            "start": 620,
            "end": 628
          },
          "start": 619,
          "end": 628
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
            "start": 631,
            "end": 632
          },
          "typeArguments": null,
          "start": 631,
          "end": 632
        },
        "start": 629,
        "end": 632
      },
      "body": null,
      "expression": false,
      "start": 593,
      "end": 633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 646
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
              "start": 647,
              "end": 648
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 660
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
                          "start": 661,
                          "end": 662
                        },
                        "typeArguments": null,
                        "start": 661,
                        "end": 662
                      }
                    ],
                    "start": 660,
                    "end": 663
                  },
                  "start": 657,
                  "end": 663
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 666,
                  "end": 675
                }
              ],
              "start": 657,
              "end": 675
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 647,
            "end": 675
          }
        ],
        "start": 646,
        "end": 676
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
                "start": 680,
                "end": 681
              },
              "typeArguments": null,
              "start": 680,
              "end": 681
            },
            "start": 678,
            "end": 681
          },
          "start": 677,
          "end": 681
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isBox",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 698
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                }
              ],
              "optional": false,
              "start": 693,
              "end": 701
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 713,
                      "end": 718
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 720
                      }
                    ],
                    "optional": false,
                    "start": 713,
                    "end": 721
                  },
                  "directive": null,
                  "start": 713,
                  "end": 722
                }
              ],
              "start": 703,
              "end": 728
            },
            "alternate": null,
            "start": 689,
            "end": 728
          }
        ],
        "start": 683,
        "end": 730
      },
      "expression": false,
      "start": 635,
      "end": 730
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 743
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
              "start": 744,
              "end": 745
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 757
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
                          "start": 758,
                          "end": 759
                        },
                        "typeArguments": null,
                        "start": 758,
                        "end": 759
                      }
                    ],
                    "start": 757,
                    "end": 760
                  },
                  "start": 754,
                  "end": 760
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 763,
                  "end": 772
                }
              ],
              "start": 754,
              "end": 772
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 744,
            "end": 772
          }
        ],
        "start": 743,
        "end": 773
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
                "start": 777,
                "end": 778
              },
              "typeArguments": null,
              "start": 777,
              "end": 778
            },
            "start": 775,
            "end": 778
          },
          "start": 774,
          "end": 778
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 802
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 804
                  }
                ],
                "optional": false,
                "start": 791,
                "end": 805
              },
              "prefix": true,
              "start": 790,
              "end": 805
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 822
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 824
                      }
                    ],
                    "optional": false,
                    "start": 817,
                    "end": 825
                  },
                  "directive": null,
                  "start": 817,
                  "end": 826
                }
              ],
              "start": 807,
              "end": 832
            },
            "alternate": null,
            "start": 786,
            "end": 832
          }
        ],
        "start": 780,
        "end": 834
      },
      "expression": false,
      "start": 732,
      "end": 834
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 847
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
              "start": 848,
              "end": 849
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 861
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
                          "start": 862,
                          "end": 863
                        },
                        "typeArguments": null,
                        "start": 862,
                        "end": 863
                      }
                    ],
                    "start": 861,
                    "end": 864
                  },
                  "start": 858,
                  "end": 864
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 867,
                  "end": 876
                }
              ],
              "start": 858,
              "end": 876
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 848,
            "end": 876
          }
        ],
        "start": 847,
        "end": 877
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
                "start": 881,
                "end": 882
              },
              "typeArguments": null,
              "start": 881,
              "end": 882
            },
            "start": 879,
            "end": 882
          },
          "start": 878,
          "end": 882
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 895,
                  "end": 900
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 901,
                    "end": 902
                  }
                ],
                "optional": false,
                "start": 895,
                "end": 903
              },
              "prefix": true,
              "start": 894,
              "end": 903
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 915,
                      "end": 920
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 921,
                        "end": 922
                      }
                    ],
                    "optional": false,
                    "start": 915,
                    "end": 923
                  },
                  "directive": null,
                  "start": 915,
                  "end": 924
                }
              ],
              "start": 905,
              "end": 940
            },
            "alternate": null,
            "start": 890,
            "end": 940
          }
        ],
        "start": 884,
        "end": 942
      },
      "expression": false,
      "start": 836,
      "end": 942
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 953,
        "end": 955
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
              "start": 956,
              "end": 957
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 969
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
                          "start": 970,
                          "end": 971
                        },
                        "typeArguments": null,
                        "start": 970,
                        "end": 971
                      }
                    ],
                    "start": 969,
                    "end": 972
                  },
                  "start": 966,
                  "end": 972
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 975,
                  "end": 984
                }
              ],
              "start": 966,
              "end": 984
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 956,
            "end": 984
          }
        ],
        "start": 955,
        "end": 985
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
                "start": 989,
                "end": 990
              },
              "typeArguments": null,
              "start": 989,
              "end": 990
            },
            "start": 987,
            "end": 990
          },
          "start": 986,
          "end": 990
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1013
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1015
                }
              ],
              "optional": false,
              "start": 1002,
              "end": 1016
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1028,
                      "end": 1033
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1034,
                        "end": 1035
                      }
                    ],
                    "optional": false,
                    "start": 1028,
                    "end": 1036
                  },
                  "directive": null,
                  "start": 1028,
                  "end": 1037
                }
              ],
              "start": 1018,
              "end": 1053
            },
            "alternate": null,
            "start": 998,
            "end": 1053
          }
        ],
        "start": 992,
        "end": 1055
      },
      "expression": false,
      "start": 944,
      "end": 1055
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 1096,
        "end": 1101
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 1107,
                "end": 1110
              },
              "start": 1107,
              "end": 1110
            },
            "start": 1105,
            "end": 1110
          },
          "start": 1102,
          "end": 1110
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1113,
          "end": 1117
        },
        "start": 1111,
        "end": 1117
      },
      "body": null,
      "expression": false,
      "start": 1079,
      "end": 1118
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bounceAndTakeIfA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1135,
          "end": 1151
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
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1152,
                "end": 1154
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 1163,
                      "end": 1166
                    },
                    "start": 1163,
                    "end": 1166
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1169,
                      "end": 1172
                    },
                    "start": 1169,
                    "end": 1172
                  }
                ],
                "start": 1163,
                "end": 1172
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1152,
              "end": 1172
            }
          ],
          "start": 1151,
          "end": 1173
        },
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
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1181,
                  "end": 1183
                },
                "typeArguments": null,
                "start": 1181,
                "end": 1183
              },
              "start": 1179,
              "end": 1183
            },
            "start": 1174,
            "end": 1183
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1188
            },
            "typeArguments": null,
            "start": 1186,
            "end": 1188
          },
          "start": 1184,
          "end": 1188
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1204
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 1209,
                  "end": 1212
                },
                "start": 1199,
                "end": 1212
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "takeA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1224,
                        "end": 1229
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1230,
                          "end": 1235
                        }
                      ],
                      "optional": false,
                      "start": 1224,
                      "end": 1236
                    },
                    "directive": null,
                    "start": 1224,
                    "end": 1237
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1253,
                      "end": 1258
                    },
                    "start": 1246,
                    "end": 1259
                  }
                ],
                "start": 1214,
                "end": 1265
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1297
                    },
                    "start": 1285,
                    "end": 1298
                  }
                ],
                "start": 1275,
                "end": 1304
              },
              "start": 1195,
              "end": 1304
            }
          ],
          "start": 1189,
          "end": 1306
        },
        "expression": false,
        "start": 1126,
        "end": 1306
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1119,
      "end": 1306
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Common",
        "optional": false,
        "typeAnnotation": null,
        "start": 1335,
        "end": 1341
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1348
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1350,
                "end": 1356
              },
              "start": 1348,
              "end": 1356
            },
            "accessibility": null,
            "static": false,
            "start": 1346,
            "end": 1356
          }
        ],
        "start": 1344,
        "end": 1358
      },
      "declare": false,
      "start": 1330,
      "end": 1359
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 1365,
        "end": 1367
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 1372,
              "end": 1375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 1377,
                  "end": 1380
                },
                "start": 1377,
                "end": 1380
              },
              "start": 1375,
              "end": 1380
            },
            "accessibility": null,
            "static": false,
            "start": 1372,
            "end": 1381
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1382,
              "end": 1384
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1386,
                "end": 1392
              },
              "start": 1384,
              "end": 1392
            },
            "accessibility": null,
            "static": false,
            "start": 1382,
            "end": 1392
          }
        ],
        "start": 1370,
        "end": 1394
      },
      "declare": false,
      "start": 1360,
      "end": 1395
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1401,
        "end": 1403
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1411
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 1413,
                  "end": 1416
                },
                "start": 1413,
                "end": 1416
              },
              "start": 1411,
              "end": 1416
            },
            "accessibility": null,
            "static": false,
            "start": 1408,
            "end": 1417
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1420
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1422,
                "end": 1428
              },
              "start": 1420,
              "end": 1428
            },
            "accessibility": null,
            "static": false,
            "start": 1418,
            "end": 1429
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1435,
                "end": 1441
              },
              "start": 1433,
              "end": 1441
            },
            "accessibility": null,
            "static": false,
            "start": 1430,
            "end": 1441
          }
        ],
        "start": 1406,
        "end": 1443
      },
      "declare": false,
      "start": 1396,
      "end": 1444
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1458
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1461,
              "end": 1463
            },
            "typeArguments": null,
            "start": 1461,
            "end": 1463
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1468
            },
            "typeArguments": null,
            "start": 1466,
            "end": 1468
          }
        ],
        "start": 1461,
        "end": 1468
      },
      "declare": false,
      "start": 1446,
      "end": 1469
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1479
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1490,
                      "end": 1497
                    },
                    "typeArguments": null,
                    "start": 1490,
                    "end": 1497
                  },
                  "start": 1488,
                  "end": 1497
                },
                "start": 1483,
                "end": 1497
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1513
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1514,
                      "end": 1517
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1508,
                    "end": 1517
                  },
                  "directive": null,
                  "start": 1508,
                  "end": 1518
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1537,
                      "end": 1542
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1546,
                      "end": 1551
                    },
                    "start": 1537,
                    "end": 1551
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1563,
                            "end": 1568
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1569,
                            "end": 1572
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1563,
                          "end": 1572
                        },
                        "directive": null,
                        "start": 1563,
                        "end": 1573
                      }
                    ],
                    "start": 1553,
                    "end": 1579
                  },
                  "alternate": null,
                  "start": 1533,
                  "end": 1579
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1588,
                        "end": 1593
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1594,
                        "end": 1597
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1588,
                      "end": 1597
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1602,
                      "end": 1605
                    },
                    "start": 1588,
                    "end": 1605
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1617,
                            "end": 1622
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1623,
                            "end": 1626
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1617,
                          "end": 1626
                        },
                        "directive": null,
                        "start": 1617,
                        "end": 1627
                      }
                    ],
                    "start": 1607,
                    "end": 1633
                  },
                  "alternate": null,
                  "start": 1584,
                  "end": 1633
                }
              ],
              "start": 1502,
              "end": 1635
            },
            "id": null,
            "generator": false,
            "start": 1482,
            "end": 1635
          },
          "definite": false,
          "start": 1477,
          "end": 1635
        }
      ],
      "declare": false,
      "start": 1471,
      "end": 1636
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1644,
            "end": 1647
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
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
                    "start": 1651,
                    "end": 1652
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1661,
                      "end": 1668
                    },
                    "typeArguments": null,
                    "start": 1661,
                    "end": 1668
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1651,
                  "end": 1668
                }
              ],
              "start": 1650,
              "end": 1669
            },
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
                      "start": 1677,
                      "end": 1678
                    },
                    "typeArguments": null,
                    "start": 1677,
                    "end": 1678
                  },
                  "start": 1675,
                  "end": 1678
                },
                "start": 1670,
                "end": 1678
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1688
                },
                "typeArguments": null,
                "start": 1681,
                "end": 1688
              },
              "start": 1679,
              "end": 1688
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1698,
                      "end": 1703
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1704,
                      "end": 1707
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1698,
                    "end": 1707
                  },
                  "directive": null,
                  "start": 1698,
                  "end": 1708
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1727,
                      "end": 1732
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1736,
                      "end": 1741
                    },
                    "start": 1727,
                    "end": 1741
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1753,
                            "end": 1758
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1759,
                            "end": 1762
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1753,
                          "end": 1762
                        },
                        "directive": null,
                        "start": 1753,
                        "end": 1763
                      }
                    ],
                    "start": 1743,
                    "end": 1769
                  },
                  "alternate": null,
                  "start": 1723,
                  "end": 1769
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1778,
                        "end": 1783
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1784,
                        "end": 1787
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1778,
                      "end": 1787
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1792,
                      "end": 1795
                    },
                    "start": 1778,
                    "end": 1795
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1807,
                            "end": 1812
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1813,
                            "end": 1816
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1807,
                          "end": 1816
                        },
                        "directive": null,
                        "start": 1807,
                        "end": 1817
                      }
                    ],
                    "start": 1797,
                    "end": 1823
                  },
                  "alternate": null,
                  "start": 1774,
                  "end": 1823
                }
              ],
              "start": 1692,
              "end": 1825
            },
            "id": null,
            "generator": false,
            "start": 1650,
            "end": 1825
          },
          "definite": false,
          "start": 1644,
          "end": 1825
        }
      ],
      "declare": false,
      "start": 1638,
      "end": 1826
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1855,
        "end": 1857
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
              "name": "testable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1866,
              "end": 1874
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1876,
                  "end": 1880
                },
                "start": 1876,
                "end": 1880
              },
              "start": 1874,
              "end": 1880
            },
            "accessibility": null,
            "static": false,
            "start": 1866,
            "end": 1880
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doTest",
              "optional": false,
              "typeAnnotation": null,
              "start": 1885,
              "end": 1891
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1899,
                    "end": 1903
                  },
                  "start": 1896,
                  "end": 1903
                },
                "start": 1893,
                "end": 1903
              },
              "start": 1891,
              "end": 1903
            },
            "accessibility": null,
            "static": false,
            "start": 1885,
            "end": 1903
          }
        ],
        "start": 1860,
        "end": 1905
      },
      "declare": false,
      "start": 1850,
      "end": 1905
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1911,
        "end": 1913
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
              "name": "testable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1922,
              "end": 1930
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1932,
                  "end": 1937
                },
                "start": 1932,
                "end": 1937
              },
              "start": 1930,
              "end": 1937
            },
            "accessibility": null,
            "static": false,
            "start": 1922,
            "end": 1937
          }
        ],
        "start": 1916,
        "end": 1939
      },
      "declare": false,
      "start": 1906,
      "end": 1940
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 1947,
        "end": 1952
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1955,
              "end": 1957
            },
            "typeArguments": null,
            "start": 1955,
            "end": 1957
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1962
            },
            "typeArguments": null,
            "start": 1960,
            "end": 1962
          }
        ],
        "start": 1955,
        "end": 1962
      },
      "declare": false,
      "start": 1942,
      "end": 1962
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notWorking",
        "optional": false,
        "typeAnnotation": null,
        "start": 1973,
        "end": 1983
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
              "start": 1984,
              "end": 1985
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 1994,
                "end": 1999
              },
              "typeArguments": null,
              "start": 1994,
              "end": 1999
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1984,
            "end": 1999
          }
        ],
        "start": 1983,
        "end": 2000
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
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
                "start": 2009,
                "end": 2010
              },
              "typeArguments": null,
              "start": 2009,
              "end": 2010
            },
            "start": 2007,
            "end": 2010
          },
          "start": 2001,
          "end": 2010
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2029
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "testable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2030,
                  "end": 2038
                },
                "optional": false,
                "computed": false,
                "start": 2023,
                "end": 2038
              },
              "prefix": true,
              "start": 2022,
              "end": 2038
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 2040,
              "end": 2047
            },
            "alternate": null,
            "start": 2018,
            "end": 2047
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
                  "name": "object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2052,
                  "end": 2058
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doTest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2059,
                  "end": 2065
                },
                "optional": false,
                "computed": false,
                "start": 2052,
                "end": 2065
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2052,
              "end": 2067
            },
            "directive": null,
            "start": 2052,
            "end": 2068
          }
        ],
        "start": 2012,
        "end": 2070
      },
      "expression": false,
      "start": 1964,
      "end": 2070
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2104,
        "end": 2105
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2112,
              "end": 2113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2115,
                    "end": 2121
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2124,
                    "end": 2128
                  }
                ],
                "start": 2115,
                "end": 2128
              },
              "start": 2113,
              "end": 2128
            },
            "accessibility": null,
            "static": false,
            "start": 2112,
            "end": 2129
          }
        ],
        "start": 2106,
        "end": 2131
      },
      "declare": false,
      "start": 2094,
      "end": 2131
    },
    {
      "type": "EmptyStatement",
      "start": 2131,
      "end": 2132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null,
        "start": 2143,
        "end": 2146
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
              "start": 2147,
              "end": 2148
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2163,
                  "end": 2164
                },
                "typeArguments": null,
                "start": 2163,
                "end": 2164
              },
              "start": 2157,
              "end": 2164
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2147,
            "end": 2164
          }
        ],
        "start": 2146,
        "end": 2165
      },
      "params": [
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
                "start": 2171,
                "end": 2172
              },
              "typeArguments": null,
              "start": 2171,
              "end": 2172
            },
            "start": 2169,
            "end": 2172
          },
          "start": 2166,
          "end": 2172
        },
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2179,
                "end": 2180
              },
              "typeArguments": null,
              "start": 2179,
              "end": 2180
            },
            "start": 2177,
            "end": 2180
          },
          "start": 2174,
          "end": 2180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2183,
          "end": 2189
        },
        "start": 2181,
        "end": 2189
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2202,
                  "end": 2207
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2210,
                    "end": 2213
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2214,
                    "end": 2217
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2210,
                  "end": 2218
                },
                "definite": false,
                "start": 2202,
                "end": 2218
              }
            ],
            "declare": false,
            "start": 2196,
            "end": 2219
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2228,
                "end": 2233
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2238,
                "end": 2242
              },
              "start": 2228,
              "end": 2242
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2261,
                    "end": 2266
                  },
                  "start": 2254,
                  "end": 2267
                }
              ],
              "start": 2244,
              "end": 2273
            },
            "alternate": null,
            "start": 2224,
            "end": 2273
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2285,
              "end": 2286
            },
            "start": 2278,
            "end": 2287
          }
        ],
        "start": 2190,
        "end": 2289
      },
      "expression": false,
      "start": 2134,
      "end": 2289
    },
    {
      "type": "EmptyStatement",
      "start": 2289,
      "end": 2290
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventEmitter",
        "optional": false,
        "typeAnnotation": null,
        "start": 2320,
        "end": 2332
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ET",
              "optional": false,
              "typeAnnotation": null,
              "start": 2333,
              "end": 2335
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2333,
            "end": 2335
          }
        ],
        "start": 2332,
        "end": 2336
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
              "name": "off",
              "optional": false,
              "typeAnnotation": null,
              "start": 2343,
              "end": 2346
            },
            "value": {
              "type": "FunctionExpression",
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2347,
                      "end": 2348
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ET",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2363,
                          "end": 2365
                        },
                        "typeArguments": null,
                        "start": 2363,
                        "end": 2365
                      },
                      "start": 2357,
                      "end": 2365
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2347,
                    "end": 2365
                  }
                ],
                "start": 2346,
                "end": 2366
              },
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
                    "start": 2370,
                    "end": 2374
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2377,
                                "end": 2378
                              },
                              "typeArguments": null,
                              "start": 2377,
                              "end": 2378
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 2380,
                              "end": 2386
                            }
                          ],
                          "start": 2376,
                          "end": 2387
                        },
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSUnknownKeyword",
                              "start": 2391,
                              "end": 2398
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 2400,
                              "end": 2406
                            }
                          ],
                          "start": 2390,
                          "end": 2407
                        }
                      ],
                      "start": 2376,
                      "end": 2407
                    },
                    "start": 2374,
                    "end": 2407
                  },
                  "value": null,
                  "start": 2367,
                  "end": 2407
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2409,
                  "end": 2413
                },
                "start": 2408,
                "end": 2413
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2414,
                "end": 2416
              },
              "expression": false,
              "start": 2346,
              "end": 2416
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2343,
            "end": 2416
          }
        ],
        "start": 2337,
        "end": 2418
      },
      "abstract": false,
      "declare": false,
      "start": 2314,
      "end": 2418
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "once",
        "optional": false,
        "typeAnnotation": null,
        "start": 2428,
        "end": 2432
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
              "name": "ET",
              "optional": false,
              "typeAnnotation": null,
              "start": 2433,
              "end": 2435
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2433,
            "end": 2435
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2437,
              "end": 2438
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventEmitter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2447,
                "end": 2459
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ET",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2460,
                      "end": 2462
                    },
                    "typeArguments": null,
                    "start": 2460,
                    "end": 2462
                  }
                ],
                "start": 2459,
                "end": 2463
              },
              "start": 2447,
              "end": 2463
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2437,
            "end": 2463
          }
        ],
        "start": 2432,
        "end": 2464
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "emittingObject",
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
                "start": 2481,
                "end": 2482
              },
              "typeArguments": null,
              "start": 2481,
              "end": 2482
            },
            "start": 2479,
            "end": 2482
          },
          "start": 2465,
          "end": 2482
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "eventName",
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
                  "name": "ET",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2501,
                  "end": 2503
                },
                "typeArguments": null,
                "start": 2501,
                "end": 2503
              },
              "start": 2495,
              "end": 2503
            },
            "start": 2493,
            "end": 2503
          },
          "start": 2484,
          "end": 2503
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2506,
          "end": 2510
        },
        "start": 2504,
        "end": 2510
      },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "emittingObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2517,
                  "end": 2531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "off",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2532,
                  "end": 2535
                },
                "optional": false,
                "computed": false,
                "start": 2517,
                "end": 2535
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "eventName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2536,
                  "end": 2545
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2547,
                  "end": 2548
                }
              ],
              "optional": false,
              "start": 2517,
              "end": 2549
            },
            "directive": null,
            "start": 2517,
            "end": 2550
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
                  "name": "emittingObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2555,
                  "end": 2569
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "off",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2570,
                  "end": 2573
                },
                "optional": false,
                "computed": false,
                "start": 2555,
                "end": 2573
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "eventName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2574,
                    "end": 2583
                  },
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "eventName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2594,
                      "end": 2603
                    },
                    "typeArguments": null,
                    "start": 2587,
                    "end": 2603
                  },
                  "start": 2574,
                  "end": 2603
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2605,
                  "end": 2606
                }
              ],
              "optional": false,
              "start": 2555,
              "end": 2607
            },
            "directive": null,
            "start": 2555,
            "end": 2608
          }
        ],
        "start": 2511,
        "end": 2610
      },
      "expression": false,
      "start": 2419,
      "end": 2610
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2905,
        "end": 2908
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
              "start": 2909,
              "end": 2910
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2909,
            "end": 2910
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2912,
              "end": 2913
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
                  "start": 2928,
                  "end": 2929
                },
                "typeArguments": null,
                "start": 2928,
                "end": 2929
              },
              "start": 2922,
              "end": 2929
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2912,
            "end": 2929
          }
        ],
        "start": 2908,
        "end": 2930
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
                "start": 2936,
                "end": 2937
              },
              "typeArguments": null,
              "start": 2936,
              "end": 2937
            },
            "start": 2934,
            "end": 2937
          },
          "start": 2931,
          "end": 2937
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
                "start": 2944,
                "end": 2945
              },
              "typeArguments": null,
              "start": 2944,
              "end": 2945
            },
            "start": 2942,
            "end": 2945
          },
          "start": 2939,
          "end": 2945
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2959,
                  "end": 2961
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2964,
                    "end": 2967
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2968,
                    "end": 2971
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2964,
                  "end": 2972
                },
                "definite": false,
                "start": 2959,
                "end": 2972
              }
            ],
            "declare": false,
            "start": 2953,
            "end": 2973
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2984,
                  "end": 2986
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2989,
                    "end": 2992
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2996,
                      "end": 2999
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3000,
                      "end": 3003
                    },
                    "optional": false,
                    "computed": true,
                    "start": 2996,
                    "end": 3004
                  },
                  "start": 2989,
                  "end": 3004
                },
                "definite": false,
                "start": 2984,
                "end": 3004
              }
            ],
            "declare": false,
            "start": 2978,
            "end": 3005
          }
        ],
        "start": 2947,
        "end": 3007
      },
      "expression": false,
      "start": 2896,
      "end": 3007
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3018,
        "end": 3021
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
              "start": 3022,
              "end": 3023
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3032,
                "end": 3038
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                        "start": 3045,
                        "end": 3046
                      },
                      "typeArguments": null,
                      "start": 3045,
                      "end": 3046
                    },
                    "start": 3039,
                    "end": 3046
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3048,
                    "end": 3054
                  }
                ],
                "start": 3038,
                "end": 3055
              },
              "start": 3032,
              "end": 3055
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3022,
            "end": 3055
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3057,
              "end": 3058
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
                  "start": 3073,
                  "end": 3074
                },
                "typeArguments": null,
                "start": 3073,
                "end": 3074
              },
              "start": 3067,
              "end": 3074
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3057,
            "end": 3074
          }
        ],
        "start": 3021,
        "end": 3075
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
                "start": 3081,
                "end": 3082
              },
              "typeArguments": null,
              "start": 3081,
              "end": 3082
            },
            "start": 3079,
            "end": 3082
          },
          "start": 3076,
          "end": 3082
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
                "start": 3089,
                "end": 3090
              },
              "typeArguments": null,
              "start": 3089,
              "end": 3090
            },
            "start": 3087,
            "end": 3090
          },
          "start": 3084,
          "end": 3090
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3104,
                  "end": 3106
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3109,
                    "end": 3112
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3113,
                    "end": 3116
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3109,
                  "end": 3117
                },
                "definite": false,
                "start": 3104,
                "end": 3117
              }
            ],
            "declare": false,
            "start": 3098,
            "end": 3118
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3129,
                  "end": 3131
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3134,
                    "end": 3137
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3141,
                      "end": 3144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3145,
                      "end": 3148
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3141,
                    "end": 3149
                  },
                  "start": 3134,
                  "end": 3149
                },
                "definite": false,
                "start": 3129,
                "end": 3149
              }
            ],
            "declare": false,
            "start": 3123,
            "end": 3150
          }
        ],
        "start": 3092,
        "end": 3152
      },
      "expression": false,
      "start": 3009,
      "end": 3152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3163,
        "end": 3166
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
              "start": 3167,
              "end": 3168
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3177,
                    "end": 3183
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                            "start": 3190,
                            "end": 3191
                          },
                          "typeArguments": null,
                          "start": 3190,
                          "end": 3191
                        },
                        "start": 3184,
                        "end": 3191
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 3193,
                        "end": 3199
                      }
                    ],
                    "start": 3183,
                    "end": 3200
                  },
                  "start": 3177,
                  "end": 3200
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3203,
                  "end": 3212
                }
              ],
              "start": 3177,
              "end": 3212
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3167,
            "end": 3212
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3214,
              "end": 3215
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
                  "start": 3230,
                  "end": 3231
                },
                "typeArguments": null,
                "start": 3230,
                "end": 3231
              },
              "start": 3224,
              "end": 3231
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3214,
            "end": 3231
          }
        ],
        "start": 3166,
        "end": 3232
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
                "start": 3238,
                "end": 3239
              },
              "typeArguments": null,
              "start": 3238,
              "end": 3239
            },
            "start": 3236,
            "end": 3239
          },
          "start": 3233,
          "end": 3239
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
                "start": 3246,
                "end": 3247
              },
              "typeArguments": null,
              "start": 3246,
              "end": 3247
            },
            "start": 3244,
            "end": 3247
          },
          "start": 3241,
          "end": 3247
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3261,
                  "end": 3263
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3266,
                    "end": 3269
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3270,
                    "end": 3273
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3266,
                  "end": 3274
                },
                "definite": false,
                "start": 3261,
                "end": 3274
              }
            ],
            "declare": false,
            "start": 3255,
            "end": 3275
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3296,
                  "end": 3298
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3301,
                    "end": 3304
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3308,
                      "end": 3311
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3312,
                      "end": 3315
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3308,
                    "end": 3316
                  },
                  "start": 3301,
                  "end": 3316
                },
                "definite": false,
                "start": 3296,
                "end": 3316
              }
            ],
            "declare": false,
            "start": 3290,
            "end": 3317
          }
        ],
        "start": 3249,
        "end": 3319
      },
      "expression": false,
      "start": 3154,
      "end": 3319
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TableBaseEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 3349,
        "end": 3362
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PublicSpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 3368,
              "end": 3378
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3393
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InternalSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3400,
                        "end": 3412
                      },
                      "typeArguments": null,
                      "start": 3400,
                      "end": 3412
                    },
                    "start": 3394,
                    "end": 3412
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3414,
                    "end": 3417
                  }
                ],
                "start": 3393,
                "end": 3418
              },
              "start": 3387,
              "end": 3418
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3368,
            "end": 3418
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "InternalSpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 3424,
              "end": 3436
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3445,
                    "end": 3451
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PublicSpec",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3458,
                            "end": 3468
                          },
                          "typeArguments": null,
                          "start": 3458,
                          "end": 3468
                        },
                        "start": 3452,
                        "end": 3468
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 3470,
                        "end": 3473
                      }
                    ],
                    "start": 3451,
                    "end": 3474
                  },
                  "start": 3445,
                  "end": 3474
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3478,
                  "end": 3487
                }
              ],
              "start": 3445,
              "end": 3487
            },
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 3490,
              "end": 3499
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3424,
            "end": 3499
          }
        ],
        "start": 3362,
        "end": 3500
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3507,
              "end": 3508
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iSpec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3525,
                          "end": 3530
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 3533,
                              "end": 3537
                            },
                            "start": 3533,
                            "end": 3538
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3542,
                              "end": 3554
                            },
                            "typeArguments": null,
                            "start": 3542,
                            "end": 3554
                          },
                          "start": 3533,
                          "end": 3554
                        },
                        "definite": false,
                        "start": 3525,
                        "end": 3554
                      }
                    ],
                    "declare": false,
                    "start": 3521,
                    "end": 3555
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3564,
                        "end": 3569
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3570,
                            "end": 3574
                          },
                          "start": 3570,
                          "end": 3575
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3585,
                              "end": 3597
                            },
                            "typeArguments": null,
                            "start": 3585,
                            "end": 3597
                          },
                          "start": 3579,
                          "end": 3597
                        },
                        "start": 3570,
                        "end": 3597
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3564,
                      "end": 3598
                    },
                    "directive": null,
                    "start": 3564,
                    "end": 3599
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3645,
                        "end": 3650
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3651,
                            "end": 3655
                          },
                          "start": 3651,
                          "end": 3656
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PublicSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3666,
                              "end": 3676
                            },
                            "typeArguments": null,
                            "start": 3666,
                            "end": 3676
                          },
                          "start": 3660,
                          "end": 3676
                        },
                        "start": 3651,
                        "end": 3676
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3645,
                      "end": 3677
                    },
                    "directive": null,
                    "start": 3645,
                    "end": 3678
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3730,
                        "end": 3735
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3740,
                        "end": 3749
                      },
                      "start": 3730,
                      "end": 3749
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 3765,
                          "end": 3772
                        }
                      ],
                      "start": 3751,
                      "end": 3782
                    },
                    "alternate": null,
                    "start": 3726,
                    "end": 3782
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3791,
                        "end": 3796
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3797,
                            "end": 3801
                          },
                          "start": 3797,
                          "end": 3802
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3812,
                              "end": 3824
                            },
                            "typeArguments": null,
                            "start": 3812,
                            "end": 3824
                          },
                          "start": 3806,
                          "end": 3824
                        },
                        "start": 3797,
                        "end": 3824
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3791,
                      "end": 3825
                    },
                    "directive": null,
                    "start": 3791,
                    "end": 3826
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3835,
                        "end": 3840
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3841,
                            "end": 3845
                          },
                          "start": 3841,
                          "end": 3846
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PublicSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3856,
                              "end": 3866
                            },
                            "typeArguments": null,
                            "start": 3856,
                            "end": 3866
                          },
                          "start": 3850,
                          "end": 3866
                        },
                        "start": 3841,
                        "end": 3866
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3835,
                      "end": 3867
                    },
                    "directive": null,
                    "start": 3835,
                    "end": 3868
                  }
                ],
                "start": 3511,
                "end": 3874
              },
              "expression": false,
              "start": 3508,
              "end": 3874
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3507,
            "end": 3874
          }
        ],
        "start": 3501,
        "end": 3876
      },
      "abstract": false,
      "declare": false,
      "start": 3343,
      "end": 3876
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 3910,
        "end": 3913
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
              "start": 3914,
              "end": 3915
            },
            "constraint": {
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
                        "start": 3926,
                        "end": 3927
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3929,
                          "end": 3935
                        },
                        "start": 3927,
                        "end": 3935
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3926,
                      "end": 3935
                    }
                  ],
                  "start": 3924,
                  "end": 3937
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3940,
                  "end": 3949
                }
              ],
              "start": 3924,
              "end": 3949
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3914,
            "end": 3949
          }
        ],
        "start": 3913,
        "end": 3950
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
                "start": 3954,
                "end": 3955
              },
              "typeArguments": null,
              "start": 3954,
              "end": 3955
            },
            "start": 3952,
            "end": 3955
          },
          "start": 3951,
          "end": 3955
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
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 3960,
                "end": 3967
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
                      "start": 3968,
                      "end": 3969
                    },
                    "typeArguments": null,
                    "start": 3968,
                    "end": 3969
                  }
                ],
                "start": 3967,
                "end": 3970
              },
              "start": 3960,
              "end": 3970
            },
            "start": 3958,
            "end": 3970
          },
          "start": 3957,
          "end": 3970
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3978,
                "end": 3979
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3982,
                "end": 3983
              },
              "start": 3978,
              "end": 3983
            },
            "directive": null,
            "start": 3978,
            "end": 3984
          }
        ],
        "start": 3972,
        "end": 3986
      },
      "expression": false,
      "start": 3901,
      "end": 3986
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SqlInsertSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 3993,
        "end": 4005
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
              "start": 4006,
              "end": 4007
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4006,
            "end": 4007
          }
        ],
        "start": 4005,
        "end": 4008
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
            "start": 4011,
            "end": 4012
          },
          "typeArguments": null,
          "start": 4011,
          "end": 4012
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 4021,
          "end": 4030
        },
        "trueType": {
          "type": "TSObjectKeyword",
          "start": 4033,
          "end": 4039
        },
        "falseType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4045,
            "end": 4046
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
                "start": 4056,
                "end": 4057
              },
              "typeArguments": null,
              "start": 4056,
              "end": 4057
            },
            "start": 4050,
            "end": 4057
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 4060,
            "end": 4067
          },
          "optional": false,
          "readonly": null,
          "start": 4042,
          "end": 4069
        },
        "start": 4011,
        "end": 4069
      },
      "declare": false,
      "start": 3988,
      "end": 4070
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SqlTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4078,
        "end": 4086
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
              "start": 4087,
              "end": 4088
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4087,
            "end": 4088
          }
        ],
        "start": 4086,
        "end": 4089
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
              "name": "validateRow",
              "optional": false,
              "typeAnnotation": null,
              "start": 4106,
              "end": 4117
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
                  "name": "_row",
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
                        "start": 4124,
                        "end": 4131
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SqlInsertSet",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4132,
                              "end": 4144
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
                                    "start": 4145,
                                    "end": 4146
                                  },
                                  "typeArguments": null,
                                  "start": 4145,
                                  "end": 4146
                                }
                              ],
                              "start": 4144,
                              "end": 4147
                            },
                            "start": 4132,
                            "end": 4147
                          }
                        ],
                        "start": 4131,
                        "end": 4148
                      },
                      "start": 4124,
                      "end": 4148
                    },
                    "start": 4122,
                    "end": 4148
                  },
                  "start": 4118,
                  "end": 4148
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4151,
                  "end": 4155
                },
                "start": 4149,
                "end": 4155
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4156,
                "end": 4163
              },
              "expression": false,
              "start": 4117,
              "end": 4163
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 4096,
            "end": 4163
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insertRow",
              "optional": false,
              "typeAnnotation": null,
              "start": 4175,
              "end": 4184
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
                  "name": "row",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SqlInsertSet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4190,
                        "end": 4202
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
                              "start": 4203,
                              "end": 4204
                            },
                            "typeArguments": null,
                            "start": 4203,
                            "end": 4204
                          }
                        ],
                        "start": 4202,
                        "end": 4205
                      },
                      "start": 4190,
                      "end": 4205
                    },
                    "start": 4188,
                    "end": 4205
                  },
                  "start": 4185,
                  "end": 4205
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 4217,
                          "end": 4221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "validateRow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4222,
                          "end": 4233
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4217,
                        "end": 4233
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "row",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4234,
                          "end": 4237
                        }
                      ],
                      "optional": false,
                      "start": 4217,
                      "end": 4238
                    },
                    "directive": null,
                    "start": 4217,
                    "end": 4239
                  }
                ],
                "start": 4207,
                "end": 4245
              },
              "expression": false,
              "start": 4184,
              "end": 4245
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4168,
            "end": 4245
          }
        ],
        "start": 4090,
        "end": 4247
      },
      "abstract": false,
      "declare": false,
      "start": 4072,
      "end": 4247
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 4281,
        "end": 4287
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 4294,
              "end": 4298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "button",
                  "raw": "\"button\"",
                  "start": 4300,
                  "end": 4308
                },
                "start": 4300,
                "end": 4308
              },
              "start": 4298,
              "end": 4308
            },
            "accessibility": null,
            "static": false,
            "start": 4294,
            "end": 4309
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 4314,
              "end": 4318
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4320,
                "end": 4326
              },
              "start": 4318,
              "end": 4326
            },
            "accessibility": null,
            "static": false,
            "start": 4314,
            "end": 4327
          }
        ],
        "start": 4288,
        "end": 4329
      },
      "declare": false,
      "start": 4271,
      "end": 4329
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Checkbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 4341,
        "end": 4349
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 4356,
              "end": 4360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "checkbox",
                  "raw": "\"checkbox\"",
                  "start": 4362,
                  "end": 4372
                },
                "start": 4362,
                "end": 4372
              },
              "start": 4360,
              "end": 4372
            },
            "accessibility": null,
            "static": false,
            "start": 4356,
            "end": 4373
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isChecked",
              "optional": false,
              "typeAnnotation": null,
              "start": 4378,
              "end": 4387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4389,
                "end": 4396
              },
              "start": 4387,
              "end": 4396
            },
            "accessibility": null,
            "static": false,
            "start": 4378,
            "end": 4397
          }
        ],
        "start": 4350,
        "end": 4399
      },
      "declare": false,
      "start": 4331,
      "end": 4399
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 4406,
        "end": 4413
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Button",
              "optional": false,
              "typeAnnotation": null,
              "start": 4416,
              "end": 4422
            },
            "typeArguments": null,
            "start": 4416,
            "end": 4422
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Checkbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 4425,
              "end": 4433
            },
            "typeArguments": null,
            "start": 4425,
            "end": 4433
          }
        ],
        "start": 4416,
        "end": 4433
      },
      "declare": false,
      "start": 4401,
      "end": 4434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "update",
        "optional": false,
        "typeAnnotation": null,
        "start": 4445,
        "end": 4451
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
              "start": 4452,
              "end": 4453
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Control",
                "optional": false,
                "typeAnnotation": null,
                "start": 4462,
                "end": 4469
              },
              "typeArguments": null,
              "start": 4462,
              "end": 4469
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4452,
            "end": 4469
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4471,
              "end": 4472
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
                  "start": 4487,
                  "end": 4488
                },
                "typeArguments": null,
                "start": 4487,
                "end": 4488
              },
              "start": 4481,
              "end": 4488
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4471,
            "end": 4488
          }
        ],
        "start": 4451,
        "end": 4489
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "control",
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
                    "start": 4500,
                    "end": 4501
                  },
                  "typeArguments": null,
                  "start": 4500,
                  "end": 4501
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4504,
                  "end": 4513
                }
              ],
              "start": 4500,
              "end": 4513
            },
            "start": 4498,
            "end": 4513
          },
          "start": 4490,
          "end": 4513
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
                "start": 4520,
                "end": 4521
              },
              "typeArguments": null,
              "start": 4520,
              "end": 4521
            },
            "start": 4518,
            "end": 4521
          },
          "start": 4515,
          "end": 4521
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                  "start": 4530,
                  "end": 4531
                },
                "typeArguments": null,
                "start": 4530,
                "end": 4531
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4532,
                  "end": 4533
                },
                "typeArguments": null,
                "start": 4532,
                "end": 4533
              },
              "start": 4530,
              "end": 4534
            },
            "start": 4528,
            "end": 4534
          },
          "start": 4523,
          "end": 4534
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4537,
          "end": 4541
        },
        "start": 4535,
        "end": 4541
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "control",
                "optional": false,
                "typeAnnotation": null,
                "start": 4552,
                "end": 4559
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4564,
                "end": 4573
              },
              "start": 4552,
              "end": 4573
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "control",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4585,
                        "end": 4592
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4593,
                        "end": 4596
                      },
                      "optional": false,
                      "computed": true,
                      "start": 4585,
                      "end": 4597
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4600,
                      "end": 4605
                    },
                    "start": 4585,
                    "end": 4605
                  },
                  "directive": null,
                  "start": 4585,
                  "end": 4606
                }
              ],
              "start": 4575,
              "end": 4612
            },
            "alternate": null,
            "start": 4548,
            "end": 4612
          }
        ],
        "start": 4542,
        "end": 4614
      },
      "expression": false,
      "start": 4436,
      "end": 4614
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Column",
        "optional": false,
        "typeAnnotation": null,
        "start": 4643,
        "end": 4649
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
              "start": 4650,
              "end": 4651
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4650,
            "end": 4651
          }
        ],
        "start": 4649,
        "end": 4652
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
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
                  "start": 4662,
                  "end": 4663
                },
                "typeArguments": null,
                "start": 4662,
                "end": 4663
              },
              "start": 4656,
              "end": 4663
            },
            "extendsType": {
              "type": "TSNeverKeyword",
              "start": 4672,
              "end": 4677
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4682,
                    "end": 4684
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4687,
                          "end": 4693
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4696,
                          "end": 4702
                        }
                      ],
                      "start": 4687,
                      "end": 4702
                    },
                    "start": 4685,
                    "end": 4702
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4682,
                  "end": 4702
                }
              ],
              "start": 4680,
              "end": 4704
            },
            "falseType": {
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4709,
                    "end": 4711
                  },
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
                        "start": 4713,
                        "end": 4714
                      },
                      "typeArguments": null,
                      "start": 4713,
                      "end": 4714
                    },
                    "start": 4711,
                    "end": 4714
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4709,
                  "end": 4714
                }
              ],
              "start": 4707,
              "end": 4716
            },
            "start": 4656,
            "end": 4716
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4722,
                  "end": 4727
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4730,
                    "end": 4736
                  },
                  "start": 4728,
                  "end": 4736
                },
                "accessibility": null,
                "static": false,
                "start": 4722,
                "end": 4737
              }
            ],
            "start": 4720,
            "end": 4739
          }
        ],
        "start": 4655,
        "end": 4739
      },
      "declare": false,
      "start": 4638,
      "end": 4739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getColumnProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 4750,
        "end": 4767
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
              "start": 4768,
              "end": 4769
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4768,
            "end": 4769
          }
        ],
        "start": 4767,
        "end": 4770
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "column",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Column",
                "optional": false,
                "typeAnnotation": null,
                "start": 4779,
                "end": 4785
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
                      "start": 4786,
                      "end": 4787
                    },
                    "typeArguments": null,
                    "start": 4786,
                    "end": 4787
                  }
                ],
                "start": 4785,
                "end": 4788
              },
              "start": 4779,
              "end": 4788
            },
            "start": 4777,
            "end": 4788
          },
          "start": 4771,
          "end": 4788
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
                  "name": "Column",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4801,
                  "end": 4807
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
                        "start": 4808,
                        "end": 4809
                      },
                      "typeArguments": null,
                      "start": 4808,
                      "end": 4809
                    }
                  ],
                  "start": 4807,
                  "end": 4810
                },
                "start": 4801,
                "end": 4810
              },
              "start": 4795,
              "end": 4810
            },
            "start": 4793,
            "end": 4810
          },
          "start": 4790,
          "end": 4810
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "column",
                "optional": false,
                "typeAnnotation": null,
                "start": 4823,
                "end": 4829
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 4830,
                "end": 4833
              },
              "optional": false,
              "computed": true,
              "start": 4823,
              "end": 4834
            },
            "start": 4816,
            "end": 4835
          }
        ],
        "start": 4812,
        "end": 4837
      },
      "expression": false,
      "start": 4741,
      "end": 4837
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4837
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 31,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 61,
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
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 251,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 274,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 281,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 293,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 311,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 319,
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
    "value": "string",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 331,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 342,
    "end": 343
  },
  {
    "type": "Null",
    "value": "null",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 410,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 430,
    "end": 436
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 437,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 449,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 463,
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
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "item",
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
    "type": "Identifier",
    "value": "T",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 484,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 492,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "isBox",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
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
    "value": "any",
    "start": 510,
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
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 518,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 525,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 535,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 543,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "isUndefined",
    "start": 552,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "unknown",
    "start": 567,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "x",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 579,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 582,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 593,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 601,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 610,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 635,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 649,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 666,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "isBox",
    "start": 693,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
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
    "value": "unbox",
    "start": 713,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 732,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 746,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 763,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "isUndefined",
    "start": 791,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
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
    "value": "unbox",
    "start": 817,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 836,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 850,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 867,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "isBox",
    "start": 895,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 915,
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
    "value": "x",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 944,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 953,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 958,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 975,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 998,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "isUndefined",
    "start": 1002,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
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
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1079,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1087,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "takeA",
    "start": 1096,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1107,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1113,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1119,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1126,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "bounceAndTakeIfA",
    "start": 1135,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1155,
    "end": 1162
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1174,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1181,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "takeA",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1246,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1253,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1270,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1292,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1330,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "Common",
    "start": 1335,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1346,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1350,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1360,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1372,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1382,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1386,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 1401,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1418,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1422,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1435,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1446,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 1451,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 1466,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1471,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1483,
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
    "value": "MyUnion",
    "start": 1490,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1508,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1533,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1537,
    "end": 1542
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1543,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1546,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1563,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1584,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1602,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1617,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1623,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1638,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1653,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 1661,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1670,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 1681,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1689,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1698,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1723,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1727,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1733,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1736,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1753,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1759,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1774,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1778,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1788,
    "end": 1791
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1792,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1807,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1813,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1850,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1855,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "testable",
    "start": 1866,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1876,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "doTest",
    "start": 1885,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1896,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1899,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1906,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1911,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "testable",
    "start": 1922,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1932,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1942,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 1947,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1955,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1960,
    "end": 1962
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1964,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "notWorking",
    "start": 1973,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1986,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 1994,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2001,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2018,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2023,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "testable",
    "start": 2030,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2040,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2052,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "doTest",
    "start": 2059,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2094,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2115,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2124,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2134,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2143,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2149,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2157,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2166,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2174,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2183,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2196,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2202,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2210,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2214,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2224,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2228,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2234,
    "end": 2237
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2238,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2254,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2261,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2278,
    "end": 2284
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2314,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 2320,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2333,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "off",
    "start": 2343,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2349,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2357,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2363,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2367,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2370,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2380,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2391,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2400,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2409,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2419,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 2428,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2433,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2439,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 2447,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2460,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "emittingObject",
    "start": 2465,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2484,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2495,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2501,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2506,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "emittingObject",
    "start": 2517,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "off",
    "start": 2532,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2536,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "emittingObject",
    "start": 2555,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "off",
    "start": 2570,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2574,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2584,
    "end": 2586
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2587,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2594,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2896,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 2905,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2914,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2922,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2931,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2939,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2953,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2959,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2964,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2968,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2978,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2984,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2989,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2993,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2996,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3000,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3009,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 3018,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3024,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3032,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3039,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3048,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3059,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3067,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3076,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3084,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3098,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 3104,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3109,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3113,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3123,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 3129,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3134,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3138,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3141,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3145,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3154,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "fx3",
    "start": 3163,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3169,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3177,
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
    "value": "keyof",
    "start": 3184,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3193,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3203,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3216,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3224,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3233,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3241,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3255,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 3261,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3266,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3270,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3290,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 3296,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3301,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3305,
    "end": 3307
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3308,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3312,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3343,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "TableBaseEnum",
    "start": 3349,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3368,
    "end": 3378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3379,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3387,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3394,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3400,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3414,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3424,
    "end": 3436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3437,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3445,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3452,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3458,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3470,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3478,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3490,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3521,
    "end": 3524
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3525,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3533,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3539,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3542,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3564,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3570,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3576,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3579,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3585,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3645,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3651,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3657,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3660,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3666,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3726,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3730,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3736,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3740,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3765,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3791,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3797,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3803,
    "end": 3805
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3806,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3812,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3835,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3841,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3847,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3850,
    "end": 3855
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3856,
    "end": 3866
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3901,
    "end": 3909
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 3910,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3916,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3929,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3940,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3960,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3988,
    "end": 3992
  },
  {
    "type": "Identifier",
    "value": "SqlInsertSet",
    "start": 3993,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4013,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4021,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4033,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4047,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4050,
    "end": 4055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4060,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4072,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "SqlTable",
    "start": 4078,
    "end": 4086
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4087,
    "end": 4088
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 4096,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "validateRow",
    "start": 4106,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "_row",
    "start": 4118,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 4124,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "SqlInsertSet",
    "start": 4132,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4147,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4151,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4168,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "insertRow",
    "start": 4175,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 4185,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Identifier",
    "value": "SqlInsertSet",
    "start": 4190,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4217,
    "end": 4221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "validateRow",
    "start": 4222,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 4234,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4271,
    "end": 4280
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 4281,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4294,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "String",
    "value": "\"button\"",
    "start": 4300,
    "end": 4308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 4314,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4320,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4331,
    "end": 4340
  },
  {
    "type": "Identifier",
    "value": "Checkbox",
    "start": 4341,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4356,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "String",
    "value": "\"checkbox\"",
    "start": 4362,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "isChecked",
    "start": 4378,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4389,
    "end": 4396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4401,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 4406,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 4416,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Identifier",
    "value": "Checkbox",
    "start": 4425,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4436,
    "end": 4444
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 4445,
    "end": 4451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4454,
    "end": 4461
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 4462,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4471,
    "end": 4472
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4473,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4481,
    "end": 4486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "control",
    "start": 4490,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4504,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4515,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4523,
    "end": 4528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4537,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4548,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Identifier",
    "value": "control",
    "start": 4552,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4560,
    "end": 4563
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4564,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4575,
    "end": 4576
  },
  {
    "type": "Identifier",
    "value": "control",
    "start": 4585,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4593,
    "end": 4596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4596,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4600,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4638,
    "end": 4642
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 4643,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4656,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4664,
    "end": 4671
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4672,
    "end": 4677
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4680,
    "end": 4681
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 4682,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4684,
    "end": 4685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4687,
    "end": 4693
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4696,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4707,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 4709,
    "end": 4711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4711,
    "end": 4712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4716,
    "end": 4717
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 4722,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4730,
    "end": 4736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4736,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4738,
    "end": 4739
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4741,
    "end": 4749
  },
  {
    "type": "Identifier",
    "value": "getColumnProperty",
    "start": 4750,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4770,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "column",
    "start": 4771,
    "end": 4777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 4779,
    "end": 4785
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4786,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4790,
    "end": 4793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4795,
    "end": 4800
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 4801,
    "end": 4807
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4808,
    "end": 4809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4809,
    "end": 4810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4810,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4812,
    "end": 4813
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4816,
    "end": 4822
  },
  {
    "type": "Identifier",
    "value": "column",
    "start": 4823,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4830,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4836,
    "end": 4837
  }
]
```

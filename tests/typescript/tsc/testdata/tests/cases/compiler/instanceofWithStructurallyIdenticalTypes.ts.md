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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 29
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
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
            "start": 32,
            "end": 44
          }
        ],
        "start": 30,
        "end": 46
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 46
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 64,
                  "end": 70
                },
                "start": 64,
                "end": 72
              },
              "start": 62,
              "end": 72
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
            "start": 58,
            "end": 72
          }
        ],
        "start": 56,
        "end": 74
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 83
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
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
            "start": 86,
            "end": 98
          }
        ],
        "start": 84,
        "end": 100
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 115
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 121
                  },
                  "typeArguments": null,
                  "start": 119,
                  "end": 121
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 126
                  },
                  "typeArguments": null,
                  "start": 124,
                  "end": 126
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 131
                  },
                  "typeArguments": null,
                  "start": 129,
                  "end": 131
                }
              ],
              "start": 119,
              "end": 131
            },
            "start": 117,
            "end": 131
          },
          "start": 116,
          "end": 131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 134,
          "end": 140
        },
        "start": 132,
        "end": 140
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 166
              },
              "start": 151,
              "end": 166
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 186
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 191
                    },
                    "optional": false,
                    "computed": false,
                    "start": 185,
                    "end": 191
                  },
                  "start": 178,
                  "end": 192
                }
              ],
              "start": 168,
              "end": 198
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 227
                },
                "start": 212,
                "end": 227
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 246,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 252
                        },
                        "optional": false,
                        "computed": false,
                        "start": 246,
                        "end": 252
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 253,
                        "end": 254
                      },
                      "optional": false,
                      "computed": true,
                      "start": 246,
                      "end": 255
                    },
                    "start": 239,
                    "end": 256
                  }
                ],
                "start": 229,
                "end": 262
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 291
                  },
                  "start": 276,
                  "end": 291
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 316
                        },
                        "optional": false,
                        "computed": false,
                        "start": 310,
                        "end": 316
                      },
                      "start": 303,
                      "end": 317
                    }
                  ],
                  "start": 293,
                  "end": 323
                },
                "alternate": null,
                "start": 272,
                "end": 323
              },
              "start": 208,
              "end": 323
            },
            "start": 147,
            "end": 323
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "error",
              "raw": "\"error\"",
              "start": 335,
              "end": 342
            },
            "start": 328,
            "end": 343
          }
        ],
        "start": 141,
        "end": 345
      },
      "expression": false,
      "start": 102,
      "end": 345
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 360
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 366
                  },
                  "typeArguments": null,
                  "start": 364,
                  "end": 366
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 371
                  },
                  "typeArguments": null,
                  "start": 369,
                  "end": 371
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 376
                  },
                  "typeArguments": null,
                  "start": 374,
                  "end": 376
                }
              ],
              "start": 364,
              "end": 376
            },
            "start": 362,
            "end": 376
          },
          "start": 361,
          "end": 376
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 380
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 386
              },
              "typeArguments": null,
              "start": 384,
              "end": 386
            },
            "start": 384,
            "end": 386
          },
          "start": 379,
          "end": 386
        },
        "start": 377,
        "end": 386
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 397
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 411
              },
              "start": 396,
              "end": 411
            },
            "start": 389,
            "end": 411
          }
        ],
        "start": 387,
        "end": 413
      },
      "expression": false,
      "start": 347,
      "end": 413
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 427
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 433
                  },
                  "typeArguments": null,
                  "start": 431,
                  "end": 433
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 438
                  },
                  "typeArguments": null,
                  "start": 436,
                  "end": 438
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 443
                  },
                  "typeArguments": null,
                  "start": 441,
                  "end": 443
                }
              ],
              "start": 431,
              "end": 443
            },
            "start": 429,
            "end": 443
          },
          "start": 428,
          "end": 443
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 447
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 453
              },
              "typeArguments": null,
              "start": 451,
              "end": 453
            },
            "start": 451,
            "end": 453
          },
          "start": 446,
          "end": 453
        },
        "start": 444,
        "end": 453
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 478
              },
              "start": 463,
              "end": 478
            },
            "start": 456,
            "end": 478
          }
        ],
        "start": 454,
        "end": 480
      },
      "expression": false,
      "start": 414,
      "end": 480
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC3",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 494
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 500
                  },
                  "typeArguments": null,
                  "start": 498,
                  "end": 500
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 505
                  },
                  "typeArguments": null,
                  "start": 503,
                  "end": 505
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 510
                  },
                  "typeArguments": null,
                  "start": 508,
                  "end": 510
                }
              ],
              "start": 498,
              "end": 510
            },
            "start": 496,
            "end": 510
          },
          "start": 495,
          "end": 510
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 514
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 520
              },
              "typeArguments": null,
              "start": 518,
              "end": 520
            },
            "start": 518,
            "end": 520
          },
          "start": 513,
          "end": 520
        },
        "start": 511,
        "end": 520
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 531
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 545
              },
              "start": 530,
              "end": 545
            },
            "start": 523,
            "end": 545
          }
        ],
        "start": 521,
        "end": 547
      },
      "expression": false,
      "start": 481,
      "end": 547
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 562
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 568
                  },
                  "typeArguments": null,
                  "start": 566,
                  "end": 568
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 573
                  },
                  "typeArguments": null,
                  "start": 571,
                  "end": 573
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 576,
                    "end": 578
                  },
                  "typeArguments": null,
                  "start": 576,
                  "end": 578
                }
              ],
              "start": 566,
              "end": 578
            },
            "start": 564,
            "end": 578
          },
          "start": 563,
          "end": 578
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 581,
          "end": 587
        },
        "start": 579,
        "end": 587
      },
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
                "name": "isC1",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 602
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 598,
              "end": 605
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 624,
                      "end": 625
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 626,
                      "end": 630
                    },
                    "optional": false,
                    "computed": false,
                    "start": 624,
                    "end": 630
                  },
                  "start": 617,
                  "end": 631
                }
              ],
              "start": 607,
              "end": 637
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isC2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 651,
                  "end": 655
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 657
                  }
                ],
                "optional": false,
                "start": 651,
                "end": 658
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 677,
                          "end": 678
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 683
                        },
                        "optional": false,
                        "computed": false,
                        "start": 677,
                        "end": 683
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 684,
                        "end": 685
                      },
                      "optional": false,
                      "computed": true,
                      "start": 677,
                      "end": 686
                    },
                    "start": 670,
                    "end": 687
                  }
                ],
                "start": 660,
                "end": 693
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isC3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 711
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 713
                    }
                  ],
                  "optional": false,
                  "start": 707,
                  "end": 714
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 733,
                          "end": 734
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 739
                        },
                        "optional": false,
                        "computed": false,
                        "start": 733,
                        "end": 739
                      },
                      "start": 726,
                      "end": 740
                    }
                  ],
                  "start": 716,
                  "end": 746
                },
                "alternate": null,
                "start": 703,
                "end": 746
              },
              "start": 647,
              "end": 746
            },
            "start": 594,
            "end": 746
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "error",
              "raw": "\"error\"",
              "start": 758,
              "end": 765
            },
            "start": 751,
            "end": 766
          }
        ],
        "start": 588,
        "end": 768
      },
      "expression": false,
      "start": 549,
      "end": 768
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 792
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 796
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 798,
                "end": 804
              },
              "start": 796,
              "end": 804
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
            "start": 795,
            "end": 804
          }
        ],
        "start": 793,
        "end": 806
      },
      "abstract": false,
      "declare": false,
      "start": 785,
      "end": 806
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 813,
        "end": 815
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 825
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 826,
        "end": 829
      },
      "abstract": false,
      "declare": false,
      "start": 807,
      "end": 829
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 838
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 842
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 844,
                "end": 850
              },
              "start": 842,
              "end": 850
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
            "start": 841,
            "end": 850
          }
        ],
        "start": 839,
        "end": 852
      },
      "abstract": false,
      "declare": false,
      "start": 830,
      "end": 852
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 860
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 870
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 874
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 876,
                "end": 882
              },
              "start": 874,
              "end": 882
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
            "start": 873,
            "end": 882
          }
        ],
        "start": 871,
        "end": 884
      },
      "abstract": false,
      "declare": false,
      "start": 853,
      "end": 884
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo",
        "optional": false,
        "typeAnnotation": null,
        "start": 895,
        "end": 898
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 903
              },
              "typeArguments": null,
              "start": 902,
              "end": 903
            },
            "start": 900,
            "end": 903
          },
          "start": 899,
          "end": 903
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 916
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 928,
                "end": 929
              },
              "start": 915,
              "end": 929
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
                    "start": 941,
                    "end": 942
                  },
                  "directive": null,
                  "start": 941,
                  "end": 943
                }
              ],
              "start": 931,
              "end": 955
            },
            "alternate": {
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
                    "start": 975,
                    "end": 976
                  },
                  "directive": null,
                  "start": 975,
                  "end": 977
                }
              ],
              "start": 965,
              "end": 993
            },
            "start": 911,
            "end": 993
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1003
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1015,
                "end": 1017
              },
              "start": 1002,
              "end": 1017
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
                    "start": 1029,
                    "end": 1030
                  },
                  "directive": null,
                  "start": 1029,
                  "end": 1031
                }
              ],
              "start": 1019,
              "end": 1044
            },
            "alternate": {
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
                    "start": 1064,
                    "end": 1065
                  },
                  "directive": null,
                  "start": 1064,
                  "end": 1066
                }
              ],
              "start": 1054,
              "end": 1078
            },
            "start": 998,
            "end": 1078
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1087,
                "end": 1088
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1102
              },
              "start": 1087,
              "end": 1102
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
                    "start": 1114,
                    "end": 1115
                  },
                  "directive": null,
                  "start": 1114,
                  "end": 1116
                }
              ],
              "start": 1104,
              "end": 1129
            },
            "alternate": {
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
                    "start": 1149,
                    "end": 1150
                  },
                  "directive": null,
                  "start": 1149,
                  "end": 1151
                }
              ],
              "start": 1139,
              "end": 1163
            },
            "start": 1083,
            "end": 1163
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1172,
                "end": 1173
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1185,
                "end": 1186
              },
              "start": 1172,
              "end": 1186
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
                    "start": 1198,
                    "end": 1199
                  },
                  "directive": null,
                  "start": 1198,
                  "end": 1200
                }
              ],
              "start": 1188,
              "end": 1212
            },
            "alternate": {
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
                    "start": 1232,
                    "end": 1233
                  },
                  "directive": null,
                  "start": 1232,
                  "end": 1234
                }
              ],
              "start": 1222,
              "end": 1246
            },
            "start": 1168,
            "end": 1246
          }
        ],
        "start": 905,
        "end": 1248
      },
      "expression": false,
      "start": 886,
      "end": 1248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1248
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 124,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 153,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 203,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 214,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 239,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 267,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 278,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 303,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 328,
    "end": 334
  },
  {
    "type": "String",
    "value": "\"error\"",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 381,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 384,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 389,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 398,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 414,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 448,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 456,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 465,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 481,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "isC3",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 515,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 523,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 532,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 549,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 563,
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
    "value": "C1",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 571,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 617,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "item",
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
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 642,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "return",
    "start": 670,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 683,
    "end": 684
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 698,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "isC3",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 726,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 735,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 751,
    "end": 757
  },
  {
    "type": "String",
    "value": "\"error\"",
    "start": 758,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 785,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Identifier",
    "value": "a",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 807,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 813,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 816,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 830,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 844,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 853,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 861,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 876,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 886,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "goo",
    "start": 895,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Keyword",
    "value": "if",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 917,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 960,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "x",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1004,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1049,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1089,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1134,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1168,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1174,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248
  }
]
```

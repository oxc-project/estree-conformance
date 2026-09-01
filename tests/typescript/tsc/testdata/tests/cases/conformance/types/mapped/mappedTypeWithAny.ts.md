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
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ItemMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
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
              "start": 63,
              "end": 64
            },
            "typeArguments": null,
            "start": 63,
            "end": 64
          },
          "start": 57,
          "end": 64
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Item",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 71
          },
          "typeArguments": null,
          "start": 67,
          "end": 71
        },
        "optional": false,
        "readonly": null,
        "start": 49,
        "end": 73
      },
      "declare": false,
      "start": 31,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 98,
                  "end": 101
                },
                "start": 92,
                "end": 101
              },
              "start": 90,
              "end": 101
            },
            "start": 88,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 101
        }
      ],
      "declare": true,
      "start": 76,
      "end": 102
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
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
                  "start": 122,
                  "end": 123
                },
                "constraint": {
                  "type": "TSAnyKeyword",
                  "start": 127,
                  "end": 130
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 137
                  },
                  "typeArguments": null,
                  "start": 133,
                  "end": 137
                },
                "optional": false,
                "readonly": null,
                "start": 119,
                "end": 139
              },
              "start": 117,
              "end": 139
            },
            "start": 115,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 139
        }
      ],
      "declare": true,
      "start": 103,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
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
                  "start": 160,
                  "end": 161
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 165,
                  "end": 171
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 178
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 178
                },
                "optional": false,
                "readonly": null,
                "start": 157,
                "end": 180
              },
              "start": 155,
              "end": 180
            },
            "start": 153,
            "end": 180
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 180
        }
      ],
      "declare": true,
      "start": 141,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
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
                  "start": 201,
                  "end": 202
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  },
                  "start": 206,
                  "end": 215
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 222
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 222
                },
                "optional": false,
                "readonly": null,
                "start": 198,
                "end": 224
              },
              "start": 196,
              "end": 224
            },
            "start": 194,
            "end": 224
          },
          "init": null,
          "definite": false,
          "start": 194,
          "end": 224
        }
      ],
      "declare": true,
      "start": 182,
      "end": 225
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ItemMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 249
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 250,
                      "end": 253
                    }
                  ],
                  "start": 249,
                  "end": 254
                },
                "start": 242,
                "end": 254
              },
              "start": 240,
              "end": 254
            },
            "start": 238,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 238,
          "end": 254
        }
      ],
      "declare": true,
      "start": 226,
      "end": 255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 288
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 302,
                "end": 308
              },
              "start": 300,
              "end": 308
            },
            "accessibility": null,
            "static": false,
            "start": 295,
            "end": 309
          }
        ],
        "start": 291,
        "end": 311
      },
      "declare": false,
      "start": 279,
      "end": 311
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrictDataMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 331
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
              "start": 332,
              "end": 333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 333
          }
        ],
        "start": 331,
        "end": 334
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 343
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
              "start": 353,
              "end": 354
            },
            "typeArguments": null,
            "start": 353,
            "end": 354
          },
          "start": 347,
          "end": 354
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Data",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 361
          },
          "typeArguments": null,
          "start": 357,
          "end": 361
        },
        "optional": false,
        "readonly": null,
        "start": 337,
        "end": 363
      },
      "declare": false,
      "start": 313,
      "end": 363
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrictDataMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 393
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 394,
                      "end": 397
                    }
                  ],
                  "start": 393,
                  "end": 398
                },
                "start": 380,
                "end": 398
              },
              "start": 378,
              "end": 398
            },
            "start": 377,
            "end": 398
          },
          "init": null,
          "definite": false,
          "start": 377,
          "end": 398
        }
      ],
      "declare": true,
      "start": 365,
      "end": 399
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 411
            },
            "init": null,
            "definite": false,
            "start": 409,
            "end": 411
          }
        ],
        "declare": false,
        "start": 405,
        "end": 411
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 416
      },
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
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 430
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 434
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 437
                  },
                  "optional": false,
                  "computed": true,
                  "start": 433,
                  "end": 438
                },
                "definite": false,
                "start": 426,
                "end": 438
              }
            ],
            "declare": false,
            "start": 422,
            "end": 439
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 454
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "notAValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 464
                  },
                  "optional": false,
                  "computed": false,
                  "start": 450,
                  "end": 464
                },
                "definite": false,
                "start": 446,
                "end": 464
              }
            ],
            "declare": false,
            "start": 442,
            "end": 465
          }
        ],
        "start": 418,
        "end": 477
      },
      "start": 400,
      "end": 477
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Arrayish",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 666
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
              "start": 667,
              "end": 668
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 677,
                "end": 684
              },
              "start": 677,
              "end": 686
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 667,
            "end": 686
          }
        ],
        "start": 666,
        "end": 687
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 694
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
              "start": 704,
              "end": 705
            },
            "typeArguments": null,
            "start": 704,
            "end": 705
          },
          "start": 698,
          "end": 705
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
              "start": 708,
              "end": 709
            },
            "typeArguments": null,
            "start": 708,
            "end": 709
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 711
            },
            "typeArguments": null,
            "start": 710,
            "end": 711
          },
          "start": 708,
          "end": 712
        },
        "optional": false,
        "readonly": null,
        "start": 690,
        "end": 714
      },
      "declare": false,
      "start": 653,
      "end": 715
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Objectish",
        "optional": false,
        "typeAnnotation": null,
        "start": 721,
        "end": 730
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
              "start": 731,
              "end": 732
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 741,
              "end": 748
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 731,
            "end": 748
          }
        ],
        "start": 730,
        "end": 749
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 755,
          "end": 756
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
              "start": 766,
              "end": 767
            },
            "typeArguments": null,
            "start": 766,
            "end": 767
          },
          "start": 760,
          "end": 767
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
              "start": 770,
              "end": 771
            },
            "typeArguments": null,
            "start": 770,
            "end": 771
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "typeArguments": null,
            "start": 772,
            "end": 773
          },
          "start": 770,
          "end": 774
        },
        "optional": false,
        "readonly": null,
        "start": 752,
        "end": 776
      },
      "declare": false,
      "start": 716,
      "end": 777
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndirectArrayish",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1365
      },
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
              "start": 1366,
              "end": 1367
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1376,
                "end": 1383
              },
              "start": 1376,
              "end": 1385
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1366,
            "end": 1385
          }
        ],
        "start": 1365,
        "end": 1386
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Objectish",
          "optional": false,
          "typeAnnotation": null,
          "start": 1389,
          "end": 1398
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
                "start": 1399,
                "end": 1400
              },
              "typeArguments": null,
              "start": 1399,
              "end": 1400
            }
          ],
          "start": 1398,
          "end": 1401
        },
        "start": 1389,
        "end": 1401
      },
      "declare": false,
      "start": 1344,
      "end": 1402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1413,
        "end": 1416
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Arrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1427,
                "end": 1435
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1436,
                    "end": 1439
                  }
                ],
                "start": 1435,
                "end": 1440
              },
              "start": 1427,
              "end": 1440
            },
            "start": 1425,
            "end": 1440
          },
          "start": 1417,
          "end": 1440
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objectish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Objectish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1453,
                "end": 1462
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1463,
                    "end": 1466
                  }
                ],
                "start": 1462,
                "end": 1467
              },
              "start": 1453,
              "end": 1467
            },
            "start": 1451,
            "end": 1467
          },
          "start": 1442,
          "end": 1467
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "indirectArrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndirectArrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1503
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1504,
                    "end": 1507
                  }
                ],
                "start": 1503,
                "end": 1508
              },
              "start": 1487,
              "end": 1508
            },
            "start": 1485,
            "end": 1508
          },
          "start": 1469,
          "end": 1508
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1525,
                        "end": 1528
                      },
                      "start": 1525,
                      "end": 1530
                    },
                    "start": 1523,
                    "end": 1530
                  },
                  "start": 1520,
                  "end": 1530
                },
                "init": null,
                "definite": false,
                "start": 1520,
                "end": 1530
              }
            ],
            "declare": false,
            "start": 1516,
            "end": 1531
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1539
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1542,
                "end": 1550
              },
              "start": 1536,
              "end": 1550
            },
            "directive": null,
            "start": 1536,
            "end": 1551
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1556,
                "end": 1559
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "objectish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1571
              },
              "start": 1556,
              "end": 1571
            },
            "directive": null,
            "start": 1556,
            "end": 1572
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1577,
                "end": 1580
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "indirectArrayish",
                "optional": false,
                "typeAnnotation": null,
                "start": 1583,
                "end": 1599
              },
              "start": 1577,
              "end": 1599
            },
            "directive": null,
            "start": 1577,
            "end": 1600
          }
        ],
        "start": 1510,
        "end": 1602
      },
      "expression": false,
      "start": 1404,
      "end": 1602
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringifyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1621,
        "end": 1635
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
              "start": 1636,
              "end": 1637
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1655,
                  "end": 1658
                },
                "start": 1655,
                "end": 1660
              },
              "start": 1646,
              "end": 1660
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1636,
            "end": 1660
          }
        ],
        "start": 1635,
        "end": 1661
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 1667,
                "end": 1668
              },
              "typeArguments": null,
              "start": 1667,
              "end": 1668
            },
            "start": 1665,
            "end": 1668
          },
          "start": 1662,
          "end": 1668
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1684,
            "end": 1685
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
                "start": 1695,
                "end": 1696
              },
              "typeArguments": null,
              "start": 1695,
              "end": 1696
            },
            "start": 1689,
            "end": 1696
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1699,
            "end": 1705
          },
          "optional": false,
          "readonly": "-",
          "start": 1671,
          "end": 1707
        },
        "start": 1669,
        "end": 1707
      },
      "body": null,
      "expression": false,
      "start": 1604,
      "end": 1708
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1718,
                  "end": 1721
                },
                "start": 1718,
                "end": 1723
              },
              "start": 1716,
              "end": 1723
            },
            "start": 1713,
            "end": 1723
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringifyArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1726,
              "end": 1740
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "UnaryExpression",
                  "operator": "void",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1746,
                    "end": 1747
                  },
                  "prefix": true,
                  "start": 1741,
                  "end": 1747
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1751,
                  "end": 1754
                },
                "start": 1741,
                "end": 1754
              }
            ],
            "optional": false,
            "start": 1726,
            "end": 1755
          },
          "definite": false,
          "start": 1713,
          "end": 1755
        }
      ],
      "declare": false,
      "start": 1709,
      "end": 1756
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringifyPair",
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1788
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
              "start": 1789,
              "end": 1790
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1809,
                    "end": 1812
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1814,
                    "end": 1817
                  }
                ],
                "start": 1808,
                "end": 1818
              },
              "start": 1799,
              "end": 1818
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1789,
            "end": 1818
          }
        ],
        "start": 1788,
        "end": 1819
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 1825,
                "end": 1826
              },
              "typeArguments": null,
              "start": 1825,
              "end": 1826
            },
            "start": 1823,
            "end": 1826
          },
          "start": 1820,
          "end": 1826
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1843
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
                "start": 1853,
                "end": 1854
              },
              "typeArguments": null,
              "start": 1853,
              "end": 1854
            },
            "start": 1847,
            "end": 1854
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1857,
            "end": 1863
          },
          "optional": false,
          "readonly": "-",
          "start": 1829,
          "end": 1865
        },
        "start": 1827,
        "end": 1865
      },
      "body": null,
      "expression": false,
      "start": 1758,
      "end": 1866
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1877,
                    "end": 1880
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1882,
                    "end": 1885
                  }
                ],
                "start": 1876,
                "end": 1886
              },
              "start": 1874,
              "end": 1886
            },
            "start": 1871,
            "end": 1886
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringifyPair",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1902
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "UnaryExpression",
                  "operator": "void",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1908,
                    "end": 1909
                  },
                  "prefix": true,
                  "start": 1903,
                  "end": 1909
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1913,
                  "end": 1916
                },
                "start": 1903,
                "end": 1916
              }
            ],
            "optional": false,
            "start": 1889,
            "end": 1917
          },
          "definite": false,
          "start": 1871,
          "end": 1917
        }
      ],
      "declare": false,
      "start": 1867,
      "end": 1918
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Evolvable",
        "optional": false,
        "typeAnnotation": null,
        "start": 1947,
        "end": 1956
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1957,
              "end": 1958
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Evolver",
                "optional": false,
                "typeAnnotation": null,
                "start": 1967,
                "end": 1974
              },
              "typeArguments": null,
              "start": 1967,
              "end": 1974
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1957,
            "end": 1974
          }
        ],
        "start": 1956,
        "end": 1975
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1983,
          "end": 1984
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1994,
              "end": 1995
            },
            "typeArguments": null,
            "start": 1994,
            "end": 1995
          },
          "start": 1988,
          "end": 1995
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1998,
          "end": 2003
        },
        "optional": false,
        "readonly": null,
        "start": 1978,
        "end": 2006
      },
      "declare": false,
      "start": 1942,
      "end": 2007
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Evolver",
        "optional": false,
        "typeAnnotation": null,
        "start": 2013,
        "end": 2020
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
              "start": 2021,
              "end": 2022
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Evolvable",
                "optional": false,
                "typeAnnotation": null,
                "start": 2031,
                "end": 2040
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 2041,
                    "end": 2044
                  }
                ],
                "start": 2040,
                "end": 2045
              },
              "start": 2031,
              "end": 2045
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 2048,
              "end": 2051
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2021,
            "end": 2051
          }
        ],
        "start": 2020,
        "end": 2052
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 2060,
          "end": 2063
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 2073,
              "end": 2080
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
                    "start": 2081,
                    "end": 2082
                  },
                  "typeArguments": null,
                  "start": 2081,
                  "end": 2082
                }
              ],
              "start": 2080,
              "end": 2083
            },
            "start": 2073,
            "end": 2083
          },
          "start": 2067,
          "end": 2083
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 2086,
          "end": 2091
        },
        "optional": false,
        "readonly": null,
        "start": 2055,
        "end": 2094
      },
      "declare": false,
      "start": 2008,
      "end": 2095
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2095
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
    "value": "Item",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 31,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "ItemMap",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
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
    "value": "Item",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x0",
    "start": 88,
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
    "value": "keyof",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
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
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 124,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Item",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 141,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 153,
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
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 162,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 165,
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
    "value": "Item",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 182,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 194,
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
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 203,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 206,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 226,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "ItemMap",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 250,
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
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 279,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 313,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "StrictDataMap",
    "start": 318,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 344,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 365,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "StrictDataMap",
    "start": 380,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 394,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 409,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 412,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 422,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "notAValue",
    "start": 455,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 653,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "Arrayish",
    "start": 658,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 669,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 677,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ">",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 695,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 698,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 716,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "Objectish",
    "start": 721,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 733,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 741,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 757,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 760,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1344,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "IndirectArrayish",
    "start": 1349,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1368,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1376,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "Objectish",
    "start": 1389,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1404,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "arrayish",
    "start": 1417,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "Arrayish",
    "start": 1427,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1436,
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
    "value": ",",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "objectish",
    "start": 1442,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "Objectish",
    "start": 1453,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "indirectArrayish",
    "start": 1469,
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
    "value": "IndirectArrayish",
    "start": 1487,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1520,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "arrayish",
    "start": 1542,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1556,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "objectish",
    "start": 1562,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "indirectArrayish",
    "start": 1583,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1604,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1612,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "stringifyArray",
    "start": 1621,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1638,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1646,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1655,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1662,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1674,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1686,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1699,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1706,
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
    "value": "let",
    "start": 1709,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "stringifyArray",
    "start": 1726,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1741,
    "end": 1745
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1748,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1751,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1758,
    "end": 1765
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1766,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "stringifyPair",
    "start": 1775,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1791,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1799,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1809,
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
    "value": "any",
    "start": 1814,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "-",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1832,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1844,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1847,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1857,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1867,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 1871,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1877,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1882,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "stringifyPair",
    "start": 1889,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1903,
    "end": 1907
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1910,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1913,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1942,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "Evolvable",
    "start": 1947,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1959,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "Evolver",
    "start": 1967,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1985,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1988,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "never",
    "start": 1998,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2008,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "Evolver",
    "start": 2013,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2023,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "Evolvable",
    "start": 2031,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2041,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2060,
    "end": 2063
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2064,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2067,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 2073,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2086,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2094,
    "end": 2095
  }
]
```

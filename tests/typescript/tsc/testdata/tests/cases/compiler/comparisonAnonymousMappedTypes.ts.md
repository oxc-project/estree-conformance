__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 23,
        "end": 26
      },
      "params": [],
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
            "start": 33,
            "end": 34
          },
          "constraint": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "value",
              "raw": "\"value\"",
              "start": 38,
              "end": 45
            },
            "start": 38,
            "end": 45
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "typeArguments": null,
            "start": 48,
            "end": 49
          },
          "optional": false,
          "readonly": null,
          "start": 30,
          "end": 51
        },
        "start": 28,
        "end": 51
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "object",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
      "params": [],
      "returnType": {
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 90
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
                    "start": 92,
                    "end": 93
                  },
                  "typeArguments": null,
                  "start": 92,
                  "end": 93
                },
                "start": 90,
                "end": 93
              },
              "accessibility": null,
              "static": false,
              "start": 85,
              "end": 93
            }
          ],
          "start": 83,
          "end": 95
        },
        "start": 81,
        "end": 95
      },
      "body": null,
      "expression": false,
      "start": 53,
      "end": 96
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "homomorphic",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 125
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
              "start": 126,
              "end": 127
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 126,
            "end": 127
          }
        ],
        "start": 125,
        "end": 128
      },
      "params": [],
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
            "start": 135,
            "end": 136
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
                "start": 146,
                "end": 147
              },
              "typeArguments": null,
              "start": 146,
              "end": 147
            },
            "start": 140,
            "end": 147
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
                "start": 150,
                "end": 151
              },
              "typeArguments": null,
              "start": 150,
              "end": 151
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "typeArguments": null,
              "start": 152,
              "end": 153
            },
            "start": 150,
            "end": 154
          },
          "optional": false,
          "readonly": null,
          "start": 132,
          "end": 156
        },
        "start": 130,
        "end": 156
      },
      "body": null,
      "expression": false,
      "start": 97,
      "end": 157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mappedValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 184
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 194
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 195,
                        "end": 201
                      }
                    ],
                    "start": 194,
                    "end": 202
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 188,
                  "end": 204
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 212
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 213,
                        "end": 219
                      }
                    ],
                    "start": 212,
                    "end": 220
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 206,
                  "end": 222
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 230
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 231,
                        "end": 238
                      }
                    ],
                    "start": 230,
                    "end": 239
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 224,
                  "end": 241
                }
              ],
              "start": 187,
              "end": 242
            },
            "definite": false,
            "start": 172,
            "end": 242
          }
        ],
        "declare": false,
        "start": 166,
        "end": 243
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 159,
      "end": 243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "objectValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 269
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 279
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 280,
                        "end": 286
                      }
                    ],
                    "start": 279,
                    "end": 287
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 273,
                  "end": 289
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 297
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 298,
                        "end": 304
                      }
                    ],
                    "start": 297,
                    "end": 305
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 291,
                  "end": 307
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 315
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 316,
                        "end": 323
                      }
                    ],
                    "start": 315,
                    "end": 324
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 309,
                  "end": 326
                }
              ],
              "start": 272,
              "end": 327
            },
            "definite": false,
            "start": 257,
            "end": 327
          }
        ],
        "declare": false,
        "start": 251,
        "end": 328
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 244,
      "end": 328
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "reversedMappedValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 362
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 372
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 373,
                        "end": 380
                      }
                    ],
                    "start": 372,
                    "end": 381
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 366,
                  "end": 383
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 391
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 392,
                        "end": 398
                      }
                    ],
                    "start": 391,
                    "end": 399
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 385,
                  "end": 401
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 409
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 410,
                        "end": 416
                      }
                    ],
                    "start": 409,
                    "end": 417
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 403,
                  "end": 419
                }
              ],
              "start": 365,
              "end": 420
            },
            "definite": false,
            "start": 342,
            "end": 420
          }
        ],
        "declare": false,
        "start": 336,
        "end": 421
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 329,
      "end": 421
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 433,
        "end": 444
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 452
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 454,
                "end": 460
              },
              "start": 452,
              "end": 460
            },
            "accessibility": null,
            "static": false,
            "start": 447,
            "end": 460
          }
        ],
        "start": 445,
        "end": 462
      },
      "declare": false,
      "start": 423,
      "end": 462
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 484
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 492
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 494,
                "end": 500
              },
              "start": 492,
              "end": 500
            },
            "accessibility": null,
            "static": false,
            "start": 487,
            "end": 500
          }
        ],
        "start": 485,
        "end": 502
      },
      "declare": false,
      "start": 463,
      "end": 502
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BooleanValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 525
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 533
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 535,
                "end": 542
              },
              "start": 533,
              "end": 542
            },
            "accessibility": null,
            "static": false,
            "start": 528,
            "end": 542
          }
        ],
        "start": 526,
        "end": 544
      },
      "declare": false,
      "start": 503,
      "end": 544
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "homomorphicValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 576
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "homomorphic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 585,
                    "end": 596
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumberValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 608
                        },
                        "typeArguments": null,
                        "start": 597,
                        "end": 608
                      }
                    ],
                    "start": 596,
                    "end": 609
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 585,
                  "end": 611
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "homomorphic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
                    "end": 628
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StringValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 640
                        },
                        "typeArguments": null,
                        "start": 629,
                        "end": 640
                      }
                    ],
                    "start": 628,
                    "end": 641
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 617,
                  "end": 643
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "homomorphic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
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
                          "name": "BooleanValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 661,
                          "end": 673
                        },
                        "typeArguments": null,
                        "start": 661,
                        "end": 673
                      }
                    ],
                    "start": 660,
                    "end": 674
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 649,
                  "end": 676
                }
              ],
              "start": 579,
              "end": 678
            },
            "definite": false,
            "start": 559,
            "end": 678
          }
        ],
        "declare": false,
        "start": 553,
        "end": 679
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 546,
      "end": 679
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "reversedHomomorphicValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 718
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "homomorphic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 738
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BooleanValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 739,
                          "end": 751
                        },
                        "typeArguments": null,
                        "start": 739,
                        "end": 751
                      }
                    ],
                    "start": 738,
                    "end": 752
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 727,
                  "end": 754
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "homomorphic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 771
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StringValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 772,
                          "end": 783
                        },
                        "typeArguments": null,
                        "start": 772,
                        "end": 783
                      }
                    ],
                    "start": 771,
                    "end": 784
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 760,
                  "end": 786
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "homomorphic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 792,
                    "end": 803
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumberValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 804,
                          "end": 815
                        },
                        "typeArguments": null,
                        "start": 804,
                        "end": 815
                      }
                    ],
                    "start": 803,
                    "end": 816
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 792,
                  "end": 818
                }
              ],
              "start": 721,
              "end": 820
            },
            "definite": false,
            "start": 693,
            "end": 820
          }
        ],
        "declare": false,
        "start": 687,
        "end": 821
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 680,
      "end": 821
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 821
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 35,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 85,
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
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 97,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 105,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "homomorphic",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 159,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "mappedValues",
    "start": 172,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "mapped",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 195,
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
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
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
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 231,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 244,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "objectValues",
    "start": 257,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 316,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 329,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 336,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "reversedMappedValues",
    "start": 342,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 373,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 423,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "StringValue",
    "start": 433,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 447,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 463,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "NumberValue",
    "start": 473,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 503,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "BooleanValue",
    "start": 513,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 535,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 546,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 553,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "homomorphicValues",
    "start": 559,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "homomorphic",
    "start": 585,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "NumberValue",
    "start": 597,
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
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "homomorphic",
    "start": 617,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "StringValue",
    "start": 629,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "homomorphic",
    "start": 649,
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
    "value": "BooleanValue",
    "start": 661,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 680,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 687,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "reversedHomomorphicValues",
    "start": 693,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "homomorphic",
    "start": 727,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "BooleanValue",
    "start": 739,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "homomorphic",
    "start": 760,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "StringValue",
    "start": 772,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "homomorphic",
    "start": 792,
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
    "value": "NumberValue",
    "start": 804,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  }
]
```

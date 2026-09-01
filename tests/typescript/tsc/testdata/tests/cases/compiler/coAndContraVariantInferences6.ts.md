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
        "name": "ExactProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 77
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
              "start": 82,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 89,
                      "end": 92
                    },
                    "start": 89,
                    "end": 92
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 95,
                      "end": 98
                    },
                    "start": 95,
                    "end": 98
                  }
                ],
                "start": 89,
                "end": 98
              },
              "start": 87,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 99
          }
        ],
        "start": 78,
        "end": 101
      },
      "declare": false,
      "start": 57,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 129
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 134,
              "end": 136
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 130,
            "end": 136
          }
        ],
        "start": 129,
        "end": 137
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
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
                      "start": 150,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 151
                  },
                  "start": 148,
                  "end": 151
                },
                "start": 143,
                "end": 151
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 166
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 167,
                          "end": 170
                        }
                      ],
                      "start": 166,
                      "end": 171
                    },
                    "start": 154,
                    "end": 171
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 174,
                    "end": 178
                  }
                ],
                "start": 154,
                "end": 178
              },
              "start": 152,
              "end": 178
            },
            "start": 142,
            "end": 179
          }
        ],
        "start": 138,
        "end": 181
      },
      "declare": false,
      "start": 102,
      "end": 181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 205
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 207
          }
        ],
        "start": 205,
        "end": 208
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
              "start": 213,
              "end": 224
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
                  "name": "props",
                  "optional": false,
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
                        "start": 232,
                        "end": 233
                      },
                      "typeArguments": null,
                      "start": 232,
                      "end": 233
                    },
                    "start": 230,
                    "end": 233
                  },
                  "start": 225,
                  "end": 233
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 224,
              "end": 235
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 213,
            "end": 235
          }
        ],
        "start": 209,
        "end": 237
      },
      "abstract": false,
      "declare": true,
      "start": 182,
      "end": 237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 262
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 267,
              "end": 269
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 269
          }
        ],
        "start": 262,
        "end": 270
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
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
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  },
                  "start": 285,
                  "end": 288
                },
                "start": 280,
                "end": 288
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 300
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
                        "start": 301,
                        "end": 302
                      },
                      "typeArguments": null,
                      "start": 301,
                      "end": 302
                    }
                  ],
                  "start": 300,
                  "end": 303
                },
                "start": 291,
                "end": 303
              },
              "start": 289,
              "end": 303
            },
            "start": 275,
            "end": 304
          }
        ],
        "start": 271,
        "end": 306
      },
      "declare": false,
      "start": 238,
      "end": 306
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 330
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
              "start": 334,
              "end": 335
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 344,
                  "end": 350
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 374
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 375,
                        "end": 378
                      }
                    ],
                    "start": 374,
                    "end": 379
                  },
                  "start": 353,
                  "end": 379
                }
              ],
              "start": 344,
              "end": 379
            },
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 388,
                  "end": 394
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 422
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 423,
                        "end": 426
                      }
                    ],
                    "start": 422,
                    "end": 427
                  },
                  "start": 401,
                  "end": 427
                }
              ],
              "start": 386,
              "end": 427
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 334,
            "end": 427
          }
        ],
        "start": 330,
        "end": 430
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 439
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
                  "start": 441,
                  "end": 442
                },
                "typeArguments": null,
                "start": 441,
                "end": 442
              },
              "start": 439,
              "end": 442
            },
            "accessibility": null,
            "static": false,
            "start": 435,
            "end": 443
          }
        ],
        "start": 431,
        "end": 445
      },
      "declare": false,
      "start": 308,
      "end": 445
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSXElementConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 473
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 475
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 474,
            "end": 475
          }
        ],
        "start": 473,
        "end": 476
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
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
                      "start": 492,
                      "end": 493
                    },
                    "typeArguments": null,
                    "start": 492,
                    "end": 493
                  },
                  "start": 490,
                  "end": 493
                },
                "start": 485,
                "end": 493
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 510
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 511,
                          "end": 514
                        }
                      ],
                      "start": 510,
                      "end": 515
                    },
                    "start": 498,
                    "end": 515
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 518,
                    "end": 522
                  }
                ],
                "start": 498,
                "end": 522
              },
              "start": 495,
              "end": 522
            },
            "start": 484,
            "end": 522
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
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
                      "start": 541,
                      "end": 542
                    },
                    "typeArguments": null,
                    "start": 541,
                    "end": 542
                  },
                  "start": 539,
                  "end": 542
                },
                "start": 534,
                "end": 542
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 556
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 557,
                      "end": 560
                    }
                  ],
                  "start": 556,
                  "end": 561
                },
                "start": 547,
                "end": 561
              },
              "start": 544,
              "end": 561
            },
            "start": 529,
            "end": 561
          }
        ],
        "start": 481,
        "end": 562
      },
      "declare": false,
      "start": 447,
      "end": 563
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createElementIsolated",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 603
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 614,
              "end": 616
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 604,
            "end": 616
          }
        ],
        "start": 603,
        "end": 617
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
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
                    "name": "FunctionComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 644
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
                          "start": 645,
                          "end": 646
                        },
                        "typeArguments": null,
                        "start": 645,
                        "end": 646
                      }
                    ],
                    "start": 644,
                    "end": 647
                  },
                  "start": 627,
                  "end": 647
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 664
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
                          "start": 665,
                          "end": 666
                        },
                        "typeArguments": null,
                        "start": 665,
                        "end": 666
                      }
                    ],
                    "start": 664,
                    "end": 667
                  },
                  "start": 650,
                  "end": 667
                },
                {
                  "type": "TSStringKeyword",
                  "start": 670,
                  "end": 676
                }
              ],
              "start": 627,
              "end": 676
            },
            "start": 625,
            "end": 676
          },
          "start": 621,
          "end": 676
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": true,
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
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 689
                  },
                  "typeArguments": null,
                  "start": 688,
                  "end": 689
                },
                {
                  "type": "TSNullKeyword",
                  "start": 692,
                  "end": 696
                }
              ],
              "start": 688,
              "end": 696
            },
            "start": 686,
            "end": 696
          },
          "start": 680,
          "end": 696
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 701,
          "end": 705
        },
        "start": 699,
        "end": 705
      },
      "body": null,
      "expression": false,
      "start": 565,
      "end": 706
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
            "name": "WrapperIsolated",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSXElementConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 758
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExactProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 759,
                        "end": 769
                      },
                      "typeArguments": null,
                      "start": 759,
                      "end": 769
                    }
                  ],
                  "start": 758,
                  "end": 770
                },
                "start": 737,
                "end": 770
              },
              "start": 735,
              "end": 770
            },
            "start": 720,
            "end": 770
          },
          "init": null,
          "definite": false,
          "start": 720,
          "end": 770
        }
      ],
      "declare": true,
      "start": 708,
      "end": 771
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createElementIsolated",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 793
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "WrapperIsolated",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 809
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 813,
                  "end": 818
                },
                "value": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "\"C\"",
                  "start": 820,
                  "end": 823
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 813,
                "end": 823
              }
            ],
            "start": 811,
            "end": 825
          }
        ],
        "optional": false,
        "start": 772,
        "end": 826
      },
      "directive": null,
      "start": 772,
      "end": 827
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
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 850,
                  "end": 853
                },
                "start": 850,
                "end": 855
              },
              "start": 848,
              "end": 855
            },
            "start": 843,
            "end": 855
          },
          "init": null,
          "definite": false,
          "start": 843,
          "end": 855
        }
      ],
      "declare": true,
      "start": 829,
      "end": 856
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
            "name": "stat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 877,
                "end": 880
              },
              "start": 875,
              "end": 880
            },
            "start": 871,
            "end": 880
          },
          "init": null,
          "definite": false,
          "start": 871,
          "end": 880
        }
      ],
      "declare": true,
      "start": 857,
      "end": 881
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 882,
              "end": 884
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 889
            },
            "optional": false,
            "computed": false,
            "start": 882,
            "end": 889
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 895
          },
          "optional": false,
          "computed": false,
          "start": 882,
          "end": 895
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 901
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "stat",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 907
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "properties",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 918
            },
            "optional": false,
            "computed": false,
            "start": 903,
            "end": 918
          }
        ],
        "optional": false,
        "start": 882,
        "end": 919
      },
      "directive": null,
      "start": 882,
      "end": 920
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 920
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "ExactProps",
    "start": 67,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 102,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 112,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 143,
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
    "value": "P",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 154,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 172,
    "end": 173
  },
  {
    "type": "Null",
    "value": "null",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "class",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 213,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 238,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 248,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 291,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 308,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 318,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 336,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 353,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 401,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 435,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 447,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 452,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 485,
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
    "value": "P",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 495,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 498,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 516,
    "end": 517
  },
  {
    "type": "Null",
    "value": "null",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 534,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 544,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 547,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 565,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 573,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "createElementIsolated",
    "start": 582,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 606,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 627,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 645,
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
    "value": "|",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 650,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 670,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 680,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 690,
    "end": 691
  },
  {
    "type": "Null",
    "value": "null",
    "start": 692,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 708,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "WrapperIsolated",
    "start": 720,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 737,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "ExactProps",
    "start": 759,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "createElementIsolated",
    "start": 772,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "WrapperIsolated",
    "start": 794,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 813,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 829,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 837,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 843,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 857,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 865,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "stat",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 885,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 896,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "stat",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 908,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  }
]
```

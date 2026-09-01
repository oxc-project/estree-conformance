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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
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
                  "start": 26,
                  "end": 27
                },
                "typeArguments": null,
                "start": 26,
                "end": 27
              },
              "start": 24,
              "end": 27
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
            "start": 19,
            "end": 28
          }
        ],
        "start": 13,
        "end": 30
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 45
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
              "start": 46,
              "end": 47
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 45,
        "end": 48
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 59
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
              "start": 69,
              "end": 70
            },
            "typeArguments": null,
            "start": 69,
            "end": 70
          },
          "start": 63,
          "end": 70
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 76
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "typeArguments": null,
                  "start": 77,
                  "end": 78
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 79,
                  "end": 80
                },
                "start": 77,
                "end": 81
              }
            ],
            "start": 76,
            "end": 82
          },
          "start": 73,
          "end": 82
        },
        "optional": false,
        "readonly": null,
        "start": 51,
        "end": 85
      },
      "declare": false,
      "start": 32,
      "end": 85
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 110
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
              "start": 111,
              "end": 112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 112
          }
        ],
        "start": 110,
        "end": 113
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
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "start": 119,
              "end": 120
            },
            "start": 117,
            "end": 120
          },
          "start": 114,
          "end": 120
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 131
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
                  "start": 132,
                  "end": 133
                },
                "typeArguments": null,
                "start": 132,
                "end": 133
              }
            ],
            "start": 131,
            "end": 134
          },
          "start": 123,
          "end": 134
        },
        "start": 121,
        "end": 134
      },
      "body": null,
      "expression": false,
      "start": 87,
      "end": 135
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 161
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
              "start": 162,
              "end": 163
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 162,
            "end": 163
          }
        ],
        "start": 161,
        "end": 164
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
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 178
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
                      "start": 179,
                      "end": 180
                    },
                    "typeArguments": null,
                    "start": 179,
                    "end": 180
                  }
                ],
                "start": 178,
                "end": 181
              },
              "start": 170,
              "end": 181
            },
            "start": 168,
            "end": 181
          },
          "start": 165,
          "end": 181
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
            "start": 184,
            "end": 185
          },
          "typeArguments": null,
          "start": 184,
          "end": 185
        },
        "start": 182,
        "end": 185
      },
      "body": null,
      "expression": false,
      "start": 136,
      "end": 186
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bacon",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 203
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
              "name": "isPerfect",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 219
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 221,
                "end": 228
              },
              "start": 219,
              "end": 228
            },
            "accessibility": null,
            "static": false,
            "start": 210,
            "end": 229
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "weight",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 234,
            "end": 249
          }
        ],
        "start": 204,
        "end": 251
      },
      "declare": false,
      "start": 188,
      "end": 251
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxifiedBacon",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 276
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
              "name": "isPerfect",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 292
            },
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
                  "start": 294,
                  "end": 297
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 298,
                      "end": 305
                    }
                  ],
                  "start": 297,
                  "end": 306
                },
                "start": 294,
                "end": 306
              },
              "start": 292,
              "end": 306
            },
            "accessibility": null,
            "static": false,
            "start": 283,
            "end": 307
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "weight",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 318
            },
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
                  "start": 320,
                  "end": 323
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    }
                  ],
                  "start": 323,
                  "end": 331
                },
                "start": 320,
                "end": 331
              },
              "start": 318,
              "end": 331
            },
            "accessibility": null,
            "static": false,
            "start": 312,
            "end": 332
          }
        ],
        "start": 277,
        "end": 334
      },
      "declare": false,
      "start": 253,
      "end": 334
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 347
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bacon",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 356
              },
              "typeArguments": null,
              "start": 351,
              "end": 356
            },
            "start": 349,
            "end": 356
          },
          "start": 348,
          "end": 356
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
                  "name": "bb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 370
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 379
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 380,
                      "end": 381
                    }
                  ],
                  "optional": false,
                  "start": 373,
                  "end": 382
                },
                "definite": false,
                "start": 368,
                "end": 382
              }
            ],
            "declare": false,
            "start": 364,
            "end": 383
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
                  "name": "isPerfect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 401
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 406
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isPerfect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 407,
                      "end": 416
                    },
                    "optional": false,
                    "computed": false,
                    "start": 404,
                    "end": 416
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 422
                  },
                  "optional": false,
                  "computed": false,
                  "start": 404,
                  "end": 422
                },
                "definite": false,
                "start": 392,
                "end": 422
              }
            ],
            "declare": false,
            "start": 388,
            "end": 423
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
                  "name": "weight",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 438
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 443
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "weight",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 450
                    },
                    "optional": false,
                    "computed": false,
                    "start": 441,
                    "end": 450
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 451,
                    "end": 456
                  },
                  "optional": false,
                  "computed": false,
                  "start": 441,
                  "end": 456
                },
                "definite": false,
                "start": 432,
                "end": 456
              }
            ],
            "declare": false,
            "start": 428,
            "end": 457
          }
        ],
        "start": 358,
        "end": 459
      },
      "expression": false,
      "start": 336,
      "end": 459
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 472
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 485
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bacon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 491
                    },
                    "typeArguments": null,
                    "start": 486,
                    "end": 491
                  }
                ],
                "start": 485,
                "end": 492
              },
              "start": 477,
              "end": 492
            },
            "start": 475,
            "end": 492
          },
          "start": 473,
          "end": 492
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 505
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 516
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 519
                    }
                  ],
                  "optional": false,
                  "start": 508,
                  "end": 520
                },
                "definite": false,
                "start": 504,
                "end": 520
              }
            ],
            "declare": false,
            "start": 500,
            "end": 521
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
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 556
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 560
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 570
                  },
                  "optional": false,
                  "computed": false,
                  "start": 559,
                  "end": 570
                },
                "definite": false,
                "start": 552,
                "end": 570
              }
            ],
            "declare": false,
            "start": 548,
            "end": 571
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
                  "name": "weight",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 586
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 589,
                    "end": 590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "weight",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 597
                  },
                  "optional": false,
                  "computed": false,
                  "start": 589,
                  "end": 597
                },
                "definite": false,
                "start": 580,
                "end": 597
              }
            ],
            "declare": false,
            "start": 576,
            "end": 598
          }
        ],
        "start": 494,
        "end": 600
      },
      "expression": false,
      "start": 461,
      "end": 600
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 613
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BoxifiedBacon",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 631
              },
              "typeArguments": null,
              "start": 618,
              "end": 631
            },
            "start": 616,
            "end": 631
          },
          "start": 614,
          "end": 631
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 644
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
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
                          "name": "Bacon",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 656,
                          "end": 661
                        },
                        "typeArguments": null,
                        "start": 656,
                        "end": 661
                      }
                    ],
                    "start": 655,
                    "end": 662
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 663,
                      "end": 665
                    }
                  ],
                  "optional": false,
                  "start": 647,
                  "end": 666
                },
                "definite": false,
                "start": 643,
                "end": 666
              }
            ],
            "declare": false,
            "start": 639,
            "end": 667
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
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 713,
                  "end": 717
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 720,
                    "end": 721
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 731
                  },
                  "optional": false,
                  "computed": false,
                  "start": 720,
                  "end": 731
                },
                "definite": false,
                "start": 713,
                "end": 731
              }
            ],
            "declare": false,
            "start": 709,
            "end": 732
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
                  "name": "weight",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 747
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 752
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "weight",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 753,
                    "end": 759
                  },
                  "optional": false,
                  "computed": false,
                  "start": 750,
                  "end": 759
                },
                "definite": false,
                "start": 741,
                "end": 759
              }
            ],
            "declare": false,
            "start": 737,
            "end": 760
          }
        ],
        "start": 633,
        "end": 762
      },
      "expression": false,
      "start": 602,
      "end": 762
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 762
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 32,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 37,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 73,
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
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 87,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 95,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 114,
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
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 136,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 153,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 170,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "isPerfect",
    "start": 210,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 234,
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
    "value": "number",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 253,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "BoxifiedBacon",
    "start": 263,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "isPerfect",
    "start": 283,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 294,
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
    "value": "boolean",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 336,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "Bacon",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
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
    "value": "let",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 368,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "isPerfect",
    "start": 392,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "isPerfect",
    "start": 407,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 428,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 461,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 477,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 508,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "isPerfect",
    "start": 561,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 576,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 602,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "BoxifiedBacon",
    "start": 618,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 647,
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
    "value": "Bacon",
    "start": 656,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 713,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "isPerfect",
    "start": 722,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 737,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 741,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  }
]
```

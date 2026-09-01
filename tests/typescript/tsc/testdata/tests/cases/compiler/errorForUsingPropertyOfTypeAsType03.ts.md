__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Red",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 46
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 43,
                  "end": 46
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Green",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 61
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 56,
                  "end": 61
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Blue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 75
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 71,
                  "end": 75
                }
              ],
              "start": 33,
              "end": 81
            },
            "const": false,
            "declare": false,
            "start": 22,
            "end": 81
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 94
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "typeArguments": null,
              "start": 97,
              "end": 102
            },
            "declare": false,
            "start": 87,
            "end": 103
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 130
              },
              "typeArguments": null,
              "start": 118,
              "end": 130
            },
            "declare": false,
            "start": 108,
            "end": 131
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 145,
                            "end": 150
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 154
                          },
                          "start": 145,
                          "end": 154
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 163
                        },
                        "start": 145,
                        "end": 163
                      },
                      "typeArguments": null,
                      "start": 145,
                      "end": 163
                    },
                    "start": 143,
                    "end": 163
                  },
                  "start": 141,
                  "end": 163
                },
                "init": null,
                "definite": false,
                "start": 141,
                "end": 163
              }
            ],
            "declare": false,
            "start": 137,
            "end": 164
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 177,
                            "end": 182
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 186
                          },
                          "start": 177,
                          "end": 186
                        },
                        "typeArguments": null,
                        "start": 177,
                        "end": 186
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 187,
                          "end": 197
                        },
                        "start": 187,
                        "end": 197
                      },
                      "start": 177,
                      "end": 198
                    },
                    "start": 175,
                    "end": 198
                  },
                  "start": 173,
                  "end": 198
                },
                "init": null,
                "definite": false,
                "start": 173,
                "end": 198
              }
            ],
            "declare": false,
            "start": 169,
            "end": 199
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 217
                          },
                          "typeArguments": null,
                          "start": 212,
                          "end": 217
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 218,
                            "end": 223
                          },
                          "start": 218,
                          "end": 223
                        },
                        "start": 212,
                        "end": 224
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 225,
                          "end": 235
                        },
                        "start": 225,
                        "end": 235
                      },
                      "start": 212,
                      "end": 236
                    },
                    "start": 210,
                    "end": 236
                  },
                  "start": 208,
                  "end": 236
                },
                "init": null,
                "definite": false,
                "start": 208,
                "end": 236
              }
            ],
            "declare": false,
            "start": 204,
            "end": 237
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
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 353
                          },
                          "typeArguments": null,
                          "start": 341,
                          "end": 353
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 355,
                            "end": 360
                          },
                          "start": 355,
                          "end": 360
                        },
                        "start": 340,
                        "end": 361
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 362,
                          "end": 372
                        },
                        "start": 362,
                        "end": 372
                      },
                      "start": 340,
                      "end": 373
                    },
                    "start": 338,
                    "end": 373
                  },
                  "start": 336,
                  "end": 373
                },
                "init": null,
                "definite": false,
                "start": 336,
                "end": 373
              }
            ],
            "declare": false,
            "start": 332,
            "end": 374
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 390
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 391,
                            "end": 394
                          },
                          "start": 388,
                          "end": 394
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 403
                        },
                        "start": 388,
                        "end": 403
                      },
                      "typeArguments": null,
                      "start": 388,
                      "end": 403
                    },
                    "start": 386,
                    "end": 403
                  },
                  "start": 384,
                  "end": 403
                },
                "init": null,
                "definite": false,
                "start": 384,
                "end": 403
              }
            ],
            "declare": false,
            "start": 380,
            "end": 404
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 417,
                            "end": 419
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 420,
                            "end": 423
                          },
                          "start": 417,
                          "end": 423
                        },
                        "typeArguments": null,
                        "start": 417,
                        "end": 423
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 424,
                          "end": 434
                        },
                        "start": 424,
                        "end": 434
                      },
                      "start": 417,
                      "end": 435
                    },
                    "start": 415,
                    "end": 435
                  },
                  "start": 413,
                  "end": 435
                },
                "init": null,
                "definite": false,
                "start": 413,
                "end": 435
              }
            ],
            "declare": false,
            "start": 409,
            "end": 436
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 449,
                            "end": 451
                          },
                          "typeArguments": null,
                          "start": 449,
                          "end": 451
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 452,
                            "end": 457
                          },
                          "start": 452,
                          "end": 457
                        },
                        "start": 449,
                        "end": 458
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 459,
                          "end": 469
                        },
                        "start": 459,
                        "end": 469
                      },
                      "start": 449,
                      "end": 470
                    },
                    "start": 447,
                    "end": 470
                  },
                  "start": 445,
                  "end": 470
                },
                "init": null,
                "definite": false,
                "start": 445,
                "end": 470
              }
            ],
            "declare": false,
            "start": 441,
            "end": 471
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
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 485,
                            "end": 487
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 491
                          },
                          "start": 485,
                          "end": 491
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 492,
                          "end": 500
                        },
                        "start": 485,
                        "end": 500
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 500
                    },
                    "start": 483,
                    "end": 500
                  },
                  "start": 481,
                  "end": 500
                },
                "init": null,
                "definite": false,
                "start": 481,
                "end": 500
              }
            ],
            "declare": false,
            "start": 477,
            "end": 501
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
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 514,
                            "end": 516
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 517,
                            "end": 520
                          },
                          "start": 514,
                          "end": 520
                        },
                        "typeArguments": null,
                        "start": 514,
                        "end": 520
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 521,
                          "end": 531
                        },
                        "start": 521,
                        "end": 531
                      },
                      "start": 514,
                      "end": 532
                    },
                    "start": 512,
                    "end": 532
                  },
                  "start": 510,
                  "end": 532
                },
                "init": null,
                "definite": false,
                "start": 510,
                "end": 532
              }
            ],
            "declare": false,
            "start": 506,
            "end": 533
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
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 546,
                            "end": 548
                          },
                          "typeArguments": null,
                          "start": 546,
                          "end": 548
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Red",
                            "raw": "\"Red\"",
                            "start": 549,
                            "end": 554
                          },
                          "start": 549,
                          "end": 554
                        },
                        "start": 546,
                        "end": 555
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\"",
                          "start": 556,
                          "end": 566
                        },
                        "start": 556,
                        "end": 566
                      },
                      "start": 546,
                      "end": 567
                    },
                    "start": 544,
                    "end": 567
                  },
                  "start": 542,
                  "end": 567
                },
                "init": null,
                "definite": false,
                "start": 542,
                "end": 567
              }
            ],
            "declare": false,
            "start": 538,
            "end": 568
          }
        ],
        "start": 16,
        "end": 570
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 570
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 43,
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
    "value": "Green",
    "start": 56,
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
    "value": "Blue",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 87,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 118,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 151,
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
    "value": "toString",
    "start": 155,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 177,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 187,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "let",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "String",
    "value": "\"Red\"",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 225,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 341,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "String",
    "value": "\"Red\"",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 361,
    "end": 362
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 362,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 384,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 395,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 423,
    "end": 424
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 424,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 451,
    "end": 452
  },
  {
    "type": "String",
    "value": "\"Red\"",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 459,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 492,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 520,
    "end": 521
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 521,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 538,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "String",
    "value": "\"Red\"",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 555,
    "end": 556
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 556,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  }
]
```

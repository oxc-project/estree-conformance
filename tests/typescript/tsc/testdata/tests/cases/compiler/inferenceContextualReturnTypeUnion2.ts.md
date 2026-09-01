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
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "container",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 39
                },
                "typeArguments": null,
                "start": 28,
                "end": 39
              },
              "start": 26,
              "end": 39
            },
            "start": 17,
            "end": 39
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 50
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 52,
                  "end": 55
                },
                "start": 52,
                "end": 57
              },
              "start": 50,
              "end": 57
            },
            "value": null,
            "start": 43,
            "end": 57
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
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 72
                },
                "typeArguments": null,
                "start": 67,
                "end": 72
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 88
                },
                "typeArguments": null,
                "start": 77,
                "end": 88
              },
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HTMLElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 104
                  },
                  "typeArguments": null,
                  "start": 93,
                  "end": 104
                },
                "start": 93,
                "end": 106
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 118
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 119,
                        "end": 130
                      },
                      "start": 119,
                      "end": 132
                    }
                  ],
                  "start": 118,
                  "end": 133
                },
                "start": 111,
                "end": 133
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 145
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 157
                      },
                      "typeArguments": null,
                      "start": 146,
                      "end": 157
                    }
                  ],
                  "start": 145,
                  "end": 158
                },
                "start": 138,
                "end": 158
              },
              {
                "type": "TSNullKeyword",
                "start": 163,
                "end": 167
              }
            ],
            "start": 65,
            "end": 167
          },
          "start": 60,
          "end": 167
        },
        "start": 13,
        "end": 167
      },
      "declare": false,
      "start": 0,
      "end": 168
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Queries",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 187
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 196,
                    "end": 202
                  },
                  "start": 194,
                  "end": 202
                },
                "start": 193,
                "end": 202
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 210
                },
                "typeArguments": null,
                "start": 205,
                "end": 210
              },
              "start": 203,
              "end": 210
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 192,
            "end": 211
          }
        ],
        "start": 188,
        "end": 213
      },
      "declare": false,
      "start": 170,
      "end": 213
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FindByText",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 230
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
              "start": 231,
              "end": 232
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 252
              },
              "typeArguments": null,
              "start": 241,
              "end": 252
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 266
              },
              "typeArguments": null,
              "start": 255,
              "end": 266
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 266
          }
        ],
        "start": 230,
        "end": 267
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "container",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 296
                },
                "typeArguments": null,
                "start": 285,
                "end": 296
              },
              "start": 283,
              "end": 296
            },
            "start": 274,
            "end": 296
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              },
              "start": 304,
              "end": 312
            },
            "start": 300,
            "end": 312
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 326
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
                    "start": 327,
                    "end": 328
                  },
                  "typeArguments": null,
                  "start": 327,
                  "end": 328
                }
              ],
              "start": 326,
              "end": 329
            },
            "start": 319,
            "end": 329
          },
          "start": 316,
          "end": 329
        },
        "start": 270,
        "end": 329
      },
      "declare": false,
      "start": 215,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "findByLabelText",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 364
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
              "start": 365,
              "end": 366
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 386
              },
              "typeArguments": null,
              "start": 375,
              "end": 386
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 400
              },
              "typeArguments": null,
              "start": 389,
              "end": 400
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 365,
            "end": 400
          }
        ],
        "start": 364,
        "end": 401
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
            "start": 408,
            "end": 412
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Parameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 424
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FindByText",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 435
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
                            "start": 436,
                            "end": 437
                          },
                          "typeArguments": null,
                          "start": 436,
                          "end": 437
                        }
                      ],
                      "start": 435,
                      "end": 438
                    },
                    "start": 425,
                    "end": 438
                  }
                ],
                "start": 424,
                "end": 439
              },
              "start": 414,
              "end": 439
            },
            "start": 412,
            "end": 439
          },
          "value": null,
          "start": 405,
          "end": 439
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 453
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FindByText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 464
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
                        "start": 465,
                        "end": 466
                      },
                      "typeArguments": null,
                      "start": 465,
                      "end": 466
                    }
                  ],
                  "start": 464,
                  "end": 467
                },
                "start": 454,
                "end": 467
              }
            ],
            "start": 453,
            "end": 468
          },
          "start": 443,
          "end": 468
        },
        "start": 441,
        "end": 468
      },
      "body": null,
      "expression": false,
      "start": 332,
      "end": 469
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
            "name": "queries",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 484
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findByLabelText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 506
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findByLabelText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 506
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 491,
                "end": 506
              }
            ],
            "start": 487,
            "end": 509
          },
          "definite": false,
          "start": 477,
          "end": 509
        }
      ],
      "declare": false,
      "start": 471,
      "end": 510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapQueries",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 527
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 529
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Queries",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 545
              },
              "typeArguments": null,
              "start": 538,
              "end": 545
            },
            "default": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 562
              },
              "typeArguments": null,
              "start": 548,
              "end": 562
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 562
          }
        ],
        "start": 527,
        "end": 563
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 571,
          "end": 572
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 583
            },
            "typeArguments": null,
            "start": 582,
            "end": 583
          },
          "start": 576,
          "end": 583
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "typeArguments": null,
            "start": 586,
            "end": 587
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            "typeArguments": null,
            "start": 588,
            "end": 589
          },
          "start": 586,
          "end": 590
        },
        "optional": false,
        "readonly": null,
        "start": 566,
        "end": 593
      },
      "declare": false,
      "start": 512,
      "end": 594
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 594
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
    "value": "Query",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "container",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 28,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 77,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 93,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 119,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 146,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 161,
    "end": 162
  },
  {
    "type": "Null",
    "value": "null",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 170,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 215,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "FindByText",
    "start": 220,
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
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 233,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 241,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 255,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "container",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 285,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 300,
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
    "value": "string",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 316,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 332,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 340,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "findByLabelText",
    "start": 349,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 367,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 375,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 389,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 414,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "FindByText",
    "start": 425,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
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
    "value": ">",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 443,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "FindByText",
    "start": 454,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 471,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "queries",
    "start": 477,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "findByLabelText",
    "start": 491,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 512,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "MapQueries",
    "start": 517,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 530,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 538,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 548,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "queries",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 573,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 576,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  }
]
```

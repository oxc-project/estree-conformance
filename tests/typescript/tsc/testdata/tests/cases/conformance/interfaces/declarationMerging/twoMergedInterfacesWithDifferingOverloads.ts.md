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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 87,
                    "end": 93
                  },
                  "start": 85,
                  "end": 93
                },
                "start": 84,
                "end": 93
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 80,
            "end": 103
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 111
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 115,
                    "end": 121
                  },
                  "start": 113,
                  "end": 121
                },
                "start": 112,
                "end": 121
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 108,
            "end": 131
          }
        ],
        "start": 74,
        "end": 133
      },
      "declare": false,
      "start": 62,
      "end": 133
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 146
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 160,
                    "end": 164
                  },
                  "start": 158,
                  "end": 164
                },
                "start": 157,
                "end": 164
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 171
                },
                "typeArguments": null,
                "start": 167,
                "end": 171
              },
              "start": 165,
              "end": 171
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 153,
            "end": 172
          }
        ],
        "start": 147,
        "end": 174
      },
      "declare": false,
      "start": 135,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 187
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
              "start": 188,
              "end": 189
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 188,
            "end": 189
          }
        ],
        "start": 187,
        "end": 190
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 200
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 204,
                    "end": 205
                  },
                  "start": 202,
                  "end": 205
                },
                "start": 201,
                "end": 205
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 208,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 197,
            "end": 215
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 223
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 227,
                    "end": 233
                  },
                  "start": 225,
                  "end": 233
                },
                "start": 224,
                "end": 233
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              },
              "start": 234,
              "end": 242
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 220,
            "end": 243
          }
        ],
        "start": 191,
        "end": 245
      },
      "declare": false,
      "start": 176,
      "end": 245
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 258
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
              "start": 259,
              "end": 260
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 259,
            "end": 260
          }
        ],
        "start": 258,
        "end": 261
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 271
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 276
                    },
                    "typeArguments": null,
                    "start": 275,
                    "end": 276
                  },
                  "start": 273,
                  "end": 276
                },
                "start": 272,
                "end": 276
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 283
                },
                "typeArguments": null,
                "start": 279,
                "end": 283
              },
              "start": 277,
              "end": 283
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 268,
            "end": 284
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 292
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 300
                  },
                  "start": 294,
                  "end": 300
                },
                "start": 293,
                "end": 300
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 303,
                "end": 309
              },
              "start": 301,
              "end": 309
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 289,
            "end": 310
          }
        ],
        "start": 262,
        "end": 312
      },
      "declare": false,
      "start": 247,
      "end": 312
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 322
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 323,
                      "end": 330
                    }
                  ],
                  "start": 322,
                  "end": 331
                },
                "start": 321,
                "end": 331
              },
              "start": 319,
              "end": 331
            },
            "start": 318,
            "end": 331
          },
          "init": null,
          "definite": false,
          "start": 318,
          "end": 331
        }
      ],
      "declare": false,
      "start": 314,
      "end": 332
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 346
              },
              "optional": false,
              "computed": false,
              "start": 341,
              "end": 346
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 347,
                "end": 351
              }
            ],
            "optional": false,
            "start": 341,
            "end": 352
          },
          "definite": false,
          "start": 337,
          "end": 352
        }
      ],
      "declare": false,
      "start": 333,
      "end": 353
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 406
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
              "start": 407,
              "end": 408
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 407,
            "end": 408
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 411
          }
        ],
        "start": 406,
        "end": 412
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 422
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 427
                    },
                    "typeArguments": null,
                    "start": 426,
                    "end": 427
                  },
                  "start": 424,
                  "end": 427
                },
                "start": 423,
                "end": 427
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 433
                    },
                    "typeArguments": null,
                    "start": 432,
                    "end": 433
                  },
                  "start": 430,
                  "end": 433
                },
                "start": 429,
                "end": 433
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 436,
                "end": 442
              },
              "start": 434,
              "end": 442
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 419,
            "end": 443
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 451
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  },
                  "start": 453,
                  "end": 461
                },
                "start": 452,
                "end": 461
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 466,
                    "end": 472
                  },
                  "start": 464,
                  "end": 472
                },
                "start": 463,
                "end": 472
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 475,
                "end": 481
              },
              "start": 473,
              "end": 481
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 448,
            "end": 482
          }
        ],
        "start": 413,
        "end": 484
      },
      "declare": false,
      "start": 395,
      "end": 484
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 497
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
              "start": 498,
              "end": 499
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 498,
            "end": 499
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 502
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 501,
            "end": 502
          }
        ],
        "start": 497,
        "end": 503
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 513
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 515
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 514,
                  "end": 515
                }
              ],
              "start": 513,
              "end": 516
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
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 521
                    },
                    "typeArguments": null,
                    "start": 520,
                    "end": 521
                  },
                  "start": 518,
                  "end": 521
                },
                "start": 517,
                "end": 521
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
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 527
                    },
                    "typeArguments": null,
                    "start": 526,
                    "end": 527
                  },
                  "start": 524,
                  "end": 527
                },
                "start": 523,
                "end": 527
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 531
                },
                "typeArguments": null,
                "start": 530,
                "end": 531
              },
              "start": 528,
              "end": 531
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 510,
            "end": 532
          }
        ],
        "start": 504,
        "end": 534
      },
      "declare": false,
      "start": 486,
      "end": 534
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 544
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 545,
                      "end": 552
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 558
                      },
                      "typeArguments": null,
                      "start": 554,
                      "end": 558
                    }
                  ],
                  "start": 544,
                  "end": 559
                },
                "start": 543,
                "end": 559
              },
              "start": 541,
              "end": 559
            },
            "start": 540,
            "end": 559
          },
          "init": null,
          "definite": false,
          "start": 540,
          "end": 559
        }
      ],
      "declare": false,
      "start": 536,
      "end": 560
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 567
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 571
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 575
              },
              "optional": false,
              "computed": false,
              "start": 570,
              "end": 575
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 576,
                "end": 577
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 579,
                "end": 580
              }
            ],
            "optional": false,
            "start": 570,
            "end": 581
          },
          "definite": false,
          "start": 565,
          "end": 581
        }
      ],
      "declare": false,
      "start": 561,
      "end": 582
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 653
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
              "start": 654,
              "end": 655
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 654,
            "end": 655
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 658
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 657,
            "end": 658
          }
        ],
        "start": 653,
        "end": 659
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 666,
              "end": 667
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
                  "start": 669,
                  "end": 670
                },
                "typeArguments": null,
                "start": 669,
                "end": 670
              },
              "start": 667,
              "end": 670
            },
            "accessibility": null,
            "static": false,
            "start": 666,
            "end": 671
          },
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
              "start": 676,
              "end": 677
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 680
                },
                "typeArguments": null,
                "start": 679,
                "end": 680
              },
              "start": 677,
              "end": 680
            },
            "accessibility": null,
            "static": false,
            "start": 676,
            "end": 681
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 689
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 691
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 690,
                  "end": 691
                }
              ],
              "start": 689,
              "end": 692
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 696,
                      "end": 697
                    },
                    "typeArguments": null,
                    "start": 696,
                    "end": 697
                  },
                  "start": 694,
                  "end": 697
                },
                "start": 693,
                "end": 697
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 702,
                      "end": 703
                    },
                    "typeArguments": null,
                    "start": 702,
                    "end": 703
                  },
                  "start": 700,
                  "end": 703
                },
                "start": 699,
                "end": 703
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 707
                },
                "typeArguments": null,
                "start": 706,
                "end": 707
              },
              "start": 704,
              "end": 707
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 686,
            "end": 708
          }
        ],
        "start": 660,
        "end": 710
      },
      "declare": false,
      "start": 642,
      "end": 710
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 723
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
              "start": 724,
              "end": 725
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 724,
            "end": 725
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 728
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 727,
            "end": 728
          }
        ],
        "start": 723,
        "end": 729
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 739
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 740,
                    "end": 741
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 740,
                  "end": 741
                }
              ],
              "start": 739,
              "end": 742
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
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 747
                    },
                    "typeArguments": null,
                    "start": 746,
                    "end": 747
                  },
                  "start": 744,
                  "end": 747
                },
                "start": 743,
                "end": 747
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
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 752,
                      "end": 753
                    },
                    "typeArguments": null,
                    "start": 752,
                    "end": 753
                  },
                  "start": 750,
                  "end": 753
                },
                "start": 749,
                "end": 753
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
                  "start": 756,
                  "end": 757
                },
                "typeArguments": null,
                "start": 756,
                "end": 757
              },
              "start": 754,
              "end": 757
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 736,
            "end": 758
          }
        ],
        "start": 730,
        "end": 760
      },
      "declare": false,
      "start": 712,
      "end": 760
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 770
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 771,
                      "end": 778
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 780,
                        "end": 784
                      },
                      "typeArguments": null,
                      "start": 780,
                      "end": 784
                    }
                  ],
                  "start": 770,
                  "end": 785
                },
                "start": 769,
                "end": 785
              },
              "start": 767,
              "end": 785
            },
            "start": 766,
            "end": 785
          },
          "init": null,
          "definite": false,
          "start": 766,
          "end": 785
        }
      ],
      "declare": false,
      "start": 762,
      "end": 786
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 793
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 797
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 801
              },
              "optional": false,
              "computed": false,
              "start": 796,
              "end": 801
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 802,
                "end": 803
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 805,
                "end": 806
              }
            ],
            "optional": false,
            "start": 796,
            "end": 807
          },
          "definite": false,
          "start": 791,
          "end": 807
        }
      ],
      "declare": false,
      "start": 787,
      "end": 808
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 841
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
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
    "value": "foo",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 135,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 176,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 227,
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
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 247,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 323,
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
    "type": "Keyword",
    "value": "var",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 395,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "y",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 486,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
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
    "value": "x",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 545,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 642,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "a",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 712,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "W",
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
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 762,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 771,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 780,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  }
]
```

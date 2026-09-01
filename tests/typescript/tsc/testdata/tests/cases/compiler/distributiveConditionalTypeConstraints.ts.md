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
        "name": "IsArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
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
            "start": 18,
            "end": 19
          },
          "typeArguments": null,
          "start": 18,
          "end": 19
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSUnknownKeyword",
            "start": 28,
            "end": 35
          },
          "start": 28,
          "end": 37
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 40,
            "end": 44
          },
          "start": 40,
          "end": 44
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 47,
            "end": 52
          },
          "start": 47,
          "end": 52
        },
        "start": 18,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
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
              "start": 67,
              "end": 68
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 77,
              "end": 83
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 83
          }
        ],
        "start": 66,
        "end": 84
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
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 95
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
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  }
                ],
                "start": 95,
                "end": 98
              },
              "start": 88,
              "end": 98
            },
            "start": 86,
            "end": 98
          },
          "start": 85,
          "end": 98
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 113,
                        "end": 117
                      },
                      "start": 113,
                      "end": 117
                    },
                    "start": 111,
                    "end": 117
                  },
                  "start": 110,
                  "end": 117
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "definite": false,
                "start": 110,
                "end": 121
              }
            ],
            "declare": false,
            "start": 106,
            "end": 122
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 145,
                        "end": 150
                      },
                      "start": 145,
                      "end": 150
                    },
                    "start": 143,
                    "end": 150
                  },
                  "start": 142,
                  "end": 150
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "definite": false,
                "start": 142,
                "end": 154
              }
            ],
            "declare": false,
            "start": 138,
            "end": 155
          }
        ],
        "start": 100,
        "end": 167
      },
      "expression": false,
      "start": 55,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 180
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
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 191,
                "end": 198
              },
              "start": 191,
              "end": 200
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 200
          }
        ],
        "start": 180,
        "end": 201
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
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 212
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
                      "start": 213,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 213,
                    "end": 214
                  }
                ],
                "start": 212,
                "end": 215
              },
              "start": 205,
              "end": 215
            },
            "start": 203,
            "end": 215
          },
          "start": 202,
          "end": 215
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 230,
                        "end": 234
                      },
                      "start": 230,
                      "end": 234
                    },
                    "start": 228,
                    "end": 234
                  },
                  "start": 227,
                  "end": 234
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "definite": false,
                "start": 227,
                "end": 238
              }
            ],
            "declare": false,
            "start": 223,
            "end": 239
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 251,
                        "end": 256
                      },
                      "start": 251,
                      "end": 256
                    },
                    "start": 249,
                    "end": 256
                  },
                  "start": 248,
                  "end": 256
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 260
                },
                "definite": false,
                "start": 248,
                "end": 260
              }
            ],
            "declare": false,
            "start": 244,
            "end": 261
          }
        ],
        "start": 217,
        "end": 273
      },
      "expression": false,
      "start": 169,
      "end": 273
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
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
              "start": 287,
              "end": 288
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 297,
                "end": 303
              },
              "start": 297,
              "end": 305
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 287,
            "end": 305
          }
        ],
        "start": 286,
        "end": 306
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
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 317
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
                      "start": 318,
                      "end": 319
                    },
                    "typeArguments": null,
                    "start": 318,
                    "end": 319
                  }
                ],
                "start": 317,
                "end": 320
              },
              "start": 310,
              "end": 320
            },
            "start": 308,
            "end": 320
          },
          "start": 307,
          "end": 320
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 335,
                        "end": 339
                      },
                      "start": 335,
                      "end": 339
                    },
                    "start": 333,
                    "end": 339
                  },
                  "start": 332,
                  "end": 339
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "definite": false,
                "start": 332,
                "end": 343
              }
            ],
            "declare": false,
            "start": 328,
            "end": 344
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 356,
                        "end": 361
                      },
                      "start": 356,
                      "end": 361
                    },
                    "start": 354,
                    "end": 361
                  },
                  "start": 353,
                  "end": 361
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "definite": false,
                "start": 353,
                "end": 365
              }
            ],
            "declare": false,
            "start": 349,
            "end": 366
          }
        ],
        "start": 322,
        "end": 378
      },
      "expression": false,
      "start": 275,
      "end": 378
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
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
              "start": 392,
              "end": 393
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 410
              },
              "typeArguments": null,
              "start": 402,
              "end": 410
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 392,
            "end": 410
          }
        ],
        "start": 391,
        "end": 411
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
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 422
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
                      "start": 423,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 423,
                    "end": 424
                  }
                ],
                "start": 422,
                "end": 425
              },
              "start": 415,
              "end": 425
            },
            "start": 413,
            "end": 425
          },
          "start": 412,
          "end": 425
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 440,
                        "end": 444
                      },
                      "start": 440,
                      "end": 444
                    },
                    "start": 438,
                    "end": 444
                  },
                  "start": 437,
                  "end": 444
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 448
                },
                "definite": false,
                "start": 437,
                "end": 448
              }
            ],
            "declare": false,
            "start": 433,
            "end": 449
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 472,
                        "end": 477
                      },
                      "start": 472,
                      "end": 477
                    },
                    "start": 470,
                    "end": 477
                  },
                  "start": 469,
                  "end": 477
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 481
                },
                "definite": false,
                "start": 469,
                "end": 481
              }
            ],
            "declare": false,
            "start": 465,
            "end": 482
          }
        ],
        "start": 427,
        "end": 484
      },
      "expression": false,
      "start": 380,
      "end": 484
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZeroOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
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
          }
        ],
        "start": 497,
        "end": 500
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
            "start": 507,
            "end": 508
          },
          "typeArguments": null,
          "start": 507,
          "end": 508
        },
        "extendsType": {
          "type": "TSNullKeyword",
          "start": 517,
          "end": 521
        },
        "trueType": {
          "type": "TSNullKeyword",
          "start": 524,
          "end": 528
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 536
            },
            "typeArguments": null,
            "start": 535,
            "end": 536
          },
          "extendsType": {
            "type": "TSUndefinedKeyword",
            "start": 545,
            "end": 554
          },
          "trueType": {
            "type": "TSUndefinedKeyword",
            "start": 557,
            "end": 566
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 574
              },
              "typeArguments": null,
              "start": 573,
              "end": 574
            },
            "extendsType": {
              "type": "TSStringKeyword",
              "start": 583,
              "end": 589
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 592,
                "end": 594
              },
              "start": 592,
              "end": 594
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 602
                },
                "typeArguments": null,
                "start": 601,
                "end": 602
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 611,
                "end": 617
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 620,
                  "end": 621
                },
                "start": 620,
                "end": 621
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "typeArguments": null,
                  "start": 628,
                  "end": 629
                },
                "extendsType": {
                  "type": "TSBooleanKeyword",
                  "start": 638,
                  "end": 645
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 648,
                    "end": 653
                  },
                  "start": 648,
                  "end": 653
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 660,
                  "end": 665
                },
                "start": 628,
                "end": 665
              },
              "start": 601,
              "end": 665
            },
            "start": 573,
            "end": 665
          },
          "start": 535,
          "end": 665
        },
        "start": 507,
        "end": 665
      },
      "declare": false,
      "start": 486,
      "end": 666
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 680
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
              "start": 681,
              "end": 682
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 691,
              "end": 693
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 681,
            "end": 693
          }
        ],
        "start": 680,
        "end": 694
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
                "name": "ZeroOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 704
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
                      "start": 705,
                      "end": 706
                    },
                    "typeArguments": null,
                    "start": 705,
                    "end": 706
                  }
                ],
                "start": 704,
                "end": 707
              },
              "start": 698,
              "end": 707
            },
            "start": 696,
            "end": 707
          },
          "start": 695,
          "end": 707
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 722,
                            "end": 724
                          },
                          "start": 722,
                          "end": 724
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 727,
                            "end": 728
                          },
                          "start": 727,
                          "end": 728
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 731,
                            "end": 736
                          },
                          "start": 731,
                          "end": 736
                        }
                      ],
                      "start": 722,
                      "end": 736
                    },
                    "start": 720,
                    "end": 736
                  },
                  "start": 719,
                  "end": 736
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "definite": false,
                "start": 719,
                "end": 740
              }
            ],
            "declare": false,
            "start": 715,
            "end": 741
          }
        ],
        "start": 709,
        "end": 743
      },
      "expression": false,
      "start": 668,
      "end": 743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 753
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
              "start": 754,
              "end": 755
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 754,
            "end": 755
          }
        ],
        "start": 753,
        "end": 756
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
            "start": 759,
            "end": 760
          },
          "typeArguments": null,
          "start": 759,
          "end": 760
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 769,
                "end": 774
              },
              "start": 769,
              "end": 774
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 777,
                "end": 779
              },
              "start": 777,
              "end": 779
            }
          ],
          "start": 769,
          "end": 779
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 782,
            "end": 786
          },
          "start": 782,
          "end": 786
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 789,
            "end": 794
          },
          "start": 789,
          "end": 794
        },
        "start": 759,
        "end": 794
      },
      "declare": false,
      "start": 745,
      "end": 795
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 809
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
              "start": 810,
              "end": 811
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 820,
              "end": 826
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 810,
            "end": 826
          }
        ],
        "start": 809,
        "end": 827
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 831,
                "end": 834
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
                      "start": 835,
                      "end": 836
                    },
                    "typeArguments": null,
                    "start": 835,
                    "end": 836
                  }
                ],
                "start": 834,
                "end": 837
              },
              "start": 831,
              "end": 837
            },
            "start": 829,
            "end": 837
          },
          "start": 828,
          "end": 837
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 852,
                        "end": 857
                      },
                      "start": 852,
                      "end": 857
                    },
                    "start": 850,
                    "end": 857
                  },
                  "start": 849,
                  "end": 857
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                },
                "definite": false,
                "start": 849,
                "end": 861
              }
            ],
            "declare": false,
            "start": 845,
            "end": 862
          }
        ],
        "start": 839,
        "end": 874
      },
      "expression": false,
      "start": 797,
      "end": 874
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 918
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
              "start": 921,
              "end": 924
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 928,
                "end": 932
              },
              "start": 926,
              "end": 932
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 921,
            "end": 933
          }
        ],
        "start": 919,
        "end": 935
      },
      "declare": false,
      "start": 907,
      "end": 935
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 946,
        "end": 947
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 953
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 957,
                "end": 961
              },
              "start": 955,
              "end": 961
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 950,
            "end": 962
          }
        ],
        "start": 948,
        "end": 964
      },
      "declare": false,
      "start": 936,
      "end": 964
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 975,
        "end": 976
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
              "start": 979,
              "end": 982
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 986,
                "end": 990
              },
              "start": 984,
              "end": 990
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 979,
            "end": 991
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 995
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 999,
                "end": 1003
              },
              "start": 997,
              "end": 1003
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 992,
            "end": 1003
          }
        ],
        "start": 977,
        "end": 1005
      },
      "declare": false,
      "start": 965,
      "end": 1005
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1016,
        "end": 1021
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
              "start": 1022,
              "end": 1023
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1033
              },
              "typeArguments": null,
              "start": 1032,
              "end": 1033
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1022,
            "end": 1033
          }
        ],
        "start": 1021,
        "end": 1034
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 1038,
                  "end": 1039
                },
                "typeArguments": null,
                "start": 1038,
                "end": 1039
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1048,
                  "end": 1049
                },
                "typeArguments": null,
                "start": 1048,
                "end": 1049
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1052,
                "end": 1058
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1061,
                "end": 1067
              },
              "start": 1038,
              "end": 1067
            },
            "start": 1036,
            "end": 1067
          },
          "start": 1035,
          "end": 1067
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1087
                },
                "prefix": true,
                "start": 1079,
                "end": 1087
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1091,
                "end": 1099
              },
              "start": 1079,
              "end": 1099
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1112
                  },
                  "directive": null,
                  "start": 1111,
                  "end": 1113
                }
              ],
              "start": 1101,
              "end": 1153
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1173,
                    "end": 1174
                  },
                  "directive": null,
                  "start": 1173,
                  "end": 1175
                }
              ],
              "start": 1163,
              "end": 1191
            },
            "start": 1075,
            "end": 1191
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1208,
                          "end": 1214
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1217,
                          "end": 1223
                        }
                      ],
                      "start": 1208,
                      "end": 1223
                    },
                    "start": 1206,
                    "end": 1223
                  },
                  "start": 1202,
                  "end": 1223
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1227
                },
                "definite": false,
                "start": 1202,
                "end": 1227
              }
            ],
            "declare": false,
            "start": 1196,
            "end": 1228
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1237
            },
            "directive": null,
            "start": 1233,
            "end": 1238
          }
        ],
        "start": 1069,
        "end": 1251
      },
      "expression": false,
      "start": 1007,
      "end": 1251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1267
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
              "start": 1268,
              "end": 1269
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1278,
                "end": 1279
              },
              "typeArguments": null,
              "start": 1278,
              "end": 1279
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1268,
            "end": 1279
          }
        ],
        "start": 1267,
        "end": 1280
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 1284,
                  "end": 1285
                },
                "typeArguments": null,
                "start": 1284,
                "end": 1285
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1295
                },
                "typeArguments": null,
                "start": 1294,
                "end": 1295
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1298,
                "end": 1304
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1307,
                "end": 1313
              },
              "start": 1284,
              "end": 1313
            },
            "start": 1282,
            "end": 1313
          },
          "start": 1281,
          "end": 1313
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1332,
                  "end": 1333
                },
                "prefix": true,
                "start": 1325,
                "end": 1333
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1337,
                "end": 1345
              },
              "start": 1325,
              "end": 1345
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1358
                  },
                  "directive": null,
                  "start": 1357,
                  "end": 1359
                }
              ],
              "start": 1347,
              "end": 1375
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1396
                  },
                  "directive": null,
                  "start": 1395,
                  "end": 1397
                }
              ],
              "start": 1385,
              "end": 1437
            },
            "start": 1321,
            "end": 1437
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1454,
                          "end": 1460
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1463,
                          "end": 1469
                        }
                      ],
                      "start": 1454,
                      "end": 1469
                    },
                    "start": 1452,
                    "end": 1469
                  },
                  "start": 1448,
                  "end": 1469
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1472,
                  "end": 1473
                },
                "definite": false,
                "start": 1448,
                "end": 1473
              }
            ],
            "declare": false,
            "start": 1442,
            "end": 1474
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1479,
              "end": 1483
            },
            "directive": null,
            "start": 1479,
            "end": 1484
          }
        ],
        "start": 1315,
        "end": 1498
      },
      "expression": false,
      "start": 1253,
      "end": 1498
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1509,
        "end": 1514
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
              "start": 1515,
              "end": 1516
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1525,
                "end": 1526
              },
              "typeArguments": null,
              "start": 1525,
              "end": 1526
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1515,
            "end": 1526
          }
        ],
        "start": 1514,
        "end": 1527
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 1531,
                  "end": 1532
                },
                "typeArguments": null,
                "start": 1531,
                "end": 1532
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1542
                },
                "typeArguments": null,
                "start": 1541,
                "end": 1542
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1545,
                "end": 1551
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1554,
                "end": 1560
              },
              "start": 1531,
              "end": 1560
            },
            "start": 1529,
            "end": 1560
          },
          "start": 1528,
          "end": 1560
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1579,
                  "end": 1580
                },
                "prefix": true,
                "start": 1572,
                "end": 1580
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1584,
                "end": 1592
              },
              "start": 1572,
              "end": 1592
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1604,
                    "end": 1605
                  },
                  "directive": null,
                  "start": 1604,
                  "end": 1606
                }
              ],
              "start": 1594,
              "end": 1657
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1677,
                    "end": 1678
                  },
                  "directive": null,
                  "start": 1677,
                  "end": 1679
                }
              ],
              "start": 1667,
              "end": 1719
            },
            "start": 1568,
            "end": 1719
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1736,
                          "end": 1742
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1745,
                          "end": 1751
                        }
                      ],
                      "start": 1736,
                      "end": 1751
                    },
                    "start": 1734,
                    "end": 1751
                  },
                  "start": 1730,
                  "end": 1751
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1754,
                  "end": 1755
                },
                "definite": false,
                "start": 1730,
                "end": 1755
              }
            ],
            "declare": false,
            "start": 1724,
            "end": 1756
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1765
            },
            "directive": null,
            "start": 1761,
            "end": 1766
          }
        ],
        "start": 1562,
        "end": 1788
      },
      "expression": false,
      "start": 1500,
      "end": 1788
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1799,
        "end": 1804
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
              "start": 1805,
              "end": 1806
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1815,
                "end": 1816
              },
              "typeArguments": null,
              "start": 1815,
              "end": 1816
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1805,
            "end": 1816
          }
        ],
        "start": 1804,
        "end": 1817
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 1821,
                  "end": 1822
                },
                "typeArguments": null,
                "start": 1821,
                "end": 1822
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1831,
                  "end": 1832
                },
                "typeArguments": null,
                "start": 1831,
                "end": 1832
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1835,
                "end": 1841
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1844,
                "end": 1850
              },
              "start": 1821,
              "end": 1850
            },
            "start": 1819,
            "end": 1850
          },
          "start": 1818,
          "end": 1850
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1869,
                  "end": 1870
                },
                "prefix": true,
                "start": 1862,
                "end": 1870
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1874,
                "end": 1882
              },
              "start": 1862,
              "end": 1882
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1894,
                    "end": 1895
                  },
                  "directive": null,
                  "start": 1894,
                  "end": 1896
                }
              ],
              "start": 1884,
              "end": 1947
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1967,
                    "end": 1968
                  },
                  "directive": null,
                  "start": 1967,
                  "end": 1969
                }
              ],
              "start": 1957,
              "end": 2009
            },
            "start": 1858,
            "end": 2009
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2026,
                          "end": 2032
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2035,
                          "end": 2041
                        }
                      ],
                      "start": 2026,
                      "end": 2041
                    },
                    "start": 2024,
                    "end": 2041
                  },
                  "start": 2020,
                  "end": 2041
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2044,
                  "end": 2045
                },
                "definite": false,
                "start": 2020,
                "end": 2045
              }
            ],
            "declare": false,
            "start": 2014,
            "end": 2046
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 2051,
              "end": 2055
            },
            "directive": null,
            "start": 2051,
            "end": 2056
          }
        ],
        "start": 1852,
        "end": 2078
      },
      "expression": false,
      "start": 1790,
      "end": 2078
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2078
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
    "value": "IsArray",
    "start": 5,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 20,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 38,
    "end": 39
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 69,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "IsArray",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "IsArray",
    "start": 205,
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
    "value": "T",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 251,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 275,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 284,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 289,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
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
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "IsArray",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 380,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 389,
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
    "value": "T",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 394,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 402,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "IsArray",
    "start": 415,
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
    "value": "T",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
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
    "type": "Identifier",
    "value": "type",
    "start": 486,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "ZeroOf",
    "start": 491,
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
    "value": ">",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 509,
    "end": 516
  },
  {
    "type": "Null",
    "value": "null",
    "start": 517,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 522,
    "end": 523
  },
  {
    "type": "Null",
    "value": "null",
    "start": 524,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 537,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 545,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 557,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 575,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 590,
    "end": 591
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 603,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 618,
    "end": 619
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 630,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 638,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 646,
    "end": 647
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 668,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "ZeroOf",
    "start": 698,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 715,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 725,
    "end": 726
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 729,
    "end": 730
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 731,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 745,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 761,
    "end": 768
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 769,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 775,
    "end": 776
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 780,
    "end": 781
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 789,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 797,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 812,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 820,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 831,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 845,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 852,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 907,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 928,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 936,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 957,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 965,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 979,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 992,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1007,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 1016,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1024,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1040,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1075,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1091,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1196,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "newY",
    "start": 1202,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1208,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1217,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "newY",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1253,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 1262,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1270,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1286,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1321,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1337,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1380,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1442,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "newY",
    "start": 1448,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1454,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1463,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "newY",
    "start": 1479,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1500,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 1509,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1517,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1533,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1545,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1554,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1572,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1584,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1662,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1724,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "newY",
    "start": 1730,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1736,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1745,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "newY",
    "start": 1761,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1790,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 1799,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1807,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1823,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1844,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1858,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1862,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1871,
    "end": 1873
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1874,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1952,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2014,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "newY",
    "start": 2020,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2026,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2035,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "newY",
    "start": 2051,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2077,
    "end": 2078
  }
]
```

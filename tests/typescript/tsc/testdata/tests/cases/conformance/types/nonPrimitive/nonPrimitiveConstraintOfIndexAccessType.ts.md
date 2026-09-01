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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
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
              "start": 30,
              "end": 31
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 40,
              "end": 46
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 30,
            "end": 46
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
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
                  "start": 64,
                  "end": 65
                },
                "typeArguments": null,
                "start": 64,
                "end": 65
              },
              "start": 58,
              "end": 65
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 65
          }
        ],
        "start": 29,
        "end": 66
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "start": 68,
            "end": 76
          },
          "start": 67,
          "end": 76
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 82,
                  "end": 83
                },
                "typeArguments": null,
                "start": 82,
                "end": 83
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 82,
              "end": 86
            },
            "start": 80,
            "end": 86
          },
          "start": 78,
          "end": 86
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 89,
          "end": 93
        },
        "start": 87,
        "end": 93
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 102
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 106
              },
              "start": 100,
              "end": 106
            },
            "directive": null,
            "start": 100,
            "end": 107
          }
        ],
        "start": 94,
        "end": 109
      },
      "expression": false,
      "start": 19,
      "end": 109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 120
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
              "start": 121,
              "end": 122
            },
            "constraint": {
              "type": "TSNullKeyword",
              "start": 131,
              "end": 135
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 135
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
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
                  "start": 153,
                  "end": 154
                },
                "typeArguments": null,
                "start": 153,
                "end": 154
              },
              "start": 147,
              "end": 154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 154
          }
        ],
        "start": 120,
        "end": 155
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 159,
              "end": 165
            },
            "start": 157,
            "end": 165
          },
          "start": 156,
          "end": 165
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 171,
                  "end": 172
                },
                "typeArguments": null,
                "start": 171,
                "end": 172
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "typeArguments": null,
                "start": 173,
                "end": 174
              },
              "start": 171,
              "end": 175
            },
            "start": 169,
            "end": 175
          },
          "start": 167,
          "end": 175
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 178,
          "end": 182
        },
        "start": 176,
        "end": 182
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 191
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "start": 189,
              "end": 195
            },
            "directive": null,
            "start": 189,
            "end": 196
          }
        ],
        "start": 183,
        "end": 198
      },
      "expression": false,
      "start": 110,
      "end": 198
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 209
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
              "start": 210,
              "end": 211
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 220,
              "end": 229
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 210,
            "end": 229
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
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
                  "start": 247,
                  "end": 248
                },
                "typeArguments": null,
                "start": 247,
                "end": 248
              },
              "start": 241,
              "end": 248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 248
          }
        ],
        "start": 209,
        "end": 249
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 253,
              "end": 259
            },
            "start": 251,
            "end": 259
          },
          "start": 250,
          "end": 259
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 265,
                  "end": 266
                },
                "typeArguments": null,
                "start": 265,
                "end": 266
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 268
                },
                "typeArguments": null,
                "start": 267,
                "end": 268
              },
              "start": 265,
              "end": 269
            },
            "start": 263,
            "end": 269
          },
          "start": 261,
          "end": 269
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 272,
          "end": 276
        },
        "start": 270,
        "end": 276
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 285
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 289
              },
              "start": 283,
              "end": 289
            },
            "directive": null,
            "start": 283,
            "end": 290
          }
        ],
        "start": 277,
        "end": 292
      },
      "expression": false,
      "start": 199,
      "end": 292
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 303
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
              "start": 304,
              "end": 305
            },
            "constraint": {
              "type": "TSVoidKeyword",
              "start": 314,
              "end": 318
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 304,
            "end": 318
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
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
                  "start": 336,
                  "end": 337
                },
                "typeArguments": null,
                "start": 336,
                "end": 337
              },
              "start": 330,
              "end": 337
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 320,
            "end": 337
          }
        ],
        "start": 303,
        "end": 338
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 342,
              "end": 348
            },
            "start": 340,
            "end": 348
          },
          "start": 339,
          "end": 348
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 354,
                  "end": 355
                },
                "typeArguments": null,
                "start": 354,
                "end": 355
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 357
                },
                "typeArguments": null,
                "start": 356,
                "end": 357
              },
              "start": 354,
              "end": 358
            },
            "start": 352,
            "end": 358
          },
          "start": 350,
          "end": 358
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 361,
          "end": 365
        },
        "start": 359,
        "end": 365
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 374
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 378
              },
              "start": 372,
              "end": 378
            },
            "directive": null,
            "start": 372,
            "end": 379
          }
        ],
        "start": 366,
        "end": 381
      },
      "expression": false,
      "start": 293,
      "end": 381
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 392
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
              "start": 393,
              "end": 394
            },
            "constraint": {
              "type": "TSNeverKeyword",
              "start": 403,
              "end": 408
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 393,
            "end": 408
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
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
                  "start": 426,
                  "end": 427
                },
                "typeArguments": null,
                "start": 426,
                "end": 427
              },
              "start": 420,
              "end": 427
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 427
          }
        ],
        "start": 392,
        "end": 428
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 432,
              "end": 438
            },
            "start": 430,
            "end": 438
          },
          "start": 429,
          "end": 438
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 444,
                  "end": 445
                },
                "typeArguments": null,
                "start": 444,
                "end": 445
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "typeArguments": null,
                "start": 446,
                "end": 447
              },
              "start": 444,
              "end": 448
            },
            "start": 442,
            "end": 448
          },
          "start": 440,
          "end": 448
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 451,
          "end": 455
        },
        "start": 449,
        "end": 455
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 464
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "start": 462,
              "end": 468
            },
            "directive": null,
            "start": 462,
            "end": 469
          }
        ],
        "start": 456,
        "end": 471
      },
      "expression": false,
      "start": 382,
      "end": 471
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 482
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
              "start": 483,
              "end": 484
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 493,
              "end": 499
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 483,
            "end": 499
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 502
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
                  "start": 517,
                  "end": 518
                },
                "typeArguments": null,
                "start": 517,
                "end": 518
              },
              "start": 511,
              "end": 518
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 501,
            "end": 518
          }
        ],
        "start": 482,
        "end": 519
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 523,
              "end": 529
            },
            "start": 521,
            "end": 529
          },
          "start": 520,
          "end": 529
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 535,
                  "end": 536
                },
                "typeArguments": null,
                "start": 535,
                "end": 536
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 538
                },
                "typeArguments": null,
                "start": 537,
                "end": 538
              },
              "start": 535,
              "end": 539
            },
            "start": 533,
            "end": 539
          },
          "start": 531,
          "end": 539
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 542,
          "end": 546
        },
        "start": 540,
        "end": 546
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 555
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 559
              },
              "start": 553,
              "end": 559
            },
            "directive": null,
            "start": 553,
            "end": 560
          }
        ],
        "start": 547,
        "end": 562
      },
      "expression": false,
      "start": 472,
      "end": 562
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 573
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
              "start": 574,
              "end": 575
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 584,
              "end": 590
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 574,
            "end": 590
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 593
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
                  "start": 608,
                  "end": 609
                },
                "typeArguments": null,
                "start": 608,
                "end": 609
              },
              "start": 602,
              "end": 609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 592,
            "end": 609
          }
        ],
        "start": 573,
        "end": 610
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 614,
              "end": 620
            },
            "start": 612,
            "end": 620
          },
          "start": 611,
          "end": 620
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 626,
                  "end": 627
                },
                "typeArguments": null,
                "start": 626,
                "end": 627
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 629
                },
                "typeArguments": null,
                "start": 628,
                "end": 629
              },
              "start": 626,
              "end": 630
            },
            "start": 624,
            "end": 630
          },
          "start": 622,
          "end": 630
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 633,
          "end": 637
        },
        "start": 631,
        "end": 637
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 646
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 650
              },
              "start": 644,
              "end": 650
            },
            "directive": null,
            "start": 644,
            "end": 651
          }
        ],
        "start": 638,
        "end": 653
      },
      "expression": false,
      "start": 563,
      "end": 653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "l",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 664
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
              "start": 665,
              "end": 666
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 675,
              "end": 677
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 665,
            "end": 677
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 679,
              "end": 680
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
                  "start": 695,
                  "end": 696
                },
                "typeArguments": null,
                "start": 695,
                "end": 696
              },
              "start": 689,
              "end": 696
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 679,
            "end": 696
          }
        ],
        "start": 664,
        "end": 697
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 701,
              "end": 707
            },
            "start": 699,
            "end": 707
          },
          "start": 698,
          "end": 707
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 713,
                  "end": 714
                },
                "typeArguments": null,
                "start": 713,
                "end": 714
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 716
                },
                "typeArguments": null,
                "start": 715,
                "end": 716
              },
              "start": 713,
              "end": 717
            },
            "start": 711,
            "end": 717
          },
          "start": 709,
          "end": 717
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 720,
          "end": 724
        },
        "start": 718,
        "end": 724
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 733
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "start": 731,
              "end": 737
            },
            "directive": null,
            "start": 731,
            "end": 738
          }
        ],
        "start": 725,
        "end": 740
      },
      "expression": false,
      "start": 654,
      "end": 740
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 751
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
              "start": 752,
              "end": 753
            },
            "constraint": {
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
                    "start": 764,
                    "end": 765
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 767,
                      "end": 773
                    },
                    "start": 765,
                    "end": 773
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 764,
                  "end": 773
                }
              ],
              "start": 762,
              "end": 775
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 752,
            "end": 775
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 778
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
                  "start": 793,
                  "end": 794
                },
                "typeArguments": null,
                "start": 793,
                "end": 794
              },
              "start": 787,
              "end": 794
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 777,
            "end": 794
          }
        ],
        "start": 751,
        "end": 795
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 799,
              "end": 805
            },
            "start": 797,
            "end": 805
          },
          "start": 796,
          "end": 805
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 811,
                  "end": 812
                },
                "typeArguments": null,
                "start": 811,
                "end": 812
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 813,
                  "end": 814
                },
                "typeArguments": null,
                "start": 813,
                "end": 814
              },
              "start": 811,
              "end": 815
            },
            "start": 809,
            "end": 815
          },
          "start": 807,
          "end": 815
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 818,
          "end": 822
        },
        "start": 816,
        "end": 822
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 829,
                "end": 831
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 834,
                "end": 835
              },
              "start": 829,
              "end": 835
            },
            "directive": null,
            "start": 829,
            "end": 836
          }
        ],
        "start": 823,
        "end": 838
      },
      "expression": false,
      "start": 741,
      "end": 838
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 849
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
              "start": 850,
              "end": 851
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 866,
                          "end": 872
                        },
                        "start": 864,
                        "end": 872
                      },
                      "start": 863,
                      "end": 872
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 875,
                      "end": 881
                    },
                    "start": 873,
                    "end": 881
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 862,
                  "end": 881
                }
              ],
              "start": 860,
              "end": 883
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 850,
            "end": 883
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 886
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
                  "start": 901,
                  "end": 902
                },
                "typeArguments": null,
                "start": 901,
                "end": 902
              },
              "start": 895,
              "end": 902
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 885,
            "end": 902
          }
        ],
        "start": 849,
        "end": 903
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 907,
              "end": 913
            },
            "start": 905,
            "end": 913
          },
          "start": 904,
          "end": 913
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tp",
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
                  "start": 919,
                  "end": 920
                },
                "typeArguments": null,
                "start": 919,
                "end": 920
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 922
                },
                "typeArguments": null,
                "start": 921,
                "end": 922
              },
              "start": 919,
              "end": 923
            },
            "start": 917,
            "end": 923
          },
          "start": 915,
          "end": 923
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 926,
          "end": 930
        },
        "start": 924,
        "end": 930
      },
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
                "name": "tp",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 939
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 942,
                "end": 943
              },
              "start": 937,
              "end": 943
            },
            "directive": null,
            "start": 937,
            "end": 944
          }
        ],
        "start": 931,
        "end": 946
      },
      "expression": false,
      "start": 839,
      "end": 946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 946
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 32,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 40,
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
    "value": "P",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 50,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 110,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130
  },
  {
    "type": "Null",
    "value": "null",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 199,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 212,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 220,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "value": "keyof",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 272,
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
    "value": "tp",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 293,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 306,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 322,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 382,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 395,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 403,
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
    "value": "P",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 412,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 420,
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
    "value": ">",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 472,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 485,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 493,
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
    "value": "P",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 503,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 511,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 531,
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
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 563,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 576,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 594,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 602,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 654,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 663,
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
    "value": "T",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 667,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 681,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 689,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Identifier",
    "value": "string",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 731,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 741,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 779,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 787,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 799,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 839,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 852,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 875,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 887,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 895,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 907,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "tp",
    "start": 915,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 926,
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
    "value": "tp",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  }
]
```
